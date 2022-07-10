webpackHotUpdate("app",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])({\n  state: function state() {\n    return {\n      count: 0,\n      categories: [],\n      modalConfirm: null,\n      searchResults: [],\n      searchIn: [],\n      authenticated: false,\n      login_path: \"login\",\n      username: \"\",\n      searching: false,\n      day: true,\n      user: {\n        \"username\": \"\",\n        \"token\": \"\",\n        \"friends\": []\n      },\n      //quiz game mind\n      questions: []\n    };\n  },\n  mutations: {\n    increment: function increment(state) {\n      state.count += 110;\n    }\n  },\n  getters: {\n    getUserStatus: function getUserStatus(state) {\n      state.user.username === '' ? state.login_path = \"login\" : state.login_path = \"login\";\n      return state.login_path;\n    }\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0b3JlL3N0b3JlLmpzPzQyYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd2dWV4J1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlKHtcclxuICBzdGF0ZSAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjb3VudDogMCxcclxuICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgIG1vZGFsQ29uZmlybTogbnVsbCxcclxuICAgICAgc2VhcmNoUmVzdWx0czogW10sXHJcbiAgICAgIHNlYXJjaEluOiBbXSxcclxuICAgICAgYXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgICAgIGxvZ2luX3BhdGg6IFwibG9naW5cIixcclxuICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgIHNlYXJjaGluZzogZmFsc2UsXHJcbiAgICAgIGRheTogdHJ1ZSxcclxuICAgICAgdXNlcjoge1xyXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJcIixcclxuICAgICAgICBcInRva2VuXCI6IFwiXCIsXHJcbiAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgIFxyXG4gICAgICAgIF0sXHJcblxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy9xdWl6IGdhbWUgbWluZFxyXG4gICAgICBxdWVzdGlvbnM6IFtdLFxyXG4gICAgICBcclxuICAgIH1cclxuICB9LFxyXG4gIFxyXG4gIG11dGF0aW9uczoge1xyXG4gICAgaW5jcmVtZW50IChzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5jb3VudCArPSAxMTBcclxuICAgIH0sXHJcbiAgfSxcclxuICBnZXR0ZXJzOiB7XHJcbiAgICBnZXRVc2VyU3RhdHVzIChzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS51c2VyLnVzZXJuYW1lID09PSAnJyA/IHN0YXRlLmxvZ2luX3BhdGggPSBcImxvZ2luXCIgOiBzdGF0ZS5sb2dpbl9wYXRoID0gXCJsb2dpblwiXHJcbiAgICAgIHJldHVybiBzdGF0ZS5sb2dpbl9wYXRoXHJcbiAgICB9XHJcbiAgfVxyXG59KSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBU0E7QUFDQTtBQXJCQTtBQXdCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFqQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/store.js\n");

/***/ })

})