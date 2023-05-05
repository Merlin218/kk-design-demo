module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 588);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 57:
/***/ (function(module, exports) {

module.exports = require("@tanem/svg-injector");

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@tanem/svg-injector"
var svg_injector_ = __webpack_require__(57);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/svg-icon/src/index.vue?vue&type=script&lang=js&


/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'SvgIcon',
  props: {
    afterInjection: {
      type: Function,
      default: function _default() {
        return undefined;
      }
    },
    beforeInjection: {
      type: Function,
      default: function _default() {
        return undefined;
      }
    },
    desc: {
      type: String,
      default: ''
    },
    evalScripts: {
      type: String,
      default: 'never'
    },
    fallback: {
      type: [Function, Object, String],
      default: null
    },
    httpRequestWithCredentials: {
      type: Boolean,
      default: false
    },
    loading: {
      type: [Function, Object, String],
      default: null
    },
    dynamicColor: {
      type: Boolean,
      default: false
    },
    renumerateIRIElements: {
      type: Boolean,
      default: true
    },
    src: {
      type: String
    },
    title: {
      type: String,
      default: ''
    },
    width: {
      type: Number
    },
    color: {
      type: String,
      default: ''
    },
    height: {
      type: Number
    },
    useRequestCache: {
      type: Boolean,
      default: true
    },
    wrapper: {
      type: String,
      default: 'span'
    }
  },
  data: function data() {
    return {
      hasError: false,
      isLoading: true,
      wrapperRef: null
    };
  },
  render: function render(h) {
    var wrapper = this.wrapper,
        isLoading = this.isLoading,
        hasError = this.hasError,
        loading = this.loading,
        fallback = this.fallback,
        dynamicColor = this.dynamicColor;

    return h(wrapper, {
      'v-loading': !loading && isLoading,
      ref: 'wrapperRef',
      style: dynamicColor ? {} : {
        color: this.color ? this.color : ''
      }
    }, [loading ? h(loading, { 'v-if': isLoading }) : '', fallback ? h(fallback, { 'v-if': hasError }) : '']);
  },

  methods: {
    renderSVG: function renderSVG() {
      var _this = this;

      var desc = this.desc,
          evalScripts = this.evalScripts,
          httpRequestWithCredentials = this.httpRequestWithCredentials,
          renumerateIRIElements = this.renumerateIRIElements,
          src = this.src,
          title = this.title,
          useRequestCache = this.useRequestCache,
          width = this.width,
          height = this.height,
          color = this.color,
          dynamicColor = this.dynamicColor;


      if (!src || !this.$refs.wrapperRef) return;

      this.$refs.wrapperRef.dataset.src = src;

      var afterEach = function afterEach(err, svg) {
        if (err) {
          _this.handleError(err);
          return;
        }
        _this.isLoading = false;
        // 修改尺寸
        if (width) {
          svg.setAttribute('width', width);
        }
        if (height) {
          svg.setAttribute('height', height);
        }
        if (dynamicColor || color) {
          var paths = svg.querySelectorAll('path');
          paths.forEach(function (path) {
            path.setAttribute('fill', 'currentColor');
          });
        }
        _this.$nextTick(function () {
          try {
            _this.afterInjection(svg);
          } catch (err) {
            _this.handleError(err);
          }
        });
      };
      var beforeEach = function beforeEach(svg) {
        svg.setAttribute('role', 'img');

        if (desc) {
          var originalDesc = svg.querySelector(':scope > desc');
          if (originalDesc) {
            svg.removeChild(originalDesc);
          }
          var newDesc = document.createElement('desc');
          newDesc.innerHTML = desc;
          svg.prepend(newDesc);
        }

        if (title) {
          var originalTitle = svg.querySelector(':scope > title');
          if (originalTitle) {
            svg.removeChild(originalTitle);
          }
          var newTitle = document.createElement('title');
          newTitle.innerHTML = title;
          svg.prepend(newTitle);
        }

        try {
          _this.beforeInjection(svg);
        } catch (error) {
          _this.handleError(error);
        }
      };

      Object(svg_injector_["SVGInjector"])(this.$refs.wrapperRef, {
        afterEach: afterEach,
        beforeEach: beforeEach,
        cacheRequests: useRequestCache,
        evalScripts: evalScripts,
        httpRequestWithCredentials: httpRequestWithCredentials,
        renumerateIRIElements: renumerateIRIElements
      });
    },
    removeSVG: function removeSVG() {
      if (this.wrapperRef) {
        var svg = this.wrapperRef.querySelector('svg');
        if (svg) {
          this.wrapperRef.removeChild(svg);
        }
      }
    },
    handleError: function handleError(err) {
      var _this2 = this;

      this.removeSVG();
      if (!this._isMounted) {
        this.$emit('error', err);
        return;
      }
      this.hasError = true;
      this.isLoading = false;
      this.$nextTick(function () {
        _this2.$emit('error', err);
      });
    }
  },
  mounted: function mounted() {
    this.renderSVG();
  },
  beforeDestroy: function beforeDestroy() {
    this.removeSVG();
  }
});
// CONCATENATED MODULE: ./packages/svg-icon/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var svg_icon_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/svg-icon/src/index.vue
var render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  svg_icon_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/svg-icon/src/index.vue"
/* harmony default export */ var svg_icon_src = (component.exports);
// CONCATENATED MODULE: ./packages/svg-icon/index.js


/* istanbul ignore next */
svg_icon_src.install = function (Vue) {
	Vue.component(svg_icon_src.name, svg_icon_src);
};

/* harmony default export */ var svg_icon = __webpack_exports__["default"] = (svg_icon_src);

/***/ })

/******/ });