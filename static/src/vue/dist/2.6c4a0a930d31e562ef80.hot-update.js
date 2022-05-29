webpackHotUpdate(2,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/accounts/Friends.vue?vue&type=template&id=47498e5b":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/accounts/Friends.vue?vue&type=template&id=47498e5b ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nvar _hoisted_1 = {\n  key: 0\n};\n\nvar _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h1\", null, \"Your Friends\", -1\n/* HOISTED */\n);\n\nvar _hoisted_3 = {\n  class: \"container\"\n};\nvar _hoisted_4 = [\"onClick\"];\n\nvar _hoisted_5 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"br\", null, null, -1\n/* HOISTED */\n);\n\nvar _hoisted_6 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"a\", null, \"All users\", -1\n/* HOISTED */\n);\n\nvar _hoisted_7 = {\n  class: \"container\",\n  style: {\n    \"border\": \"1px solid\"\n  }\n};\nvar _hoisted_8 = [\"href\"];\n\nvar _hoisted_9 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"h2\", null, \"Friend Requests\", -1\n/* HOISTED */\n);\n\nvar _hoisted_10 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])();\n\nvar _hoisted_11 = [\"href\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", null, [$props.quiz_to_invite_name != null ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"strong\", _hoisted_1, \"Quiz to invite: \" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($props.quiz_to_invite_name), 1\n  /* TEXT */\n  )) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true), _hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_3, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])(_ctx.$store.state.user.friends, function (friend) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", {\n      key: friend\n    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(friend.username) + \" \", 1\n    /* TEXT */\n    ), $props.quiz_to_invite_name != null ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"button\", {\n      key: 0,\n      onClick: function onClick($event) {\n        return $options.inviteToGame(friend);\n      },\n      class: \"btn btn-outline-secondary\"\n    }, \"Invite to game\", 8\n    /* PROPS */\n    , _hoisted_4)) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))]), _hoisted_5, _hoisted_6, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_7, [(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])(this.users, function (user) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", {\n      key: user.id\n    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(user.username) + \" \", 1\n    /* TEXT */\n    ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"a\", {\n      href: \"/api/send_friend_request/\".concat(user.id)\n    }, \"Invite to friends\", 8\n    /* PROPS */\n    , _hoisted_8)]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))]), _hoisted_9, (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(vue__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderList\"])($data.friend_requests, function (request) {\n    return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", {\n      key: request.id\n    }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"p\", null, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"span\", null, \"From user:\" + Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])(request.from_user), 1\n    /* TEXT */\n    )]), _hoisted_10, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"a\", {\n      href: \"/api/accept_friend_request/\".concat(request.id)\n    }, \"Accept friend request\", 8\n    /* PROPS */\n    , _hoisted_11)]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  ))]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXItdjE2L2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9hY2NvdW50cy9GcmllbmRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzQ5OGU1Yi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3ZpZXdzL2FjY291bnRzL0ZyaWVuZHMudnVlPzY3Y2QiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICAgIDxzdHJvbmcgdi1pZj1cInF1aXpfdG9faW52aXRlX25hbWUgIT0gbnVsbFwiPlF1aXogdG8gaW52aXRlOiB7e3F1aXpfdG9faW52aXRlX25hbWV9fTwvc3Ryb25nPlxyXG4gICAgICA8aDE+WW91ciBGcmllbmRzPC9oMT5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiB2LWZvcj1cImZyaWVuZCBpbiAkc3RvcmUuc3RhdGUudXNlci5mcmllbmRzXCIgOmtleT1cImZyaWVuZFwiPlxyXG4gICAgICAgICAgICAgIHt7ZnJpZW5kLnVzZXJuYW1lfX0gPGJ1dHRvbiB2LWlmPVwicXVpel90b19pbnZpdGVfbmFtZSAhPSBudWxsXCIgQGNsaWNrPVwiaW52aXRlVG9HYW1lKGZyaWVuZClcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5JbnZpdGUgdG8gZ2FtZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGJyPlxyXG4gICAgPGE+QWxsIHVzZXJzPC9hPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIHN0eWxlPVwiYm9yZGVyOiAxcHggc29saWQ7XCI+XHJcbiAgICAgICAgICA8ZGl2IHYtZm9yPVwidXNlciBpbiB0aGlzLnVzZXJzXCIgOmtleT1cInVzZXIuaWRcIj5cclxuICAgICAgICAgICAgICB7e3VzZXIudXNlcm5hbWV9fSA8YSA6aHJlZj1cImAvYXBpL3NlbmRfZnJpZW5kX3JlcXVlc3QvJHt1c2VyLmlkfWBcIj5JbnZpdGUgdG8gZnJpZW5kczwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGgyPkZyaWVuZCBSZXF1ZXN0czwvaDI+XHJcbiAgICA8ZGl2IHYtZm9yPVwicmVxdWVzdCBpbiBmcmllbmRfcmVxdWVzdHNcIiA6a2V5PVwicmVxdWVzdC5pZFwiPlxyXG4gICAgICAgPHA+PHNwYW4+RnJvbSB1c2VyOnt7cmVxdWVzdC5mcm9tX3VzZXJ9fTwvc3Bhbj48L3A+IDxhIDpocmVmPVwiYC9hcGkvYWNjZXB0X2ZyaWVuZF9yZXF1ZXN0LyR7cmVxdWVzdC5pZH1gXCI+QWNjZXB0IGZyaWVuZCByZXF1ZXN0PC9hPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHtnZXRDb29raWV9IGZyb20gJy4uLy4uL3NyYy9hc3NldHMvZ2V0Q29va2llLmpzJztcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ0ZyaWVuZHMnLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBxdWl6X3RvX2ludml0ZV9uYW1lOiBudWxsLFxyXG4gICAgICAgIHF1aXpfdG9faW52aXRlX2lkOiBudWxsLFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdXNlcnM6IFtdLFxyXG4gICAgICAgICAgICBmcmllbmRfcmVxdWVzdHM6IFtdLFxyXG4gICAgICAgICAgICB0aW1lcjogbnVsbCxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgZmV0Y2gocHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwiYXBpL3VzZXJzL1wiKVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAudGhlbigoZGF0YSkgPT4gKHRoaXMudXNlcnMgPSBkYXRhKSlcclxuICAgICAgICAgLnRoZW4oKGRhdGEpID0+ICh0aGlzLmZyaWVuZF9yZXF1ZXN0cyA9IGRhdGEuZnJpZW5kX3JlcXVlc3RfdG8pKVxyXG4gICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKTtcclxuXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAgIGdldENvb2tpZSxcclxuICAgICAgaW52aXRlVG9HYW1lKG9wcG9uZW50KSB7XHJcbiAgICAgICAgICBpZiAodGhpcy50aW1lciAhPSBudWxsKSBjb25zb2xlLmxvZyAoXCJ5b3UgY2FuJ3QgZG8gdGhpcyBub3dcIilcclxuICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUdhbWUob3Bwb25lbnQpXHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHsoY29uc29sZS5sb2coYGludml0YXRpb24gc2VudCB0byAke29wcG9uZW50fWAsIHRoaXMudGltZXIgPSBudWxsICkpfSwgNTAwMClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFRPRE86IDEuIGNyZWF0ZSBpbnZpdGF0aW9uIGluIGRiIC0gYmFja2VuZCwgXHJcbiAgICAgICAgICAvLyBUT0RPOiAyLiBsb2FkIGludml0YXRpb24gYXMgbm90aWZpY2F0aW9uIGluIGxlZnQgcGFuZWwgYW5kIGJvdHRvbXBhbmVsIC0gZnJvbnRlbmQsIFxyXG4gICAgICAgICAgLy8gVE9ETzogMy4gaWYgaW52aXRhdGlvbiBleGlzdHMgZGVsZXRlIG9sZCBhbmQgY3JlYXRlIG5ldyAtIGJhY2tlbmQgKyAobWluIHRpbWUgdG8gaW52aXRlIGFnYWluOiA1IHNlYyksIGJ1dHRvbiBzaWx2ZXItIGZyb250ZW5kXHJcbiAgICAgICAgICAvLyBUT0RPOiA0LiBpZiByZWNpZXZlciBhY2NlcHRlZCBhbmQgc2VuZGVyIHN0YXR1czogd2FpdGluZyBvciBhY2NlcHRlZDogY3JlYXRlIGdhbWUgaW4gZGF0YWJhc2UgYW5kIHJvdXRlIHVzZXJzIHRvIGdhbWUgKHF1aXpTdGFydGVkID0gdHJ1ZSlcclxuICAgICAgICAgIC8vIFRPRE86IDUuIGlmIGdhbWUgZmluaXNoZWQgc2F2ZSBnYW1lIGluIGhpc3Rvcnkgd2l0aCBwb2ludHMgZXRjLlxyXG5cclxuXHJcbiAgICAgIH0sXHJcbiAgICBhc3luYyBjcmVhdGVHYW1lKG9wcG9uZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5xdWl6X3RvX2ludml0ZV9pZClcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwiYXBpL3F1aXp0YWtlci9cIiwge1xyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ01lZGlhLVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRlRva2VuJzogdGhpcy5nZXRDb29raWUoJ2NzcmZ0b2tlbicpXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBcImdhbWVfY3JlYXRvclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiB0aGlzLiRzdG9yZS5zdGF0ZS51c2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogdGhpcy4kc3RvcmUuc3RhdGUudXNlci5pZFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiZ2FtZV9vcHBvbmVudFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiBvcHBvbmVudCxcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IHRoaXMuJHN0b3JlLnN0YXRlLnVzZXIuaWRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcInNjb3JlXCI6IDAsXHJcbiAgICAgICAgICAgICAgICBcInF1aXpcIjogdGhpcy5xdWl6X3RvX2ludml0ZV9pZFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghcmVzLm9rKSByZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQgPT4ge3Rocm93IG5ldyBFcnJvcih0ZXh0KX0pXHJcbiAgICAgICAgICAgICAgZWxzZSByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaChlcnIgPT4ge2NvbnNvbGUubG9nKGVycil9KVxyXG4gICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvblxyXG5cclxuICAgICAgfVxyXG4gIH0sXHJcblxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0E7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7Ozs7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBTUE7QUFBQTtBQUFBO0FBQ0E7Ozs7O0FBbEJBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQURBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRkE7QUFRQTtBQUFBO0FBRUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFGQTtBQU1BO0FBQUE7QUFFQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUZBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/accounts/Friends.vue?vue&type=template&id=47498e5b\n");

/***/ })

})