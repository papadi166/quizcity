webpackHotUpdate("app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SideBar.vue?vue&type=style&index=0&id=3eca7188&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/SideBar.vue?vue&type=style&index=0&id=3eca7188&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"\\n.sidebar[data-v-3eca7188] {\\r\\n  position: fixed;\\r\\n  background-color: var(--bg-primary);\\r\\n  transition: width 600ms ease;\\r\\n  z-index: 10;\\r\\n  margin-top: 75px;\\n}\\n.sidebar-nav[data-v-3eca7188] {\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n  margin-left: -1rem;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  height: 100%;\\n}\\n.nav-item[data-v-3eca7188] {\\r\\n  width: 100%;\\n}\\n.nav-item[data-v-3eca7188]:last-child {\\r\\n  margin-top: auto;\\n}\\n.nav-link[data-v-3eca7188] {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  height: 5rem;\\r\\n  color: var(--text-primary);\\r\\n  text-decoration: none;\\r\\n  filter: grayscale(100%) opacity(0.7);\\r\\n  transition: var(--transition-speed);\\n}\\n.nav-link[data-v-3eca7188]:hover {\\r\\n  filter: grayscale(0%) opacity(1);\\r\\n  background: var(--bg-secondary);\\r\\n  color: var(--text-secondary);\\n}\\n.link-text[data-v-3eca7188] {\\r\\n  display: none;\\r\\n  margin-left: 2rem;\\n}\\n.nav-link svg[data-v-3eca7188] {\\r\\n  width: 2rem;\\r\\n  min-width: 2rem;\\r\\n  margin: 0 1.5rem;\\n}\\n.fa-primary[data-v-3eca7188] {\\r\\n  color: #ff7eee;\\n}\\n.fa-secondary[data-v-3eca7188] {\\r\\n  color: #df49a6;\\n}\\n.fa-primary[data-v-3eca7188],\\r\\n.fa-secondary[data-v-3eca7188] {\\r\\n  transition: var(--transition-speed);\\n}\\n.logo[data-v-3eca7188] {\\r\\n  font-weight: bold;\\r\\n  text-transform: uppercase;\\r\\n  margin-bottom: 1rem;\\r\\n  text-align: center;\\r\\n  color: var(--text-secondary);\\r\\n  background: var(--bg-secondary);\\r\\n  font-size: 1.5rem;\\r\\n  letter-spacing: 0.3ch;\\r\\n  width: 100%;\\n}\\n.logo svg[data-v-3eca7188] {\\r\\n  transform: rotate(0deg);\\r\\n  transition: var(--transition-speed);\\n}\\n.logo-text[data-v-3eca7188]\\r\\n{\\r\\n  display: inline;\\r\\n  position: absolute;\\r\\n  left: -999px;\\r\\n  transition: var(--transition-speed);\\n}\\n.sidebar:hover .logo svg[data-v-3eca7188] {\\r\\n  transform: rotate(-180deg);\\n}\\r\\n\\r\\n/* Small screens */\\n@media only screen and (max-width: 600px) {\\n.sidebar[data-v-3eca7188] {\\r\\n    bottom: 0;\\r\\n    width: 100vw;\\r\\n    height: 4rem;\\n}\\n.logo[data-v-3eca7188] {\\r\\n    display: none;\\n}\\n.sidebar-nav[data-v-3eca7188] {\\r\\n    flex-direction: row;\\r\\n    margin: 0;\\r\\n    width:25%;\\n}\\n.nav-link[data-v-3eca7188] {\\r\\n    justify-content: center;\\r\\n    height: 4rem;\\r\\n    width:25%;\\n}\\n}\\r\\n\\r\\n/* Large screens */\\n@media only screen and (min-width: 600px) {\\n.sidebar[data-v-3eca7188] {\\r\\n    top: 0;\\r\\n    width: 5rem;\\r\\n    height: 100vh;\\n}\\n.sidebar[data-v-3eca7188]:hover {\\r\\n    width: 16rem;\\n}\\n.sidebar:hover .link-text[data-v-3eca7188] {\\r\\n    display: inline;\\n}\\n.sidebar:hover .logo svg[data-v-3eca7188]\\r\\n  {\\r\\n    margin-left: 11rem;\\n}\\n.sidebar:hover .logo-text[data-v-3eca7188]\\r\\n  {\\r\\n    left: 0px;\\n}\\n}\\n.dark[data-v-3eca7188] {\\r\\n  --text-primary: #b6b6b6;\\r\\n  --text-secondary: #ececec;\\r\\n  --bg-primary: #23232e;\\r\\n  --bg-secondary: #141418;\\n}\\n.light[data-v-3eca7188] {\\r\\n  --text-primary: #1f1f1f;\\r\\n  --text-secondary: #000000;\\r\\n  --bg-primary: #ffffff;\\r\\n  --bg-secondary: #e4e4e4;\\n}\\n.solar[data-v-3eca7188] {\\r\\n  --text-primary: #576e75;\\r\\n  --text-secondary: #35535c;\\r\\n  --bg-primary: #fdf6e3;\\r\\n  --bg-secondary: #f5e5b8;\\n}\\n.theme-icon[data-v-3eca7188] {\\r\\n  display: none;\\n}\\n.dark #darkIcon[data-v-3eca7188] {\\r\\n  display: block;\\n}\\n.light #lightIcon[data-v-3eca7188] {\\r\\n  display: block;\\n}\\n.solar #solarIcon[data-v-3eca7188] {\\r\\n  display: block;\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvU2lkZUJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZWNhNzE4OCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIudnVlP2E1ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5zaWRlYmFyW2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctcHJpbWFyeSk7XFxyXFxuICB0cmFuc2l0aW9uOiB3aWR0aCA2MDBtcyBlYXNlO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuICBtYXJnaW4tdG9wOiA3NXB4O1xcbn1cXG4uc2lkZWJhci1uYXZbZGF0YS12LTNlY2E3MTg4XSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLm5hdi1pdGVtW2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5uYXYtaXRlbVtkYXRhLXYtM2VjYTcxODhdOmxhc3QtY2hpbGQge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuLm5hdi1saW5rW2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIG9wYWNpdHkoMC43KTtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tc3BlZWQpO1xcbn1cXG4ubmF2LWxpbmtbZGF0YS12LTNlY2E3MTg4XTpob3ZlciB7XFxyXFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgwJSkgb3BhY2l0eSgxKTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xcbn1cXG4ubGluay10ZXh0W2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG4ubmF2LWxpbmsgc3ZnW2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBtaW4td2lkdGg6IDJyZW07XFxyXFxuICBtYXJnaW46IDAgMS41cmVtO1xcbn1cXG4uZmEtcHJpbWFyeVtkYXRhLXYtM2VjYTcxODhdIHtcXHJcXG4gIGNvbG9yOiAjZmY3ZWVlO1xcbn1cXG4uZmEtc2Vjb25kYXJ5W2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgY29sb3I6ICNkZjQ5YTY7XFxufVxcbi5mYS1wcmltYXJ5W2RhdGEtdi0zZWNhNzE4OF0sXFxyXFxuLmZhLXNlY29uZGFyeVtkYXRhLXYtM2VjYTcxODhdIHtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tc3BlZWQpO1xcbn1cXG4ubG9nb1tkYXRhLXYtM2VjYTcxODhdIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctc2Vjb25kYXJ5KTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM2NoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5sb2dvIHN2Z1tkYXRhLXYtM2VjYTcxODhdIHtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCk7XFxufVxcbi5sb2dvLXRleHRbZGF0YS12LTNlY2E3MTg4XVxcclxcbntcXHJcXG4gIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IC05OTlweDtcXHJcXG4gIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24tc3BlZWQpO1xcbn1cXG4uc2lkZWJhcjpob3ZlciAubG9nbyBzdmdbZGF0YS12LTNlY2E3MTg4XSB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcXG59XFxyXFxuXFxyXFxuLyogU21hbGwgc2NyZWVucyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4uc2lkZWJhcltkYXRhLXYtM2VjYTcxODhdIHtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogNHJlbTtcXG59XFxuLmxvZ29bZGF0YS12LTNlY2E3MTg4XSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5zaWRlYmFyLW5hdltkYXRhLXYtM2VjYTcxODhdIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICB3aWR0aDoyNSU7XFxufVxcbi5uYXYtbGlua1tkYXRhLXYtM2VjYTcxODhdIHtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogNHJlbTtcXHJcXG4gICAgd2lkdGg6MjUlO1xcbn1cXG59XFxyXFxuXFxyXFxuLyogTGFyZ2Ugc2NyZWVucyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcXG4uc2lkZWJhcltkYXRhLXYtM2VjYTcxODhdIHtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLnNpZGViYXJbZGF0YS12LTNlY2E3MTg4XTpob3ZlciB7XFxyXFxuICAgIHdpZHRoOiAxNnJlbTtcXG59XFxuLnNpZGViYXI6aG92ZXIgLmxpbmstdGV4dFtkYXRhLXYtM2VjYTcxODhdIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG4uc2lkZWJhcjpob3ZlciAubG9nbyBzdmdbZGF0YS12LTNlY2E3MTg4XVxcclxcbiAge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTFyZW07XFxufVxcbi5zaWRlYmFyOmhvdmVyIC5sb2dvLXRleHRbZGF0YS12LTNlY2E3MTg4XVxcclxcbiAge1xcclxcbiAgICBsZWZ0OiAwcHg7XFxufVxcbn1cXG4uZGFya1tkYXRhLXYtM2VjYTcxODhdIHtcXHJcXG4gIC0tdGV4dC1wcmltYXJ5OiAjYjZiNmI2O1xcclxcbiAgLS10ZXh0LXNlY29uZGFyeTogI2VjZWNlYztcXHJcXG4gIC0tYmctcHJpbWFyeTogIzIzMjMyZTtcXHJcXG4gIC0tYmctc2Vjb25kYXJ5OiAjMTQxNDE4O1xcbn1cXG4ubGlnaHRbZGF0YS12LTNlY2E3MTg4XSB7XFxyXFxuICAtLXRleHQtcHJpbWFyeTogIzFmMWYxZjtcXHJcXG4gIC0tdGV4dC1zZWNvbmRhcnk6ICMwMDAwMDA7XFxyXFxuICAtLWJnLXByaW1hcnk6ICNmZmZmZmY7XFxyXFxuICAtLWJnLXNlY29uZGFyeTogI2U0ZTRlNDtcXG59XFxuLnNvbGFyW2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgLS10ZXh0LXByaW1hcnk6ICM1NzZlNzU7XFxyXFxuICAtLXRleHQtc2Vjb25kYXJ5OiAjMzU1MzVjO1xcclxcbiAgLS1iZy1wcmltYXJ5OiAjZmRmNmUzO1xcclxcbiAgLS1iZy1zZWNvbmRhcnk6ICNmNWU1Yjg7XFxufVxcbi50aGVtZS1pY29uW2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmRhcmsgI2RhcmtJY29uW2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5saWdodCAjbGlnaHRJY29uW2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5zb2xhciAjc29sYXJJY29uW2RhdGEtdi0zZWNhNzE4OF0ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcclxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/SideBar.vue?vue&type=style&index=0&id=3eca7188&scoped=true&lang=css\n");

/***/ })

})