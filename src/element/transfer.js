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
/******/ 	return __webpack_require__(__webpack_require__.s = 513);
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

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("@feb/vue-design/lib/input");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("@feb/vue-design/lib/mixins/migrating");

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = require("@feb/vue-design/lib/button");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("@feb/vue-design/lib/checkbox");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@feb/vue-design/lib/mixins/emitter");

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = require("@feb/vue-design/lib/checkbox-group");

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/transfer/src/main.vue?vue&type=template&id=5c654dd8&
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      class: [
        "el-transfer",
        {
          "is-disabled": _vm.disabled,
        },
      ],
    },
    [
      _c(
        "transfer-panel-left",
        _vm._b(
          {
            ref: "leftPanel",
            attrs: {
              data: _vm.sourceData,
              title: _vm.titles[0] || _vm.t("el.transfer.titles.0"),
              "default-checked": _vm.leftDefaultChecked,
              placeholder:
                _vm.filterPlaceholder || _vm.t("el.transfer.filterPlaceholder"),
              checkedArr: _vm.checkedArr,
              type: _vm.type,
            },
            on: { "checked-change": _vm.onSourceCheckedChange },
          },
          "transfer-panel-left",
          _vm.$props,
          false
        ),
        [_vm._t("left-footer")],
        2
      ),
      _c(
        "transfer-panel-right",
        _vm._b(
          {
            ref: "rightPanel",
            attrs: {
              data: _vm.data,
              title: _vm.titles[1] || _vm.t("el.transfer.titles.1"),
              "default-checked": _vm.rightDefaultChecked,
              placeholder:
                _vm.filterPlaceholder || _vm.t("el.transfer.filterPlaceholder"),
              checkedArr: _vm.checkedArr,
              type: _vm.type,
              transformData: _vm.transformData,
            },
            on: {
              "checked-change": _vm.onTargetCheckedChange,
              "update-checked-arr": _vm.updateCheckedArr,
            },
          },
          "transfer-panel-right",
          _vm.$props,
          false
        ),
        [_vm._t("right-footer")],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/transfer/src/main.vue?vue&type=template&id=5c654dd8&

// EXTERNAL MODULE: external "@feb/vue-design/lib/button"
var button_ = __webpack_require__(14);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "@feb/vue-design/lib/mixins/emitter"
var emitter_ = __webpack_require__(4);
var emitter_default = /*#__PURE__*/__webpack_require__.n(emitter_);

// EXTERNAL MODULE: external "@feb/vue-design/lib/mixins/locale"
var locale_ = __webpack_require__(6);
var locale_default = /*#__PURE__*/__webpack_require__.n(locale_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/transfer/src/transfer-panel-left.vue?vue&type=template&id=8152f972&
var transfer_panel_leftvue_type_template_id_8152f972_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "el-transfer-panel" }, [
    _c(
      "div",
      {
        class: [
          "el-transfer-panel__body",
          _vm.hasFooter ? "is-with-footer" : "",
        ],
      },
      [
        _vm.filterable
          ? _c(
              "el-input",
              {
                staticClass: "el-transfer-panel__filter",
                attrs: { size: "small", placeholder: _vm.placeholder },
                nativeOn: {
                  mouseenter: function ($event) {
                    _vm.inputHover = true
                  },
                  mouseleave: function ($event) {
                    _vm.inputHover = false
                  },
                },
                model: {
                  value: _vm.query,
                  callback: function ($$v) {
                    _vm.query = $$v
                  },
                  expression: "query",
                },
              },
              [
                _c("i", {
                  class: ["el-input__icon", "el-icon-" + _vm.inputIcon],
                  attrs: { slot: "prefix" },
                  on: { click: _vm.clearQuery },
                  slot: "prefix",
                }),
              ]
            )
          : _vm._e(),
        _c(
          "div",
          { staticClass: "el-transfer-panel__filter-bottom" },
          [
            _c("span", [_vm._v("总个数：" + _vm._s(_vm.checkedSummary))]),
            _c(
              "el-button",
              {
                attrs: { type: "info", size: "mini" },
                on: {
                  click: function ($event) {
                    _vm.handleAllCheckedChange(!_vm.allChecked)
                  },
                },
              },
              [_vm._v(_vm._s(_vm.allChecked ? "取消全选" : "全选"))]
            ),
          ],
          1
        ),
        _vm.type === "list" || _vm.type === "groupList"
          ? _c(
              "el-checkbox-group",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.hasNoMatch && _vm.data.length > 0,
                    expression: "!hasNoMatch && data.length > 0",
                  },
                  {
                    name: "loading",
                    rawName: "v-loading",
                    value: _vm.loading,
                    expression: "loading",
                  },
                ],
                staticClass: "el-transfer-panel__list",
                class: { "is-filterable": _vm.filterable },
                model: {
                  value: _vm.checked,
                  callback: function ($$v) {
                    _vm.checked = $$v
                  },
                  expression: "checked",
                },
              },
              [
                _vm.type === "list"
                  ? _vm._l(_vm.filteredData, function (item) {
                      return _c(
                        "el-checkbox",
                        {
                          key: item[_vm.keyProp],
                          staticClass: "el-transfer-panel__item",
                          attrs: {
                            label: item[_vm.keyProp],
                            disabled: item[_vm.disabledProp],
                          },
                        },
                        [_c("option-content", { attrs: { option: item } })],
                        1
                      )
                    })
                  : _vm.type === "groupList"
                  ? _vm._l(_vm.filteredData, function (item, _) {
                      return _c(
                        "div",
                        {
                          key: _,
                          staticClass: "el-transfer-panel__group-item",
                        },
                        [
                          _c("p", [_vm._v(_vm._s(item.title))]),
                          _vm._l(item.children, function (checkItem) {
                            return _c(
                              "el-checkbox",
                              {
                                key: checkItem[_vm.keyProp],
                                staticClass: "el-transfer-panel__item",
                                attrs: {
                                  label: checkItem[_vm.keyProp],
                                  disabled: checkItem[_vm.disabledProp],
                                },
                              },
                              [
                                _c("option-content", {
                                  attrs: { option: checkItem },
                                }),
                              ],
                              1
                            )
                          }),
                        ],
                        2
                      )
                    })
                  : _vm._e(),
              ],
              2
            )
          : _vm._e(),
        _vm.type === "treeList"
          ? [
              _c("el-tree", {
                directives: [
                  {
                    name: "loading",
                    rawName: "v-loading",
                    value: _vm.loading,
                    expression: "loading",
                  },
                ],
                ref: "treeListRef",
                attrs: {
                  data: _vm.filteredData,
                  "show-checkbox": "",
                  "default-expand-all": "",
                  "node-key": _vm.keyProp,
                },
                on: { "check-change": _vm.handleTreeChange },
                model: {
                  value: _vm.checked,
                  callback: function ($$v) {
                    _vm.checked = $$v
                  },
                  expression: "checked",
                },
              }),
            ]
          : _vm._e(),
        _c(
          "p",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.hasNoMatch,
                expression: "hasNoMatch",
              },
            ],
            staticClass: "el-transfer-panel__empty",
          },
          [_vm._v(_vm._s(_vm.t("el.transfer.noMatch")))]
        ),
        _c(
          "p",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.data.length === 0 && !_vm.hasNoMatch,
                expression: "data.length === 0 && !hasNoMatch",
              },
            ],
            staticClass: "el-transfer-panel__empty",
          },
          [_vm._v(_vm._s(_vm.t("el.transfer.noData")))]
        ),
      ],
      2
    ),
    _vm.hasFooter
      ? _c(
          "p",
          { staticClass: "el-transfer-panel__footer" },
          [_vm._t("default")],
          2
        )
      : _vm._e(),
  ])
}
var transfer_panel_leftvue_type_template_id_8152f972_staticRenderFns = []
transfer_panel_leftvue_type_template_id_8152f972_render._withStripped = true


