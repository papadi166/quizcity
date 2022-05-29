webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/Home.vue?vue&type=script&lang=js":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/Quizes.vue?vue&type=script&lang=js":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/Home.vue?vue&type=template&id=2f2be7e4":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/Quizes.vue?vue&type=template&id=9b13c6a0":
false,

/***/ "./node_modules/core-js/internals/array-slice-simple.js":
false,

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
false,

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
false,

/***/ "./node_modules/core-js/internals/path.js":
false,

/***/ "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
false,

/***/ "./node_modules/core-js/modules/es.array.includes.js":
false,

/***/ "./node_modules/core-js/modules/es.string.includes.js":
false,

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
false,

/***/ "./node_modules/core-js/modules/es.symbol.js":
false,

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js/internals/dom-iterables.js\");\nvar DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ \"./node_modules/core-js/internals/dom-token-list-prototype.js\");\nvar ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ \"./node_modules/core-js/modules/es.array.iterator.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar ITERATOR = wellKnownSymbol('iterator');\nvar TO_STRING_TAG = wellKnownSymbol('toStringTag');\nvar ArrayValues = ArrayIteratorMethods.values;\n\nvar handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {\n  if (CollectionPrototype) {\n    // some Chrome versions have non-configurable methods on DOMTokenList\n    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {\n      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);\n    } catch (error) {\n      CollectionPrototype[ITERATOR] = ArrayValues;\n    }\n    if (!CollectionPrototype[TO_STRING_TAG]) {\n      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);\n    }\n    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {\n      // some Chrome versions have non-configurable methods on DOMTokenList\n      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {\n        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);\n      } catch (error) {\n        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];\n      }\n    }\n  }\n};\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype, COLLECTION_NAME);\n}\n\nhandlePrototype(DOMTokenListPrototype, 'DOMTokenList');\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuaXRlcmF0b3IuanM/ZGRiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZScpO1xudmFyIEFycmF5SXRlcmF0b3JNZXRob2RzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9lcy5hcnJheS5pdGVyYXRvcicpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBBcnJheUl0ZXJhdG9yTWV0aG9kcy52YWx1ZXM7XG5cbnZhciBoYW5kbGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoQ29sbGVjdGlvblByb3RvdHlwZSwgQ09MTEVDVElPTl9OQU1FKSB7XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlKSB7XG4gICAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gICAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGVbSVRFUkFUT1JdICE9PSBBcnJheVZhbHVlcykgdHJ5IHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBDb2xsZWN0aW9uUHJvdG90eXBlW0lURVJBVE9SXSA9IEFycmF5VmFsdWVzO1xuICAgIH1cbiAgICBpZiAoIUNvbGxlY3Rpb25Qcm90b3R5cGVbVE9fU1RSSU5HX1RBR10pIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCBDT0xMRUNUSU9OX05BTUUpO1xuICAgIH1cbiAgICBpZiAoRE9NSXRlcmFibGVzW0NPTExFQ1RJT05fTkFNRV0pIGZvciAodmFyIE1FVEhPRF9OQU1FIGluIEFycmF5SXRlcmF0b3JNZXRob2RzKSB7XG4gICAgICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgICAgIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlW01FVEhPRF9OQU1FXSAhPT0gQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdKSB0cnkge1xuICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgTUVUSE9EX05BTUUsIEFycmF5SXRlcmF0b3JNZXRob2RzW01FVEhPRF9OQU1FXSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBDb2xsZWN0aW9uUHJvdG90eXBlW01FVEhPRF9OQU1FXSA9IEFycmF5SXRlcmF0b3JNZXRob2RzW01FVEhPRF9OQU1FXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgaGFuZGxlUHJvdG90eXBlKGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdICYmIGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdLnByb3RvdHlwZSwgQ09MTEVDVElPTl9OQU1FKTtcbn1cblxuaGFuZGxlUHJvdG90eXBlKERPTVRva2VuTGlzdFByb3RvdHlwZSwgJ0RPTVRva2VuTGlzdCcpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/core-js/modules/web.dom-collections.iterator.js\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/Quizes.vue?vue&type=style&index=0&id=9b13c6a0&lang=css":
false,

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/Quizes.vue?vue&type=style&index=0&id=9b13c6a0&lang=css":
false,

