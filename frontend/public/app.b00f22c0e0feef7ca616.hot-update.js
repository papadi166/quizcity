webpackHotUpdate("app",{

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-browser.js\");\n/* harmony import */ var vuex_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex-persist */ \"./node_modules/vuex-persist/dist/esm/index.js\");\n\n\nvar vuexLocalStorage = new vuex_persist__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n  supportCircular: true,\n  key: 'vuex',\n  storage: window.sessionStorage,\n  reducer: function reducer(state) {\n    return {\n      user: state.user,\n      count: state.count\n    };\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])({\n  state: function state() {\n    return {\n      count: 0,\n      soundMuted: false,\n      categories: [],\n      modalConfirm: null,\n      searchResults: [],\n      searchIn: [],\n      authenticated: false,\n      login_path: \"login\",\n      username: \"\",\n      searching: false,\n      day: true,\n      user: {\n        \"id\": null,\n        \"username\": \"guest\",\n        \"token\": \"\",\n        \"avatar\": \"/static/assets/gamer-esports-player-competition-activity-256.webp\",\n        \"friends\": []\n      },\n      //quiz game mind\n      questions: []\n    };\n  },\n  mutations: {\n    increment: function increment(state) {\n      state.count += 110;\n    },\n    soundmutation: function soundmutation(state) {\n      state.sound = !state.sound;\n      console.log(state.sound);\n    },\n    setUser: function setUser(state, data) {\n      state.user.username = data.username;\n      state.user.id = data.id;\n      state.user.friends = data.friends;\n      state.user.avatar = data.avatar;\n    },\n    logout: function logout(state) {\n      state.user.username = \"guest\", state.user.id = null, state.user.friends = [], state.user.avatar = \"/static/assets/gamer-esports-player-competition-activity-256.webp\";\n    }\n  },\n  getters: {\n    getUserStatus: function getUserStatus(state) {\n      state.user.username === 'guest' ? state.login_path = \"login\" : state.login_path = \"logout\";\n      return state.login_path;\n    },\n    getUserName: function getUserName(state) {\n      return state.user.username;\n    },\n    getUserAvatar: function getUserAvatar(state) {\n      return state.user.avatar;\n    },\n    isSoundMuted: function isSoundMuted(state) {\n      return state.sound;\n    }\n  },\n  plugins: [vuexLocalStorage.plugin]\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0b3JlL3N0b3JlLmpzPzQyYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd2dWV4J1xyXG5pbXBvcnQgVnVleFBlcnNpc3RlbmNlIGZyb20gXCJ2dWV4LXBlcnNpc3RcIlxyXG5cclxuXHJcbmNvbnN0IHZ1ZXhMb2NhbFN0b3JhZ2UgPSBuZXcgVnVleFBlcnNpc3RlbmNlKHtcclxuICBzdXBwb3J0Q2lyY3VsYXI6IHRydWUsXHJcbiAga2V5OiAndnVleCcsXHJcbiAgc3RvcmFnZTogd2luZG93LnNlc3Npb25TdG9yYWdlLFxyXG4gIHJlZHVjZXI6IChzdGF0ZSkgPT4gKHtcclxuICAgIHVzZXI6IHN0YXRlLnVzZXIsXHJcbiAgICBjb3VudDogc3RhdGUuY291bnQsXHJcbiAgfSlcclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZSh7XHJcbiAgc3RhdGUgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY291bnQ6IDAsXHJcbiAgICAgIHNvdW5kTXV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgbW9kYWxDb25maXJtOiBudWxsLFxyXG4gICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcclxuICAgICAgc2VhcmNoSW46IFtdLFxyXG4gICAgICBhdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgICAgbG9naW5fcGF0aDogXCJsb2dpblwiLFxyXG4gICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgc2VhcmNoaW5nOiBmYWxzZSxcclxuICAgICAgZGF5OiB0cnVlLFxyXG4gICAgICB1c2VyOiB7XHJcbiAgICAgICAgXCJpZFwiOiBudWxsLFxyXG4gICAgICAgIFwidXNlcm5hbWVcIjogXCJndWVzdFwiLFxyXG4gICAgICAgIFwidG9rZW5cIjogXCJcIixcclxuICAgICAgICBcImF2YXRhclwiOiBcIi9zdGF0aWMvYXNzZXRzL2dhbWVyLWVzcG9ydHMtcGxheWVyLWNvbXBldGl0aW9uLWFjdGl2aXR5LTI1Ni53ZWJwXCIsXHJcbiAgICAgICAgXCJmcmllbmRzXCI6IFtcclxuICAgICAgICAgIFxyXG4gICAgICAgIF0sXHJcblxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy9xdWl6IGdhbWUgbWluZFxyXG4gICAgICBxdWVzdGlvbnM6IFtdLFxyXG4gICAgICBcclxuICAgIH1cclxuICB9LFxyXG4gIFxyXG4gIG11dGF0aW9uczoge1xyXG4gICAgaW5jcmVtZW50IChzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5jb3VudCArPSAxMTBcclxuICAgIH0sXHJcbiAgICBzb3VuZG11dGF0aW9uIChzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS5zb3VuZCA9ICFzdGF0ZS5zb3VuZFxyXG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZS5zb3VuZClcclxuICAgIH0sXHJcbiAgICBzZXRVc2VyIChzdGF0ZSwgZGF0YSkge1xyXG4gICAgICBzdGF0ZS51c2VyLnVzZXJuYW1lID0gZGF0YS51c2VybmFtZTtcclxuICAgICAgc3RhdGUudXNlci5pZCA9IGRhdGEuaWQ7XHJcbiAgICAgIHN0YXRlLnVzZXIuZnJpZW5kcyA9IGRhdGEuZnJpZW5kcztcclxuICAgICAgc3RhdGUudXNlci5hdmF0YXIgPSBkYXRhLmF2YXRhcjtcclxuICAgIH0sXHJcbiAgICBsb2dvdXQgKHN0YXRlKSB7XHJcbiAgICAgIHN0YXRlLnVzZXIudXNlcm5hbWUgPSBcImd1ZXN0XCIsXHJcbiAgICAgIHN0YXRlLnVzZXIuaWQgPSBudWxsLFxyXG4gICAgICBzdGF0ZS51c2VyLmZyaWVuZHMgPSAgW10sXHJcbiAgICAgIHN0YXRlLnVzZXIuYXZhdGFyID0gXCIvc3RhdGljL2Fzc2V0cy9nYW1lci1lc3BvcnRzLXBsYXllci1jb21wZXRpdGlvbi1hY3Rpdml0eS0yNTYud2VicFwiO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfSxcclxuICBnZXR0ZXJzOiB7XHJcbiAgICBnZXRVc2VyU3RhdHVzIChzdGF0ZSkge1xyXG4gICAgICBzdGF0ZS51c2VyLnVzZXJuYW1lID09PSAnZ3Vlc3QnID8gc3RhdGUubG9naW5fcGF0aCA9IFwibG9naW5cIiA6IHN0YXRlLmxvZ2luX3BhdGggPSBcImxvZ291dFwiXHJcbiAgICAgIHJldHVybiBzdGF0ZS5sb2dpbl9wYXRoXHJcbiAgICB9LFxyXG4gICAgZ2V0VXNlck5hbWUgKHN0YXRlKSB7XHJcbiAgICAgIHJldHVybiBzdGF0ZS51c2VyLnVzZXJuYW1lXHJcbiAgICB9LFxyXG4gICAgZ2V0VXNlckF2YXRhciAoc3RhdGUpIHtcclxuICAgICAgcmV0dXJuIHN0YXRlLnVzZXIuYXZhdGFyXHJcbiAgICB9LFxyXG4gICAgaXNTb3VuZE11dGVkIChzdGF0ZSkge1xyXG4gICAgICByZXR1cm4gc3RhdGUuc291bmRcclxuICAgIH1cclxuICB9LFxyXG4gIHBsdWdpbnM6IFt2dWV4TG9jYWxTdG9yYWdlLnBsdWdpbl0sXHJcbn0pIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFKQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVdBO0FBQ0E7QUF4QkE7QUEyQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBckJBO0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBckVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/store.js\n");

/***/ })

})