// CONCATENATED MODULE: ./packages/transfer/src/transfer-panel-left.vue?vue&type=template&id=8152f972&

// EXTERNAL MODULE: external "@feb/vue-design/lib/checkbox-group"
var checkbox_group_ = __webpack_require__(44);
var checkbox_group_default = /*#__PURE__*/__webpack_require__.n(checkbox_group_);

// EXTERNAL MODULE: external "@feb/vue-design/lib/checkbox"
var checkbox_ = __webpack_require__(18);
var checkbox_default = /*#__PURE__*/__webpack_require__.n(checkbox_);

// EXTERNAL MODULE: external "@feb/vue-design/lib/input"
var input_ = __webpack_require__(10);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/transfer/src/transfer-panel-left.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var transfer_panel_leftvue_type_script_lang_js_ = ({
    mixins: [locale_default.a],

    name: 'ElTransferPanel',

    componentName: 'ElTransferPanel',

    components: {
        ElCheckboxGroup: checkbox_group_default.a,
        ElCheckbox: checkbox_default.a,
        ElInput: input_default.a,
        OptionContent: {
            props: {
                option: Object
            },
            render: function render(h) {
                var getParent = function getParent(vm) {
                    if (vm.$options.componentName === 'ElTransferPanel') {
                        return vm;
                    } else if (vm.$parent) {
                        return getParent(vm.$parent);
                    } else {
                        return vm;
                    }
                };
                var panel = getParent(this);
                var transfer = panel.$parent || panel;
                return panel.renderContent ? panel.renderContent(h, this.option) : transfer.$scopedSlots.default ? transfer.$scopedSlots.default({ option: this.option }) : h('span', [this.option[panel.labelProp] || this.option[panel.keyProp]]);
            }
        }
    },

    props: {
        data: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        renderContent: Function,
        placeholder: String,
        title: String,
        filterable: Boolean,
        format: Object,
        filterMethod: Function,
        defaultChecked: Array,
        props: Object,
        checkedArr: Array,
        type: String,
        checkedArrChangeOrigin: String,
        loading: Boolean
    },

    data: function data() {
        return {
            checked: [],
            allChecked: false,
            query: '',
            inputHover: false,
            checkChangeByUser: true,
            sendTimer: null
        };
    },


    watch: {
        checkedArr: function checkedArr(val) {
            this.checked = val;
        },
        checked: function checked(val, oldVal) {
            this.updateAllChecked();
            if (this.type === 'treeList') {
                this.$refs.treeListRef.setCheckedKeys(val);
                return;
            }
            if (this.checkChangeByUser) {
                var movedKeys = val.concat(oldVal).filter(function (v) {
                    return val.indexOf(v) === -1 || oldVal.indexOf(v) === -1;
                });
                //   console.error(val, oldVal)
                this.$emit('checked-change', val, movedKeys);
            } else {
                this.$emit('checked-change', val);
                this.checkChangeByUser = true;
            }
        },
        data: function data() {
            var _this = this;

            var checked = [];
            var filteredDataKeys = [];
            if (this.type === 'list') {
                filteredDataKeys = this.filteredData.map(function (item) {
                    return item[_this.keyProp];
                });
            } else if (this.type === 'groupList') {
                for (var i = 0; i < this.filteredData.length; i++) {
                    var children = this.filteredData[i].children;
                    for (var j = 0; j < children.length; j++) {
                        var key = children[j][this.keyProp];
                        filteredDataKeys.push(key);
                    }
                }
            } else if (this.type === 'treeList') {
                var traverseTree = function traverseTree(node) {
                    // 获取当前的key
                    var key = node[_this.keyProp];
                    // 如果已经禁用，则不加入key列表
                    if (node[_this.disabledProp]) {
                        return;
                    }
                    filteredDataKeys.push(key);
                    if (node.children) {
                        node.children.forEach(function (child) {
                            return traverseTree(child);
                        });
                    }
                };
                this.filteredData.forEach(function (node) {
                    return traverseTree(node);
                });
            }
            this.checked.forEach(function (item) {
                if (filteredDataKeys.indexOf(item) > -1) {
                    checked.push(item);
                }
            });
            this.checkChangeByUser = false;
            this.checked = checked;
        },
        checkableData: function checkableData() {
            this.updateAllChecked();
        },


        defaultChecked: {
            immediate: true,
            handler: function handler(val, oldVal) {
                var _this2 = this;

                if (oldVal && val.length === oldVal.length && val.every(function (item) {
                    return oldVal.indexOf(item) > -1;
                })) return;
                var checked = [];
                var checkableDataKeys = [];
                if (this.type === 'list') {
                    checkableDataKeys = this.checkableData.map(function (item) {
                        return item[_this2.keyProp];
                    });
                } else if (this.type === 'groupList') {
                    for (var i = 0; i < this.checkableData.length; i++) {
                        var children = this.checkableData[i].children;
                        for (var j = 0; j < children.length; j++) {
                            var key = children[j][this.keyProp];
                            checkableDataKeys.push(key);
                        }
                    }
                } else if (this.type === 'treeList') {
                    var traverseTree = function traverseTree(node) {
                        // 获取当前的key
                        var key = node[_this2.keyProp];
                        // 如果已经禁用，则不加入key列表
                        if (node[_this2.disabledProp]) {
                            return;
                        }
                        checkableDataKeys.push(key);
                        if (node.children) {
                            node.children.forEach(function (child) {
                                return traverseTree(child);
                            });
                        }
                    };
                    this.checkableData.forEach(function (node) {
                        return traverseTree(node);
                    });
                }
                val.forEach(function (item) {
                    if (checkableDataKeys.indexOf(item) > -1) {
                        checked.push(item);
                    }
                });
                this.checkChangeByUser = false;
                this.checked = checked;
            }
        }
    },

    computed: {
        filteredData: function filteredData() {
            var _this3 = this;

            if (this.type === 'list') {
                return this.data.filter(function (item) {
                    if (typeof _this3.filterMethod === 'function') {
                        return _this3.filterMethod(_this3.query, item);
                    } else {
                        var label = item[_this3.labelProp] || item[_this3.keyProp].toString();
                        return label.toLowerCase().indexOf(_this3.query.toLowerCase()) > -1;
                    }
                });
            } else if (this.type === 'groupList') {
                var filteredItems = [];

                this.data.forEach(function (group) {
                    var filteredGroup = {};
                    filteredGroup.title = group.title;
                    filteredGroup.children = group.children.filter(function (item) {
                        if (typeof _this3.filterMethod === 'function') {
                            return _this3.filterMethod(_this3.query, item);
                        } else {
                            var label = item[_this3.labelProp] || item[_this3.keyProp].toString();
                            return label.toLowerCase().indexOf(_this3.query.toLowerCase()) > -1;
                        }
                    });
                    // filteredGroup.children.map(child => child.category = group.title)
                    if (filteredGroup.children.length > 0) {
                        filteredItems.push(filteredGroup);
                    }
                });

                return filteredItems;
            } else if (this.type === 'treeList') {
                var filterNode = function filterNode(node, query) {
                    // 判断当前节点是否符合过滤条件
                    var matched = false;
                    if (typeof _this3.filterMethod === 'function') {
                        matched = _this3.filterMethod(query, node);
                    } else {
                        var label = node[_this3.labelProp] || node[_this3.keyProp].toString();
                        matched = label.toLowerCase().indexOf(query.toLowerCase()) > -1;
                    }

                    // 如果当前节点匹配，或者它的子节点有匹配的，就返回当前节点
                    if (matched) {
                        // 先过滤掉当前节点的 disabled 子节点
                        var children = node.children || [];
                        var filteredChildren = children.filter(function (child) {
                            return !child.disabled;
                        });

                        // 再递归地过滤所有子节点
                        var filteredSubTree = filteredChildren.map(function (child) {
                            return filterNode(child, query);
                        }).filter(function (child) {
                            return !!child;
                        });
                        var filteredNode = Object.assign({}, node, { children: filteredSubTree });
                        return filteredNode;
                    } else if (node.children) {
                        // 递归地过滤所有子节点
                        var _filteredChildren = node.children.map(function (child) {
                            return filterNode(child, query);
                        }).filter(function (child) {
                            return !!child;
                        });
                        if (_filteredChildren.length > 0) {
                            var _filteredNode = Object.assign({}, node, { children: _filteredChildren });
                            return _filteredNode;
                        }
                    }

                    // 如果当前节点及其子节点都没有匹配的，返回空
                    return null;
                };

                var filteredData = this.data.map(function (node) {
                    return filterNode(node, _this3.query);
                }).filter(function (node) {
                    return !!node;
                });
                return filteredData;
            }
        },
        filteredDataLength: function filteredDataLength() {
            var _this4 = this;

            if (this.type === 'list') {
                return this.filteredData.length;
            } else if (this.type === 'groupList') {
                var count = 0;
                this.filteredData.forEach(function (group) {
                    count += group.children.filter(function (item) {
                        return !item[_this4.disabledProp];
                    }).length;
                });
                return count;
            } else if (this.type === 'treeList') {
                return this.countFilteredTreeNode(this.filteredData);
            }
        },
        checkableData: function checkableData() {
            var _this5 = this;

            if (this.type === 'list') {
                return this.filteredData.filter(function (item) {
                    return !item[_this5.disabledProp];
                });
            } else if (this.type === 'groupList') {
                var checkedItems = [];

                this.filteredData.forEach(function (group) {
                    var checkedGroup = {};
                    checkedGroup.title = group.title;
                    checkedGroup.children = group.children.filter(function (item) {
                        if (item[_this5.disabledProp]) {
                            return false;
                        }
                        return true;
                    });

                    if (checkedGroup.children.length > 0) {
                        checkedItems.push(checkedGroup);
                    }
                });

                return checkedItems;
            } else if (this.type === 'treeList') {
                var checkedData = [];

                var traverse = function traverse(data) {
                    data.forEach(function (item) {
                        if (item[_this5.disabledProp]) {
                            return;
                        }

                        var checkedItem = {};
                        checkedItem.label = item[_this5.labelProp] || item[_this5.keyProp].toString();
                        checkedItem.value = item[_this5.valueProp] || item[_this5.keyProp].toString();
                        checkedItem.key = item[_this5.keyProp].toString();

                        if (item.hasOwnProperty('children') && Array.isArray(item.children) && item.children.length > 0) {
                            checkedItem.children = [];
                            traverse(item.children);
                        }

                        checkedData.push(checkedItem);
                    });
                };

                traverse(this.filteredData);

                return checkedData;
            }
        },
        checkedSummary: function checkedSummary() {
            var checkedLength = this.checked.length;
            var dataLength = this.filteredDataLength;
            var _format = this.format,
                noChecked = _format.noChecked,
                hasChecked = _format.hasChecked;

            if (noChecked && hasChecked) {
                return checkedLength > 0 ? hasChecked.replace(/\${checked}/g, checkedLength).replace(/\${total}/g, dataLength) : noChecked.replace(/\${total}/g, dataLength);
            } else {
                return '' + dataLength;
            }
        },
        checkableDataLength: function checkableDataLength() {
            var _this6 = this;

            if (this.type === 'list') {
                return this.checkableData.length;
            } else if (this.type === 'groupList') {
                var total = 0;
                this.checkableData.forEach(function (group) {
                    total += group.children.filter(function (item) {
                        return !item[_this6.disabledProp];
                    }).length;
                });
                return total;
            } else if (this.type === 'treeList') {
                return this.countTreeNode(this.checkableData);
            }
        },
        isIndeterminate: function isIndeterminate() {
            var checkedLength = this.checked.length;
            return checkedLength > 0 && checkedLength < this.checkableDataLength;
        },
        hasNoMatch: function hasNoMatch() {
            return this.query.length > 0 && this.filteredDataLength === 0;
        },
        inputIcon: function inputIcon() {
            return this.query.length > 0 && this.inputHover ? 'circle-close' : 'search';
        },
        labelProp: function labelProp() {
            return this.props.label || 'label';
        },
        keyProp: function keyProp() {
            return this.props.key || 'key';
        },
        disabledProp: function disabledProp() {
            return this.props.disabled || 'disabled';
        },
        hasFooter: function hasFooter() {
            return !!this.$slots.default;
        }
    },

    methods: {
        countTreeNode: function countTreeNode(data) {
            var _this7 = this;

            var count = 0;
            data.forEach(function (node) {
                count++;
                if (node.children && node.children.length > 0) {
                    count += _this7.countTreeNode(node.children);
                }
            });
            return count;
        },
        countFilteredTreeNode: function countFilteredTreeNode(data) {
            var _this8 = this;

            var count = 0;
            data.forEach(function (node) {
                count++;
                if (node.children && node.children.length > 0) {
                    count += _this8.countFilteredTreeNode(node.children);
                }
            });
            return count;
        },
        getAllCheckableDataKeys: function getAllCheckableDataKeys(data) {
            var _this9 = this;

            var keys = [];
            data.forEach(function (node) {
                if (node.children && node.children.length > 0) {
                    keys = keys.concat(_this9.getAllCheckableDataKeys(node.children));
                }
                keys.push(node[_this9.keyProp]);
            });
            return keys;
        },
        updateAllChecked: function updateAllChecked() {
            var _this10 = this;

            // const checkableDataKeys = this.checkableData.map(item => item[this.keyProp]);
            // this.allChecked = checkableDataKeys.length > 0 &&
            //   checkableDataKeys.every(item => this.checked.indexOf(item) > -1);
            // const checkableDataKeys = this.checkableData.map(item => item[this.keyProp]);
            var checkableDataKeys = this.checkableData.map(function (item) {
                return item[_this10.keyProp];
            });
            if (this.type === 'list') {
                this.allChecked = checkableDataKeys.length > 0 && checkableDataKeys.every(function (item) {
                    return _this10.checked.indexOf(item) > -1;
                });
            } else if (this.type === 'groupList') {
                var allItems = [];
                this.checkableData.forEach(function (group) {
                    allItems = allItems.concat(group.children.map(function (item) {
                        return item[_this10.keyProp];
                    }));
                });
                this.allChecked = allItems.length > 0 && allItems.every(function (item) {
                    return _this10.checked.indexOf(item) > -1;
                });
            } else if (this.type === 'treeList') {
                checkableDataKeys = this.getAllCheckableDataKeys(this.checkableData);
                var checkedKeys = this.$refs.treeListRef.getCheckedKeys();
                this.allChecked = checkableDataKeys.length > 0 && checkableDataKeys.every(function (item) {
                    return checkedKeys.indexOf(item) > -1;
                });
            }
        },
        handleTreeChange: function handleTreeChange() {
            var _this11 = this;

            this.sendTimer && clearTimeout(this.sendTimer);
            this.sendTimer = setTimeout(function () {
                var checkedKeys = _this11.$refs.treeListRef.getCheckedKeys();
                _this11.$emit('checked-change', checkedKeys);
            }, 50);
        },
        handleAllCheckedChange: function handleAllCheckedChange(value) {
            var _this12 = this;

            if (this.type === 'list') {
                this.checked = value ? this.checkableData.map(function (item) {
                    return item[_this12.keyProp];
                }) : [];
            } else if (this.type === 'groupList') {
                var keys = this.checkableData.flatMap(function (item) {
                    return item.children;
                }).map(function (item) {
                    return item[_this12.keyProp];
                }).filter(function (item, i, arr) {
                    return item && arr.indexOf(item) === i;
                });
                this.checked = value ? keys : [];
            } else if (this.type === 'treeList') {
                var traverseTree = function traverseTree(data) {
                    var result = [];
                    var stack = [].concat(data);

                    while (stack.length > 0) {
                        var node = stack.pop();
                        result.push(node.key);

                        if (node.children) {
                            for (var i = node.children.length - 1; i >= 0; i--) {
                                stack.push(node.children[i]);
                            }
                        }
                    }

                    return result;
                };
                var _keys = value ? traverseTree(this.checkableData) : [];
                // console.error(keys)
                // const keys2=['0','0-0','0-1','0-0-0', '0-0-1', '0-0-2', '0-1-0','1', '1-0', '1-1', '1-3']

                // keys.forEach(key => {
                //     console.log(key)
                //     this.$refs.treeListRef.setChecked(key, true)
                // })
                this.$refs.treeListRef.setCheckedKeys(_keys);
            }
        },
        clearQuery: function clearQuery() {
            if (this.inputIcon === 'circle-close') {
                this.query = '';
            }
        }
    }
});
// CONCATENATED MODULE: ./packages/transfer/src/transfer-panel-left.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_transfer_panel_leftvue_type_script_lang_js_ = (transfer_panel_leftvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/transfer/src/transfer-panel-left.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_transfer_panel_leftvue_type_script_lang_js_,
  transfer_panel_leftvue_type_template_id_8152f972_render,
  transfer_panel_leftvue_type_template_id_8152f972_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/transfer/src/transfer-panel-left.vue"
