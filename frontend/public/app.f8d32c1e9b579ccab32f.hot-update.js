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

/***/ "./node_modules/core-js/internals/native-symbol-registry.js":
false,

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
false,

/***/ "./node_modules/core-js/internals/path.js":
false,

/***/ "./node_modules/core-js/internals/symbol-define-to-primitive.js":
false,

/***/ "./node_modules/core-js/internals/well-known-symbol-wrapped.js":
false,

/***/ "./node_modules/core-js/modules/es.array.includes.js":
false,

/***/ "./node_modules/core-js/modules/es.json.stringify.js":
false,

/***/ "./node_modules/core-js/modules/es.object.get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/modules/es.string.includes.js":
false,

/***/ "./node_modules/core-js/modules/es.symbol.constructor.js":
false,

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
false,

/***/ "./node_modules/core-js/modules/es.symbol.for.js":
false,

/***/ "./node_modules/core-js/modules/es.symbol.js":
false,

/***/ "./node_modules/core-js/modules/es.symbol.key-for.js":
false,

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _store_store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/store.js */ \"./store/store.js\");\n\n\n\n\n //function lazyLoad(view){\n//return() => import(`../views/${view}.vue`)\n//}\n\nvar routes = [{\n  path: '/',\n  name: 'Home',\n  component: function component() {\n    return __webpack_require__.e(/*! import() | home */ \"home\").then(__webpack_require__.bind(null, /*! ../views/Home.vue */ \"./views/Home.vue\"));\n  },\n  beforeEnter: function beforeEnter() {\n    _store_store_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].state.modalConfirm = false;\n  },\n  meta: {\n    navbarOn: true\n  }\n}, {\n  path: '/welcome',\n  name: 'WelcomePage',\n  component: function component() {\n    return __webpack_require__.e(/*! import() | WelcomePage */ \"WelcomePage\").then(__webpack_require__.bind(null, /*! ../views/WelcomePage.vue */ \"./views/WelcomePage.vue\"));\n  },\n  meta: {\n    navbarOn: true\n  }\n}, {\n  path: '/profile',\n  name: 'Profile',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ../views/accounts/Profile.vue */ \"./views/accounts/Profile.vue\"));\n  },\n  meta: {\n    navbarOn: true\n  },\n  children: [{\n    path: '/profile/friends',\n    name: 'Friends',\n    component: function component() {\n      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../views/accounts/Friends.vue */ \"./views/accounts/Friends.vue\"));\n    },\n    props: true\n  }, {\n    path: '/profile/settings',\n    name: 'Settings',\n    component: function component() {\n      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../views/accounts/Settings.vue */ \"./views/accounts/Settings.vue\"));\n    },\n    children: [{\n      path: '/profile/settings/remove_ads',\n      name: 'remove_ads',\n      component: function component() {\n        return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../views/accounts/Friends.vue */ \"./views/accounts/Friends.vue\"));\n      },\n      props: true\n    }, {\n      path: '/profile/settings/edit_profile',\n      name: 'edit_profile',\n      component: function component() {\n        return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../views/accounts/Settings.vue */ \"./views/accounts/Settings.vue\"));\n      }\n    }, {\n      path: '/profile/settings/edit_notifications',\n      name: 'edit_notifications',\n      component: function component() {\n        return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../views/accounts/Settings.vue */ \"./views/accounts/Settings.vue\"));\n      }\n    }, {\n      path: '/profile/settings/regulations',\n      name: 'regulations',\n      component: function component() {\n        return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../views/accounts/Settings.vue */ \"./views/accounts/Settings.vue\"));\n      }\n    }, {\n      path: '/profile/settings/edit_privacy',\n      name: 'edit_privacy',\n      component: function component() {\n        return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../views/accounts/Settings.vue */ \"./views/accounts/Settings.vue\"));\n      }\n    }]\n  }]\n}, {\n  path: '/notifications',\n  name: 'Notifications',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../views/Notifications.vue */ \"./views/Notifications.vue\"));\n  },\n  meta: {\n    navbarOn: true\n  }\n}, {\n  path: '/shop',\n  name: 'Shop',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ../views/shop/Shop.vue */ \"./views/shop/Shop.vue\"));\n  },\n  meta: {\n    navbarOn: true\n  }\n}, {\n  path: '/features',\n  name: 'Features',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ../views/Features.vue */ \"./views/Features.vue\"));\n  },\n  meta: {\n    navbarOn: true\n  }\n}, {\n  path: '/addQuiz',\n  name: 'AddQuiz',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../views/quizes/AddQuiz.vue */ \"./views/quizes/AddQuiz.vue\"));\n  },\n  meta: {\n    navbarOn: true\n  }\n}, {\n  path: '/quizes/:slug/ranks',\n  name: 'QuizRanks',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ../views/accounts/Rankings.vue */ \"./views/accounts/Rankings.vue\"));\n  },\n  meta: {\n    navbarOn: true\n  }\n}, {\n  path: '/quizes/:slug/',\n  name: 'QuizDetails',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../views/quizes/QuizDetails.vue */ \"./views/quizes/QuizDetails.vue\"));\n  },\n  meta: {\n    navbarOn: true\n  },\n  children: [{\n    path: '/quizes/:slug/:room_code',\n    name: 'QuizDetails',\n    component: function component() {\n      return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../views/quizes/QuizDetails.vue */ \"./views/quizes/QuizDetails.vue\"));\n    },\n    meta: {\n      navbarOn: true\n    },\n    beforeEnter: function beforeEnter(to, from, next) {\n      if (_store_store_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].state.user.username !== \"guest\") {\n        //this.$router.push('/accounts/login')\n        var room_code = to.params.room_code;\n        fetch(\"http://localhost:8002/\" + \"api/mygames/\" + room_code + \"/\").then(function (res) {\n          return res.json();\n        }).then(function (data) {\n          if (room_code === data.room_code && data.connected_users < 2) next();else next({\n            path: '/quizes/' + to.params.slug + '/'\n          }); // create notification wich say (room is full or room doesnt exist)\n        });\n      } else {\n        _store_store_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].commit('logout');\n        window.sessionStorage.removeItem('vuex');\n        next({\n          redirect: window.location.href = \"http://localhost:8002/\" + \"accounts/login/\"\n        });\n      }\n    }\n  }],\n  beforeEnter: function beforeEnter(to, from, next) {\n    if (_store_store_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].state.modalConfirm == false) {\n      next('/');\n    } else {\n      next();\n      _store_store_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].state.modalConfirm = true;\n    }\n  }\n}, {\n  path: '/account/',\n  name: 'account',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../views/accounts/login.vue */ \"./views/accounts/login.vue\"));\n  },\n  meta: {\n    navbarOn: true\n  },\n  beforeEnter: function beforeEnter(to, from, next) {\n    if (_store_store_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].state.authenticated === false) next(\"/login/\");else next();\n  }\n}, // catchOuut\n{\n  path: '/:catchAll(.*)',\n  name: 'NotFound',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ../views/NotFound.vue */ \"./views/NotFound.vue\"));\n  },\n  meta: {\n    navbarOn: true\n  }\n}];\nvar router = Object(vue_router__WEBPACK_IMPORTED_MODULE_3__[\"createRouter\"])({\n  history: Object(vue_router__WEBPACK_IMPORTED_MODULE_3__[\"createWebHistory\"])(\"/quizgame\"),\n  linkExactActiveClass: 'is-active',\n  routes: routes\n});\nrouter.beforeEach(function (to, from) {\n  console.log(\"to: \" + to.fullPath + \" from: \" + from.fullPath + \" lastHistory: \" + router.back);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZXIvaW5kZXguanM/NTFhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSb3V0ZXIsIGNyZWF0ZVdlYkhpc3RvcnkgfSBmcm9tICd2dWUtcm91dGVyJ1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvc3RvcmUuanMnXG5cbi8vZnVuY3Rpb24gbGF6eUxvYWQodmlldyl7XG4gIC8vcmV0dXJuKCkgPT4gaW1wb3J0KGAuLi92aWV3cy8ke3ZpZXd9LnZ1ZWApXG4vL31cblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIG5hbWU6ICdIb21lJyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImhvbWVcIiAqLyAnLi4vdmlld3MvSG9tZS52dWUnKSxcbiAgICBiZWZvcmVFbnRlcjogKCkgPT4ge1xuICAgICAgc3RvcmUuc3RhdGUubW9kYWxDb25maXJtID0gZmFsc2VcbiAgICB9LFxuICAgIG1ldGE6IHsgbmF2YmFyT246IHRydWUgfSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvd2VsY29tZScsXG4gICAgbmFtZTogJ1dlbGNvbWVQYWdlJyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIldlbGNvbWVQYWdlXCIgKi8gJy4uL3ZpZXdzL1dlbGNvbWVQYWdlLnZ1ZScpLFxuICAgIG1ldGE6IHsgbmF2YmFyT246IHRydWUgIH0sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3Byb2ZpbGUnLFxuICAgIG5hbWU6ICdQcm9maWxlJyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvYWNjb3VudHMvUHJvZmlsZS52dWUnKSxcbiAgICBtZXRhOiB7IG5hdmJhck9uOiB0cnVlIH0sXG5cbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBwYXRoOiAnL3Byb2ZpbGUvZnJpZW5kcycsXG4gICAgICAgIG5hbWU6ICdGcmllbmRzJyxcbiAgICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL2FjY291bnRzL0ZyaWVuZHMudnVlJyksXG4gICAgICAgIHByb3BzOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJy9wcm9maWxlL3NldHRpbmdzJyxcbiAgICAgICAgbmFtZTogJ1NldHRpbmdzJyxcbiAgICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL2FjY291bnRzL1NldHRpbmdzLnZ1ZScpLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6ICcvcHJvZmlsZS9zZXR0aW5ncy9yZW1vdmVfYWRzJyxcbiAgICAgICAgICAgIG5hbWU6ICdyZW1vdmVfYWRzJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9hY2NvdW50cy9GcmllbmRzLnZ1ZScpLFxuICAgICAgICAgICAgcHJvcHM6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnL3Byb2ZpbGUvc2V0dGluZ3MvZWRpdF9wcm9maWxlJyxcbiAgICAgICAgICAgIG5hbWU6ICdlZGl0X3Byb2ZpbGUnLFxuICAgICAgICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL2FjY291bnRzL1NldHRpbmdzLnZ1ZScpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJy9wcm9maWxlL3NldHRpbmdzL2VkaXRfbm90aWZpY2F0aW9ucycsXG4gICAgICAgICAgICBuYW1lOiAnZWRpdF9ub3RpZmljYXRpb25zJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9hY2NvdW50cy9TZXR0aW5ncy52dWUnKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6ICcvcHJvZmlsZS9zZXR0aW5ncy9yZWd1bGF0aW9ucycsXG4gICAgICAgICAgICBuYW1lOiAncmVndWxhdGlvbnMnLFxuICAgICAgICAgICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL2FjY291bnRzL1NldHRpbmdzLnZ1ZScpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJy9wcm9maWxlL3NldHRpbmdzL2VkaXRfcHJpdmFjeScsXG4gICAgICAgICAgICBuYW1lOiAnZWRpdF9wcml2YWN5JyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9hY2NvdW50cy9TZXR0aW5ncy52dWUnKSxcbiAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF1cbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvbm90aWZpY2F0aW9ucycsXG4gICAgbmFtZTogJ05vdGlmaWNhdGlvbnMnLFxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9Ob3RpZmljYXRpb25zLnZ1ZScpLFxuICAgIG1ldGE6IHsgbmF2YmFyT246IHRydWUgfSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvc2hvcCcsXG4gICAgbmFtZTogJ1Nob3AnLFxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9zaG9wL1Nob3AudnVlJyksXG4gICAgbWV0YTogeyBuYXZiYXJPbjogdHJ1ZSB9LFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9mZWF0dXJlcycsXG4gICAgbmFtZTogJ0ZlYXR1cmVzJyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvRmVhdHVyZXMudnVlJyksXG4gICAgbWV0YTogeyBuYXZiYXJPbjogdHJ1ZSB9LFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9hZGRRdWl6JyxcbiAgICBuYW1lOiAnQWRkUXVpeicsXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL3F1aXplcy9BZGRRdWl6LnZ1ZScpLFxuICAgIG1ldGE6IHsgbmF2YmFyT246IHRydWUgfSxcbn0sXG5cbiAge1xuICAgIHBhdGg6ICcvcXVpemVzLzpzbHVnL3JhbmtzJyxcbiAgICBuYW1lOiAnUXVpelJhbmtzJyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvYWNjb3VudHMvUmFua2luZ3MudnVlJyksXG4gICAgbWV0YTogeyBuYXZiYXJPbjogdHJ1ZSB9LFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9xdWl6ZXMvOnNsdWcvJyxcbiAgICBuYW1lOiAnUXVpekRldGFpbHMnLFxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9xdWl6ZXMvUXVpekRldGFpbHMudnVlJyksXG4gICAgbWV0YTogeyBuYXZiYXJPbjogdHJ1ZSB9LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcvcXVpemVzLzpzbHVnLzpyb29tX2NvZGUnLFxuICAgICAgICBuYW1lOiAnUXVpekRldGFpbHMnLFxuICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvcXVpemVzL1F1aXpEZXRhaWxzLnZ1ZScpLFxuICAgICAgICBtZXRhOiB7IG5hdmJhck9uOiB0cnVlIH0sXG4gICAgICAgIGJlZm9yZUVudGVyOiAodG8sIGZyb20sIG5leHQpID0+IHtcbiAgICAgICAgICBpZiAoc3RvcmUuc3RhdGUudXNlci51c2VybmFtZSAhPT0gXCJndWVzdFwiKSB7IC8vdGhpcy4kcm91dGVyLnB1c2goJy9hY2NvdW50cy9sb2dpbicpXG4gICAgICAgICAgICBsZXQgcm9vbV9jb2RlID0gdG8ucGFyYW1zLnJvb21fY29kZVxuICAgICAgICAgICAgZmV0Y2gocHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIGBhcGkvbXlnYW1lcy9gICsgcm9vbV9jb2RlICsgYC9gKVxuICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKHJvb21fY29kZSA9PT0gZGF0YS5yb29tX2NvZGUgJiYgZGF0YS5jb25uZWN0ZWRfdXNlcnMgPDIpIG5leHQoKVxuICAgICAgICAgICAgICAgIGVsc2UgbmV4dCh7cGF0aDogJy9xdWl6ZXMvJyArIHRvLnBhcmFtcy5zbHVnICsgJy8nfSlcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgbm90aWZpY2F0aW9uIHdpY2ggc2F5IChyb29tIGlzIGZ1bGwgb3Igcm9vbSBkb2VzbnQgZXhpc3QpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSAgZWxzZSB7XG4gICAgICAgICAgICBzdG9yZS5jb21taXQoJ2xvZ291dCcpXG4gICAgICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndnVleCcpO1xuICAgICAgICAgICAgbmV4dCh7IHJlZGlyZWN0OiB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBcImFjY291bnRzL2xvZ2luL1wiIH0pXG4gICAgICAgICAgfSBcblxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuXG5cbiAgICBiZWZvcmVFbnRlcjogKHRvLCBmcm9tLCBuZXh0KSA9PiB7XG4gICAgICBcbiAgICAgIGlmKHN0b3JlLnN0YXRlLm1vZGFsQ29uZmlybSA9PSBmYWxzZSkge1xuICAgICAgICBuZXh0KCcvJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0KClcbiAgICAgICAgICBzdG9yZS5zdGF0ZS5tb2RhbENvbmZpcm0gPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICBcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvYWNjb3VudC8nLFxuICAgIG5hbWU6ICdhY2NvdW50JyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvYWNjb3VudHMvbG9naW4udnVlJyksXG4gICAgbWV0YTogeyBuYXZiYXJPbjogdHJ1ZSB9LFxuICAgIGJlZm9yZUVudGVyOiAodG8sIGZyb20sIG5leHQpID0+IHtcbiAgICAgIGlmKHN0b3JlLnN0YXRlLmF1dGhlbnRpY2F0ZWQgPT09IGZhbHNlKSBuZXh0KFwiL2xvZ2luL1wiKVxuICAgICAgZWxzZSBuZXh0KClcbiAgICB9XG4gIH0sXG4gIC8vIGNhdGNoT3V1dFxuICB7XG4gICAgcGF0aDogJy86Y2F0Y2hBbGwoLiopJyxcbiAgICBuYW1lOiAnTm90Rm91bmQnLFxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9Ob3RGb3VuZC52dWUnKSxcbiAgICBtZXRhOiB7IG5hdmJhck9uOiB0cnVlIH0sXG4gIH0sXG5dXG5cbmNvbnN0IHJvdXRlciA9IGNyZWF0ZVJvdXRlcih7XG4gIGhpc3Rvcnk6IGNyZWF0ZVdlYkhpc3RvcnkoXCIvcXVpemdhbWVcIiksXG4gIGxpbmtFeGFjdEFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJyxcbiAgcm91dGVzXG59KVxuXG5yb3V0ZXIuYmVmb3JlRWFjaCgodG8sIGZyb20pID0+IHtcbiAgY29uc29sZS5sb2coXCJ0bzogXCIrIHRvLmZ1bGxQYXRoICsgXCIgZnJvbTogXCIgKyBmcm9tLmZ1bGxQYXRoICsgXCIgbGFzdEhpc3Rvcnk6IFwiICsgcm91dGVyLmJhY2spXG5cblxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUExQkE7QUFiQTtBQWlEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUF0QkE7QUEyQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpDQTtBQThDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBR0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./router/index.js\n");

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