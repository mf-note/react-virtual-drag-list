/*!
 * react-virtual-drag-list v2.3.0
 * open source under the MIT license
 * https://github.com/mfuu/react-virtual-drag-list#readme
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.virtualDragList = {}, global.React));
})(this, (function (exports, React) { 'use strict';

	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () { return e[k]; }
					});
				}
			});
		}
		n["default"] = e;
		return Object.freeze(n);
	}

	var React__namespace = /*#__PURE__*/_interopNamespace(React);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var sortable = createCommonjsModule(function (module, exports) {
	/*!
	 * sortable-dnd v0.1.0
	 * open source under the MIT license
	 * https://github.com/mfuu/sortable-dnd#readme
	 */
	(function (global, factory) {
	  module.exports = factory() ;
	})(commonjsGlobal, function () {

	  function _typeof(obj) {
	    "@babel/helpers - typeof";

	    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
	      return typeof obj;
	    } : function (obj) {
	      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    }, _typeof(obj);
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    Object.defineProperty(Constructor, "prototype", {
	      writable: false
	    });
	    return Constructor;
	  }

	  function _toConsumableArray(arr) {
	    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
	  }

	  function _arrayWithoutHoles(arr) {
	    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
	  }

	  function _iterableToArray(iter) {
	    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
	  }

	  function _unsupportedIterableToArray(o, minLen) {
	    if (!o) return;
	    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	    var n = Object.prototype.toString.call(o).slice(8, -1);
	    if (n === "Object" && o.constructor) n = o.constructor.name;
	    if (n === "Map" || n === "Set") return Array.from(o);
	    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	  }

	  function _arrayLikeToArray(arr, len) {
	    if (len == null || len > arr.length) len = arr.length;

	    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

	    return arr2;
	  }

	  function _nonIterableSpread() {
	    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }

	  function userAgent(pattern) {
	    if (typeof window !== 'undefined' && window.navigator) {
	      return !! /*@__PURE__*/navigator.userAgent.match(pattern);
	    }
	  }

	  var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
	  var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
	  var IOS = userAgent(/iP(ad|od|hone)/i);
	  var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
	  var captureMode = {
	    capture: false,
	    passive: false
	  };
	  var R_SPACE = /\s+/g;
	  /**
	   * detect passive event support
	   */

	  function supportPassive() {
	    // https://github.com/Modernizr/Modernizr/issues/1894
	    var supportPassive = false;
	    document.addEventListener('checkIfSupportPassive', null, {
	      get passive() {
	        supportPassive = true;
	        return true;
	      }

	    });
	    return supportPassive;
	  }
	  /**
	  * add specified event listener
	  * @param {HTMLElement} el 
	  * @param {String} event 
	  * @param {Function} fn 
	  * @param {Boolean} sp
	  */


	  function on(el, event, fn, sp) {
	    if (window.addEventListener) {
	      el.addEventListener(event, fn, sp || !IE11OrLess ? captureMode : false);
	    } else if (window.attachEvent) {
	      el.attachEvent('on' + event, fn);
	    }
	  }
	  /**
	  * remove specified event listener
	  * @param {HTMLElement} el 
	  * @param {String} event 
	  * @param {Function} fn 
	  * @param {Boolean} sp
	  */


	  function off(el, event, fn, sp) {
	    if (window.removeEventListener) {
	      el.removeEventListener(event, fn, sp || !IE11OrLess ? captureMode : false);
	    } else if (window.detachEvent) {
	      el.detachEvent('on' + event, fn);
	    }
	  }
	  /**
	   * get element's offetTop
	   * @param {HTMLElement} el 
	   */


	  function getOffset(el) {
	    var result = {
	      top: 0,
	      left: 0,
	      height: 0,
	      width: 0
	    };
	    result.height = el.offsetHeight;
	    result.width = el.offsetWidth;
	    result.top = el.offsetTop;
	    result.left = el.offsetLeft;
	    var parent = el.offsetParent;

	    while (parent !== null) {
	      result.top += parent.offsetTop;
	      result.left += parent.offsetLeft;
	      parent = parent.offsetParent;
	    }

	    return result;
	  }
	  /**
	   * get scroll element
	   * @param {HTMLElement} el 
	   * @param {Boolean} includeSelf whether to include the passed element
	   * @returns {HTMLElement} scroll element
	   */


	  function getParentAutoScrollElement(el, includeSelf) {
	    // skip to window
	    if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
	    var elem = el;
	    var gotSelf = false;

	    do {
	      // we don't need to get elem css if it isn't even overflowing in the first place (performance)
	      if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
	        var elemCSS = css(elem);

	        if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
	          if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
	          if (gotSelf || includeSelf) return elem;
	          gotSelf = true;
	        }
	      }
	    } while (elem = elem.parentNode);

	    return getWindowScrollingElement();
	  }

	  function getWindowScrollingElement() {
	    var scrollingElement = document.scrollingElement;

	    if (scrollingElement) {
	      return scrollingElement;
	    } else {
	      return document.documentElement;
	    }
	  }
	  /**
	   * Returns the "bounding client rect" of given element
	   * @param {HTMLElement} el  The element whose boundingClientRect is wanted
	   */


	  function getRect(el) {
	    if (!el.getBoundingClientRect && el !== window) return;
	    var rect = {
	      top: 0,
	      left: 0,
	      bottom: 0,
	      right: 0,
	      height: 0,
	      width: 0
	    };
	    var elRect;

	    if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
	      elRect = el.getBoundingClientRect();
	      rect.top = elRect.top;
	      rect.left = elRect.left;
	      rect.bottom = elRect.bottom;
	      rect.right = elRect.right;
	      rect.height = elRect.height;
	      rect.width = elRect.width;
	    } else {
	      rect.top = 0;
	      rect.left = 0;
	      rect.bottom = window.innerHeight;
	      rect.right = window.innerWidth;
	      rect.height = window.innerHeight;
	      rect.width = window.innerWidth;
	    }

	    return rect;
	  }
	  /**
	   * get target Element in group
	   * @param {HTMLElement} group 
	   * @param {HTMLElement} el 
	   */


	  function getElement(group, el) {
	    var result = {
	      index: -1,
	      el: null,
	      rect: {},
	      offset: {}
	    };

	    var children = _toConsumableArray(Array.from(group.children)); // 如果能直接在子元素中找到，返回对应的index


	    var index = children.indexOf(el);
	    if (index > -1) Object.assign(result, {
	      index: index,
	      el: children[index],
	      rect: getRect(children[index]),
	      offset: getOffset(children[index])
	    }); // children 中无法直接找到对应的dom时，需要向下寻找

	    for (var i = 0; i < children.length; i++) {
	      if (isChildOf(el, children[i])) {
	        Object.assign(result, {
	          index: i,
	          el: children[i],
	          rect: getRect(children[i]),
	          offset: getOffset(children[i])
	        });
	        break;
	      }
	    }

	    return result;
	  }
	  /**
	   * Check if child element is contained in parent element
	   * @param {HTMLElement} child 
	   * @param {HTMLElement} parent 
	   * @returns {Boolean} true | false
	   */


	  function isChildOf(child, parent) {
	    var parentNode;

	    if (child && parent) {
	      parentNode = child.parentNode;

	      while (parentNode) {
	        if (parent === parentNode) return true;
	        parentNode = parentNode.parentNode;
	      }
	    }

	    return false;
	  }
	  /**
	   * add or remove element's class
	   * @param {HTMLElement} el element
	   * @param {String} name class name
	   * @param {Boolean} state true: add, false: remove
	   */


	  function toggleClass(el, name, state) {
	    if (el && name) {
	      if (el.classList) {
	        el.classList[state ? 'add' : 'remove'](name);
	      } else {
	        var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
	        el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
	      }
	    }
	  }
	  /**
	   * Check if a DOM element matches a given selector
	   * @param {HTMLElement} el 
	   * @param {String} selector 
	   * @returns 
	   */


	  function matches(el, selector) {
	    if (!selector) return;
	    selector[0] === '>' && (selector = selector.substring(1));

	    if (el) {
	      try {
	        if (el.matches) {
	          return el.matches(selector);
	        } else if (el.msMatchesSelector) {
	          return el.msMatchesSelector(selector);
	        } else if (el.webkitMatchesSelector) {
	          return el.webkitMatchesSelector(selector);
	        }
	      } catch (error) {
	        return false;
	      }
	    }

	    return false;
	  }

	  function css(el, prop, val) {
	    var style = el && el.style;

	    if (style) {
	      if (val === void 0) {
	        if (document.defaultView && document.defaultView.getComputedStyle) {
	          val = document.defaultView.getComputedStyle(el, '');
	        } else if (el.currentStyle) {
	          val = el.currentStyle;
	        }

	        return prop === void 0 ? val : val[prop];
	      } else {
	        if (!(prop in style) && prop.indexOf('webkit') === -1) {
	          prop = '-webkit-' + prop;
	        }

	        style[prop] = val + (typeof val === 'string' ? '' : 'px');
	      }
	    }
	  }

	  function _nextTick(fn) {
	    return setTimeout(fn, 0);
	  }

	  var CSS_TRANSITIONS = ['-webkit-transition', '-moz-transition', '-ms-transition', '-o-transition', 'transition'];
	  var CSS_TRANSFORMS = ['-webkit-transform', '-moz-transform', '-ms-transform', '-o-transform', 'transform'];

	  function Animation() {
	    var animationState = [];
	    return {
	      captureAnimationState: function captureAnimationState() {
	        var children = _toConsumableArray(Array.from(this.$el.children));

	        var _getRange = getRange(children, this.dragEl, this.dropEl),
	            start = _getRange.start,
	            end = _getRange.end;

	        animationState.length = 0; // 重置

	        children.slice(start, end + 1).forEach(function (child) {
	          animationState.push({
	            target: child,
	            rect: getRect(child)
	          });
	        });
	      },
	      animateRange: function animateRange() {
	        var _this = this;

	        animationState.forEach(function (state) {
	          var target = state.target,
	              rect = state.rect;

	          _this.animate(target, rect, _this.animation);
	        });
	      },
	      animate: function animate(el, preRect) {
	        var animation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 150;
	        var curRect = getRect(el);
	        var left = preRect.left - curRect.left;
	        var top = preRect.top - curRect.top;
	        CSS_TRANSITIONS.forEach(function (ts) {
	          return css(el, ts, 'none');
	        });
	        CSS_TRANSFORMS.forEach(function (tf) {
	          return css(el, tf, "".concat(tf.split('transform')[0], "translate3d(").concat(left, "px, ").concat(top, "px, 0)"));
	        });
	        el.offsetLeft; // 触发重绘

	        CSS_TRANSITIONS.forEach(function (ts) {
	          return css(el, ts, "".concat(ts.split('transition')[0], "transform ").concat(animation, "ms"));
	        });
	        CSS_TRANSFORMS.forEach(function (tf) {
	          return css(el, tf, "".concat(tf.split('transform')[0], "translate3d(0px, 0px, 0px)"));
	        });
	        clearTimeout(el.animated);
	        el.animated = setTimeout(function () {
	          CSS_TRANSITIONS.forEach(function (ts) {
	            return css(el, ts, '');
	          });
	          CSS_TRANSFORMS.forEach(function (tf) {
	            return css(el, tf, '');
	          });
	          el.animated = null;
	        }, animation);
	      }
	    };
	  }

	  function getRange(children, drag, drop) {
	    var start = children.indexOf(drag);
	    var end = children.indexOf(drop);
	    return start < end ? {
	      start: start,
	      end: end
	    } : {
	      start: end,
	      end: start
	    };
	  }

	  function DNDEvent() {
	    return {
	      _bindEventListener: function _bindEventListener() {
	        this._onStart = this._onStart.bind(this);
	        this._onMove = this._onMove.bind(this);
	        this._onDrop = this._onDrop.bind(this);
	        var _this$options = this.options,
	            supportPointer = _this$options.supportPointer,
	            supportTouch = _this$options.supportTouch,
	            supportPassive = _this$options.supportPassive;

	        if (supportPointer) {
	          on(this.$el, 'pointerdown', this._onStart, supportPassive);
	        } else if (supportTouch) {
	          on(this.$el, 'touchstart', this._onStart, supportPassive);
	        } else {
	          on(this.$el, 'mousedown', this._onStart, supportPassive);
	        }
	      },
	      _unbindEventListener: function _unbindEventListener() {
	        var supportPassive = this.options.supportPassive;
	        off(this.$el, 'pointerdown', this._onStart, supportPassive);
	        off(this.$el, 'touchstart', this._onStart, supportPassive);
	        off(this.$el, 'mousedown', this._onStart, supportPassive);

	        if (this.nativeDraggable) {
	          off(this.$el, 'dragover', this);
	          off(this.$el, 'dragenter', this);
	        }
	      },
	      _onMoveEvents: function _onMoveEvents(touch) {
	        var _this$options2 = this.options,
	            supportPointer = _this$options2.supportPointer,
	            ownerDocument = _this$options2.ownerDocument,
	            supportPassive = _this$options2.supportPassive;

	        if (supportPointer) {
	          on(ownerDocument, 'pointermove', this._onMove, supportPassive);
	        } else if (touch) {
	          on(ownerDocument, 'touchmove', this._onMove, supportPassive);
	        } else {
	          on(ownerDocument, 'mousemove', this._onMove, supportPassive);
	        }
	      },
	      _onUpEvents: function _onUpEvents() {
	        var _this$options3 = this.options,
	            ownerDocument = _this$options3.ownerDocument,
	            supportPassive = _this$options3.supportPassive;
	        on(ownerDocument, 'pointerup', this._onDrop, supportPassive);
	        on(ownerDocument, 'pointercancel', this._onDrop, supportPassive);
	        on(ownerDocument, 'touchend', this._onDrop, supportPassive);
	        on(ownerDocument, 'touchcancel', this._onDrop, supportPassive);
	        on(ownerDocument, 'mouseup', this._onDrop, supportPassive);
	      },
	      _offMoveEvents: function _offMoveEvents() {
	        var _this$options4 = this.options,
	            ownerDocument = _this$options4.ownerDocument,
	            supportPassive = _this$options4.supportPassive;
	        off(ownerDocument, 'pointermove', this._onMove, supportPassive);
	        off(ownerDocument, 'touchmove', this._onMove, supportPassive);
	        off(ownerDocument, 'mousemove', this._onMove, supportPassive);
	      },
	      _offUpEvents: function _offUpEvents() {
	        var _this$options5 = this.options,
	            ownerDocument = _this$options5.ownerDocument,
	            supportPassive = _this$options5.supportPassive;
	        off(ownerDocument, 'pointerup', this._onDrop, supportPassive);
	        off(ownerDocument, 'pointercancel', this._onDrop, supportPassive);
	        off(ownerDocument, 'touchend', this._onDrop, supportPassive);
	        off(ownerDocument, 'touchcancel', this._onDrop, supportPassive);
	        off(ownerDocument, 'mouseup', this._onDrop, supportPassive);
	      }
	    };
	  }
	  /**
	   * 拖拽前后差异初始化
	   */


	  var Differ = /*#__PURE__*/function () {
	    function Differ() {
	      _classCallCheck(this, Differ);

	      this._old_ = {
	        node: null,
	        rect: {},
	        offset: {}
	      };
	      this._new_ = {
	        node: null,
	        rect: {},
	        offset: {}
	      };
	    }

	    _createClass(Differ, [{
	      key: "get",
	      value: function get(key) {
	        return this[key];
	      }
	    }, {
	      key: "set",
	      value: function set(key, value) {
	        this[key] = value;
	      }
	    }, {
	      key: "destroy",
	      value: function destroy() {
	        this._old_ = {
	          node: null,
	          rect: {},
	          offset: {}
	        };
	        this._new_ = {
	          node: null,
	          rect: {},
	          offset: {}
	        };
	      }
	    }]);

	    return Differ;
	  }();
	  /**
	   * 拖拽中的元素
	   */


	  var Ghost = /*#__PURE__*/function () {
	    function Ghost(options) {
	      _classCallCheck(this, Ghost);

	      this.options = options;
	      this.x = 0;
	      this.y = 0;
	      this.exist = false;
	    }

	    _createClass(Ghost, [{
	      key: "init",
	      value: function init(el, rect) {
	        if (!el) return;
	        this.$el = el;
	        var _this$options = this.options,
	            ghostClass = _this$options.ghostClass,
	            _this$options$ghostSt = _this$options.ghostStyle,
	            ghostStyle = _this$options$ghostSt === void 0 ? {} : _this$options$ghostSt;
	        var width = rect.width,
	            height = rect.height;
	        this.$el["class"] = ghostClass;
	        this.$el.style.width = width + 'px';
	        this.$el.style.height = height + 'px';
	        this.$el.style.transform = '';
	        this.$el.style.transition = '';
	        this.$el.style.position = 'fixed';
	        this.$el.style.left = 0;
	        this.$el.style.top = 0;
	        this.$el.style.zIndex = 100000;
	        this.$el.style.opacity = 0.8;
	        this.$el.style.pointerEvents = 'none';
	        this.$el.style.cursor = 'move';
	        this.setStyle(ghostStyle);
	      }
	    }, {
	      key: "get",
	      value: function get(key) {
	        return this[key];
	      }
	    }, {
	      key: "set",
	      value: function set(key, value) {
	        this[key] = value;
	        this[key] = value;
	      }
	    }, {
	      key: "setStyle",
	      value: function setStyle(style) {
	        for (var key in style) {
	          css(this.$el, key, style[key]);
	        }
	      }
	    }, {
	      key: "rect",
	      value: function rect() {
	        return this.$el.getBoundingClientRect();
	      }
	    }, {
	      key: "move",
	      value: function move() {
	        // 将初始化放在 move 事件中，避免与鼠标点击事件冲突
	        if (!this.exist) {
	          document.body.appendChild(this.$el);
	          this.exist = true;
	        }

	        this.$el.style.transform = "translate3d(".concat(this.x, "px, ").concat(this.y, "px, 0)");
	        if (this.$el.style.cursor !== 'move') this.$el.style.cursor = 'move';
	      }
	    }, {
	      key: "destroy",
	      value: function destroy() {
	        if (this.$el) this.$el.remove();
	        this.exist = false;
	      }
	    }]);

	    return Ghost;
	  }(); // -------------------------------- Sortable ----------------------------------


	  var documentExists = typeof document !== 'undefined';
	  var supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div');
	  /**
	   * @class  Sortable
	   * @param  {HTMLElement}  el
	   * @param  {Object}       options
	   */

	  function Sortable(el, options) {
	    if (!(el && el.nodeType && el.nodeType === 1)) {
	      throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
	    }

	    this.$el = el; // root element

	    this.options = options = Object.assign({}, options);
	    this.scrollEl = getParentAutoScrollElement(this.$el, true); // 获取页面滚动元素

	    this.dragEl = null; // 拖拽元素

	    this.dropEl = null; // 释放元素

	    this.differ = null; // 记录拖拽前后差异

	    this.ghost = null; // 拖拽时蒙版元素

	    this.calcXY = {
	      x: 0,
	      y: 0
	    }; // 记录拖拽移动时坐标

	    var defaults = {
	      disabled: false,
	      // 
	      animation: 150,
	      // 动画延时
	      ghostClass: '',
	      // 拖拽元素Class类名
	      ghostStyle: {},
	      // 拖拽元素样式
	      chosenClass: '',
	      // 选中元素样式
	      draggable: undefined,
	      // String: css selecter, Function: (e) => return true
	      dragging: undefined,
	      // 必须为函数且必须返回一个 HTMLElement: (e) => return e.target
	      dragEnd: undefined,
	      // 拖拽完成时的回调函数: (old, new, changed) => {}
	      forceFallback: false,
	      // 忽略 HTML5拖拽行为，强制回调进行
	      stopPropagation: false,
	      // 阻止捕获和冒泡阶段中当前事件的进一步传播
	      supportPassive: supportPassive(),
	      supportPointer: 'PointerEvent' in window && !Safari,
	      supportTouch: 'ontouchstart' in window,
	      ownerDocument: this.$el.ownerDocument
	    }; // Set default options

	    for (var name in defaults) {
	      !(name in this.options) && (this.options[name] = defaults[name]);
	    }

	    this.differ = new Differ();
	    this.ghost = new Ghost(this.options);
	    Object.assign(this, Animation(), DNDEvent());

	    this._bindEventListener();

	    this.nativeDraggable = this.options.forceFallback ? false : supportDraggable;

	    if (this.nativeDraggable) {
	      on(this.$el, 'dragover', this);
	      on(this.$el, 'dragenter', this);
	    }

	    this._handleDestroy();
	  }

	  Sortable.prototype =
	  /** @lends Sortable.prototype */
	  {
	    constructor: Sortable,
	    destroy: function destroy() {
	      this._unbindEventListener();

	      this._resetState();
	    },
	    // -------------------------------- drag and drop ----------------------------------
	    _onStart: function _onStart(
	    /** Event|TouchEvent */
	    evt) {
	      var _this$options2 = this.options,
	          disabled = _this$options2.disabled,
	          dragging = _this$options2.dragging,
	          draggable = _this$options2.draggable,
	          stopPropagation = _this$options2.stopPropagation;
	      if (/mousedown|pointerdown/.test(evt.type) && evt.button !== 0 || disabled) return; // only left button and enabled

	      var touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt;
	      var e = touch || evt; // Safari ignores further event handling after mousedown

	      if (!this.nativeDraggable && Safari && e.target && e.target.tagName.toUpperCase() === 'SELECT') return;
	      if (e.target === this.$el) return true;

	      if (typeof draggable === 'function') {
	        if (!draggable(e)) return true;
	      } else if (typeof draggable === 'string') {
	        if (!matches(e.target, draggable)) return true;
	      } else if (draggable !== undefined) {
	        throw new Error("draggable expected \"function\" or \"string\" but received \"".concat(_typeof(draggable), "\""));
	      }

	      if (evt.preventDefault !== void 0) evt.preventDefault();
	      if (stopPropagation) evt.stopPropagation();

	      try {
	        if (document.selection) {
	          // Timeout neccessary for IE9
	          _nextTick(function () {
	            document.selection.empty();
	          });
	        } else {
	          window.getSelection().removeAllRanges();
	        } // 获取拖拽元素


	        var element = typeof dragging === 'function' ? dragging(e) : getElement(this.$el, e.target).el; // 不存在拖拽元素时不允许拖拽

	        if (!element) return true;
	        if (element.animated) return;
	        this.dragEl = element;
	      } catch (error) {
	        throw new Error(error);
	      }

	      window.sortableDndOnDown = true; // 获取当前元素在列表中的位置

	      var _getElement = getElement(this.$el, this.dragEl),
	          index = _getElement.index,
	          el = _getElement.el,
	          rect = _getElement.rect,
	          offset = _getElement.offset;

	      if (!el || index < 0) return true; // 将拖拽元素克隆一份作为蒙版

	      var ghostEl = this.dragEl.cloneNode(true);
	      this.ghost.init(ghostEl, rect);
	      this.ghost.set('x', rect.left);
	      this.ghost.set('y', rect.top);
	      this.differ._old_.rect = rect;
	      this.differ._old_.offset = offset;
	      this.differ._old_.node = this.dragEl;
	      this.calcXY = {
	        x: e.clientX,
	        y: e.clientY
	      };

	      this._onMoveEvents(touch);

	      this._onUpEvents(touch);
	    },
	    _onMove: function _onMove(
	    /** Event|TouchEvent */
	    evt) {
	      if (evt.preventDefault !== void 0) evt.preventDefault(); // prevent scrolling

	      var touch = evt.touches && evt.touches[0];
	      var e = touch || evt;
	      var clientX = e.clientX,
	          clientY = e.clientY;
	      var target = touch ? document.elementFromPoint(clientX, clientY) : e.target;
	      var _this$options3 = this.options,
	          chosenClass = _this$options3.chosenClass,
	          stopPropagation = _this$options3.stopPropagation;
	      if (stopPropagation) evt.stopPropagation();
	      toggleClass(this.dragEl, chosenClass, true);
	      this.ghost.move();
	      if (!window.sortableDndOnDown) return;
	      if (clientX < 0 || clientY < 0) return;
	      window.sortableDndOnMove = true;
	      this.ghost.set('x', this.ghost.x + clientX - this.calcXY.x);
	      this.ghost.set('y', this.ghost.y + clientY - this.calcXY.y);
	      this.calcXY = {
	        x: clientX,
	        y: clientY
	      };
	      this.ghost.move(); // 判断边界值

	      var rc = getRect(this.$el);

	      if (clientX < rc.left || clientX > rc.right || clientY < rc.top || clientY > rc.bottom) {
	        this.ghost.setStyle({
	          cursor: 'not-allowed'
	        });
	        return;
	      }

	      var _getElement2 = getElement(this.$el, target),
	          index = _getElement2.index,
	          el = _getElement2.el,
	          rect = _getElement2.rect,
	          offset = _getElement2.offset;

	      var left = rect.left,
	          right = rect.right,
	          top = rect.top,
	          bottom = rect.bottom;
	      if (!el || index < 0 || top < 0) return; // 加上当前滚动距离

	      var _this$scrollEl = this.scrollEl,
	          scrollTop = _this$scrollEl.scrollTop,
	          scrollLeft = _this$scrollEl.scrollLeft;
	      var boundaryL = rc.left + scrollLeft;
	      var boundaryT = rc.top + scrollTop; // 如果目标元素超出当前可视区，不允许拖动

	      if (this.scrollEl !== this.$el && (rc.left < 0 || rc.top < 0)) {
	        if (rc.top < 0 && top < boundaryT || rc.left < 0 && left < boundaryL) return;
	      } else if (top < rc.top || left < rc.left) return;

	      if (clientX > left && clientX < right && clientY > top && clientY < bottom) {
	        this.dropEl = el; // 拖拽前后元素不一致时交换

	        if (this.dropEl !== this.dragEl) {
	          if (this.dropEl.animated) return;
	          this.captureAnimationState();

	          var _offset = getOffset(this.dragEl); // 获取拖拽元素的 offset 值
	          // 优先比较 top 值，top 值相同再比较 left


	          if (_offset.top < offset.top || _offset.left < offset.left) {
	            this.$el.insertBefore(this.dragEl, this.dropEl.nextElementSibling);
	          } else {
	            this.$el.insertBefore(this.dragEl, this.dropEl);
	          }

	          this.animateRange();
	          this.differ._new_.node = this.dropEl;
	          this.differ._new_.rect = getRect(this.dropEl);
	        }
	      }
	    },
	    _onDrop: function _onDrop(
	    /** Event|TouchEvent */
	    evt) {
	      this._offMoveEvents();

	      this._offUpEvents();

	      var _this$options4 = this.options,
	          dragEnd = _this$options4.dragEnd,
	          chosenClass = _this$options4.chosenClass,
	          stopPropagation = _this$options4.stopPropagation;
	      if (stopPropagation) evt.stopPropagation(); // 阻止事件冒泡

	      toggleClass(this.dragEl, chosenClass, false);

	      if (window.sortableDndOnDown && window.sortableDndOnMove) {
	        // 重新获取一次拖拽元素的 offset 值作为拖拽完成后的 offset 值
	        this.differ._new_.offset = getOffset(this.dragEl); // 拖拽完成触发回调函数

	        var _this$differ = this.differ,
	            _old_ = _this$differ._old_,
	            _new_ = _this$differ._new_; // 通过 offset 比较是否进行了元素交换

	        var changed = _old_.offset.top !== _new_.offset.top || _old_.offset.left !== _new_.offset.left; // 如果拖拽前后没有发生交换，重新赋值一次

	        if (!changed) this.differ._new_.node = this.differ._old_.node;

	        if (typeof dragEnd === 'function') {
	          dragEnd(_old_, _new_, changed);
	        } else {
	          throw new Error("Sortable-dnd Error: dragEnd expected \"function\" but received \"".concat(_typeof(dragEnd), "\""));
	        }
	      }

	      this.differ.destroy();
	      this.ghost.destroy();

	      this._removeWindowState();
	    },
	    // -------------------------------- auto destroy ----------------------------------
	    _handleDestroy: function _handleDestroy() {
	      var _this = this;

	      var observer = null;
	      var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

	      if (MutationObserver) {
	        var ownerDocument = this.options.ownerDocument;
	        if (!ownerDocument) return;
	        observer = new MutationObserver(function () {
	          if (!ownerDocument.body.contains(_this.$el)) {
	            observer.disconnect();
	            observer = null;

	            _this._unbindEventListener();

	            _this._resetState();
	          }
	        });
	        observer.observe(this.$el.parentNode, {
	          childList: true,
	          // 观察目标子节点的变化，是否有添加或者删除
	          attributes: false,
	          // 观察属性变动
	          subtree: false // 观察后代节点，默认为 false

	        });
	      }

	      window.onbeforeunload = function () {
	        if (observer) observer.disconnect();
	        observer = null;

	        _this._unbindEventListener();

	        _this._resetState();
	      };
	    },
	    // -------------------------------- reset state ----------------------------------
	    _resetState: function _resetState() {
	      this.dragEl = null;
	      this.dropEl = null;
	      this.ghost.destroy();
	      this.differ.destroy();
	      this.calcXY = {
	        x: 0,
	        y: 0
	      };

	      this._removeWindowState();
	    },
	    _removeWindowState: function _removeWindowState() {
	      window.sortableDndOnDown = null;
	      window.sortableDndOnMove = null;
	      delete window.sortableDndOnDown;
	      delete window.sortableDndOnMove;
	    }
	  };
	  return Sortable;
	});
	});

	function Observer(props) {
	    const { uniqueKey, children, onSizeChange } = props;
	    const elementRef = React__namespace.useRef(null);
	    const isRenderProps = typeof children === 'function';
	    const mergedChildren = isRenderProps ? children(elementRef) : children;
	    React__namespace.useLayoutEffect(() => {
	        let observer;
	        if (typeof ResizeObserver !== undefined) {
	            observer = new ResizeObserver(() => {
	                const size = elementRef.current.clientHeight;
	                onSizeChange && onSizeChange(size, uniqueKey);
	            });
	            elementRef.current && observer.observe(elementRef.current);
	        }
	        return () => {
	            if (observer) {
	                observer.disconnect();
	                observer = null;
	            }
	        };
	        // eslint-disable-next-line react-hooks/exhaustive-deps
	    }, [elementRef]);
	    return React__namespace.cloneElement(mergedChildren, {
	        ref: elementRef,
	    });
	}

	function Item(props) {
	    const { children, uniqueKey, itemClass, itemStyle } = props;
	    const { record, index, onSizeChange } = props;
	    return (React__namespace.createElement(Observer, { uniqueKey: uniqueKey, onSizeChange: onSizeChange },
	        React__namespace.createElement("div", { className: itemClass, style: itemStyle, "data-key": uniqueKey }, typeof children === 'function' ? children(record, index, uniqueKey) : children)));
	}
	function Slot(props) {
	    const { children, roleId, onSizeChange } = props;
	    return children ? (React__namespace.createElement(Observer, { uniqueKey: roleId, onSizeChange: onSizeChange },
	        React__namespace.createElement("div", { "v-role": roleId }, children))) : React__namespace.createElement(React__namespace.Fragment, null);
	}

	var utils = {
	    /**
	     * 防抖函数
	     * @param func callback
	     * @param delay 延迟
	     * @param immediate 是否立即执行
	     * @returns
	     */
	    debounce(func, delay = 50, immediate = false) {
	        let timer;
	        let result;
	        let debounced = function (...args) {
	            if (timer)
	                clearTimeout(timer);
	            if (immediate) {
	                let callNow = !timer;
	                timer = setTimeout(() => {
	                    timer = null;
	                }, delay);
	                if (callNow)
	                    result = func.apply(this, args);
	            }
	            else {
	                timer = setTimeout(() => {
	                    func.apply(this, args);
	                }, delay);
	            }
	            return result;
	        };
	        debounced.prototype.cancel = function () {
	            clearTimeout(timer);
	            timer = null;
	        };
	        return debounced;
	    }
	};

	const CALLBACKS = { top: 'v-top', bottom: 'v-bottom', dragend: 'v-dragend' }; // 组件传入的事件回调
	const STYLE = { overflow: 'hidden auto', position: 'relative' }; // 列表默认样式
	const MASKIMAGE = 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.1) 98%, #FFFFFF 100%)'; // 拖拽时默认背景样式
	function Virtual(props, ref) {
	    const { header, footer, children, dataSource = [], dataKey, keeps = 30, size = 50, height = '100%', delay = 10, disabled = false, draggable = undefined, dragging = undefined, ghostClass = '', ghostStyle = { backgroundImage: MASKIMAGE }, chosenClass = '', animation = 150 } = props;
	    // =============================== State ===============================
	    const [cloneList, setCloneList] = React.useState([]);
	    const [sizeStack, setSizeStack] = React.useState(new Map());
	    const dragList = React.useRef([]);
	    const [range, setRange] = React.useState({ start: 0, end: keeps }); // 当前可见范围
	    const dragRef = React.useRef(null);
	    const offsetRef = React.useRef(0); // 记录当前滚动高度
	    const virtualRef = React.useRef(null);
	    const groupRef = React.useRef(null); // 列表ref
	    const bottomRef = React.useRef(null); // 列表元素外的dom，总是存在于列表最后
	    // 记录顶部 | 底部高度，以及列表中每一行的高度，和列表的总高度
	    const calcSizeRef = React.useRef({ header: 0, footer: 0, total: 0, average: 0, fixed: 0 });
	    const calcTypeRef = React.useRef('INIT'); // 判断列表每一行高度是否固定
	    const lastIndexRef = React.useRef(0); // 记录上一次计算的 index 值
	    const isFixedSize = React__namespace.useMemo(() => {
	        return calcTypeRef.current === 'FIXED';
	    }, [calcTypeRef]);
	    React.useEffect(() => {
	        setCloneList(() => [...dataSource]);
	        dragList.current = [...dataSource];
	    }, [dataSource]);
	    // =============================== ref methods ===============================
	    const scrollToBottom = () => {
	        if (bottomRef) {
	            const offset = bottomRef.current.offsetTop;
	            virtualRef.current.scrollTop = offset;
	        }
	        setTimeout(() => {
	            // 第一次滚动高度可能会发生改变，如果没到底部再执行一次滚动方法
	            const { scrollTop, scrollHeight, clientHeight } = virtualRef.current;
	            if (scrollTop + clientHeight < scrollHeight)
	                scrollToBottom();
	        }, 0);
	    };
	    React__namespace.useImperativeHandle(ref, () => ({
	        reset() {
	            virtualRef.current.scrollTop = 0;
	            setCloneList(() => [...dataSource]);
	        },
	        getSize(key) {
	            return sizeStack.get(key);
	        },
	        getScrollTop() {
	            return offsetRef.current;
	        },
	        scrollToIndex(index) {
	            if (index >= cloneList.length - 1) {
	                scrollToBottom();
	            }
	            else {
	                const offset = getOffsetByIndex(index);
	                virtualRef.current.scrollTop = offset;
	            }
	        },
	        scrollToOffset(offset) {
	            virtualRef.current.scrollTop = offset;
	        },
	        scrollToTop() {
	            virtualRef.current.scrollTop = 0;
	        },
	        scrollToBottom,
	    }));
	    // =============================== Item Key ===============================
	    // 获取 item 中的 dateKey 值
	    const getKey = React__namespace.useCallback((item) => {
	        return (dataKey.replace(/\[/g, '.').replace(/\]/g, '').split('.').reduce((o, k) => (o || {})[k], item)) || '';
	    }, [dataKey]);
	    // 源数据中所有的 dataKey 值
	    const dataKeys = React__namespace.useMemo(() => {
	        return cloneList.map(item => getKey(item));
	    }, [cloneList, getKey]);
	    const dataKeyLen = React__namespace.useMemo(() => {
	        return dataKeys.length - 1;
	    }, [dataKeys]);
	    // =============================== Scroll ===============================
	    const handleScroll = (e) => {
	        const scrollTop = Math.ceil(e.target.scrollTop);
	        const scrollHeight = Math.ceil(e.target.scrollHeight);
	        const clientHeight = Math.ceil(e.target.clientHeight);
	        // 如果不存在滚动元素 | 滚动高度小于0 | 超出最大滚动距离
	        if (!scrollHeight || scrollTop < 0 || (scrollTop + clientHeight > scrollHeight + 1))
	            return;
	        // 通过上一次滚动的距离，判断当前滚动方向
	        const direction = scrollTop < offsetRef.current ? 'FRONT' : 'BEHIND';
	        // 记录当前滚动高度
	        offsetRef.current = scrollTop;
	        // 判断当前应该触发的回调函数，滚动到顶部时触发 `v-top`，滚动到底部时触发 `v-bottom`
	        const callback = direction === 'FRONT' ? props[CALLBACKS.top] : props[CALLBACKS.bottom];
	        const scrollOvers = getScrollOvers();
	        if (direction === 'FRONT') {
	            handleScrollFront(scrollOvers);
	            if (!!cloneList.length && offsetRef.current <= 0)
	                callback && callback();
	        }
	        else if (direction === 'BEHIND') {
	            handleScrollBehind(scrollOvers);
	            if (clientHeight + scrollTop >= scrollHeight)
	                callback && callback();
	        }
	    };
	    const handleScrollFront = (overs) => {
	        if (overs > range.start)
	            return;
	        const start = Math.max(overs - Math.round(keeps / 3), 0);
	        handleCheck(start, getEndByStart(start));
	    };
	    const handleScrollBehind = (overs) => {
	        if (overs < range.start + Math.round(keeps / 3))
	            return;
	        handleCheck(overs, getEndByStart(overs));
	    };
	    const handleCheck = (start, end) => {
	        const total = dataKeys.length;
	        if (total <= keeps) {
	            start = 0;
	            end = dataKeyLen;
	        }
	        else if (end - start < keeps - 1) {
	            start = end - keeps + 1;
	        }
	        if (range.start !== start)
	            setRange(() => { return { start, end }; });
	    };
	    // =============================== methods ===============================
	    // 获取当前滚动高度经过了多少个列表项
	    const getScrollOvers = () => {
	        // 如果有 header 插槽，需要减去 header 的高度
	        const { header, fixed } = calcSizeRef.current;
	        const offset = offsetRef.current - header;
	        if (offset <= 0)
	            return 0;
	        if (isFixedSize)
	            return Math.floor(offset / fixed);
	        let low = 0;
	        let high = dataKeys.length;
	        let middle = 0;
	        let middleOffset = 0;
	        while (low <= high) {
	            middle = low + Math.floor((high - low) / 2);
	            middleOffset = getOffsetByIndex(middle);
	            if (middleOffset === offset) {
	                return middle;
	            }
	            else if (middleOffset < offset) {
	                low = middle + 1;
	            }
	            else if (middleOffset > offset) {
	                high = middle - 1;
	            }
	            else {
	                break;
	            }
	        }
	        return low > 0 ? --low : 0;
	    };
	    const getOffsetByIndex = (index) => {
	        if (!index)
	            return 0;
	        let offset = 0;
	        let indexSize = 0;
	        for (let i = 0; i < index; i++) {
	            indexSize = sizeStack.get(dataKeys[i]);
	            offset += typeof indexSize === 'number' ? indexSize : getItemSize();
	        }
	        lastIndexRef.current = Math.max(lastIndexRef.current, index - 1);
	        lastIndexRef.current = Math.min(lastIndexRef.current, dataKeyLen);
	        return offset;
	    };
	    const getEndByStart = (start) => {
	        const end = start + keeps;
	        return dataKeyLen > 0 ? Math.min(end, dataKeyLen) : end;
	    };
	    const getItemSize = () => {
	        const { fixed, average } = calcSizeRef.current;
	        return isFixedSize ? fixed : (average || size);
	    };
	    // ======================= size observe =======================
	    const onItemSizeChange = (size, key) => {
	        setSizeStack(sizeStack.set(key, size));
	        // 初始为固定高度fixedSizeValue, 如果大小没有变更不做改变，如果size发生变化，认为是动态大小，去计算平均值
	        if (calcTypeRef.current === 'INIT') {
	            calcTypeRef.current = 'FIXED';
	            calcSizeRef.current = { ...calcSizeRef.current, fixed: size };
	        }
	        else if (calcTypeRef.current === 'FIXED' && calcSizeRef.current.fixed !== size) {
	            calcTypeRef.current = 'DYNAMIC';
	            calcSizeRef.current = { ...calcSizeRef.current, fixed: undefined };
	        }
	        if (calcTypeRef.current !== 'FIXED' && calcSizeRef.current.total !== 'undefined') {
	            if (sizeStack.size < Math.min(keeps, dataKeys.length)) {
	                const total = [...sizeStack.values()].reduce((acc, cur) => acc + cur, 0);
	                const average = Math.round(total / sizeStack.size);
	                calcSizeRef.current = { ...calcSizeRef.current, total, average };
	            }
	            else {
	                calcSizeRef.current = { ...calcSizeRef.current, total: undefined };
	            }
	        }
	    };
	    const onSlotSizeChange = (size, key) => {
	        calcSizeRef.current[key] = size;
	    };
	    // =============================== Range ===============================
	    const { start, end, front, behind } = React__namespace.useMemo(() => {
	        const { start, end } = range;
	        let front;
	        let behind;
	        if (isFixedSize) {
	            front = calcSizeRef.current.fixed * start;
	            behind = calcSizeRef.current.fixed * (dataKeyLen - end);
	        }
	        else {
	            front = getOffsetByIndex(start);
	            if (lastIndexRef.current === dataKeyLen) {
	                behind = getOffsetByIndex(dataKeyLen) - getOffsetByIndex(end);
	            }
	            else {
	                behind = (dataKeyLen - end) * getItemSize();
	            }
	        }
	        return { front, behind, start, end };
	        // eslint-disable-next-line react-hooks/exhaustive-deps
	    }, [range, dataKeyLen]);
	    // =============================== init ===============================
	    React.useEffect(() => {
	        const start = Math.max(range.start, 0);
	        handleCheck(start, getEndByStart(start));
	        sizeStack.forEach((v, key) => {
	            if (!dataKeys.includes(key)) {
	                sizeStack.delete(key);
	            }
	        });
	        // eslint-disable-next-line react-hooks/exhaustive-deps
	    }, [dataSource]);
	    // =============================== drag ===============================
	    const initDraggable = () => {
	        destroyDraggable();
	        dragRef.current = new sortable(groupRef.current, {
	            disabled,
	            animation,
	            draggable,
	            dragging,
	            ghostStyle,
	            ghostClass,
	            chosenClass,
	            dragEnd: (pre, cur, changed) => {
	                if (!(pre && cur))
	                    return;
	                const dragState = {
	                    oldNode: pre.node, oldItem: null, oldIndex: null,
	                    newNode: cur.node, newItem: null, newIndex: null
	                };
	                const oldKey = pre.node.getAttribute('data-key');
	                const newKey = cur.node.getAttribute('data-key');
	                dragList.current.forEach((el, index) => {
	                    if (getKey(el) === oldKey) {
	                        dragState.oldItem = el;
	                        dragState.oldIndex = index;
	                    }
	                    if (getKey(el) === newKey) {
	                        dragState.newItem = el;
	                        dragState.newIndex = index;
	                    }
	                });
	                const newArr = [...dragList.current];
	                if (changed) {
	                    newArr.splice(dragState.oldIndex, 1);
	                    newArr.splice(dragState.newIndex, 0, dragState.oldItem);
	                    setCloneList(() => [...newArr]);
	                    dragList.current = [...newArr];
	                }
	                const callback = props[CALLBACKS.dragend];
	                callback && callback(newArr, { ...pre, item: dragState.oldItem, index: dragState.oldIndex }, { ...pre, item: dragState.newItem, index: dragState.newIndex }, changed);
	            }
	        });
	    };
	    const destroyDraggable = () => {
	        dragRef.current && dragRef.current.destroy();
	        dragRef.current = null;
	    };
	    React.useLayoutEffect(() => {
	        if (draggable) {
	            initDraggable();
	        }
	        else {
	            destroyDraggable();
	        }
	        // eslint-disable-next-line react-hooks/exhaustive-deps
	    }, [cloneList, draggable]);
	    React.useEffect(() => {
	        return () => {
	            destroyDraggable();
	        };
	    }, []);
	    // ================================ Render ================================
	    return (React__namespace.createElement("div", { ref: virtualRef, style: { ...STYLE, height }, onScroll: utils.debounce(handleScroll, delay) },
	        React__namespace.createElement(Slot, { children: header, roleId: "header", onSizeChange: onSlotSizeChange }),
	        React__namespace.createElement("div", { ref: groupRef, "v-role": "content", "v-start": start, style: { padding: `${front}px 0 ${behind}px` } }, cloneList.slice(start, end + 1).map(item => {
	            const key = getKey(item);
	            const index = dataKeys.indexOf(key);
	            return (React__namespace.createElement(Item, { key: key, uniqueKey: key, children: children, record: item, index: index, onSizeChange: onItemSizeChange }));
	        })),
	        React__namespace.createElement(Slot, { children: footer, roleId: "footer", onSizeChange: onSlotSizeChange }),
	        React__namespace.createElement("div", { ref: bottomRef })));
	}
	var index = React__namespace.forwardRef(Virtual);

	exports.Virtual = Virtual;
	exports["default"] = index;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