/* harmony default export */ var transfer_panel_left = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/transfer/src/transfer-panel-right.vue?vue&type=template&id=68beff8c&
var transfer_panel_rightvue_type_template_id_68beff8c_render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "el-transfer-panel" }, [
    _c("div", { class: ["el-transfer-panel__body"] }, [
      _c("div", { staticClass: "el-transfer-panel__filter" }),
      _c(
        "div",
        { staticClass: "el-transfer-panel__filter-bottom" },
        [
          _c("span", [_vm._v("已选个数：" + _vm._s(_vm.checkedSummary))]),
          _c(
            "el-button",
            {
              attrs: { type: "info", size: "mini" },
              on: { click: _vm.clearAllChecked },
            },
            [_vm._v("清空")]
          ),
        ],
        1
      ),
      _c(
        "ul",
        { staticClass: "el-transfer-panel__right-list" },
        _vm._l(_vm.checkedData, function (item, _i) {
          return _c(
            "li",
            {
              key: _i,
              staticClass:
                "el-transfer-panel__item el-transfer-panel__right-item",
            },
            [
              _c("span", [_vm._v(_vm._s(item.label))]),
              _c("i", {
                class: ["el-input__icon", "el-icon-close"],
                attrs: { slot: "prefix" },
                on: {
                  click: function ($event) {
                    _vm.clearCheck(item)
                  },
                },
                slot: "prefix",
              }),
            ]
          )
        })
      ),
      _c(
        "p",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.data.length === 0,
              expression: "data.length === 0",
            },
          ],
          staticClass: "el-transfer-panel__empty",
        },
        [_vm._v(_vm._s(_vm.t("el.transfer.noData")))]
      ),
    ]),
  ])
}
var transfer_panel_rightvue_type_template_id_68beff8c_staticRenderFns = []
transfer_panel_rightvue_type_template_id_68beff8c_render._withStripped = true


