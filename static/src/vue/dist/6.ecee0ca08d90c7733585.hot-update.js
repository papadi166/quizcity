webpackHotUpdate(6,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/Notifications.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/Notifications.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ \"./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Notifications\",\n  data: function data() {\n    return {\n      notifications: []\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    var now = Date.now();\n    now = new Date(d).getTime();\n    fetch(\"http://10.10.10.23:8002/\" + \"api/mygames/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      var _iterator = Object(C_Users_papad_OneDrive_Dokumenty_MEGA_MEGAsync_AppDev_10_02_22_quizCityDeployed_blog_frontend_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var ob = _step.value;\n          var created = ob.created_at;\n          created = new Date(created).getTime(); // if game is older than 15 minutes -> ignore\n\n          if (now - created < 900000 && ob.is_over === false) _this.notifications.push(ob);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9Ob3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ZpZXdzL05vdGlmaWNhdGlvbnMudnVlP2NhNTYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8aDE+dGhpcyBpcyBub3RpZmljYXRpb25zIHBhZ2U8L2gxPlxyXG4gICAgPGRpdlxyXG4gICAgICB2LWZvcj1cIm5vdGlmaWNhdGlvbiBpbiBub3RpZmljYXRpb25zXCJcclxuICAgICAgOmtleT1cIm5vdGlmaWNhdGlvbi5pZFwiXHJcbiAgICAgIGNsYXNzPVwiZGl2XCJcclxuICAgID5cclxuICAgICAgPGRpdiA+XHJcbiAgICAgICAgPGg0PlF1aXogTmFtZToge3tub3RpZmljYXRpb24ucXVpen19PC9oND5cclxuICAgICAgICA8aDQ+c2VuZGVyOiB7e25vdGlmaWNhdGlvbi5xdWl6fX08L2g0PlxyXG4gICAgICAgIHt7bm90aWZpY2F0aW9uLmNyZWF0ZWRfYXR9fVxyXG4gICAgICAgIDxidXR0b24+cGxheTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGhyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJOb3RpZmljYXRpb25zXCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vdGlmaWNhdGlvbnM6IFtdLFxyXG4gICAgfTtcclxuICB9LFxyXG5cclxuICBtb3VudGVkKCkge1xyXG4gICAgbGV0IG5vdyA9IERhdGUubm93KClcclxuICAgIG5vdz0gbmV3IERhdGUoZCkuZ2V0VGltZSgpXHJcbiAgICBmZXRjaChwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgYGFwaS9teWdhbWVzL2ApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IG9iIG9mIGRhdGEpIHtcclxuICAgICAgICAgIGxldCBjcmVhdGVkID0gb2IuY3JlYXRlZF9hdDtcclxuICAgICAgICAgIGNyZWF0ZWQgPSBuZXcgRGF0ZShjcmVhdGVkKS5nZXRUaW1lKClcclxuICAgICAgICAgIC8vIGlmIGdhbWUgaXMgb2xkZXIgdGhhbiAxNSBtaW51dGVzIC0+IGlnbm9yZVxyXG4gICAgICAgICAgaWYgKG5vdyAtIGNyZWF0ZWQgPCA5MDAwMDAgJiYgb2IuaXNfb3ZlciA9PT0gZmFsc2UpIHRoaXMubm90aWZpY2F0aW9ucy5wdXNoKG9iKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSk7XHJcbiAgfSwgIFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT48L3N0eWxlPlxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBdEJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/Notifications.vue?vue&type=script&lang=js\n");

/***/ })

})