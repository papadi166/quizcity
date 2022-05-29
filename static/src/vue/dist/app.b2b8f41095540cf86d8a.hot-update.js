webpackHotUpdate("app",{

/***/ "./src/assets/expandSidebar.js":
/*!*************************************!*\
  !*** ./src/assets/expandSidebar.js ***!
  \*************************************/
/*! exports provided: expandSidebar, toggleClassMenu, OnTransitionEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expandSidebar\", function() { return expandSidebar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleClassMenu\", function() { return toggleClassMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OnTransitionEnd\", function() { return OnTransitionEnd; });\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction expandSidebar() {\n  if (window.innerWidth < 991.5) {\n    var sidebar = document.querySelector(\".sidebar\");\n    var main = document.querySelector(\".main\");\n    var bottombar = document.querySelector(\".bottombar\");\n    if (sidebar.classList.contains(\"sidebar--animation\")) sidebar.style.width = \"16rem\", sidebar.classList.remove(\"sidebar--animation\"), sidebar.classList.add(\"sidebar-back-animation\");else sidebar.classList.remove(\"sidebar-back-animation\"), sidebar.style.width = \"0px\", sidebar.classList.add(\"sidebar--animation\");\n    sidebar.style.width = \"16rem\";\n    main.style.filter === \"grayscale(100%) opacity(0.7)\" ? main.style.filter = \"none\" : main.style.filter = \"grayscale(100%) opacity(0.7)\";\n    bottombar.style.filter === \"grayscale(100%)\" ? bottombar.style.filter = \"none\" : bottombar.style.filter = \"grayscale(100%)\";\n  }\n}\nfunction toggleClassMenu() {\n  console.log(\"works\");\n  var menu = document.querySelector('.menu');\n  menu.classList.add(\"menu--animatable\");\n\n  if (!menu.classList.contains(\"menu--visible\")) {\n    menu.classList.add(\"menu--visible\");\n  } else {\n    menu.classList.remove(\"menu--visible\");\n  }\n}\nfunction OnTransitionEnd() {\n  var menu = document.querySelector(\".menu\");\n  menu.classList.remove(\"menu--animatable\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2V4cGFuZFNpZGViYXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2V4cGFuZFNpZGViYXIuanM/YzkxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZXhwYW5kU2lkZWJhcigpIHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MS41KSB7XHJcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG4gICAgICAgIGNvbnN0IGJvdHRvbWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm90dG9tYmFyXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChzaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucyhcInNpZGViYXItLWFuaW1hdGlvblwiKSkgc2lkZWJhci5zdHlsZS53aWR0aCA9IFwiMTZyZW1cIiwgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwic2lkZWJhci0tYW5pbWF0aW9uXCIpLCBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWJhY2stYW5pbWF0aW9uXCIpXHJcbiAgICAgICAgZWxzZSAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlYmFyLWJhY2stYW5pbWF0aW9uXCIpLCBzaWRlYmFyLnN0eWxlLndpZHRoID0gXCIwcHhcIiwgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci0tYW5pbWF0aW9uXCIpXHJcbiAgICAgICAgXHJcbiAgICAgICAgc2lkZWJhci5zdHlsZS53aWR0aCA9ICBcIjE2cmVtXCJcclxuICAgICAgICBtYWluLnN0eWxlLmZpbHRlciA9PT0gXCJncmF5c2NhbGUoMTAwJSkgb3BhY2l0eSgwLjcpXCIgPyBtYWluLnN0eWxlLmZpbHRlciA9IFwibm9uZVwiIDogbWFpbi5zdHlsZS5maWx0ZXIgPSBcImdyYXlzY2FsZSgxMDAlKSBvcGFjaXR5KDAuNylcIlxyXG4gICAgICAgIGJvdHRvbWJhci5zdHlsZS5maWx0ZXIgPT09IFwiZ3JheXNjYWxlKDEwMCUpXCIgPyBib3R0b21iYXIuc3R5bGUuZmlsdGVyID0gXCJub25lXCIgOiBib3R0b21iYXIuc3R5bGUuZmlsdGVyID0gXCJncmF5c2NhbGUoMTAwJSlcIlxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3NNZW51KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJ3b3Jrc1wiKVxyXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpXHJcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51LS1hbmltYXRhYmxlXCIpOyAgICAgICAgXHJcbiAgICBpZighbWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51LS12aXNpYmxlXCIpKSB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnUtLXZpc2libGVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnUtLXZpc2libGVcIik7ICAgICAgICAgICAgICAgIFxyXG4gICAgfSAgICAgICAgXHJcbiAgfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE9uVHJhbnNpdGlvbkVuZCgpIHtcclxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xyXG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS0tYW5pbWF0YWJsZVwiKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/expandSidebar.js\n");

/***/ })

})