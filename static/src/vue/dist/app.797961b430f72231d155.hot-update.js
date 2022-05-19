webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/QuizDetails.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/quizes/QuizDetails.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_components_quiz_RoundTransition_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/quiz/RoundTransition.vue */ \"./src/components/quiz/RoundTransition.vue\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"QuizDetails\",\n  components: {\n    RoundTransition: _src_components_quiz_RoundTransition_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  data: function data() {\n    return {\n      quiz: [],\n      slug: this.$route.params.slug,\n      selectedAnswer: null,\n      correctAnswer: 0,\n      question: \"\",\n      answers: [],\n      actualQuiz: 0,\n      quizFinished: false,\n      quizStarted: false,\n      points: 0,\n      loading: true\n    };\n  },\n  methods: {\n    loadNextRound: function loadNextRound() {\n      this.loading = !this.loading;\n      var timeleft = 10;\n      var downloadTimer = setInterval(function () {\n        if (timeleft <= 0) {\n          clearInterval(downloadTimer);\n          document.getElementById(\"countdown\").innerHTML = \"Finished\";\n        } else {\n          document.getElementById(\"countdown\").innerHTML = timeleft + \" seconds remaining\";\n        }\n\n        timeleft -= 1;\n      }, 5000);\n    },\n    resetOptions: function resetOptions() {\n      var _this = this;\n\n      //reset answers and selectedAnswer\n      this.answers = [];\n      this.selectedAnswer = \"\"; //get answer divs\n\n      var options = document.getElementsByClassName(\"option\"); //For each option div remove all operational classes\n\n      Array.from(options).forEach(function (option) {\n        option.classList.remove(\"active\");\n        option.classList.remove(\"correct\");\n        option.classList.remove(\"incorrect\"); //Reset option divs textContent\n\n        option.textContent = \"\";\n        _this.correctAnswer = \"\";\n      });\n    },\n    getActualQuiz: function getActualQuiz(actualQuizNumber) {\n      var _this2 = this;\n\n      //solo, duel, find\n      //reset option divs\n      if (this.selectedAnswer || !this.quizStarted) {\n        this.resetOptions(); //if there is more questions left\n\n        if (this.quiz[\"question_set\"][actualQuizNumber] !== undefined) {\n          //question =\n          this.question = this.quiz[\"question_set\"][actualQuizNumber].text; // for each answer in actual Question set answers\n\n          this.quiz[\"question_set\"][actualQuizNumber][\"answer_set\"].forEach(function (answer) {\n            _this2.answers.push(answer[\"text\"]); //if answer is correct add it to correctAnswer Variable\n\n\n            if (answer[\"is_correct\"] === true) _this2.correctAnswer = answer[\"text\"];\n          }); // if there is no more question:\n        } else {\n          this.question = \"\";\n          this.quizFinished = true;\n        }\n      } //increment Actual Question +1 if quiz hasnt been finished\n\n\n      if (!this.quizFinished) this.actualQuiz++;\n    },\n    handleSelectItem: function handleSelectItem(item, event) {\n      var _this3 = this;\n\n      if (this.selectedAnswer === \"\") this.selectedAnswer = item;\n      this.quizStarted = true;\n      var options = document.getElementsByClassName(\"option\");\n      Array.from(options).forEach(function (option) {\n        console.log(\"optiona: \" + option.textContent);\n        console.log(\"this: \" + _this3.correctAnswer);\n\n        if (option.textContent !== _this3.correctAnswer) {\n          option.classList.add(\"incorrect\");\n        } else option.classList.add(\"correct\");\n      });\n      if (this.selectedAnswer === this.correctAnswer) this.points += 10;\n      event.target.classList.add(\"active\");\n    }\n  },\n  mounted: function mounted() {\n    var _this4 = this;\n\n    fetch(\"http://10.10.10.23:8000/\" + \"api/details/\" + this.slug + \"/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return _this4.quiz = data;\n    }).then(function (data) {\n      return _this4.correctAnswer = data.answer;\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9xdWl6ZXMvUXVpekRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdmlld3MvcXVpemVzL1F1aXpEZXRhaWxzLnZ1ZT8wZDM1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuPGRpdj5cclxuICA8ZGl2IHYtaWY9XCIhbG9hZGluZ1wiPlxyXG4gICAgPHBcclxuICAgIHYtZm9yPVwicXVlc3Rpb24gaW4gcXVpei5xdWVzdGlvbl9zZXRcIlxyXG4gICAgOmtleT1cInF1ZXN0aW9uLmlkXCJcclxuICAgIGNsYXNzPVwiUXVpekNvdW50ZXJcIlxyXG4gID5cclxuICAgIDxzcGFuXHJcbiAgICAgIHYtZm9yPVwiYW5zd2VyIGluIHF1ZXN0aW9uLmFuc3dlcl9zZXQuc2xpY2UoMCwgMSlcIlxyXG4gICAgICA6a2V5PVwiYW5zd2VyLmlkXCJcclxuICAgICAgY2xhc3M9XCJRdWl6MlwiXHJcbiAgICA+PC9zcGFuPlxyXG4gIDwvcD5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHN0eWxlPVwibWFyZ2luOiBhdXRvXCI+XHJcbiAgICA8aW1nIDpzcmM9XCJgJHtxdWl6LmltYWdlfWBcIiBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIGFsdD1cIlwiIC8+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgIDxoMSBpZD1cInRpdGxlXCI+e3sgdGhpcy5xdWl6W1widGl0bGVcIl0gfX08L2gxPlxyXG4gICAgICA8aDUgaWQ9XCJjb3VudGVyXCIgY2xhc3M9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAge3sgYWN0dWFsUXVpeiB9fSAvIHt7IHF1aXpbXCJudW1iZXJfb2ZfcXVlc3Rpb25zXCJdIH19XHJcbiAgICAgIDwvaDU+XHJcbiAgICAgIDxwIHYtaWY9XCJ0aGlzLnF1ZXN0aW9uXCIgY2xhc3M9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICBRdWVzdGlvbjp7eyB0aGlzLnF1ZXN0aW9uIH19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDx1bCB2LWlmPVwidGhpcy5hbnN3ZXJzWzBdXCIgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtaG9yaXpvbnRhbCBcIj5cclxuICAgICAgPGxpXHJcbiAgICAgICAgdi1pZj1cInRoaXMuYW5zd2Vyc1swXVwiXHJcbiAgICAgICAgQGNsaWNrPVwiaGFuZGxlU2VsZWN0SXRlbSh0aGlzLmFuc3dlcnNbMF0sICRldmVudClcIlxyXG4gICAgICAgIGlkPVwiMVwiXHJcbiAgICAgICAgY2xhc3M9XCJvcHRpb24gbGlzdC1ncm91cC1pdGVtIGl0ZW0gdy01MFwiXHJcbiAgICAgID5cclxuICAgICAgICB7eyB0aGlzLmFuc3dlcnNbMF0gfX1cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpXHJcbiAgICAgICAgdi1pZj1cInRoaXMuYW5zd2Vyc1sxXVwiXHJcbiAgICAgICAgQGNsaWNrPVwiaGFuZGxlU2VsZWN0SXRlbSh0aGlzLmFuc3dlcnNbMV0sICRldmVudClcIlxyXG4gICAgICAgIGlkPVwiMlwiXHJcbiAgICAgICAgY2xhc3M9XCJvcHRpb24gbGlzdC1ncm91cC1pdGVtIGl0ZW0gdy01MFwiXHJcbiAgICAgID5cclxuICAgICAgICB7eyB0aGlzLmFuc3dlcnNbMV0gfX1cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8dWwgdi1pZj1cInRoaXMuYW5zd2Vyc1syXVwiIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWhvcml6b250YWwgXCI+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgIHYtaWY9XCJ0aGlzLmFuc3dlcnNbMl1cIlxyXG4gICAgICAgIEBjbGljaz1cImhhbmRsZVNlbGVjdEl0ZW0odGhpcy5hbnN3ZXJzWzJdLCAkZXZlbnQpXCJcclxuICAgICAgICBpZD1cIjNcIlxyXG4gICAgICAgIGNsYXNzPVwib3B0aW9uIGxpc3QtZ3JvdXAtaXRlbSB3LTUwXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IHRoaXMuYW5zd2Vyc1syXSB9fVxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGlcclxuICAgICAgICB2LWlmPVwidGhpcy5hbnN3ZXJzWzNdXCJcclxuICAgICAgICBAY2xpY2s9XCJoYW5kbGVTZWxlY3RJdGVtKHRoaXMuYW5zd2Vyc1szXSwgJGV2ZW50KVwiXHJcbiAgICAgICAgaWQ9XCI0XCJcclxuICAgICAgICBjbGFzcz1cIm9wdGlvbiBsaXN0LWdyb3VwLWl0ZW0gdy01MFwiXHJcbiAgICAgID5cclxuICAgICAgICB7eyB0aGlzLmFuc3dlcnNbM10gfX1cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICA8cCB2LWlmPVwidGhpcy5zZWxlY3RlZEFuc3dlclwiPllvdXIgQW5zd2VyOiB7eyBzZWxlY3RlZEFuc3dlciB9fTwvcD5cclxuICAgICAgPHAgdi1pZj1cInRoaXMuY29ycmVjdEFuc3dlclwiPkNvcnJlY3QgQW5zd2VyOiB7eyBjb3JyZWN0QW5zd2VyIH19PC9wPlxyXG5cclxuICAgICAgPCEtLSBQbGF5IGJ1dHRvbnMgLS0+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB2LWlmPVwiIXRoaXMucXVlc3Rpb24gJiYgIXRoaXMucXVpekZpbmlzaGVkXCJcclxuICAgICAgICBAY2xpY2s9XCJnZXRBY3R1YWxRdWl6KHRoaXMuYWN0dWFsUXVpeilcIlxyXG4gICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBwbGF5LWJ0biBmdWxsLXdpZHRoXCJcclxuICAgICAgICBpZD1cInN0YXJ0LWJ1dHRvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3Bhbj5Tb2xvPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj4gPGJyPjxicj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHYtaWY9XCIhdGhpcy5xdWVzdGlvbiAmJiAhdGhpcy5xdWl6RmluaXNoZWRcIlxyXG4gICAgICAgIEBjbGljaz1cImdldEFjdHVhbFF1aXoodGhpcy5hY3R1YWxRdWl6KVwiXHJcbiAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIHBsYXktYnRuICBmdWxsLXdpZHRoXCJcclxuICAgICAgICBpZD1cInN0YXJ0LWJ1dHRvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIlwiPlBsYXkgd2l0aCBmcmllbmQ8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPjxicj48YnI+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB2LWlmPVwiIXRoaXMucXVlc3Rpb24gJiYgIXRoaXMucXVpekZpbmlzaGVkXCJcclxuICAgICAgICBAY2xpY2s9XCJnZXRBY3R1YWxRdWl6KHRoaXMuYWN0dWFsUXVpeilcIlxyXG4gICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBwbGF5LWJ0biBmdWxsLXdpZHRoXCJcclxuICAgICAgICBpZD1cInN0YXJ0LWJ1dHRvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3Bhbj5GaW5kIG9wcG9uZW50PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHYtaWY9XCIhdGhpcy5xdWl6RmluaXNoZWQgJiYgdGhpcy5xdWVzdGlvblwiXHJcbiAgICAgICAgQGNsaWNrPVwiZ2V0QWN0dWFsUXVpeih0aGlzLmFjdHVhbFF1aXopXCJcclxuICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIlxyXG4gICAgICAgIGlkPVwibmV4dC1idXR0b25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4+RGFsZWo8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8ZGl2ICB2LWlmPVwicXVpekZpbmlzaGVkXCIgPiBcclxuICAgICAgICA8aDE+UXVpeiBoYXMgYmVlbiBmaW5pc2hlZDwvaDE+XHJcbiAgICAgIDxoMj5Zb3VyIHBvaW50czoge3sgcG9pbnRzIH19IC8ge3sgcXVpeltcInJlcXVpcmVkX3Njb3JlX3RvX3Bhc3NcIl0gfX08L2gyPlxyXG4gICAgICA8cD5hdXRob3I6IHt7IHF1aXpbXCJhdXRob3JcIl0gfX08L3A+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG5cclxuICA8cm91bmQtdHJhbnNpdGlvbiB2LWlmPVwibG9hZGluZ1wiIDpxdWl6X25hbWU9XCJxdWl6Wyd0aXRsZSddXCIgOnF1aXpJY29uPVwicXVpelsnaW1hZ2UnXVwiID48L3JvdW5kLXRyYW5zaXRpb24+XHJcbiAgPGJ1dHRvbiBAY2xpY2s9XCJsb2FkTmV4dFJvdW5kXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj5ncmdyPC9idXR0b24+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFJvdW5kVHJhbnNpdGlvbiBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9xdWl6L1JvdW5kVHJhbnNpdGlvbi52dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJRdWl6RGV0YWlsc1wiLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIFJvdW5kVHJhbnNpdGlvbixcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBxdWl6OiBbXSxcclxuICAgICAgc2x1ZzogdGhpcy4kcm91dGUucGFyYW1zLnNsdWcsXHJcbiAgICAgIHNlbGVjdGVkQW5zd2VyOiBudWxsLFxyXG4gICAgICBjb3JyZWN0QW5zd2VyOiAwLFxyXG4gICAgICBxdWVzdGlvbjogXCJcIixcclxuICAgICAgYW5zd2VyczogW10sXHJcbiAgICAgIGFjdHVhbFF1aXo6IDAsXHJcbiAgICAgIHF1aXpGaW5pc2hlZDogZmFsc2UsXHJcbiAgICAgIHF1aXpTdGFydGVkOiBmYWxzZSxcclxuICAgICAgcG9pbnRzOiAwLFxyXG4gICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGxvYWROZXh0Um91bmQoKSB7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9ICF0aGlzLmxvYWRpbmdcclxuICAgICAgbGV0IHRpbWVsZWZ0ID0gMTA7XHJcbiAgICAgIGxldCBkb3dubG9hZFRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aW1lbGVmdCA8PSAwKXtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZG93bmxvYWRUaW1lcik7XHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50ZG93blwiKS5pbm5lckhUTUwgPSBcIkZpbmlzaGVkXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRkb3duXCIpLmlubmVySFRNTCA9IHRpbWVsZWZ0ICsgXCIgc2Vjb25kcyByZW1haW5pbmdcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGltZWxlZnQgLT0gMTtcclxuICAgICAgfSwgNTAwMCk7XHJcblxyXG5cclxuICAgIH0sXHJcbiAgICByZXNldE9wdGlvbnMoKSB7XHJcbiAgICAgIC8vcmVzZXQgYW5zd2VycyBhbmQgc2VsZWN0ZWRBbnN3ZXJcclxuICAgICAgdGhpcy5hbnN3ZXJzID0gW107XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRBbnN3ZXIgPSBcIlwiO1xyXG5cclxuICAgICAgLy9nZXQgYW5zd2VyIGRpdnNcclxuICAgICAgbGV0IG9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3B0aW9uXCIpO1xyXG5cclxuICAgICAgLy9Gb3IgZWFjaCBvcHRpb24gZGl2IHJlbW92ZSBhbGwgb3BlcmF0aW9uYWwgY2xhc3Nlc1xyXG4gICAgICBBcnJheS5mcm9tKG9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgIG9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIG9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY29ycmVjdFwiKTtcclxuICAgICAgICBvcHRpb24uY2xhc3NMaXN0LnJlbW92ZShcImluY29ycmVjdFwiKTtcclxuXHJcbiAgICAgICAgLy9SZXNldCBvcHRpb24gZGl2cyB0ZXh0Q29udGVudFxyXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jb3JyZWN0QW5zd2VyID0gXCJcIjtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0QWN0dWFsUXVpeihhY3R1YWxRdWl6TnVtYmVyKSB7XHJcbiAgICAgIC8vc29sbywgZHVlbCwgZmluZFxyXG4gICAgICAvL3Jlc2V0IG9wdGlvbiBkaXZzXHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkQW5zd2VyIHx8ICF0aGlzLnF1aXpTdGFydGVkKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldE9wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgLy9pZiB0aGVyZSBpcyBtb3JlIHF1ZXN0aW9ucyBsZWZ0XHJcbiAgICAgICAgaWYgKHRoaXMucXVpeltcInF1ZXN0aW9uX3NldFwiXVthY3R1YWxRdWl6TnVtYmVyXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAvL3F1ZXN0aW9uID1cclxuICAgICAgICAgIHRoaXMucXVlc3Rpb24gPSB0aGlzLnF1aXpbXCJxdWVzdGlvbl9zZXRcIl1bYWN0dWFsUXVpek51bWJlcl0udGV4dDtcclxuXHJcbiAgICAgICAgICAvLyBmb3IgZWFjaCBhbnN3ZXIgaW4gYWN0dWFsIFF1ZXN0aW9uIHNldCBhbnN3ZXJzXHJcbiAgICAgICAgICB0aGlzLnF1aXpbXCJxdWVzdGlvbl9zZXRcIl1bYWN0dWFsUXVpek51bWJlcl1bXCJhbnN3ZXJfc2V0XCJdLmZvckVhY2goXHJcbiAgICAgICAgICAgIChhbnN3ZXIpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmFuc3dlcnMucHVzaChhbnN3ZXJbXCJ0ZXh0XCJdKTtcclxuICAgICAgICAgICAgICAvL2lmIGFuc3dlciBpcyBjb3JyZWN0IGFkZCBpdCB0byBjb3JyZWN0QW5zd2VyIFZhcmlhYmxlXHJcbiAgICAgICAgICAgICAgaWYgKGFuc3dlcltcImlzX2NvcnJlY3RcIl0gPT09IHRydWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RBbnN3ZXIgPSBhbnN3ZXJbXCJ0ZXh0XCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gbW9yZSBxdWVzdGlvbjpcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgICB0aGlzLnF1aXpGaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvL2luY3JlbWVudCBBY3R1YWwgUXVlc3Rpb24gKzEgaWYgcXVpeiBoYXNudCBiZWVuIGZpbmlzaGVkXHJcbiAgICAgIGlmICghdGhpcy5xdWl6RmluaXNoZWQpIHRoaXMuYWN0dWFsUXVpeisrO1xyXG4gICAgfSxcclxuXHJcbiAgICBoYW5kbGVTZWxlY3RJdGVtKGl0ZW0sIGV2ZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkQW5zd2VyID09PSBcIlwiKSB0aGlzLnNlbGVjdGVkQW5zd2VyID0gaXRlbTtcclxuICAgICAgdGhpcy5xdWl6U3RhcnRlZCA9IHRydWU7XHJcblxyXG4gICAgICBsZXQgb3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvcHRpb25cIik7XHJcblxyXG4gICAgICBBcnJheS5mcm9tKG9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwib3B0aW9uYTogXCIgKyBvcHRpb24udGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpczogXCIgKyB0aGlzLmNvcnJlY3RBbnN3ZXIpO1xyXG4gICAgICAgIGlmIChvcHRpb24udGV4dENvbnRlbnQgIT09IHRoaXMuY29ycmVjdEFuc3dlcikge1xyXG4gICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJpbmNvcnJlY3RcIik7XHJcbiAgICAgICAgfSBlbHNlIG9wdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29ycmVjdFwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEFuc3dlciA9PT0gdGhpcy5jb3JyZWN0QW5zd2VyKSB0aGlzLnBvaW50cyArPSAxMDtcclxuXHJcbiAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBmZXRjaChwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgYGFwaS9kZXRhaWxzL2AgKyB0aGlzLnNsdWcgKyBgL2ApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiAodGhpcy5xdWl6ID0gZGF0YSkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiAodGhpcy5jb3JyZWN0QW5zd2VyID0gZGF0YS5hbnN3ZXIpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKTtcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY2FyZC1pbWctdG9wIHtcclxuICBoZWlnaHQ6IDE1ZW07XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi5RdWl6Q291bnRlciB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgdGV4dC1hbGlnbjogdG9wO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ub3B0aW9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0NmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudWwubGlzdC1ncm91cCBsaS5hY3RpdmUge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0NmZmO1xyXG59XHJcblxyXG51bC5saXN0LWdyb3VwIGxpLmNvcnJlY3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG51bC5saXN0LWdyb3VwIGxpLmluY29ycmVjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4jdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBidXR0b24uZnVsbC13aWR0aCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7ICBcclxuICAgIH1cclxufVxyXG48L3N0eWxlPlxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBMkhBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFuRkE7QUFxRkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUEvR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/QuizDetails.vue?vue&type=script&lang=js\n");

/***/ })

})