webpackHotUpdate("app",{

/***/ "./src/assets/expandSidebar.js":
/*!*************************************!*\
  !*** ./src/assets/expandSidebar.js ***!
  \*************************************/
/*! exports provided: expandSidebar, toggleClassMenu, OnTransitionEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expandSidebar\", function() { return expandSidebar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleClassMenu\", function() { return toggleClassMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OnTransitionEnd\", function() { return OnTransitionEnd; });\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction expandSidebar() {\n  if (window.innerWidth < 991.5) {\n    var sidebar = document.querySelector(\".sidebar\");\n    var main = document.querySelector(\".main\");\n    var bottombar = document.querySelector(\".bottombar\");\n    sidebar.style.width === \"16rem\" ? sidebar.style.width = \"0rem\" : sidebar.style.width = \"16rem\";\n    main.style.filter === \"grayscale(100%) opacity(0.7)\" ? main.style.filter = \"none\" : main.style.filter = \"grayscale(100%) opacity(0.7)\";\n    bottombar.style.filter === \"grayscale(100%) opacity(0.7)\" ? bottombar.style.filter = \"none\" : bottombar.style.filter = \"grayscale(100%) opacity(0.7)\";\n  }\n}\nfunction toggleClassMenu() {\n  console.log(\"works\");\n  var menu = document.querySelector('.menu');\n  menu.classList.add(\"menu--animatable\");\n\n  if (!menu.classList.contains(\"menu--visible\")) {\n    menu.classList.add(\"menu--visible\");\n  } else {\n    menu.classList.remove(\"menu--visible\");\n  }\n}\nfunction OnTransitionEnd() {\n  var menu = document.querySelector(\".menu\");\n  menu.classList.remove(\"menu--animatable\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2V4cGFuZFNpZGViYXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2V4cGFuZFNpZGViYXIuanM/YzkxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZXhwYW5kU2lkZWJhcigpIHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MS41KSB7XHJcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gICAgICAgIGNvbnN0IGJvdHRvbWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tYmFyXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgc2lkZWJhci5zdHlsZS53aWR0aCA9PT0gXCIxNnJlbVwiID8gc2lkZWJhci5zdHlsZS53aWR0aCA9IFwiMHJlbVwiIDogc2lkZWJhci5zdHlsZS53aWR0aCA9IFwiMTZyZW1cIlxyXG4gICAgICAgIG1haW4uc3R5bGUuZmlsdGVyID09PSBcImdyYXlzY2FsZSgxMDAlKSBvcGFjaXR5KDAuNylcIiA/IG1haW4uc3R5bGUuZmlsdGVyID0gXCJub25lXCIgOiBtYWluLnN0eWxlLmZpbHRlciA9IFwiZ3JheXNjYWxlKDEwMCUpIG9wYWNpdHkoMC43KVwiXHJcbiAgICAgICAgYm90dG9tYmFyLnN0eWxlLmZpbHRlciA9PT0gXCJncmF5c2NhbGUoMTAwJSkgb3BhY2l0eSgwLjcpXCIgPyBib3R0b21iYXIuc3R5bGUuZmlsdGVyID0gXCJub25lXCIgOiBib3R0b21iYXIuc3R5bGUuZmlsdGVyID0gXCJncmF5c2NhbGUoMTAwJSkgb3BhY2l0eSgwLjcpXCJcclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNsYXNzTWVudSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwid29ya3NcIilcclxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKVxyXG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudS0tYW5pbWF0YWJsZVwiKTsgICAgICAgIFxyXG4gICAgaWYoIW1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudS0tdmlzaWJsZVwiKSkgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51LS12aXNpYmxlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LS12aXNpYmxlXCIpOyAgICAgICAgICAgICAgICBcclxuICAgIH0gICAgICAgIFxyXG4gIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBPblRyYW5zaXRpb25FbmQoKSB7XHJcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcclxuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtLWFuaW1hdGFibGVcIik7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/expandSidebar.js\n");

/***/ })

})