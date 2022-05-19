webpackHotUpdate(3,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/accounts/Friends.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/accounts/Friends.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ \"./node_modules/core-js/modules/es.json.stringify.js\");\n/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ \"./node_modules/core-js/modules/es.error.cause.js\");\n/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_assets_getCookie_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/assets/getCookie.js */ \"./src/assets/getCookie.js\");\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Friends',\n  props: {\n    quiz_to_invite_name: null,\n    quiz_to_invite_id: null,\n    quiz_to_invite_slug: null\n  },\n  data: function data() {\n    return {\n      users: [],\n      friend_requests: [],\n      timer: null,\n      gamecode: null\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    fetch(\"http://localhost:8002/\" + \"api/users/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return _this.users = data;\n    }).then(function (data) {\n      return _this.friend_requests = data.friend_request_to;\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n  },\n  methods: {\n    getCookie: _src_assets_getCookie_js__WEBPACK_IMPORTED_MODULE_6__[\"getCookie\"],\n    inviteToGame: function inviteToGame(opponent) {\n      if (this.timer != null) console.log(\"you can't do this now\");else {\n        this.createGame(opponent); //this.timer = setTimeout(() => {(console.log(`invitation sent to ${opponent.username}`, this.timer = null ))}, 5000)\n\n        console.log(\"invitation sent to \".concat(opponent.username, \", redirecting to game..\"));\n        console.log(this.quiz_to_invite_slug);\n        this.$router.push('/quizes/' + this.quiz_to_invite_slug + '/' + this.gamecode);\n      } // TODO: 1. create invitation in db - backend, \n      // TODO: 2. load invitation as notification in left panel and bottompanel - frontend, \n      // TODO: 3. if invitation exists delete old and create new - backend + (min time to invite again: 5 sec), button silver- frontend\n      // TODO: 4. if reciever accepted and sender status: waiting or accepted: create game in database and route users to game (quizStarted = true)\n      // TODO: 5. if game finished save game in history with points etc.\n    },\n    createGame: function createGame(opponent) {\n      var _this2 = this;\n\n      return Object(C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch(\"http://localhost:8002/\" + \"api/quiztaker/\", {\n                  method: 'POST',\n                  headers: {\n                    'Accept': 'application/json',\n                    'Content-Type': 'application/json',\n                    'Media-Type': 'application/json',\n                    'X-CSRFToken': _this2.getCookie('csrftoken')\n                  },\n                  body: JSON.stringify({\n                    \"game_opponent\": {\n                      \"username\": opponent.username\n                    },\n                    \"score\": 0,\n                    \"quiz\": _this2.quiz_to_invite_id\n                  })\n                }).then(function (res) {\n                  if (!res.ok) return res.text().then(function (text) {\n                    throw new Error(text);\n                  });else return res.json();\n                }).catch(function (err) {\n                  console.log(err);\n                });\n\n              case 2:\n                _context.next = 4;\n                return fetch(\"http://localhost:8002/\" + \"api/quiztaker/\").then(function (response) {\n                  return response.json();\n                }).then(function (data) {\n                  console.log(data.values);\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9hY2NvdW50cy9GcmllbmRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ZpZXdzL2FjY291bnRzL0ZyaWVuZHMudnVlPzY3Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICAgIDxzdHJvbmcgdi1pZj1cInF1aXpfdG9faW52aXRlX25hbWUgIT0gbnVsbFwiPlF1aXogdG8gaW52aXRlOiB7e3F1aXpfdG9faW52aXRlX25hbWV9fTwvc3Ryb25nPlxyXG4gICAgICA8aDE+WW91ciBGcmllbmRzPC9oMT5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiB2LWZvcj1cImZyaWVuZCBpbiAkc3RvcmUuc3RhdGUudXNlci5mcmllbmRzXCIgOmtleT1cImZyaWVuZFwiPlxyXG4gICAgICAgICAgICAgIHt7ZnJpZW5kLnVzZXJuYW1lfX0gPGJ1dHRvbiB2LWlmPVwicXVpel90b19pbnZpdGVfbmFtZSAhPSBudWxsXCIgQGNsaWNrPVwiaW52aXRlVG9HYW1lKGZyaWVuZClcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5JbnZpdGUgdG8gZ2FtZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGJyPlxyXG4gICAgPGE+QWxsIHVzZXJzPC9hPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwiYm9yZGVyOiAxcHggc29saWQ7XCI+XHJcbiAgICAgICAgICA8ZGl2IHYtZm9yPVwidXNlciBpbiB0aGlzLnVzZXJzXCIgOmtleT1cInVzZXIuaWRcIj5cclxuICAgICAgICAgICAgICB7e3VzZXIudXNlcm5hbWV9fSA8YSA6aHJlZj1cImAvYXBpL3NlbmRfZnJpZW5kX3JlcXVlc3QvJHt1c2VyLmlkfWBcIj5JbnZpdGUgdG8gZnJpZW5kczwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGgyPkZyaWVuZCBSZXF1ZXN0czwvaDI+XHJcbiAgICA8ZGl2IHYtZm9yPVwicmVxdWVzdCBpbiBmcmllbmRfcmVxdWVzdHNcIiA6a2V5PVwicmVxdWVzdC5pZFwiPlxyXG4gICAgICAgPHA+PHNwYW4+RnJvbSB1c2VyOnt7cmVxdWVzdC5mcm9tX3VzZXJ9fTwvc3Bhbj48L3A+IDxhIDpocmVmPVwiYC9hcGkvYWNjZXB0X2ZyaWVuZF9yZXF1ZXN0LyR7cmVxdWVzdC5pZH1gXCI+QWNjZXB0IGZyaWVuZCByZXF1ZXN0PC9hPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHtnZXRDb29raWV9IGZyb20gJy4uLy4uL3NyYy9hc3NldHMvZ2V0Q29va2llLmpzJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ0ZyaWVuZHMnLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBxdWl6X3RvX2ludml0ZV9uYW1lOiBudWxsLFxyXG4gICAgICAgIHF1aXpfdG9faW52aXRlX2lkOiBudWxsLFxyXG4gICAgICAgIHF1aXpfdG9faW52aXRlX3NsdWc6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB1c2VyczogW10sXHJcbiAgICAgICAgICAgIGZyaWVuZF9yZXF1ZXN0czogW10sXHJcbiAgICAgICAgICAgIHRpbWVyOiBudWxsLFxyXG4gICAgICAgICAgICBnYW1lY29kZTogbnVsbCxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgZmV0Y2gocHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwiYXBpL3VzZXJzL1wiKVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAudGhlbigoZGF0YSkgPT4gKHRoaXMudXNlcnMgPSBkYXRhKSlcclxuICAgICAgICAgLnRoZW4oKGRhdGEpID0+ICh0aGlzLmZyaWVuZF9yZXF1ZXN0cyA9IGRhdGEuZnJpZW5kX3JlcXVlc3RfdG8pKVxyXG4gICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKTtcclxuXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAgIGdldENvb2tpZSxcclxuICAgICAgaW52aXRlVG9HYW1lKG9wcG9uZW50KSB7XHJcbiAgICAgICAgICBpZiAodGhpcy50aW1lciAhPSBudWxsKSBjb25zb2xlLmxvZyAoXCJ5b3UgY2FuJ3QgZG8gdGhpcyBub3dcIilcclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUdhbWUob3Bwb25lbnQpXHJcbiAgICAgICAgICAgIC8vdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4geyhjb25zb2xlLmxvZyhgaW52aXRhdGlvbiBzZW50IHRvICR7b3Bwb25lbnQudXNlcm5hbWV9YCwgdGhpcy50aW1lciA9IG51bGwgKSl9LCA1MDAwKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgaW52aXRhdGlvbiBzZW50IHRvICR7b3Bwb25lbnQudXNlcm5hbWV9LCByZWRpcmVjdGluZyB0byBnYW1lLi5gKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnF1aXpfdG9faW52aXRlX3NsdWcpXHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvcXVpemVzLycgKyB0aGlzLnF1aXpfdG9faW52aXRlX3NsdWcgKyAnLycgKyB0aGlzLmdhbWVjb2RlKVxyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFRPRE86IDEuIGNyZWF0ZSBpbnZpdGF0aW9uIGluIGRiIC0gYmFja2VuZCwgXHJcbiAgICAgICAgICAvLyBUT0RPOiAyLiBsb2FkIGludml0YXRpb24gYXMgbm90aWZpY2F0aW9uIGluIGxlZnQgcGFuZWwgYW5kIGJvdHRvbXBhbmVsIC0gZnJvbnRlbmQsIFxyXG4gICAgICAgICAgLy8gVE9ETzogMy4gaWYgaW52aXRhdGlvbiBleGlzdHMgZGVsZXRlIG9sZCBhbmQgY3JlYXRlIG5ldyAtIGJhY2tlbmQgKyAobWluIHRpbWUgdG8gaW52aXRlIGFnYWluOiA1IHNlYyksIGJ1dHRvbiBzaWx2ZXItIGZyb250ZW5kXHJcbiAgICAgICAgICAvLyBUT0RPOiA0LiBpZiByZWNpZXZlciBhY2NlcHRlZCBhbmQgc2VuZGVyIHN0YXR1czogd2FpdGluZyBvciBhY2NlcHRlZDogY3JlYXRlIGdhbWUgaW4gZGF0YWJhc2UgYW5kIHJvdXRlIHVzZXJzIHRvIGdhbWUgKHF1aXpTdGFydGVkID0gdHJ1ZSlcclxuICAgICAgICAgIC8vIFRPRE86IDUuIGlmIGdhbWUgZmluaXNoZWQgc2F2ZSBnYW1lIGluIGhpc3Rvcnkgd2l0aCBwb2ludHMgZXRjLlxyXG5cclxuXHJcbiAgICAgIH0sXHJcbiAgICBhc3luYyBjcmVhdGVHYW1lKG9wcG9uZW50KSB7XHJcbiAgICAgICAgICBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgXCJhcGkvcXVpenRha2VyL1wiLCB7XHJcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnTWVkaWEtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnWC1DU1JGVG9rZW4nOiB0aGlzLmdldENvb2tpZSgnY3NyZnRva2VuJylcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIFwiZ2FtZV9vcHBvbmVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiBvcHBvbmVudC51c2VybmFtZVxyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcInNjb3JlXCI6IDAsXHJcbiAgICAgICAgICAgICAgICBcInF1aXpcIjogdGhpcy5xdWl6X3RvX2ludml0ZV9pZFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghcmVzLm9rKSByZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQgPT4ge3Rocm93IG5ldyBFcnJvcih0ZXh0KX0pXHJcbiAgICAgICAgICAgICAgZWxzZSByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlcnIgPT4ge2NvbnNvbGUubG9nKGVycil9KVxyXG4gICAgICAgXHJcbiAgICAgICAgICAvL3JldHVybiByZXNwb25zZS5qc29uXHJcblxyXG4gICAgICAgICAgYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwiYXBpL3F1aXp0YWtlci9cIilcclxuICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7Y29uc29sZS5sb2coZGF0YS52YWx1ZXMpfSk7XHJcblxyXG4gICAgICB9XHJcbiAgfSxcclxuXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQU5BO0FBUkE7QUFrQkE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUF2QkE7QUFBQTtBQUFBO0FBMkJBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUE3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE4QkE7QUFsREE7QUF2QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/accounts/Friends.vue?vue&type=script&lang=js\n");

/***/ })

})