webpackHotUpdate("app",{

/***/ "./node_modules/axios/index.js":
false,

/***/ "./node_modules/axios/lib/adapters/xhr.js":
false,

/***/ "./node_modules/axios/lib/axios.js":
false,

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
false,

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
false,

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
false,

/***/ "./node_modules/axios/lib/core/Axios.js":
false,

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
false,

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
false,

/***/ "./node_modules/axios/lib/core/createError.js":
false,

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
false,

/***/ "./node_modules/axios/lib/core/enhanceError.js":
false,

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
false,

/***/ "./node_modules/axios/lib/core/settle.js":
false,

/***/ "./node_modules/axios/lib/core/transformData.js":
false,

/***/ "./node_modules/axios/lib/defaults.js":
false,

/***/ "./node_modules/axios/lib/env/data.js":
false,

/***/ "./node_modules/axios/lib/helpers/bind.js":
false,

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
false,

/***/ "./node_modules/axios/lib/helpers/cookies.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
false,

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
false,

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
false,

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
false,

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
false,

/***/ "./node_modules/axios/lib/helpers/spread.js":
false,

/***/ "./node_modules/axios/lib/helpers/validator.js":
false,

/***/ "./node_modules/axios/lib/utils.js":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/accounts/login.vue?vue&type=script&lang=js":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/accounts/login.vue?vue&type=template&id=b3bf4462&scoped=true":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/accounts/login.vue?vue&type=style&index=0&id=b3bf4462&scoped=true&lang=css":
false,

/***/ "./node_modules/node-libs-browser/mock/process.js":
false,

/***/ "./node_modules/path-browserify/index.js":
false,

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/accounts/login.vue?vue&type=style&index=0&id=b3bf4462&scoped=true&lang=css":
false,

/***/ "./router/index.js":
/*!*************************!*\
  !*** ./router/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _views_NotFound_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/NotFound.vue */ \"./views/NotFound.vue\");\n/* harmony import */ var _store_store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/store.js */ \"./store/store.js\");\n\n\n\n\n\n //function lazyLoad(view){\n//return() => import(`../views/${view}.vue`)\n//}\n\nvar routes = [{\n  path: '/',\n  name: 'Home',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../views/Home.vue */ \"./views/Home.vue\"));\n  },\n  beforeEnter: function beforeEnter() {\n    _store_store_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].state.modalConfirm = false;\n  }\n}, {\n  path: '/profile',\n  name: 'Profile',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../views/accounts/Profile.vue */ \"./views/accounts/Profile.vue\"));\n  }\n}, {\n  path: '/notifications',\n  name: 'Notifications',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../views/Notifications.vue */ \"./views/Notifications.vue\"));\n  }\n}, {\n  path: '/features',\n  name: 'Features',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../views/Features.vue */ \"./views/Features.vue\"));\n  }\n}, {\n  path: '/addQuiz',\n  name: 'AddQuiz',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../views/quizes/AddQuiz.vue */ \"./views/quizes/AddQuiz.vue\"));\n  }\n}, {\n  path: '/quizes/:slug/',\n  name: 'QuizDetails',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../views/quizes/QuizDetails.vue */ \"./views/quizes/QuizDetails.vue\"));\n  },\n  beforeEnter: function beforeEnter(to, from, next) {\n    if (_store_store_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].state.modalConfirm == false) {\n      next('/');\n    } else {\n      next();\n      _store_store_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].state.modalConfirm = true;\n    }\n  }\n}, {\n  path: '/account/',\n  name: 'account',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ../views/accounts/login.vue */ \"./views/accounts/login.vue\"));\n  },\n  beforeEnter: function beforeEnter(to, from, next) {\n    if (_store_store_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].state.authenticated === false) next(\"/login/\");else next();\n  }\n}, {\n  path: '/login/',\n  name: 'login',\n  component: Login\n}, // catchOuut\n{\n  path: '/:catchAll(.*)',\n  name: 'NotFound',\n  component: _views_NotFound_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}];\nvar router = Object(vue_router__WEBPACK_IMPORTED_MODULE_3__[\"createRouter\"])({\n  history: Object(vue_router__WEBPACK_IMPORTED_MODULE_3__[\"createWebHistory\"])(\"/quizgame\"),\n  linkExactActiveClass: 'is-active',\n  routes: routes\n});\nrouter.beforeEach(function (to, from) {\n  console.log(\"to: \" + to.fullPath + \" from: \" + from.fullPath + \" lastHistory: \" + router.back);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZXIvaW5kZXguanM/NTFhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSb3V0ZXIsIGNyZWF0ZVdlYkhpc3RvcnkgfSBmcm9tICd2dWUtcm91dGVyJ1xuXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vdmlld3MvTm90Rm91bmQudnVlJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlL3N0b3JlLmpzJ1xuXG4vL2Z1bmN0aW9uIGxhenlMb2FkKHZpZXcpe1xuICAvL3JldHVybigpID0+IGltcG9ydChgLi4vdmlld3MvJHt2aWV3fS52dWVgKVxuLy99XG5cbmNvbnN0IHJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBuYW1lOiAnSG9tZScsXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL0hvbWUudnVlJyksXG4gICAgYmVmb3JlRW50ZXI6ICgpID0+IHtcbiAgICAgIHN0b3JlLnN0YXRlLm1vZGFsQ29uZmlybSA9IGZhbHNlXG4gICAgfVxuICB9LFxuICB7XG4gICAgcGF0aDogJy9wcm9maWxlJyxcbiAgICBuYW1lOiAnUHJvZmlsZScsXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL2FjY291bnRzL1Byb2ZpbGUudnVlJylcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvbm90aWZpY2F0aW9ucycsXG4gICAgbmFtZTogJ05vdGlmaWNhdGlvbnMnLFxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9Ob3RpZmljYXRpb25zLnZ1ZScpXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2ZlYXR1cmVzJyxcbiAgICBuYW1lOiAnRmVhdHVyZXMnLFxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9GZWF0dXJlcy52dWUnKVxuICB9LFxuICB7XG4gICAgcGF0aDogJy9hZGRRdWl6JyxcbiAgICBuYW1lOiAnQWRkUXVpeicsXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL3F1aXplcy9BZGRRdWl6LnZ1ZScpXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3F1aXplcy86c2x1Zy8nLFxuICAgIG5hbWU6ICdRdWl6RGV0YWlscycsXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL3F1aXplcy9RdWl6RGV0YWlscy52dWUnKSxcbiAgICBiZWZvcmVFbnRlcjogKHRvLCBmcm9tLCBuZXh0KSA9PiB7XG4gICAgICBcbiAgICAgIGlmKHN0b3JlLnN0YXRlLm1vZGFsQ29uZmlybSA9PSBmYWxzZSkge1xuICAgICAgICBuZXh0KCcvJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0KClcbiAgICAgICAgICBzdG9yZS5zdGF0ZS5tb2RhbENvbmZpcm0gPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICBcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvYWNjb3VudC8nLFxuICAgIG5hbWU6ICdhY2NvdW50JyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvYWNjb3VudHMvbG9naW4udnVlJyksXG4gICAgYmVmb3JlRW50ZXI6ICh0bywgZnJvbSwgbmV4dCkgPT4ge1xuICAgICAgaWYoc3RvcmUuc3RhdGUuYXV0aGVudGljYXRlZCA9PT0gZmFsc2UpIG5leHQoXCIvbG9naW4vXCIpXG4gICAgICBlbHNlIG5leHQoKVxuICAgIH1cbiAgfSxcbiAge1xuICAgICAgcGF0aDogJy9sb2dpbi8nLFxuICAgICAgbmFtZTogJ2xvZ2luJyxcbiAgICAgIGNvbXBvbmVudDogTG9naW4sXG4gICAgfSxcbiAgLy8gY2F0Y2hPdXV0XG4gIHtcbiAgICBwYXRoOiAnLzpjYXRjaEFsbCguKiknLFxuICAgIG5hbWU6ICdOb3RGb3VuZCcsXG4gICAgY29tcG9uZW50OiBOb3RGb3VuZCxcbiAgfSxcbl1cblxuY29uc3Qgcm91dGVyID0gY3JlYXRlUm91dGVyKHtcbiAgaGlzdG9yeTogY3JlYXRlV2ViSGlzdG9yeShcIi9xdWl6Z2FtZVwiKSxcbiAgbGlua0V4YWN0QWN0aXZlQ2xhc3M6ICdpcy1hY3RpdmUnLFxuICByb3V0ZXNcbn0pXG5cbnJvdXRlci5iZWZvcmVFYWNoKCh0bywgZnJvbSkgPT4ge1xuICBjb25zb2xlLmxvZyhcInRvOiBcIisgdG8uZnVsbFBhdGggKyBcIiBmcm9tOiBcIiArIGZyb20uZnVsbFBhdGggKyBcIiBsYXN0SGlzdG9yeTogXCIgKyByb3V0ZXIuYmFjaylcblxuXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQWlCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUdBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./router/index.js\n");

/***/ }),

/***/ "./views/accounts/login.vue":
false,

/***/ "./views/accounts/login.vue?vue&type=script&lang=js":
false,

/***/ "./views/accounts/login.vue?vue&type=style&index=0&id=b3bf4462&scoped=true&lang=css":
false,

/***/ "./views/accounts/login.vue?vue&type=template&id=b3bf4462&scoped=true":
false

})