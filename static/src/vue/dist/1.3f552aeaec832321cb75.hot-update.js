webpackHotUpdate(1,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/QuizDetails.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/quizes/QuizDetails.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_components_quiz_RoundTransition_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/quiz/RoundTransition.vue */ \"./src/components/quiz/RoundTransition.vue\");\n\n\n\n\n // TODO: Make imposible to change user points in code, hack\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"QuizDetails\",\n  components: {\n    RoundTransition: _src_components_quiz_RoundTransition_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  data: function data() {\n    return {\n      rounds: [\"http://10.10.10.23:8002/static/assets/297806.png\", \"http://10.10.10.23:8002/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\"],\n      players: [{\n        // load player data here\n        \"name\": \"guest\",\n        \"photo_url\": \"http://10.10.10.23:8002/static/assets/gamer-esports-player-competition-activity-256.webp\",\n        // TODO: change default url to guest photo url\n        \"last_answer\": \"a\",\n        \"rounds\": [\"http://10.10.10.23:8002/static/assets/297806.png\", \"http://10.10.10.23:8002/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\"]\n      } // Load opponent data here\n      ],\n      quiz: [],\n      slug: this.$route.params.slug,\n      selectedAnswer: null,\n      correctAnswer: 0,\n      question: \"\",\n      answers: [],\n      actualQuiz: 0,\n      quizFinished: false,\n      quizStarted: false,\n      points: 0,\n      loading: false,\n      isChoosed: false,\n      timer: false,\n      socket: null,\n      EmptyIcon: \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\",\n      CurrentIcon: \"http://10.10.10.23:8002/\" + \"static/assets/297806.png\",\n      // current\n      IncorrectIcon: \"http://10.10.10.23:8002/\" + \"static/assets/3786049.png\",\n      // Failed\n      CorrectIcon: \"http://10.10.10.23:8002/\" + \"static/assets/3786042.png\" // correct\n\n    };\n  },\n  watch: {\n    loading: function loading() {\n      var progresBar = document.getElementById(\"quiz-timer\");\n\n      if (this.loading === false) {\n        this.timer = true;\n        progresBar.animate({\n          width: \"100%\"\n        }, 5000); // Add next round funcionality after timeout\n        // Stop animation if user choosenanswer\n        // stop next round timeout\n      } else if (this.timer === true) {\n        var animations = progresBar.getAnimations();\n        if (animations.length > 0) animations[0].finish();\n        this.timer = false;\n      }\n    }\n  },\n  methods: {\n    connectPlayer: function connectPlayer() {\n      this.socket = new WebSocket('ws://10.10.10.23:8002/ws/playrooms/');\n\n      this.socket.onmessage = function (event) {\n        var data = event.data;\n        console.log(data);\n      };\n    },\n    playDuel: function playDuel() {\n      this.socket.send(\"whats my name?\");\n    },\n    saveQuizTaker: function saveQuizTaker() {},\n    loadOppponent: function loadOppponent() {// Create Django Channels or socket.io or websockets room\n      // sent opponent data from app to socket room\n      // load data here and unpack it\n      // save data to players[1]\n    },\n    loadNextRound: function loadNextRound() {\n      var _this = this;\n\n      if (this.quizFinished === false) {\n        this.loading = true;\n        setTimeout(function () {\n          return _this.loading = false;\n        }, 2000);\n        this.isChoosed = false; // set current icon for\n\n        this.players[0].rounds[this.actualQuiz] = this.CurrentIcon; // if (this.socket === null) this.connectPlayer()\n        // this.playDuel()\n      }\n    },\n    checkCorrectAnswer: function checkCorrectAnswer() {\n      // TODO: Create animation\n      if (this.selectedAnswer == this.correctAnswer) {\n        this.rounds[this.actualQuiz - 1] = this.CorrectIcon;\n        this.players[0].rounds[this.actualQuiz - 1] = this.CorrectIcon;\n        this.points += 10;\n      } else {\n        this.rounds[this.actualQuiz - 1] = this.IncorrectIcon;\n        this.players[0].rounds[this.actualQuiz - 1] = this.IncorrectIcon;\n      }\n    },\n    resetOptions: function resetOptions() {\n      var _this2 = this;\n\n      //reset answers and selectedAnswer\n      this.answers = [];\n      this.selectedAnswer = \"\"; //get answer divs\n\n      var options = document.getElementsByClassName(\"option\"); //For each option div remove all operational classes\n\n      Array.from(options).forEach(function (option) {\n        option.classList.remove(\"active\");\n        option.classList.remove(\"correct\");\n        option.classList.remove(\"incorrect\"); //Reset option divs textContent\n\n        option.textContent = \"\";\n        _this2.correctAnswer = \"\";\n      });\n    },\n    getActualQuiz: function getActualQuiz(actualQuizNumber) {\n      var _this3 = this;\n\n      //solo, duel, find\n      //reset option divs\n      if (this.selectedAnswer || !this.quizStarted) {\n        this.resetOptions(); //if there is more questions left\n\n        if (this.quiz[\"question_set\"][actualQuizNumber] !== undefined) {\n          //question =\n          this.question = this.quiz[\"question_set\"][actualQuizNumber].text; // for each answer in actual Question set answers\n\n          this.quiz[\"question_set\"][actualQuizNumber][\"answer_set\"].forEach(function (answer) {\n            _this3.answers.push(answer[\"text\"]); //if answer is correct add it to correctAnswer Variable\n\n\n            if (answer[\"is_correct\"] === true) _this3.correctAnswer = answer[\"text\"];\n          }); // if there is no more question, QUIZ FINISHED:\n        } else if (this.actualQuizNumber == 5) {\n          this.question = \"\";\n          this.quizFinished = true;\n        } else {\n          this.question = \"\";\n          this.quizFinished = true;\n        }\n      }\n\n      this.loadNextRound(); //increment Actual Question +1 if quiz hasnt been finished\n\n      if (!this.quizFinished) this.actualQuiz++;\n    },\n    handleSelectItem: function handleSelectItem(item) {\n      var _this4 = this;\n\n      var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n      if (this.isChoosed === false) {\n        var progresBar = document.getElementById(\"quiz-timer\");\n        var animations = progresBar.getAnimations();\n\n        if (animations.length > 0) {\n          animations[0].pause();\n        }\n\n        setTimeout(function () {\n          return _this4.getActualQuiz(_this4.actualQuiz);\n        }, 2000);\n        if (this.selectedAnswer === \"\") this.selectedAnswer = item; // Check if selected answer is true\n\n        this.checkCorrectAnswer();\n        this.quizStarted = true; // set next round icon to Current quiz icon\n\n        this.rounds[this.actualQuiz] = this.CurrentIcon;\n        var options = document.getElementsByClassName(\"option\");\n        Array.from(options).forEach(function (option) {\n          if (option.textContent !== _this4.correctAnswer && option.textContent === event.target.textContent) {\n            option.classList.add(\"incorrect\");\n          }\n\n          if (option.textContent === _this4.correctAnswer) option.classList.add(\"correct\");\n        });\n        event.target.classList.add(\"active\");\n      }\n\n      this.isChoosed = true;\n    }\n  },\n  mounted: function mounted() {\n    var _this5 = this;\n\n    fetch(\"http://10.10.10.23:8002/\" + \"api/details/\" + this.slug + \"/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return _this5.quiz = data;\n    }).then(function (data) {\n      return _this5.correctAnswer = data.answer;\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n  } //created() {\n  ///  this.connection = new WebSocket(\"wss://echo.websocket.org\")\n  // }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9xdWl6ZXMvUXVpekRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdmlld3MvcXVpemVzL1F1aXpEZXRhaWxzLnZ1ZT8wZDM1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuPGRpdj5cclxuICA8IS0tIENoYW5nZSB0byB2LXNob3cgdG8gaW5jcmVhc2UgcGVyZm9ybWFjZSwgYnV0IHlvdSBoYXZlIHRvIHJlcGFpciBidWcgd2l0aCBub3Qgc2hvd2luZyBhbnN3ZXIgMCBzb21ldGltZXMgLS0+XHJcbiAgPGRpdiB2LXNob3c9XCJsb2FkaW5nID09PSBmYWxzZVwiPlxyXG5cclxuICAgIDxkaXYgaWQ9XCJwbGF5ZXItaW5mb1wiIHYtc2hvdz1cInRoaXMuYW5zd2Vyc1swXVwiIHYtZm9yPVwicGxheWVyIGluIHBsYXllcnNcIiA6a2V5PVwicGxheWVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBsYXllci1pbmZvLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJwbGF5ZXItcGhvdG9cIiA6c3JjPVwicGxheWVyLnBob3RvX3VybFwiIHN0eWxlPVwid2lkdGg6MzJweDsgaGVpZ2h0OjMycHg7XCI+IDxicj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwicGxheWVyLW5hbWVcIiA+e3twbGF5ZXIubmFtZX19PC9wPiA8YnI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3R5bGU9XCJ3aWR0aDozMnB4OyBoZWlnaHQ6MzJweFwiIDpzcmM9XCJgJHtwbGF5ZXIucm91bmRzWzBdfWBcIj5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOjMycHg7IGhlaWdodDozMnB4XCIgOnNyYz1cImAke3BsYXllci5yb3VuZHNbMV19YFwiPlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPVwid2lkdGg6MzJweDsgaGVpZ2h0OjMycHhcIiA6c3JjPVwiYCR7cGxheWVyLnJvdW5kc1syXX1gXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3R5bGU9XCJ3aWR0aDozMnB4OyBoZWlnaHQ6MzJweFwiIDpzcmM9XCJgJHtwbGF5ZXIucm91bmRzWzNdfWBcIj5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOjMycHg7IGhlaWdodDozMnB4XCIgOnNyYz1cImAke3BsYXllci5yb3VuZHNbNF19YFwiPlxyXG4gICAgICAgICAgPC9kaXY+IDxicj5cclxuICAgICAgICA8L2Rpdj4gPCEtLSBUT0RPOiBDaGFuZ2UgdG8gdXNlcnNbXS5sZW5ndGg9PT0yIHdoZW4gcHJvZCBhbmQgbG9hZCB1c2VyIGluIHBhcmVudCBjb21wb25lbnQgLS0+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHN0eWxlPVwibWFyZ2luOiBhdXRvXCI+XHJcbiAgICA8aW1nIDpzcmM9XCJgJHtxdWl6LmltYWdlfWBcIiBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIGFsdD1cIlwiIC8+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgIDxoMSBpZD1cInRpdGxlXCI+e3sgdGhpcy5xdWl6W1widGl0bGVcIl0gfX08L2gxPlxyXG4gICAgICA8aDUgaWQ9XCJjb3VudGVyXCIgY2xhc3M9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAge3sgYWN0dWFsUXVpeiB9fSAvIHt7IHF1aXpbXCJudW1iZXJfb2ZfcXVlc3Rpb25zXCJdIH19XHJcbiAgICAgIDwvaDU+XHJcbiAgICAgIDxoMyB2LWlmPVwidGhpcy5xdWVzdGlvblwiIGNsYXNzPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgUXVlc3Rpb246IHt7IHRoaXMucXVlc3Rpb24gfX1cclxuICAgICAgPC9oMz5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzXCIgdi1zaG93PVwiYW5zd2Vyc1swXVwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJxdWl6LXRpbWVyXCIgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBzdHlsZT1cIndpZHRoOjAlXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHVsIHYtc2hvdz1cInRoaXMuYW5zd2Vyc1swXVwiIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWhvcml6b250YWwgXCI+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgIHYtc2hvdz1cInRoaXMuYW5zd2Vyc1swXVwiXHJcbiAgICAgICAgQGNsaWNrPVwiaGFuZGxlU2VsZWN0SXRlbSh0aGlzLmFuc3dlcnNbMF0sICRldmVudClcIlxyXG4gICAgICAgIGlkPVwiMVwiXHJcbiAgICAgICAgY2xhc3M9XCJvcHRpb24gbGlzdC1ncm91cC1pdGVtIHctNTBcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3sgdGhpcy5hbnN3ZXJzWzBdIH19XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgIHYtc2hvdz1cInRoaXMuYW5zd2Vyc1sxXVwiXHJcbiAgICAgICAgQGNsaWNrPVwiaGFuZGxlU2VsZWN0SXRlbSh0aGlzLmFuc3dlcnNbMV0sICRldmVudClcIlxyXG4gICAgICAgIGlkPVwiMlwiXHJcbiAgICAgICAgY2xhc3M9XCJvcHRpb24gbGlzdC1ncm91cC1pdGVtIHctNTBcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3sgdGhpcy5hbnN3ZXJzWzFdIH19XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPHVsIHYtc2hvdz1cInRoaXMuYW5zd2Vyc1syXVwiIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWhvcml6b250YWwgXCI+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgIHYtc2hvdz1cInRoaXMuYW5zd2Vyc1syXVwiXHJcbiAgICAgICAgQGNsaWNrPVwiaGFuZGxlU2VsZWN0SXRlbSh0aGlzLmFuc3dlcnNbMl0sICRldmVudClcIlxyXG4gICAgICAgIGlkPVwiM1wiXHJcbiAgICAgICAgY2xhc3M9XCJvcHRpb24gbGlzdC1ncm91cC1pdGVtIHctNTBcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3sgdGhpcy5hbnN3ZXJzWzJdIH19XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgIHYtc2hvdz1cInRoaXMuYW5zd2Vyc1szXVwiXHJcbiAgICAgICAgQGNsaWNrPVwiaGFuZGxlU2VsZWN0SXRlbSh0aGlzLmFuc3dlcnNbM10sICRldmVudClcIlxyXG4gICAgICAgIGlkPVwiNFwiXHJcbiAgICAgICAgY2xhc3M9XCJvcHRpb24gbGlzdC1ncm91cC1pdGVtIHctNTBcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3sgdGhpcy5hbnN3ZXJzWzNdIH19XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuXHJcbiAgICAgIDwhLS0gUGxheSBidXR0b25zIC0tPlxyXG4gICAgICA8ZGl2IHYtaWY9XCIhdGhpcy5xdWVzdGlvbiAmJiAhdGhpcy5xdWl6RmluaXNoZWRcIj5cclxuICAgICAgICA8IS0tUmFua3MgLS0+XHJcblxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIEBjbGljaz1cImdldEFjdHVhbFF1aXoodGhpcy5hY3R1YWxRdWl6KVwiXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBwbGF5LWJ0biBmdWxsLXdpZHRoXCJcclxuICAgICAgICAgIGlkPVwic3RhcnQtYnV0dG9uXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3Bhbj5Tb2xvPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPiA8YnI+PGJyPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIEBjbGljaz1cImdldEFjdHVhbFF1aXoodGhpcy5hY3R1YWxRdWl6KVwiXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBwbGF5LWJ0biAgZnVsbC13aWR0aFwiXHJcbiAgICAgICAgICBpZD1cInN0YXJ0LWJ1dHRvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJcIj5QbGF5IHdpdGggZnJpZW5kPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPjxicj48YnI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgQGNsaWNrPVwiZ2V0QWN0dWFsUXVpeih0aGlzLmFjdHVhbFF1aXopXCJcclxuICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIHBsYXktYnRuIGZ1bGwtd2lkdGhcIlxyXG4gICAgICAgICAgaWQ9XCJzdGFydC1idXR0b25cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuPkZpbmQgb3Bwb25lbnQ8L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gXHJcbiAgICAgIDxkaXYgdi1pZj1cInF1aXpGaW5pc2hlZFwiICA+IFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIiBzdHlsZT1cImFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxyXG4gICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOjY0cHg7IGhlaWdodDo2NHB4XCIgOnNyYz1cImAke3JvdW5kc1swXX1gXCI+XHJcbiAgICAgICAgICA8aW1nIHN0eWxlPVwid2lkdGg6NjRweDsgaGVpZ2h0OjY0cHhcIiA6c3JjPVwiYCR7cm91bmRzWzFdfWBcIj5cclxuICAgICAgICAgIDxpbWcgc3R5bGU9XCJ3aWR0aDo2NHB4OyBoZWlnaHQ6NjRweFwiIDpzcmM9XCJgJHtyb3VuZHNbMl19YFwiPlxyXG4gICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOjY0cHg7IGhlaWdodDo2NHB4XCIgOnNyYz1cImAke3JvdW5kc1szXX1gXCI+XHJcbiAgICAgICAgICA8aW1nIHN0eWxlPVwid2lkdGg6NjRweDsgaGVpZ2h0OjY0cHhcIiA6c3JjPVwiYCR7cm91bmRzWzRdfWBcIj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMT5RdWl6IGhhcyBiZWVuIGZpbmlzaGVkPC9oMT5cclxuICAgICAgICA8aDI+WW91ciBwb2ludHM6IHt7IHBvaW50cyB9fSAvIHt7IHF1aXpbXCJyZXF1aXJlZF9zY29yZV90b19wYXNzXCJdIH19PC9oMj5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJ0aGlzLiRyb3V0ZXIuZ28oKVwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+UmV0cnk8L2J1dHRvbj5cclxuICAgICAgICA8YnI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPjxyb3V0ZXItbGluayA6dG89XCJ7bmFtZTogJ0hvbWUnfVwiPlRha2UgYW5vdGhlciBxdWl6PC9yb3V0ZXItbGluaz48L2J1dHRvbj5cclxuICAgICAgICA8cD5hdXRob3I6IHt7IHF1aXpbXCJhdXRob3JcIl0gfX08L3A+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG5cclxuICA8cm91bmQtdHJhbnNpdGlvbiB2LWlmPVwicXVpelsndGl0bGUnXVwiICB2LXNob3c9XCJsb2FkaW5nID09PSB0cnVlICYmIHF1aXpGaW5pc2hlZCA9PT0gZmFsc2VcIiAgOnF1aXpfbmFtZT1cInF1aXpbJ3RpdGxlJ11cIiA6cXVpekljb249XCJxdWl6WydpY29uJ11cIiA6cm91bmQ9XCJhY3R1YWxRdWl6XCIgPlxyXG4gICAgPCEtLSBjdXJyZW50IHBsYXllciBwb2ludHMgaW1hZ2VzIC0tPlxyXG4gICAgPHRlbXBsYXRlIHYtc2xvdDpyb3VuZDE+PGltZyBzdHlsZT1cIndpZHRoOjY0cHg7IGhlaWdodDo2NHB4XCIgOnNyYz1cImAke3JvdW5kc1swXX1gXCI+PC90ZW1wbGF0ZT5cclxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6cm91bmQyPjxpbWcgc3R5bGU9XCJ3aWR0aDo2NHB4OyBoZWlnaHQ6NjRweFwiIDpzcmM9XCJgJHtyb3VuZHNbMV19YFwiPjwvdGVtcGxhdGU+XHJcbiAgICA8dGVtcGxhdGUgdi1zbG90OnJvdW5kMz48aW1nIHN0eWxlPVwid2lkdGg6NjRweDsgaGVpZ2h0OjY0cHhcIiA6c3JjPVwiYCR7cm91bmRzWzJdfWBcIj48L3RlbXBsYXRlPlxyXG4gICAgPHRlbXBsYXRlIHYtc2xvdDpyb3VuZDQ+PGltZyBzdHlsZT1cIndpZHRoOjY0cHg7IGhlaWdodDo2NHB4XCIgOnNyYz1cImAke3JvdW5kc1szXX1gXCI+PC90ZW1wbGF0ZT5cclxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6cm91bmQ1PjxpbWcgc3R5bGU9XCJ3aWR0aDo2NHB4OyBoZWlnaHQ6NjRweFwiIDpzcmM9XCJgJHtyb3VuZHNbNF19YFwiPjwvdGVtcGxhdGU+XHJcbiAgICA8IS0tIG9wcG9uZW50IHBvaW50cyBpbWFnZXMgLS0+XHJcblxyXG4gIDwvcm91bmQtdHJhbnNpdGlvbj5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgUm91bmRUcmFuc2l0aW9uIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL3F1aXovUm91bmRUcmFuc2l0aW9uLnZ1ZSdcclxuLy8gVE9ETzogTWFrZSBpbXBvc2libGUgdG8gY2hhbmdlIHVzZXIgcG9pbnRzIGluIGNvZGUsIGhhY2tcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIlF1aXpEZXRhaWxzXCIsXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgUm91bmRUcmFuc2l0aW9uLFxyXG4gIH0sXHJcblxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByb3VuZHM6IFtcclxuICAgICAgICBcImh0dHA6Ly8xMC4xMC4xMC4yMzo4MDAyL3N0YXRpYy9hc3NldHMvMjk3ODA2LnBuZ1wiLFxyXG4gICAgICAgIFwiaHR0cDovLzEwLjEwLjEwLjIzOjgwMDIvc3RhdGljL2Fzc2V0cy9sb2NrX29yZGluYXJ5X3NlY3VyaXR5X3NlY3VyZV9nYW1lX3Byb3RlY3Rfc2FmZS01MTIud2VicFwiLFxyXG4gICAgICAgIFwiaHR0cDovLzEwLjEwLjEwLjIzOjgwMDIvc3RhdGljL2Fzc2V0cy9sb2NrX29yZGluYXJ5X3NlY3VyaXR5X3NlY3VyZV9nYW1lX3Byb3RlY3Rfc2FmZS01MTIud2VicFwiLFxyXG4gICAgICAgIFwiaHR0cDovLzEwLjEwLjEwLjIzOjgwMDIvc3RhdGljL2Fzc2V0cy9sb2NrX29yZGluYXJ5X3NlY3VyaXR5X3NlY3VyZV9nYW1lX3Byb3RlY3Rfc2FmZS01MTIud2VicFwiLFxyXG4gICAgICAgIFwiaHR0cDovLzEwLjEwLjEwLjIzOjgwMDIvc3RhdGljL2Fzc2V0cy9sb2NrX29yZGluYXJ5X3NlY3VyaXR5X3NlY3VyZV9nYW1lX3Byb3RlY3Rfc2FmZS01MTIud2VicFwiLFxyXG4gICAgICBdLFxyXG4gICAgICBwbGF5ZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgIC8vIGxvYWQgcGxheWVyIGRhdGEgaGVyZVxyXG4gICAgICAgIFwibmFtZVwiOiBcImd1ZXN0XCIsXHJcbiAgICAgICAgXCJwaG90b191cmxcIjogXCJodHRwOi8vMTAuMTAuMTAuMjM6ODAwMi9zdGF0aWMvYXNzZXRzL2dhbWVyLWVzcG9ydHMtcGxheWVyLWNvbXBldGl0aW9uLWFjdGl2aXR5LTI1Ni53ZWJwXCIsIC8vIFRPRE86IGNoYW5nZSBkZWZhdWx0IHVybCB0byBndWVzdCBwaG90byB1cmxcclxuICAgICAgICBcImxhc3RfYW5zd2VyXCI6IFwiYVwiLFxyXG4gICAgICAgIFwicm91bmRzXCI6IFtcclxuICAgICAgICAgIFwiaHR0cDovLzEwLjEwLjEwLjIzOjgwMDIvc3RhdGljL2Fzc2V0cy8yOTc4MDYucG5nXCIsXHJcbiAgICAgICAgICBcImh0dHA6Ly8xMC4xMC4xMC4yMzo4MDAyL3N0YXRpYy9hc3NldHMvbG9ja19vcmRpbmFyeV9zZWN1cml0eV9zZWN1cmVfZ2FtZV9wcm90ZWN0X3NhZmUtNTEyLndlYnBcIixcclxuICAgICAgICAgIFwiaHR0cDovLzEwLjEwLjEwLjIzOjgwMDIvc3RhdGljL2Fzc2V0cy9sb2NrX29yZGluYXJ5X3NlY3VyaXR5X3NlY3VyZV9nYW1lX3Byb3RlY3Rfc2FmZS01MTIud2VicFwiLFxyXG4gICAgICAgICAgXCJodHRwOi8vMTAuMTAuMTAuMjM6ODAwMi9zdGF0aWMvYXNzZXRzL2xvY2tfb3JkaW5hcnlfc2VjdXJpdHlfc2VjdXJlX2dhbWVfcHJvdGVjdF9zYWZlLTUxMi53ZWJwXCIsXHJcbiAgICAgICAgICBcImh0dHA6Ly8xMC4xMC4xMC4yMzo4MDAyL3N0YXRpYy9hc3NldHMvbG9ja19vcmRpbmFyeV9zZWN1cml0eV9zZWN1cmVfZ2FtZV9wcm90ZWN0X3NhZmUtNTEyLndlYnBcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIExvYWQgb3Bwb25lbnQgZGF0YSBoZXJlXHJcblxyXG4gICAgICAgIFxyXG4gICAgICBdLFxyXG4gICAgICBxdWl6OiBbXSxcclxuICAgICAgc2x1ZzogdGhpcy4kcm91dGUucGFyYW1zLnNsdWcsXHJcbiAgICAgIHNlbGVjdGVkQW5zd2VyOiBudWxsLFxyXG4gICAgICBjb3JyZWN0QW5zd2VyOiAwLFxyXG4gICAgICBxdWVzdGlvbjogXCJcIixcclxuICAgICAgYW5zd2VyczogW10sXHJcbiAgICAgIGFjdHVhbFF1aXo6IDAsXHJcbiAgICAgIHF1aXpGaW5pc2hlZDogZmFsc2UsXHJcbiAgICAgIHF1aXpTdGFydGVkOiBmYWxzZSxcclxuICAgICAgcG9pbnRzOiAwLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgaXNDaG9vc2VkOiBmYWxzZSxcclxuICAgICAgdGltZXI6IGZhbHNlLFxyXG4gICAgICBzb2NrZXQ6IG51bGwsXHJcblxyXG4gICAgICBFbXB0eUljb246IFwiaHR0cDovLzEwLjEwLjEwLjIzOjgwMDIvXCIgKyBcInN0YXRpYy9hc3NldHMvbG9ja19vcmRpbmFyeV9zZWN1cml0eV9zZWN1cmVfZ2FtZV9wcm90ZWN0X3NhZmUtNTEyLndlYnBcIixcclxuICAgICAgQ3VycmVudEljb246IFwiaHR0cDovLzEwLjEwLjEwLjIzOjgwMDIvXCIgKyBcInN0YXRpYy9hc3NldHMvMjk3ODA2LnBuZ1wiLCAvLyBjdXJyZW50XHJcbiAgICAgIEluY29ycmVjdEljb246IFwiaHR0cDovLzEwLjEwLjEwLjIzOjgwMDIvXCIgKyBcInN0YXRpYy9hc3NldHMvMzc4NjA0OS5wbmdcIiwgLy8gRmFpbGVkXHJcbiAgICAgIENvcnJlY3RJY29uOiBcImh0dHA6Ly8xMC4xMC4xMC4yMzo4MDAyL1wiICsgXCJzdGF0aWMvYXNzZXRzLzM3ODYwNDIucG5nXCIsIC8vIGNvcnJlY3RcclxuICAgIH07XHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgbG9hZGluZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBwcm9ncmVzQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdWl6LXRpbWVyXCIpXHJcbiAgICAgIGlmICh0aGlzLmxvYWRpbmcgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHRydWVcclxuICAgICAgICBwcm9ncmVzQmFyLmFuaW1hdGUoe3dpZHRoOiBcIjEwMCVcIn0sIDUwMDApXHJcblxyXG4gICAgICAgIC8vIEFkZCBuZXh0IHJvdW5kIGZ1bmNpb25hbGl0eSBhZnRlciB0aW1lb3V0XHJcbiAgICAgICAgLy8gU3RvcCBhbmltYXRpb24gaWYgdXNlciBjaG9vc2VuYW5zd2VyXHJcbiAgICAgICAgLy8gc3RvcCBuZXh0IHJvdW5kIHRpbWVvdXRcclxuICAgICAgfSBlbHNlIGlmKHRoaXMudGltZXIgPT09IHRydWUpIHtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25zID0gcHJvZ3Jlc0Jhci5nZXRBbmltYXRpb25zKCk7XHJcbiAgICAgICAgaWYoYW5pbWF0aW9ucy5sZW5ndGggPjApIGFuaW1hdGlvbnNbMF0uZmluaXNoKClcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnRpbWVyID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBjb25uZWN0UGxheWVyKCkge1xyXG4gICAgICB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vMTAuMTAuMTAuMjM6ODAwMi93cy9wbGF5cm9vbXMvJylcclxuICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IGV2ZW50LmRhdGFcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGxheUR1ZWwoKSB7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnNvY2tldC5zZW5kKFwid2hhdHMgbXkgbmFtZT9cIik7XHJcbiAgICB9LFxyXG4gICAgc2F2ZVF1aXpUYWtlcigpIHtcclxuXHJcblxyXG4gICAgfSxcclxuICAgIGxvYWRPcHBwb25lbnQoKSB7XHJcbiAgICAgIC8vIENyZWF0ZSBEamFuZ28gQ2hhbm5lbHMgb3Igc29ja2V0LmlvIG9yIHdlYnNvY2tldHMgcm9vbVxyXG4gICAgICAvLyBzZW50IG9wcG9uZW50IGRhdGEgZnJvbSBhcHAgdG8gc29ja2V0IHJvb21cclxuICAgICAgLy8gbG9hZCBkYXRhIGhlcmUgYW5kIHVucGFjayBpdFxyXG4gICAgICAvLyBzYXZlIGRhdGEgdG8gcGxheWVyc1sxXVxyXG4gICAgfSxcclxuICAgIGxvYWROZXh0Um91bmQoKSB7XHJcbiAgICAgIGlmICh0aGlzLnF1aXpGaW5pc2hlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRpbmc9ZmFsc2UsIDIwMDApXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pc0Nob29zZWQgPSBmYWxzZVxyXG4gICAgICAgIC8vIHNldCBjdXJyZW50IGljb24gZm9yXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLnJvdW5kc1t0aGlzLmFjdHVhbFF1aXpdID0gdGhpcy5DdXJyZW50SWNvblxyXG4gICAgICAgIC8vIGlmICh0aGlzLnNvY2tldCA9PT0gbnVsbCkgdGhpcy5jb25uZWN0UGxheWVyKClcclxuICAgICAgICAvLyB0aGlzLnBsYXlEdWVsKClcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNoZWNrQ29ycmVjdEFuc3dlcigpIHtcclxuICAgICAgXHJcbiAgICAgIC8vIFRPRE86IENyZWF0ZSBhbmltYXRpb25cclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRBbnN3ZXIgPT0gdGhpcy5jb3JyZWN0QW5zd2VyKSB7XHJcbiAgICAgICAgdGhpcy5yb3VuZHNbdGhpcy5hY3R1YWxRdWl6LTFdID0gdGhpcy5Db3JyZWN0SWNvblxyXG4gICAgICAgIHRoaXMucGxheWVyc1swXS5yb3VuZHNbdGhpcy5hY3R1YWxRdWl6LTFdID0gdGhpcy5Db3JyZWN0SWNvblxyXG4gICAgICAgIHRoaXMucG9pbnRzICs9IDEwXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5yb3VuZHNbdGhpcy5hY3R1YWxRdWl6LTFdID0gdGhpcy5JbmNvcnJlY3RJY29uXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLnJvdW5kc1t0aGlzLmFjdHVhbFF1aXotMV0gPSB0aGlzLkluY29ycmVjdEljb25cclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICByZXNldE9wdGlvbnMoKSB7XHJcbiAgICAgIC8vcmVzZXQgYW5zd2VycyBhbmQgc2VsZWN0ZWRBbnN3ZXJcclxuICAgICAgdGhpcy5hbnN3ZXJzID0gW107XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRBbnN3ZXIgPSBcIlwiO1xyXG5cclxuICAgICAgLy9nZXQgYW5zd2VyIGRpdnNcclxuICAgICAgbGV0IG9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3B0aW9uXCIpO1xyXG5cclxuICAgICAgLy9Gb3IgZWFjaCBvcHRpb24gZGl2IHJlbW92ZSBhbGwgb3BlcmF0aW9uYWwgY2xhc3Nlc1xyXG4gICAgICBBcnJheS5mcm9tKG9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgIG9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIG9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY29ycmVjdFwiKTtcclxuICAgICAgICBvcHRpb24uY2xhc3NMaXN0LnJlbW92ZShcImluY29ycmVjdFwiKTtcclxuXHJcbiAgICAgICAgLy9SZXNldCBvcHRpb24gZGl2cyB0ZXh0Q29udGVudFxyXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5jb3JyZWN0QW5zd2VyID0gXCJcIjtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0QWN0dWFsUXVpeihhY3R1YWxRdWl6TnVtYmVyKSB7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgLy9zb2xvLCBkdWVsLCBmaW5kXHJcbiAgICAgIC8vcmVzZXQgb3B0aW9uIGRpdnNcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRBbnN3ZXIgfHwgIXRoaXMucXVpelN0YXJ0ZWQpIHtcclxuICAgICAgICB0aGlzLnJlc2V0T3B0aW9ucygpO1xyXG5cclxuICAgICAgICAvL2lmIHRoZXJlIGlzIG1vcmUgcXVlc3Rpb25zIGxlZnRcclxuICAgICAgICBpZiAodGhpcy5xdWl6W1wicXVlc3Rpb25fc2V0XCJdW2FjdHVhbFF1aXpOdW1iZXJdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIC8vcXVlc3Rpb24gPVxyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvbiA9IHRoaXMucXVpeltcInF1ZXN0aW9uX3NldFwiXVthY3R1YWxRdWl6TnVtYmVyXS50ZXh0O1xyXG5cclxuICAgICAgICAgIC8vIGZvciBlYWNoIGFuc3dlciBpbiBhY3R1YWwgUXVlc3Rpb24gc2V0IGFuc3dlcnNcclxuICAgICAgICAgIHRoaXMucXVpeltcInF1ZXN0aW9uX3NldFwiXVthY3R1YWxRdWl6TnVtYmVyXVtcImFuc3dlcl9zZXRcIl0uZm9yRWFjaChcclxuICAgICAgICAgICAgKGFuc3dlcikgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuYW5zd2Vycy5wdXNoKGFuc3dlcltcInRleHRcIl0pO1xyXG4gICAgICAgICAgICAgIC8vaWYgYW5zd2VyIGlzIGNvcnJlY3QgYWRkIGl0IHRvIGNvcnJlY3RBbnN3ZXIgVmFyaWFibGVcclxuICAgICAgICAgICAgICBpZiAoYW5zd2VyW1wiaXNfY29ycmVjdFwiXSA9PT0gdHJ1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY29ycmVjdEFuc3dlciA9IGFuc3dlcltcInRleHRcIl07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIG1vcmUgcXVlc3Rpb24sIFFVSVogRklOSVNIRUQ6XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuYWN0dWFsUXVpek51bWJlciA9PTUpIHtcclxuICAgICAgICAgIHRoaXMucXVlc3Rpb24gPSBcIlwiO1xyXG4gICAgICAgICAgdGhpcy5xdWl6RmluaXNoZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5xdWVzdGlvbiA9IFwiXCI7XHJcbiAgICAgICAgICB0aGlzLnF1aXpGaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmxvYWROZXh0Um91bmQoKVxyXG5cclxuICAgICAgLy9pbmNyZW1lbnQgQWN0dWFsIFF1ZXN0aW9uICsxIGlmIHF1aXogaGFzbnQgYmVlbiBmaW5pc2hlZFxyXG4gICAgICBpZiAoIXRoaXMucXVpekZpbmlzaGVkKSB0aGlzLmFjdHVhbFF1aXorKztcclxuICAgIH0sXHJcblxyXG4gICAgaGFuZGxlU2VsZWN0SXRlbShpdGVtLCBldmVudD17fSkge1xyXG4gICAgICBcclxuICAgICAgaWYgKHRoaXMuaXNDaG9vc2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHByb2dyZXNCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1aXotdGltZXJcIilcclxuICAgICAgICBjb25zdCBhbmltYXRpb25zID0gcHJvZ3Jlc0Jhci5nZXRBbmltYXRpb25zKCk7XHJcblxyXG4gICAgICAgIGlmIChhbmltYXRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgYW5pbWF0aW9uc1swXS5wYXVzZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5nZXRBY3R1YWxRdWl6KHRoaXMuYWN0dWFsUXVpeiksIDIwMDApXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQW5zd2VyID09PSBcIlwiKSB0aGlzLnNlbGVjdGVkQW5zd2VyID0gaXRlbTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBpZiBzZWxlY3RlZCBhbnN3ZXIgaXMgdHJ1ZVxyXG4gICAgICAgIHRoaXMuY2hlY2tDb3JyZWN0QW5zd2VyKClcclxuICAgICAgICB0aGlzLnF1aXpTdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyBzZXQgbmV4dCByb3VuZCBpY29uIHRvIEN1cnJlbnQgcXVpeiBpY29uXHJcbiAgICAgICAgdGhpcy5yb3VuZHNbdGhpcy5hY3R1YWxRdWl6XSA9IHRoaXMuQ3VycmVudEljb25cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwib3B0aW9uXCIpO1xyXG5cclxuICAgICAgICBBcnJheS5mcm9tKG9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgaWYgKG9wdGlvbi50ZXh0Q29udGVudCAhPT0gdGhpcy5jb3JyZWN0QW5zd2VyICYmIG9wdGlvbi50ZXh0Q29udGVudCA9PT0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKFwiaW5jb3JyZWN0XCIpO1xyXG4gICAgICAgICAgfSBpZiAob3B0aW9uLnRleHRDb250ZW50ID09PSB0aGlzLmNvcnJlY3RBbnN3ZXIpIG9wdGlvbi5jbGFzc0xpc3QuYWRkKFwiY29ycmVjdFwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRoaXMuaXNDaG9vc2VkID0gdHJ1ZVxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBmZXRjaChwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgYGFwaS9kZXRhaWxzL2AgKyB0aGlzLnNsdWcgKyBgL2ApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiAodGhpcy5xdWl6ID0gZGF0YSkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiAodGhpcy5jb3JyZWN0QW5zd2VyID0gZGF0YS5hbnN3ZXIpKVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpKTtcclxuICB9LFxyXG4gIC8vY3JlYXRlZCgpIHtcclxuICAvLy8gIHRoaXMuY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQoXCJ3c3M6Ly9lY2hvLndlYnNvY2tldC5vcmdcIilcclxuIC8vIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcCB7XHJcbiAgaGVpZ2h0OiAxNWVtO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uUXVpekNvdW50ZXIge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHRleHQtYWxpZ246IHRvcDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLm9wdGlvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NDZmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnVsLmxpc3QtZ3JvdXAgbGkuYWN0aXZlIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NDZmZjtcclxufVxyXG5cclxudWwubGlzdC1ncm91cCBsaS5jb3JyZWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxudWwubGlzdC1ncm91cCBsaS5pbmNvcnJlY3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuI3RpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIG1hcmdpbi1sZWZ0OiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi5wbGF5ZXItaW5mby1jb250ZW50IHtcclxuICBcclxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGJ1dHRvbi5mdWxsLXdpZHRoIHtcclxuICAgICAgICB3aWR0aDogMTAwJTsgIFxyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUE2SUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUxBO0FBREE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBOUNBO0FBK0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWhCQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5KQTtBQXFKQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXpPQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/QuizDetails.vue?vue&type=script&lang=js\n");

/***/ })

})