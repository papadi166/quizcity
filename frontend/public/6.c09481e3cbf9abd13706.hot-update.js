webpackHotUpdate(6,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/accounts/Friends.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/accounts/Friends.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ \"./node_modules/core-js/modules/es.string.trim.js\");\n/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ \"./node_modules/core-js/modules/es.json.stringify.js\");\n/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ \"./node_modules/core-js/modules/es.error.cause.js\");\n/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Friends',\n  props: {\n    quiz_to_invite_name: null,\n    quiz_to_invite_id: null\n  },\n  data: function data() {\n    return {\n      users: [],\n      friend_requests: []\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    fetch(\"http://10.10.10.23:8002/\" + \"api/users/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return _this.users = data;\n    }).then(function (data) {\n      return _this.friend_requests = data.friend_request_to;\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n  },\n  methods: {\n    getCookie: function getCookie(name) {\n      var cookieValue = null;\n\n      if (document.cookie && document.cookie != '') {\n        var cookies = document.cookie.split(';');\n\n        for (var i = 0; i < cookies.length; i++) {\n          var cookie = cookies[i].trim(); // Does this cookie string begin with the name we want?\n\n          if (cookie.substring(0, name.length + 1) == name + '=') {\n            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));\n            break;\n          }\n        }\n      }\n\n      return cookieValue;\n    },\n    inviteToGame: function inviteToGame(opponent) {\n      this.createGame(opponent); // TODO: 1. create invitation in db - backend, \n      // TODO: 2. load invitation as notification in left panel and bottompanel - frontend, \n      // TODO: 3. if invitation exists delete old and create new - backend + (min time to invite again: 5 sec), button silver- frontend\n      // TODO: 4. if reciever accepted and sender status: waiting or accepted: create game in database and route users to game (quizStarted = true)\n      // TODO: 5. if game finished save game in history with points etc.\n    },\n    createGame: function createGame(opponent) {\n      var _this2 = this;\n\n      return Object(C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var response;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(\"http://10.10.10.23:8002/\" + \"api/myquizes/\", {\n                  method: 'POST',\n                  headers: {\n                    'Accept': 'application/json',\n                    'Content-Type': 'application/json',\n                    'Media-Type': 'application/json',\n                    'X-CSRFToken': _this2.getCookie('csrftoken')\n                  },\n                  body: JSON.stringify({\n                    \"game_creator\": _this2.$store.state.user.id,\n                    \"game_opponent\": opponent,\n                    \"score\": 0,\n                    \"quiz\": _this2.quiz_to_invite.toString()\n                  })\n                }).then(function (res) {\n                  if (!res.ok) return res.text().then(function (text) {\n                    throw new Error(text);\n                  });else return res.json();\n                });\n\n              case 2:\n                response = _context.sent;\n                return _context.abrupt(\"return\", response.json);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9hY2NvdW50cy9GcmllbmRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ZpZXdzL2FjY291bnRzL0ZyaWVuZHMudnVlPzY3Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICAgIDxzdHJvbmcgdi1pZj1cInF1aXpfdG9faW52aXRlICE9IG51bGxcIj5RdWl6IHRvIGludml0ZToge3txdWl6X3RvX2ludml0ZV9uYW1lfX08L3N0cm9uZz5cclxuICAgICAgPGgxPllvdXIgRnJpZW5kczwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgdi1mb3I9XCJmcmllbmQgaW4gJHN0b3JlLnN0YXRlLnVzZXIuZnJpZW5kc1wiIDprZXk9XCJmcmllbmRcIj5cclxuICAgICAgICAgICAgICB7e2ZyaWVuZC51c2VybmFtZX19IDxidXR0b24gQGNsaWNrPVwiaW52aXRlVG9HYW1lKGZyaWVuZC5pZClcIiB2LWlmPVwicXVpel90b19pbnZpdGUgIT0gbnVsbFwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPkludml0ZSB0byBnYW1lPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8YnI+XHJcbiAgICA8YT5BbGwgdXNlcnM8L2E+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9XCJib3JkZXI6IDFweCBzb2xpZDtcIj5cclxuICAgICAgICAgIDxkaXYgdi1mb3I9XCJ1c2VyIGluIHRoaXMudXNlcnNcIiA6a2V5PVwidXNlci5pZFwiPlxyXG4gICAgICAgICAgICAgIHt7dXNlci51c2VybmFtZX19IDxhIDpocmVmPVwiYC9hcGkvc2VuZF9mcmllbmRfcmVxdWVzdC8ke3VzZXIuaWR9YFwiPkludml0ZSB0byBmcmllbmRzPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8aDI+RnJpZW5kIFJlcXVlc3RzPC9oMj5cclxuICAgIDxkaXYgdi1mb3I9XCJyZXF1ZXN0IGluIGZyaWVuZF9yZXF1ZXN0c1wiIDprZXk9XCJyZXF1ZXN0LmlkXCI+XHJcbiAgICAgICA8cD48c3Bhbj5Gcm9tIHVzZXI6e3tyZXF1ZXN0LmZyb21fdXNlcn19PC9zcGFuPjwvcD4gPGEgOmhyZWY9XCJgL2FwaS9hY2NlcHRfZnJpZW5kX3JlcXVlc3QvJHtyZXF1ZXN0LmlkfWBcIj5BY2NlcHQgZnJpZW5kIHJlcXVlc3Q8L2E+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAnRnJpZW5kcycsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHF1aXpfdG9faW52aXRlX25hbWU6IG51bGwsXHJcbiAgICAgICAgcXVpel90b19pbnZpdGVfaWQ6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VyczogW10sXHJcbiAgICAgICAgICAgIGZyaWVuZF9yZXF1ZXN0czogW10sXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIGZldGNoKHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBcImFwaS91c2Vycy9cIilcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgLnRoZW4oKGRhdGEpID0+ICh0aGlzLnVzZXJzID0gZGF0YSkpXHJcbiAgICAgICAgIC50aGVuKChkYXRhKSA9PiAodGhpcy5mcmllbmRfcmVxdWVzdHMgPSBkYXRhLmZyaWVuZF9yZXF1ZXN0X3RvKSlcclxuICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSk7XHJcblxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgZ2V0Q29va2llKG5hbWUpIHtcclxuICAgICAgICB2YXIgY29va2llVmFsdWUgPSBudWxsO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5jb29raWUgJiYgZG9jdW1lbnQuY29va2llICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvb2tpZSA9IGNvb2tpZXNbaV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gRG9lcyB0aGlzIGNvb2tpZSBzdHJpbmcgYmVnaW4gd2l0aCB0aGUgbmFtZSB3ZSB3YW50P1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvb2tpZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggKyAxKSA9PSAobmFtZSArICc9JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb29raWVWYWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKG5hbWUubGVuZ3RoICsgMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29va2llVmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgaW52aXRlVG9HYW1lKG9wcG9uZW50KSB7XHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZUdhbWUob3Bwb25lbnQpXHJcbiAgICAgICAgICAvLyBUT0RPOiAxLiBjcmVhdGUgaW52aXRhdGlvbiBpbiBkYiAtIGJhY2tlbmQsIFxyXG4gICAgICAgICAgLy8gVE9ETzogMi4gbG9hZCBpbnZpdGF0aW9uIGFzIG5vdGlmaWNhdGlvbiBpbiBsZWZ0IHBhbmVsIGFuZCBib3R0b21wYW5lbCAtIGZyb250ZW5kLCBcclxuICAgICAgICAgIC8vIFRPRE86IDMuIGlmIGludml0YXRpb24gZXhpc3RzIGRlbGV0ZSBvbGQgYW5kIGNyZWF0ZSBuZXcgLSBiYWNrZW5kICsgKG1pbiB0aW1lIHRvIGludml0ZSBhZ2FpbjogNSBzZWMpLCBidXR0b24gc2lsdmVyLSBmcm9udGVuZFxyXG4gICAgICAgICAgLy8gVE9ETzogNC4gaWYgcmVjaWV2ZXIgYWNjZXB0ZWQgYW5kIHNlbmRlciBzdGF0dXM6IHdhaXRpbmcgb3IgYWNjZXB0ZWQ6IGNyZWF0ZSBnYW1lIGluIGRhdGFiYXNlIGFuZCByb3V0ZSB1c2VycyB0byBnYW1lIChxdWl6U3RhcnRlZCA9IHRydWUpXHJcbiAgICAgICAgICAvLyBUT0RPOiA1LiBpZiBnYW1lIGZpbmlzaGVkIHNhdmUgZ2FtZSBpbiBoaXN0b3J5IHdpdGggcG9pbnRzIGV0Yy5cclxuXHJcblxyXG4gICAgICB9LFxyXG4gICAgYXN5bmMgY3JlYXRlR2FtZShvcHBvbmVudCkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgXCJhcGkvbXlxdWl6ZXMvXCIsIHtcclxuICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdNZWRpYS1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdYLUNTUkZUb2tlbic6IHRoaXMuZ2V0Q29va2llKCdjc3JmdG9rZW4nKVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgXCJnYW1lX2NyZWF0b3JcIjogdGhpcy4kc3RvcmUuc3RhdGUudXNlci5pZCxcclxuICAgICAgICAgICAgICAgIFwiZ2FtZV9vcHBvbmVudFwiOiBvcHBvbmVudCxcclxuICAgICAgICAgICAgICAgIFwic2NvcmVcIjogMCxcclxuICAgICAgICAgICAgICAgIFwicXVpelwiOiB0aGlzLnF1aXpfdG9faW52aXRlLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgcmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0ID0+IHt0aHJvdyBuZXcgRXJyb3IodGV4dCl9KVxyXG4gICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICBcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uXHJcblxyXG4gICAgICB9XHJcbiAgfSxcclxuXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVJBO0FBZ0JBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFwQkE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVCQTtBQWpEQTtBQXBCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/accounts/Friends.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/accounts/Friends.vue?vue&type=template&id=47498e5b":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/accounts/Friends.vue?vue&type=template&id=47498e5b ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  key: 0\n};\n\nvar _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h1\", null, \"Your Friends\", -1\n/* HOISTED */\n);\n\nvar _hoisted_3 = {\n  class: \"container\"\n};\nvar _hoisted_4 = [\"onClick\"];\n\nvar _hoisted_5 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"br\", null, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_6 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"a\", null, \"All users\", -1\n/* HOISTED */\n);\n\nvar _hoisted_7 = {\n  class: \"container\",\n  style: {\n    \"border\": \"1px solid\"\n  }\n};\nvar _hoisted_8 = [\"href\"];\n\nvar _hoisted_9 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h2\", null, \"Friend Requests\", -1\n/* HOISTED */\n);\n\nvar _hoisted_10 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])();\n\nvar _hoisted_11 = [\"href\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", null, [_ctx.quiz_to_invite != null ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"strong\", _hoisted_1, \"Quiz to invite: \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($props.quiz_to_invite_name), 1\n  /* TEXT */\n  )) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true), _hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_3, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])(_ctx.$store.state.user.friends, function (friend) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", {\n      key: friend\n    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(friend.username) + \" \", 1\n    /* TEXT */\n    ), _ctx.quiz_to_invite != null ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"button\", {\n      key: 0,\n      onClick: function onClick($event) {\n        return $options.inviteToGame(friend.id);\n      },\n      class: \"btn btn-outline-secondary\"\n    }, \"Invite to game\", 8\n    /* PROPS */\n    , _hoisted_4)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))]), _hoisted_5, _hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_7, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])(this.users, function (user) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", {\n      key: user.id\n    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(user.username) + \" \", 1\n    /* TEXT */\n    ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"a\", {\n      href: \"/api/send_friend_request/\".concat(user.id)\n    }, \"Invite to friends\", 8\n    /* PROPS */\n    , _hoisted_8)]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))]), _hoisted_9, (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])($data.friend_requests, function (request) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", {\n      key: request.id\n    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"p\", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"span\", null, \"From user:\" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(request.from_user), 1\n    /* TEXT */\n    )]), _hoisted_10, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"a\", {\n      href: \"/api/accept_friend_request/\".concat(request.id)\n    }, \"Accept friend request\", 8\n    /* PROPS */\n    , _hoisted_11)]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9hY2NvdW50cy9GcmllbmRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzQ5OGU1Yi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ZpZXdzL2FjY291bnRzL0ZyaWVuZHMudnVlPzY3Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICAgIDxzdHJvbmcgdi1pZj1cInF1aXpfdG9faW52aXRlICE9IG51bGxcIj5RdWl6IHRvIGludml0ZToge3txdWl6X3RvX2ludml0ZV9uYW1lfX08L3N0cm9uZz5cclxuICAgICAgPGgxPllvdXIgRnJpZW5kczwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgdi1mb3I9XCJmcmllbmQgaW4gJHN0b3JlLnN0YXRlLnVzZXIuZnJpZW5kc1wiIDprZXk9XCJmcmllbmRcIj5cclxuICAgICAgICAgICAgICB7e2ZyaWVuZC51c2VybmFtZX19IDxidXR0b24gQGNsaWNrPVwiaW52aXRlVG9HYW1lKGZyaWVuZC5pZClcIiB2LWlmPVwicXVpel90b19pbnZpdGUgIT0gbnVsbFwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiPkludml0ZSB0byBnYW1lPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8YnI+XHJcbiAgICA8YT5BbGwgdXNlcnM8L2E+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9XCJib3JkZXI6IDFweCBzb2xpZDtcIj5cclxuICAgICAgICAgIDxkaXYgdi1mb3I9XCJ1c2VyIGluIHRoaXMudXNlcnNcIiA6a2V5PVwidXNlci5pZFwiPlxyXG4gICAgICAgICAgICAgIHt7dXNlci51c2VybmFtZX19IDxhIDpocmVmPVwiYC9hcGkvc2VuZF9mcmllbmRfcmVxdWVzdC8ke3VzZXIuaWR9YFwiPkludml0ZSB0byBmcmllbmRzPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8aDI+RnJpZW5kIFJlcXVlc3RzPC9oMj5cclxuICAgIDxkaXYgdi1mb3I9XCJyZXF1ZXN0IGluIGZyaWVuZF9yZXF1ZXN0c1wiIDprZXk9XCJyZXF1ZXN0LmlkXCI+XHJcbiAgICAgICA8cD48c3Bhbj5Gcm9tIHVzZXI6e3tyZXF1ZXN0LmZyb21fdXNlcn19PC9zcGFuPjwvcD4gPGEgOmhyZWY9XCJgL2FwaS9hY2NlcHRfZnJpZW5kX3JlcXVlc3QvJHtyZXF1ZXN0LmlkfWBcIj5BY2NlcHQgZnJpZW5kIHJlcXVlc3Q8L2E+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAnRnJpZW5kcycsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHF1aXpfdG9faW52aXRlX25hbWU6IG51bGwsXHJcbiAgICAgICAgcXVpel90b19pbnZpdGVfaWQ6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VyczogW10sXHJcbiAgICAgICAgICAgIGZyaWVuZF9yZXF1ZXN0czogW10sXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIGZldGNoKHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBcImFwaS91c2Vycy9cIilcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgLnRoZW4oKGRhdGEpID0+ICh0aGlzLnVzZXJzID0gZGF0YSkpXHJcbiAgICAgICAgIC50aGVuKChkYXRhKSA9PiAodGhpcy5mcmllbmRfcmVxdWVzdHMgPSBkYXRhLmZyaWVuZF9yZXF1ZXN0X3RvKSlcclxuICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSk7XHJcblxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgZ2V0Q29va2llKG5hbWUpIHtcclxuICAgICAgICB2YXIgY29va2llVmFsdWUgPSBudWxsO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5jb29raWUgJiYgZG9jdW1lbnQuY29va2llICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvb2tpZSA9IGNvb2tpZXNbaV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gRG9lcyB0aGlzIGNvb2tpZSBzdHJpbmcgYmVnaW4gd2l0aCB0aGUgbmFtZSB3ZSB3YW50P1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvb2tpZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggKyAxKSA9PSAobmFtZSArICc9JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb29raWVWYWx1ZSA9IGRlY29kZVVSSUNvbXBvbmVudChjb29raWUuc3Vic3RyaW5nKG5hbWUubGVuZ3RoICsgMSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY29va2llVmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgaW52aXRlVG9HYW1lKG9wcG9uZW50KSB7XHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZUdhbWUob3Bwb25lbnQpXHJcbiAgICAgICAgICAvLyBUT0RPOiAxLiBjcmVhdGUgaW52aXRhdGlvbiBpbiBkYiAtIGJhY2tlbmQsIFxyXG4gICAgICAgICAgLy8gVE9ETzogMi4gbG9hZCBpbnZpdGF0aW9uIGFzIG5vdGlmaWNhdGlvbiBpbiBsZWZ0IHBhbmVsIGFuZCBib3R0b21wYW5lbCAtIGZyb250ZW5kLCBcclxuICAgICAgICAgIC8vIFRPRE86IDMuIGlmIGludml0YXRpb24gZXhpc3RzIGRlbGV0ZSBvbGQgYW5kIGNyZWF0ZSBuZXcgLSBiYWNrZW5kICsgKG1pbiB0aW1lIHRvIGludml0ZSBhZ2FpbjogNSBzZWMpLCBidXR0b24gc2lsdmVyLSBmcm9udGVuZFxyXG4gICAgICAgICAgLy8gVE9ETzogNC4gaWYgcmVjaWV2ZXIgYWNjZXB0ZWQgYW5kIHNlbmRlciBzdGF0dXM6IHdhaXRpbmcgb3IgYWNjZXB0ZWQ6IGNyZWF0ZSBnYW1lIGluIGRhdGFiYXNlIGFuZCByb3V0ZSB1c2VycyB0byBnYW1lIChxdWl6U3RhcnRlZCA9IHRydWUpXHJcbiAgICAgICAgICAvLyBUT0RPOiA1LiBpZiBnYW1lIGZpbmlzaGVkIHNhdmUgZ2FtZSBpbiBoaXN0b3J5IHdpdGggcG9pbnRzIGV0Yy5cclxuXHJcblxyXG4gICAgICB9LFxyXG4gICAgYXN5bmMgY3JlYXRlR2FtZShvcHBvbmVudCkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgXCJhcGkvbXlxdWl6ZXMvXCIsIHtcclxuICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdNZWRpYS1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdYLUNTUkZUb2tlbic6IHRoaXMuZ2V0Q29va2llKCdjc3JmdG9rZW4nKVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgXCJnYW1lX2NyZWF0b3JcIjogdGhpcy4kc3RvcmUuc3RhdGUudXNlci5pZCxcclxuICAgICAgICAgICAgICAgIFwiZ2FtZV9vcHBvbmVudFwiOiBvcHBvbmVudCxcclxuICAgICAgICAgICAgICAgIFwic2NvcmVcIjogMCxcclxuICAgICAgICAgICAgICAgIFwicXVpelwiOiB0aGlzLnF1aXpfdG9faW52aXRlLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgcmV0dXJuIHJlcy50ZXh0KCkudGhlbih0ZXh0ID0+IHt0aHJvdyBuZXcgRXJyb3IodGV4dCl9KVxyXG4gICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICBcclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uXHJcblxyXG4gICAgICB9XHJcbiAgfSxcclxuXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTs7OztBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFNQTtBQUFBO0FBQUE7QUFDQTs7Ozs7QUFsQkE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBREE7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFGQTtBQVFBO0FBQUE7QUFFQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUZBO0FBTUE7QUFBQTtBQUVBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRkE7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/accounts/Friends.vue?vue&type=template&id=47498e5b\n");

/***/ })

})