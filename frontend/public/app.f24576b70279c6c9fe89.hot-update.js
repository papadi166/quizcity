webpackHotUpdate("app",{

/***/ "./node_modules/vuex-persist/dist/esm/index.js":
false,

/***/ "./node_modules/vuex-persist/node_modules/deepmerge/dist/cjs.js":
false,

/***/ "./node_modules/vuex-persist/node_modules/flatted/esm/index.js":
false,

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])({\n  state: function state() {\n    return {\n      count: 0,\n      categories: [],\n      modalConfirm: null,\n      searchResults: [],\n      searchIn: [],\n      authenticated: false,\n      login_path: \"login\",\n      username: \"\",\n      searching: false,\n      day: true,\n      user: {\n        \"id\": null,\n        \"username\": \"guest\",\n        \"token\": \"\",\n        \"avatar\": \"/static/assets/gamer-esports-player-competition-activity-256.webp\",\n        \"friends\": []\n      },\n      //quiz game mind\n      questions: []\n    };\n  },\n  mutations: {\n    increment: function increment(state) {\n      state.count += 110;\n    }\n  },\n  getters: {\n    getUserStatus: function getUserStatus(state) {\n      state.user.username === 'guest' ? state.login_path = \"login\" : state.login_path = \"logout\";\n      return state.login_path;\n    }\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0b3JlL3N0b3JlLmpzPzQyYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd2dWV4J1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZSh7XHJcblxyXG4gIHN0YXRlICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvdW50OiAwLFxyXG4gICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgbW9kYWxDb25maXJtOiBudWxsLFxyXG4gICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcclxuICAgICAgc2VhcmNoSW46IFtdLFxyXG4gICAgICBhdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgICAgbG9naW5fcGF0aDogXCJsb2dpblwiLFxyXG4gICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgc2VhcmNoaW5nOiBmYWxzZSxcclxuICAgICAgZGF5OiB0cnVlLFxyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgXCJpZFwiOiBudWxsLFxyXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJndWVzdFwiLFxyXG4gICAgICAgIFwidG9rZW5cIjogXCJcIixcclxuICAgICAgICBcImF2YXRhclwiOiBcIi9zdGF0aWMvYXNzZXRzL2dhbWVyLWVzcG9ydHMtcGxheWVyLWNvbXBldGl0aW9uLWFjdGl2aXR5LTI1Ni53ZWJwXCIsXHJcbiAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgIFxyXG4gICAgICAgIF0sXHJcblxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy9xdWl6IGdhbWUgbWluZFxyXG4gICAgICBxdWVzdGlvbnM6IFtdLFxyXG4gICAgICBcclxuICAgIH1cclxuICB9LFxyXG4gIFxyXG4gIG11dGF0aW9uczoge1xyXG4gICAgaW5jcmVtZW50IChzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5jb3VudCArPSAxMTBcclxuICAgIH0sXHJcbiAgfSxcclxuICBnZXR0ZXJzOiB7XHJcbiAgICBnZXRVc2VyU3RhdHVzIChzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS51c2VyLnVzZXJuYW1lID09PSAnZ3Vlc3QnID8gc3RhdGUubG9naW5fcGF0aCA9IFwibG9naW5cIiA6IHN0YXRlLmxvZ2luX3BhdGggPSBcImxvZ291dFwiXHJcbiAgICAgIHJldHVybiBzdGF0ZS5sb2dpbl9wYXRoXHJcbiAgICB9XHJcbiAgfVxyXG59KSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVdBO0FBQ0E7QUF2QkE7QUEwQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBcENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/store.js\n");

/***/ })

})