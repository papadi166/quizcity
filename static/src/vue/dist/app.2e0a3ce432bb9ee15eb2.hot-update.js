webpackHotUpdate("app",{

/***/ "./router/index.js":
/*!*************************!*\
  !*** ./router/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm-bundler.js\");\n/* harmony import */ var _store_store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/store.js */ \"./store/store.js\");\n\n\n\n\n //function lazyLoad(view){\n//return() => import(`../views/${view}.vue`)\n//}\n\nvar routes = [{\n  path: '/',\n  name: 'Home',\n  component: function component() {\n    return __webpack_require__.e(/*! import() | home */ \"home\").then(__webpack_require__.bind(null, /*! ../views/Home.vue */ \"./views/Home.vue\"));\n  },\n  beforeEnter: function beforeEnter() {\n    _store_store_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].state.modalConfirm = false;\n  },\n  meta: {\n    navbarOn: true\n  }\n}, {\n  path: '/welcome',\n  name: 'WelcomePage',\n  component: function component() {\n    return __webpack_require__.e(/*! import() | WelcomePage */ \"WelcomePage\").then(__webpack_require__.bind(null, /*! ../views/WelcomePage.vue */ \"./views/WelcomePage.vue\"));\n  },\n  meta: {\n    navbarOn: false\n  }\n}, {\n  path: '/profile',\n  name: 'Profile',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ../views/accounts/Profile.vue */ \"./views/accounts/Profile.vue\"));\n  },\n  meta: {\n    navbarOn: true\n  },\n  beforeEnter: function beforeEnter(to, from, next) {\n    if (_store_store_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].state.user.username !== \"guest\") next(); //this.$router.push('/accounts/login')\n    else next(\"/login/\");\n  },\n  children: [{\n    path: '/profile/friends',\n    name: 'Friends',\n    component: function component() {\n      return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ../views/accounts/Friends.vue */ \"./views/accounts/Friends.vue\"));\n    }\n  }, {\n    path: '/profile/settings',\n    name: 'Settings',\n    component: function component() {\n      return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! ../views/accounts/Settings.vue */ \"./views/accounts/Settings.vue\"));\n    }\n  }]\n}, {\n  path: '/notifications',\n  name: 'Notifications',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../views/Notifications.vue */ \"./views/Notifications.vue\"));\n  },\n  meta: {\n    navbarOn: true\n  }\n}, {\n  path: '/features',\n  name: 'Features',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../views/Features.vue */ \"./views/Features.vue\"));\n  },\n  meta: {\n    navbarOn: true\n  }\n}, {\n  path: '/addQuiz',\n  name: 'AddQuiz',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../views/quizes/AddQuiz.vue */ \"./views/quizes/AddQuiz.vue\"));\n  },\n  meta: {\n    navbarOn: true\n  }\n}, {\n  path: '/quizes/:slug/',\n  name: 'QuizDetails',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../views/quizes/QuizDetails.vue */ \"./views/quizes/QuizDetails.vue\"));\n  },\n  meta: {\n    navbarOn: true\n  },\n  beforeEnter: function beforeEnter(to, from, next) {\n    if (_store_store_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].state.modalConfirm == false) {\n      next('/');\n    } else {\n      next();\n      _store_store_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].state.modalConfirm = true;\n    }\n  }\n}, {\n  path: '/account/',\n  name: 'account',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../views/accounts/login.vue */ \"./views/accounts/login.vue\"));\n  },\n  meta: {\n    navbarOn: true\n  },\n  beforeEnter: function beforeEnter(to, from, next) {\n    if (_store_store_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].state.authenticated === false) next(\"/login/\");else next();\n  }\n}, // catchOuut\n{\n  path: '/:catchAll(.*)',\n  name: 'NotFound',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../views/NotFound.vue */ \"./views/NotFound.vue\"));\n  },\n  meta: {\n    navbarOn: true\n  }\n}];\nvar router = Object(vue_router__WEBPACK_IMPORTED_MODULE_3__[\"createRouter\"])({\n  history: Object(vue_router__WEBPACK_IMPORTED_MODULE_3__[\"createWebHistory\"])(\"/quizgame\"),\n  linkExactActiveClass: 'is-active',\n  routes: routes\n});\nrouter.beforeEach(function (to, from) {\n  console.log(\"to: \" + to.fullPath + \" from: \" + from.fullPath + \" lastHistory: \" + router.back);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yb3V0ZXIvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yb3V0ZXIvaW5kZXguanM/NTFhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVSb3V0ZXIsIGNyZWF0ZVdlYkhpc3RvcnkgfSBmcm9tICd2dWUtcm91dGVyJ1xuXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvc3RvcmUuanMnXG5cbi8vZnVuY3Rpb24gbGF6eUxvYWQodmlldyl7XG4gIC8vcmV0dXJuKCkgPT4gaW1wb3J0KGAuLi92aWV3cy8ke3ZpZXd9LnZ1ZWApXG4vL31cblxuY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIG5hbWU6ICdIb21lJyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImhvbWVcIiAqLyAnLi4vdmlld3MvSG9tZS52dWUnKSxcbiAgICBiZWZvcmVFbnRlcjogKCkgPT4ge1xuICAgICAgc3RvcmUuc3RhdGUubW9kYWxDb25maXJtID0gZmFsc2VcbiAgICB9LFxuICAgIG1ldGE6IHsgbmF2YmFyT246IHRydWUgfSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvd2VsY29tZScsXG4gICAgbmFtZTogJ1dlbGNvbWVQYWdlJyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIldlbGNvbWVQYWdlXCIgKi8gJy4uL3ZpZXdzL1dlbGNvbWVQYWdlLnZ1ZScpLFxuICAgIG1ldGE6IHsgbmF2YmFyT246IGZhbHNlICB9LFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9wcm9maWxlJyxcbiAgICBuYW1lOiAnUHJvZmlsZScsXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL2FjY291bnRzL1Byb2ZpbGUudnVlJyksXG4gICAgbWV0YTogeyBuYXZiYXJPbjogdHJ1ZSB9LFxuICAgIGJlZm9yZUVudGVyOiAodG8sIGZyb20sIG5leHQpID0+IHtcbiAgICAgIFxuICAgICAgaWYgKHN0b3JlLnN0YXRlLnVzZXIudXNlcm5hbWUgIT09IFwiZ3Vlc3RcIikgbmV4dCgpIC8vdGhpcy4kcm91dGVyLnB1c2goJy9hY2NvdW50cy9sb2dpbicpXG4gICAgICBlbHNlIG5leHQoXCIvbG9naW4vXCIpXG4gICAgICB9LFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcvcHJvZmlsZS9mcmllbmRzJyxcbiAgICAgICAgbmFtZTogJ0ZyaWVuZHMnLFxuICAgICAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvYWNjb3VudHMvRnJpZW5kcy52dWUnKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdGg6ICcvcHJvZmlsZS9zZXR0aW5ncycsXG4gICAgICAgIG5hbWU6ICdTZXR0aW5ncycsXG4gICAgICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9hY2NvdW50cy9TZXR0aW5ncy52dWUnKSxcbiAgICAgIH0sXG4gICAgXVxuICB9LFxuICB7XG4gICAgcGF0aDogJy9ub3RpZmljYXRpb25zJyxcbiAgICBuYW1lOiAnTm90aWZpY2F0aW9ucycsXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL05vdGlmaWNhdGlvbnMudnVlJyksXG4gICAgbWV0YTogeyBuYXZiYXJPbjogdHJ1ZSB9LFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9mZWF0dXJlcycsXG4gICAgbmFtZTogJ0ZlYXR1cmVzJyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvRmVhdHVyZXMudnVlJyksXG4gICAgbWV0YTogeyBuYXZiYXJPbjogdHJ1ZSB9LFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9hZGRRdWl6JyxcbiAgICBuYW1lOiAnQWRkUXVpeicsXG4gICAgY29tcG9uZW50OiAoKSA9PiBpbXBvcnQoJy4uL3ZpZXdzL3F1aXplcy9BZGRRdWl6LnZ1ZScpLFxuICAgIG1ldGE6IHsgbmF2YmFyT246IHRydWUgfSxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvcXVpemVzLzpzbHVnLycsXG4gICAgbmFtZTogJ1F1aXpEZXRhaWxzJyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvcXVpemVzL1F1aXpEZXRhaWxzLnZ1ZScpLFxuICAgIG1ldGE6IHsgbmF2YmFyT246IHRydWUgfSxcbiAgICBiZWZvcmVFbnRlcjogKHRvLCBmcm9tLCBuZXh0KSA9PiB7XG4gICAgICBcbiAgICAgIGlmKHN0b3JlLnN0YXRlLm1vZGFsQ29uZmlybSA9PSBmYWxzZSkge1xuICAgICAgICBuZXh0KCcvJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0KClcbiAgICAgICAgICBzdG9yZS5zdGF0ZS5tb2RhbENvbmZpcm0gPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICBcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvYWNjb3VudC8nLFxuICAgIG5hbWU6ICdhY2NvdW50JyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnLi4vdmlld3MvYWNjb3VudHMvbG9naW4udnVlJyksXG4gICAgbWV0YTogeyBuYXZiYXJPbjogdHJ1ZSB9LFxuICAgIGJlZm9yZUVudGVyOiAodG8sIGZyb20sIG5leHQpID0+IHtcbiAgICAgIGlmKHN0b3JlLnN0YXRlLmF1dGhlbnRpY2F0ZWQgPT09IGZhbHNlKSBuZXh0KFwiL2xvZ2luL1wiKVxuICAgICAgZWxzZSBuZXh0KClcbiAgICB9XG4gIH0sXG4gIC8vIGNhdGNoT3V1dFxuICB7XG4gICAgcGF0aDogJy86Y2F0Y2hBbGwoLiopJyxcbiAgICBuYW1lOiAnTm90Rm91bmQnLFxuICAgIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCcuLi92aWV3cy9Ob3RGb3VuZC52dWUnKSxcbiAgICBtZXRhOiB7IG5hdmJhck9uOiB0cnVlIH0sXG4gIH0sXG5dXG5cbmNvbnN0IHJvdXRlciA9IGNyZWF0ZVJvdXRlcih7XG4gIGhpc3Rvcnk6IGNyZWF0ZVdlYkhpc3RvcnkoXCIvcXVpemdhbWVcIiksXG4gIGxpbmtFeGFjdEFjdGl2ZUNsYXNzOiAnaXMtYWN0aXZlJyxcbiAgcm91dGVzXG59KVxuXG5yb3V0ZXIuYmVmb3JlRWFjaCgodG8sIGZyb20pID0+IHtcbiAgY29uc29sZS5sb2coXCJ0bzogXCIrIHRvLmZ1bGxQYXRoICsgXCIgZnJvbTogXCIgKyBmcm9tLmZ1bGxQYXRoICsgXCIgbGFzdEhpc3Rvcnk6IFwiICsgcm91dGVyLmJhY2spXG5cblxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFQQTtBQVVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBaEJBO0FBd0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFrQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUdBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./router/index.js\n");

/***/ })

})