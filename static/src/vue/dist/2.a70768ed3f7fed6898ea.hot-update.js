webpackHotUpdate(2,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/Notifications.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/Notifications.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Notifications\",\n  data: function data() {\n    return {\n      notifications: [],\n      dataLoading: false\n    };\n  },\n  methods: {\n    loadOppponent: function loadOppponent(slug) {\n      // Create Django Channels or socket.io or websockets room\n      // sent opponent data from app to socket room\n      // load data here and unpack it\n      // save data to players[1]\n      this.$router.push(\"/quizes/\" + \"historia-ziemi\" + \"/\" + slug);\n    }\n  },\n  created: function created() {\n    var _this = this;\n\n    return Object(C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var now;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dataLoading = true;\n              _context.prev = 1;\n              now = Date.now();\n              now = new Date(now).getTime();\n              _context.next = 6;\n              return fetch(\"http://localhost:8002/\" + \"api/mygames/\").then(function (res) {\n                return res.json();\n              }).then(function (data) {\n                var _iterator = Object(C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data),\n                    _step;\n\n                try {\n                  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n                    var ob = _step.value;\n                    var created = ob.created_at;\n                    created = new Date(created).getTime(); // if game is older than 15 minutes -> ignore\n\n                    // if game is older than 15 minutes -> ignore\n                    if (now - created < 900000 && ob.is_over === false) _this.notifications.push(ob);\n                  }\n                } catch (err) {\n                  _iterator.e(err);\n                } finally {\n                  _iterator.f();\n                }\n              }).catch(function (err) {\n                return console.log(err.message);\n              });\n\n            case 6:\n              _context.next = 12;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](1);\n              console.log(_context.t0);\n              _this.dataLoading = false;\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 8]]);\n    }))();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9Ob3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ZpZXdzL05vdGlmaWNhdGlvbnMudnVlP2NhNTYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8aDE+R2FtZSBJbnZpdGF0aW9uczwvaDE+XHJcbiAgICA8ZGl2IHYtaWY9XCIhbm90aWZpY2F0aW9uc1swXVwiPlxyXG4gICAgPHA+Tm8gZ2FtZSBpbnZpdGF0aW9uczwvcD5cclxuICAgIDxyb3V0ZXItbGluayAgOnRvPVwie25hbWU6ICdIb21lJ31cIj4gQ2hvb3NlIGEgZ2FtZTwvcm91dGVyLWxpbms+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXZcclxuICAgICAgdi1mb3I9XCJub3RpZmljYXRpb24gaW4gbm90aWZpY2F0aW9uc1wiXHJcbiAgICAgIDprZXk9XCJub3RpZmljYXRpb24uaWRcIlxyXG4gICAgICBjbGFzcz1cImRpdlwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgPlxyXG4gICAgICAgIDxoND5RdWl6IE5hbWU6IHt7bm90aWZpY2F0aW9uLnF1aXpbJ3RpdGxlJ119fTwvaDQ+XHJcbiAgICAgICAgPHNwYW4+c2VuZGVyOiB7e25vdGlmaWNhdGlvbi5nYW1lX2NyZWF0b3IudXNlcm5hbWV9fTwvc3Bhbj4gPGJyPlxyXG4gICAgICAgIDxzcGFuPmNvbm5lY3RlZCB1c2Vyczoge3tub3RpZmljYXRpb24uY29ubmVjdGVkX3VzZXJzfX08L3NwYW4+IDxicj5cclxuICAgICAgICB7e25vdGlmaWNhdGlvbi5jcmVhdGVkX2F0ID0gbmV3IERhdGUobm90aWZpY2F0aW9uLmNyZWF0ZWRfYXQpLmdldFRpbWUoKX19XHJcbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJsb2FkT3BwcG9uZW50KG5vdGlmaWNhdGlvbi5yb29tX2NvZGUpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5wbGF5PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aHI+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIk5vdGlmaWNhdGlvbnNcIixcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90aWZpY2F0aW9uczogW10sXHJcbiAgICAgIGRhdGFMb2FkaW5nOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBsb2FkT3BwcG9uZW50KHNsdWcpIHtcclxuICAgICAgLy8gQ3JlYXRlIERqYW5nbyBDaGFubmVscyBvciBzb2NrZXQuaW8gb3Igd2Vic29ja2V0cyByb29tXHJcbiAgICAgIC8vIHNlbnQgb3Bwb25lbnQgZGF0YSBmcm9tIGFwcCB0byBzb2NrZXQgcm9vbVxyXG4gICAgICAvLyBsb2FkIGRhdGEgaGVyZSBhbmQgdW5wYWNrIGl0XHJcbiAgICAgIC8vIHNhdmUgZGF0YSB0byBwbGF5ZXJzWzFdXHJcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFwiL3F1aXplcy9cIiArIFwiaGlzdG9yaWEtemllbWlcIiArIFwiL1wiICsgc2x1ZylcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgYXN5bmMgY3JlYXRlZCgpIHtcclxuICAgIGRhdGFMb2FkaW5nID0gdHJ1ZVxyXG4gICAgdHJ5IHtcclxuICAgIGxldCBub3cgPSBEYXRlLm5vdygpXHJcbiAgICBub3c9IG5ldyBEYXRlKG5vdykuZ2V0VGltZSgpXHJcbiAgICBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgYGFwaS9teWdhbWVzL2ApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IG9iIG9mIGRhdGEpIHtcclxuICAgICAgICAgIGxldCBjcmVhdGVkID0gb2IuY3JlYXRlZF9hdDtcclxuICAgICAgICAgIGNyZWF0ZWQgPSBuZXcgRGF0ZShjcmVhdGVkKS5nZXRUaW1lKClcclxuICAgICAgICAgIC8vIGlmIGdhbWUgaXMgb2xkZXIgdGhhbiAxNSBtaW51dGVzIC0+IGlnbm9yZVxyXG4gICAgICAgICAgaWYgKG5vdyAtIGNyZWF0ZWQgPCA5MDAwMDAgJiYgb2IuaXNfb3ZlciA9PT0gZmFsc2UpIHRoaXMubm90aWZpY2F0aW9ucy5wdXNoKG9iKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICB0aGlzLmRhdGFMb2FkaW5nID0gZmFsc2VcclxuICAgIH0gXHJcbiAgfSwgXHJcbiAgXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPjwvc3R5bGU+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSkE7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFpQkE7QUFDQTtBQUNBO0FBbkJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0JBO0FBdENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/Notifications.vue?vue&type=script&lang=js\n");

/***/ })

})