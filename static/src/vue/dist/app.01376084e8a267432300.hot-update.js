webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/QuizDetails.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/quizes/QuizDetails.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_components_quiz_RoundTransition_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/quiz/RoundTransition.vue */ \"./src/components/quiz/RoundTransition.vue\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"QuizDetails\",\n  components: {\n    RoundTransition: _src_components_quiz_RoundTransition_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  data: function data() {\n    return {\n      quiz: [],\n      slug: this.$route.params.slug,\n      selectedAnswer: null,\n      correctAnswer: 0,\n      question: \"\",\n      answers: [],\n      actualQuiz: 0,\n      quizFinished: false,\n      quizStarted: false,\n      points: 0,\n      loading: false\n    };\n  },\n  methods: {\n    loadNextRound: function loadNextRound() {\n      this.loading = true;\n      var timeleft = 5;\n      var downloadTimer = setInterval(function () {\n        if (timeleft <= 0) {\n          clearInterval(downloadTimer);\n          console.log(\"finished\");\n          this.loading = false;\n          console.log(this.loading);\n        } else {\n          console.log(timeleft + \" seconds remaining\");\n        }\n\n        timeleft -= 1;\n      }, 500);\n      this.loading = false;\n    },\n    resetOptions: function resetOptions() {\n      var _this = this;\n\n      //reset answers and selectedAnswer\n      this.answers = [];\n      this.selectedAnswer = \"\"; //get answer divs\n\n      var options = document.getElementsByClassName(\"option\"); //For each option div remove all operational classes\n\n      Array.from(options).forEach(function (option) {\n        option.classList.remove(\"active\");\n        option.classList.remove(\"correct\");\n        option.classList.remove(\"incorrect\"); //Reset option divs textContent\n\n        option.textContent = \"\";\n        _this.correctAnswer = \"\";\n      });\n    },\n    getActualQuiz: function getActualQuiz(actualQuizNumber) {\n      var _this2 = this;\n\n      //solo, duel, find\n      //reset option divs\n      if (this.selectedAnswer || !this.quizStarted) {\n        this.resetOptions(); //if there is more questions left\n\n        if (this.quiz[\"question_set\"][actualQuizNumber] !== undefined) {\n          //question =\n          this.question = this.quiz[\"question_set\"][actualQuizNumber].text; // for each answer in actual Question set answers\n\n          this.quiz[\"question_set\"][actualQuizNumber][\"answer_set\"].forEach(function (answer) {\n            _this2.answers.push(answer[\"text\"]); //if answer is correct add it to correctAnswer Variable\n\n\n            if (answer[\"is_correct\"] === true) _this2.correctAnswer = answer[\"text\"];\n          }); // if there is no more question:\n        } else {\n          this.question = \"\";\n          this.quizFinished = true;\n        }\n      } //increment Actual Question +1 if quiz hasnt been finished\n\n\n      if (!this.quizFinished) this.actualQuiz++;\n    },\n    handleSelectItem: function handleSelectItem(item, event) {\n      var _this3 = this;\n\n      if (this.selectedAnswer === \"\") this.selectedAnswer = item;\n      this.quizStarted = true;\n      var options = document.getElementsByClassName(\"option\");\n      Array.from(options).forEach(function (option) {\n        console.log(\"optiona: \" + option.textContent);\n        console.log(\"this: \" + _this3.correctAnswer);\n\n        if (option.textContent !== _this3.correctAnswer) {\n          option.classList.add(\"incorrect\");\n        } else option.classList.add(\"correct\");\n      });\n      if (this.selectedAnswer === this.correctAnswer) this.points += 10;\n      event.target.classList.add(\"active\");\n    }\n  },\n  mounted: function mounted() {\n    var _this4 = this;\n\n    fetch(\"http://10.10.10.23:8000/\" + \"api/details/\" + this.slug + \"/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return _this4.quiz = data;\n    }).then(function (data) {\n      return _this4.correctAnswer = data.answer;\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9xdWl6ZXMvUXVpekRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdmlld3MvcXVpemVzL1F1aXpEZXRhaWxzLnZ1ZT8wZDM1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuPGRpdj5cclxuICA8ZGl2IHYtaWY9XCJsb2FkaW5nID09PSBmYWxzZVwiPlxyXG4gICAgPHBcclxuICAgIHYtZm9yPVwicXVlc3Rpb24gaW4gcXVpei5xdWVzdGlvbl9zZXRcIlxyXG4gICAgOmtleT1cInF1ZXN0aW9uLmlkXCJcclxuICAgIGNsYXNzPVwiUXVpekNvdW50ZXJcIlxyXG4gID5cclxuICAgIDxzcGFuXHJcbiAgICAgIHYtZm9yPVwiYW5zd2VyIGluIHF1ZXN0aW9uLmFuc3dlcl9zZXQuc2xpY2UoMCwgMSlcIlxyXG4gICAgICA6a2V5PVwiYW5zd2VyLmlkXCJcclxuICAgICAgY2xhc3M9XCJRdWl6MlwiXHJcbiAgICA+PC9zcGFuPlxyXG4gIDwvcD5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHN0eWxlPVwibWFyZ2luOiBhdXRvXCI+XHJcbiAgICA8aW1nIDpzcmM9XCJgJHtxdWl6LmltYWdlfWBcIiBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIGFsdD1cIlwiIC8+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgIDxoMSBpZD1cInRpdGxlXCI+e3sgdGhpcy5xdWl6W1widGl0bGVcIl0gfX08L2gxPlxyXG4gICAgICA8aDUgaWQ9XCJjb3VudGVyXCIgY2xhc3M9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAge3sgYWN0dWFsUXVpeiB9fSAvIHt7IHF1aXpbXCJudW1iZXJfb2ZfcXVlc3Rpb25zXCJdIH19XHJcbiAgICAgIDwvaDU+XHJcbiAgICAgIDxwIHYtaWY9XCJ0aGlzLnF1ZXN0aW9uXCIgY2xhc3M9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICBRdWVzdGlvbjp7eyB0aGlzLnF1ZXN0aW9uIH19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDx1bCB2LWlmPVwidGhpcy5hbnN3ZXJzWzBdXCIgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtaG9yaXpvbnRhbCBcIj5cclxuICAgICAgPGxpXHJcbiAgICAgICAgdi1pZj1cInRoaXMuYW5zd2Vyc1swXVwiXHJcbiAgICAgICAgQGNsaWNrPVwiaGFuZGxlU2VsZWN0SXRlbSh0aGlzLmFuc3dlcnNbMF0sICRldmVudClcIlxyXG4gICAgICAgIGlkPVwiMVwiXHJcbiAgICAgICAgY2xhc3M9XCJvcHRpb24gbGlzdC1ncm91cC1pdGVtIGl0ZW0gdy01MFwiXHJcbiAgICAgID5cclxuICAgICAgICB7eyB0aGlzLmFuc3dlcnNbMF0gfX1cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpXHJcbiAgICAgICAgdi1pZj1cInRoaXMuYW5zd2Vyc1sxXVwiXHJcbiAgICAgICAgQGNsaWNrPVwiaGFuZGxlU2VsZWN0SXRlbSh0aGlzLmFuc3dlcnNbMV0sICRldmVudClcIlxyXG4gICAgICAgIGlkPVwiMlwiXHJcbiAgICAgICAgY2xhc3M9XCJvcHRpb24gbGlzdC1ncm91cC1pdGVtIGl0ZW0gdy01MFwiXHJcbiAgICAgID5cclxuICAgICAgICB7eyB0aGlzLmFuc3dlcnNbMV0gfX1cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8dWwgdi1pZj1cInRoaXMuYW5zd2Vyc1syXVwiIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWhvcml6b250YWwgXCI+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgIHYtaWY9XCJ0aGlzLmFuc3dlcnNbMl1cIlxyXG4gICAgICAgIEBjbGljaz1cImhhbmRsZVNlbGVjdEl0ZW0odGhpcy5hbnN3ZXJzWzJdLCAkZXZlbnQpXCJcclxuICAgICAgICBpZD1cIjNcIlxyXG4gICAgICAgIGNsYXNzPVwib3B0aW9uIGxpc3QtZ3JvdXAtaXRlbSB3LTUwXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IHRoaXMuYW5zd2Vyc1syXSB9fVxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGlcclxuICAgICAgICB2LWlmPVwidGhpcy5hbnN3ZXJzWzNdXCJcclxuICAgICAgICBAY2xpY2s9XCJoYW5kbGVTZWxlY3RJdGVtKHRoaXMuYW5zd2Vyc1szXSwgJGV2ZW50KVwiXHJcbiAgICAgICAgaWQ9XCI0XCJcclxuICAgICAgICBjbGFzcz1cIm9wdGlvbiBsaXN0LWdyb3VwLWl0ZW0gdy01MFwiXHJcbiAgICAgID5cclxuICAgICAgICB7eyB0aGlzLmFuc3dlcnNbM10gfX1cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICA8cCB2LWlmPVwidGhpcy5zZWxlY3RlZEFuc3dlclwiPllvdXIgQW5zd2VyOiB7eyBzZWxlY3RlZEFuc3dlciB9fTwvcD5cclxuICAgICAgPHAgdi1pZj1cInRoaXMuY29ycmVjdEFuc3dlclwiPkNvcnJlY3QgQW5zd2VyOiB7eyBjb3JyZWN0QW5zd2VyIH19PC9wPlxyXG5cclxuICAgICAgPCEtLSBQbGF5IGJ1dHRvbnMgLS0+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB2LWlmPVwiIXRoaXMucXVlc3Rpb24gJiYgIXRoaXMucXVpekZpbmlzaGVkXCJcclxuICAgICAgICBAY2xpY2s9XCJnZXRBY3R1YWxRdWl6KHRoaXMuYWN0dWFsUXVpeilcIlxyXG4gICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBwbGF5LWJ0biBmdWxsLXdpZHRoXCJcclxuICAgICAgICBpZD1cInN0YXJ0LWJ1dHRvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3Bhbj5Tb2xvPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj4gPGJyPjxicj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHYtaWY9XCIhdGhpcy5xdWVzdGlvbiAmJiAhdGhpcy5xdWl6RmluaXNoZWRcIlxyXG4gICAgICAgIEBjbGljaz1cImdldEFjdHVhbFF1aXoodGhpcy5hY3R1YWxRdWl6KVwiXHJcbiAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIHBsYXktYnRuICBmdWxsLXdpZHRoXCJcclxuICAgICAgICBpZD1cInN0YXJ0LWJ1dHRvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIlwiPlBsYXkgd2l0aCBmcmllbmQ8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPjxicj48YnI+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB2LWlmPVwiIXRoaXMucXVlc3Rpb24gJiYgIXRoaXMucXVpekZpbmlzaGVkXCJcclxuICAgICAgICBAY2xpY2s9XCJnZXRBY3R1YWxRdWl6KHRoaXMuYWN0dWFsUXVpeilcIlxyXG4gICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBwbGF5LWJ0biBmdWxsLXdpZHRoXCJcclxuICAgICAgICBpZD1cInN0YXJ0LWJ1dHRvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3Bhbj5GaW5kIG9wcG9uZW50PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHYtaWY9XCIhdGhpcy5xdWl6RmluaXNoZWQgJiYgdGhpcy5xdWVzdGlvblwiXHJcbiAgICAgICAgQGNsaWNrPVwiZ2V0QWN0dWFsUXVpeih0aGlzLmFjdHVhbFF1aXopXCJcclxuICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgIGlkPVwibmV4dC1idXR0b25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4+RGFsZWo8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2ICB2LWlmPVwicXVpekZpbmlzaGVkXCIgPiBcclxuICAgICAgICA8aDE+UXVpeiBoYXMgYmVlbiBmaW5pc2hlZDwvaDE+XHJcbiAgICAgIDxoMj5Zb3VyIHBvaW50czoge3sgcG9pbnRzIH19IC8ge3sgcXVpeltcInJlcXVpcmVkX3Njb3JlX3RvX3Bhc3NcIl0gfX08L2gyPlxyXG4gICAgICA8cD5hdXRob3I6IHt7IHF1aXpbXCJhdXRob3JcIl0gfX08L3A+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG5cclxuICA8cm91bmQtdHJhbnNpdGlvbiB2LWlmPVwibG9hZGluZyA9PT0gdHJ1ZVwiIDpxdWl6X25hbWU9XCJxdWl6Wyd0aXRsZSddXCIgOnF1aXpJY29uPVwicXVpelsnaW1hZ2UnXVwiID48L3JvdW5kLXRyYW5zaXRpb24+XHJcbiAgPGJ1dHRvbiBAY2xpY2s9XCJsb2FkTmV4dFJvdW5kXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj5ncmdyPC9idXR0b24+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFJvdW5kVHJhbnNpdGlvbiBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9xdWl6L1JvdW5kVHJhbnNpdGlvbi52dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJRdWl6RGV0YWlsc1wiLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIFJvdW5kVHJhbnNpdGlvbixcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBxdWl6OiBbXSxcclxuICAgICAgc2x1ZzogdGhpcy4kcm91dGUucGFyYW1zLnNsdWcsXHJcbiAgICAgIHNlbGVjdGVkQW5zd2VyOiBudWxsLFxyXG4gICAgICBjb3JyZWN0QW5zd2VyOiAwLFxyXG4gICAgICBxdWVzdGlvbjogXCJcIixcclxuICAgICAgYW5zd2VyczogW10sXHJcbiAgICAgIGFjdHVhbFF1aXo6IDAsXHJcbiAgICAgIHF1aXpGaW5pc2hlZDogZmFsc2UsXHJcbiAgICAgIHF1aXpTdGFydGVkOiBmYWxzZSxcclxuICAgICAgcG9pbnRzOiAwLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBsb2FkTmV4dFJvdW5kKCkge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXHJcbiAgICAgIGxldCB0aW1lbGVmdCA9IDU7XHJcbiAgICAgIGxldCBkb3dubG9hZFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aW1lbGVmdCA8PSAwKXtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZG93bmxvYWRUaW1lcik7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbmlzaGVkXCIpXHJcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5sb2FkaW5nKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aW1lbGVmdCArIFwiIHNlY29uZHMgcmVtYWluaW5nXCIpIDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGltZWxlZnQgLT0gMTtcclxuICAgICAgfSwgNTAwKTtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcclxuXHJcblxyXG4gICAgfSxcclxuICAgIHJlc2V0T3B0aW9ucygpIHtcclxuICAgICAgLy9yZXNldCBhbnN3ZXJzIGFuZCBzZWxlY3RlZEFuc3dlclxyXG4gICAgICB0aGlzLmFuc3dlcnMgPSBbXTtcclxuICAgICAgdGhpcy5zZWxlY3RlZEFuc3dlciA9IFwiXCI7XHJcblxyXG4gICAgICAvL2dldCBhbnN3ZXIgZGl2c1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvcHRpb25cIik7XHJcblxyXG4gICAgICAvL0ZvciBlYWNoIG9wdGlvbiBkaXYgcmVtb3ZlIGFsbCBvcGVyYXRpb25hbCBjbGFzc2VzXHJcbiAgICAgIEFycmF5LmZyb20ob3B0aW9ucykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjb3JyZWN0XCIpO1xyXG4gICAgICAgIG9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5jb3JyZWN0XCIpO1xyXG5cclxuICAgICAgICAvL1Jlc2V0IG9wdGlvbiBkaXZzIHRleHRDb250ZW50XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICB0aGlzLmNvcnJlY3RBbnN3ZXIgPSBcIlwiO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRBY3R1YWxRdWl6KGFjdHVhbFF1aXpOdW1iZXIpIHtcclxuICAgICAgLy9zb2xvLCBkdWVsLCBmaW5kXHJcbiAgICAgIC8vcmVzZXQgb3B0aW9uIGRpdnNcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRBbnN3ZXIgfHwgIXRoaXMucXVpelN0YXJ0ZWQpIHtcclxuICAgICAgICB0aGlzLnJlc2V0T3B0aW9ucygpO1xyXG5cclxuICAgICAgICAvL2lmIHRoZXJlIGlzIG1vcmUgcXVlc3Rpb25zIGxlZnRcclxuICAgICAgICBpZiAodGhpcy5xdWl6W1wicXVlc3Rpb25fc2V0XCJdW2FjdHVhbFF1aXpOdW1iZXJdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIC8vcXVlc3Rpb24gPVxyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvbiA9IHRoaXMucXVpeltcInF1ZXN0aW9uX3NldFwiXVthY3R1YWxRdWl6TnVtYmVyXS50ZXh0O1xyXG5cclxuICAgICAgICAgIC8vIGZvciBlYWNoIGFuc3dlciBpbiBhY3R1YWwgUXVlc3Rpb24gc2V0IGFuc3dlcnNcclxuICAgICAgICAgIHRoaXMucXVpeltcInF1ZXN0aW9uX3NldFwiXVthY3R1YWxRdWl6TnVtYmVyXVtcImFuc3dlcl9zZXRcIl0uZm9yRWFjaChcclxuICAgICAgICAgICAgKGFuc3dlcikgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuYW5zd2Vycy5wdXNoKGFuc3dlcltcInRleHRcIl0pO1xyXG4gICAgICAgICAgICAgIC8vaWYgYW5zd2VyIGlzIGNvcnJlY3QgYWRkIGl0IHRvIGNvcnJlY3RBbnN3ZXIgVmFyaWFibGVcclxuICAgICAgICAgICAgICBpZiAoYW5zd2VyW1wiaXNfY29ycmVjdFwiXSA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEFuc3dlciA9IGFuc3dlcltcInRleHRcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBtb3JlIHF1ZXN0aW9uOlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnF1ZXN0aW9uID0gXCJcIjtcclxuICAgICAgICAgIHRoaXMucXVpekZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vaW5jcmVtZW50IEFjdHVhbCBRdWVzdGlvbiArMSBpZiBxdWl6IGhhc250IGJlZW4gZmluaXNoZWRcclxuICAgICAgaWYgKCF0aGlzLnF1aXpGaW5pc2hlZCkgdGhpcy5hY3R1YWxRdWl6Kys7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZVNlbGVjdEl0ZW0oaXRlbSwgZXZlbnQpIHtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRBbnN3ZXIgPT09IFwiXCIpIHRoaXMuc2VsZWN0ZWRBbnN3ZXIgPSBpdGVtO1xyXG4gICAgICB0aGlzLnF1aXpTdGFydGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIGxldCBvcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm9wdGlvblwiKTtcclxuXHJcbiAgICAgIEFycmF5LmZyb20ob3B0aW9ucykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJvcHRpb25hOiBcIiArIG9wdGlvbi50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzOiBcIiArIHRoaXMuY29ycmVjdEFuc3dlcik7XHJcbiAgICAgICAgaWYgKG9wdGlvbi50ZXh0Q29udGVudCAhPT0gdGhpcy5jb3JyZWN0QW5zd2VyKSB7XHJcbiAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZChcImluY29ycmVjdFwiKTtcclxuICAgICAgICB9IGVsc2Ugb3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb3JyZWN0XCIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkQW5zd2VyID09PSB0aGlzLmNvcnJlY3RBbnN3ZXIpIHRoaXMucG9pbnRzICs9IDEwO1xyXG5cclxuICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIGZldGNoKHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBgYXBpL2RldGFpbHMvYCArIHRoaXMuc2x1ZyArIGAvYClcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+ICh0aGlzLnF1aXogPSBkYXRhKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+ICh0aGlzLmNvcnJlY3RBbnN3ZXIgPSBkYXRhLmFuc3dlcikpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkpO1xyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3Age1xyXG4gIGhlaWdodDogMTVlbTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLlF1aXpDb3VudGVyIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB0ZXh0LWFsaWduOiB0b3A7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5vcHRpb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjQ2ZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG51bC5saXN0LWdyb3VwIGxpLmFjdGl2ZSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjQ2ZmY7XHJcbn1cclxuXHJcbnVsLmxpc3QtZ3JvdXAgbGkuY29ycmVjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbnVsLmxpc3QtZ3JvdXAgbGkuaW5jb3JyZWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiN0aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBtYXJnaW4tbGVmdDogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGJ1dHRvbi5mdWxsLXdpZHRoIHtcclxuICAgICAgICB3aWR0aDogMTAwJTsgIFxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUEySEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQXRGQTtBQXdGQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQWxIQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/QuizDetails.vue?vue&type=script&lang=js\n");

/***/ })

})