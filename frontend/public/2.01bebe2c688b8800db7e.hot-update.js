webpackHotUpdate(2,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/accounts/Friends.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/accounts/Friends.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ \"./node_modules/core-js/modules/es.json.stringify.js\");\n/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ \"./node_modules/core-js/modules/es.error.cause.js\");\n/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_assets_getCookie_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/assets/getCookie.js */ \"./src/assets/getCookie.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Friends',\n  props: {\n    quiz_to_invite_name: null,\n    quiz_to_invite_id: null\n  },\n  data: function data() {\n    return {\n      users: [],\n      friend_requests: []\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    fetch(\"http://10.10.10.23:8002/\" + \"api/users/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return _this.users = data;\n    }).then(function (data) {\n      return _this.friend_requests = data.friend_request_to;\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n  },\n  methods: {\n    getCookie: _src_assets_getCookie_js__WEBPACK_IMPORTED_MODULE_5__[\"getCookie\"],\n    inviteToGame: function inviteToGame(opponent) {\n      var timer = setTimeout(function () {\n        return console.log(\"invitation sent to \".concat(opponent));\n      }, 0);\n      this.createGame(opponent); // TODO: 1. create invitation in db - backend, \n      // TODO: 2. load invitation as notification in left panel and bottompanel - frontend, \n      // TODO: 3. if invitation exists delete old and create new - backend + (min time to invite again: 5 sec), button silver- frontend\n      // TODO: 4. if reciever accepted and sender status: waiting or accepted: create game in database and route users to game (quizStarted = true)\n      // TODO: 5. if game finished save game in history with points etc.\n    },\n    createGame: function createGame(opponent) {\n      var _this2 = this;\n\n      return Object(C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var response;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(\"http://10.10.10.23:8002/\" + \"api/quiztaker/\", {\n                  method: 'POST',\n                  headers: {\n                    'Accept': 'application/json',\n                    'Content-Type': 'application/json',\n                    'Media-Type': 'application/json',\n                    'X-CSRFToken': _this2.getCookie('csrftoken')\n                  },\n                  body: JSON.stringify({\n                    \"game_creator\": _this2.$store.state.user.id,\n                    \"game_opponent\": opponent,\n                    \"score\": 0,\n                    \"quiz\": _this2.quiz_to_invite_id\n                  })\n                }).then(function (res) {\n                  if (!res.ok) return res.text().then(function (text) {\n                    throw new Error(text);\n                  });else return res.json();\n                });\n\n              case 2:\n                response = _context.sent;\n                return _context.abrupt(\"return\", response.json);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9hY2NvdW50cy9GcmllbmRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ZpZXdzL2FjY291bnRzL0ZyaWVuZHMudnVlPzY3Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICAgIDxzdHJvbmcgdi1pZj1cInF1aXpfdG9faW52aXRlX25hbWUgIT0gbnVsbFwiPlF1aXogdG8gaW52aXRlOiB7e3F1aXpfdG9faW52aXRlX25hbWV9fTwvc3Ryb25nPlxyXG4gICAgICA8aDE+WW91ciBGcmllbmRzPC9oMT5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiB2LWZvcj1cImZyaWVuZCBpbiAkc3RvcmUuc3RhdGUudXNlci5mcmllbmRzXCIgOmtleT1cImZyaWVuZFwiPlxyXG4gICAgICAgICAgICAgIHt7ZnJpZW5kLnVzZXJuYW1lfX0gPGJ1dHRvbiB2LWlmPVwicXVpel90b19pbnZpdGVfbmFtZSAhPSBudWxsXCIgQGNsaWNrPVwiaW52aXRlVG9HYW1lKGZyaWVuZC5pZClcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5JbnZpdGUgdG8gZ2FtZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGJyPlxyXG4gICAgPGE+QWxsIHVzZXJzPC9hPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwiYm9yZGVyOiAxcHggc29saWQ7XCI+XHJcbiAgICAgICAgICA8ZGl2IHYtZm9yPVwidXNlciBpbiB0aGlzLnVzZXJzXCIgOmtleT1cInVzZXIuaWRcIj5cclxuICAgICAgICAgICAgICB7e3VzZXIudXNlcm5hbWV9fSA8YSA6aHJlZj1cImAvYXBpL3NlbmRfZnJpZW5kX3JlcXVlc3QvJHt1c2VyLmlkfWBcIj5JbnZpdGUgdG8gZnJpZW5kczwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGgyPkZyaWVuZCBSZXF1ZXN0czwvaDI+XHJcbiAgICA8ZGl2IHYtZm9yPVwicmVxdWVzdCBpbiBmcmllbmRfcmVxdWVzdHNcIiA6a2V5PVwicmVxdWVzdC5pZFwiPlxyXG4gICAgICAgPHA+PHNwYW4+RnJvbSB1c2VyOnt7cmVxdWVzdC5mcm9tX3VzZXJ9fTwvc3Bhbj48L3A+IDxhIDpocmVmPVwiYC9hcGkvYWNjZXB0X2ZyaWVuZF9yZXF1ZXN0LyR7cmVxdWVzdC5pZH1gXCI+QWNjZXB0IGZyaWVuZCByZXF1ZXN0PC9hPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHtnZXRDb29raWV9IGZyb20gJy4uLy4uL3NyYy9hc3NldHMvZ2V0Q29va2llLmpzJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ0ZyaWVuZHMnLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBxdWl6X3RvX2ludml0ZV9uYW1lOiBudWxsLFxyXG4gICAgICAgIHF1aXpfdG9faW52aXRlX2lkOiBudWxsLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXNlcnM6IFtdLFxyXG4gICAgICAgICAgICBmcmllbmRfcmVxdWVzdHM6IFtdLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICBmZXRjaChwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgXCJhcGkvdXNlcnMvXCIpXHJcbiAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgIC50aGVuKChkYXRhKSA9PiAodGhpcy51c2VycyA9IGRhdGEpKVxyXG4gICAgICAgICAudGhlbigoZGF0YSkgPT4gKHRoaXMuZnJpZW5kX3JlcXVlc3RzID0gZGF0YS5mcmllbmRfcmVxdWVzdF90bykpXHJcbiAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkpO1xyXG5cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgICAgZ2V0Q29va2llLFxyXG4gICAgICBpbnZpdGVUb0dhbWUob3Bwb25lbnQpIHtcclxuICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiAoY29uc29sZS5sb2coYGludml0YXRpb24gc2VudCB0byAke29wcG9uZW50fWAgKSksIDApXHJcbiAgICAgICAgICB0aGlzLmNyZWF0ZUdhbWUob3Bwb25lbnQpXHJcbiAgICAgICAgICAvLyBUT0RPOiAxLiBjcmVhdGUgaW52aXRhdGlvbiBpbiBkYiAtIGJhY2tlbmQsIFxyXG4gICAgICAgICAgLy8gVE9ETzogMi4gbG9hZCBpbnZpdGF0aW9uIGFzIG5vdGlmaWNhdGlvbiBpbiBsZWZ0IHBhbmVsIGFuZCBib3R0b21wYW5lbCAtIGZyb250ZW5kLCBcclxuICAgICAgICAgIC8vIFRPRE86IDMuIGlmIGludml0YXRpb24gZXhpc3RzIGRlbGV0ZSBvbGQgYW5kIGNyZWF0ZSBuZXcgLSBiYWNrZW5kICsgKG1pbiB0aW1lIHRvIGludml0ZSBhZ2FpbjogNSBzZWMpLCBidXR0b24gc2lsdmVyLSBmcm9udGVuZFxyXG4gICAgICAgICAgLy8gVE9ETzogNC4gaWYgcmVjaWV2ZXIgYWNjZXB0ZWQgYW5kIHNlbmRlciBzdGF0dXM6IHdhaXRpbmcgb3IgYWNjZXB0ZWQ6IGNyZWF0ZSBnYW1lIGluIGRhdGFiYXNlIGFuZCByb3V0ZSB1c2VycyB0byBnYW1lIChxdWl6U3RhcnRlZCA9IHRydWUpXHJcbiAgICAgICAgICAvLyBUT0RPOiA1LiBpZiBnYW1lIGZpbmlzaGVkIHNhdmUgZ2FtZSBpbiBoaXN0b3J5IHdpdGggcG9pbnRzIGV0Yy5cclxuXHJcblxyXG4gICAgICB9LFxyXG4gICAgYXN5bmMgY3JlYXRlR2FtZShvcHBvbmVudCkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgXCJhcGkvcXVpenRha2VyL1wiLCB7XHJcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnTWVkaWEtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnWC1DU1JGVG9rZW4nOiB0aGlzLmdldENvb2tpZSgnY3NyZnRva2VuJylcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIFwiZ2FtZV9jcmVhdG9yXCI6IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICBcImdhbWVfb3Bwb25lbnRcIjogb3Bwb25lbnQsXHJcbiAgICAgICAgICAgICAgICBcInNjb3JlXCI6IDAsXHJcbiAgICAgICAgICAgICAgICBcInF1aXpcIjogdGhpcy5xdWl6X3RvX2ludml0ZV9pZFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghcmVzLm9rKSByZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQgPT4ge3Rocm93IG5ldyBFcnJvcih0ZXh0KX0pXHJcbiAgICAgICAgICAgICAgZWxzZSByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgIFxyXG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb25cclxuXHJcbiAgICAgIH1cclxuICB9LFxyXG5cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFSQTtBQWdCQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBcEJBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF1QkE7QUFwQ0E7QUFwQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/accounts/Friends.vue?vue&type=script&lang=js\n");

/***/ })

})