webpackHotUpdate("home",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/Quizes.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/quizes/Quizes.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/store.js */ \"./store/store.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"QuizList\",\n  components: {},\n  data: function data() {\n    return {\n      quizes: [],\n      searchedQuizes: [],\n      searchOption: \"\"\n    };\n  },\n  methods: {\n    generateQuizes: function generateQuizes() {\n      var _this = this;\n\n      this.searchedQuizes = [];\n      this.quizes.forEach(function (quiz) {\n        _store_store_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].state.searchResults.forEach(function (result) {\n          if (_store_store_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].state.searchIn.includes(\"categories\") && String(quiz.category).toLowerCase() === result && !_this.searchedQuizes.includes(quiz)) {\n            _this.searchedQuizes.push(quiz);\n          }\n\n          if (_store_store_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].state.searchIn.includes(\"names\") && String(quiz.title).toLowerCase() === result.toString() && !_this.searchedQuizes.includes(quiz)) {\n            _this.searchedQuizes.push(quiz);\n          }\n        });\n\n        if (_store_store_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].state.searchIn.length === 0 && !_this.searchedQuizes.includes(quiz)) {\n          _this.searchedQuizes.push(quiz);\n        }\n      });\n    }\n  },\n  mounted: function mounted() {\n    var _this2 = this;\n\n    _store_store_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].state.modalConfirm = true;\n    fetch(\"http://localhost:8002/\" + \"api/quizes/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return _this2.quizes = data;\n    }).then(function (data) {\n      return _this2.searchedQuizes = data;\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n  },\n  watch: {\n    '$store.state.searchResults': function $storeStateSearchResults() {\n      this.generateQuizes();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9xdWl6ZXMvUXVpemVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ZpZXdzL3F1aXplcy9RdWl6ZXMudnVlPzQ1MWIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiA+XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LWNvbHMtMSByb3ctY29scy1zbS0yIHJvdy1jb2xzLW1kLTMgcm93LWNvbHMtbGctNCB3LTEwMFwiIGlkPVwicXVpelJvd1wiPlxyXG4gICAgICBcclxuICAgICAgPGRpdiBpZD1cInF1aXotY29udGFpbmVyXCIgY2xhc3M9XCJjb2xcIiAgdi1mb3I9XCJxdWl6IGluIHNlYXJjaGVkUXVpemVzXCIgOmtleT1cInF1aXouaWRcIj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiID5cclxuICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ1F1aXpEZXRhaWxzJywgcGFyYW1zOiB7IHNsdWc6IHF1aXouc2x1ZyB9IH1cIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxpbWcgOnNyYz1cImAke3F1aXouaW1hZ2V9YFwiIGNsYXNzPVwiaW1hZ2UgY2FyZC1pbWctdG9wXCIgYWx0PVwiXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGVcIiA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5QbGF5PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDUgY2xhc3M9XCJjYXJkLXRpdGxlXCI+e3sgcXVpei50aXRsZSB9fTwvaDU+XHJcbiAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtZGVzY3JpcHRpb25cIj57eyBxdWl6LmRlc2NyaXB0aW9uIH19PC9wPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NzPVwiY2FyZC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYmxvY2tcIj48Zm9udC1hd2Vzb21lLWljb24gOmljb249XCJbYGZhc2AsIGBjbG9ja2BdXCIgc2l6ZT1cImxnXCIgLz48YnI+e3sgcXVpei50aW1lIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJibG9ja1wiPjxmb250LWF3ZXNvbWUtaWNvbiA6aWNvbj1cIltgZmFzYCwgYHF1ZXN0aW9uYF1cIiBzaXplPVwibGdcIiAvPjxicj57eyBxdWl6Lm51bWJlcl9vZl9xdWVzdGlvbnMgfX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImJsb2NrXCI+PGZvbnQtYXdlc29tZS1pY29uIDppY29uPVwiW2BmYXNgLCBgcGVyY2VudGBdXCIgc2l6ZT1cImxnXCIgLz48YnI+e3sgcXVpei5yZXF1aXJlZF9zY29yZV90b19wYXNzIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJibG9ja1wiPjxmb250LWF3ZXNvbWUtaWNvbiA6aWNvbj1cIltgZmFzYCwgYGJvb2tgXVwiIHNpemU9XCJsZ1wiIC8+PGJyPnt7IHF1aXouY2F0ZWdvcnkgfX08L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGJyPlxyXG5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICBcclxuICAgIFxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZS5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIlF1aXpMaXN0XCIsXHJcbiAgY29tcG9uZW50czoge1xyXG5cclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBxdWl6ZXM6IFtdLFxyXG4gICAgICBzZWFyY2hlZFF1aXplczogW10sXHJcbiAgICAgIHNlYXJjaE9wdGlvbjogXCJcIlxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGdlbmVyYXRlUXVpemVzKCkge1xyXG4gICAgICB0aGlzLnNlYXJjaGVkUXVpemVzID0gW11cclxuXHJcbiAgICAgIHRoaXMucXVpemVzLmZvckVhY2gocXVpeiA9PiB7XHJcbiAgICAgICAgc3RvcmUuc3RhdGUuc2VhcmNoUmVzdWx0cy5mb3JFYWNoKHJlc3VsdCA9PiB7XHJcblxyXG4gICAgICAgICAgaWYgKHN0b3JlLnN0YXRlLnNlYXJjaEluLmluY2x1ZGVzKFwiY2F0ZWdvcmllc1wiKSAmJiBTdHJpbmcocXVpei5jYXRlZ29yeSkudG9Mb3dlckNhc2UoKSA9PT0gcmVzdWx0ICYmICF0aGlzLnNlYXJjaGVkUXVpemVzLmluY2x1ZGVzKHF1aXopKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hlZFF1aXplcy5wdXNoKHF1aXopXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoc3RvcmUuc3RhdGUuc2VhcmNoSW4uaW5jbHVkZXMoXCJuYW1lc1wiKSAmJiBTdHJpbmcocXVpei50aXRsZSkudG9Mb3dlckNhc2UoKSA9PT0gcmVzdWx0LnRvU3RyaW5nKCkgJiYgIXRoaXMuc2VhcmNoZWRRdWl6ZXMuaW5jbHVkZXMocXVpeikpIHtcclxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaGVkUXVpemVzLnB1c2gocXVpeikgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoc3RvcmUuc3RhdGUuc2VhcmNoSW4ubGVuZ3RoID09PSAwICYmICF0aGlzLnNlYXJjaGVkUXVpemVzLmluY2x1ZGVzKHF1aXopKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoZWRRdWl6ZXMucHVzaChxdWl6KSBcclxuICAgICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgc3RvcmUuc3RhdGUubW9kYWxDb25maXJtID0gdHJ1ZTtcclxuICAgIGZldGNoKHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBcImFwaS9xdWl6ZXMvXCIpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiAodGhpcy5xdWl6ZXMgPSBkYXRhKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+ICh0aGlzLnNlYXJjaGVkUXVpemVzID0gZGF0YSkpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkpO1xyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgICckc3RvcmUuc3RhdGUuc2VhcmNoUmVzdWx0cyc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmdlbmVyYXRlUXVpemVzKClcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLm1pZGRsZSB7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5taWRkbGU6aG92ZXIge1xyXG4gIGN1cnNvcjogLW1vei1ncmFiO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciAuaW1hZ2Uge1xyXG4gIG9wYWNpdHk6IDAuMztcclxuICBjdXJzb3I6IC1tb3otZ3JhYjtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIgLm1pZGRsZSB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiAxNnB4IDMycHg7XHJcbn1cclxuXHJcblxyXG4uY2FyZC1mb290ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiA1cHggMDtcclxuXHJcbn1cclxuLmJsb2NrIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWlubGluZTogNHB4O1xyXG4gIHBhZGRpbmctaW5saW5lOiAzJTtcclxuICBcclxufVxyXG5cclxuYTpsaW5rIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxuPC9zdHlsZT5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQTRDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBb0JBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBeENBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/Quizes.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/core-js/internals/clear-error-stack.js":
false,

/***/ "./node_modules/core-js/internals/error-stack-installable.js":
false,

/***/ "./node_modules/core-js/internals/inherit-if-required.js":
false,

/***/ "./node_modules/core-js/internals/install-error-cause.js":
false,

/***/ "./node_modules/core-js/internals/normalize-string-argument.js":
false,

/***/ "./node_modules/core-js/internals/proxy-accessor.js":
false,

/***/ "./node_modules/core-js/internals/wrap-error-constructor-with-cause.js":
false,

/***/ "./node_modules/core-js/modules/es.array.slice.js":
false,

/***/ "./node_modules/core-js/modules/es.error.cause.js":
false,

/***/ "./node_modules/core-js/modules/es.json.to-string-tag.js":
false,

/***/ "./node_modules/core-js/modules/es.math.to-string-tag.js":
false,

/***/ "./node_modules/core-js/modules/es.object.get-prototype-of.js":
false,

/***/ "./node_modules/core-js/modules/es.symbol.async-iterator.js":
false,

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
false,

/***/ "./node_modules/core-js/modules/es.symbol.to-string-tag.js":
false

})