// CONCATENATED MODULE: ./packages/transfer/src/transfer-panel-right.vue?vue&type=template&id=68beff8c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/transfer/src/transfer-panel-right.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var transfer_panel_rightvue_type_script_lang_js_ = ({
  mixins: [locale_default.a],

  name: 'ElTransferPanel',

  componentName: 'ElTransferPanel',

  components: {
    ElInput: input_default.a,
    OptionContent: {
      props: {
        option: Object
      },
      render: function render(h) {
        var getParent = function getParent(vm) {
          if (vm.$options.componentName === 'ElTransferPanel') {
            return vm;
          } else if (vm.$parent) {
            return getParent(vm.$parent);
          } else {
            return vm;
          }
        };
        var panel = getParent(this);
        var transfer = panel.$parent || panel;
        return panel.renderContent ? panel.renderContent(h, this.option) : transfer.$scopedSlots.default ? transfer.$scopedSlots.default({ option: this.option }) : h('span', [this.option[panel.labelProp] || this.option[panel.keyProp]]);
      }
    }
  },

  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    renderContent: Function,
    props: Object,
    checkedArr: Array,
    type: String,
    transformData: Array
  },

  data: function data() {
    return {
      checkedData: []
    };
  },


  watch: {
    checkedArr: function checkedArr(val) {
      var _this = this;

      this.checked = val;
      var checkedKeys = {};
      var result = [];
      this.transformData.forEach(function (item) {
        var itemKey = item[_this.keyProp];
        if (val.indexOf(itemKey) > -1) {
          if (item.children) {
            item.children.forEach(function (child) {
              var childKey = child[_this.keyProp];
              checkedKeys[childKey] = true;
            });
          }
          if (!checkedKeys[itemKey]) {
            result.push(item);
          }
        }
      });
      this.checkedData = result;

      // console.error(this.checkedData, this.transformData, val)
    }
  },

  computed: {
    checkedSummary: function checkedSummary() {
      return this.checkedData.length;
    },
    labelProp: function labelProp() {
      return this.props.label || 'label';
    },
    keyProp: function keyProp() {
      return this.props.key || 'key';
    },
    disabledProp: function disabledProp() {
      return this.props.disabled || 'disabled';
    }
  },

  methods: {
    clearCheck: function clearCheck(item) {
      var _this2 = this;

      var index = this.checked.indexOf(item[this.keyProp]);
      var arr = this.checked.slice();
      // BFS删除
      if (this.type === 'treeList') {
        (function () {
          // debugger
          var queue = [item];
          arr.splice(index, 1);
          while (queue.length > 0) {
            var node = queue.shift();
            if (node.children && node.children.length > 0) {
              node.children.forEach(function (child) {
                var childIndex = arr.indexOf(child[_this2.keyProp]);
                // console.error(child[this.keyProp], childIndex)
                if (childIndex !== -1) {
                  arr.splice(childIndex, 1);
                }
                queue.push(child);
              });
            }
          }
          //   console.log(arr)
        })();
      } else {
        arr.splice(index, 1);
      }
      // console.error(item)
      this.$emit("update-checked-arr", arr);
    },
    clearAllChecked: function clearAllChecked() {
      this.$emit("update-checked-arr", []);
    }
  }
});
// CONCATENATED MODULE: ./packages/transfer/src/transfer-panel-right.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_transfer_panel_rightvue_type_script_lang_js_ = (transfer_panel_rightvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/transfer/src/transfer-panel-right.vue





