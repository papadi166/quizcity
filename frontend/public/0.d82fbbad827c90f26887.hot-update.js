webpackHotUpdate(0,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/accounts/Settings.vue?vue&type=template&id=c3765366":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/accounts/Settings.vue?vue&type=template&id=c3765366 ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nvar _hoisted_1 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"p\", {\n  class: \"setting-text\"\n}, \"Remove ads forever\", -1\n/* HOISTED */\n);\n\nvar _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"p\", {\n  class: \"setting-text\"\n}, \"Sounds during game\", -1\n/* HOISTED */\n);\n\nvar _hoisted_3 = {\n  class: \"form-check form-switch\"\n};\nvar _hoisted_4 = {\n  key: 0,\n  class: \"form-check-input\",\n  type: \"checkbox\",\n  id: \"flexSwitchCheckDefault\",\n  checked: \"\"\n};\nvar _hoisted_5 = {\n  key: 1,\n  class: \"form-check-input\",\n  type: \"checkbox\",\n  id: \"flexSwitchCheckDefault\"\n};\n\nvar _hoisted_6 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"p\", {\n  class: \"setting-text\"\n}, \"Edit profile\", -1\n/* HOISTED */\n);\n\nvar _hoisted_7 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"p\", {\n  class: \"setting-text\"\n}, \"Notifications\", -1\n/* HOISTED */\n);\n\nvar _hoisted_8 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"p\", {\n  class: \"setting-text\"\n}, \"Regulations and privacy policy\", -1\n/* HOISTED */\n);\n\nvar _hoisted_9 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"p\", {\n  class: \"setting-text\"\n}, \"Privacy\", -1\n/* HOISTED */\n);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_font_awesome_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"font-awesome-icon\");\n\n  var _component_router_link = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"router-link\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_link, {\n    to: {\n      name: 'remove_ads'\n    },\n    style: {\n      \"text-decoration\": \"none\",\n      \"color\": \"inherit\"\n    },\n    class: \"setting\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_font_awesome_icon, {\n        class: \"setting-img\",\n        icon: ['fa', 'pencil'],\n        size: \"lg\"\n      }), _hoisted_1];\n    }),\n    _: 1\n    /* STABLE */\n\n  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", {\n    class: \"setting\",\n    onClick: _cache[0] || (_cache[0] = function ($event) {\n      return _ctx.$store.commit('soundmutation');\n    })\n  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_font_awesome_icon, {\n    class: \"setting-img\",\n    icon: ['fa', 'cart-shopping'],\n    size: \"lg\"\n  }), _hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_3, [_ctx.$store.getters.isSoundMuted ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"input\", _hoisted_4)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true), !_ctx.$store.getters.isSoundMuted ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"input\", _hoisted_5)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_link, {\n    to: {\n      name: 'edit_profile'\n    },\n    style: {\n      \"text-decoration\": \"none\",\n      \"color\": \"inherit\"\n    },\n    class: \"setting\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_font_awesome_icon, {\n        class: \"setting-img\",\n        icon: ['fa', 'volume-high'],\n        size: \"lg\"\n      }), _hoisted_6];\n    }),\n    _: 1\n    /* STABLE */\n\n  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_link, {\n    to: {\n      name: 'edit_notifications'\n    },\n    style: {\n      \"text-decoration\": \"none\",\n      \"color\": \"inherit\"\n    },\n    class: \"setting\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_font_awesome_icon, {\n        class: \"setting-img\",\n        icon: ['fa', 'bell'],\n        size: \"lg\"\n      }), _hoisted_7];\n    }),\n    _: 1\n    /* STABLE */\n\n  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_link, {\n    to: {\n      name: 'regulations'\n    },\n    style: {\n      \"text-decoration\": \"none\",\n      \"color\": \"inherit\"\n    },\n    class: \"setting\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_font_awesome_icon, {\n        class: \"setting-img\",\n        icon: ['fa', 'scroll'],\n        size: \"lg\"\n      }), _hoisted_8];\n    }),\n    _: 1\n    /* STABLE */\n\n  }), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_router_link, {\n    to: {\n      name: 'edit_privacy'\n    },\n    style: {\n      \"text-decoration\": \"none\",\n      \"color\": \"inherit\"\n    },\n    class: \"setting\"\n  }, {\n    default: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withCtx\"])(function () {\n      return [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_font_awesome_icon, {\n        class: \"setting-img\",\n        icon: ['fa', 'lock'],\n        size: \"lg\"\n      }), _hoisted_9];\n    }),\n    _: 1\n    /* STABLE */\n\n  })]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9hY2NvdW50cy9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzM3NjUzNjYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9hY2NvdW50cy9TZXR0aW5ncy52dWU/Y2YxZiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gXHJcbiAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3JlbW92ZV9hZHMnIH1cIiAgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246IG5vbmU7IGNvbG9yOiBpbmhlcml0O1wiIGNsYXNzPVwic2V0dGluZ1wiID5cclxuICAgICAgICAgICAgIDxmb250LWF3ZXNvbWUtaWNvbiBjbGFzcz1cInNldHRpbmctaW1nXCIgOmljb249XCJbJ2ZhJywgJ3BlbmNpbCddXCIgc2l6ZT1cImxnXCIgLz5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJzZXR0aW5nLXRleHRcIj5SZW1vdmUgYWRzIGZvcmV2ZXI8L3A+XHJcbiAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNldHRpbmdcIiBAY2xpY2s9XCIkc3RvcmUuY29tbWl0KCdzb3VuZG11dGF0aW9uJylcIiA+XHJcbiAgICAgICAgICAgIDxmb250LWF3ZXNvbWUtaWNvbiBjbGFzcz1cInNldHRpbmctaW1nXCIgOmljb249XCJbJ2ZhJywgJ2NhcnQtc2hvcHBpbmcnXVwiIHNpemU9XCJsZ1wiIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwic2V0dGluZy10ZXh0XCIgPlNvdW5kcyBkdXJpbmcgZ2FtZTwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1zd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB2LWlmPVwiJHN0b3JlLmdldHRlcnMuaXNTb3VuZE11dGVkXCIgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJmbGV4U3dpdGNoQ2hlY2tEZWZhdWx0XCIgY2hlY2tlZCA+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdi1pZj1cIiEkc3RvcmUuZ2V0dGVycy5pc1NvdW5kTXV0ZWRcIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImZsZXhTd2l0Y2hDaGVja0RlZmF1bHRcIiAgPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnZWRpdF9wcm9maWxlJyB9XCIgIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogaW5oZXJpdDtcIiBjbGFzcz1cInNldHRpbmdcIiA+XHJcbiAgICAgICAgICAgIDxmb250LWF3ZXNvbWUtaWNvbiBjbGFzcz1cInNldHRpbmctaW1nXCIgOmljb249XCJbJ2ZhJywgJ3ZvbHVtZS1oaWdoJ11cIiBzaXplPVwibGdcIiAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInNldHRpbmctdGV4dFwiPkVkaXQgcHJvZmlsZTwvcD5cclxuICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdlZGl0X25vdGlmaWNhdGlvbnMnIH1cIiAgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246IG5vbmU7IGNvbG9yOiBpbmhlcml0O1wiIGNsYXNzPVwic2V0dGluZ1wiID5cclxuICAgICAgICAgICAgPGZvbnQtYXdlc29tZS1pY29uIGNsYXNzPVwic2V0dGluZy1pbWdcIiA6aWNvbj1cIlsnZmEnLCAnYmVsbCddXCIgc2l6ZT1cImxnXCIgLz5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJzZXR0aW5nLXRleHRcIj5Ob3RpZmljYXRpb25zPC9wPlxyXG4gICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3JlZ3VsYXRpb25zJyB9XCIgIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogaW5oZXJpdDtcIiBjbGFzcz1cInNldHRpbmdcIiA+XHJcbiAgICAgICAgICAgIDxmb250LWF3ZXNvbWUtaWNvbiBjbGFzcz1cInNldHRpbmctaW1nXCIgOmljb249XCJbJ2ZhJywgJ3Njcm9sbCddXCIgc2l6ZT1cImxnXCIgLz5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJzZXR0aW5nLXRleHRcIj5SZWd1bGF0aW9ucyBhbmQgcHJpdmFjeSBwb2xpY3k8L3A+XHJcbiAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnZWRpdF9wcml2YWN5JyB9XCIgIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogaW5oZXJpdDtcIiBjbGFzcz1cInNldHRpbmdcIiA+XHJcbiAgICAgICAgICAgIDxmb250LWF3ZXNvbWUtaWNvbiBjbGFzcz1cInNldHRpbmctaW1nXCIgOmljb249XCJbJ2ZhJywgJ2xvY2snXVwiIHNpemU9XCJsZ1wiIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwic2V0dGluZy10ZXh0XCI+UHJpdmFjeTwvcD5cclxuICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgXHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiU2V0dGluZ3NcIixcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gICAgLnNldHRpbmcge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuc2V0dGluZzpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ2LCAxMzQsIDIyOCk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICB9XHJcblxyXG4gICAgLnNldHRpbmctdGV4dCB7XHJcbiAgICAgICAgbGVmdDogMzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMS41ZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXR0aW5nLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7ICAgXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXR0aW5nLWNoZWNrYm94IHtcclxuICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTs7OztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQ0E7QUFBQTtBQUFBOzs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7OztBQTlCQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBREE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQURBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQURBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/accounts/Settings.vue?vue&type=template&id=c3765366\n");

/***/ })

})