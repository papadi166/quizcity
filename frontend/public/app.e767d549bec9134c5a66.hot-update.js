webpackHotUpdate("app",{

/***/ "./src/assets/expandSidebar.js":
/*!*************************************!*\
  !*** ./src/assets/expandSidebar.js ***!
  \*************************************/
/*! exports provided: expandSidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"expandSidebar\", function() { return expandSidebar; });\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ \"./node_modules/core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction expandSidebar() {\n  if (window.innerWidth < 991.5) {\n    menu = document.querySelector(\".menu\");\n    menu.classList.add(\"menu--animatable\");\n\n    if (!menu.classList.contains(\"menu--visible\")) {\n      menu.classList.add(\"menu--visivle\");\n    } else {\n      menu.classList.remove(\"menu--visible\");\n    }\n\n    var sidebar = document.querySelector(\".sidebar\");\n    var main = document.querySelector(\".main\");\n    var bottombar = document.querySelector(\".bottombar\");\n    sidebar.style.width === \"16rem\" ? sidebar.style.width = \"0rem\" : sidebar.style.width = \"16rem\";\n    main.style.filter === \"grayscale(100%) opacity(0.7)\" ? main.style.filter = \"none\" : main.style.filter = \"grayscale(100%) opacity(0.7)\";\n    bottombar.style.filter === \"grayscale(100%) opacity(0.7)\" ? bottombar.style.filter = \"none\" : bottombar.style.filter = \"grayscale(100%) opacity(0.7)\";\n  }\n\n  function OnTransitionEnd() {\n    menu = document.querySelector(\".menu\");\n    myMenu.classList.remove(\"menu--animatable\");\n  }\n\n  var menu = document.querySelector(\".menu\");\n  var oppMenu = document.querySelector(\".menu-icon\");\n  menu.addEventListener(\"transitionend\", OnTransitionEnd, false);\n  oppMenu.addEventListener(\"click\", toggleClassMenu, false);\n  menu.addEventListener(\"click\", toggleClassMenu, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2V4cGFuZFNpZGViYXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2V4cGFuZFNpZGViYXIuanM/YzkxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZXhwYW5kU2lkZWJhcigpIHtcclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MS41KSB7XHJcbiAgICAgICAgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51LS1hbmltYXRhYmxlXCIpO1xyXG5cclxuICAgICAgICBpZighbWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51LS12aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnUtLXZpc2l2bGVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibWVudS0tdmlzaWJsZVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKTtcclxuICAgICAgICBjb25zdCBib3R0b21iYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvdHRvbWJhclwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIHNpZGViYXIuc3R5bGUud2lkdGggPT09IFwiMTZyZW1cIiA/IHNpZGViYXIuc3R5bGUud2lkdGggPSBcIjByZW1cIiA6IHNpZGViYXIuc3R5bGUud2lkdGggPSBcIjE2cmVtXCJcclxuICAgICAgICBtYWluLnN0eWxlLmZpbHRlciA9PT0gXCJncmF5c2NhbGUoMTAwJSkgb3BhY2l0eSgwLjcpXCIgPyBtYWluLnN0eWxlLmZpbHRlciA9IFwibm9uZVwiIDogbWFpbi5zdHlsZS5maWx0ZXIgPSBcImdyYXlzY2FsZSgxMDAlKSBvcGFjaXR5KDAuNylcIlxyXG4gICAgICAgIGJvdHRvbWJhci5zdHlsZS5maWx0ZXIgPT09IFwiZ3JheXNjYWxlKDEwMCUpIG9wYWNpdHkoMC43KVwiID8gYm90dG9tYmFyLnN0eWxlLmZpbHRlciA9IFwibm9uZVwiIDogYm90dG9tYmFyLnN0eWxlLmZpbHRlciA9IFwiZ3JheXNjYWxlKDEwMCUpIG9wYWNpdHkoMC43KVwiXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gT25UcmFuc2l0aW9uRW5kKCkge1xyXG4gICAgICAgIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVcIik7XHJcbiAgICAgICAgbXlNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51LS1hbmltYXRhYmxlXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcclxuICAgICAgbGV0IG9wcE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtaWNvblwiKTtcclxuICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBPblRyYW5zaXRpb25FbmQsIGZhbHNlKTtcclxuICAgICAgb3BwTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQ2xhc3NNZW51LCBmYWxzZSk7XHJcbiAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUNsYXNzTWVudSwgZmFsc2UpO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/expandSidebar.js\n");

/***/ })

})