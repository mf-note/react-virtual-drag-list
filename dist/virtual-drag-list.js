/*!
 * react-virtual-drag-list v2.6.2
 * open source under the MIT license
 * https://github.com/mfuu/react-virtual-drag-list#readme
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.VirtualDragList = factory(global.React));
})(this, (function (React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
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

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var sortableDnd_min = {exports: {}};

  /*!
   * sortable-dnd v0.6.6
   * open source under the MIT license
   * https://github.com/mfuu/sortable-dnd#readme
   */
  sortableDnd_min.exports;

  (function (module, exports) {
    !function (t, e) {
      module.exports = e() ;
    }(commonjsGlobal, function () {

      function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t;
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, t(e);
      }

      function e() {
        return e = Object.assign ? Object.assign.bind() : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];

            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }

          return t;
        }, e.apply(this, arguments);
      }

      var n = {
        capture: !1,
        passive: !1
      },
          o = /\s+/g;

      function i(t) {
        if ("undefined" != typeof window && window.navigator) return !!navigator.userAgent.match(t);
      }

      var r = i(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
          s = i(/Edge/i),
          a = i(/safari/i) && !i(/chrome/i) && !i(/android/i),
          l = function () {
        var t = !1;
        return document.addEventListener("checkIfSupportPassive", null, {
          get passive() {
            return t = !0, !0;
          }

        }), t;
      }(),
          c = function () {
        if ("undefined" == typeof window || "undefined" == typeof document) return {};
        var t = window.getComputedStyle(document.documentElement, "") || ["-moz-hidden-iframe"],
            e = (Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/) || "" === t.OLink && ["", "o"])[1];
        return {
          dom: "WebKit|Moz|MS|O".match(new RegExp("(" + e + ")", "i"))[1],
          lowercase: e,
          css: "-" + e + "-",
          js: e[0].toUpperCase() + e.substr(1)
        };
      }();

      function h(t, e) {
        t.style["".concat(c.css, "transition-duration")] = e ? "".concat(e, "ms") : "";
      }

      function u(t, e) {
        t.style["".concat(c.css, "transform")] = e ? "".concat(e) : "";
      }

      function d(t, e, o) {
        window.addEventListener ? t.addEventListener(e, o, !(!l && r) && n) : window.attachEvent ? t.attachEvent("on" + e, o) : t["on" + e] = o;
      }

      function p(t, e, o) {
        window.removeEventListener ? t.removeEventListener(e, o, !(!l && r) && n) : window.detachEvent ? t.detachEvent("on" + e, o) : t["on" + e] = null;
      }

      function m() {
        return document.scrollingElement || document.documentElement;
      }

      function f(t, e, n) {
        if (t.getBoundingClientRect || t === window) {
          var o, i, r, s, a, l, c;

          if (t !== window && t.parentNode && t !== m() ? (i = (o = t.getBoundingClientRect()).top, r = o.left, s = o.bottom, a = o.right, l = o.height, c = o.width) : (i = 0, r = 0, s = window.innerHeight, a = window.innerWidth, l = window.innerHeight, c = window.innerWidth), e && t !== window) {
            n = n || t.parentNode;

            do {
              if (n && n.getBoundingClientRect) {
                var h = n.getBoundingClientRect();
                i -= h.top + parseInt(E(n, "border-top-width")), r -= h.left + parseInt(E(n, "border-left-width")), s = i + o.height, a = r + o.width;
                break;
              }
            } while (n = n.parentNode);
          }

          return {
            top: i,
            left: r,
            bottom: s,
            right: a,
            width: c,
            height: l
          };
        }
      }

      function g(t, e, n, o) {
        if (!t) return null;

        if (n && !e) {
          var i = Array.prototype.slice.call(n.children),
              r = i.indexOf(t);
          if (r > -1) return i[r];

          for (var s = 0; s < i.length; s++) if (v(t, i[s])) return i[s];
        }

        n = n || document;

        do {
          if (null != e && (">" === e[0] ? t.parentNode === n && x(t, e) : x(t, e)) || o && t === n) return t;
          if (t === n) break;
        } while (t = t.parentNode);

        return null;
      }

      function v(t, e) {
        if (!t || !e) return !1;
        if (e.compareDocumentPosition) return !!(16 & e.compareDocumentPosition(t));
        if (e.contains && 1 === t.nodeType) return e.contains(t) && e !== t;

        for (; t = t.parentNode;) if (t === e) return !0;

        return !1;
      }

      function y(t, e) {
        for (var n = t.lastElementChild; n && (n === ot.ghost || "none" === E(n, "display") || e && !x(n, e));) n = n.previousElementSibling;

        return n || null;
      }

      function w(t, e) {
        if (!t || !t.parentNode) return -1;

        for (var n = 0; t = t.previousElementSibling;) "TEMPLATE" === t.nodeName.toUpperCase() || e && !x(t, e) || "none" === E(t, "display") || n++;

        return n;
      }

      function b(t, e, n, o) {
        for (var i = 0, r = 0, s = t.children; i < s.length;) {
          if (s[i] !== ot.ghost && "none" !== E(s[i], "display") && g(s[i], n, t, !1) && (o || s[i] !== ot.dragged)) {
            if (r === e) return s[i];
            r++;
          }

          i++;
        }

        return null;
      }

      function _(t, e) {
        var n = E(t),
            o = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth),
            i = b(t, 0, e),
            a = b(t, 1, e),
            l = i && E(i),
            c = a && E(a),
            h = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + f(i).width,
            u = c && parseInt(c.marginLeft) + parseInt(c.marginRight) + f(a).width,
            d = s || r ? "cssFloat" : "float";
        if ("flex" === n.display) return "column" === n.flexDirection || "column-reverse" === n.flexDirection ? "vertical" : "horizontal";
        if ("grid" === n.display) return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";

        if (i && l.float && "none" !== l.float) {
          var p = "left" === l.float ? "left" : "right";
          return !a || "both" !== c.clear && c.clear !== p ? "horizontal" : "vertical";
        }

        return i && ("block" === l.display || "flex" === l.display || "table" === l.display || "grid" === l.display || h >= o && "none" === n[d] || a && "none" === n[d] && h + u > o) ? "vertical" : "horizontal";
      }

      function S(t, e, n) {
        if (t && e) if (t.classList) t.classList[n ? "add" : "remove"](e);else {
          var i = (" " + t.className + " ").replace(o, " ").replace(" " + e + " ", " ");
          t.className = (i + (n ? " " + e : "")).replace(o, " ");
        }
      }

      function x(t, e) {
        if (e) {
          if (">" === e[0] && (e = e.substring(1)), t) try {
            if (t.matches) return t.matches(e);
            if (t.msMatchesSelector) return t.msMatchesSelector(e);
            if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
          } catch (t) {
            return !1;
          }
          return !1;
        }
      }

      function E(t, e, n) {
        var o = t && t.style;

        if (o) {
          if (void 0 === n) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), void 0 === e ? n : n[e];
          e in o || -1 !== e.indexOf("webkit") || (e = "-webkit-" + e), o[e] = n + ("string" == typeof n ? "" : "px");
        }
      }

      function D(t, e) {
        var n,
            o,
            i = (o = e, (n = t).compareDocumentPosition ? n.compareDocumentPosition(o) : n.contains ? (n != o && n.contains(o) && 16) + (n != o && o.contains(n) && 8) + (n.sourceIndex >= 0 && o.sourceIndex >= 0 ? (n.sourceIndex < o.sourceIndex && 4) + (n.sourceIndex > o.sourceIndex && 2) : 1) : 0);
        return 2 === i ? 1 : 4 === i ? -1 : 0;
      }

      function C(t) {
        void 0 !== t.preventDefault && t.cancelable && t.preventDefault();
      }

      function M(t) {
        var n = t.sortable,
            o = t.name,
            i = t.params,
            r = n.options[o];
        "function" == typeof r && r(e({}, i));
      }

      var T,
          N,
          I = "Sortable" + Date.now();

      function P(t) {
        this.options = t, this.autoScrollAnimationFrame = null;
      }

      function O(t) {
        this.options = t, this.animations = [];
      }

      function A(t) {
        this.options = t || {}, this.selectedElements = [];
      }

      window.requestAnimationFrame || (window.requestAnimationFrame = function (t) {
        return setTimeout(t, 17);
      }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
        clearTimeout(t);
      }), P.prototype = {
        destroy: function () {
          this.autoScrollAnimationFrame && (cancelAnimationFrame(this.autoScrollAnimationFrame), this.autoScrollAnimationFrame = null);
        },
        update: function (t, e, n) {
          var o = this;
          cancelAnimationFrame(this.autoScrollAnimationFrame), this.autoScrollAnimationFrame = requestAnimationFrame(function () {
            e && n && o.autoScroll(t, n), o.update(t, e, n);
          });
        },
        autoScroll: function (t, e) {
          if (t && void 0 !== e.clientX && void 0 !== e.clientY) {
            var n = f(t);

            if (n) {
              var o = e.clientX,
                  i = e.clientY,
                  r = n.top,
                  s = n.right,
                  a = n.bottom,
                  l = n.left,
                  c = n.height,
                  h = n.width;

              if (!(i < r || o > s || i > a || o < l)) {
                var u = this.options,
                    d = u.scrollThreshold,
                    p = u.scrollSpeed,
                    m = t.scrollTop,
                    g = t.scrollLeft,
                    v = t.scrollHeight,
                    y = m > 0 && i >= r && i <= r + d,
                    w = g + h < t.scrollWidth && o <= s && o >= s - d,
                    b = m + c < v && i <= a && i >= a - d,
                    _ = 0,
                    S = 0;
                g > 0 && o >= l && o <= l + d && (_ = Math.floor(Math.max(-1, (o - l) / d - 1) * p.x)), w && (_ = Math.ceil(Math.min(1, (o - s) / d + 1) * p.x)), y && (S = Math.floor(Math.max(-1, (i - r) / d - 1) * p.y)), b && (S = Math.ceil(Math.min(1, (i - a) / d + 1) * p.y)), t.scrollTop += S, t.scrollLeft += _;
              }
            }
          }
        }
      }, O.prototype = {
        collect: function (t) {
          if (t) {
            for (var e = f(t), n = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, o = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight, i = Math.min(e.right, n), r = Math.min(e.bottom, o), s = Array.prototype.slice.call(t.children), a = [], l = 0; l <= s.length; l++) {
              var c = s[l];

              if (c && c !== ot.ghost && "none" !== E(c, "display")) {
                var h = f(c);

                if (!(h.bottom < 0 || h.right < 0)) {
                  if (h.top - h.height > r || h.left - h.width > i) break;
                  a.push({
                    node: c,
                    rect: h
                  });
                }
              }
            }

            this.animations.push(a);
          }
        },
        animate: function () {
          for (var t = this.animations.pop(), e = 0, n = t.length; e < n; e++) {
            var o = t[e],
                i = o.node,
                r = o.rect;

            this._excute(i, r);
          }
        },
        _excute: function (t, e) {
          var n = e.left,
              o = e.top,
              i = f(t);

          if (i.top !== o || i.left !== n) {
            var r = o - i.top,
                s = n - i.left;
            h(t), u(t, "translate3d(".concat(s, "px, ").concat(r, "px, 0)")), t.offsetWidth, h(t, this.options.animation), u(t, "translate3d(0px, 0px, 0px)"), clearTimeout(t.animated), t.animated = setTimeout(function () {
              h(t), u(t, ""), t.animated = null;
            }, this.options.animation);
          }
        }
      }, A.prototype = {
        destroy: function () {
          T = N = null;
        },
        active: function () {
          return !!T;
        },
        setParams: function (t) {
          t.nodes = T || [], t.clones = N || [];
        },
        select: function (t) {
          S(t, this.options.selectedClass, !0), this.selectedElements.push(t), this.selectedElements.sort(function (t, e) {
            return D(t, e);
          });
        },
        deselect: function (t) {
          var e = this.selectedElements.indexOf(t);
          e > -1 && (S(t, this.options.selectedClass, !1), this.selectedElements.splice(e, 1));
        },
        getGhostElement: function () {
          if (!T) return null;
          var t = document.createElement("div");
          return this.selectedElements.forEach(function (e, n) {
            var o = e.cloneNode(!0),
                i = 0 === n ? 1 : .5;
            o.style = "position: absolute;left: 0;top: 0;bottom: 0;right: 0;opacity: ".concat(i, ";z-index: ").concat(n, ";"), t.appendChild(o);
          }), t;
        },
        toggleSelected: function (t, e) {
          var n = this;
          e ? t.forEach(function (t) {
            return n.selectedElements.push(t);
          }) : this.selectedElements = this.selectedElements.filter(function (e) {
            return t.indexOf(e) < 0;
          });
        },
        toggleClass: function (t) {
          if (T) for (var e = 0; e < T.length; e++) S(T[e], this.options.chosenClass, t);
        },
        toggleVisible: function (t) {
          if (T) if (t) {
            var e = T.indexOf(ot.dragged);

            this._viewElements(T, e, ot.dragged);
          } else this._hideElements(T);
        },
        onChoose: function () {
          !this.options.multiple || !this.selectedElements.length || this.selectedElements.indexOf(ot.dragged) < 0 || (this.selectedElements.sort(function (t, e) {
            return D(t, e);
          }), T = this.selectedElements, this.toggleClass(!0));
        },
        onDrag: function (t) {
          T && (t.animator.collect(ot.dragged.parentNode), this._hideElements(T), t.animator.animate(), this.toggleClass(!1));
        },
        onDrop: function (t, e, n) {
          if (T) {
            var o = ot.dragged,
                i = ot.clone,
                r = T.indexOf(o);
            e[I].animator.collect(i.parentNode), t !== e && "clone" === n ? (E(i, "display", "none"), N = T.map(function (t) {
              return t.cloneNode(!0);
            }), this._viewElements(N, r, i), this._viewElements(T, r, o)) : this._viewElements(T, r, i), e[I].animator.animate(), t !== e && (e[I].multiplayer.toggleSelected(N || T, !0), "clone" !== n && t[I].multiplayer.toggleSelected(T, !1));
          }
        },
        onSelect: function (t, e, n) {
          var o = this.selectedElements.indexOf(e);
          S(e, this.options.selectedClass, o < 0);
          var i = {
            from: n.el,
            event: t,
            node: e,
            index: w(e)
          };
          o < 0 ? (this.selectedElements.push(e), M({
            sortable: n,
            name: "onSelect",
            params: i
          })) : (this.selectedElements.splice(o, 1), M({
            sortable: n,
            name: "onDeselect",
            params: i
          })), this.selectedElements.sort(function (t, e) {
            return D(t, e);
          });
        },
        _viewElements: function (t, e, n) {
          for (var o = 0; o < t.length; o++) if (E(t[o], "display", ""), o < e) n.parentNode.insertBefore(t[o], n);else {
            var i = o > 0 ? t[o - 1] : n;
            n.parentNode.insertBefore(t[o], i.nextSibling);
          }
        },
        _hideElements: function (t) {
          for (var e = 0; e < t.length; e++) t[e] != ot.dragged && E(t[e], "display", "none");
        }
      };

      var H,
          X,
          Y,
          L,
          W,
          k,
          R,
          B,
          F,
          z,
          j,
          G,
          V,
          q,
          U,
          K,
          Z,
          J,
          Q,
          $,
          tt,
          et = [],
          nt = function (e) {
        var n = {},
            o = e.group;
        o && "object" == t(o) || (o = {
          name: o,
          pull: !0,
          put: !0,
          revertDrag: !0
        }), n.name = o.name, n.pull = o.pull, n.put = o.put, n.revertDrag = o.revertDrag, e.group = n;
      };

      function ot(t, n) {
        if (!t || !t.nodeType || 1 !== t.nodeType) throw "Sortable-dnd: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
        t[I] = this, this.el = t, this.options = n = e({}, n);
        var o = {
          store: null,
          disabled: !1,
          group: "",
          lockAxis: "",
          animation: 150,
          draggable: null,
          handle: null,
          multiple: !1,
          selectHandle: null,
          customGhost: null,
          direction: "",
          autoScroll: !0,
          scrollThreshold: 55,
          scrollSpeed: {
            x: 10,
            y: 10
          },
          delay: 0,
          delayOnTouchOnly: !1,
          touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
          ghostClass: "",
          ghostStyle: {},
          chosenClass: "",
          selectedClass: "",
          swapOnDrop: !0,
          fallbackOnBody: !1,
          supportTouch: "ontouchstart" in window,
          emptyInsertThreshold: -5
        };

        for (var i in o) !(i in this.options) && (this.options[i] = o[i]);

        for (var r in nt(n), this) "_" === r.charAt(0) && "function" == typeof this[r] && (this[r] = this[r].bind(this));

        d(t, this.options.supportTouch ? "touchstart" : "mousedown", this._onDrag), et.push(t), this.autoScroller = new P(this.options), this.multiplayer = new A(this.options), this.animator = new O(this.options);
      }

      return ot.prototype = {
        constructor: ot,
        _onDrag: function (t) {
          var e = this;

          if (!X && !this.options.disabled && this.options.group.pull && (!/mousedown|pointerdown/.test(t.type) || 0 === t.button)) {
            var n = t.touches && t.touches[0],
                o = (n || t).target;

            if (!a || !o || "SELECT" !== o.tagName.toUpperCase()) {
              var i = g(o, this.options.draggable, this.el);

              if (i && !i.animated) {
                B = {
                  original: t,
                  clientX: (n || t).clientX,
                  clientY: (n || t).clientY
                }, X = i, d(j = n ? X : document, "mouseup", this._onDrop), d(j, "touchend", this._onDrop), d(j, "touchcancel", this._onDrop);
                var l = this.options,
                    c = l.handle,
                    h = l.selectHandle;
                if ("function" == typeof h && h(t) || "string" == typeof h && x(o, h)) q = !0;else if (("function" != typeof c || c(t)) && ("string" != typeof c || x(o, c))) {
                  var u = this.options,
                      p = u.delay,
                      m = u.delayOnTouchOnly;
                  !p || m && !n || s || r ? this._onStart(n, t) : (d(this.el.ownerDocument, "touchmove", this._delayMoveHandler), d(this.el.ownerDocument, "mousemove", this._delayMoveHandler), d(this.el.ownerDocument, "mouseup", this._cancelStart), d(this.el.ownerDocument, "touchend", this._cancelStart), d(this.el.ownerDocument, "touchcancel", this._cancelStart), V = setTimeout(function () {
                    return e._onStart(n, t);
                  }, p)), d(document, "selectstart", C), a && E(document.body, "user-select", "none");
                }
              }
            }
          }
        },
        _delayMoveHandler: function (t) {
          var e = t.touches ? t.touches[0] : t;
          Math.max(Math.abs(e.clientX - B.clientX), Math.abs(e.clientY - B.clientY)) >= Math.floor(this.options.touchStartThreshold / (window.devicePixelRatio || 1)) && this._cancelStart();
        },
        _cancelStart: function () {
          clearTimeout(V), p(this.el.ownerDocument, "touchmove", this._delayMoveHandler), p(this.el.ownerDocument, "mousemove", this._delayMoveHandler), p(this.el.ownerDocument, "mouseup", this._cancelStart), p(this.el.ownerDocument, "touchend", this._cancelStart), p(this.el.ownerDocument, "touchcancel", this._cancelStart), p(document, "selectstart", C), a && E(document.body, "user-select", "");
        },
        _onStart: function (t, e) {
          var n = w(X);
          U = this.el, K = this.el, J = n, Q = n, $ = n, tt = X, H = this.el, W = X.cloneNode(!0), R = X.parentNode, Z = this.options.group.pull, ot.clone = W, ot.active = this, ot.dragged = X, S(X, this.options.chosenClass, !0), this.multiplayer.onChoose(), M({
            sortable: this,
            name: "onChoose",
            params: this._getParams(e)
          }), d(j, t ? "touchmove" : "mousemove", this._nearestSortable);

          try {
            document.selection ? setTimeout(function () {
              return document.selection.empty();
            }, 0) : window.getSelection().removeAllRanges();
          } catch (t) {}
        },
        _onStarted: function () {
          S(W, this.options.chosenClass, !0), this._appendGhost(), this.multiplayer.onDrag(this), M({
            sortable: this,
            name: "onDrag",
            params: this._getParams(B.original)
          }), E(X, "display", "none"), S(X, this.options.chosenClass, !1), X.parentNode.insertBefore(W, X);
        },
        _getGhostElement: function () {
          var t = this.options.customGhost;

          if ("function" == typeof t) {
            var e = this.multiplayer.selectedElements;
            return t(e.length ? e : [X]);
          }

          return this.multiplayer.getGhostElement() || X;
        },
        _appendGhost: function () {
          if (!k) {
            var t = this.options.fallbackOnBody ? document.body : this.el,
                n = this._getGhostElement();

            S(k = n.cloneNode(!0), this.options.ghostClass, !0);
            var o,
                i = f(X),
                r = e({
              position: "fixed",
              top: i.top,
              left: i.left,
              width: i.width,
              height: i.height,
              minWidth: i.width,
              minHeight: i.height,
              opacity: "0.8",
              overflow: "hidden",
              "z-index": "100000",
              "box-sizing": "border-box",
              "pointer-events": "none"
            }, this.options.ghostStyle);

            for (var s in r) E(k, s, r[s]);

            o = "none", k.style["".concat(c.css, "transition")] = o ? "none" === o ? "none" : "".concat(o) : "", u(k, "translate3d(0px, 0px, 0px)"), ot.ghost = k, t.appendChild(k);
            var a = (B.clientX - i.left) / parseInt(k.style.width) * 100,
                l = (B.clientY - i.top) / parseInt(k.style.height) * 100;
            E(k, "transform-origin", "".concat(a, "% ").concat(l, "%")), E(k, "transform", "translateZ(0)"), E(k, "will-change", "transform");
          }
        },
        _nearestSortable: function (t) {
          C(t);
          var e = t.touches && t.touches[0] || t;

          if (X && function (t) {
            var e = F || B;
            return !(void 0 !== t.clientX && void 0 !== t.clientY && Math.abs(t.clientX - e.clientX) <= 0 && Math.abs(t.clientY - e.clientY) <= 0);
          }(e)) {
            !F && this._onStarted();
            var n = this.options.lockAxis,
                o = "x" === n ? B.clientX : e.clientX,
                i = "y" === n ? B.clientY : e.clientY,
                r = document.elementFromPoint(o, i),
                s = o - B.clientX,
                a = i - B.clientY;

            if (F = {
              original: t,
              clientX: o,
              clientY: i
            }, u(k, "translate3d(".concat(s, "px, ").concat(a, "px, 0)")), this.options.autoScroll) {
              var l = function (t, e) {
                if (!t || !t.getBoundingClientRect) return m();
                var n = t,
                    o = !1;

                do {
                  if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
                    var i = E(n);

                    if (n.clientWidth < n.scrollWidth && ("auto" == i.overflowX || "scroll" == i.overflowX) || n.clientHeight < n.scrollHeight && ("auto" == i.overflowY || "scroll" == i.overflowY)) {
                      if (!n.getBoundingClientRect || n === document.body) return m();
                      if (o || e) return n;
                      o = !0;
                    }
                  }
                } while (n = n.parentNode);

                return m();
              }(r, !0);

              this.autoScroller.update(l, B, F);
            }

            var c,
                h,
                d,
                p = (c = o, h = i, et.some(function (t) {
              var e = t[I].options.emptyInsertThreshold;

              if (null != e) {
                var n = f(t),
                    o = c >= n.left - e && c <= n.right + e,
                    i = h >= n.top - e && h <= n.bottom + e;
                return o && i ? d = t : void 0;
              }
            }), d);
            p && p[I]._onMove(t, r);
          }
        },
        _allowPut: function () {
          if (H === this.el) return !0;

          if (this.options.group.put) {
            var t = this.options.group,
                e = t.name,
                n = t.put,
                o = H[I].options.group;
            return n.join && n.indexOf(o.name) > -1 || o.name && e && o.name === e;
          }

          return !1;
        },
        _getDirection: function () {
          var t = this.options,
              e = t.draggable,
              n = t.direction;
          return n ? "function" == typeof n ? n.call(F.original, X, this) : n : _(R, e);
        },
        _allowSwap: function () {
          var t = f(Y),
              e = "vertical" === this._getDirection(),
              n = e ? "top" : "left",
              o = e ? "bottom" : "right",
              i = Y[e ? "offsetHeight" : "offsetWidth"],
              r = e ? F.clientY : F.clientX,
              s = r >= t[n] && r < t[o] - i / 2 ? -1 : 1,
              a = b(R, 0, this.options.draggable),
              l = y(R),
              c = f(a),
              h = f(l);

          if (Y === R || v(R, Y)) return W === a && r < c[n] ? (L = Y, !0) : W === l && r > h[o] && (L = Y.nextSibling, !0);
          var u = D(W, Y);
          return L = u < 0 ? Y.nextSibling : Y, z !== Y ? (G = s, !0) : G !== s && (G = s, s < 0 ? u > 0 : u < 0);
        },
        _onMove: function (t, e) {
          if (this._allowPut()) {
            if (M({
              sortable: this,
              name: "onMove",
              params: this._getParams(t)
            }), this.el !== K && (e === this.el || !y(this.el))) return Y = z = null, void this._onInsert(t);
            (Y = g(e, this.options.draggable, this.el)) && !Y.animated && this._allowSwap() && (Y !== W && L !== W ? (this.el !== K ? this._onInsert(t) : Y !== X && this._onChange(t), z = Y) : z = Y);
          }
        },
        _onInsert: function (t) {
          var e = Y || W,
              n = "clone" === Z && this.el !== H && K === H,
              o = "clone" === Z && this.el === H && K !== H;
          U = this.el, J = w(W), tt = e, R = Y ? Y.parentNode : this.el, K[I].animator.collect(W.parentNode), this.animator.collect(R), n && (E(X, "display", ""), H[I].multiplayer.toggleVisible(!0), H[I].options.group.revertDrag || K.insertBefore(X, W)), o && (J = w(X), E(X, "display", "none"), this.multiplayer.toggleVisible(!1)), Y ? R.insertBefore(W, G < 0 ? Y : Y.nextSibling) : R.appendChild(W), Q = w(W), n && H[I].options.group.revertDrag && M({
            sortable: H[I],
            name: "onChange",
            params: this._getParams(t, {
              to: H,
              target: X,
              newIndex: $,
              revertDrag: !0
            })
          }), n || M({
            sortable: K[I],
            name: "onRemove",
            params: this._getParams(t)
          }), o && Y !== X && M({
            sortable: this,
            name: "onChange",
            params: this._getParams(t, {
              from: H,
              backToOrigin: !0
            })
          }), o || M({
            sortable: this,
            name: "onAdd",
            params: this._getParams(t)
          }), K[I].animator.animate(), this.animator.animate(), K = this.el;
        },
        _onChange: function (t) {
          R = Y.parentNode, J = w(W), tt = Y, this.animator.collect(R), R.insertBefore(W, L), Q = w(W), M({
            sortable: this,
            name: "onChange",
            params: this._getParams(t)
          }), this.animator.animate(), K = this.el;
        },
        _onDrop: function (t) {
          C(t), this._cancelStart(), p(j, "touchmove", this._nearestSortable), p(j, "mousemove", this._nearestSortable), p(j, "mouseup", this._onDrop), p(j, "touchend", this._onDrop), p(j, "touchcancel", this._onDrop), S(X, this.options.chosenClass, !1), H && (K = H, J = $, tt === W && (tt = X), this.multiplayer.toggleClass(!1), M({
            sortable: this,
            name: "onUnchoose",
            params: this._getParams(t)
          }), F && this._onEnd(t));
          var e = this.options,
              n = e.multiple,
              o = e.selectHandle;

          if (n && (o && q || !o && !H)) {
            var i = t.changedTouches ? t.changedTouches[0] : t,
                r = i.clientX - B.clientX,
                s = i.clientY - B.clientY,
                a = Math.sqrt(r * r + s * s);
            a >= 0 && a <= 1 && this.multiplayer.onSelect(t, X, this);
          }

          k && k.parentNode && k.parentNode.removeChild(k), this.multiplayer.destroy(), this.autoScroller.destroy(), this._nulling();
        },
        _onEnd: function (t) {
          var e = this._getParams(t);

          this.multiplayer.onDrop(K, U, Z);
          var n = this.options.swapOnDrop;
          "clone" === Z && K !== U || !("function" == typeof n ? n(e) : n) || R.insertBefore(X, W), "clone" !== Z || K === U || this.multiplayer.active() ? W && W.parentNode && W.parentNode.removeChild(W) : S(W, this.options.chosenClass, !1), E(X, "display", ""), K !== U && M({
            sortable: K[I],
            name: "onDrop",
            params: e
          }), M({
            sortable: U[I],
            name: "onDrop",
            params: e
          });
        },
        _getParams: function (t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              o = {};
          return o.event = t, o.to = U, o.from = K, o.node = X, o.clone = W, o.target = tt, o.oldIndex = J, o.newIndex = Q, o.pullMode = Z, this.multiplayer.setParams(o), e(o, n), o.relative = o.target === X ? 0 : D(o.target, W), o;
        },
        _nulling: function () {
          U = K = H = X = Y = L = W = k = R = Z = J = Q = $ = B = F = tt = z = j = G = V = q = ot.clone = ot.ghost = ot.active = ot.dragged = null;
        },
        destroy: function () {
          this._cancelStart(), this._nulling(), p(this.el, "touchstart", this._onDrag), p(this.el, "mousedown", this._onDrag), et.splice(et.indexOf(this.el), 1), this.el[I] = this.animator = this.multiplayer = this.autoScroller = null;
        },
        option: function (t, e) {
          if (void 0 === e) return this.options[t];
          this.options[t] = e, this.animator.options[t] = e, this.multiplayer.options[t] = e, this.autoScroller.options[t] = e, "group" === t && nt(this.options);
        },
        select: function (t) {
          this.multiplayer.select(t);
        },
        deselect: function (t) {
          this.multiplayer.deselect(t);
        },
        getSelectedElements: function () {
          return this.multiplayer.selectedElements;
        }
      }, ot.utils = {
        on: d,
        off: p,
        css: E,
        index: w,
        closest: g,
        getRect: f,
        toggleClass: S,
        detectDirection: _
      }, ot.get = function (t) {
        return t[I];
      }, ot.create = function (t, e) {
        return new ot(t, e);
      }, ot;
    });
  })(sortableDnd_min, sortableDnd_min.exports);

  var sortableDnd_minExports = sortableDnd_min.exports;
  var Dnd = /*@__PURE__*/getDefaultExportFromCjs(sortableDnd_minExports);

  var Observer = /*#__PURE__*/React__default["default"].memo(function (props) {
    var dataKey = props.dataKey,
        children = props.children,
        onSizeChange = props.onSizeChange,
        sizeKey = props.sizeKey;
    var elementRef = React__default["default"].useRef(null);
    var isRenderProps = typeof children === 'function';
    var mergedChildren = isRenderProps ? children(elementRef) : children;
    React__default["default"].useLayoutEffect(function () {
      var observer;

      if ((typeof ResizeObserver === "undefined" ? "undefined" : _typeof(ResizeObserver)) !== undefined) {
        observer = new ResizeObserver(function () {
          var size = elementRef.current[sizeKey];
          onSizeChange && onSizeChange(dataKey, size);
        });
        elementRef.current && observer.observe(elementRef.current);
      }

      return function () {
        if (observer) {
          observer.disconnect();
          observer = null;
        }
      };
    }, [elementRef]);
    return /*#__PURE__*/React__default["default"].cloneElement(mergedChildren, {
      ref: elementRef
    });
  });
  var Item = /*#__PURE__*/React__default["default"].memo(function (props) {
    var _props$Tag = props.Tag,
        Tag = _props$Tag === void 0 ? 'div' : _props$Tag,
        children = props.children;
    return /*#__PURE__*/React__default["default"].createElement(Observer, {
      dataKey: props.dataKey,
      sizeKey: props.sizeKey,
      onSizeChange: props.onSizeChange
    }, /*#__PURE__*/React__default["default"].createElement(Tag, {
      className: props.className,
      style: props.style,
      "data-key": props.dataKey,
      "data-index": props.index
    }, typeof children === 'function' ? children(props.record, props.index, props.dataKey) : children));
  });

  function throttle(fn, wait) {
    var timer = null;

    var result = function result() {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (timer) return;

      if (wait <= 0) {
        fn.apply(this, args);
      } else {
        timer = setTimeout(function () {
          timer = undefined;
          fn.apply(_this, args);
        }, wait);
      }
    };

    result['cancel'] = function () {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };

    return result;
  }
  function debounce(fn, wait) {
    var throttled = throttle(fn, wait);

    var result = function result() {
      throttled['cancel']();
      throttled.apply(this, arguments);
    };

    result['cancel'] = function () {
      throttled['cancel']();
    };

    return result;
  }
  function getDataKey(item, dataKey) {
    return (!Array.isArray(dataKey) ? dataKey.replace(/\[/g, '.').replace(/\]/g, '.').split('.') : dataKey).reduce(function (o, k) {
      return (o || {})[k];
    }, item);
  }

  var SortableAttrs = ['delay', 'group', 'handle', 'lockAxis', 'disabled', 'draggable', 'animation', 'autoScroll', 'ghostClass', 'ghostStyle', 'chosenClass', 'fallbackOnBody', 'scrollThreshold', 'delayOnTouchOnly'];

  function Sortable(el, options) {
    this.el = el;
    this.options = options;
    this.list = [];
    this.store = {};
    this.reRendered = false;
    this.init();
  }

  Sortable.prototype = {
    constructor: Sortable,
    destroy: function destroy() {
      this.sortable && this.sortable.destroy();
      this.sortable = this.store = this.reRendered = null;
    },
    option: function option(key, value) {
      if (key === 'list') {
        this.list = _toConsumableArray(value);
      } else {
        this.sortable.option(key, value);
      }
    },
    init: function init() {
      var _this = this;

      var props = SortableAttrs.reduce(function (res, key) {
        res[key] = _this.options[key];
        return res;
      }, {});
      this.sortable = new Dnd(this.el, _objectSpread2(_objectSpread2({}, props), {}, {
        swapOnDrop: function swapOnDrop(params) {
          return params.from === params.to;
        },
        onDrag: function onDrag(params) {
          return _this.onDrag(params);
        },
        onAdd: function onAdd(params) {
          return _this.onAdd(params);
        },
        onRemove: function onRemove(params) {
          return _this.onRemove(params);
        },
        onChange: function onChange(params) {
          return _this.onChange(params);
        },
        onDrop: function onDrop(params) {
          return _this.onDrop(params);
        }
      }));
      this.list = _toConsumableArray(this.options.list);
    },
    onDrag: function onDrag(params) {
      var key = params.node.dataset.key;
      var index = this.getIndex(this.list, key);
      var item = this.list[index]; // store the drag item

      this.store = {
        item: item,
        key: key,
        start: {
          index: index,
          list: this.list
        },
        from: {
          index: index,
          list: this.list
        },
        to: {
          index: index,
          list: this.list
        }
      };
      this.sortable.option('store', this.store);
      this.dispatchEvent('onDrag', {
        item: item,
        key: key,
        index: index
      });
    },
    onRemove: function onRemove(params) {
      var key = params.node.dataset.key;
      var index = this.getIndex(this.list, key);
      var item = this.list[index];
      this.list.splice(index, 1);
      Object.assign(this.store, {
        key: key,
        item: item
      });
      this.sortable.option('store', this.store);
      this.dispatchEvent('onRemove', {
        item: item,
        key: key,
        index: index
      });
    },
    onAdd: function onAdd(params) {
      var from = params.from,
          target = params.target,
          relative = params.relative;

      var _Dnd$get$option = Dnd.get(from).option('store'),
          key = _Dnd$get$option.key,
          item = _Dnd$get$option.item;

      var index = this.getIndex(this.list, target.dataset.key);

      if (relative === 0) {
        index = this.list.length;
      } else if (relative === -1) {
        index += 1;
      }

      this.list.splice(index, 0, item);
      Object.assign(this.store, {
        to: {
          index: index,
          list: this.list
        }
      });
      this.sortable.option('store', this.store);
      this.dispatchEvent('onAdd', {
        item: item,
        key: key,
        index: index
      });
    },
    onChange: function onChange(params) {
      var store = Dnd.get(params.from).option('store');

      if (params.revertDrag) {
        this.list = _toConsumableArray(this.options.list);
        Object.assign(this.store, {
          from: store.start
        });
        return;
      }

      var node = params.node,
          target = params.target,
          relative = params.relative,
          backToOrigin = params.backToOrigin;
      var fromIndex = this.getIndex(this.list, node.dataset.key);
      var fromItem = this.list[fromIndex];
      var toIndex = this.getIndex(this.list, target.dataset.key);

      if (backToOrigin) {
        if (relative === 1 && store.from.index < toIndex) {
          toIndex -= 1;
        }

        if (relative === -1 && store.from.index > toIndex) {
          toIndex += 1;
        }
      }

      this.list.splice(fromIndex, 1);
      this.list.splice(toIndex, 0, fromItem);
      Object.assign(this.store, {
        from: {
          index: toIndex,
          list: this.list
        },
        to: {
          index: toIndex,
          list: this.list
        }
      });
    },
    onDrop: function onDrop(params) {
      var _Dnd$get$option2 = Dnd.get(params.from).option('store'),
          start = _Dnd$get$option2.start,
          item = _Dnd$get$option2.item,
          key = _Dnd$get$option2.key;

      var _Dnd$get$option3 = Dnd.get(params.to).option('store'),
          to = _Dnd$get$option3.to;

      var changed = params.from !== params.to || start.index !== to.index;
      this.dispatchEvent('onDrop', {
        changed: changed,
        list: this.list,
        item: item,
        key: key,
        from: start,
        to: to
      });

      if (params.from === this.el && this.reRendered) {
        var _Dnd$dragged;

        (_Dnd$dragged = Dnd.dragged) === null || _Dnd$dragged === void 0 ? void 0 : _Dnd$dragged.remove();
      }

      if (params.from !== params.to && params.pullMode === 'clone') {
        var _Dnd$clone;

        (_Dnd$clone = Dnd.clone) === null || _Dnd$clone === void 0 ? void 0 : _Dnd$clone.remove();
      }

      this.reRendered = false;
    },
    getIndex: function getIndex(list, key) {
      for (var i = 0; i < list.length; i++) {
        if (getDataKey(list[i], this.options.dataKey) == key) {
          return i;
        }
      }

      return -1;
    },
    dispatchEvent: function dispatchEvent(name, params) {
      var cb = this.options[name];
      cb && cb(params);
    }
  };

  var _rectDir, _scrollDir, _scrollSize, _offsetSize;
  var CACLTYPE = {
    INIT: 'INIT',
    FIXED: 'FIXED',
    DYNAMIC: 'DYNAMIC'
  };
  var SCROLL_DIRECTION = {
    FRONT: 'FRONT',
    BEHIND: 'BEHIND',
    STATIONARY: 'STATIONARY'
  };
  var DIRECTION = {
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical'
  };
  var rectDir = (_rectDir = {}, _defineProperty(_rectDir, DIRECTION.VERTICAL, 'top'), _defineProperty(_rectDir, DIRECTION.HORIZONTAL, 'left'), _rectDir);
  var scrollDir = (_scrollDir = {}, _defineProperty(_scrollDir, DIRECTION.VERTICAL, 'scrollTop'), _defineProperty(_scrollDir, DIRECTION.HORIZONTAL, 'scrollLeft'), _scrollDir);
  var scrollSize = (_scrollSize = {}, _defineProperty(_scrollSize, DIRECTION.VERTICAL, 'scrollHeight'), _defineProperty(_scrollSize, DIRECTION.HORIZONTAL, 'scrollWidth'), _scrollSize);
  var offsetSize = (_offsetSize = {}, _defineProperty(_offsetSize, DIRECTION.VERTICAL, 'offsetHeight'), _defineProperty(_offsetSize, DIRECTION.HORIZONTAL, 'offsetWidth'), _offsetSize);

  function Virtual(options) {
    this.options = options;
    var defaults = {
      size: 0,
      keeps: 0,
      buffer: 0,
      wrapper: null,
      scroller: null,
      direction: 'vertical',
      uniqueKeys: [],
      debounceTime: null,
      throttleTime: null
    };

    for (var name in defaults) {
      !(name in this.options) && (this.options[name] = defaults[name]);
    }

    this.sizes = new Map(); // store item size

    this.range = {
      start: 0,
      end: 0,
      front: 0,
      behind: 0
    };
    this.offset = 0;
    this.calcType = CACLTYPE.INIT;
    this.calcSize = {
      average: 0,
      total: 0,
      fixed: 0
    };
    this.scrollEl = this.getScrollElement(options.scroller);
    this.scrollDir = '';
    this.updateOnScrollFunction();
    this.addScrollEventListener();
    this.checkIfUpdate(0, options.keeps - 1);
  }

  Virtual.prototype = {
    constructor: Virtual,
    isFront: function isFront() {
      return this.scrollDir === SCROLL_DIRECTION.FRONT;
    },
    isBehind: function isBehind() {
      return this.scrollDir === SCROLL_DIRECTION.BEHIND;
    },
    isFixed: function isFixed() {
      return this.calcType === CACLTYPE.FIXED;
    },
    getSize: function getSize(key) {
      return this.sizes.get(key) || this.getItemSize();
    },
    getOffset: function getOffset() {
      return this.scrollEl[scrollDir[this.options.direction]];
    },
    getScrollSize: function getScrollSize() {
      return this.scrollEl[scrollSize[this.options.direction]];
    },
    getClientSize: function getClientSize() {
      return this.scrollEl[offsetSize[this.options.direction]];
    },
    scrollToOffset: function scrollToOffset(offset) {
      this.scrollEl[scrollDir[this.options.direction]] = offset;
    },
    scrollToIndex: function scrollToIndex(index) {
      if (index >= this.options.uniqueKeys.length - 1) {
        this.scrollToBottom();
      } else {
        var indexOffset = this.getOffsetByIndex(index);
        var startOffset = this.getScrollStartOffset();
        this.scrollToOffset(indexOffset + startOffset);
      }
    },
    scrollToBottom: function scrollToBottom() {
      var _this = this;

      var offset = this.getScrollSize();
      this.scrollToOffset(offset); // if the bottom is not reached, execute the scroll method again

      setTimeout(function () {
        var clientSize = _this.getClientSize();

        var scrollSize = _this.getScrollSize();

        var scrollOffset = _this.getOffset();

        if (scrollOffset + clientSize + 1 < scrollSize) {
          _this.scrollToBottom();
        }
      }, 5);
    },
    option: function option(key, value) {
      var _this2 = this;

      var oldValue = this.options[key];
      this.options[key] = value;

      if (key === 'uniqueKeys') {
        this.sizes.forEach(function (v, k) {
          if (!value.includes(k)) {
            _this2.sizes["delete"](k);
          }
        });
      }

      if (key === 'scroller') {
        oldValue && Dnd.utils.off(oldValue, 'scroll', this.onScroll);
        this.scrollEl = this.getScrollElement(value);
        this.addScrollEventListener();
      }
    },
    updateRange: function updateRange(range) {
      if (range) {
        this.handleUpdate(range.start, range.end);
        return;
      }

      var start = this.range.start;
      start = Math.max(start, 0);
      this.handleUpdate(start, this.getEndByStart(start));
    },
    onItemResized: function onItemResized(key, size) {
      this.sizes.set(key, size);

      if (this.calcType === CACLTYPE.INIT) {
        this.calcType = CACLTYPE.FIXED;
        this.calcSize.fixed = size;
      } else if (this.isFixed() && this.calcSize.fixed !== size) {
        this.calcType = CACLTYPE.DYNAMIC;
        this.calcSize.fixed = undefined;
      } // In the case of non-fixed heights, the average height and the total height are calculated


      if (this.calcType !== CACLTYPE.FIXED) {
        this.calcSize.total = _toConsumableArray(this.sizes.values()).reduce(function (t, i) {
          return t + i;
        }, 0);
        this.calcSize.average = Math.round(this.calcSize.total / this.sizes.size);
      }
    },
    addScrollEventListener: function addScrollEventListener() {
      if (this.options.scroller) {
        Dnd.utils.on(this.options.scroller, 'scroll', this.onScroll);
      }
    },
    removeScrollEventListener: function removeScrollEventListener() {
      if (this.options.scroller) {
        Dnd.utils.off(this.options.scroller, 'scroll', this.onScroll);
      }
    },
    // ========================================= Properties =========================================
    updateOnScrollFunction: function updateOnScrollFunction() {
      var _this3 = this;

      var _this$options = this.options,
          debounceTime = _this$options.debounceTime,
          throttleTime = _this$options.throttleTime;

      if (debounceTime) {
        this.onScroll = debounce(function () {
          return _this3.handleScroll();
        }, debounceTime);
      } else if (throttleTime) {
        this.onScroll = throttle(function () {
          return _this3.handleScroll();
        }, throttleTime);
      } else {
        this.onScroll = function () {
          return _this3.handleScroll();
        };
      }
    },
    handleScroll: function handleScroll() {
      var offset = this.getOffset();
      var clientSize = this.getClientSize();
      var scrollSize = this.getScrollSize();

      if (offset === this.offset) {
        this.scrollDir = SCROLL_DIRECTION.STATIONARY;
      } else {
        this.scrollDir = offset < this.offset ? SCROLL_DIRECTION.FRONT : SCROLL_DIRECTION.BEHIND;
      }

      this.offset = offset;
      var top = this.isFront() && offset <= 0;
      var bottom = this.isBehind() && clientSize + offset >= scrollSize;
      this.options.onScroll({
        top: top,
        bottom: bottom,
        offset: offset,
        direction: this.scrollDir
      });

      if (this.isFront()) {
        this.handleScrollFront();
      } else if (this.isBehind()) {
        this.handleScrollBehind();
      }
    },
    handleScrollFront: function handleScrollFront() {
      var scrolls = this.getScrollItems();

      if (scrolls > this.range.start) {
        return;
      }

      var start = Math.max(scrolls - this.options.buffer, 0);
      this.checkIfUpdate(start, this.getEndByStart(start));
    },
    handleScrollBehind: function handleScrollBehind() {
      var scrolls = this.getScrollItems();

      if (scrolls < this.range.start + this.options.buffer) {
        return;
      }

      this.checkIfUpdate(scrolls, this.getEndByStart(scrolls));
    },
    getScrollItems: function getScrollItems() {
      var offset = this.offset - this.getScrollStartOffset();

      if (offset <= 0) {
        return 0;
      }

      if (this.isFixed()) {
        return Math.floor(offset / this.calcSize.fixed);
      }

      var low = 0;
      var high = this.options.uniqueKeys.length;
      var middle = 0;
      var middleOffset = 0;

      while (low <= high) {
        middle = low + Math.floor((high - low) / 2);
        middleOffset = this.getOffsetByIndex(middle);

        if (middleOffset === offset) {
          return middle;
        } else if (middleOffset < offset) {
          low = middle + 1;
        } else if (middleOffset > offset) {
          high = middle - 1;
        }
      }

      return low > 0 ? --low : 0;
    },
    checkIfUpdate: function checkIfUpdate(start, end) {
      var keeps = this.options.keeps;
      var total = this.options.uniqueKeys.length;

      if (total <= keeps) {
        start = 0;
        end = this.getLastIndex();
      } else if (end - start < keeps - 1) {
        start = end - keeps + 1;
      }

      if (this.range.start !== start) {
        this.handleUpdate(start, end);
      }
    },
    handleUpdate: function handleUpdate(start, end) {
      this.range.start = start;
      this.range.end = end;
      this.range.front = this.getFrontOffset();
      this.range.behind = this.getBehindOffset();
      this.options.onUpdate(_objectSpread2({}, this.range));
    },
    getFrontOffset: function getFrontOffset() {
      if (this.isFixed()) {
        return this.calcSize.fixed * this.range.start;
      } else {
        return this.getOffsetByIndex(this.range.start);
      }
    },
    getBehindOffset: function getBehindOffset() {
      var end = this.range.end;
      var last = this.getLastIndex();

      if (this.isFixed()) {
        return (last - end) * this.calcSize.fixed;
      }

      return (last - end) * this.getItemSize();
    },
    getOffsetByIndex: function getOffsetByIndex(index) {
      if (!index) return 0;
      var offset = 0;

      for (var i = 0; i < index; i++) {
        var size = this.sizes.get(this.options.uniqueKeys[i]);
        offset = offset + (typeof size === 'number' ? size : this.getItemSize());
      }

      return offset;
    },
    getEndByStart: function getEndByStart(start) {
      return Math.min(start + this.options.keeps - 1, this.getLastIndex());
    },
    getLastIndex: function getLastIndex() {
      var _this$options2 = this.options,
          uniqueKeys = _this$options2.uniqueKeys,
          keeps = _this$options2.keeps;
      return uniqueKeys.length > 0 ? uniqueKeys.length - 1 : keeps - 1;
    },
    getItemSize: function getItemSize() {
      return this.isFixed() ? this.calcSize.fixed : this.calcSize.average || this.options.size;
    },
    getScrollElement: function getScrollElement(scroller) {
      if (scroller instanceof Document && scroller.nodeType === 9 || scroller instanceof Window) {
        return document.scrollingElement || document.documentElement || document.body;
      }

      return scroller;
    },
    getScrollStartOffset: function getScrollStartOffset() {
      var offset = 0;
      var _this$options3 = this.options,
          wrapper = _this$options3.wrapper,
          scroller = _this$options3.scroller;

      if (wrapper && wrapper) {
        var rect = Dnd.utils.getRect(wrapper, true, scroller);
        offset = this.offset + rect[rectDir[this.options.direction]];
      }

      return offset;
    }
  };

  var Emits = {
    top: 'v-top',
    bottom: 'v-bottom',
    drag: 'v-drag',
    drop: 'v-drop',
    add: 'v-add',
    remove: 'v-remove'
  };

  function VirtualDragList(props, ref) {
    var _props$keeps = props.keeps,
        keeps = _props$keeps === void 0 ? 30 : _props$keeps,
        _props$dataKey = props.dataKey,
        dataKey = _props$dataKey === void 0 ? '' : _props$dataKey,
        _props$direction = props.direction,
        direction = _props$direction === void 0 ? 'vertical' : _props$direction,
        _props$dataSource = props.dataSource,
        dataSource = _props$dataSource === void 0 ? [] : _props$dataSource,
        _props$throttleTime = props.throttleTime,
        throttleTime = _props$throttleTime === void 0 ? 0 : _props$throttleTime,
        _props$debounceTime = props.debounceTime,
        debounceTime = _props$debounceTime === void 0 ? 0 : _props$debounceTime,
        _props$delay = props.delay,
        delay = _props$delay === void 0 ? 0 : _props$delay,
        _props$animation = props.animation,
        animation = _props$animation === void 0 ? 150 : _props$animation,
        _props$autoScroll = props.autoScroll,
        autoScroll = _props$autoScroll === void 0 ? true : _props$autoScroll,
        _props$scrollThreshol = props.scrollThreshold,
        scrollThreshold = _props$scrollThreshol === void 0 ? 55 : _props$scrollThreshol,
        _props$wrapTag = props.wrapTag,
        WrapTag = _props$wrapTag === void 0 ? 'div' : _props$wrapTag,
        _props$rootTag = props.rootTag,
        RootTag = _props$rootTag === void 0 ? 'div' : _props$rootTag,
        _props$itemTag = props.itemTag,
        itemTag = _props$itemTag === void 0 ? 'div' : _props$itemTag,
        _props$style = props.style,
        style = _props$style === void 0 ? {} : _props$style,
        _props$itemStyle = props.itemStyle,
        itemStyle = _props$itemStyle === void 0 ? {} : _props$itemStyle,
        _props$wrapStyle = props.wrapStyle,
        wrapStyle = _props$wrapStyle === void 0 ? {} : _props$wrapStyle,
        _props$ghostStyle = props.ghostStyle,
        ghostStyle = _props$ghostStyle === void 0 ? {} : _props$ghostStyle;

    var _React$useState = React__default["default"].useState(null),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        dragged = _React$useState2[0],
        setDragged = _React$useState2[1];

    var _React$useState3 = React__default["default"].useState([]),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        viewList = _React$useState4[0],
        setViewList = _React$useState4[1];

    var _React$useState5 = React__default["default"].useState({}),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        viewRange = _React$useState6[0],
        setViewRange = _React$useState6[1];

    var list = React__default["default"].useRef([]);
    var range = React__default["default"].useRef({
      start: 0,
      end: keeps - 1,
      front: 0,
      behind: 0
    });
    var uniqueKeys = React__default["default"].useRef([]);
    var lastLength = React__default["default"].useRef(null); // record current list's length

    var rootRef = React__default["default"].useRef(null); // root element

    var wrapRef = React__default["default"].useRef(null); // list element

    var sortable = React__default["default"].useRef(null);
    var virtual = React__default["default"].useRef(null);

    var _React$useMemo = React__default["default"].useMemo(function () {
      var isHorizontal = direction !== 'vertical';
      return {
        isHorizontal: isHorizontal,
        itemSizeKey: isHorizontal ? 'offsetWidth' : 'offsetHeight'
      };
    }, [direction]),
        isHorizontal = _React$useMemo.isHorizontal,
        itemSizeKey = _React$useMemo.itemSizeKey;
    /**
     * git item size by data-key
     */


    var getSize = function getSize(key) {
      return virtual.current.getSize(key);
    };
    /**
     * Get the current scroll height
     */


    var getOffset = function getOffset() {
      return virtual.current.getOffset();
    };
    /**
     * Get client viewport size
     */


    var getClientSize = function getClientSize() {
      return virtual.current.getClientSize();
    };
    /**
     * Get all scroll size
     */


    var getScrollSize = function getScrollSize() {
      return virtual.current.getScrollSize();
    };
    /**
     * Scroll to the specified offset
     */


    var scrollToOffset = function scrollToOffset(offset) {
      virtual.current.scrollToOffset(offset);
    };
    /**
     * Scroll to the specified index position
     */


    var scrollToIndex = function scrollToIndex(index) {
      virtual.current.scrollToIndex(index);
    };
    /**
     * Scroll to the specified data-key position
     */


    var scrollToKey = function scrollToKey(key) {
      var index = uniqueKeys.current.indexOf(key);

      if (index > -1) {
        virtual.current.scrollToIndex(index);
      }
    };
    /**
     * Scroll to top of list
     */


    var scrollToTop = function scrollToTop() {
      scrollToOffset(0);
    };
    /**
     * Scroll to bottom of list
     */


    var scrollToBottom = function scrollToBottom() {
      virtual.current.scrollToBottom();
    };

    React__default["default"].useImperativeHandle(ref, function () {
      return {
        getSize: getSize,
        getOffset: getOffset,
        getClientSize: getClientSize,
        getScrollSize: getScrollSize,
        scrollToTop: scrollToTop,
        scrollToKey: scrollToKey,
        scrollToIndex: scrollToIndex,
        scrollToOffset: scrollToOffset,
        scrollToBottom: scrollToBottom
      };
    });
    React__default["default"].useLayoutEffect(function () {
      initVirtual();
    }, []);
    React__default["default"].useEffect(function () {
      initSortable();
      virtual.current.option('wrapper', wrapRef.current);

      if (!props.scroller) {
        virtual.current.option('scroller', rootRef.current);
      } // destroy


      return function () {
        var _a, _b;

        (_a = virtual.current) === null || _a === void 0 ? void 0 : _a.removeScrollEventListener();
        (_b = sortable.current) === null || _b === void 0 ? void 0 : _b.destroy();
      };
    }, []);
    React__default["default"].useEffect(function () {
      var _a;

      (_a = sortable.current) === null || _a === void 0 ? void 0 : _a.option('disabled', props.disabled);
    }, [props.disabled]);
    React__default["default"].useEffect(function () {
      var _a;

      var oldList = _toConsumableArray(list.current);

      list.current = dataSource;
      updateUniqueKeys();
      setViewList(function () {
        updateRange(oldList, list.current);
        return _toConsumableArray(dataSource);
      });
      (_a = sortable.current) === null || _a === void 0 ? void 0 : _a.option('list', dataSource); // if auto scroll to the last offset

      if (lastLength.current && props.keepOffset) {
        var index = Math.abs(dataSource.length - lastLength.current);
        scrollToIndex(index);
        lastLength.current = null;
      }
    }, [dataSource]);

    var initVirtual = function initVirtual() {
      virtual.current = new Virtual({
        size: props.size,
        keeps: keeps,
        buffer: Math.round(keeps / 3),
        scroller: props.scroller,
        direction: direction,
        uniqueKeys: uniqueKeys.current,
        debounceTime: debounceTime,
        throttleTime: throttleTime,
        onScroll: function onScroll(params) {
          lastLength.current = null;

          if (!!list.current.length && params.top) {
            handleToTop();
          } else if (params.bottom) {
            handleToBottom();
          }
        },
        onUpdate: function onUpdate(newRange) {
          if (Dnd.dragged && newRange.start !== range.current.start) {
            sortable.current.reRendered = true;
          }

          range.current = newRange;
          setViewRange(function () {
            return newRange;
          });
        }
      });
    };

    var initSortable = function initSortable() {
      sortable.current = new Sortable(wrapRef.current, Object.assign(Object.assign({}, props), {
        list: list.current,
        delay: delay,
        animation: animation,
        autoScroll: autoScroll,
        ghostStyle: ghostStyle,
        scrollThreshold: scrollThreshold,
        onDrag: function onDrag(params) {
          var _a;

          (_a = props[Emits.drag]) === null || _a === void 0 ? void 0 : _a.call(props, params);
          setDragged(function () {
            return Dnd.dragged;
          });
        },
        onAdd: function onAdd(params) {
          var _a;

          (_a = props[Emits.add]) === null || _a === void 0 ? void 0 : _a.call(props, params);
        },
        onRemove: function onRemove(params) {
          var _a;

          (_a = props[Emits.remove]) === null || _a === void 0 ? void 0 : _a.call(props, params);
        },
        onDrop: function onDrop(params) {
          var _a;

          if (params.changed) {
            var prelist = list.current;
            list.current = _toConsumableArray(params.list);
            updateUniqueKeys();
            setDragged(function () {
              return null;
            });
            setViewList(function () {
              return _toConsumableArray(params.list);
            });
            updateRange(prelist, list.current);
          }

          (_a = props[Emits.drop]) === null || _a === void 0 ? void 0 : _a.call(props, params);
        }
      }));
    };

    var updateRange = function updateRange(oldlist, newlist) {
      var _range = Object.assign({}, range.current);

      if (newlist.length > oldlist.length && range.current.end === oldlist.length - 1 && scrolledToBottom()) {
        _range.end++;
        _range.start = Math.max(0, _range.end - keeps);
      }

      virtual.current.updateRange(_range);
    };

    var updateUniqueKeys = function updateUniqueKeys() {
      uniqueKeys.current = list.current.map(function (item) {
        return getDataKey(item, dataKey);
      });
      virtual.current.option('uniqueKeys', uniqueKeys.current);
    };

    var scrolledToBottom = function scrolledToBottom() {
      var offset = getOffset();
      var clientSize = getClientSize();
      var scrollSize = getScrollSize();
      return offset + clientSize + 1 >= scrollSize;
    };

    var handleToTop = debounce(function () {
      var _a;

      lastLength.current = list.current.length;
      (_a = props[Emits.top]) === null || _a === void 0 ? void 0 : _a.call(props);
    }, 50);
    var handleToBottom = debounce(function () {
      var _a;

      (_a = props[Emits.bottom]) === null || _a === void 0 ? void 0 : _a.call(props);
    }, 50);

    var onItemSizeChange = function onItemSizeChange(key, size) {
      var renders = virtual.current.sizes.size;
      virtual.current.onItemResized(key, size);

      if (renders === 0) {
        updateRange(list.current, list.current);
      }
    }; // check item show or not


    var getItemStyle = React__default["default"].useCallback(function (itemKey) {
      var fromKey = dragged === null || dragged === void 0 ? void 0 : dragged.dataset.key;

      if (itemKey == fromKey) {
        return {
          display: 'none'
        };
      }

      return {};
    }, [dragged]);
    var RootStyle = React__default["default"].useMemo(function () {
      return Object.assign(Object.assign({}, style), {
        overflow: props.scroller ? '' : isHorizontal ? 'auto hidden' : 'hidden auto'
      });
    }, [style, isHorizontal, props.scroller]);
    var WrapStyle = React__default["default"].useMemo(function () {
      var front = viewRange.front,
          behind = viewRange.behind;
      return Object.assign(Object.assign({}, wrapStyle), {
        padding: isHorizontal ? "0px ".concat(behind, "px 0px ").concat(front, "px") : "".concat(front, "px 0px ").concat(behind, "px")
      });
    }, [wrapStyle, isHorizontal, viewRange]);

    var renderItems = function renderItems() {
      return viewList.slice(viewRange.start, viewRange.end + 1).map(function (item, i) {
        var index = viewRange.start + i;
        var key = getDataKey(item, dataKey);
        return /*#__PURE__*/React__default["default"].createElement(Item, {
          key: key,
          Tag: itemTag,
          index: index,
          record: item,
          dataKey: key,
          sizeKey: itemSizeKey,
          children: props.children,
          className: props.itemClass,
          style: Object.assign(Object.assign({}, itemStyle), getItemStyle(key)),
          onSizeChange: onItemSizeChange
        });
      });
    };

    return /*#__PURE__*/React__default["default"].createElement(RootTag, {
      ref: rootRef,
      style: RootStyle,
      className: props.className
    }, props.header, /*#__PURE__*/React__default["default"].createElement(WrapTag, {
      ref: wrapRef,
      style: WrapStyle,
      className: props.wrapClass
    }, renderItems()), props.footer);
  }

  var index = /*#__PURE__*/React__default["default"].forwardRef(VirtualDragList);

  return index;

}));