/***/ "./router/index.js":
/*!*************************!*\
  !*** ./router/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _views_quizes_AddQuiz_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/quizes/AddQuiz.vue */ \"./views/quizes/AddQuiz.vue\");\n/* harmony import */ var _views_NotFound_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/NotFound.vue */ \"./views/NotFound.vue\");\n/* harmony import */ var _views_quizes_QuizDetails_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/quizes/QuizDetails.vue */ \"./views/quizes/QuizDetails.vue\");\n/* harmony import */ var _store_store_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/store.js */ \"./store/store.js\");\n/* harmony import */ var _views_accounts_login_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/accounts/login.vue */ \"./views/accounts/login.vue\");\n/* harmony import */ var _views_accounts_Profile_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/accounts/Profile.vue */ \"./views/accounts/Profile.vue\");\n/* harmony import */ var _views_Notifications_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/Notifications.vue */ \"./views/Notifications.vue\");\n/* harmony import */ var _views_Features_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/Features.vue */ \"./views/Features.vue\");\n\n\n\n\n\n\n\n\n\n\n\n //function lazyLoad(view){\n//return() => import(`../views/${view}.vue`)\n//}\n\nvar routes = [{\n  path: '/',\n  name: 'Home',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../views/Home.vue */ \"./views/Home.vue\"));\n  },\n  beforeEnter: function beforeEnter() {\n    _store_store_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.modalConfirm = false;\n  }\n}, {\n  path: '/profile',\n  name: 'Profile',\n  component: _views_accounts_Profile_vue__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n}, {\n  path: '/notifications',\n  name: 'Notifications',\n  component: _views_Notifications_vue__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n}, {\n  path: '/features',\n  name: 'Features',\n  component: _views_Features_vue__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n}, {\n  path: '/addQuiz',\n  name: 'AddQuiz',\n  component: _views_quizes_AddQuiz_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}, {\n  path: '/quizes/:slug/',\n  name: 'QuizDetails',\n  component: _views_quizes_QuizDetails_vue__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  beforeEnter: function beforeEnter(to, from, next) {\n    if (_store_store_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.modalConfirm == false) {\n      next('/');\n    } else {\n      next();\n      _store_store_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.modalConfirm = true;\n    }\n  }\n}, {\n  path: '/account/',\n  name: 'account',\n  component: _views_accounts_login_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  beforeEnter: function beforeEnter(to, from, next) {\n    if (_store_store_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].state.authenticated === false) next(\"/login/\");else next();\n  }\n}, {\n  path: '/login/',\n  name: 'login',\n  component: _views_accounts_login_vue__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n}, // catchOuut\n{\n  path: '/:catchAll(.*)',\n  name: 'NotFound',\n  component: _views_NotFound_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n}];\nvar router = Object(vue_router__WEBPACK_IMPORTED_MODULE_3__[\"createRouter\"])({\n  history: Object(vue_router__WEBPACK_IMPORTED_MODULE_3__[\"createWebHistory\"])(\"/quizgame\"),\n  linkExactActiveClass: 'is-active',\n  routes: routes\n});\nrouter.beforeEach(function (to, from) {\n  console.log(\"to: \" + to.fullPath + \" from: \" + from.fullPath + \" lastHistory: \" + router.back);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZXIvaW5kZXguanM/NTFhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSb3V0ZXIsIGNyZWF0ZVdlYkhpc3RvcnkgfSBmcm9tICd2dWUtcm91dGVyJ1xuXG5pbXBvcnQgQWRkUXVpeiBmcm9tICcuLi92aWV3cy9xdWl6ZXMvQWRkUXVpei52dWUnXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vdmlld3MvTm90Rm91bmQudnVlJ1xuaW1wb3J0IFF1aXpEZXRhaWxzIGZyb20gJy4uL3ZpZXdzL3F1aXplcy9RdWl6RGV0YWlscy52dWUnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvc3RvcmUuanMnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vdmlld3MvYWNjb3VudHMvbG9naW4udnVlJ1xuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vdmlld3MvYWNjb3VudHMvUHJvZmlsZS52dWUnXG5pbXBvcnQgTm90aWZpY2F0aW9ucyBmcm9tICcuLi92aWV3cy9Ob3RpZmljYXRpb25zLnZ1ZSdcbmltcG9ydCBGZWF0dXJlcyBmcm9tICcuLi92aWV3cy9GZWF0dXJlcy52dWUnXG5cbi8vZnVuY3Rpb24gbGF6eUxvYWQodmlldyl7XG4gIC8vcmV0dXJuKCkgPT4gaW1wb3J0KGAuLi92aWV3cy8ke3ZpZXd9LnZ1ZWApXG4vL31cblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIG5hbWU6ICdIb21lJyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvSG9tZS52dWUnKSxcbiAgICBiZWZvcmVFbnRlcjogKCkgPT4ge1xuICAgICAgc3RvcmUuc3RhdGUubW9kYWxDb25maXJtID0gZmFsc2VcbiAgICB9XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3Byb2ZpbGUnLFxuICAgIG5hbWU6ICdQcm9maWxlJyxcbiAgICBjb21wb25lbnQ6IFByb2ZpbGUsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL25vdGlmaWNhdGlvbnMnLFxuICAgIG5hbWU6ICdOb3RpZmljYXRpb25zJyxcbiAgICBjb21wb25lbnQ6IE5vdGlmaWNhdGlvbnMsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2ZlYXR1cmVzJyxcbiAgICBuYW1lOiAnRmVhdHVyZXMnLFxuICAgIGNvbXBvbmVudDogRmVhdHVyZXMsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2FkZFF1aXonLFxuICAgIG5hbWU6ICdBZGRRdWl6JyxcbiAgICBjb21wb25lbnQ6IEFkZFF1aXpcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvcXVpemVzLzpzbHVnLycsXG4gICAgbmFtZTogJ1F1aXpEZXRhaWxzJyxcbiAgICBjb21wb25lbnQ6IFF1aXpEZXRhaWxzLFxuICAgIGJlZm9yZUVudGVyOiAodG8sIGZyb20sIG5leHQpID0+IHtcbiAgICAgIFxuICAgICAgaWYoc3RvcmUuc3RhdGUubW9kYWxDb25maXJtID09IGZhbHNlKSB7XG4gICAgICAgIG5leHQoJy8nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHQoKVxuICAgICAgICAgIHN0b3JlLnN0YXRlLm1vZGFsQ29uZmlybSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gIFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9hY2NvdW50LycsXG4gICAgbmFtZTogJ2FjY291bnQnLFxuICAgIGNvbXBvbmVudDogTG9naW4sXG4gICAgYmVmb3JlRW50ZXI6ICh0bywgZnJvbSwgbmV4dCkgPT4ge1xuICAgICAgaWYoc3RvcmUuc3RhdGUuYXV0aGVudGljYXRlZCA9PT0gZmFsc2UpIG5leHQoXCIvbG9naW4vXCIpXG4gICAgICBlbHNlIG5leHQoKVxuICAgIH1cbiAgfSxcbiAge1xuICAgICAgcGF0aDogJy9sb2dpbi8nLFxuICAgICAgbmFtZTogJ2xvZ2luJyxcbiAgICAgIGNvbXBvbmVudDogTG9naW4sXG4gICAgfSxcbiAgLy8gY2F0Y2hPdXV0XG4gIHtcbiAgICBwYXRoOiAnLzpjYXRjaEFsbCguKiknLFxuICAgIG5hbWU6ICdOb3RGb3VuZCcsXG4gICAgY29tcG9uZW50OiBOb3RGb3VuZCxcbiAgfSxcbl1cblxuY29uc3Qgcm91dGVyID0gY3JlYXRlUm91dGVyKHtcbiAgaGlzdG9yeTogY3JlYXRlV2ViSGlzdG9yeShcIi9xdWl6Z2FtZVwiKSxcbiAgbGlua0V4YWN0QWN0aXZlQ2xhc3M6ICdpcy1hY3RpdmUnLFxuICByb3V0ZXNcbn0pXG5cbnJvdXRlci5iZWZvcmVFYWNoKCh0bywgZnJvbSkgPT4ge1xuICBjb25zb2xlLmxvZyhcInRvOiBcIisgdG8uZnVsbFBhdGggKyBcIiBmcm9tOiBcIiArIGZyb20uZnVsbFBhdGggKyBcIiBsYXN0SGlzdG9yeTogXCIgKyByb3V0ZXIuYmFjaylcblxuXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUEE7QUFVQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUdBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./router/index.js\n");

/***/ }),

/***/ "./views/Home.vue":
false,

/***/ "./views/Home.vue?vue&type=script&lang=js":
false,

/***/ "./views/Home.vue?vue&type=template&id=2f2be7e4":
false,

/***/ "./views/quizes/Quizes.vue":
false,

/***/ "./views/quizes/Quizes.vue?vue&type=script&lang=js":
false,

/***/ "./views/quizes/Quizes.vue?vue&type=style&index=0&id=9b13c6a0&lang=css":
false,

/***/ "./views/quizes/Quizes.vue?vue&type=template&id=9b13c6a0":
false

})