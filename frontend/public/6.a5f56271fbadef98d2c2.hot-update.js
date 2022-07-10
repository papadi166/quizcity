webpackHotUpdate(6,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/accounts/Friends.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/accounts/Friends.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ \"./node_modules/core-js/modules/es.json.stringify.js\");\n/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Friends',\n  props: {\n    quiz_to_invite: null\n  },\n  data: function data() {\n    return {\n      users: [],\n      friend_requests: []\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    fetch(\"http://10.10.10.23:8002/\" + \"api/users/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return _this.users = data;\n    }).then(function (data) {\n      return _this.friend_requests = data.friend_request_to;\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n  },\n  methods: {\n    inviteToGame: function inviteToGame(opponent) {\n      this.createGame(opponent).then(function (data) {\n        console.log(data);\n      }).catch(function (err) {\n        return console.log(err.message);\n      }); // TODO: 1. create invitation in db - backend, \n      // TODO: 2. load invitation as notification in left panel and bottompanel - frontend, \n      // TODO: 3. if invitation exists delete old and create new - backend + (min time to invite again: 5 sec), button silver- frontend\n      // TODO: 4. if reciever accepted and sender status: waiting or accepted: create game in database and route users to game (quizStarted = true)\n      // TODO: 5. if game finished save game in history with points etc.\n    },\n    createGame: function createGame(opponent) {\n      var _this2 = this;\n\n      return Object(C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var response;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                console.log(\"etap 1: \" + _this2.$store.state.user.id);\n                console.log(\"etap 2: \" + _this2.quiz_to_invite);\n                console.log(\"opponent:\" + opponent);\n                _context.next = 5;\n                return fetch(\"http://10.10.10.23:8002/\" + \"api/myquizes/\", {\n                  method: 'POST',\n                  headers: {\n                    'Media-Type': 'application/json'\n                  },\n                  body: JSON.stringify({\n                    \"game_creator\": _this2.$store.state.user.id,\n                    \"game_opponent\": opponent,\n                    \"score\": 0,\n                    \"quiz\": _this2.quiz_to_invite\n                  })\n                });\n\n              case 5:\n                response = _context.sent;\n                return _context.abrupt(\"return\", response.json);\n\n              case 7:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9hY2NvdW50cy9GcmllbmRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ZpZXdzL2FjY291bnRzL0ZyaWVuZHMudnVlPzY3Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICAgIDxzdHJvbmcgdi1pZj1cInF1aXpfdG9faW52aXRlICE9IG51bGxcIj5RdWl6IHRvIGludml0ZToge3txdWl6X3RvX2ludml0ZX19PC9zdHJvbmc+XHJcbiAgICAgIDxoMT5Zb3VyIEZyaWVuZHM8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IHYtZm9yPVwiZnJpZW5kIGluICRzdG9yZS5zdGF0ZS51c2VyLmZyaWVuZHNcIiA6a2V5PVwiZnJpZW5kXCI+XHJcbiAgICAgICAgICAgICAge3tmcmllbmQudXNlcm5hbWV9fSA8YnV0dG9uIEBjbGljaz1cImludml0ZVRvR2FtZShmcmllbmQuaWQpXCIgdi1pZj1cInF1aXpfdG9faW52aXRlICE9IG51bGxcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5JbnZpdGUgdG8gZ2FtZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGJyPlxyXG4gICAgPGE+QWxsIHVzZXJzPC9hPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwiYm9yZGVyOiAxcHggc29saWQ7XCI+XHJcbiAgICAgICAgICA8ZGl2IHYtZm9yPVwidXNlciBpbiB0aGlzLnVzZXJzXCIgOmtleT1cInVzZXIuaWRcIj5cclxuICAgICAgICAgICAgICB7e3VzZXIudXNlcm5hbWV9fSA8YSA6aHJlZj1cImAvYXBpL3NlbmRfZnJpZW5kX3JlcXVlc3QvJHt1c2VyLmlkfWBcIj5JbnZpdGUgdG8gZnJpZW5kczwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGgyPkZyaWVuZCBSZXF1ZXN0czwvaDI+XHJcbiAgICA8ZGl2IHYtZm9yPVwicmVxdWVzdCBpbiBmcmllbmRfcmVxdWVzdHNcIiA6a2V5PVwicmVxdWVzdC5pZFwiPlxyXG4gICAgICAgPHA+PHNwYW4+RnJvbSB1c2VyOnt7cmVxdWVzdC5mcm9tX3VzZXJ9fTwvc3Bhbj48L3A+IDxhIDpocmVmPVwiYC9hcGkvYWNjZXB0X2ZyaWVuZF9yZXF1ZXN0LyR7cmVxdWVzdC5pZH1gXCI+QWNjZXB0IGZyaWVuZCByZXF1ZXN0PC9hPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ0ZyaWVuZHMnLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBxdWl6X3RvX2ludml0ZTogbnVsbCxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZXJzOiBbXSxcclxuICAgICAgICAgICAgZnJpZW5kX3JlcXVlc3RzOiBbXSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgZmV0Y2gocHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwiYXBpL3VzZXJzL1wiKVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAudGhlbigoZGF0YSkgPT4gKHRoaXMudXNlcnMgPSBkYXRhKSlcclxuICAgICAgICAgLnRoZW4oKGRhdGEpID0+ICh0aGlzLmZyaWVuZF9yZXF1ZXN0cyA9IGRhdGEuZnJpZW5kX3JlcXVlc3RfdG8pKVxyXG4gICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKTtcclxuXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAgIGludml0ZVRvR2FtZShvcHBvbmVudCkge1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVHYW1lKG9wcG9uZW50KVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtjb25zb2xlLmxvZyhkYXRhKTsgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSk7XHJcbiAgICAgICAgICAvLyBUT0RPOiAxLiBjcmVhdGUgaW52aXRhdGlvbiBpbiBkYiAtIGJhY2tlbmQsIFxyXG4gICAgICAgICAgLy8gVE9ETzogMi4gbG9hZCBpbnZpdGF0aW9uIGFzIG5vdGlmaWNhdGlvbiBpbiBsZWZ0IHBhbmVsIGFuZCBib3R0b21wYW5lbCAtIGZyb250ZW5kLCBcclxuICAgICAgICAgIC8vIFRPRE86IDMuIGlmIGludml0YXRpb24gZXhpc3RzIGRlbGV0ZSBvbGQgYW5kIGNyZWF0ZSBuZXcgLSBiYWNrZW5kICsgKG1pbiB0aW1lIHRvIGludml0ZSBhZ2FpbjogNSBzZWMpLCBidXR0b24gc2lsdmVyLSBmcm9udGVuZFxyXG4gICAgICAgICAgLy8gVE9ETzogNC4gaWYgcmVjaWV2ZXIgYWNjZXB0ZWQgYW5kIHNlbmRlciBzdGF0dXM6IHdhaXRpbmcgb3IgYWNjZXB0ZWQ6IGNyZWF0ZSBnYW1lIGluIGRhdGFiYXNlIGFuZCByb3V0ZSB1c2VycyB0byBnYW1lIChxdWl6U3RhcnRlZCA9IHRydWUpXHJcbiAgICAgICAgICAvLyBUT0RPOiA1LiBpZiBnYW1lIGZpbmlzaGVkIHNhdmUgZ2FtZSBpbiBoaXN0b3J5IHdpdGggcG9pbnRzIGV0Yy5cclxuXHJcblxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBjcmVhdGVHYW1lKG9wcG9uZW50KSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImV0YXAgMTogXCIgKyB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLmlkKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJldGFwIDI6IFwiICsgdGhpcy5xdWl6X3RvX2ludml0ZSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwib3Bwb25lbnQ6XCIgKyBvcHBvbmVudClcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwiYXBpL215cXVpemVzL1wiLCB7XHJcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdNZWRpYS1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBcImdhbWVfY3JlYXRvclwiOiB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgXCJnYW1lX29wcG9uZW50XCI6IG9wcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgXCJzY29yZVwiOiAwLFxyXG4gICAgICAgICAgICAgICAgXCJxdWl6XCI6IHRoaXMucXVpel90b19pbnZpdGUsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uXHJcblxyXG4gICAgICB9XHJcbiAgfSxcclxuXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUxBO0FBQ0E7QUFMQTtBQUlBO0FBSkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJBO0FBaENBO0FBbkJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/accounts/Friends.vue?vue&type=script&lang=js\n");

/***/ })

})