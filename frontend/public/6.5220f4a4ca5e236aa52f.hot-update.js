webpackHotUpdate(6,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/AddQuiz.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/quizes/AddQuiz.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _AddQuizPre_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddQuizPre.vue */ \"./views/quizes/AddQuizPre.vue\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'AddQuiz',\n  components: {\n    AddQuizPre: _AddQuizPre_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  props: {\n    modex: null\n  },\n  data: function data() {\n    return {\n      categories: [],\n      questionDivs: 1,\n      buttonsCount: 2,\n      mode: this.modex\n    };\n  },\n  methods: {\n    route: function route(to) {\n      if (to === 'new') this.mode = 'new';else this.mode = 'existing';\n    },\n    addAnswer: function addAnswer() {\n      if (this.buttonsCount < 3) {\n        this.buttonsCount++;\n        var answerDiv = document.getElementById(\"answer 1\");\n        var questionDiv = document.getElementById('questionDiv');\n        var removeAnswerButton = document.getElementById(\"removeAnswerButton\");\n        var addAnswerButton = document.getElementById(\"addAnswerButton\");\n        removeAnswerButton.disabled = false;\n        var answerInput = answerDiv.cloneNode(true);\n        answerInput.id = \"answer \" + this.buttonsCount;\n        answerInput.innerHTML = answerInput.innerHTML.replace(/1/g, \"3\");\n        var input = document.createElement(\"input\");\n        input.id = \"AnswerId \" + this.buttonsCount, input.classList.add(\"AnswerInput\");\n        questionDiv.insertBefore(answerInput, addAnswerButton);\n        console.log(this.buttonsCount);\n      } else if (this.buttonsCount === 3) {\n        this.buttonsCount++;\n\n        var _answerDiv = document.getElementById(\"answer 1\");\n\n        var _questionDiv = document.getElementById('questionDiv');\n\n        var _addAnswerButton = document.getElementById(\"addAnswerButton\");\n\n        var _answerInput = _answerDiv.cloneNode(true);\n\n        _answerInput.id = \"answer \" + this.buttonsCount;\n        _answerInput.innerHTML = _answerInput.innerHTML.replace(/1/g, \"4\");\n\n        var _input = document.createElement(\"input\");\n\n        _input.id = \"AnswerId \" + this.buttonsCount, _input.classList.add(\"AnswerInput\");\n\n        _questionDiv.insertBefore(_answerInput, _addAnswerButton);\n\n        _addAnswerButton.disabled = true;\n        console.log(this.buttonsCount);\n      }\n    },\n    removeAnswer: function removeAnswer() {\n      if (this.buttonsCount < 4) {\n        var lastInput = document.getElementById(\"answer 3\");\n        lastInput.remove();\n        this.buttonsCount--;\n        var removeAnswerButton = document.getElementById(\"removeAnswerButton\");\n        removeAnswerButton.disabled = true;\n      } else if (this.buttonsCount === 4) {\n        var _lastInput = document.getElementById(\"answer 4\");\n\n        var addAnswerButton = document.getElementById(\"addAnswerButton\");\n        addAnswerButton.disabled = false;\n\n        _lastInput.remove();\n\n        this.buttonsCount--;\n      }\n    },\n    addQuestion: function addQuestion() {\n      var answerInputs = document.getElementsByClassName(\"AnswerInput\");\n      var questionInput = document.createElement(\"input\");\n      var questionsdiv = document.getElementById(\"questions\");\n      var questionDiv = document.getElementById(\"questionValue\");\n      var labelQuestion = document.createElement(\"LABEL\");\n      labelQuestion.textContent = \"Question: \";\n      var labelAnswerOne = document.createElement(\"LABEL\");\n      labelAnswerOne.textContent = \"Answer 1: \";\n      var labelAnswerTwo = document.createElement(\"LABEL\");\n      labelAnswerTwo.textContent = \"Answer 2: \";\n      var labelAnswerThree = document.createElement(\"LABEL\");\n      labelAnswerThree.textContent = \"Answer 3: \";\n      var labelAnswerFour = document.createElement(\"LABEL\");\n      labelAnswerFour.textContent = \"Answer 4: \";\n      var answerOne = document.getElementById(\"AnswerId 1\");\n      var answerTwo = document.getElementById(\"AnswerId 2\");\n      questionInput.id = \"question\", questionInput.name = \"question\", questionInput.value = questionDiv.value;\n      var answerOneInput = document.createElement(\"input\");\n      answerOneInput.id = \"answer_one\", answerOneInput.name = \"answer\", answerOneInput.value = answerOne.value;\n      var answerTwoInput = document.createElement(\"input\");\n      answerTwoInput.id = \"answer_two\", answerTwoInput.name = \"answer\", answerTwoInput.value = answerTwo.value;\n      questionsdiv.appendChild(labelQuestion);\n      questionsdiv.appendChild(questionInput);\n      questionsdiv.appendChild(labelAnswerOne);\n      questionsdiv.appendChild(answerOneInput);\n      questionsdiv.appendChild(labelAnswerTwo);\n      questionsdiv.appendChild(answerTwoInput);\n      console.log(\"answerInputs len: \" + answerInputs.length);\n\n      if (answerInputs.length > 2) {\n        var answerThree = document.getElementById(\"AnswerId 3\");\n        var answerThreeInput = document.createElement(\"input\");\n        answerThreeInput.id = \"answer_three\", answerThreeInput.name = \"answer\", answerThreeInput.value = answerThree.value;\n        questionsdiv.appendChild(labelAnswerThree);\n        questionsdiv.appendChild(answerThreeInput);\n      }\n\n      if (answerInputs.length > 3) {\n        var answerFour = document.getElementById(\"AnswerId 4\");\n        var answerFourInput = document.createElement(\"input\");\n        answerFourInput.id = \"answer_four\", answerFourInput.name = \"answer\", answerFourInput.value = answerFour.value;\n        questionsdiv.appendChild(labelAnswerFour);\n        questionsdiv.appendChild(answerFourInput);\n      }\n\n      questionDiv.value = \"\";\n\n      for (var i = 0, len = answerInputs.length; i < len; i++) {\n        answerInputs[i].value = \"\";\n      }\n    },\n    addAnswerx: function addAnswerx(event) {\n      var answerDiv = document.getElementById(\"answer 1\");\n      var answerInput = answerDiv.cloneNode(true);\n      answerInput.id = \"answer \" + this.answerButtons;\n      var questionDiv = document.getElementById('questionDiv ' + event.target.id);\n      questionDiv.insertBefore(answerInput, questionDiv.lastChild);\n    },\n    addQuestionx: function addQuestionx() {\n      this.questionDivs++;\n      var questionDiv = document.getElementById(\"questionDiv 1\");\n      var nextQuestion = questionDiv.cloneNode(true);\n      var Addbutton = document.getElementById(\"1\");\n      var newAddbutton = Addbutton.cloneNode(true);\n      newAddbutton.id = this.questionDivs;\n      newAddbutton.addEventListener(\"click\", this.addAnswer, false);\n      nextQuestion.replaceChild(newAddbutton, nextQuestion.lastChild);\n      nextQuestion.id = \"questionDiv \" + String(this.questionDivs);\n      var form = document.getElementById('form');\n      form.appendChild(nextQuestion);\n    }\n  },\n  mounted: function mounted() {\n    var _this = this;\n\n    fetch(\"http://localhost:8002/\" + \"api/categories/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return _this.categories = data;\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9xdWl6ZXMvQWRkUXVpei52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi92aWV3cy9xdWl6ZXMvQWRkUXVpei52dWU/NTkwYyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgdi1pZj1cIm1vZGUgIT09IG51bGxcIj5cclxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2FwaS9kZXRhaWxzL1wiIG1ldGhvZD1cInBvc3RcIj5cclxuICAgICAgICBRdWl6IE5hbWU6IDxpbnB1dCBuYW1lPVwiVGl0bGVcIiBpZD1cIlRpdGxlXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cInR5cGUgdGl0bGVcIj4gPGJyPlxyXG4gICAgICAgIERlc2NyaXB0aW9uOiA8aW5wdXQgbmFtZT1cIkRlc2NyaXB0aW9uXCIgaWQ9XCJEZXNjcmlwdGlvblwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJ0eXBlIGRlc2NyaXB0aW9uXCI+IDxicj5cclxuICAgICAgICBJbWFnZTogPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cIkltYWdlXCIgaWQ9XCJJbWFnZVwiIHZhbHVlPVwiXCI+IDxicj5cclxuICAgICAgICBDYXRlZ29yeSA8c2VsZWN0IG5hbWU9XCJDYXRlZ29yeVwiIGlkPVwiQ2F0ZWdvcnlcIiB2YWx1ZT1cIlwiPlxyXG4gICAgICAgICAgICA8b3B0aW9uIDp2YWx1ZT1cImNhdGVnb3J5LmNhdGVnb3J5XCIgdi1mb3I9XCJjYXRlZ29yeSBpbiBjYXRlZ29yaWVzXCIgOmtleT1cImNhdGVnb3J5LmlkXCI+e3tjYXRlZ29yeS5jYXRlZ29yeX19PC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+IDxicj4gPGJyPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgaWQ9XCJxdWVzdGlvbnNcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPiA8YnI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJxdWVzdGlvbkRpdlwiIGlkPVwicXVlc3Rpb25EaXZcIj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgUXVlc3Rpb246IDxpbnB1dCBpZD1cInF1ZXN0aW9uVmFsdWVcIj4gPGJyPjxicj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImFuc3dlciAxXCIgY2xhc3M9XCJhbnN3ZXJcIj5BbnN3ZXIgMSA8aW5wdXQgY2xhc3M9XCJBbnN3ZXJJbnB1dFwiIGlkPVwiQW5zd2VySWQgMVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmbGV4UmFkaW9EZWZhdWx0XCIgaWQ9XCJmbGV4UmFkaW9EZWZhdWx0MVwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiZmxleFJhZGlvRGVmYXVsdDFcIj5cclxuICAgICAgICAgICAgICAgIENvcnJlY3RcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhbnN3ZXIgMlwiIGNsYXNzPVwiYW5zd2VyXCI+QW5zd2VyIDIgPGlucHV0IGNsYXNzPVwiQW5zd2VySW5wdXRcIiBpZD1cIkFuc3dlcklkIDJcIj5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCIgc3R5bGU9XCJmbG9hdDpyaWdodFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cImZsZXhSYWRpb0RlZmF1bHRcIiBpZD1cImZsZXhSYWRpb0RlZmF1bHQxXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJmbGV4UmFkaW9EZWZhdWx0MVwiPlxyXG4gICAgICAgICAgICAgICAgQ29ycmVjdFxyXG4gICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJhZGRBbnN3ZXIoKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgaWQ9XCJhZGRBbnN3ZXJCdXR0b25cIj4rPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9XCJ0cnVlXCIgdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cInJlbW92ZUFuc3dlcigpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBpZD1cInJlbW92ZUFuc3dlckJ1dHRvblwiPi08L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJhZGRRdWVzdGlvbigpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5BZGQgUXVlc3Rpb248L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPEFkZFF1aXpQcmUgdi1pZj1cIm1vZGUgPT09IG51bGxcIiBAbWVzc2FnZT1cInJvdXRlKCRldmVudClcIj48L0FkZFF1aXpQcmU+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEFkZFF1aXpQcmUgZnJvbSAnLi9BZGRRdWl6UHJlLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdBZGRRdWl6JyxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICBBZGRRdWl6UHJlLFxyXG4gICAgfSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgbW9kZXg6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgICAgICAgcXVlc3Rpb25EaXZzOiAxLFxyXG4gICAgICAgICAgICBidXR0b25zQ291bnQ6IDIsXHJcbiAgICAgICAgICAgIG1vZGU6IHRoaXMubW9kZXgsXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHJvdXRlKHRvKSB7XHJcbiAgICAgICAgICAgIGlmICh0byA9PT0gJ25ldycpIHRoaXMubW9kZSA9ICduZXcnXHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5tb2RlID0gJ2V4aXN0aW5nJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkQW5zd2VyKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5idXR0b25zQ291bnQgPCAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbnNDb3VudCsrXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5zd2VyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbnN3ZXIgMVwiKVxyXG4gICAgICAgICAgICAgICAgbGV0IHF1ZXN0aW9uRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0aW9uRGl2JylcclxuICAgICAgICAgICAgICAgIGxldCByZW1vdmVBbnN3ZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlbW92ZUFuc3dlckJ1dHRvblwiKVxyXG4gICAgICAgICAgICAgICAgbGV0IGFkZEFuc3dlckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkQW5zd2VyQnV0dG9uXCIpXHJcbiAgICAgICAgICAgICAgICByZW1vdmVBbnN3ZXJCdXR0b24uZGlzYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5zd2VySW5wdXQgPSBhbnN3ZXJEaXYuY2xvbmVOb2RlKHRydWUpXHJcbiAgICAgICAgICAgICAgICBhbnN3ZXJJbnB1dC5pZCA9IFwiYW5zd2VyIFwiICsgdGhpcy5idXR0b25zQ291bnRcclxuICAgICAgICAgICAgICAgIGFuc3dlcklucHV0LmlubmVySFRNTCA9IGFuc3dlcklucHV0LmlubmVySFRNTC5yZXBsYWNlKC8xL2csIFwiM1wiKVxyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICBpbnB1dC5pZD1cIkFuc3dlcklkIFwiK3RoaXMuYnV0dG9uc0NvdW50LCBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiQW5zd2VySW5wdXRcIilcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uRGl2Lmluc2VydEJlZm9yZShhbnN3ZXJJbnB1dCwgYWRkQW5zd2VyQnV0dG9uKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5idXR0b25zQ291bnQpXHJcblxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJ1dHRvbnNDb3VudCA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25zQ291bnQrK1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuc3dlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5zd2VyIDFcIilcclxuICAgICAgICAgICAgICAgIGxldCBxdWVzdGlvbkRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWVzdGlvbkRpdicpXHJcbiAgICAgICAgICAgICAgICBsZXQgYWRkQW5zd2VyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRBbnN3ZXJCdXR0b25cIilcclxuICAgICAgICAgICAgICAgIGxldCBhbnN3ZXJJbnB1dCA9IGFuc3dlckRpdi5jbG9uZU5vZGUodHJ1ZSlcclxuICAgICAgICAgICAgICAgIGFuc3dlcklucHV0LmlkID0gXCJhbnN3ZXIgXCIgKyB0aGlzLmJ1dHRvbnNDb3VudFxyXG4gICAgICAgICAgICAgICAgYW5zd2VySW5wdXQuaW5uZXJIVE1MID0gYW5zd2VySW5wdXQuaW5uZXJIVE1MLnJlcGxhY2UoLzEvZywgXCI0XCIpXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIGlucHV0LmlkPVwiQW5zd2VySWQgXCIrdGhpcy5idXR0b25zQ291bnQsIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJBbnN3ZXJJbnB1dFwiKVxyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25EaXYuaW5zZXJ0QmVmb3JlKGFuc3dlcklucHV0LCBhZGRBbnN3ZXJCdXR0b24pXHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhZGRBbnN3ZXJCdXR0b24uZGlzYWJsZWQ9dHJ1ZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5idXR0b25zQ291bnQpXHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZUFuc3dlcigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYnV0dG9uc0NvdW50IDwgNCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5zd2VyIDNcIilcclxuICAgICAgICAgICAgICAgIGxhc3RJbnB1dC5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25zQ291bnQtLVxyXG4gICAgICAgICAgICAgICAgbGV0IHJlbW92ZUFuc3dlckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVtb3ZlQW5zd2VyQnV0dG9uXCIpXHJcbiAgICAgICAgICAgICAgICByZW1vdmVBbnN3ZXJCdXR0b24uZGlzYWJsZWQ9dHJ1ZVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmJ1dHRvbnNDb3VudCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxhc3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5zd2VyIDRcIilcclxuICAgICAgICAgICAgICAgIGxldCBhZGRBbnN3ZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEFuc3dlckJ1dHRvblwiKVxyXG4gICAgICAgICAgICAgICAgYWRkQW5zd2VyQnV0dG9uLmRpc2FibGVkPWZhbHNlXHJcbiAgICAgICAgICAgICAgICBsYXN0SW5wdXQucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uc0NvdW50LS1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhZGRRdWVzdGlvbigpIHtcclxuICAgICAgICAgICAgbGV0IGFuc3dlcklucHV0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJBbnN3ZXJJbnB1dFwiKVxyXG4gICAgICAgICAgICBsZXQgcXVlc3Rpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGxldCBxdWVzdGlvbnNkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXN0aW9uc1wiKVxyXG4gICAgICAgICAgICBsZXQgcXVlc3Rpb25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXN0aW9uVmFsdWVcIilcclxuXHJcbiAgICAgICAgICAgIGxldCBsYWJlbFF1ZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxBQkVMXCIpXHJcbiAgICAgICAgICAgIGxhYmVsUXVlc3Rpb24udGV4dENvbnRlbnQ9XCJRdWVzdGlvbjogXCJcclxuICAgICAgICAgICAgbGV0IGxhYmVsQW5zd2VyT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxBQkVMXCIpXHJcbiAgICAgICAgICAgIGxhYmVsQW5zd2VyT25lLnRleHRDb250ZW50PVwiQW5zd2VyIDE6IFwiXHJcbiAgICAgICAgICAgIGxldCBsYWJlbEFuc3dlclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMQUJFTFwiKVxyXG4gICAgICAgICAgICBsYWJlbEFuc3dlclR3by50ZXh0Q29udGVudD1cIkFuc3dlciAyOiBcIlxyXG4gICAgICAgICAgICBsZXQgbGFiZWxBbnN3ZXJUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMQUJFTFwiKVxyXG4gICAgICAgICAgICBsYWJlbEFuc3dlclRocmVlLnRleHRDb250ZW50PVwiQW5zd2VyIDM6IFwiXHJcbiAgICAgICAgICAgIGxldCBsYWJlbEFuc3dlckZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTEFCRUxcIilcclxuICAgICAgICAgICAgbGFiZWxBbnN3ZXJGb3VyLnRleHRDb250ZW50PVwiQW5zd2VyIDQ6IFwiXHJcblxyXG4gICAgICAgICAgICBsZXQgYW5zd2VyT25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBbnN3ZXJJZCAxXCIpXHJcbiAgICAgICAgICAgIGxldCBhbnN3ZXJUd28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkFuc3dlcklkIDJcIilcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBxdWVzdGlvbklucHV0LmlkID0gXCJxdWVzdGlvblwiLCBxdWVzdGlvbklucHV0Lm5hbWUgPSBcInF1ZXN0aW9uXCIsIHF1ZXN0aW9uSW5wdXQudmFsdWUgPSBxdWVzdGlvbkRpdi52YWx1ZSBcclxuICAgICAgICAgICAgbGV0IGFuc3dlck9uZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICAgICAgICAgIGFuc3dlck9uZUlucHV0LmlkID0gXCJhbnN3ZXJfb25lXCIsIGFuc3dlck9uZUlucHV0Lm5hbWUgPSBcImFuc3dlclwiLCAgYW5zd2VyT25lSW5wdXQudmFsdWUgPSBhbnN3ZXJPbmUudmFsdWUgXHJcbiAgICAgICAgICAgIGxldCBhbnN3ZXJUd29JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgICAgICAgICBhbnN3ZXJUd29JbnB1dC5pZCA9IFwiYW5zd2VyX3R3b1wiLCBhbnN3ZXJUd29JbnB1dC5uYW1lID0gXCJhbnN3ZXJcIiwgIGFuc3dlclR3b0lucHV0LnZhbHVlID0gYW5zd2VyVHdvLnZhbHVlIFxyXG5cclxuICAgICAgICAgICAgcXVlc3Rpb25zZGl2LmFwcGVuZENoaWxkKGxhYmVsUXVlc3Rpb24pXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uc2Rpdi5hcHBlbmRDaGlsZChxdWVzdGlvbklucHV0KVxyXG5cclxuICAgICAgICAgICAgcXVlc3Rpb25zZGl2LmFwcGVuZENoaWxkKGxhYmVsQW5zd2VyT25lKVxyXG4gICAgICAgICAgICBxdWVzdGlvbnNkaXYuYXBwZW5kQ2hpbGQoYW5zd2VyT25lSW5wdXQpXHJcblxyXG4gICAgICAgICAgICBxdWVzdGlvbnNkaXYuYXBwZW5kQ2hpbGQobGFiZWxBbnN3ZXJUd28pXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uc2Rpdi5hcHBlbmRDaGlsZChhbnN3ZXJUd29JbnB1dClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhbnN3ZXJJbnB1dHMgbGVuOiBcIiArIGFuc3dlcklucHV0cy5sZW5ndGgpXHJcblxyXG4gICAgICAgICAgICBpZiAoYW5zd2VySW5wdXRzLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhbnN3ZXJUaHJlZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQW5zd2VySWQgM1wiKVxyXG4gICAgICAgICAgICAgICAgbGV0IGFuc3dlclRocmVlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICAgICAgICAgIGFuc3dlclRocmVlSW5wdXQuaWQgPSBcImFuc3dlcl90aHJlZVwiLCBhbnN3ZXJUaHJlZUlucHV0Lm5hbWUgPSBcImFuc3dlclwiLCAgYW5zd2VyVGhyZWVJbnB1dC52YWx1ZSA9IGFuc3dlclRocmVlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbnNkaXYuYXBwZW5kQ2hpbGQobGFiZWxBbnN3ZXJUaHJlZSlcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uc2Rpdi5hcHBlbmRDaGlsZChhbnN3ZXJUaHJlZUlucHV0KVxyXG5cclxuICAgICAgICAgICAgfSBpZiAoYW5zd2VySW5wdXRzLmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhbnN3ZXJGb3VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJBbnN3ZXJJZCA0XCIpXHJcbiAgICAgICAgICAgICAgICBsZXQgYW5zd2VyRm91cklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICAgICAgICAgICAgICBhbnN3ZXJGb3VySW5wdXQuaWQgPSBcImFuc3dlcl9mb3VyXCIsIGFuc3dlckZvdXJJbnB1dC5uYW1lID0gXCJhbnN3ZXJcIiwgIGFuc3dlckZvdXJJbnB1dC52YWx1ZSA9IGFuc3dlckZvdXIudmFsdWVcclxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uc2Rpdi5hcHBlbmRDaGlsZChsYWJlbEFuc3dlckZvdXIpXHJcbiAgICAgICAgICAgICAgICBxdWVzdGlvbnNkaXYuYXBwZW5kQ2hpbGQoYW5zd2VyRm91cklucHV0KVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uRGl2LnZhbHVlID0gXCJcIlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFuc3dlcklucHV0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYW5zd2VySW5wdXRzW2ldLnZhbHVlID0gXCJcIlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0sXHJcblxyXG5cclxuICAgICAgICBhZGRBbnN3ZXJ4KGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBhbnN3ZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuc3dlciAxXCIpXHJcbiAgICAgICAgICAgIGxldCBhbnN3ZXJJbnB1dCA9IGFuc3dlckRpdi5jbG9uZU5vZGUodHJ1ZSlcclxuICAgICAgICAgICAgYW5zd2VySW5wdXQuaWQgPSBcImFuc3dlciBcIiArIHRoaXMuYW5zd2VyQnV0dG9uc1xyXG4gICAgICAgICAgICBsZXQgcXVlc3Rpb25EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb25EaXYgJyArIGV2ZW50LnRhcmdldC5pZClcclxuXHJcbiAgICAgICAgICAgIHF1ZXN0aW9uRGl2Lmluc2VydEJlZm9yZShhbnN3ZXJJbnB1dCwgcXVlc3Rpb25EaXYubGFzdENoaWxkKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZFF1ZXN0aW9ueCgpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbkRpdnMrK1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHF1ZXN0aW9uRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWVzdGlvbkRpdiAxXCIpXHJcbiAgICAgICAgICAgIGxldCBuZXh0UXVlc3Rpb24gPSBxdWVzdGlvbkRpdi5jbG9uZU5vZGUodHJ1ZSlcclxuICAgICAgICAgICAgbGV0IEFkZGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiMVwiKVxyXG4gICAgICAgICAgICBsZXQgbmV3QWRkYnV0dG9uID0gQWRkYnV0dG9uLmNsb25lTm9kZSh0cnVlKVxyXG4gICAgICAgICAgICBuZXdBZGRidXR0b24uaWQ9dGhpcy5xdWVzdGlvbkRpdnNcclxuICAgICAgICAgICAgbmV3QWRkYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmFkZEFuc3dlciwgZmFsc2UpXHJcbiAgICAgICAgICAgIG5leHRRdWVzdGlvbi5yZXBsYWNlQ2hpbGQobmV3QWRkYnV0dG9uLCBuZXh0UXVlc3Rpb24ubGFzdENoaWxkKVxyXG4gICAgICAgICAgICBuZXh0UXVlc3Rpb24uaWQgPSBcInF1ZXN0aW9uRGl2IFwiICsgU3RyaW5nKHRoaXMucXVlc3Rpb25EaXZzKVxyXG5cclxuICAgICAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpXHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobmV4dFF1ZXN0aW9uKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIGZldGNoKHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBcImFwaS9jYXRlZ29yaWVzL1wiKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+ICh0aGlzLmNhdGVnb3JpZXMgPSBkYXRhKSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKVxyXG4gIH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblxyXG4ucXVlc3Rpb25EaXYge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGJvcmRlcjoycHggO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcblxyXG59XHJcblxyXG4jcXVlc3Rpb25zIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyOjJweCA7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHJcbn1cclxuXHJcbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQStDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFySkE7QUF1SkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQTlLQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/AddQuiz.vue?vue&type=script&lang=js\n");

/***/ })

})