/* normalize component */

var transfer_panel_right_component = Object(componentNormalizer["a" /* default */])(
  src_transfer_panel_rightvue_type_script_lang_js_,
  transfer_panel_rightvue_type_template_id_68beff8c_render,
  transfer_panel_rightvue_type_template_id_68beff8c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var transfer_panel_right_api; }
transfer_panel_right_component.options.__file = "packages/transfer/src/transfer-panel-right.vue"
/* harmony default export */ var transfer_panel_right = (transfer_panel_right_component.exports);
// EXTERNAL MODULE: external "@feb/vue-design/lib/mixins/migrating"
var migrating_ = __webpack_require__(11);
var migrating_default = /*#__PURE__*/__webpack_require__.n(migrating_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/transfer/src/main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: 'ElTransfer',

  mixins: [emitter_default.a, locale_default.a, migrating_default.a],

  components: {
    TransferPanelLeft: transfer_panel_left,
    TransferPanelRight: transfer_panel_right,
    ElButton: button_default.a
  },

  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    titles: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    buttonTexts: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    filterPlaceholder: {
      type: String,
      default: ''
    },
    filterMethod: Function,
    leftDefaultChecked: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    rightDefaultChecked: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    renderContent: Function,
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    format: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    filterable: Boolean,
    props: {
      type: Object,
      default: function _default() {
        return {
          label: 'label',
          key: 'key',
          disabled: 'disabled'
        };
      }
    },
    targetOrder: {
      type: String,
      default: 'original'
    },
    type: {
      type: String,
      default: 'list'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      leftChecked: [],
      rightChecked: [],
      checkedArr: []
    };
  },


  computed: {
    dataObj: function dataObj() {
      var key = this.props.key;
      return this.data.reduce(function (o, cur) {
        return (o[cur[key]] = cur) && o;
      }, {});
    },
    sourceData: function sourceData() {
      return this.data;
    },
    targetData: function targetData() {
      var _this = this;

      if (this.targetOrder === 'original') {
        return this.data.filter(function (item) {
          return _this.value.indexOf(item[_this.props.key]) > -1;
        });
      } else {
        return this.value.reduce(function (arr, cur) {
          var val = _this.dataObj[cur];
          if (val) {
            arr.push(val);
          }
          return arr;
        }, []);
      }
    },
    hasButtonTexts: function hasButtonTexts() {
      return this.buttonTexts.length === 2;
    },
    transformData: function transformData() {
      if (this.type === 'list') {
        return this.data;
      } else if (this.type === 'groupList') {
        var result = [];
        this.data.forEach(function (item) {
          result = result.concat(item.children);
        });
        return result;
      } else if (this.type === 'treeList') {
        var flatten = function flatten(node, acc) {
          if (node.children && node.children.length > 0) {
            node.children.forEach(function (child) {
              acc.push(child);
              flatten(child, acc);
            });
          }
        };
        var _result = [];
        this.data.forEach(function (node) {
          _result.push(node);
          flatten(node, _result);
        });
        return _result;
      }
    }
  },

  watch: {
    value: function value(val) {
      this.dispatch('ElFormItem', 'el.form.change', val);
    }
  },

  methods: {
    getCheckedList: function getCheckedList() {
      var _this2 = this;

      var result = [];
      var checkedKeys = {};
      var val = this.checkedArr;
      this.transformData.forEach(function (item) {
        var itemKey = item[_this2.props.key];
        if (val.indexOf(itemKey) > -1) {
          if (item.children) {
            item.children.forEach(function (child) {
              var childKey = child[_this2.props.key];
              checkedKeys[childKey] = true;
            });
          }
          if (!checkedKeys[itemKey]) {
            result.push(item);
          }
        }
      });
      return result;
    },
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'footer-format': 'footer-format is renamed to format.'
        }
      };
    },
    updateCheckedArr: function updateCheckedArr(arr) {
      this.checkedArr = arr;
    },
    addToLeft: function addToLeft() {
      var currentValue = this.value.slice();
      this.rightChecked.forEach(function (item) {
        var index = currentValue.indexOf(item);
        if (index > -1) {
          currentValue.splice(index, 1);
        }
      });
      this.$emit('input', currentValue);
      this.$emit('change', this.getCheckedList());
    },
    addToRight: function addToRight() {
      var _this3 = this;

      var currentValue = this.value.slice();
      var itemsToBeMoved = [];
      var key = this.props.key;
      this.data.forEach(function (item) {
        var itemKey = item[key];
        if (_this3.type === 'groupList') {
          item.children.forEach(function (child) {
            var childKey = child[key];
            // console.log(childKey, this.leftChecked, this.value)
            if (_this3.leftChecked.indexOf(childKey) > -1 && _this3.value.indexOf(childKey) === -1) {
              itemsToBeMoved.push(childKey);
            }
          });
        } else if (_this3.type === 'list') {
          if (_this3.leftChecked.indexOf(itemKey) > -1 && _this3.value.indexOf(itemKey) === -1) {
            itemsToBeMoved.push(itemKey);
          }
        }
      });
      currentValue = this.targetOrder === 'unshift' ? itemsToBeMoved.concat(currentValue) : currentValue.concat(itemsToBeMoved);
      this.$emit('input', currentValue);
      this.$emit('change', this.getCheckedList());
    },
    onSourceCheckedChange: function onSourceCheckedChange(val, movedKeys) {
      this.leftChecked = val;
      this.checkedArr = val;
      if (this.leftChecked.length > 0) {
        this.addToRight();
      }
      // if (movedKeys === undefined) return;
      // this.$emit('left-check-change', val, movedKeys);
    },
    onTargetCheckedChange: function onTargetCheckedChange(val, movedKeys) {
      this.rightChecked = val;
      if (this.rightChecked.length > 0) {
        this.addToLeft();
      }
      // if (movedKeys === undefined) return;
      // this.$emit('right-check-change', val, movedKeys);
    },
    clearQuery: function clearQuery(which) {
      if (which === 'left') {
        this.$refs.leftPanel.query = '';
      } else if (which === 'right') {
        this.$refs.rightPanel.query = '';
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/transfer/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/transfer/src/main.vue





/* normalize component */

var main_component = Object(componentNormalizer["a" /* default */])(
  src_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var main_api; }
main_component.options.__file = "packages/transfer/src/main.vue"
/* harmony default export */ var main = (main_component.exports);
// CONCATENATED MODULE: ./packages/transfer/index.js


/* istanbul ignore next */
main.install = function (Vue) {
	Vue.component(main.name, main);
};

/* harmony default export */ var transfer = __webpack_exports__["default"] = (main);

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("@feb/vue-design/lib/mixins/locale");

/***/ })

/******/ });