webpackHotUpdate("app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SideBar.vue?vue&type=style&index=0&id=3eca7188&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/SideBar.vue?vue&type=style&index=0&id=3eca7188&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.sidebar[data-v-3eca7188] {\\r\\n  position: fixed;\\r\\n  background-color: var(--bg-primary);\\r\\n  transition: width 600ms ease;\\r\\n  z-index: 10;\\r\\n  margin-top: 75px;\\n}\\n.sidebar-nav[data-v-3eca7188] {\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n  margin-left: -1rem;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  height: 90%;\\n}\\n.nav-item[data-v-3eca7188] {\\r\\n  width: 100%;\\n}\\n.nav-item[data-v-3eca7188]:last-child {\\r\\n  margin-top: auto;\\n}\\n.nav-link[data-v-3eca7188] {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  height: 5rem;\\r\\n  color: var(--text-primary);\\r\\n  text-decoration: none;\\r\\n  filter: grayscale(100%) opacity(0.7);\\r\\n  transition: var(--transition-speed);\\n}\\n.nav-link[data-v-3eca7188]:hover {\\r\\n  filter: grayscale(0%) opacity(1);\\r\\n  background: var(--bg-secondary);\\r\\n  color: var(--text-secondary);\\n}\\n.link-text[data-v-3eca7188] {\\r\\n  display: none;\\r\\n  margin-left: 2rem;\\n}\\n.nav-link svg[data-v-3eca7188] {\\r\\n  width: 2rem;\\r\\n  min-width: 2rem;\\r\\n  margin: 0 1.5rem;\\n}\\n.fa-primary[data-v-3eca7188] {\\r\\n  color: #ff7eee;\\n}\\n.fa-secondary[data-v-3eca7188] {\\r\\n  color: #df49a6;\\n}\\n.fa-primary[data-v-3eca7188],\\r\\n.fa-secondary[data-v-3eca7188] {\\r\\n  transition: var(--transition-speed);\\n}\\n.logo[data-v-3eca7188] {\\r\\n  font-weight: bold;\\r\\n  text-transform: uppercase;\\r\\n  margin-bottom: 1rem;\\r\\n  text-align: center;\\r\\n  color: var(--text-secondary);\\r\\n  background: var(--bg-secondary);\\r\\n  font-size: 1.5rem;\\r\\n  letter-spacing: 0.3ch;\\r\\n  width: 100%;\\n}\\n.logo svg[data-v-3eca7188] {\\r\\n  transform: rotate(0deg);\\r\\n  transition: var(--transition-speed);\\n}\\n.logo-text[data-v-3eca7188]\\r\\n{\\r\\n  display: inline;\\r\\n  position: absolute;\\r\\n  left: -999px;\\r\\n  transition: var(--transition-speed);\\n}\\n.sidebar:hover .logo svg[data-v-3eca7188] {\\r\\n  transform: rotate(-180deg);\\n}\\n.sidebar[data-v-3eca7188] {\\r\\n  top: 0;\\r\\n  width: 5rem;\\r\\n  height: 100vh;\\n}\\r\\n\\r\\n/* Small screens */\\n@media only screen and (max-width: 991.5px) {\\n.sidebar[data-v-3eca7188] {\\r\\n    width: 16rem;\\r\\n    visibility: hidden;\\n}\\n.sidebar.link-text[data-v-3eca7188] {\\r\\n    display: inline;\\n}\\n.sidebar .logo svg[data-v-3eca7188]\\r\\n  {\\r\\n    margin-left: 11rem;\\n}\\n.sidebar .logo-text[data-v-3eca7188]\\r\\n  {\\r\\n    left: 0px;\\n}\\n.link-text[data-v-3eca7188] {\\r\\n    display: flex;\\r\\n    margin-left: 2rem;\\n}\\n}\\r\\n\\r\\n/* Large screens */\\r\\n\\r\\n\\r\\n\\r\\n/* Large screens */\\n@media only screen and (min-width: 600px) {\\n.sidebar[data-v-3eca7188]:hover {\\r\\n    width: 16rem;\\n}\\n.sidebar:hover .link-text[data-v-3eca7188] {\\r\\n    display: inline;\\n}\\n.sidebar:hover .logo svg[data-v-3eca7188]\\r\\n  {\\r\\n    margin-left: 11rem;\\n}\\n.sidebar:hover .logo-text[data-v-3eca7188]\\r\\n  {\\r\\n    left: 0px;\\n}\\n.logo svg[data-v-3eca7188] {\\r\\n  transition: var(--transition-speed);\\n}\\n.logo-text[data-v-3eca7188]\\r\\n{\\r\\n  transition: var(--transition-speed);\\n}\\n}\\n.dark[data-v-3eca7188] {\\r\\n  --text-primary: #b6b6b6;\\r\\n  --text-secondary: #ececec;\\r\\n  --bg-primary: #23232e;\\r\\n  --bg-secondary: #141418;\\n}\\n.light[data-v-3eca7188] {\\r\\n  --text-primary: #1f1f1f;\\r\\n  --text-secondary: #000000;\\r\\n  --bg-primary: #ffffff;\\r\\n  --bg-secondary: #e4e4e4;\\n}\\n.solar[data-v-3eca7188] {\\r\\n  --text-primary: #576e75;\\r\\n  --text-secondary: #35535c;\\r\\n  --bg-primary: #fdf6e3;\\r\\n  --bg-secondary: #f5e5b8;\\n}\\n.theme-icon[data-v-3eca7188] {\\r\\n  display: none;\\n}\\n.dark #darkIcon[data-v-3eca7188] {\\r\\n  display: block;\\n}\\n.light #lightIcon[data-v-3eca7188] {\\r\\n  display: block;\\n}\\n.solar #solarIcon[data-v-3eca7188] {\\r\\n  display: block;\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvU2lkZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZWNhNzE4OCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIudnVlP2E1ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5zaWRlYmFyW2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctcHJpbWFyeSk7XFxyXFxuICB0cmFuc2l0aW9uOiB3aWR0aCA2MDBtcyBlYXNlO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBtYXJnaW4tdG9wOiA3NXB4O1xcbn1cXG4uc2lkZWJhci1uYXZbZGF0YS12LTNlY2E3MTg4XSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogOTAlO1xcbn1cXG4ubmF2LWl0ZW1bZGF0YS12LTNlY2E3MTg4XSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm5hdi1pdGVtW2RhdGEtdi0zZWNhNzE4OF06bGFzdC1jaGlsZCB7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG4ubmF2LWxpbmtbZGF0YS12LTNlY2E3MTg4XSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogNXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgb3BhY2l0eSgwLjcpO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCk7XFxufVxcbi5uYXYtbGlua1tkYXRhLXYtM2VjYTcxODhdOmhvdmVyIHtcXHJcXG4gIGZpbHRlcjogZ3JheXNjYWxlKDAlKSBvcGFjaXR5KDEpO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XFxufVxcbi5saW5rLXRleHRbZGF0YS12LTNlY2E3MTg4XSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XFxufVxcbi5uYXYtbGluayBzdmdbZGF0YS12LTNlY2E3MTg4XSB7XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIG1pbi13aWR0aDogMnJlbTtcXHJcXG4gIG1hcmdpbjogMCAxLjVyZW07XFxufVxcbi5mYS1wcmltYXJ5W2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgY29sb3I6ICNmZjdlZWU7XFxufVxcbi5mYS1zZWNvbmRhcnlbZGF0YS12LTNlY2E3MTg4XSB7XFxyXFxuICBjb2xvcjogI2RmNDlhNjtcXG59XFxuLmZhLXByaW1hcnlbZGF0YS12LTNlY2E3MTg4XSxcXHJcXG4uZmEtc2Vjb25kYXJ5W2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCk7XFxufVxcbi5sb2dvW2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4zY2g7XFxyXFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmxvZ28gc3ZnW2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxyXFxuICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKTtcXG59XFxuLmxvZ28tdGV4dFtkYXRhLXYtM2VjYTcxODhdXFxyXFxue1xcclxcbiAgZGlzcGxheTogaW5saW5lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgbGVmdDogLTk5OXB4O1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCk7XFxufVxcbi5zaWRlYmFyOmhvdmVyIC5sb2dvIHN2Z1tkYXRhLXYtM2VjYTcxODhdIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xcbn1cXG4uc2lkZWJhcltkYXRhLXYtM2VjYTcxODhdIHtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHdpZHRoOiA1cmVtO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxyXFxuXFxyXFxuLyogU21hbGwgc2NyZWVucyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxLjVweCkge1xcbi5zaWRlYmFyW2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgICB3aWR0aDogMTZyZW07XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLnNpZGViYXIubGluay10ZXh0W2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5zaWRlYmFyIC5sb2dvIHN2Z1tkYXRhLXYtM2VjYTcxODhdXFxyXFxuICB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMXJlbTtcXG59XFxuLnNpZGViYXIgLmxvZ28tdGV4dFtkYXRhLXYtM2VjYTcxODhdXFxyXFxuICB7XFxyXFxuICAgIGxlZnQ6IDBweDtcXG59XFxuLmxpbmstdGV4dFtkYXRhLXYtM2VjYTcxODhdIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XFxufVxcbn1cXHJcXG5cXHJcXG4vKiBMYXJnZSBzY3JlZW5zICovXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogTGFyZ2Ugc2NyZWVucyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4uc2lkZWJhcltkYXRhLXYtM2VjYTcxODhdOmhvdmVyIHtcXHJcXG4gICAgd2lkdGg6IDE2cmVtO1xcbn1cXG4uc2lkZWJhcjpob3ZlciAubGluay10ZXh0W2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5zaWRlYmFyOmhvdmVyIC5sb2dvIHN2Z1tkYXRhLXYtM2VjYTcxODhdXFxyXFxuICB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMXJlbTtcXG59XFxuLnNpZGViYXI6aG92ZXIgLmxvZ28tdGV4dFtkYXRhLXYtM2VjYTcxODhdXFxyXFxuICB7XFxyXFxuICAgIGxlZnQ6IDBweDtcXG59XFxuLmxvZ28gc3ZnW2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCk7XFxufVxcbi5sb2dvLXRleHRbZGF0YS12LTNlY2E3MTg4XVxcclxcbntcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tc3BlZWQpO1xcbn1cXG59XFxuLmRhcmtbZGF0YS12LTNlY2E3MTg4XSB7XFxyXFxuICAtLXRleHQtcHJpbWFyeTogI2I2YjZiNjtcXHJcXG4gIC0tdGV4dC1zZWNvbmRhcnk6ICNlY2VjZWM7XFxyXFxuICAtLWJnLXByaW1hcnk6ICMyMzIzMmU7XFxyXFxuICAtLWJnLXNlY29uZGFyeTogIzE0MTQxODtcXG59XFxuLmxpZ2h0W2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgLS10ZXh0LXByaW1hcnk6ICMxZjFmMWY7XFxyXFxuICAtLXRleHQtc2Vjb25kYXJ5OiAjMDAwMDAwO1xcclxcbiAgLS1iZy1wcmltYXJ5OiAjZmZmZmZmO1xcclxcbiAgLS1iZy1zZWNvbmRhcnk6ICNlNGU0ZTQ7XFxufVxcbi5zb2xhcltkYXRhLXYtM2VjYTcxODhdIHtcXHJcXG4gIC0tdGV4dC1wcmltYXJ5OiAjNTc2ZTc1O1xcclxcbiAgLS10ZXh0LXNlY29uZGFyeTogIzM1NTM1YztcXHJcXG4gIC0tYmctcHJpbWFyeTogI2ZkZjZlMztcXHJcXG4gIC0tYmctc2Vjb25kYXJ5OiAjZjVlNWI4O1xcbn1cXG4udGhlbWUtaWNvbltkYXRhLXYtM2VjYTcxODhdIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5kYXJrICNkYXJrSWNvbltkYXRhLXYtM2VjYTcxODhdIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4ubGlnaHQgI2xpZ2h0SWNvbltkYXRhLXYtM2VjYTcxODhdIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uc29sYXIgI3NvbGFySWNvbltkYXRhLXYtM2VjYTcxODhdIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXHJcXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SideBar.vue?vue&type=style&index=0&id=3eca7188&scoped=true&lang=css\n");

/***/ })

})