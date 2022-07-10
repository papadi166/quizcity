webpackHotUpdate("home",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/Quizes.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/quizes/Quizes.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/store.js */ \"./store/store.js\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"QuizList\",\n  data: function data() {\n    return {\n      quizes: this.$store.getters.getQuizes,\n      searchOption: \"\",\n      searchedQuizes: this.$store.getters.getQuizes\n    };\n  },\n  methods: {\n    generateQuizes: function generateQuizes() {\n      var _this = this;\n\n      this.searchedQuizes = [];\n      this.quizes.forEach(function (quiz) {\n        _store_store_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].state.searchResults.forEach(function (result) {\n          if (_store_store_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].state.searchIn.includes(\"categories\") && String(quiz.category).toLowerCase() === result && !_this.searchedQuizes.includes(quiz)) {\n            _this.searchedQuizes.push(quiz);\n          }\n\n          if (_store_store_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].state.searchIn.includes(\"names\") && String(quiz.title).toLowerCase() === result.toString() && !_this.searchedQuizes.includes(quiz)) {\n            _this.searchedQuizes.push(quiz);\n          }\n        });\n\n        if (_store_store_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].state.searchIn.length === 0 && !_this.searchedQuizes.includes(quiz)) {\n          _this.searchedQuizes.push(quiz);\n        }\n      });\n    }\n  },\n  mounted: function mounted() {\n    var _this2 = this;\n\n    _store_store_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].state.modalConfirm = true;\n    fetch(\"http://localhost:8002/\" + \"api/quizes/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return _this2.quizes = data;\n    }).then(function (data) {\n      return _this2.searchedQuizes = data;\n    }).then(function (data) {\n      _this2.$store.commit(\"setListQuizes\", data);\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n  },\n  watch: {\n    '$store.state.searchResults': function $storeStateSearchResults() {\n      this.generateQuizes();\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9xdWl6ZXMvUXVpemVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ZpZXdzL3F1aXplcy9RdWl6ZXMudnVlPzQ1MWIiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiA+XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3cgcm93LWNvbHMtMSByb3ctY29scy1zbS0yIHJvdy1jb2xzLW1kLTMgcm93LWNvbHMtbGctNCB3LTEwMFwiIGlkPVwicXVpelJvd1wiPlxyXG4gICAgICBcclxuICAgICAgPGRpdiBpZD1cInF1aXotY29udGFpbmVyXCIgY2xhc3M9XCJjb2xcIiAgdi1mb3I9XCJxdWl6IGluICRzdG9yZS5nZXR0ZXJzLmdldFF1aXplc1wiIDprZXk9XCJxdWl6LmlkXCI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiA+XHJcbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdRdWl6RGV0YWlscycsIHBhcmFtczogeyBzbHVnOiBxdWl6LnNsdWcgfSB9XCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8aW1nIDpzcmM9XCJgJHtxdWl6LmltYWdlfWBcIiBjbGFzcz1cImltYWdlIGNhcmQtaW1nLXRvcFwiIGFsdD1cIlwiIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWlkZGxlXCIgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+UGxheTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPnt7IHF1aXoudGl0bGUgfX08L2g1PlxyXG4gICAgICAgICAgICA8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWRlc2NyaXB0aW9uXCI+e3sgcXVpei5kZXNjcmlwdGlvbiB9fTwvcD5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzcz1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImJsb2NrXCI+PGZvbnQtYXdlc29tZS1pY29uIDppY29uPVwiW2BmYXNgLCBgY2xvY2tgXVwiIHNpemU9XCJsZ1wiIC8+PGJyPnt7IHF1aXoudGltZSB9fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYmxvY2tcIj48Zm9udC1hd2Vzb21lLWljb24gOmljb249XCJbYGZhc2AsIGBxdWVzdGlvbmBdXCIgc2l6ZT1cImxnXCIgLz48YnI+e3sgcXVpei5udW1iZXJfb2ZfcXVlc3Rpb25zIH19PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJibG9ja1wiPjxmb250LWF3ZXNvbWUtaWNvbiA6aWNvbj1cIltgZmFzYCwgYHBlcmNlbnRgXVwiIHNpemU9XCJsZ1wiIC8+PGJyPnt7IHF1aXoucmVxdWlyZWRfc2NvcmVfdG9fcGFzcyB9fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYmxvY2tcIj48Zm9udC1hd2Vzb21lLWljb24gOmljb249XCJbYGZhc2AsIGBib29rYF1cIiBzaXplPVwibGdcIiAvPjxicj57eyBxdWl6LmNhdGVnb3J5IH19PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxicj5cclxuXHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUuanMnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiUXVpekxpc3RcIixcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcXVpemVzOiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFF1aXplcyxcclxuICAgICAgc2VhcmNoT3B0aW9uOiBcIlwiLFxyXG4gICAgICBzZWFyY2hlZFF1aXplczogdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRRdWl6ZXMsXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgXHJcbiAgbWV0aG9kczoge1xyXG4gICAgXHJcblxyXG4gICAgZ2VuZXJhdGVRdWl6ZXMoKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoZWRRdWl6ZXMgPSBbXVxyXG5cclxuICAgICAgdGhpcy5xdWl6ZXMuZm9yRWFjaChxdWl6ID0+IHtcclxuICAgICAgICBzdG9yZS5zdGF0ZS5zZWFyY2hSZXN1bHRzLmZvckVhY2gocmVzdWx0ID0+IHtcclxuXHJcbiAgICAgICAgICBpZiAoc3RvcmUuc3RhdGUuc2VhcmNoSW4uaW5jbHVkZXMoXCJjYXRlZ29yaWVzXCIpICYmIFN0cmluZyhxdWl6LmNhdGVnb3J5KS50b0xvd2VyQ2FzZSgpID09PSByZXN1bHQgJiYgIXRoaXMuc2VhcmNoZWRRdWl6ZXMuaW5jbHVkZXMocXVpeikpIHtcclxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaGVkUXVpemVzLnB1c2gocXVpeilcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChzdG9yZS5zdGF0ZS5zZWFyY2hJbi5pbmNsdWRlcyhcIm5hbWVzXCIpICYmIFN0cmluZyhxdWl6LnRpdGxlKS50b0xvd2VyQ2FzZSgpID09PSByZXN1bHQudG9TdHJpbmcoKSAmJiAhdGhpcy5zZWFyY2hlZFF1aXplcy5pbmNsdWRlcyhxdWl6KSkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoZWRRdWl6ZXMucHVzaChxdWl6KSBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChzdG9yZS5zdGF0ZS5zZWFyY2hJbi5sZW5ndGggPT09IDAgJiYgIXRoaXMuc2VhcmNoZWRRdWl6ZXMuaW5jbHVkZXMocXVpeikpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hlZFF1aXplcy5wdXNoKHF1aXopIFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICB9LFxyXG4gXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHN0b3JlLnN0YXRlLm1vZGFsQ29uZmlybSA9IHRydWVcclxuICAgIGZldGNoKHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBcImFwaS9xdWl6ZXMvXCIpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiAodGhpcy5xdWl6ZXMgPSBkYXRhKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+ICh0aGlzLnNlYXJjaGVkUXVpemVzID0gZGF0YSkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7dGhpcy4kc3RvcmUuY29tbWl0KFwic2V0TGlzdFF1aXplc1wiLCBkYXRhICl9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKTtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIHdhdGNoOiB7XHJcbiAgICAnJHN0b3JlLnN0YXRlLnNlYXJjaFJlc3VsdHMnOiBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5nZW5lcmF0ZVF1aXplcygpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWFnZSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5taWRkbGUge1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDMwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4ubWlkZGxlOmhvdmVyIHtcclxuICBjdXJzb3I6IC1tb3otZ3JhYjtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIgLmltYWdlIHtcclxuICBvcGFjaXR5OiAwLjM7XHJcbiAgY3Vyc29yOiAtbW96LWdyYWI7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIC5taWRkbGUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogMTZweCAzMnB4O1xyXG59XHJcblxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcblxyXG59XHJcbi5ibG9jayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1pbmxpbmU6IDRweDtcclxuICBwYWRkaW5nLWlubGluZTogMyU7XHJcbiAgXHJcbn1cclxuXHJcbmE6bGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuXHJcbjwvc3R5bGU+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkE7QUF1QkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBNUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/Quizes.vue?vue&type=script&lang=js\n");

/***/ })

})