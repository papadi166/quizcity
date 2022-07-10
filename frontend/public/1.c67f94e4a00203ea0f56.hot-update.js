webpackHotUpdate(1,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/QuizDetails.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/quizes/QuizDetails.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_components_quiz_RoundTransition_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/quiz/RoundTransition.vue */ \"./src/components/quiz/RoundTransition.vue\");\n\n\n\n\n // TODO: Make imposible to change user points in code, hack\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"QuizDetails\",\n  components: {\n    RoundTransition: _src_components_quiz_RoundTransition_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  data: function data() {\n    return {\n      rounds: [\"http://10.10.10.23:8002/static/assets/297806.png\", \"http://10.10.10.23:8002/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\"],\n      players: [{\n        // load player data here\n        \"name\": \"guest\",\n        \"photo_url\": \"http://10.10.10.23:8002/static/assets/gamer-esports-player-competition-activity-256.webp\",\n        // TODO: change default url to guest photo url\n        \"last_answer\": \"a\",\n        \"rounds\": [\"http://10.10.10.23:8002/static/assets/297806.png\", \"http://10.10.10.23:8002/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\"]\n      } // Load opponent data here\n      ],\n      quiz: [],\n      slug: this.$route.params.slug,\n      selectedAnswer: null,\n      correctAnswer: 0,\n      question: \"\",\n      answers: [],\n      actualQuiz: 0,\n      quizFinished: false,\n      quizStarted: false,\n      points: 0,\n      loading: false,\n      isChoosed: false,\n      timer: false,\n      socket: null,\n      EmptyIcon: \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\",\n      CurrentIcon: \"http://10.10.10.23:8002/\" + \"static/assets/297806.png\",\n      // current\n      IncorrectIcon: \"http://10.10.10.23:8002/\" + \"static/assets/3786049.png\",\n      // Failed\n      CorrectIcon: \"http://10.10.10.23:8002/\" + \"static/assets/3786042.png\" // correct\n\n    };\n  },\n  watch: {\n    loading: function loading() {\n      var progresBar = document.getElementById(\"quiz-timer\");\n\n      if (this.loading === false) {\n        this.timer = true;\n        progresBar.animate({\n          width: \"100%\"\n        }, 5000); // Add next round funcionality after timeout\n        // Stop animation if user choosenanswer\n        // stop next round timeout\n      } else if (this.timer === true) {\n        var animations = progresBar.getAnimations();\n        if (animations.length > 0) animations[0].finish();\n        this.timer = false;\n      }\n    }\n  },\n  methods: {\n    connectPlayer: function connectPlayer() {\n      this.socket = new WebSocket('ws://10.10.10.23:8002/ws/playrooms/');\n\n      this.socket.onmessage = function (event) {\n        var data = event.data;\n        console.log(data);\n      };\n    },\n    playDuel: function playDuel() {\n      this.socket.send(\"whats my name?\");\n    },\n    saveQuizTaker: function saveQuizTaker() {},\n    loadOppponent: function loadOppponent() {// Create Django Channels or socket.io or websockets room\n      // sent opponent data from app to socket room\n      // load data here and unpack it\n      // save data to players[1]\n    },\n    loadNextRound: function loadNextRound() {\n      var _this = this;\n\n      if (this.quizFinished === false) {\n        this.loading = true;\n        setTimeout(function () {\n          return _this.loading = false;\n        }, 2000);\n        this.isChoosed = false; // set current icon for\n\n        this.players[0].rounds[this.actualQuiz] = this.CurrentIcon; // if (this.socket === null) this.connectPlayer()\n        // this.playDuel()\n      }\n    },\n    checkCorrectAnswer: function checkCorrectAnswer() {\n      // TODO: Create animation\n      if (this.selectedAnswer == this.correctAnswer) {\n        this.rounds[this.actualQuiz - 1] = this.CorrectIcon;\n        this.players[0].rounds[this.actualQuiz - 1] = this.CorrectIcon;\n        this.points += 10;\n      } else {\n        this.rounds[this.actualQuiz - 1] = this.IncorrectIcon;\n        this.players[0].rounds[this.actualQuiz - 1] = this.IncorrectIcon;\n      }\n    },\n    resetOptions: function resetOptions() {\n      var _this2 = this;\n\n      //reset answers and selectedAnswer\n      this.answers = [];\n      this.selectedAnswer = \"\"; //get answer divs\n\n      var options = document.getElementsByClassName(\"option\"); //For each option div remove all operational classes\n\n      Array.from(options).forEach(function (option) {\n        option.classList.remove(\"active\");\n        option.classList.remove(\"correct\");\n        option.classList.remove(\"incorrect\");\n        option.classList.add(\"option-hover\"); // adds option-hover to set hover effect\n        //Reset option divs textContent\n\n        option.textContent = \"\";\n        _this2.correctAnswer = \"\";\n      });\n    },\n    getActualQuiz: function getActualQuiz(actualQuizNumber) {\n      var _this3 = this;\n\n      //solo, duel, find\n      //reset option divs\n      if (this.selectedAnswer || !this.quizStarted) {\n        this.resetOptions(); //if there is more questions left\n\n        if (this.quiz[\"question_set\"][actualQuizNumber] !== undefined) {\n          //question =\n          this.question = this.quiz[\"question_set\"][actualQuizNumber].text; // for each answer in actual Question set answers\n\n          this.quiz[\"question_set\"][actualQuizNumber][\"answer_set\"].forEach(function (answer) {\n            _this3.answers.push(answer[\"text\"]); //if answer is correct add it to correctAnswer Variable\n\n\n            if (answer[\"is_correct\"] === true) _this3.correctAnswer = answer[\"text\"];\n          }); // if there is no more question, QUIZ FINISHED:\n        } else if (this.actualQuizNumber == 5) {\n          this.question = \"\";\n          this.quizFinished = true;\n        } else {\n          this.question = \"\";\n          this.quizFinished = true;\n        }\n      }\n\n      this.loadNextRound(); //increment Actual Question +1 if quiz hasnt been finished\n\n      if (!this.quizFinished) this.actualQuiz++;\n    },\n    handleSelectItem: function handleSelectItem(item) {\n      var _this4 = this;\n\n      var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n      if (this.isChoosed === false) {\n        var progresBar = document.getElementById(\"quiz-timer\");\n        var animations = progresBar.getAnimations();\n\n        if (animations.length > 0) {\n          animations[0].pause();\n        }\n\n        setTimeout(function () {\n          return _this4.getActualQuiz(_this4.actualQuiz);\n        }, 2000);\n        if (this.selectedAnswer === \"\") this.selectedAnswer = item; // Check if selected answer is true\n\n        this.checkCorrectAnswer();\n        this.quizStarted = true; // set next round icon to Current quiz icon\n\n        this.rounds[this.actualQuiz] = this.CurrentIcon;\n        event.target.classList.add(\"active\");\n        var options = document.getElementsByClassName(\"option\");\n        Array.from(options).forEach(function (option) {\n          if (option.textContent !== _this4.correctAnswer && option.textContent === event.target.textContent) {\n            option.classList.add(\"incorrect\");\n          }\n\n          if (option.textContent === _this4.correctAnswer) option.classList.add(\"correct\");\n          option.classList.remove(\"option-hover\");\n        });\n      }\n\n      this.isChoosed = true;\n    }\n  },\n  mounted: function mounted() {\n    var _this5 = this;\n\n    fetch(\"http://10.10.10.23:8002/\" + \"api/details/\" + this.slug + \"/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return _this5.quiz = data;\n    }).then(function (data) {\n      return _this5.correctAnswer = data.answer;\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n  } //created() {\n  ///  this.connection = new WebSocket(\"wss://echo.websocket.org\")\n  // }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9xdWl6ZXMvUXVpekRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdmlld3MvcXVpemVzL1F1aXpEZXRhaWxzLnZ1ZT8wZDM1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuPGRpdj5cclxuICA8IS0tIENoYW5nZSB0byB2LXNob3cgdG8gaW5jcmVhc2UgcGVyZm9ybWFjZSwgYnV0IHlvdSBoYXZlIHRvIHJlcGFpciBidWcgd2l0aCBub3Qgc2hvd2luZyBhbnN3ZXIgMCBzb21ldGltZXMgLS0+XHJcbiAgPGRpdiB2LXNob3c9XCJsb2FkaW5nID09PSBmYWxzZVwiPlxyXG5cclxuICAgIDxkaXYgaWQ9XCJwbGF5ZXItaW5mb1wiIHYtc2hvdz1cInRoaXMuYW5zd2Vyc1swXVwiIHYtZm9yPVwicGxheWVyIGluIHBsYXllcnNcIiA6a2V5PVwicGxheWVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllci1pbmZvLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJwbGF5ZXItcGhvdG9cIiA6c3JjPVwicGxheWVyLnBob3RvX3VybFwiIHN0eWxlPVwid2lkdGg6MzJweDsgaGVpZ2h0OjMycHg7XCI+IDxicj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwicGxheWVyLW5hbWVcIiA+e3twbGF5ZXIubmFtZX19PC9wPiA8YnI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3R5bGU9XCJ3aWR0aDozMnB4OyBoZWlnaHQ6MzJweFwiIDpzcmM9XCJgJHtwbGF5ZXIucm91bmRzWzBdfWBcIj5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOjMycHg7IGhlaWdodDozMnB4XCIgOnNyYz1cImAke3BsYXllci5yb3VuZHNbMV19YFwiPlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPVwid2lkdGg6MzJweDsgaGVpZ2h0OjMycHhcIiA6c3JjPVwiYCR7cGxheWVyLnJvdW5kc1syXX1gXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3R5bGU9XCJ3aWR0aDozMnB4OyBoZWlnaHQ6MzJweFwiIDpzcmM9XCJgJHtwbGF5ZXIucm91bmRzWzNdfWBcIj5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOjMycHg7IGhlaWdodDozMnB4XCIgOnNyYz1cImAke3BsYXllci5yb3VuZHNbNF19YFwiPlxyXG4gICAgICAgICAgPC9kaXY+IDxicj5cclxuICAgICAgICA8L2Rpdj4gPCEtLSBUT0RPOiBDaGFuZ2UgdG8gdXNlcnNbXS5sZW5ndGg9PT0yIHdoZW4gcHJvZCBhbmQgbG9hZCB1c2VyIGluIHBhcmVudCBjb21wb25lbnQgLS0+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHN0eWxlPVwibWFyZ2luOiBhdXRvXCI+XHJcbiAgICA8aW1nIDpzcmM9XCJgJHtxdWl6LmltYWdlfWBcIiBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIGFsdD1cIlwiIC8+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgIDxoMSBpZD1cInRpdGxlXCI+e3sgdGhpcy5xdWl6W1widGl0bGVcIl0gfX08L2gxPlxyXG4gICAgICA8aDUgaWQ9XCJjb3VudGVyXCIgY2xhc3M9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAge3sgYWN0dWFsUXVpeiB9fSAvIHt7IHF1aXpbXCJudW1iZXJfb2ZfcXVlc3Rpb25zXCJdIH19XHJcbiAgICAgIDwvaDU+XHJcbiAgICAgIDxoMyB2LWlmPVwidGhpcy5xdWVzdGlvblwiIGNsYXNzPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgUXVlc3Rpb246IHt7IHRoaXMucXVlc3Rpb24gfX1cclxuICAgICAgPC9oMz5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCIgdi1zaG93PVwiYW5zd2Vyc1swXVwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJxdWl6LXRpbWVyXCIgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBzdHlsZT1cIndpZHRoOjAlXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHVsIHYtaWY9XCJsb2FkaW5nID09PSBmYWxzZVwiIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWhvcml6b250YWwgXCI+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgIHYtc2hvdz1cInRoaXMuYW5zd2Vyc1swXVwiXHJcbiAgICAgICAgQGNsaWNrPVwiaGFuZGxlU2VsZWN0SXRlbSh0aGlzLmFuc3dlcnNbMF0sICRldmVudClcIlxyXG4gICAgICAgIGlkPVwiMVwiXHJcbiAgICAgICAgY2xhc3M9XCJvcHRpb24gb3B0aW9uLWhvdmVyIGxpc3QtZ3JvdXAtaXRlbSB3LTUwXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IHRoaXMuYW5zd2Vyc1swXSB9fVxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGlcclxuICAgICAgICB2LXNob3c9XCJ0aGlzLmFuc3dlcnNbMV1cIlxyXG4gICAgICAgIEBjbGljaz1cImhhbmRsZVNlbGVjdEl0ZW0odGhpcy5hbnN3ZXJzWzFdLCAkZXZlbnQpXCJcclxuICAgICAgICBpZD1cIjJcIlxyXG4gICAgICAgIGNsYXNzPVwib3B0aW9uIG9wdGlvbi1ob3ZlciBsaXN0LWdyb3VwLWl0ZW0gdy01MFwiXHJcbiAgICAgID5cclxuICAgICAgICB7eyB0aGlzLmFuc3dlcnNbMV0gfX1cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8dWwgdi1zaG93PVwidGhpcy5hbnN3ZXJzWzJdXCIgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtaG9yaXpvbnRhbCBcIj5cclxuICAgICAgPGxpXHJcbiAgICAgICAgdi1zaG93PVwidGhpcy5hbnN3ZXJzWzJdXCJcclxuICAgICAgICBAY2xpY2s9XCJoYW5kbGVTZWxlY3RJdGVtKHRoaXMuYW5zd2Vyc1syXSwgJGV2ZW50KVwiXHJcbiAgICAgICAgaWQ9XCIzXCJcclxuICAgICAgICBjbGFzcz1cIm9wdGlvbiBvcHRpb24taG92ZXIgbGlzdC1ncm91cC1pdGVtIHctNTBcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3sgdGhpcy5hbnN3ZXJzWzJdIH19XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgIHYtc2hvdz1cInRoaXMuYW5zd2Vyc1szXVwiXHJcbiAgICAgICAgQGNsaWNrPVwiaGFuZGxlU2VsZWN0SXRlbSh0aGlzLmFuc3dlcnNbM10sICRldmVudClcIlxyXG4gICAgICAgIGlkPVwiNFwiXHJcbiAgICAgICAgY2xhc3M9XCJvcHRpb24gb3B0aW9uLWhvdmVyIGxpc3QtZ3JvdXAtaXRlbSB3LTUwXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IHRoaXMuYW5zd2Vyc1szXSB9fVxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcblxyXG4gICAgICA8IS0tIFBsYXkgYnV0dG9ucyAtLT5cclxuICAgICAgPGRpdiB2LWlmPVwiIXRoaXMucXVlc3Rpb24gJiYgIXRoaXMucXVpekZpbmlzaGVkXCI+XHJcbiAgICAgICAgPCEtLVJhbmtzIC0tPlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBAY2xpY2s9XCJnZXRBY3R1YWxRdWl6KHRoaXMuYWN0dWFsUXVpeilcIlxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgcGxheS1idG4gZnVsbC13aWR0aFwiXHJcbiAgICAgICAgICBpZD1cInN0YXJ0LWJ1dHRvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4+U29sbzwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj4gPGJyPjxicj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBAY2xpY2s9XCJnZXRBY3R1YWxRdWl6KHRoaXMuYWN0dWFsUXVpeilcIlxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgcGxheS1idG4gIGZ1bGwtd2lkdGhcIlxyXG4gICAgICAgICAgaWQ9XCJzdGFydC1idXR0b25cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiXCI+UGxheSB3aXRoIGZyaWVuZDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj48YnI+PGJyPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIEBjbGljaz1cImdldEFjdHVhbFF1aXoodGhpcy5hY3R1YWxRdWl6KVwiXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBwbGF5LWJ0biBmdWxsLXdpZHRoXCJcclxuICAgICAgICAgIGlkPVwic3RhcnQtYnV0dG9uXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3Bhbj5GaW5kIG9wcG9uZW50PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuIFxyXG4gICAgICA8ZGl2IHYtaWY9XCJxdWl6RmluaXNoZWRcIiAgPiBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCIgc3R5bGU9XCJhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cclxuICAgICAgICAgIDxpbWcgc3R5bGU9XCJ3aWR0aDo2NHB4OyBoZWlnaHQ6NjRweFwiIDpzcmM9XCJgJHtyb3VuZHNbMF19YFwiPlxyXG4gICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOjY0cHg7IGhlaWdodDo2NHB4XCIgOnNyYz1cImAke3JvdW5kc1sxXX1gXCI+XHJcbiAgICAgICAgICA8aW1nIHN0eWxlPVwid2lkdGg6NjRweDsgaGVpZ2h0OjY0cHhcIiA6c3JjPVwiYCR7cm91bmRzWzJdfWBcIj5cclxuICAgICAgICAgIDxpbWcgc3R5bGU9XCJ3aWR0aDo2NHB4OyBoZWlnaHQ6NjRweFwiIDpzcmM9XCJgJHtyb3VuZHNbM119YFwiPlxyXG4gICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOjY0cHg7IGhlaWdodDo2NHB4XCIgOnNyYz1cImAke3JvdW5kc1s0XX1gXCI+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDE+UXVpeiBoYXMgYmVlbiBmaW5pc2hlZDwvaDE+XHJcbiAgICAgICAgPGgyPllvdXIgcG9pbnRzOiB7eyBwb2ludHMgfX0gLyB7eyBxdWl6W1wicmVxdWlyZWRfc2NvcmVfdG9fcGFzc1wiXSB9fTwvaDI+XHJcblxyXG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwidGhpcy4kcm91dGVyLmdvKClcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPlJldHJ5PC9idXR0b24+XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48cm91dGVyLWxpbmsgOnRvPVwie25hbWU6ICdIb21lJ31cIj5UYWtlIGFub3RoZXIgcXVpejwvcm91dGVyLWxpbms+PC9idXR0b24+XHJcbiAgICAgICAgPHA+YXV0aG9yOiB7eyBxdWl6W1wiYXV0aG9yXCJdIH19PC9wPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8L2Rpdj5cclxuXHJcbiAgPHJvdW5kLXRyYW5zaXRpb24gdi1pZj1cInF1aXpbJ3RpdGxlJ11cIiAgdi1zaG93PVwibG9hZGluZyA9PT0gdHJ1ZSAmJiBxdWl6RmluaXNoZWQgPT09IGZhbHNlXCIgIDpxdWl6X25hbWU9XCJxdWl6Wyd0aXRsZSddXCIgOnF1aXpJY29uPVwicXVpelsnaWNvbiddXCIgOnJvdW5kPVwiYWN0dWFsUXVpelwiID5cclxuICAgIDwhLS0gY3VycmVudCBwbGF5ZXIgcG9pbnRzIGltYWdlcyAtLT5cclxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6cm91bmQxPjxpbWcgc3R5bGU9XCJ3aWR0aDo2NHB4OyBoZWlnaHQ6NjRweFwiIDpzcmM9XCJgJHtyb3VuZHNbMF19YFwiPjwvdGVtcGxhdGU+XHJcbiAgICA8dGVtcGxhdGUgdi1zbG90OnJvdW5kMj48aW1nIHN0eWxlPVwid2lkdGg6NjRweDsgaGVpZ2h0OjY0cHhcIiA6c3JjPVwiYCR7cm91bmRzWzFdfWBcIj48L3RlbXBsYXRlPlxyXG4gICAgPHRlbXBsYXRlIHYtc2xvdDpyb3VuZDM+PGltZyBzdHlsZT1cIndpZHRoOjY0cHg7IGhlaWdodDo2NHB4XCIgOnNyYz1cImAke3JvdW5kc1syXX1gXCI+PC90ZW1wbGF0ZT5cclxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6cm91bmQ0PjxpbWcgc3R5bGU9XCJ3aWR0aDo2NHB4OyBoZWlnaHQ6NjRweFwiIDpzcmM9XCJgJHtyb3VuZHNbM119YFwiPjwvdGVtcGxhdGU+XHJcbiAgICA8dGVtcGxhdGUgdi1zbG90OnJvdW5kNT48aW1nIHN0eWxlPVwid2lkdGg6NjRweDsgaGVpZ2h0OjY0cHhcIiA6c3JjPVwiYCR7cm91bmRzWzRdfWBcIj48L3RlbXBsYXRlPlxyXG4gICAgPCEtLSBvcHBvbmVudCBwb2ludHMgaW1hZ2VzIC0tPlxyXG5cclxuICA8L3JvdW5kLXRyYW5zaXRpb24+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFJvdW5kVHJhbnNpdGlvbiBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9xdWl6L1JvdW5kVHJhbnNpdGlvbi52dWUnXHJcbi8vIFRPRE86IE1ha2UgaW1wb3NpYmxlIHRvIGNoYW5nZSB1c2VyIHBvaW50cyBpbiBjb2RlLCBoYWNrXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJRdWl6RGV0YWlsc1wiLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIFJvdW5kVHJhbnNpdGlvbixcclxuICB9LFxyXG5cclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcm91bmRzOiBbXHJcbiAgICAgICAgXCJodHRwOi8vMTAuMTAuMTAuMjM6ODAwMi9zdGF0aWMvYXNzZXRzLzI5NzgwNi5wbmdcIixcclxuICAgICAgICBcImh0dHA6Ly8xMC4xMC4xMC4yMzo4MDAyL3N0YXRpYy9hc3NldHMvbG9ja19vcmRpbmFyeV9zZWN1cml0eV9zZWN1cmVfZ2FtZV9wcm90ZWN0X3NhZmUtNTEyLndlYnBcIixcclxuICAgICAgICBcImh0dHA6Ly8xMC4xMC4xMC4yMzo4MDAyL3N0YXRpYy9hc3NldHMvbG9ja19vcmRpbmFyeV9zZWN1cml0eV9zZWN1cmVfZ2FtZV9wcm90ZWN0X3NhZmUtNTEyLndlYnBcIixcclxuICAgICAgICBcImh0dHA6Ly8xMC4xMC4xMC4yMzo4MDAyL3N0YXRpYy9hc3NldHMvbG9ja19vcmRpbmFyeV9zZWN1cml0eV9zZWN1cmVfZ2FtZV9wcm90ZWN0X3NhZmUtNTEyLndlYnBcIixcclxuICAgICAgICBcImh0dHA6Ly8xMC4xMC4xMC4yMzo4MDAyL3N0YXRpYy9hc3NldHMvbG9ja19vcmRpbmFyeV9zZWN1cml0eV9zZWN1cmVfZ2FtZV9wcm90ZWN0X3NhZmUtNTEyLndlYnBcIixcclxuICAgICAgXSxcclxuICAgICAgcGxheWVyczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAvLyBsb2FkIHBsYXllciBkYXRhIGhlcmVcclxuICAgICAgICBcIm5hbWVcIjogXCJndWVzdFwiLFxyXG4gICAgICAgIFwicGhvdG9fdXJsXCI6IFwiaHR0cDovLzEwLjEwLjEwLjIzOjgwMDIvc3RhdGljL2Fzc2V0cy9nYW1lci1lc3BvcnRzLXBsYXllci1jb21wZXRpdGlvbi1hY3Rpdml0eS0yNTYud2VicFwiLCAvLyBUT0RPOiBjaGFuZ2UgZGVmYXVsdCB1cmwgdG8gZ3Vlc3QgcGhvdG8gdXJsXHJcbiAgICAgICAgXCJsYXN0X2Fuc3dlclwiOiBcImFcIixcclxuICAgICAgICBcInJvdW5kc1wiOiBbXHJcbiAgICAgICAgICBcImh0dHA6Ly8xMC4xMC4xMC4yMzo4MDAyL3N0YXRpYy9hc3NldHMvMjk3ODA2LnBuZ1wiLFxyXG4gICAgICAgICAgXCJodHRwOi8vMTAuMTAuMTAuMjM6ODAwMi9zdGF0aWMvYXNzZXRzL2xvY2tfb3JkaW5hcnlfc2VjdXJpdHlfc2VjdXJlX2dhbWVfcHJvdGVjdF9zYWZlLTUxMi53ZWJwXCIsXHJcbiAgICAgICAgICBcImh0dHA6Ly8xMC4xMC4xMC4yMzo4MDAyL3N0YXRpYy9hc3NldHMvbG9ja19vcmRpbmFyeV9zZWN1cml0eV9zZWN1cmVfZ2FtZV9wcm90ZWN0X3NhZmUtNTEyLndlYnBcIixcclxuICAgICAgICAgIFwiaHR0cDovLzEwLjEwLjEwLjIzOjgwMDIvc3RhdGljL2Fzc2V0cy9sb2NrX29yZGluYXJ5X3NlY3VyaXR5X3NlY3VyZV9nYW1lX3Byb3RlY3Rfc2FmZS01MTIud2VicFwiLFxyXG4gICAgICAgICAgXCJodHRwOi8vMTAuMTAuMTAuMjM6ODAwMi9zdGF0aWMvYXNzZXRzL2xvY2tfb3JkaW5hcnlfc2VjdXJpdHlfc2VjdXJlX2dhbWVfcHJvdGVjdF9zYWZlLTUxMi53ZWJwXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBMb2FkIG9wcG9uZW50IGRhdGEgaGVyZVxyXG5cclxuICAgICAgICBcclxuICAgICAgXSxcclxuICAgICAgcXVpejogW10sXHJcbiAgICAgIHNsdWc6IHRoaXMuJHJvdXRlLnBhcmFtcy5zbHVnLFxyXG4gICAgICBzZWxlY3RlZEFuc3dlcjogbnVsbCxcclxuICAgICAgY29ycmVjdEFuc3dlcjogMCxcclxuICAgICAgcXVlc3Rpb246IFwiXCIsXHJcbiAgICAgIGFuc3dlcnM6IFtdLFxyXG4gICAgICBhY3R1YWxRdWl6OiAwLFxyXG4gICAgICBxdWl6RmluaXNoZWQ6IGZhbHNlLFxyXG4gICAgICBxdWl6U3RhcnRlZDogZmFsc2UsXHJcbiAgICAgIHBvaW50czogMCxcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGlzQ2hvb3NlZDogZmFsc2UsXHJcbiAgICAgIHRpbWVyOiBmYWxzZSxcclxuICAgICAgc29ja2V0OiBudWxsLFxyXG5cclxuICAgICAgRW1wdHlJY29uOiBcImh0dHA6Ly8xMC4xMC4xMC4yMzo4MDAyL1wiICsgXCJzdGF0aWMvYXNzZXRzL2xvY2tfb3JkaW5hcnlfc2VjdXJpdHlfc2VjdXJlX2dhbWVfcHJvdGVjdF9zYWZlLTUxMi53ZWJwXCIsXHJcbiAgICAgIEN1cnJlbnRJY29uOiBcImh0dHA6Ly8xMC4xMC4xMC4yMzo4MDAyL1wiICsgXCJzdGF0aWMvYXNzZXRzLzI5NzgwNi5wbmdcIiwgLy8gY3VycmVudFxyXG4gICAgICBJbmNvcnJlY3RJY29uOiBcImh0dHA6Ly8xMC4xMC4xMC4yMzo4MDAyL1wiICsgXCJzdGF0aWMvYXNzZXRzLzM3ODYwNDkucG5nXCIsIC8vIEZhaWxlZFxyXG4gICAgICBDb3JyZWN0SWNvbjogXCJodHRwOi8vMTAuMTAuMTAuMjM6ODAwMi9cIiArIFwic3RhdGljL2Fzc2V0cy8zNzg2MDQyLnBuZ1wiLCAvLyBjb3JyZWN0XHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGxvYWRpbmc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgcHJvZ3Jlc0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVpei10aW1lclwiKVxyXG4gICAgICBpZiAodGhpcy5sb2FkaW5nID09PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMudGltZXIgPSB0cnVlXHJcbiAgICAgICAgcHJvZ3Jlc0Jhci5hbmltYXRlKHt3aWR0aDogXCIxMDAlXCJ9LCA1MDAwKVxyXG5cclxuICAgICAgICAvLyBBZGQgbmV4dCByb3VuZCBmdW5jaW9uYWxpdHkgYWZ0ZXIgdGltZW91dFxyXG4gICAgICAgIC8vIFN0b3AgYW5pbWF0aW9uIGlmIHVzZXIgY2hvb3NlbmFuc3dlclxyXG4gICAgICAgIC8vIHN0b3AgbmV4dCByb3VuZCB0aW1lb3V0XHJcbiAgICAgIH0gZWxzZSBpZih0aGlzLnRpbWVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IHByb2dyZXNCYXIuZ2V0QW5pbWF0aW9ucygpO1xyXG4gICAgICAgIGlmKGFuaW1hdGlvbnMubGVuZ3RoID4wKSBhbmltYXRpb25zWzBdLmZpbmlzaCgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50aW1lciA9IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgY29ubmVjdFBsYXllcigpIHtcclxuICAgICAgdGhpcy5zb2NrZXQgPSBuZXcgV2ViU29ja2V0KCd3czovLzEwLjEwLjEwLjIzOjgwMDIvd3MvcGxheXJvb21zLycpXHJcbiAgICAgIHRoaXMuc29ja2V0Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBldmVudC5kYXRhXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBsYXlEdWVsKCkge1xyXG4gICAgICBcclxuICAgICAgdGhpcy5zb2NrZXQuc2VuZChcIndoYXRzIG15IG5hbWU/XCIpO1xyXG4gICAgfSxcclxuICAgIHNhdmVRdWl6VGFrZXIoKSB7XHJcblxyXG5cclxuICAgIH0sXHJcbiAgICBsb2FkT3BwcG9uZW50KCkge1xyXG4gICAgICAvLyBDcmVhdGUgRGphbmdvIENoYW5uZWxzIG9yIHNvY2tldC5pbyBvciB3ZWJzb2NrZXRzIHJvb21cclxuICAgICAgLy8gc2VudCBvcHBvbmVudCBkYXRhIGZyb20gYXBwIHRvIHNvY2tldCByb29tXHJcbiAgICAgIC8vIGxvYWQgZGF0YSBoZXJlIGFuZCB1bnBhY2sgaXRcclxuICAgICAgLy8gc2F2ZSBkYXRhIHRvIHBsYXllcnNbMV1cclxuICAgIH0sXHJcbiAgICBsb2FkTmV4dFJvdW5kKCkge1xyXG4gICAgICBpZiAodGhpcy5xdWl6RmluaXNoZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkaW5nPWZhbHNlLCAyMDAwKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuaXNDaG9vc2VkID0gZmFsc2VcclxuICAgICAgICAvLyBzZXQgY3VycmVudCBpY29uIGZvclxyXG4gICAgICAgIHRoaXMucGxheWVyc1swXS5yb3VuZHNbdGhpcy5hY3R1YWxRdWl6XSA9IHRoaXMuQ3VycmVudEljb25cclxuICAgICAgICAvLyBpZiAodGhpcy5zb2NrZXQgPT09IG51bGwpIHRoaXMuY29ubmVjdFBsYXllcigpXHJcbiAgICAgICAgLy8gdGhpcy5wbGF5RHVlbCgpXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjaGVja0NvcnJlY3RBbnN3ZXIoKSB7XHJcbiAgICAgIFxyXG4gICAgICAvLyBUT0RPOiBDcmVhdGUgYW5pbWF0aW9uXHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkQW5zd2VyID09IHRoaXMuY29ycmVjdEFuc3dlcikge1xyXG4gICAgICAgIHRoaXMucm91bmRzW3RoaXMuYWN0dWFsUXVpei0xXSA9IHRoaXMuQ29ycmVjdEljb25cclxuICAgICAgICB0aGlzLnBsYXllcnNbMF0ucm91bmRzW3RoaXMuYWN0dWFsUXVpei0xXSA9IHRoaXMuQ29ycmVjdEljb25cclxuICAgICAgICB0aGlzLnBvaW50cyArPSAxMFxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucm91bmRzW3RoaXMuYWN0dWFsUXVpei0xXSA9IHRoaXMuSW5jb3JyZWN0SWNvblxyXG4gICAgICAgIHRoaXMucGxheWVyc1swXS5yb3VuZHNbdGhpcy5hY3R1YWxRdWl6LTFdID0gdGhpcy5JbmNvcnJlY3RJY29uXHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgcmVzZXRPcHRpb25zKCkge1xyXG4gICAgICAvL3Jlc2V0IGFuc3dlcnMgYW5kIHNlbGVjdGVkQW5zd2VyXHJcbiAgICAgIHRoaXMuYW5zd2VycyA9IFtdO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkQW5zd2VyID0gXCJcIjtcclxuXHJcbiAgICAgIC8vZ2V0IGFuc3dlciBkaXZzXHJcbiAgICAgIGxldCBvcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm9wdGlvblwiKTtcclxuXHJcbiAgICAgIC8vRm9yIGVhY2ggb3B0aW9uIGRpdiByZW1vdmUgYWxsIG9wZXJhdGlvbmFsIGNsYXNzZXNcclxuICAgICAgQXJyYXkuZnJvbShvcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICBvcHRpb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBvcHRpb24uY2xhc3NMaXN0LnJlbW92ZShcImNvcnJlY3RcIik7XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmNvcnJlY3RcIik7XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoXCJvcHRpb24taG92ZXJcIik7IC8vIGFkZHMgb3B0aW9uLWhvdmVyIHRvIHNldCBob3ZlciBlZmZlY3RcclxuXHJcbiAgICAgICAgLy9SZXNldCBvcHRpb24gZGl2cyB0ZXh0Q29udGVudFxyXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jb3JyZWN0QW5zd2VyID0gXCJcIjtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0QWN0dWFsUXVpeihhY3R1YWxRdWl6TnVtYmVyKSB7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgLy9zb2xvLCBkdWVsLCBmaW5kXHJcbiAgICAgIC8vcmVzZXQgb3B0aW9uIGRpdnNcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRBbnN3ZXIgfHwgIXRoaXMucXVpelN0YXJ0ZWQpIHtcclxuICAgICAgICB0aGlzLnJlc2V0T3B0aW9ucygpO1xyXG5cclxuICAgICAgICAvL2lmIHRoZXJlIGlzIG1vcmUgcXVlc3Rpb25zIGxlZnRcclxuICAgICAgICBpZiAodGhpcy5xdWl6W1wicXVlc3Rpb25fc2V0XCJdW2FjdHVhbFF1aXpOdW1iZXJdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIC8vcXVlc3Rpb24gPVxyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvbiA9IHRoaXMucXVpeltcInF1ZXN0aW9uX3NldFwiXVthY3R1YWxRdWl6TnVtYmVyXS50ZXh0O1xyXG5cclxuICAgICAgICAgIC8vIGZvciBlYWNoIGFuc3dlciBpbiBhY3R1YWwgUXVlc3Rpb24gc2V0IGFuc3dlcnNcclxuICAgICAgICAgIHRoaXMucXVpeltcInF1ZXN0aW9uX3NldFwiXVthY3R1YWxRdWl6TnVtYmVyXVtcImFuc3dlcl9zZXRcIl0uZm9yRWFjaChcclxuICAgICAgICAgICAgKGFuc3dlcikgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuYW5zd2Vycy5wdXNoKGFuc3dlcltcInRleHRcIl0pO1xyXG4gICAgICAgICAgICAgIC8vaWYgYW5zd2VyIGlzIGNvcnJlY3QgYWRkIGl0IHRvIGNvcnJlY3RBbnN3ZXIgVmFyaWFibGVcclxuICAgICAgICAgICAgICBpZiAoYW5zd2VyW1wiaXNfY29ycmVjdFwiXSA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEFuc3dlciA9IGFuc3dlcltcInRleHRcIl07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIG1vcmUgcXVlc3Rpb24sIFFVSVogRklOSVNIRUQ6XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuYWN0dWFsUXVpek51bWJlciA9PTUpIHtcclxuICAgICAgICAgIHRoaXMucXVlc3Rpb24gPSBcIlwiO1xyXG4gICAgICAgICAgdGhpcy5xdWl6RmluaXNoZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgICB0aGlzLnF1aXpGaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmxvYWROZXh0Um91bmQoKVxyXG5cclxuICAgICAgLy9pbmNyZW1lbnQgQWN0dWFsIFF1ZXN0aW9uICsxIGlmIHF1aXogaGFzbnQgYmVlbiBmaW5pc2hlZFxyXG4gICAgICBpZiAoIXRoaXMucXVpekZpbmlzaGVkKSB0aGlzLmFjdHVhbFF1aXorKztcclxuICAgIH0sXHJcblxyXG4gICAgaGFuZGxlU2VsZWN0SXRlbShpdGVtLCBldmVudD17fSkge1xyXG4gICAgICBpZiAodGhpcy5pc0Nob29zZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVpei10aW1lclwiKVxyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbnMgPSBwcm9ncmVzQmFyLmdldEFuaW1hdGlvbnMoKTtcclxuXHJcbiAgICAgICAgaWYgKGFuaW1hdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBhbmltYXRpb25zWzBdLnBhdXNlKClcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmdldEFjdHVhbFF1aXoodGhpcy5hY3R1YWxRdWl6KSwgMjAwMClcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRBbnN3ZXIgPT09IFwiXCIpIHRoaXMuc2VsZWN0ZWRBbnN3ZXIgPSBpdGVtO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENoZWNrIGlmIHNlbGVjdGVkIGFuc3dlciBpcyB0cnVlXHJcbiAgICAgICAgdGhpcy5jaGVja0NvcnJlY3RBbnN3ZXIoKVxyXG4gICAgICAgIHRoaXMucXVpelN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIHNldCBuZXh0IHJvdW5kIGljb24gdG8gQ3VycmVudCBxdWl6IGljb25cclxuICAgICAgICB0aGlzLnJvdW5kc1t0aGlzLmFjdHVhbFF1aXpdID0gdGhpcy5DdXJyZW50SWNvblxyXG4gICAgICAgIFxyXG4gICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm9wdGlvblwiKTtcclxuXHJcbiAgICAgICAgQXJyYXkuZnJvbShvcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKG9wdGlvbi50ZXh0Q29udGVudCAhPT0gdGhpcy5jb3JyZWN0QW5zd2VyICYmIG9wdGlvbi50ZXh0Q29udGVudCA9PT0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKFwiaW5jb3JyZWN0XCIpO1xyXG4gICAgICAgICAgfSBpZiAob3B0aW9uLnRleHRDb250ZW50ID09PSB0aGlzLmNvcnJlY3RBbnN3ZXIpIG9wdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29ycmVjdFwiKTtcclxuICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwib3B0aW9uLWhvdmVyXCIpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmlzQ2hvb3NlZCA9IHRydWVcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgZmV0Y2gocHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIGBhcGkvZGV0YWlscy9gICsgdGhpcy5zbHVnICsgYC9gKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gKHRoaXMucXVpeiA9IGRhdGEpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gKHRoaXMuY29ycmVjdEFuc3dlciA9IGRhdGEuYW5zd2VyKSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSk7XHJcbiAgfSxcclxuICAvL2NyZWF0ZWQoKSB7XHJcbiAgLy8vICB0aGlzLmNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KFwid3NzOi8vZWNoby53ZWJzb2NrZXQub3JnXCIpXHJcbiAvLyB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3Age1xyXG4gIGhlaWdodDogMTVlbTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLlF1aXpDb3VudGVyIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB0ZXh0LWFsaWduOiB0b3A7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5vcHRpb24taG92ZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjQ2ZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG51bC5saXN0LWdyb3VwIGxpLmFjdGl2ZSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjQ2ZmY7XHJcbn1cclxuXHJcbnVsLmxpc3QtZ3JvdXAgbGkuY29ycmVjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbnVsLmxpc3QtZ3JvdXAgbGkuaW5jb3JyZWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiN0aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBtYXJnaW4tbGVmdDogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4ucGxheWVyLWluZm8tY29udGVudCB7XHJcbiAgXHJcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBidXR0b24uZnVsbC13aWR0aCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7ICBcclxuICAgIH1cclxufVxyXG48L3N0eWxlPlxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBNklBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQTlDQTtBQStDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFoQkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFySkE7QUF1SkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUEzT0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/QuizDetails.vue?vue&type=script&lang=js\n");

/***/ })

})