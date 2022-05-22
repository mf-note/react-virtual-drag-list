import * as React from 'react'
import { useRef, useState, useEffect, useLayoutEffect } from 'react'

import type { RenderFunc, GetKey } from './interface'
import { Item, Slot } from './children'
import { debounce } from './utils'
import Virtual from './virtual'
import Sortable from './sortable'

const CALLBACKS = { top: 'v-top', bottom: 'v-bottom', dragend: 'v-dragend' } // 组件传入的事件回调

export interface VirtualProps<T> {
  dataSource: T[];
  dataKey: string;
  direction?: string; // scroll direction
  keeps?: number; // the number of lines rendered by the virtual scroll
  size?: number; // estimated height of each row

  delay?: number; // Delay time of debounce function
  height?: string; // list wrapper height

  rootStyle?: object;
  rootClass?: string;
  wrapStyle?: object;
  wrapClass?: string;

  disabled?: boolean; // Disables the sortable if set to true
  draggable?: Function | string; // Specifies which items inside the element should be draggable, the function type must return a boolean
  dragging?: Function; // Specifies the drag element, which must return an HTMLElement, such as (e) => e.target

  ghostStyle?: object; // The style of the mask element when dragging
  ghostClass?: string; // The class of the mask element when dragging
  chosenClass?: string; // The class of the selected element when dragging
  animation?: number; // Animation time
  
  children: RenderFunc<T>;
  header: RenderFunc<T>;
  footer: RenderFunc<T>;

  'v-top'?: Function;
  'v-bottom'?: Function;
  'v-dragend'?: Function;
}

