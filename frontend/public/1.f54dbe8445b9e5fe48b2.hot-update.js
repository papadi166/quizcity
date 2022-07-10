webpackHotUpdate(1,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/QuizDetails.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/quizes/QuizDetails.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_components_quiz_RoundTransition_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/quiz/RoundTransition.vue */ \"./src/components/quiz/RoundTransition.vue\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"QuizDetails\",\n  components: {\n    RoundTransition: _src_components_quiz_RoundTransition_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  data: function data() {\n    return {\n      quiz: [],\n      slug: this.$route.params.slug,\n      selectedAnswer: null,\n      correctAnswer: 0,\n      question: \"\",\n      answers: [],\n      actualQuiz: 0,\n      quizFinished: false,\n      quizStarted: false,\n      points: 0,\n      loading: false,\n      isChoosed: false\n    };\n  },\n  methods: {\n    loadNextRound: function loadNextRound() {\n      var _this = this;\n\n      this.loading = true;\n      setTimeout(function () {\n        return _this.loading = false;\n      }, 3000);\n      console.log(this.loading);\n      this.isChoosed = false;\n    },\n    resetOptions: function resetOptions() {\n      var _this2 = this;\n\n      //reset answers and selectedAnswer\n      this.answers = [];\n      this.selectedAnswer = \"\"; //get answer divs\n\n      var options = document.getElementsByClassName(\"option\"); //For each option div remove all operational classes\n\n      Array.from(options).forEach(function (option) {\n        option.classList.remove(\"active\");\n        option.classList.remove(\"correct\");\n        option.classList.remove(\"incorrect\"); //Reset option divs textContent\n\n        option.textContent = \"\";\n        _this2.correctAnswer = \"\";\n      });\n    },\n    getActualQuiz: function getActualQuiz(actualQuizNumber) {\n      var _this3 = this;\n\n      this.loadNextRound(); //solo, duel, find\n      //reset option divs\n\n      if (this.selectedAnswer || !this.quizStarted) {\n        this.resetOptions(); //if there is more questions left\n\n        if (this.quiz[\"question_set\"][actualQuizNumber] !== undefined) {\n          //question =\n          this.question = this.quiz[\"question_set\"][actualQuizNumber].text; // for each answer in actual Question set answers\n\n          this.quiz[\"question_set\"][actualQuizNumber][\"answer_set\"].forEach(function (answer) {\n            _this3.answers.push(answer[\"text\"]); //if answer is correct add it to correctAnswer Variable\n\n\n            if (answer[\"is_correct\"] === true) _this3.correctAnswer = answer[\"text\"];\n          }); // if there is no more question:\n        } else {\n          this.question = \"\";\n          this.quizFinished = true;\n        }\n      } //increment Actual Question +1 if quiz hasnt been finished\n\n\n      this.actualQuiz++;\n    },\n    handleSelectItem: function handleSelectItem(item, event) {\n      var _this4 = this;\n\n      if (this.isChoosed === false) {\n        setTimeout(function () {\n          return _this4.getActualQuiz(_this4.actualQuiz);\n        }, 3000);\n        console.log(\"ss\");\n        if (this.selectedAnswer === \"\") this.selectedAnswer = item;\n        this.quizStarted = true;\n        var options = document.getElementsByClassName(\"option\");\n        Array.from(options).forEach(function (option) {\n          if (option.textContent !== _this4.correctAnswer && option.textContent === event.target.textContent) {\n            option.classList.add(\"incorrect\");\n          }\n\n          if (option.textContent === _this4.correctAnswer) option.classList.add(\"correct\");\n        });\n        if (this.selectedAnswer === this.correctAnswer) this.points += 10;\n        event.target.classList.add(\"active\");\n      }\n\n      this.isChoosed = true;\n    }\n  },\n  mounted: function mounted() {\n    var _this5 = this;\n\n    fetch(\"http://10.10.10.23:8001/\" + \"api/details/\" + this.slug + \"/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return _this5.quiz = data;\n    }).then(function (data) {\n      return _this5.correctAnswer = data.answer;\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9xdWl6ZXMvUXVpekRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdmlld3MvcXVpemVzL1F1aXpEZXRhaWxzLnZ1ZT8wZDM1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuPGRpdj5cclxuICA8ZGl2IHYtaWY9XCJsb2FkaW5nID09PSBmYWxzZVwiPlxyXG4gICAgPHBcclxuICAgIHYtZm9yPVwicXVlc3Rpb24gaW4gcXVpei5xdWVzdGlvbl9zZXRcIlxyXG4gICAgOmtleT1cInF1ZXN0aW9uLmlkXCJcclxuICAgIGNsYXNzPVwiUXVpekNvdW50ZXJcIlxyXG4gID5cclxuICAgIDxzcGFuXHJcbiAgICAgIHYtZm9yPVwiYW5zd2VyIGluIHF1ZXN0aW9uLmFuc3dlcl9zZXQuc2xpY2UoMCwgMSlcIlxyXG4gICAgICA6a2V5PVwiYW5zd2VyLmlkXCJcclxuICAgICAgY2xhc3M9XCJRdWl6MlwiXHJcbiAgICA+PC9zcGFuPlxyXG4gIDwvcD5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHN0eWxlPVwibWFyZ2luOiBhdXRvXCI+XHJcbiAgICA8aW1nIDpzcmM9XCJgJHtxdWl6LmltYWdlfWBcIiBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIGFsdD1cIlwiIC8+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgIDxoMSBpZD1cInRpdGxlXCI+e3sgdGhpcy5xdWl6W1widGl0bGVcIl0gfX08L2gxPlxyXG4gICAgICA8aDUgaWQ9XCJjb3VudGVyXCIgY2xhc3M9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAge3sgYWN0dWFsUXVpeiB9fSAvIHt7IHF1aXpbXCJudW1iZXJfb2ZfcXVlc3Rpb25zXCJdIH19XHJcbiAgICAgIDwvaDU+XHJcbiAgICAgIDxwIHYtaWY9XCJ0aGlzLnF1ZXN0aW9uXCIgY2xhc3M9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICBRdWVzdGlvbjp7eyB0aGlzLnF1ZXN0aW9uIH19XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDx1bCB2LWlmPVwidGhpcy5hbnN3ZXJzWzBdXCIgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtaG9yaXpvbnRhbCBcIj5cclxuICAgICAgPGxpXHJcbiAgICAgICAgdi1pZj1cInRoaXMuYW5zd2Vyc1swXVwiXHJcbiAgICAgICAgQGNsaWNrPVwiaGFuZGxlU2VsZWN0SXRlbSh0aGlzLmFuc3dlcnNbMF0sICRldmVudClcIlxyXG4gICAgICAgIGlkPVwiMVwiXHJcbiAgICAgICAgY2xhc3M9XCJvcHRpb24gbGlzdC1ncm91cC1pdGVtIGl0ZW0gdy01MFwiXHJcbiAgICAgID5cclxuICAgICAgICB7eyB0aGlzLmFuc3dlcnNbMF0gfX1cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpXHJcbiAgICAgICAgdi1pZj1cInRoaXMuYW5zd2Vyc1sxXVwiXHJcbiAgICAgICAgQGNsaWNrPVwiaGFuZGxlU2VsZWN0SXRlbSh0aGlzLmFuc3dlcnNbMV0sICRldmVudClcIlxyXG4gICAgICAgIGlkPVwiMlwiXHJcbiAgICAgICAgY2xhc3M9XCJvcHRpb24gbGlzdC1ncm91cC1pdGVtIGl0ZW0gdy01MFwiXHJcbiAgICAgID5cclxuICAgICAgICB7eyB0aGlzLmFuc3dlcnNbMV0gfX1cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8dWwgdi1pZj1cInRoaXMuYW5zd2Vyc1syXVwiIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWhvcml6b250YWwgXCI+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgIHYtaWY9XCJ0aGlzLmFuc3dlcnNbMl1cIlxyXG4gICAgICAgIEBjbGljaz1cImhhbmRsZVNlbGVjdEl0ZW0odGhpcy5hbnN3ZXJzWzJdLCAkZXZlbnQpXCJcclxuICAgICAgICBpZD1cIjNcIlxyXG4gICAgICAgIGNsYXNzPVwib3B0aW9uIGxpc3QtZ3JvdXAtaXRlbSB3LTUwXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IHRoaXMuYW5zd2Vyc1syXSB9fVxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGlcclxuICAgICAgICB2LWlmPVwidGhpcy5hbnN3ZXJzWzNdXCJcclxuICAgICAgICBAY2xpY2s9XCJoYW5kbGVTZWxlY3RJdGVtKHRoaXMuYW5zd2Vyc1szXSwgJGV2ZW50KVwiXHJcbiAgICAgICAgaWQ9XCI0XCJcclxuICAgICAgICBjbGFzcz1cIm9wdGlvbiBsaXN0LWdyb3VwLWl0ZW0gdy01MFwiXHJcbiAgICAgID5cclxuICAgICAgICB7eyB0aGlzLmFuc3dlcnNbM10gfX1cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG5cclxuICAgICAgPCEtLSBQbGF5IGJ1dHRvbnMgLS0+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB2LWlmPVwiIXRoaXMucXVlc3Rpb24gJiYgIXRoaXMucXVpekZpbmlzaGVkXCJcclxuICAgICAgICBAY2xpY2s9XCJnZXRBY3R1YWxRdWl6KHRoaXMuYWN0dWFsUXVpeilcIlxyXG4gICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBwbGF5LWJ0biBmdWxsLXdpZHRoXCJcclxuICAgICAgICBpZD1cInN0YXJ0LWJ1dHRvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3Bhbj5Tb2xvPC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj4gPGJyPjxicj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHYtaWY9XCIhdGhpcy5xdWVzdGlvbiAmJiAhdGhpcy5xdWl6RmluaXNoZWRcIlxyXG4gICAgICAgIEBjbGljaz1cImdldEFjdHVhbFF1aXoodGhpcy5hY3R1YWxRdWl6KVwiXHJcbiAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIHBsYXktYnRuICBmdWxsLXdpZHRoXCJcclxuICAgICAgICBpZD1cInN0YXJ0LWJ1dHRvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIlwiPlBsYXkgd2l0aCBmcmllbmQ8L3NwYW4+XHJcbiAgICAgIDwvYnV0dG9uPjxicj48YnI+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB2LWlmPVwiIXRoaXMucXVlc3Rpb24gJiYgIXRoaXMucXVpekZpbmlzaGVkXCJcclxuICAgICAgICBAY2xpY2s9XCJnZXRBY3R1YWxRdWl6KHRoaXMuYWN0dWFsUXVpeilcIlxyXG4gICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBwbGF5LWJ0biBmdWxsLXdpZHRoXCJcclxuICAgICAgICBpZD1cInN0YXJ0LWJ1dHRvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3Bhbj5GaW5kIG9wcG9uZW50PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuIFxyXG4gICAgICA8ZGl2ICB2LWlmPVwicXVpekZpbmlzaGVkXCIgPiBcclxuICAgICAgICA8aDE+UXVpeiBoYXMgYmVlbiBmaW5pc2hlZDwvaDE+XHJcbiAgICAgIDxoMj5Zb3VyIHBvaW50czoge3sgcG9pbnRzIH19IC8ge3sgcXVpeltcInJlcXVpcmVkX3Njb3JlX3RvX3Bhc3NcIl0gfX08L2gyPlxyXG4gICAgICA8cD5hdXRob3I6IHt7IHF1aXpbXCJhdXRob3JcIl0gfX08L3A+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG5cclxuICA8cm91bmQtdHJhbnNpdGlvbiB2LWlmPVwibG9hZGluZyA9PT0gdHJ1ZSAmJiBhY3R1YWxRdWl6IDw9IHF1aXpbJ3F1ZXN0aW9uX3NldCddLmxlbmd0aFwiIDpxdWl6X25hbWU9XCJxdWl6Wyd0aXRsZSddXCIgOnF1aXpJY29uPVwicXVpelsnaWNvbiddXCIgOnJvdW5kPVwiYWN0dWFsUXVpelwiID48L3JvdW5kLXRyYW5zaXRpb24+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFJvdW5kVHJhbnNpdGlvbiBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9xdWl6L1JvdW5kVHJhbnNpdGlvbi52dWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJRdWl6RGV0YWlsc1wiLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIFJvdW5kVHJhbnNpdGlvbixcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBxdWl6OiBbXSxcclxuICAgICAgc2x1ZzogdGhpcy4kcm91dGUucGFyYW1zLnNsdWcsXHJcbiAgICAgIHNlbGVjdGVkQW5zd2VyOiBudWxsLFxyXG4gICAgICBjb3JyZWN0QW5zd2VyOiAwLFxyXG4gICAgICBxdWVzdGlvbjogXCJcIixcclxuICAgICAgYW5zd2VyczogW10sXHJcbiAgICAgIGFjdHVhbFF1aXo6IDAsXHJcbiAgICAgIHF1aXpGaW5pc2hlZDogZmFsc2UsXHJcbiAgICAgIHF1aXpTdGFydGVkOiBmYWxzZSxcclxuICAgICAgcG9pbnRzOiAwLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgaXNDaG9vc2VkOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBsb2FkTmV4dFJvdW5kKCkge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkaW5nPWZhbHNlLCAzMDAwKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmxvYWRpbmcpXHJcbiAgICAgIHRoaXMuaXNDaG9vc2VkID0gZmFsc2VcclxuICAgIH0sXHJcblxyXG4gICAgcmVzZXRPcHRpb25zKCkge1xyXG4gICAgICAvL3Jlc2V0IGFuc3dlcnMgYW5kIHNlbGVjdGVkQW5zd2VyXHJcbiAgICAgIHRoaXMuYW5zd2VycyA9IFtdO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkQW5zd2VyID0gXCJcIjtcclxuXHJcbiAgICAgIC8vZ2V0IGFuc3dlciBkaXZzXHJcbiAgICAgIGxldCBvcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm9wdGlvblwiKTtcclxuXHJcbiAgICAgIC8vRm9yIGVhY2ggb3B0aW9uIGRpdiByZW1vdmUgYWxsIG9wZXJhdGlvbmFsIGNsYXNzZXNcclxuICAgICAgQXJyYXkuZnJvbShvcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICBvcHRpb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBvcHRpb24uY2xhc3NMaXN0LnJlbW92ZShcImNvcnJlY3RcIik7XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmNvcnJlY3RcIik7XHJcblxyXG4gICAgICAgIC8vUmVzZXQgb3B0aW9uIGRpdnMgdGV4dENvbnRlbnRcclxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY29ycmVjdEFuc3dlciA9IFwiXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldEFjdHVhbFF1aXooYWN0dWFsUXVpek51bWJlcikge1xyXG4gICAgICB0aGlzLmxvYWROZXh0Um91bmQoKVxyXG4gICAgICAvL3NvbG8sIGR1ZWwsIGZpbmRcclxuICAgICAgLy9yZXNldCBvcHRpb24gZGl2c1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEFuc3dlciB8fCAhdGhpcy5xdWl6U3RhcnRlZCkge1xyXG4gICAgICAgIHRoaXMucmVzZXRPcHRpb25zKCk7XHJcblxyXG4gICAgICAgIC8vaWYgdGhlcmUgaXMgbW9yZSBxdWVzdGlvbnMgbGVmdFxyXG4gICAgICAgIGlmICh0aGlzLnF1aXpbXCJxdWVzdGlvbl9zZXRcIl1bYWN0dWFsUXVpek51bWJlcl0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgLy9xdWVzdGlvbiA9XHJcbiAgICAgICAgICB0aGlzLnF1ZXN0aW9uID0gdGhpcy5xdWl6W1wicXVlc3Rpb25fc2V0XCJdW2FjdHVhbFF1aXpOdW1iZXJdLnRleHQ7XHJcblxyXG4gICAgICAgICAgLy8gZm9yIGVhY2ggYW5zd2VyIGluIGFjdHVhbCBRdWVzdGlvbiBzZXQgYW5zd2Vyc1xyXG4gICAgICAgICAgdGhpcy5xdWl6W1wicXVlc3Rpb25fc2V0XCJdW2FjdHVhbFF1aXpOdW1iZXJdW1wiYW5zd2VyX3NldFwiXS5mb3JFYWNoKFxyXG4gICAgICAgICAgICAoYW5zd2VyKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5hbnN3ZXJzLnB1c2goYW5zd2VyW1widGV4dFwiXSk7XHJcbiAgICAgICAgICAgICAgLy9pZiBhbnN3ZXIgaXMgY29ycmVjdCBhZGQgaXQgdG8gY29ycmVjdEFuc3dlciBWYXJpYWJsZVxyXG4gICAgICAgICAgICAgIGlmIChhbnN3ZXJbXCJpc19jb3JyZWN0XCJdID09PSB0cnVlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3JyZWN0QW5zd2VyID0gYW5zd2VyW1widGV4dFwiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIG1vcmUgcXVlc3Rpb246XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucXVlc3Rpb24gPSBcIlwiO1xyXG4gICAgICAgICAgdGhpcy5xdWl6RmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy9pbmNyZW1lbnQgQWN0dWFsIFF1ZXN0aW9uICsxIGlmIHF1aXogaGFzbnQgYmVlbiBmaW5pc2hlZFxyXG4gICAgICB0aGlzLmFjdHVhbFF1aXorKztcclxuICAgIH0sXHJcblxyXG4gICAgaGFuZGxlU2VsZWN0SXRlbShpdGVtLCBldmVudCkge1xyXG4gICAgICBpZiAodGhpcy5pc0Nob29zZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmdldEFjdHVhbFF1aXoodGhpcy5hY3R1YWxRdWl6KSwgMzAwMClcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNzXCIpXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRBbnN3ZXIgPT09IFwiXCIpIHRoaXMuc2VsZWN0ZWRBbnN3ZXIgPSBpdGVtO1xyXG4gICAgICAgIHRoaXMucXVpelN0YXJ0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvcHRpb25cIik7XHJcblxyXG4gICAgICAgIEFycmF5LmZyb20ob3B0aW9ucykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICBpZiAob3B0aW9uLnRleHRDb250ZW50ICE9PSB0aGlzLmNvcnJlY3RBbnN3ZXIgJiYgb3B0aW9uLnRleHRDb250ZW50ID09PSBldmVudC50YXJnZXQudGV4dENvbnRlbnQpIHtcclxuICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJpbmNvcnJlY3RcIik7XHJcbiAgICAgICAgICB9IGlmIChvcHRpb24udGV4dENvbnRlbnQgPT09IHRoaXMuY29ycmVjdEFuc3dlcikgb3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb3JyZWN0XCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEFuc3dlciA9PT0gdGhpcy5jb3JyZWN0QW5zd2VyKSB0aGlzLnBvaW50cyArPSAxMDtcclxuXHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pc0Nob29zZWQgPSB0cnVlXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIGZldGNoKHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBgYXBpL2RldGFpbHMvYCArIHRoaXMuc2x1ZyArIGAvYClcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+ICh0aGlzLnF1aXogPSBkYXRhKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+ICh0aGlzLmNvcnJlY3RBbnN3ZXIgPSBkYXRhLmFuc3dlcikpXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkpO1xyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3Age1xyXG4gIGhlaWdodDogMTVlbTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLlF1aXpDb3VudGVyIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB0ZXh0LWFsaWduOiB0b3A7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5vcHRpb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjQ2ZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG51bC5saXN0LWdyb3VwIGxpLmFjdGl2ZSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjQ2ZmY7XHJcbn1cclxuXHJcbnVsLmxpc3QtZ3JvdXAgbGkuY29ycmVjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbnVsLmxpc3QtZ3JvdXAgbGkuaW5jb3JyZWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiN0aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBtYXJnaW4tbGVmdDogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGJ1dHRvbi5mdWxsLXdpZHRoIHtcclxuICAgICAgICB3aWR0aDogMTAwJTsgIFxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFnSEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBY0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUEvRUE7QUFpRkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUE1R0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/QuizDetails.vue?vue&type=script&lang=js\n");

/***/ })

})