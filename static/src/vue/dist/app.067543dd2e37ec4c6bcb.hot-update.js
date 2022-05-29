webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Navbar.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/components/Navbar.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/store.js */ \"./store/store.js\");\n/* harmony import */ var _src_components_Searchbar_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/Searchbar.vue */ \"./src/components/Searchbar.vue\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.esm.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Navbar',\n  components: {\n    SearchBar: _src_components_Searchbar_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  props: {\n    msg: String\n  },\n  methods: {\n    toggleNavbar: function toggleNavbar() {\n      var menuToggle = document.getElementById('navbarSupportedContent');\n      var bsCollapse = new bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"bootstrap\"].Collapse(menuToggle);\n      var toglebtn = document.getElementById(\"toggleBtn\");\n      toglebtn.addEventListener(\"click\", function () {\n        bsCollapse.toggle();\n      });\n      navLinks.forEach(function (l) {\n        l.addEventListener('click', function () {\n          bsCollapse.toggle();\n        });\n      });\n    },\n    logout: function logout() {\n      window.location.href = \"http://10.10.10.23:8001/\" + \"accounts/logout\";\n    },\n    login: function login() {\n      window.location.href = \"http://10.10.10.23:8001/\" + \"accounts/login/\";\n    },\n    goToProfile: function goToProfile() {\n      if (!_store_store_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.username) this.login(); //this.$router.push('/accounts/login')\n      else this.$router.push('/profile/');\n    },\n    searching: function searching() {\n      var searchInput = document.getElementById(\"search-autocomplete\");\n\n      if (window.innerWidth < 992) {\n        _store_store_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.searching = !_store_store_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.searching;\n\n        if (_store_store_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.searching === true) {\n          searchInput.style.width = \"500px\";\n        } else {\n          searchInput.classList.add(\"d-none\");\n          searchInput.style.width = \"240px\";\n        }\n      }\n    }\n  },\n  mounted: function mounted() {\n    _store_store_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.modalConfirm = true;\n    fetch(\"http://10.10.10.23:8001/\" + \"api/user/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return _store_store_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].state.username = data.username;\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi9zcmMvY29tcG9uZW50cy9OYXZiYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLnZ1ZT9kMTc4Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXY+XG4gIFxuICA8IS0tIE5hdmJhciAgLS0+IFxuICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0IHBvc2l0aW9uLWZpeGVkIGZpeGVkLXRvcFwiIGlkPVwibmF2YmFyLXRvcFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgIDwhLS0gTmF2YmFyIFRvZ2dsZXIgIC0tPiBcbiAgICAgICA8YnV0dG9uXG4gICAgICAgdi1pZj1cIiEkc3RvcmUuc3RhdGUuc2VhcmNoaW5nXCJcbiAgICAgICBpZD1cInRvZ2dsZUJ0blwiXG4gICAgICAgIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXG4gICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8IS0tIE5hdmJhciBzZWFyY2ggaGlkZXIgLS0+IFxuICAgICAgPGJ1dHRvblxuICAgICAgQGNsaWNrPVwic2VhcmNoaW5nXCJcbiAgICAgICB2LWlmPVwiJHN0b3JlLnN0YXRlLnNlYXJjaGluZ1wiXG4gICAgICAgIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgID5cbiAgICAgICAgIDxmb250LWF3ZXNvbWUtaWNvbiA6aWNvbj1cIlsnZmEnLCAnYW5nbGVzLXJpZ2h0J11cIiBzaXplPVwibGdcIiAvPlxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIFxuICAgICAgPGEgdi1pZj1cIiEkc3RvcmUuc3RhdGUuc2VhcmNoaW5nXCIgY2xhc3M9XCJuYXZiYXItYnJhbmQgbWUtYXV0byBkLWxnLW5vbmVcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxNXB4O1wiIGhyZWY9XCIjXCI+e3t0aGlzLiRyb3V0ZS5uYW1lfX08L2E+XG4gICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZCBkLWxnLWZsZXggZC1ub25lXCIgaHJlZj1cIiNcIj5RdWl6IENpdHk8L2E+XG5cbiAgICAgIFxuICAgICAgICA8U2VhcmNoQmFyIGNsYXNzPVwib3JkZXItbGctMVwiPjwvU2VhcmNoQmFyPlxuICAgIFxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XG4gICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXYgbWUtYXV0byBtYi0yIG1iLWxnLTBcIj5cbiAgICAgICAgICBcbiAgICAgICAgICA8IS0tIEhvbWUtLT5cbiAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnSG9tZScgfVwiIGNsYXNzPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkhvbWU8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgPCEtLSBBZGQgUXVpeiAtLT5cbiAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnQWRkUXVpeicgfVwiIGNsYXNzPVwibmF2YmFyLWl0ZW1cIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCIgaHJlZj1cIiNcIj5BZGRRdWl6PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgIDwhLS0gRmVhdHVyZXMgLS0+XG4gICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ0ZlYXR1cmVzJyB9XCIgY2xhc3M9XCJuYXZiYXItaXRlbVwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGFyaWEtY3VycmVudD1cInBhZ2VcIiBocmVmPVwiI1wiPkZlYXR1cmVzPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3JvdXRlci1saW5rPlxuXG4gICAgICAgICAgXG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzcGFuIHYtaWY9XCIhJHN0b3JlLnN0YXRlLnNlYXJjaGluZ1wiID4gVG9rZW5zIDwvc3Bhbj5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25hdj5cblxuICBcblxuICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1saWdodCBiZy1saWdodCBmaXhlZC1ib3R0b20gZC1sZy1ub25lIFwiIGlkPVwibmF2YmFyLWJvdHRvbVwiPlxuICAgIDx1bCBjbGFzcz1cIm5hdiBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBkLTNcIiBzdHlsZT1cIndpZHRoOiAxMDAlXCI+XG4gICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ0hvbWUnIH1cIiBjbGFzcz1cIm5hdi1pdGVtIGJ0blwiPlxuICAgICAgPGJ1dHRvbiA+XG4gICAgICAgXG4gICAgICAgIFxuICAgICAgICAgPGZvbnQtYXdlc29tZS1pY29uIDppY29uPVwiWydmYScsICdob3VzZSddXCIgc2l6ZT1cImxnXCIgLz5cbiAgICAgICAgICBcbiAgICAgIDwvYnV0dG9uPlxuICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdOb3RpZmljYXRpb25zJyB9XCIgY2xhc3M9XCJuYXYtaXRlbSBidG5cIj5cbiAgICAgICA8YnV0dG9uID5cbiAgICAgICAgIFxuICAgICAgICA8Zm9udC1hd2Vzb21lLWljb24gOmljb249XCJbJ2ZhcicsICdiZWxsJ11cIiBzaXplPVwibGdcIiAvPlxuICAgICAgICAgICBcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICBcblxuICAgICAgIDxidXR0b24gQGNsaWNrPVwiZ29Ub1Byb2ZpbGVcIiBjbGFzcz1cIm5hdi1pdGVtIGJ0blwiID5cbiAgICAgICAgICBcbiAgICAgICAgPGZvbnQtYXdlc29tZS1pY29uIDppY29uPVwiWydmYXInLCAndXNlciddXCIgc2l6ZT1cImxnXCIgLz5cbiAgICAgICAgICAgICAgIFxuICAgICAgPC9idXR0b24+XG5cblxuXG5cbiAgICA8L3VsPlxuICA8L25hdj5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZS5qcydcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaGJhci52dWVcIlxuaW1wb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSAnYm9vdHN0cmFwJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ05hdmJhcicsXG4gIGNvbXBvbmVudHM6IHsgXG4gICAgU2VhcmNoQmFyLFxuICB9LFxuXG4gIHByb3BzOiB7XG4gICAgbXNnOiBTdHJpbmdcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHRvZ2dsZU5hdmJhcigpIHtcbiAgICAgIGNvbnN0IG1lbnVUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2YmFyU3VwcG9ydGVkQ29udGVudCcpXG4gICAgICBjb25zdCBic0NvbGxhcHNlID0gbmV3IGJvb3RzdHJhcC5Db2xsYXBzZShtZW51VG9nZ2xlKVxuICAgICAgY29uc3QgdG9nbGVidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZUJ0blwiKVxuICAgICAgdG9nbGVidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4geyBic0NvbGxhcHNlLnRvZ2dsZSgpIH0pXG4gICAgICBuYXZMaW5rcy5mb3JFYWNoKChsKSA9PiB7XG4gICAgICAgIGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGJzQ29sbGFwc2UudG9nZ2xlKCkgfSlcbiAgICAgIH0pXG4gICAgfSxcbiAgICBsb2dvdXQoKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBcImFjY291bnRzL2xvZ291dFwiXG4gICAgfSxcbiAgICBsb2dpbigpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwiYWNjb3VudHMvbG9naW4vXCJcbiAgICB9LFxuICAgIGdvVG9Qcm9maWxlKCkge1xuICAgICAgaWYgKCFzdG9yZS5zdGF0ZS51c2VybmFtZSkgIHRoaXMubG9naW4oKSAvL3RoaXMuJHJvdXRlci5wdXNoKCcvYWNjb3VudHMvbG9naW4nKVxuICAgICAgZWxzZSB0aGlzLiRyb3V0ZXIucHVzaCgnL3Byb2ZpbGUvJylcbiAgICB9LFxuICAgICBzZWFyY2hpbmcoKSB7XG4gICAgICBcbiAgICAgIGxldCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWF1dG9jb21wbGV0ZVwiKVxuICAgICAgXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA5OTIgKSB7XG4gICAgICAgIHN0b3JlLnN0YXRlLnNlYXJjaGluZyA9ICFzdG9yZS5zdGF0ZS5zZWFyY2hpbmdcbiAgICAgICAgaWYoc3RvcmUuc3RhdGUuc2VhcmNoaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgc2VhcmNoSW5wdXQuc3R5bGUud2lkdGggPSBcIjUwMHB4XCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpXG4gICAgICAgICAgc2VhcmNoSW5wdXQuc3R5bGUud2lkdGggPSBcIjI0MHB4XCJcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cbiAgICAgfSxcbiAgfSxcbiBtb3VudGVkKCkge1xuICAgIHN0b3JlLnN0YXRlLm1vZGFsQ29uZmlybSA9IHRydWVcbiAgICBmZXRjaChwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgXCJhcGkvdXNlci9cIilcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gKHN0b3JlLnN0YXRlLnVzZXJuYW1lID0gZGF0YS51c2VybmFtZSkpXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKTtcbiAgfSxcblxuICAgIFxufVxuPC9zY3JpcHQ+XG5cbjwhLS0gQWRkIFwic2NvcGVkXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxuPHN0eWxlIHNjb3BlZD5cbi5idG4ge1xuICB3aWR0aDogMzMlO1xufVxuXG5cbmEge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgXG59XG5hOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOjVtcztcbn1cbm5hdiBsaTpob3ZlcixcbiBuYXYgbGkucm91dGVyLWxpbmstYWN0aXZlLFxuIG5hdiBsaS5yb3V0ZXItbGluay1leGFjdC1hY3RpdmUge1xuICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI3LCAxMDcsIDI1NSk7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG4gICBjb2xvcjogd2hpdGU7XG4gICB0cmFuc2l0aW9uOjVtcztcbiB9XG4gXG4gI3VzZXI6aG92ZXIgPiAuZHJvcGRvd24tbWVudSB7XG4gICBkaXNwbGF5OiBibG9jaztcbiAgIFxuIH1cblxuXG5cbmxpIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbjwvc3R5bGU+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUEyR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFwQ0E7QUFzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFyREEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/components/Navbar.vue?vue&type=script&lang=js\n");

/***/ })

})