export function VirtualDragList<T>(props: VirtualProps<T>, ref: React.ref) {
  const {
    header,
    footer,
    children,

    dataSource = [],
    dataKey,
    direction = 'vertical',
    keeps = 30,
    size = 50,

    height = '100%',
    delay = 0,

    rootStyle = {},
    rootClass = '',
    wrapStyle = {},
    wrapClass = '',
    
    disabled = false,
    draggable = undefined,
    dragging = undefined,
    ghostClass = '',
    ghostStyle = {},
    chosenClass = '',
    animation = 150
  } = props

  // =============================== State ===============================
  const [list, setList] = useState([])
  const cloneList = useRef([])
  const uniqueKeys = useRef([])

  const [range, setRange] = useState({ start: 0, end: keeps - 1, front: 0, behind: 0 }) // 当前可见范围

  const root_ref = useRef<Element>(null)
  const wrap_ref = useRef<Element>(null) // 列表ref
  const last_ref = useRef<Element>(null) // 列表元素外的dom，总是存在于列表最后

  const sortable = useRef<Sortable<T>>(null)
  const virtual = useRef<Virtual<T>>(null)

  // =============================== ref methods ===============================
  /**
   * reset component
   */
  const reset = () => {
    scrollToTop()
    setList(() => [...dataSource])
    cloneList.current = [...dataSource]
  }
  /**
   * git item size by data-key
   * @param {String | Number} key data-key 
   */
  const getSize = (key) => {
    return virtual.current.sizes.get(key)
  }
  /**
   * Get the current scroll height
   */
  const getOffset = () => {
    const root = root_ref.current
    return root ? Math.ceil(root[scrollDirectionKey]) : 0
  }
  /**
   * Scroll to the specified offset
   * @param {Number} offset 
   */
  const scrollToOffset = (offset) => {
    root_ref.current[scrollDirectionKey] = offset
  }
  /**
   * Scroll to the specified index position
   * @param {Number} index 
   */
  const scrollToIndex = (index) => {
    if (index >= dataSource.length - 1) {
      scrollToBottom()
    } else {
      const indexOffset = virtual.current.getOffsetByIndex(index)
      scrollToOffset(indexOffset)

      setTimeout(() => {
        const offset = getOffset()
        const indexOffset = virtual.current.getOffsetByIndex(index)
        if (offset !== indexOffset) scrollToIndex(index)
      }, 5)
    }
  }
  /**
   * Scroll to top of list
   */
  const scrollToTop = () => {
    root_ref.current[scrollDirectionKey] = 0
  }
  /**
   * Scroll to bottom of list
   */
  const scrollToBottom = () => {
    if (last_ref.current) {
      const offset = last_ref.current[offsetSizeKey]
      root_ref.current.scrollTop = offset

      // 第一次滚动高度可能会发生改变，如果没到底部再执行一次滚动方法
      setTimeout(() => {
        const root = root_ref.current
        const offset = getOffset()
        const clientSize = Math.ceil(root[clientSizeKey])
        const scrollSize = Math.ceil(root[scrollSizeKey])
        if (offset + clientSize < scrollSize) scrollToBottom()
      }, 5)
    }
  }

  React.useImperativeHandle(ref, () => ({
    reset,
    getSize,
    getOffset,
    scrollToTop,
    scrollToIndex,
    scrollToOffset,
    scrollToBottom,
  }))

  // =============================== init ===============================
  useEffect(() => {
    cloneList.current = [...dataSource]
    setUniqueKeys()

    virtual.current = new Virtual(
      {
        size,
        keeps,
        uniqueKeys: uniqueKeys.current,
        isHorizontal: direction === 'vertical'
      },
      (changedRange) => {
        setRange(() => changedRange)
        sortable.current.set('rangeIsChanged', true)
      }
    )
    virtual.current.updateRange()
    virtual.current.updateSizes(uniqueKeys.current)

    if (sortable.current) sortable.current.set('dataSource', dataSource)

    setList(() => [...dataSource])
  }, [dataSource])

  const { scrollSizeKey, scrollDirectionKey, offsetSizeKey, clientSizeKey } = React.useMemo(() => {
    const isHorizontal = direction !== 'vertical'
    return {
      offsetSizeKey: isHorizontal ? 'offsetLeft' : 'offsetTop',
      scrollSizeKey: isHorizontal ? 'scrollWidth' : 'scrollHeight',
      clientSizeKey: isHorizontal ? 'clientWidth' : 'clientHeight',
      scrollDirectionKey: isHorizontal ? 'scrollLeft' : 'scrollTop',
    }
  }, [direction])

  // =============================== sortable ===============================
  const initDraggable = () => {
    destroyDraggable()
    sortable.current = new Sortable(
      {
        getKey,
        scrollEl: wrap_ref.current,
        dataSource: cloneList.current,
        disabled,
        draggable,
        dragging,
        ghostStyle,
        ghostClass,
        chosenClass,
        animation,
      },
      (list, from, to, changed) => {
        const callback = props[CALLBACKS.dragend]
        callback && callback(list, from, to, changed)
        cloneList.current = [...list]
        setList(() => [...list])
        setUniqueKeys()
      }
    )
  }

  const destroyDraggable = () => {
    sortable.current && sortable.current.destroy()
    sortable.current = null
  }

  useLayoutEffect(() => {
    if (draggable) {
      initDraggable()
    } else {
      destroyDraggable()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draggable])

  useEffect(() => {
    return () => {
      destroyDraggable()
    }
  }, [])

  // =============================== methods ===============================
  const setUniqueKeys = () => {
    uniqueKeys.current = cloneList.current.map(item => getKey(item))
  }

  const getItemIndex = (item) => {
    return cloneList.current.findIndex(el => getKey(el) === getKey(item))
  }

  // 获取 item 中的 dateKey 值
  const getKey = React.useCallback<GetKey<T>>(
    (item: T) => {
      return (
        dataKey.replace(/\[/g, '.').replace(/\]/g, '').split('.').reduce((o, k) => (o || {})[k], item)
      ) || ''
    },
    [dataKey]
  )

  // =============================== Scroll ===============================
  const handleScroll = (e: any) => {
    const root = root_ref.current
    const offset = getOffset()
    const clientSize = Math.ceil(root[clientSizeKey])
    const scrollSize = Math.ceil(root[scrollSizeKey])
    // 如果不存在滚动元素 | 滚动高度小于0 | 超出最大滚动距离
    if (offset < 0 || (offset + clientSize > scrollSize + 1) || !scrollSize) return

    virtual.current.handleScroll(offset)
    // 判断当前应该触发的回调函数，滚动到顶部时触发 `v-top`，滚动到底部时触发 `v-bottom`
    if (virtual.current.isFront()) {
      if (!!dataSource.length && offset <= 0) handleToTop()
    } else if (virtual.current.isBehind()) {
      if (clientSize + offset >= scrollSize) handleToBottom()
    }
  }

  const handleToTop = () => {
    return debounce(() => {
      const callback = props[CALLBACKS.top]
      callback && callback()
    })
  }

  const handleToBottom = () => {
    return debounce(() => {
      const callback = props[CALLBACKS.bottom]
      callback && callback()
    })
  }

  // ======================= size observe =======================
  const onItemSizeChange = (key: string | number, size: number) => {
    virtual.current.handleItemSizeChange(key, size)
  }

  const onSlotSizeChange = (key: string | number, size: number) => {
    if (key === 'header') virtual.current.handleHeaderSizeChange(size)
    if (key === 'footer') virtual.current.handleFooterSizeChange(size)
  }

  // ================================ Render ================================
  const { start, end, front, behind } = React.useMemo(() => {
    return { ...range }
  }, [range])

  const RootStyle = { ...rootStyle, height, overflow: direction !== 'vertical' ? 'auto hidden' : 'hidden auto' }
  const WrapStyle = { ...wrapStyle, padding: direction !== 'vertical' ? `0px ${behind}px 0px ${front}px` : `${front}px 0px ${behind}px` }
  return (
    <div ref={ root_ref } className={ rootClass } style={ RootStyle } onScroll={ debounce(handleScroll, delay) }>

      <Slot children={ header } roleId="header" onSizeChange={ onSlotSizeChange }></Slot>

      <div ref={ wrap_ref } v-role="content" className={ wrapClass } style={ WrapStyle }>
        {
          list.slice(start, end + 1).map(item => {
            const key = getKey(item)
            const index = getItemIndex(item)
            return (
              <Item
                key={ key }
                uniqueKey={ key }
                children={ children }
                record={ item }
                index={ index }
                onSizeChange={ onItemSizeChange }
              />
            )
          })
        }
      </div>

      <Slot children={ footer } roleId="footer" onSizeChange={ onSlotSizeChange }></Slot>
      <div ref={ last_ref }></div>
    </div>
  )
}

export default React.forwardRef(VirtualDragList)