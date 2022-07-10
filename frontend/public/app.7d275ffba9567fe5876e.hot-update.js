webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/App.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ \"./node_modules/core-js/modules/es.object.keys.js\");\n/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Navbar.vue */ \"./src/components/Navbar.vue\");\n/* harmony import */ var _components_SideBar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SideBar.vue */ \"./src/components/SideBar.vue\");\n\n\n\n\n\nvar themeMap = {\n  dark: \"light\",\n  light: \"solar\",\n  solar: \"dark\"\n};\nvar theme = localStorage.getItem('theme') || (tmp = Object.keys(themeMap)[0], localStorage.setItem('theme', tmp), tmp);\nvar bodyClass = document.body.classList;\nbodyClass.add(theme);\n\nfunction toggleTheme() {\n  var current = localStorage.getItem('theme');\n  var next = themeMap[current];\n  bodyClass.replace(current, next);\n  localStorage.setItem('theme', next);\n}\n\ndocument.getElementById('themeButton').onclick = toggleTheme;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  components: {\n    Navbar: _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    SideBar: _components_SideBar_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  mounted: function mounted() {\n    console.log(\"http://10.10.10.23:8002/\" + \"api/quizes/\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9BcHAudnVlPzNkZmQiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYXBwXCI+XG5cdFx0PE5hdmJhciB2LWlmPVwiJHJvdXRlLm1ldGEubmF2YmFyT25cIj48L05hdmJhcj5cblx0XHQ8U2lkZUJhcj48L1NpZGVCYXI+XG5cdFx0XG5cdDxtYWluIGNsYXNzPVwibWFpblwiPlxuXHRcdDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxuXHQ8L21haW4+XG5cbiAgICAgXG4gICAgXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhci52dWUnXG5pbXBvcnQgU2lkZUJhciBmcm9tICcuL2NvbXBvbmVudHMvU2lkZUJhci52dWUnXG5cblxuY29uc3QgdGhlbWVNYXAgPSB7XG4gIGRhcms6IFwibGlnaHRcIixcbiAgbGlnaHQ6IFwic29sYXJcIixcbiAgc29sYXI6IFwiZGFya1wiXG59O1xuXG5jb25zdCB0aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpXG4gIHx8ICh0bXAgPSBPYmplY3Qua2V5cyh0aGVtZU1hcClbMF0sXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCB0bXApLFxuICAgICAgdG1wKTtcbmNvbnN0IGJvZHlDbGFzcyA9IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0O1xuYm9keUNsYXNzLmFkZCh0aGVtZSk7XG5cbmZ1bmN0aW9uIHRvZ2dsZVRoZW1lKCkge1xuICBjb25zdCBjdXJyZW50ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XG4gIGNvbnN0IG5leHQgPSB0aGVtZU1hcFtjdXJyZW50XTtcblxuICBib2R5Q2xhc3MucmVwbGFjZShjdXJyZW50LCBuZXh0KTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgbmV4dCk7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZUJ1dHRvbicpLm9uY2xpY2sgPSB0b2dnbGVUaGVtZTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQXBwJyxcbiAgY29tcG9uZW50czoge1xuICAgIE5hdmJhcixcblx0U2lkZUJhcixcblxuICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwiYXBpL3F1aXplcy9cIilcbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSA+XG5cbi5tYWluIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRtYXJnaW4tbGVmdDogNXJlbTtcblx0cGFkZGluZzogMXJlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubWFpbiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbjpyb290IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogJ09wZW4gU2Fucyc7XG4gIC0tdGV4dC1wcmltYXJ5OiAjYjZiNmI2O1xuICAtLXRleHQtc2Vjb25kYXJ5OiAjZWNlY2VjO1xuICAtLWJnLXByaW1hcnk6ICMyMzIzMmU7XG4gIC0tYmctc2Vjb25kYXJ5OiAjMTQxNDE4O1xuICAtLXRyYW5zaXRpb24tc3BlZWQ6IDYwMG1zO1xufVxuXG5cbmJ1dHRvbiB7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0Ym9yZGVyOiBub25lO1xuXHRvdXRsaW5lOiBub25lO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xufVxuXG48L3N0eWxlPlxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBVEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar nativeKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });\n\n// `Object.keys` method\n// https://tc39.es/ecma262/#sec-object.keys\n$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {\n  keys: function keys(it) {\n    return nativeKeys(toObject(it));\n  }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5rZXlzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3Qua2V5cy5qcz9iNjRiIl0sInNvdXJjZXNDb250ZW50IjpbInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgbmF0aXZlS2V5cygxKTsgfSk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGQUlMU19PTl9QUklNSVRJVkVTIH0sIHtcbiAga2V5czogZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/core-js/modules/es.object.keys.js\n");

/***/ })

})