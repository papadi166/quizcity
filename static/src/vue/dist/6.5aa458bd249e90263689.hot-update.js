webpackHotUpdate(6,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/Notifications.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/Notifications.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Notifications\",\n  data: function data() {\n    return {\n      notifications: null\n    };\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    var d = Date.now();\n    var a = new Date(d).getTime();\n    console.log(sa);\n    fetch(\"http://10.10.10.23:8002/\" + \"api/mygames/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return _this.notifications = data;\n    }).then(function (data) {\n      console.log(\"now: \" + a), console.log(a - sa);\n\n      for (obj in data) {\n        var created = obj.created_at;\n        created = new Date(created).getTime;\n        console.log(created);\n      }\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9Ob3RpZmljYXRpb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ZpZXdzL05vdGlmaWNhdGlvbnMudnVlP2NhNTYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8aDE+dGhpcyBpcyBub3RpZmljYXRpb25zIHBhZ2U8L2gxPlxyXG4gICAgPGRpdlxyXG4gICAgICB2LWZvcj1cIm5vdGlmaWNhdGlvbiBpbiBub3RpZmljYXRpb25zXCJcclxuICAgICAgOmtleT1cIm5vdGlmaWNhdGlvbi5pZFwiXHJcbiAgICAgIGNsYXNzPVwiZGl2XCJcclxuICAgID5cclxuICAgICAgPGRpdiA+XHJcbiAgICAgICAgPGg0PlF1aXogTmFtZToge3tub3RpZmljYXRpb24ucXVpen19PC9oND5cclxuICAgICAgICA8aDQ+c2VuZGVyOiB7e25vdGlmaWNhdGlvbi5xdWl6fX08L2g0PlxyXG4gICAgICAgIDxidXR0b24+cGxheTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGhyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJOb3RpZmljYXRpb25zXCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5vdGlmaWNhdGlvbnM6IG51bGwsXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBsZXQgZCA9IERhdGUubm93KClcclxuICAgIGxldCBhID0gbmV3IERhdGUoZCkuZ2V0VGltZSgpXHJcbiAgICBjb25zb2xlLmxvZyhzYSlcclxuICAgIGZldGNoKHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBgYXBpL215Z2FtZXMvYClcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+ICh0aGlzLm5vdGlmaWNhdGlvbnMgPSBkYXRhKSlcclxuICAgICAgLnRoZW4oZGF0YSA9PiB7IGNvbnNvbGUubG9nKFwibm93OiBcIiArIGEpLFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGEgLSBzYSk7XHJcbiAgICAgICAgZm9yIChvYmogaW4gZGF0YSkge1xyXG4gICAgICAgICAgbGV0IGNyZWF0ZWQgPSBvYmouY3JlYXRlZF9hdDtcclxuICAgICAgICAgIGNyZWF0ZWQgPSBuZXcgRGF0ZShjcmVhdGVkKS5nZXRUaW1lXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVkKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSk7XHJcbiAgfSwgIFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT48L3N0eWxlPlxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXhCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/Notifications.vue?vue&type=script&lang=js\n");

/***/ })

})