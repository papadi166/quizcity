webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SideBar.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/SideBar.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar toggle = document.getElementById(\"toggleSidebar\");\nvar offcanvas_el = document.getElementById(\"offcanvasExample\");\nvar offcanvas = new bootstrap.Offcanvas(offcanvas_el, {\n  backdrop: false\n});\ntoggle.addEventListener(\"change\", function () {\n  toggle.checked ? offcanvas.show() : offcanvas.hide();\n}); // handle case when sidebar is closed internally using `X`\n\noffcanvas_el.addEventListener('hide.bs.offcanvas', function () {\n  toggle.checked = false;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SideBar'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9TaWRlQmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIudnVlPzdjMDgiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyIG1pbi12aC0xMDAgcHktMlwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiZm9udC13ZWlnaHQtbGlnaHRcIj5Cb290c3RyYXAgNSBTaWRlYmFyPC9oMj5cclxuICAgICAgICAgICAgPHA+IFRoaXMgaXMgYSBCb290c3RyYXAgNSBvZmYtY2FudmFzIG1lbnUgZXhhbXBsZSEgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgZm9ybS1jaGVjayBmb3JtLXN3aXRjaCBmb3JtLWNvbnRyb2wtbGdcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0b2dnbGVTaWRlYmFyXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbCBtcy0xXCIgZm9yPVwidG9nZ2xlU2lkZWJhclwiPlRvZ2dsZSBPZmZjYW52YXM8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaWNvbnMuZ2V0Ym9vdHN0cmFwLmNvbS9hc3NldHMvaW1nL2ljb25zLWhlcm8ucG5nXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvZmZjYW52YXMgb2ZmY2FudmFzLXN0YXJ0IGJnLWxpZ2h0XCIgdGFiaW5kZXg9XCItMVwiIGlkPVwib2ZmY2FudmFzRXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9mZmNhbnZhcy1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJvZmZjYW52YXMtdGl0bGVcIj5PZmZjYW52YXM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWNsb3NlIHRleHQtcmVzZXRcIiBkYXRhLWJzLWRpc21pc3M9XCJvZmZjYW52YXNcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9mZmNhbnZhcy1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gU29tZSB0ZXh0IGFzIHBsYWNlaG9sZGVyLiBJbiByZWFsIGxpZmUgeW91IGNhbiBoYXZlIHRoZSBlbGVtZW50cyB5b3UgaGF2ZSBjaG9zZW4uIExpa2UsIHRleHQsIGltYWdlcywgbGlzdHMsIGV0Yy4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZVwiIHR5cGU9XCJidXR0b25cIiBpZD1cImRyb3Bkb3duTWVudUJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIj4gTWVudSA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duTWVudUJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QWN0aW9uPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U29tZXRoaW5nIGVsc2UgaGVyZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxudmFyIHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlU2lkZWJhclwiKVxyXG52YXIgb2ZmY2FudmFzX2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvZmZjYW52YXNFeGFtcGxlXCIpXHJcbnZhciBvZmZjYW52YXMgPSBuZXcgYm9vdHN0cmFwLk9mZmNhbnZhcyhvZmZjYW52YXNfZWwsIHtiYWNrZHJvcDogZmFsc2V9KVxyXG5cclxudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKXtcclxuICAgIHRvZ2dsZS5jaGVja2VkID8gb2ZmY2FudmFzLnNob3coKSA6IG9mZmNhbnZhcy5oaWRlKCkgXHJcbn0pXHJcblxyXG4vLyBoYW5kbGUgY2FzZSB3aGVuIHNpZGViYXIgaXMgY2xvc2VkIGludGVybmFsbHkgdXNpbmcgYFhgXHJcbm9mZmNhbnZhc19lbC5hZGRFdmVudExpc3RlbmVyKCdoaWRlLmJzLm9mZmNhbnZhcycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHRvZ2dsZS5jaGVja2VkID0gZmFsc2VcclxufSlcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ1NpZGVCYXInLFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRANDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuOnJvb3Qge1xyXG4gICAgLS1oZWFkZXItaGVpZ2h0OiAzcmVtO1xyXG4gICAgLS1uYXYtd2lkdGg6IDY4cHg7XHJcbiAgICAtLWZpcnN0LWNvbG9yLWxpZ2h0OiAjQUZBNUQ5O1xyXG4gICAgLS13aGl0ZS1jb2xvcjogI0Y3RjZGQjtcclxuICAgIC0tYm9keS1mb250OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgIC0tbm9ybWFsLWZvbnQtc2l6ZTogMXJlbTtcclxuICAgIC0tei1maXhlZDogMTAwXHJcbn1cclxuXHJcbiosXHJcbjo6YmVmb3JlLFxyXG46OmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IHZhcigtLWhlYWRlci1oZWlnaHQpIDAgMCAwO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udCk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzXHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcclxuICAgIHotaW5kZXg6IHZhcigtLXotZml4ZWQpO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzXHJcbn1cclxuXHJcbi5oZWFkZXJfdG9nZ2xlIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuLmhlYWRlcl9pbWcge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbn1cclxuXHJcbi5oZWFkZXJfaW1nIGltZyB7XHJcbiAgICB3aWR0aDogNDBweFxyXG59XHJcblxyXG4ubC1uYXZiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogLTMwJTtcclxuICAgIHdpZHRoOiB2YXIoLS1uYXYtd2lkdGgpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtIDAgMDtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuICAgIHotaW5kZXg6IHZhcigtLXotZml4ZWQpXHJcbn1cclxuXHJcbi5uYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbn1cclxuXHJcbi5uYXZfbG9nbyxcclxuLm5hdl9saW5rIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IG1heC1jb250ZW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbHVtbi1nYXA6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAwIC41cmVtIDEuNXJlbVxyXG59XHJcblxyXG4ubmF2X2xvZ28ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbVxyXG59XHJcblxyXG4ubmF2X2xvZ28taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpXHJcbn1cclxuXHJcbi5uYXZfbG9nby1uYW1lIHtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XHJcbiAgICBmb250LXdlaWdodDogNzAwXHJcbn1cclxuXHJcbi5uYXZfbGluayB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogdmFyKC0tZmlyc3QtY29sb3ItbGlnaHQpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzXHJcbn1cclxuXHJcbi5uYXZfbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpXHJcbn1cclxuXHJcbi5uYXZfaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW1cclxufVxyXG5cclxuLnNob3cge1xyXG4gICAgbGVmdDogMFxyXG59XHJcblxyXG4uYm9keS1wZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tbmF2LXdpZHRoKSArIDFyZW0pXHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKVxyXG59XHJcblxyXG4uYWN0aXZlOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKVxyXG59XHJcblxyXG4uaGVpZ2h0LTEwMCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW46IGNhbGModmFyKC0taGVhZGVyLWhlaWdodCkgKyAxcmVtKSAwIDAgMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tbmF2LXdpZHRoKSArIDJyZW0pXHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQpICsgMXJlbSlcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyX2ltZyB7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlcl9pbWcgaW1nIHtcclxuICAgICAgICB3aWR0aDogNDVweFxyXG4gICAgfVxyXG5cclxuICAgIC5sLW5hdmJhciB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMCAwXHJcbiAgICB9XHJcblxyXG4gICAgLnNob3cge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLW5hdi13aWR0aCkgKyAxNTZweClcclxuICAgIH1cclxuXHJcbiAgICAuYm9keS1wZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLW5hdi13aWR0aCkgKyAxODhweClcclxuICAgIH1cclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBcclxufVxyXG48L3N0eWxlPiJdLCJtYXBwaW5ncyI6IkFBb0NBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SideBar.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SideBar.vue?vue&type=template&id=3eca7188":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/SideBar.vue?vue&type=template&id=3eca7188 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  class: \"container min-vh-100 py-2\"\n};\n\nvar _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createStaticVNode\"])(\"<div class=\\\"row\\\"><div class=\\\"col\\\"><h2 class=\\\"font-weight-light\\\">Bootstrap 5 Sidebar</h2><p> This is a Bootstrap 5 off-canvas menu example! </p><div class=\\\"d-flex justify-content-end form-check form-switch form-control-lg\\\"><input class=\\\"form-check-input\\\" type=\\\"checkbox\\\" id=\\\"toggleSidebar\\\"><label class=\\\"form-check-label ms-1\\\" for=\\\"toggleSidebar\\\">Toggle Offcanvas</label></div><div class=\\\"text-center\\\"><img src=\\\"https://icons.getbootstrap.com/assets/img/icons-hero.png\\\"></div><div class=\\\"offcanvas offcanvas-start bg-light\\\" tabindex=\\\"-1\\\" id=\\\"offcanvasExample\\\"><div class=\\\"offcanvas-header\\\"><h5 class=\\\"offcanvas-title\\\">Offcanvas</h5><button type=\\\"button\\\" class=\\\"btn-close text-reset\\\" data-bs-dismiss=\\\"offcanvas\\\" aria-label=\\\"Close\\\"></button></div><div class=\\\"offcanvas-body\\\"><div> Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc. </div><div class=\\\"dropdown mt-3\\\"><button class=\\\"btn btn-secondary dropdown-toggle\\\" type=\\\"button\\\" id=\\\"dropdownMenuButton\\\" data-bs-toggle=\\\"dropdown\\\"> Menu </button><ul class=\\\"dropdown-menu\\\" aria-labelledby=\\\"dropdownMenuButton\\\"><li><a class=\\\"dropdown-item\\\" href=\\\"#\\\">Action</a></li><li><a class=\\\"dropdown-item\\\" href=\\\"#\\\">Another action</a></li><li><a class=\\\"dropdown-item\\\" href=\\\"#\\\">Something else here</a></li></ul></div></div></div></div></div>\", 1);\n\nvar _hoisted_3 = [_hoisted_2];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_1, _hoisted_3);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9TaWRlQmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZWNhNzE4OC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIudnVlPzdjMDgiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyIG1pbi12aC0xMDAgcHktMlwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzPVwiZm9udC13ZWlnaHQtbGlnaHRcIj5Cb290c3RyYXAgNSBTaWRlYmFyPC9oMj5cclxuICAgICAgICAgICAgPHA+IFRoaXMgaXMgYSBCb290c3RyYXAgNSBvZmYtY2FudmFzIG1lbnUgZXhhbXBsZSEgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgZm9ybS1jaGVjayBmb3JtLXN3aXRjaCBmb3JtLWNvbnRyb2wtbGdcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0b2dnbGVTaWRlYmFyXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbCBtcy0xXCIgZm9yPVwidG9nZ2xlU2lkZWJhclwiPlRvZ2dsZSBPZmZjYW52YXM8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaWNvbnMuZ2V0Ym9vdHN0cmFwLmNvbS9hc3NldHMvaW1nL2ljb25zLWhlcm8ucG5nXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvZmZjYW52YXMgb2ZmY2FudmFzLXN0YXJ0IGJnLWxpZ2h0XCIgdGFiaW5kZXg9XCItMVwiIGlkPVwib2ZmY2FudmFzRXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9mZmNhbnZhcy1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJvZmZjYW52YXMtdGl0bGVcIj5PZmZjYW52YXM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLWNsb3NlIHRleHQtcmVzZXRcIiBkYXRhLWJzLWRpc21pc3M9XCJvZmZjYW52YXNcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9mZmNhbnZhcy1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj4gU29tZSB0ZXh0IGFzIHBsYWNlaG9sZGVyLiBJbiByZWFsIGxpZmUgeW91IGNhbiBoYXZlIHRoZSBlbGVtZW50cyB5b3UgaGF2ZSBjaG9zZW4uIExpa2UsIHRleHQsIGltYWdlcywgbGlzdHMsIGV0Yy4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGRyb3Bkb3duLXRvZ2dsZVwiIHR5cGU9XCJidXR0b25cIiBpZD1cImRyb3Bkb3duTWVudUJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIj4gTWVudSA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiZHJvcGRvd24tbWVudVwiIGFyaWEtbGFiZWxsZWRieT1cImRyb3Bkb3duTWVudUJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QWN0aW9uPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5Bbm90aGVyIGFjdGlvbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U29tZXRoaW5nIGVsc2UgaGVyZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxudmFyIHRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlU2lkZWJhclwiKVxyXG52YXIgb2ZmY2FudmFzX2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvZmZjYW52YXNFeGFtcGxlXCIpXHJcbnZhciBvZmZjYW52YXMgPSBuZXcgYm9vdHN0cmFwLk9mZmNhbnZhcyhvZmZjYW52YXNfZWwsIHtiYWNrZHJvcDogZmFsc2V9KVxyXG5cclxudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKXtcclxuICAgIHRvZ2dsZS5jaGVja2VkID8gb2ZmY2FudmFzLnNob3coKSA6IG9mZmNhbnZhcy5oaWRlKCkgXHJcbn0pXHJcblxyXG4vLyBoYW5kbGUgY2FzZSB3aGVuIHNpZGViYXIgaXMgY2xvc2VkIGludGVybmFsbHkgdXNpbmcgYFhgXHJcbm9mZmNhbnZhc19lbC5hZGRFdmVudExpc3RlbmVyKCdoaWRlLmJzLm9mZmNhbnZhcycsIGZ1bmN0aW9uICgpIHtcclxuICAgIHRvZ2dsZS5jaGVja2VkID0gZmFsc2VcclxufSlcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ1NpZGVCYXInLFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvOndnaHRANDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuOnJvb3Qge1xyXG4gICAgLS1oZWFkZXItaGVpZ2h0OiAzcmVtO1xyXG4gICAgLS1uYXYtd2lkdGg6IDY4cHg7XHJcbiAgICAtLWZpcnN0LWNvbG9yLWxpZ2h0OiAjQUZBNUQ5O1xyXG4gICAgLS13aGl0ZS1jb2xvcjogI0Y3RjZGQjtcclxuICAgIC0tYm9keS1mb250OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICAgIC0tbm9ybWFsLWZvbnQtc2l6ZTogMXJlbTtcclxuICAgIC0tei1maXhlZDogMTAwXHJcbn1cclxuXHJcbiosXHJcbjo6YmVmb3JlLFxyXG46OmFmdGVyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IHZhcigtLWhlYWRlci1oZWlnaHQpIDAgMCAwO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWJvZHktZm9udCk7XHJcbiAgICBmb250LXNpemU6IHZhcigtLW5vcm1hbC1mb250LXNpemUpO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzXHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmViZWNjYXB1cnBsZTtcclxuICAgIHotaW5kZXg6IHZhcigtLXotZml4ZWQpO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzXHJcbn1cclxuXHJcbi5oZWFkZXJfdG9nZ2xlIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuLmhlYWRlcl9pbWcge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbn1cclxuXHJcbi5oZWFkZXJfaW1nIGltZyB7XHJcbiAgICB3aWR0aDogNDBweFxyXG59XHJcblxyXG4ubC1uYXZiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogLTMwJTtcclxuICAgIHdpZHRoOiB2YXIoLS1uYXYtd2lkdGgpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAxcmVtIDAgMDtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxuICAgIHotaW5kZXg6IHZhcigtLXotZml4ZWQpXHJcbn1cclxuXHJcbi5uYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbn1cclxuXHJcbi5uYXZfbG9nbyxcclxuLm5hdl9saW5rIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IG1heC1jb250ZW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbHVtbi1nYXA6IDFyZW07XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAwIC41cmVtIDEuNXJlbVxyXG59XHJcblxyXG4ubmF2X2xvZ28ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbVxyXG59XHJcblxyXG4ubmF2X2xvZ28taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpXHJcbn1cclxuXHJcbi5uYXZfbG9nby1uYW1lIHtcclxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XHJcbiAgICBmb250LXdlaWdodDogNzAwXHJcbn1cclxuXHJcbi5uYXZfbGluayB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogdmFyKC0tZmlyc3QtY29sb3ItbGlnaHQpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzXHJcbn1cclxuXHJcbi5uYXZfbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpXHJcbn1cclxuXHJcbi5uYXZfaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW1cclxufVxyXG5cclxuLnNob3cge1xyXG4gICAgbGVmdDogMFxyXG59XHJcblxyXG4uYm9keS1wZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tbmF2LXdpZHRoKSArIDFyZW0pXHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKVxyXG59XHJcblxyXG4uYWN0aXZlOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKVxyXG59XHJcblxyXG4uaGVpZ2h0LTEwMCB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW46IGNhbGModmFyKC0taGVhZGVyLWhlaWdodCkgKyAxcmVtKSAwIDAgMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tbmF2LXdpZHRoKSArIDJyZW0pXHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlYWRlci1oZWlnaHQpICsgMXJlbSlcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyX2ltZyB7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlcl9pbWcgaW1nIHtcclxuICAgICAgICB3aWR0aDogNDVweFxyXG4gICAgfVxyXG5cclxuICAgIC5sLW5hdmJhciB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMCAwXHJcbiAgICB9XHJcblxyXG4gICAgLnNob3cge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLW5hdi13aWR0aCkgKyAxNTZweClcclxuICAgIH1cclxuXHJcbiAgICAuYm9keS1wZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLW5hdi13aWR0aCkgKyAxODhweClcclxuICAgIH1cclxufVxyXG5cclxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBcclxufVxyXG48L3N0eWxlPiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTs7Ozs7QUFDQTs7QUFEQTtBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SideBar.vue?vue&type=template&id=3eca7188\n");

/***/ })

})