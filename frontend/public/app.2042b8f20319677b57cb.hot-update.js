webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SideBar.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/SideBar.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ \"./node_modules/core-js/modules/es.array.join.js\");\n/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.esm.js\");\n\n\n\n\n\n/* ---------------------------------------------------\r\n    OFFCANVAS SIDEBAR SCRIPTS\r\n----------------------------------------------------- */\n\nvar sidebarCollapse = document.getElementById(\"sidebarCollapse\");\nvar offcanvas_el = document.querySelector(\"#offcanvas\");\nvar offcanvas = new bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Offcanvas\"].getOrCreateInstance(offcanvas_el);\noffcanvas_el.addEventListener('hide.bs.offcanvas', function () {\n  sidebarCollapse.classList.remove('active');\n});\noffcanvas_el.addEventListener('show.bs.offcanvas', function () {\n  sidebarCollapse.classList.add('active');\n});\n\nfunction toggleMyOffcanvas() {\n  if (window.innerWidth < 576) {\n    // Prevent hiding animation triggering if page first loaded in mobile view\n    offcanvas_el.style.visibility = 'hidden';\n\n    if (offcanvas_el.classList.contains('show')) {\n      offcanvas.hide();\n    }\n  } else {\n    if (!offcanvas_el.classList.contains('show')) {\n      offcanvas.show();\n    }\n  }\n}\n\nfunction highlightNav() {\n  var paths = location.pathname.split(\"/\"); // uri to array\n\n  paths.shift(); // Remove domain name\n\n  paths = '/' + paths.join('/'); // Add leading slash and join into a string\n\n  paths = paths == '/' ? '/' : paths.replace(/\\/$/, \"\"); // Remove trailing slash if present\n\n  var menuItem = document.querySelector('.offcanvas-body a[href=\"' + paths + '\"]');\n\n  if (menuItem) {\n    menuItem.classList.add('active');\n  }\n}\n\nwindow.onload = function () {\n  toggleMyOffcanvas();\n  highlightNav();\n};\n\nwindow.onresize = function () {\n  toggleMyOffcanvas();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SideBar',\n  data: function data() {\n    return {\n      is_toggler_clicked: false\n    };\n  },\n  methods: {}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9TaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIudnVlPzdjMDgiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG48bmF2IGNsYXNzPVwib2ZmY2FudmFzIG9mZmNhbnZhcy1zdGFydCBzaG93XCIgdGFiaW5kZXg9XCItMVwiIGlkPVwib2ZmY2FudmFzXCIgZGF0YS1icy1rZXlib2FyZD1cImZhbHNlXCIgZGF0YS1icy1iYWNrZHJvcD1cInRydWVcIiBkYXRhLWJzLXNjcm9sbD1cInRydWVcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm9mZmNhbnZhcy1oZWFkZXIgYm9yZGVyLWJvdHRvbVwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHRleHQtZGVjb3JhdGlvbi1ub25lIG9mZmNhbnZhcy10aXRsZSBkLXNtLWJsb2NrXCI+XHJcbiAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktY2hhdC1yaWdodC10ZXh0LWZpbGxcIj48L2k+XHJcbiAgICAgICAgICAgIFNpZGViYXJcclxuICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm9mZmNhbnZhcy1ib2R5IHB4LTBcIj5cclxuICAgICAgICBcclxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LXVuc3R5bGVkIHBzLTBcIj5cclxuICAgICAgICAgIDxsaSBjbGFzcz1cIm1iLTFcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi10b2dnbGUgYWxpZ24taXRlbXMtY2VudGVyIHJvdW5kZWRcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI2hvbWUtY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBzaG93XCIgaWQ9XCJob21lLWNvbGxhcHNlXCIgc3R5bGU9XCJcIj5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJidG4tdG9nZ2xlLW5hdiBsaXN0LXVuc3R5bGVkIGZ3LW5vcm1hbCBwYi0xIHNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9cIiBjbGFzcz1cInJvdW5kZWRcIj5PdmVydmlldzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJyb3VuZGVkXCI+VXBkYXRlczwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJyb3VuZGVkXCI+UmVwb3J0czwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzcz1cIm1iLTFcIj5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi10b2dnbGUgYWxpZ24taXRlbXMtY2VudGVyIHJvdW5kZWQgY29sbGFwc2VkXCJcclxuICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNkYXNoYm9hcmQtY29sbGFwc2VcIlxyXG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBEYXNoYm9hcmRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZVwiIGlkPVwiZGFzaGJvYXJkLWNvbGxhcHNlXCI+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiYnRuLXRvZ2dsZS1uYXYgbGlzdC11bnN0eWxlZCBmdy1ub3JtYWwgcGItMSBzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJyb3VuZGVkXCI+T3ZlcnZpZXc8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwicm91bmRlZFwiPldlZWtseTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJyb3VuZGVkXCI+TW9udGhseTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJyb3VuZGVkXCI+QW5udWFsbHk8L2E+PC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJtYi0xXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tdG9nZ2xlIGFsaWduLWl0ZW1zLWNlbnRlciByb3VuZGVkIGNvbGxhcHNlZFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjb3JkZXJzLWNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgT3JkZXJzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2VcIiBpZD1cIm9yZGVycy1jb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImJ0bi10b2dnbGUtbmF2IGxpc3QtdW5zdHlsZWQgZnctbm9ybWFsIHBiLTEgc21hbGxcIj5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwicm91bmRlZFwiPk5ldzwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJyb3VuZGVkXCI+UHJvY2Vzc2VkPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInJvdW5kZWRcIj5TaGlwcGVkPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBjbGFzcz1cInJvdW5kZWRcIj5SZXR1cm5lZDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzcz1cImJvcmRlci10b3AgbXktM1wiPjwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJtYi0xXCI+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tdG9nZ2xlIGFsaWduLWl0ZW1zLWNlbnRlciByb3VuZGVkIGNvbGxhcHNlZFwiXHJcbiAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgZGF0YS1icy10YXJnZXQ9XCIjYWNjb3VudC1jb2xsYXBzZVwiXHJcbiAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFjY291bnRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZVwiIGlkPVwiYWNjb3VudC1jb2xsYXBzZVwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImJ0bi10b2dnbGUtbmF2IGxpc3QtdW5zdHlsZWQgZnctbm9ybWFsIHBiLTEgc21hbGxcIj5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwicm91bmRlZFwiPk5ldy4uLjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJyb3VuZGVkXCI+UHJvZmlsZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJyb3VuZGVkXCI+U2V0dGluZ3M8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIGNsYXNzPVwicm91bmRlZFwiPlNpZ24gb3V0PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIE9GRkNBTlZBUyBTSURFQkFSIFNDUklQVFNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuaW1wb3J0ICogYXMgYm9vdHN0cmFwIGZyb20gJ2Jvb3RzdHJhcCdcclxuXHJcbnZhciBzaWRlYmFyQ29sbGFwc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJDb2xsYXBzZVwiKTtcclxudmFyIG9mZmNhbnZhc19lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb2ZmY2FudmFzXCIpO1xyXG52YXIgb2ZmY2FudmFzID0gbmV3IGJvb3RzdHJhcC5PZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZShvZmZjYW52YXNfZWwpO1xyXG5cclxub2ZmY2FudmFzX2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUuYnMub2ZmY2FudmFzJywgZnVuY3Rpb24gKCkge1xyXG4gIHNpZGViYXJDb2xsYXBzZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxufSlcclxuXHJcbm9mZmNhbnZhc19lbC5hZGRFdmVudExpc3RlbmVyKCdzaG93LmJzLm9mZmNhbnZhcycsIGZ1bmN0aW9uICgpIHtcclxuICBzaWRlYmFyQ29sbGFwc2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiB0b2dnbGVNeU9mZmNhbnZhcygpIHtcclxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA1NzYpIHtcclxuICAgIC8vIFByZXZlbnQgaGlkaW5nIGFuaW1hdGlvbiB0cmlnZ2VyaW5nIGlmIHBhZ2UgZmlyc3QgbG9hZGVkIGluIG1vYmlsZSB2aWV3XHJcbiAgICBvZmZjYW52YXNfZWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgXHJcbiAgICBpZiAob2ZmY2FudmFzX2VsLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcbiAgICAgIG9mZmNhbnZhcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICghb2ZmY2FudmFzX2VsLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcbiAgICAgIG9mZmNhbnZhcy5zaG93KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWdobGlnaHROYXYoKSB7XHJcbiAgdmFyIHBhdGhzID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpOyAvLyB1cmkgdG8gYXJyYXlcclxuICBwYXRocy5zaGlmdCgpOyAvLyBSZW1vdmUgZG9tYWluIG5hbWVcclxuICBwYXRocyA9ICcvJyArIHBhdGhzLmpvaW4oJy8nKTsgLy8gQWRkIGxlYWRpbmcgc2xhc2ggYW5kIGpvaW4gaW50byBhIHN0cmluZ1xyXG4gIHBhdGhzID0gKHBhdGhzID09ICcvJykgPyAnLycgOiBwYXRocy5yZXBsYWNlKC9cXC8kLywgXCJcIik7IC8vIFJlbW92ZSB0cmFpbGluZyBzbGFzaCBpZiBwcmVzZW50XHJcbiAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub2ZmY2FudmFzLWJvZHkgYVtocmVmPVwiJyArIHBhdGhzICsgJ1wiXScpO1xyXG4gIGlmIChtZW51SXRlbSkge1xyXG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgdG9nZ2xlTXlPZmZjYW52YXMoKTtcclxuICBoaWdobGlnaHROYXYoKTtcclxufVxyXG5cclxud2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24oKSB7XHJcbiAgdG9nZ2xlTXlPZmZjYW52YXMoKTtcclxufSBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdTaWRlQmFyJyxcclxuICAgICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNfdG9nZ2xlcl9jbGlja2VkOiBmYWxzZSxcclxuICAgIH1cclxuICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5hLFxyXG5hOmhvdmVyLFxyXG5hOmZvY3VzIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIE9GRkNBTlZBUyBFU1NFTlRJQUxTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4ub2ZmY2FudmFzLXN0YXJ0IHtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi8qIERlc2t0b3AgdmlldyAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogaW5oZXJpdDtcclxuICB9XHJcbiAgXHJcbiAgI3NpZGViYXJDb2xsYXBzZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAub2ZmY2FudmFzLWJhY2tkcm9wIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBNRU5VIFRPR0dMRSBCVVRUT04gQU5JTUFUSU9OU1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuI3NpZGViYXJDb2xsYXBzZSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4jc2lkZWJhckNvbGxhcHNlIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGxlZnQ6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IC4yNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogLjI1cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiAuMjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jc2lkZWJhckNvbGxhcHNlIHNwYW46bnRoLWNoaWxkKDEpIHtcclxuICB0b3A6IDBweDtcclxuICBcclxufVxyXG5cclxuI3NpZGViYXJDb2xsYXBzZSBzcGFuOm50aC1jaGlsZCgyKSxcclxuI3NpZGViYXJDb2xsYXBzZSBzcGFuOm50aC1jaGlsZCgzKSB7XHJcbiAgdG9wOiAxNXB4O1xyXG59XHJcblxyXG4jc2lkZWJhckNvbGxhcHNlIHNwYW46bnRoLWNoaWxkKDQpIHtcclxuICB0b3A6IDMwcHg7XHJcbn1cclxuXHJcbiNzaWRlYmFyQ29sbGFwc2UuYWN0aXZlIHNwYW46bnRoLWNoaWxkKDEpIHtcclxuICB0b3A6IDE1cHg7XHJcbiAgd2lkdGg6IDAlO1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuI3NpZGViYXJDb2xsYXBzZS5hY3RpdmUgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbiNzaWRlYmFyQ29sbGFwc2UuYWN0aXZlIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG5cclxuI3NpZGViYXJDb2xsYXBzZS5hY3RpdmUgc3BhbjpudGgtY2hpbGQoNCkge1xyXG4gIHRvcDogMTVweDtcclxuICB3aWR0aDogMCU7XHJcbiAgbGVmdDogNTAlO1xyXG59XHJcblxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBTSURFQkFSIFNUWUxFU1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuLmJpIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogLS4xMjVlbTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IC4yNXJlbSAuNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC42NSk7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG4uYnRuLXRvZ2dsZTpob3ZlcixcclxuLmJ0bi10b2dnbGU6Zm9jdXMge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC44NSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGU6OmJlZm9yZSB7XHJcbiAgd2lkdGg6IDEuMjVlbTtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICBjb250ZW50OiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyB2aWV3Qm94PScwIDAgMTYgMTYnJTNlJTNjcGF0aCBmaWxsPSdub25lJyBzdHJva2U9J3JnYmElMjgwLDAsMCwuNSUyOScgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBzdHJva2Utd2lkdGg9JzInIGQ9J001IDE0bDYtNi02LTYnLyUzZSUzYy9zdmclM2VcIik7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zNXMgZWFzZTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAuNWVtIDUwJTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGVbYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC44NSk7XHJcbn1cclxuLmJ0bi10b2dnbGVbYXJpYS1leHBhbmRlZD1cInRydWVcIl06OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59XHJcblxyXG4uYnRuLXRvZ2dsZS1uYXYgYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgcGFkZGluZzogLjE4NzVyZW0gLjVyZW07XHJcbiAgbWFyZ2luLXRvcDogLjEyNXJlbTtcclxuICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmJ0bi10b2dnbGUtbmF2IGE6aG92ZXIsXHJcbi5idG4tdG9nZ2xlLW5hdiBhOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG59XHJcbi5idG4tdG9nZ2xlLW5hdiBhLmFjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIE9QVElPTkFMIE5BVkJBUiBIRUFERVIgVEhFTUVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi5vZmZjYW52YXMtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2ZWZkIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuPC9zdHlsZT4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQTJGQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFQQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SideBar.vue?vue&type=script&lang=js\n");

/***/ })

})