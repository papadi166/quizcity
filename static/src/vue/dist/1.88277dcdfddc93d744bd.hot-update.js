webpackHotUpdate(1,{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/QuizDetails.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./views/quizes/QuizDetails.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ \"./node_modules/core-js/modules/es.array.from.js\");\n/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ \"./node_modules/core-js/modules/es.string.iterator.js\");\n/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_components_quiz_RoundTransition_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/components/quiz/RoundTransition.vue */ \"./src/components/quiz/RoundTransition.vue\");\n\n\n\n\n // TODO: Make imposible to change user points in code, hack\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"QuizDetails\",\n  components: {\n    RoundTransition: _src_components_quiz_RoundTransition_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  data: function data() {\n    return {\n      rounds: [\"http://10.10.10.23:8002/\" + \"static/assets/297806.png\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\"],\n      players: [{\n        // load player data here\n        \"id\": 0,\n        \"name\": \"guest\",\n        \"photo_url\": \"http://10.10.10.23:8002/\" + \"static/assets/gamer-esports-player-competition-activity-256.webp\",\n        // TODO: change default url to guest photo url\n        \"last_answer\": \"a\",\n        \"rounds\": [\"http://10.10.10.23:8002/\" + \"static/assets/297806.png\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\"]\n      }, {\n        // load player data here\n        \"id\": 1,\n        \"name\": \"guest2\",\n        \"photo_url\": \"http://10.10.10.23:8002/\" + \"static/assets/gamer-esports-player-competition-activity-256.webp\",\n        // TODO: change default url to guest photo url\n        \"last_answer\": \"a\",\n        \"rounds\": [\"http://10.10.10.23:8002/\" + \"static/assets/297806.png\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\", \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\"]\n      } // Load opponent data here\n      ],\n      quiz: [],\n      slug: this.$route.params.slug,\n      selectedAnswer: null,\n      correctAnswer: 0,\n      question: \"\",\n      answers: [],\n      actualQuiz: 0,\n      quizFinished: false,\n      quizStarted: false,\n      points: 0,\n      loading: false,\n      isChoosed: false,\n      timer: false,\n      socket: null,\n      EmptyIcon: \"http://10.10.10.23:8002/\" + \"static/assets/lock_ordinary_security_secure_game_protect_safe-512.webp\",\n      CurrentIcon: \"http://10.10.10.23:8002/\" + \"static/assets/297806.png\",\n      // current\n      IncorrectIcon: \"http://10.10.10.23:8002/\" + \"static/assets/3786049.png\",\n      // Failed\n      CorrectIcon: \"http://10.10.10.23:8002/\" + \"static/assets/3786042.png\" // correct\n\n    };\n  },\n  watch: {\n    loading: function loading() {\n      var progresBar = document.getElementById(\"quiz-timer\");\n\n      if (this.loading === false) {\n        this.timer = true;\n        progresBar.animate({\n          width: \"100%\"\n        }, 5000); // let animate = progresBar.getAnimations\n        // setTimeout(() =>  {console.log(\"tiime is over\")}  }, 5000)\n        // Add next round funcionality after timeout\n        // Stop animation if user choosenanswer\n        // stop next round timeout\n      } else if (this.timer === true) {\n        var animations = progresBar.getAnimations();\n        if (animations.length > 0) animations[0].finish();\n        this.timer = false;\n      }\n    }\n  },\n  methods: {\n    connectPlayer: function connectPlayer() {\n      this.socket = new WebSocket('ws://10.10.10.23:8002/ws/playrooms/');\n\n      this.socket.onmessage = function (event) {\n        var data = event.data;\n        console.log(data);\n      };\n    },\n    playDuel: function playDuel() {\n      this.socket.send(\"whats my name?\");\n    },\n    saveQuizTaker: function saveQuizTaker() {},\n    loadOppponent: function loadOppponent() {\n      // Create Django Channels or socket.io or websockets room\n      // sent opponent data from app to socket room\n      // load data here and unpack it\n      // save data to players[1]\n      this.$router.push({\n        name: 'Friends'\n      });\n    },\n    loadNextRound: function loadNextRound() {\n      var _this = this;\n\n      if (this.quizFinished === false) {\n        this.loading = true;\n        setTimeout(function () {\n          return _this.loading = false;\n        }, 2000);\n        this.isChoosed = false; // set current icon for\n\n        this.players[0].rounds[this.actualQuiz] = this.CurrentIcon; // if (this.socket === null) this.connectPlayer()\n        // this.playDuel()\n      }\n    },\n    checkCorrectAnswer: function checkCorrectAnswer() {\n      // TODO: Create animation\n      if (this.selectedAnswer == this.correctAnswer) {\n        this.rounds[this.actualQuiz - 1] = this.CorrectIcon;\n        this.players[0].rounds[this.actualQuiz - 1] = this.CorrectIcon;\n        this.points += 10;\n      } else {\n        this.rounds[this.actualQuiz - 1] = this.IncorrectIcon;\n        this.players[0].rounds[this.actualQuiz - 1] = this.IncorrectIcon;\n      }\n    },\n    resetOptions: function resetOptions() {\n      var _this2 = this;\n\n      //reset answers and selectedAnswer\n      this.answers = [];\n      this.selectedAnswer = \"\"; //get answer divs\n\n      var options = document.getElementsByClassName(\"option\"); //For each option div remove all operational classes\n\n      Array.from(options).forEach(function (option) {\n        option.classList.remove(\"active\");\n        option.classList.remove(\"correct\");\n        option.classList.remove(\"incorrect\");\n        option.classList.add(\"option-hover\"); // adds option-hover to set hover effect\n        //Reset option divs textContent\n\n        option.textContent = \"\";\n        _this2.correctAnswer = \"\";\n      });\n    },\n    getActualQuiz: function getActualQuiz(actualQuizNumber) {\n      var _this3 = this;\n\n      //solo, duel, find\n      //reset option divs\n      if (this.selectedAnswer || !this.quizStarted) {\n        this.resetOptions(); //if there is more questions left\n\n        if (this.quiz[\"question_set\"][actualQuizNumber] !== undefined) {\n          //question =\n          this.question = this.quiz[\"question_set\"][actualQuizNumber].text; // for each answer in actual Question set answers\n\n          this.quiz[\"question_set\"][actualQuizNumber][\"answer_set\"].forEach(function (answer) {\n            _this3.answers.push(answer[\"text\"]); //if answer is correct add it to correctAnswer Variable\n\n\n            if (answer[\"is_correct\"] === true) _this3.correctAnswer = answer[\"text\"];\n          }); // if there is no more question, QUIZ FINISHED:\n        } else if (this.actualQuizNumber == 5) {\n          this.question = \"\";\n          this.quizFinished = true; // Prevents loading next question\n        } else {\n          this.question = \"\";\n          this.quizFinished = true;\n        }\n      }\n\n      this.loadNextRound(); //increment Actual Question +1 if quiz hasnt been finished\n\n      if (!this.quizFinished && this.actualQuiz <= 5) this.actualQuiz++;\n    },\n    handleSelectItem: function handleSelectItem(item) {\n      var _this4 = this;\n\n      var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n      if (this.isChoosed === false) {\n        var progresBar = document.getElementById(\"quiz-timer\");\n        var animations = progresBar.getAnimations();\n\n        if (animations.length > 0) {\n          animations[0].pause();\n        }\n\n        setTimeout(function () {\n          return _this4.getActualQuiz(_this4.actualQuiz);\n        }, 2000);\n        if (this.selectedAnswer === \"\") this.selectedAnswer = item; // Check if selected answer is true\n\n        this.checkCorrectAnswer();\n        this.quizStarted = true; // set next round icon to Current quiz icon\n\n        this.rounds[this.actualQuiz] = this.CurrentIcon;\n        event.target.classList.add(\"active\");\n        var options = document.getElementsByClassName(\"option\");\n        Array.from(options).forEach(function (option) {\n          if (option.textContent !== _this4.correctAnswer && option.textContent === event.target.textContent) {\n            option.classList.add(\"incorrect\");\n          }\n\n          if (option.textContent === _this4.correctAnswer) option.classList.add(\"correct\");\n          option.classList.remove(\"option-hover\"); // remove hover effects from option after choose answer\n        });\n      }\n\n      this.isChoosed = true;\n    }\n  },\n  mounted: function mounted() {\n    var _this5 = this;\n\n    fetch(\"http://10.10.10.23:8002/\" + \"api/details/\" + this.slug + \"/\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return _this5.quiz = data;\n    }).then(function (data) {\n      return _this5.correctAnswer = data.answer;\n    }).catch(function (err) {\n      return console.log(err.message);\n    });\n  } //created() {\n  ///  this.connection = new WebSocket(\"wss://echo.websocket.org\")\n  // }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci12MTYvZGlzdC9pbmRleC5qcz8hLi92aWV3cy9xdWl6ZXMvUXVpekRldGFpbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdmlld3MvcXVpemVzL1F1aXpEZXRhaWxzLnZ1ZT8wZDM1Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuPGRpdj5cclxuICA8IS0tIENoYW5nZSB0byB2LXNob3cgdG8gaW5jcmVhc2UgcGVyZm9ybWFjZSwgYnV0IHlvdSBoYXZlIHRvIHJlcGFpciBidWcgd2l0aCBub3Qgc2hvd2luZyBhbnN3ZXIgMCBzb21ldGltZXMgLS0+XHJcbiAgPGRpdiB2LXNob3c9XCJsb2FkaW5nID09PSBmYWxzZVwiPlxyXG5cclxuICAgIDxkaXYgaWQ9XCJwbGF5ZXItaW5mb1wiIHYtc2hvdz1cInRoaXMuYW5zd2Vyc1swXVwiID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGxheWVyLWluZm8tY29udGVudFwiIHYtZm9yPVwicGxheWVyIGluIHBsYXllcnNcIiA6a2V5PVwicGxheWVyXCI+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzPVwicGxheWVyLXBob3RvXCIgOmNsYXNzPVwiYHBsYXllci1waG90by0ke3BsYXllci5pZH1gXCIgOnNyYz1cInBsYXllci5waG90b191cmxcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwicGxheWVyLW5hbWVcIiA6Y2xhc3M9XCJgcGxheWVyLW5hbWUtJHtwbGF5ZXIuaWR9YFwiID57e3BsYXllci5uYW1lfX08L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3R5bGU9XCJ3aWR0aDozMnB4OyBoZWlnaHQ6MzJweFwiIDpzcmM9XCJgJHtwbGF5ZXIucm91bmRzWzBdfWBcIj5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOjMycHg7IGhlaWdodDozMnB4XCIgOnNyYz1cImAke3BsYXllci5yb3VuZHNbMV19YFwiPlxyXG4gICAgICAgICAgICA8aW1nIHN0eWxlPVwid2lkdGg6MzJweDsgaGVpZ2h0OjMycHhcIiA6c3JjPVwiYCR7cGxheWVyLnJvdW5kc1syXX1gXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3R5bGU9XCJ3aWR0aDozMnB4OyBoZWlnaHQ6MzJweFwiIDpzcmM9XCJgJHtwbGF5ZXIucm91bmRzWzNdfWBcIj5cclxuICAgICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOjMycHg7IGhlaWdodDozMnB4XCIgOnNyYz1cImAke3BsYXllci5yb3VuZHNbNF19YFwiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IDwhLS0gVE9ETzogQ2hhbmdlIHRvIHVzZXJzW10ubGVuZ3RoPT09MiB3aGVuIHByb2QgYW5kIGxvYWQgdXNlciBpbiBwYXJlbnQgY29tcG9uZW50IC0tPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cImNhcmRcIiBzdHlsZT1cIm1hcmdpbjogYXV0b1wiPlxyXG4gICAgPGltZyA6c3JjPVwiYCR7cXVpei5pbWFnZX1gXCIgY2xhc3M9XCJjYXJkLWltZy10b3BcIiBhbHQ9XCJcIiAvPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICA8aDEgaWQ9XCJ0aXRsZVwiPnt7IHRoaXMucXVpeltcInRpdGxlXCJdIH19PC9oMT5cclxuICAgICAgPGg1IGlkPVwiY291bnRlclwiIGNsYXNzPVwiY2FyZC10aXRsZVwiPlxyXG4gICAgICAgIHt7IGFjdHVhbFF1aXogfX0gLyB7eyBxdWl6W1wibnVtYmVyX29mX3F1ZXN0aW9uc1wiXSB9fVxyXG4gICAgICA8L2g1PlxyXG4gICAgICA8aDMgdi1pZj1cInRoaXMucXVlc3Rpb25cIiBjbGFzcz1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgIFF1ZXN0aW9uOiB7eyB0aGlzLnF1ZXN0aW9uIH19XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiIHYtc2hvdz1cImFuc3dlcnNbMF1cIj5cclxuICAgICAgICA8ZGl2IGlkPVwicXVpei10aW1lclwiIGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgc3R5bGU9XCJ3aWR0aDowJVwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDx1bCB2LWlmPVwibG9hZGluZyA9PT0gZmFsc2VcIiBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1ob3Jpem9udGFsIFwiPiA8IS0tIFdBUk5JTkchIHBsZWFzZSBkb250IGNoYW5nZSB2LWlmIHN0YXRlbWVudCBpdCBtYXkgY2F1c2UgbG9zdCBhbnN3ZXJzIGJ1ZyAtLT5cclxuICAgICAgPGxpXHJcbiAgICAgICAgdi1zaG93PVwidGhpcy5hbnN3ZXJzWzBdXCJcclxuICAgICAgICBAY2xpY2s9XCJoYW5kbGVTZWxlY3RJdGVtKHRoaXMuYW5zd2Vyc1swXSwgJGV2ZW50KVwiIFxyXG4gICAgICAgIGlkPVwiMVwiXHJcbiAgICAgICAgY2xhc3M9XCJvcHRpb24gb3B0aW9uLWhvdmVyIGxpc3QtZ3JvdXAtaXRlbSB3LTUwXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IHRoaXMuYW5zd2Vyc1swXSB9fVxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGlcclxuICAgICAgICB2LXNob3c9XCJ0aGlzLmFuc3dlcnNbMV1cIlxyXG4gICAgICAgIEBjbGljaz1cImhhbmRsZVNlbGVjdEl0ZW0odGhpcy5hbnN3ZXJzWzFdLCAkZXZlbnQpXCJcclxuICAgICAgICBpZD1cIjJcIlxyXG4gICAgICAgIGNsYXNzPVwib3B0aW9uIG9wdGlvbi1ob3ZlciBsaXN0LWdyb3VwLWl0ZW0gdy01MFwiXHJcbiAgICAgID5cclxuICAgICAgICB7eyB0aGlzLmFuc3dlcnNbMV0gfX1cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8dWwgdi1zaG93PVwidGhpcy5hbnN3ZXJzWzJdXCIgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtaG9yaXpvbnRhbCBcIj5cclxuICAgICAgPGxpXHJcbiAgICAgICAgdi1zaG93PVwidGhpcy5hbnN3ZXJzWzJdXCJcclxuICAgICAgICBAY2xpY2s9XCJoYW5kbGVTZWxlY3RJdGVtKHRoaXMuYW5zd2Vyc1syXSwgJGV2ZW50KVwiXHJcbiAgICAgICAgaWQ9XCIzXCJcclxuICAgICAgICBjbGFzcz1cIm9wdGlvbiBvcHRpb24taG92ZXIgbGlzdC1ncm91cC1pdGVtIHctNTBcIlxyXG4gICAgICA+XHJcbiAgICAgICAge3sgdGhpcy5hbnN3ZXJzWzJdIH19XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaVxyXG4gICAgICAgIHYtc2hvdz1cInRoaXMuYW5zd2Vyc1szXVwiXHJcbiAgICAgICAgQGNsaWNrPVwiaGFuZGxlU2VsZWN0SXRlbSh0aGlzLmFuc3dlcnNbM10sICRldmVudClcIlxyXG4gICAgICAgIGlkPVwiNFwiXHJcbiAgICAgICAgY2xhc3M9XCJvcHRpb24gb3B0aW9uLWhvdmVyIGxpc3QtZ3JvdXAtaXRlbSB3LTUwXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IHRoaXMuYW5zd2Vyc1szXSB9fVxyXG4gICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcblxyXG4gICAgICA8IS0tIFBsYXkgYnV0dG9ucyAtLT5cclxuICAgICAgPGRpdiB2LWlmPVwiIXRoaXMucXVlc3Rpb24gJiYgIXRoaXMucXVpekZpbmlzaGVkXCI+XHJcbiAgICAgICAgPCEtLVJhbmtzIC0tPlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBAY2xpY2s9XCJnZXRBY3R1YWxRdWl6KHRoaXMuYWN0dWFsUXVpeilcIlxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgcGxheS1idG4gZnVsbC13aWR0aFwiXHJcbiAgICAgICAgICBpZD1cInN0YXJ0LWJ1dHRvblwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4+U29sbzwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj4gPGJyPjxicj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBAY2xpY2s9XCJsb2FkT3BwcG9uZW50KClcIlxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgcGxheS1idG4gIGZ1bGwtd2lkdGhcIlxyXG4gICAgICAgICAgaWQ9XCJzdGFydC1idXR0b25cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiXCI+UGxheSB3aXRoIGZyaWVuZDwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj48YnI+PGJyPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIEBjbGljaz1cImdldEFjdHVhbFF1aXoodGhpcy5hY3R1YWxRdWl6KVwiXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBwbGF5LWJ0biBmdWxsLXdpZHRoXCJcclxuICAgICAgICAgIGlkPVwic3RhcnQtYnV0dG9uXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3Bhbj5GaW5kIG9wcG9uZW50PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuIFxyXG4gICAgICA8ZGl2IHYtaWY9XCJxdWl6RmluaXNoZWRcIiAgPiBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCIgc3R5bGU9XCJhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cclxuICAgICAgICAgIDxpbWcgc3R5bGU9XCJ3aWR0aDo2NHB4OyBoZWlnaHQ6NjRweFwiIDpzcmM9XCJgJHtyb3VuZHNbMF19YFwiPlxyXG4gICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOjY0cHg7IGhlaWdodDo2NHB4XCIgOnNyYz1cImAke3JvdW5kc1sxXX1gXCI+XHJcbiAgICAgICAgICA8aW1nIHN0eWxlPVwid2lkdGg6NjRweDsgaGVpZ2h0OjY0cHhcIiA6c3JjPVwiYCR7cm91bmRzWzJdfWBcIj5cclxuICAgICAgICAgIDxpbWcgc3R5bGU9XCJ3aWR0aDo2NHB4OyBoZWlnaHQ6NjRweFwiIDpzcmM9XCJgJHtyb3VuZHNbM119YFwiPlxyXG4gICAgICAgICAgPGltZyBzdHlsZT1cIndpZHRoOjY0cHg7IGhlaWdodDo2NHB4XCIgOnNyYz1cImAke3JvdW5kc1s0XX1gXCI+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDE+UXVpeiBoYXMgYmVlbiBmaW5pc2hlZDwvaDE+XHJcbiAgICAgICAgPGgyPllvdXIgcG9pbnRzOiB7eyBwb2ludHMgfX0gLyB7eyBxdWl6W1wicmVxdWlyZWRfc2NvcmVfdG9fcGFzc1wiXSB9fTwvaDI+XHJcblxyXG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwidGhpcy4kcm91dGVyLmdvKClcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPlJldHJ5PC9idXR0b24+XHJcbiAgICAgICAgPGJyPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48cm91dGVyLWxpbmsgOnRvPVwie25hbWU6ICdIb21lJ31cIj5UYWtlIGFub3RoZXIgcXVpejwvcm91dGVyLWxpbms+PC9idXR0b24+XHJcbiAgICAgICAgPHA+YXV0aG9yOiB7eyBxdWl6W1wiYXV0aG9yXCJdIH19PC9wPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8L2Rpdj5cclxuXHJcbiAgPHJvdW5kLXRyYW5zaXRpb24gdi1pZj1cInF1aXpbJ3RpdGxlJ11cIiAgdi1zaG93PVwibG9hZGluZyA9PT0gdHJ1ZSAmJiBxdWl6RmluaXNoZWQgPT09IGZhbHNlXCIgIDpxdWl6X25hbWU9XCJxdWl6Wyd0aXRsZSddXCIgOnF1aXpJY29uPVwicXVpelsnaWNvbiddXCIgOnJvdW5kPVwiYWN0dWFsUXVpelwiID5cclxuICAgIDwhLS0gY3VycmVudCBwbGF5ZXIgcG9pbnRzIGltYWdlcyAtLT5cclxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6cm91bmQxPjxpbWcgc3R5bGU9XCJ3aWR0aDo2NHB4OyBoZWlnaHQ6NjRweFwiIDpzcmM9XCJgJHtyb3VuZHNbMF19YFwiPjwvdGVtcGxhdGU+XHJcbiAgICA8dGVtcGxhdGUgdi1zbG90OnJvdW5kMj48aW1nIHN0eWxlPVwid2lkdGg6NjRweDsgaGVpZ2h0OjY0cHhcIiA6c3JjPVwiYCR7cm91bmRzWzFdfWBcIj48L3RlbXBsYXRlPlxyXG4gICAgPHRlbXBsYXRlIHYtc2xvdDpyb3VuZDM+PGltZyBzdHlsZT1cIndpZHRoOjY0cHg7IGhlaWdodDo2NHB4XCIgOnNyYz1cImAke3JvdW5kc1syXX1gXCI+PC90ZW1wbGF0ZT5cclxuICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6cm91bmQ0PjxpbWcgc3R5bGU9XCJ3aWR0aDo2NHB4OyBoZWlnaHQ6NjRweFwiIDpzcmM9XCJgJHtyb3VuZHNbM119YFwiPjwvdGVtcGxhdGU+XHJcbiAgICA8dGVtcGxhdGUgdi1zbG90OnJvdW5kNT48aW1nIHN0eWxlPVwid2lkdGg6NjRweDsgaGVpZ2h0OjY0cHhcIiA6c3JjPVwiYCR7cm91bmRzWzRdfWBcIj48L3RlbXBsYXRlPlxyXG4gICAgPCEtLSBvcHBvbmVudCBwb2ludHMgaW1hZ2VzIC0tPlxyXG5cclxuICA8L3JvdW5kLXRyYW5zaXRpb24+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IFJvdW5kVHJhbnNpdGlvbiBmcm9tICcuLi8uLi9zcmMvY29tcG9uZW50cy9xdWl6L1JvdW5kVHJhbnNpdGlvbi52dWUnXHJcbi8vIFRPRE86IE1ha2UgaW1wb3NpYmxlIHRvIGNoYW5nZSB1c2VyIHBvaW50cyBpbiBjb2RlLCBoYWNrXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJRdWl6RGV0YWlsc1wiLFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIFJvdW5kVHJhbnNpdGlvbixcclxuICB9LFxyXG5cclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcm91bmRzOiBbXHJcbiAgICAgICAgcHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwic3RhdGljL2Fzc2V0cy8yOTc4MDYucG5nXCIsXHJcbiAgICAgICAgcHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwic3RhdGljL2Fzc2V0cy9sb2NrX29yZGluYXJ5X3NlY3VyaXR5X3NlY3VyZV9nYW1lX3Byb3RlY3Rfc2FmZS01MTIud2VicFwiLFxyXG4gICAgICAgIHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBcInN0YXRpYy9hc3NldHMvbG9ja19vcmRpbmFyeV9zZWN1cml0eV9zZWN1cmVfZ2FtZV9wcm90ZWN0X3NhZmUtNTEyLndlYnBcIixcclxuICAgICAgICBwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgXCJzdGF0aWMvYXNzZXRzL2xvY2tfb3JkaW5hcnlfc2VjdXJpdHlfc2VjdXJlX2dhbWVfcHJvdGVjdF9zYWZlLTUxMi53ZWJwXCIsXHJcbiAgICAgICAgcHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwic3RhdGljL2Fzc2V0cy9sb2NrX29yZGluYXJ5X3NlY3VyaXR5X3NlY3VyZV9nYW1lX3Byb3RlY3Rfc2FmZS01MTIud2VicFwiLFxyXG4gICAgICBdLFxyXG4gICAgICBwbGF5ZXJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgIC8vIGxvYWQgcGxheWVyIGRhdGEgaGVyZVxyXG4gICAgICAgIFwiaWRcIjogMCxcclxuICAgICAgICBcIm5hbWVcIjogXCJndWVzdFwiLFxyXG4gICAgICAgIFwicGhvdG9fdXJsXCI6IHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyAgXCJzdGF0aWMvYXNzZXRzL2dhbWVyLWVzcG9ydHMtcGxheWVyLWNvbXBldGl0aW9uLWFjdGl2aXR5LTI1Ni53ZWJwXCIsIC8vIFRPRE86IGNoYW5nZSBkZWZhdWx0IHVybCB0byBndWVzdCBwaG90byB1cmxcclxuICAgICAgICBcImxhc3RfYW5zd2VyXCI6IFwiYVwiLFxyXG4gICAgICAgIFwicm91bmRzXCI6IFtcclxuICAgICAgICAgIHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBcInN0YXRpYy9hc3NldHMvMjk3ODA2LnBuZ1wiLFxyXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwic3RhdGljL2Fzc2V0cy9sb2NrX29yZGluYXJ5X3NlY3VyaXR5X3NlY3VyZV9nYW1lX3Byb3RlY3Rfc2FmZS01MTIud2VicFwiLFxyXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwic3RhdGljL2Fzc2V0cy9sb2NrX29yZGluYXJ5X3NlY3VyaXR5X3NlY3VyZV9nYW1lX3Byb3RlY3Rfc2FmZS01MTIud2VicFwiLFxyXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwic3RhdGljL2Fzc2V0cy9sb2NrX29yZGluYXJ5X3NlY3VyaXR5X3NlY3VyZV9nYW1lX3Byb3RlY3Rfc2FmZS01MTIud2VicFwiLFxyXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwic3RhdGljL2Fzc2V0cy9sb2NrX29yZGluYXJ5X3NlY3VyaXR5X3NlY3VyZV9nYW1lX3Byb3RlY3Rfc2FmZS01MTIud2VicFwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgLy8gbG9hZCBwbGF5ZXIgZGF0YSBoZXJlXHJcbiAgICAgICAgXCJpZFwiOiAxLFxyXG4gICAgICAgIFwibmFtZVwiOiBcImd1ZXN0MlwiLFxyXG4gICAgICAgIFwicGhvdG9fdXJsXCI6IHByb2Nlc3MuZW52LlZVRV9BUFBfUk9PVF9BUEkgKyBcInN0YXRpYy9hc3NldHMvZ2FtZXItZXNwb3J0cy1wbGF5ZXItY29tcGV0aXRpb24tYWN0aXZpdHktMjU2LndlYnBcIiwgLy8gVE9ETzogY2hhbmdlIGRlZmF1bHQgdXJsIHRvIGd1ZXN0IHBob3RvIHVybFxyXG4gICAgICAgIFwibGFzdF9hbnN3ZXJcIjogXCJhXCIsXHJcbiAgICAgICAgXCJyb3VuZHNcIjogW1xyXG4gICAgICAgICAgcHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIFwic3RhdGljL2Fzc2V0cy8yOTc4MDYucG5nXCIsXHJcbiAgICAgICAgICBwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgXCJzdGF0aWMvYXNzZXRzL2xvY2tfb3JkaW5hcnlfc2VjdXJpdHlfc2VjdXJlX2dhbWVfcHJvdGVjdF9zYWZlLTUxMi53ZWJwXCIsXHJcbiAgICAgICAgICBwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgXCJzdGF0aWMvYXNzZXRzL2xvY2tfb3JkaW5hcnlfc2VjdXJpdHlfc2VjdXJlX2dhbWVfcHJvdGVjdF9zYWZlLTUxMi53ZWJwXCIsXHJcbiAgICAgICAgICBwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgXCJzdGF0aWMvYXNzZXRzL2xvY2tfb3JkaW5hcnlfc2VjdXJpdHlfc2VjdXJlX2dhbWVfcHJvdGVjdF9zYWZlLTUxMi53ZWJwXCIsXHJcbiAgICAgICAgICBwcm9jZXNzLmVudi5WVUVfQVBQX1JPT1RfQVBJICsgXCJzdGF0aWMvYXNzZXRzL2xvY2tfb3JkaW5hcnlfc2VjdXJpdHlfc2VjdXJlX2dhbWVfcHJvdGVjdF9zYWZlLTUxMi53ZWJwXCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBMb2FkIG9wcG9uZW50IGRhdGEgaGVyZVxyXG5cclxuICAgICAgICBcclxuICAgICAgXSxcclxuICAgICAgcXVpejogW10sXHJcbiAgICAgIHNsdWc6IHRoaXMuJHJvdXRlLnBhcmFtcy5zbHVnLFxyXG4gICAgICBzZWxlY3RlZEFuc3dlcjogbnVsbCxcclxuICAgICAgY29ycmVjdEFuc3dlcjogMCxcclxuICAgICAgcXVlc3Rpb246IFwiXCIsXHJcbiAgICAgIGFuc3dlcnM6IFtdLFxyXG4gICAgICBhY3R1YWxRdWl6OiAwLFxyXG4gICAgICBxdWl6RmluaXNoZWQ6IGZhbHNlLFxyXG4gICAgICBxdWl6U3RhcnRlZDogZmFsc2UsXHJcbiAgICAgIHBvaW50czogMCxcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGlzQ2hvb3NlZDogZmFsc2UsXHJcbiAgICAgIHRpbWVyOiBmYWxzZSxcclxuICAgICAgc29ja2V0OiBudWxsLFxyXG5cclxuICAgICAgRW1wdHlJY29uOiBcImh0dHA6Ly8xMC4xMC4xMC4yMzo4MDAyL1wiICsgXCJzdGF0aWMvYXNzZXRzL2xvY2tfb3JkaW5hcnlfc2VjdXJpdHlfc2VjdXJlX2dhbWVfcHJvdGVjdF9zYWZlLTUxMi53ZWJwXCIsXHJcbiAgICAgIEN1cnJlbnRJY29uOiBcImh0dHA6Ly8xMC4xMC4xMC4yMzo4MDAyL1wiICsgXCJzdGF0aWMvYXNzZXRzLzI5NzgwNi5wbmdcIiwgLy8gY3VycmVudFxyXG4gICAgICBJbmNvcnJlY3RJY29uOiBcImh0dHA6Ly8xMC4xMC4xMC4yMzo4MDAyL1wiICsgXCJzdGF0aWMvYXNzZXRzLzM3ODYwNDkucG5nXCIsIC8vIEZhaWxlZFxyXG4gICAgICBDb3JyZWN0SWNvbjogXCJodHRwOi8vMTAuMTAuMTAuMjM6ODAwMi9cIiArIFwic3RhdGljL2Fzc2V0cy8zNzg2MDQyLnBuZ1wiLCAvLyBjb3JyZWN0XHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGxvYWRpbmc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc3QgcHJvZ3Jlc0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVpei10aW1lclwiKVxyXG4gICAgICBpZiAodGhpcy5sb2FkaW5nID09PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMudGltZXIgPSB0cnVlXHJcbiAgICAgICAgcHJvZ3Jlc0Jhci5hbmltYXRlKHt3aWR0aDogXCIxMDAlXCJ9LCA1MDAwKVxyXG4gICAgICAgLy8gbGV0IGFuaW1hdGUgPSBwcm9ncmVzQmFyLmdldEFuaW1hdGlvbnNcclxuICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gIHtjb25zb2xlLmxvZyhcInRpaW1lIGlzIG92ZXJcIil9ICB9LCA1MDAwKVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgLy8gQWRkIG5leHQgcm91bmQgZnVuY2lvbmFsaXR5IGFmdGVyIHRpbWVvdXRcclxuICAgICAgICAvLyBTdG9wIGFuaW1hdGlvbiBpZiB1c2VyIGNob29zZW5hbnN3ZXJcclxuICAgICAgICAvLyBzdG9wIG5leHQgcm91bmQgdGltZW91dFxyXG4gICAgICB9IGVsc2UgaWYodGhpcy50aW1lciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbnMgPSBwcm9ncmVzQmFyLmdldEFuaW1hdGlvbnMoKTtcclxuICAgICAgICBpZihhbmltYXRpb25zLmxlbmd0aCA+MCkgYW5pbWF0aW9uc1swXS5maW5pc2goKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudGltZXIgPSBmYWxzZVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBjb25uZWN0UGxheWVyKCkge1xyXG4gICAgICB0aGlzLnNvY2tldCA9IG5ldyBXZWJTb2NrZXQoJ3dzOi8vMTAuMTAuMTAuMjM6ODAwMi93cy9wbGF5cm9vbXMvJylcclxuICAgICAgdGhpcy5zb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IGV2ZW50LmRhdGFcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGxheUR1ZWwoKSB7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnNvY2tldC5zZW5kKFwid2hhdHMgbXkgbmFtZT9cIik7XHJcbiAgICB9LFxyXG4gICAgc2F2ZVF1aXpUYWtlcigpIHtcclxuXHJcblxyXG4gICAgfSxcclxuICAgIGxvYWRPcHBwb25lbnQoKSB7XHJcbiAgICAgIC8vIENyZWF0ZSBEamFuZ28gQ2hhbm5lbHMgb3Igc29ja2V0LmlvIG9yIHdlYnNvY2tldHMgcm9vbVxyXG4gICAgICAvLyBzZW50IG9wcG9uZW50IGRhdGEgZnJvbSBhcHAgdG8gc29ja2V0IHJvb21cclxuICAgICAgLy8gbG9hZCBkYXRhIGhlcmUgYW5kIHVucGFjayBpdFxyXG4gICAgICAvLyBzYXZlIGRhdGEgdG8gcGxheWVyc1sxXVxyXG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdGcmllbmRzJ30pXHJcbiAgICB9LFxyXG4gICAgbG9hZE5leHRSb3VuZCgpIHtcclxuICAgICAgaWYgKHRoaXMucXVpekZpbmlzaGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZGluZz1mYWxzZSwgMjAwMClcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmlzQ2hvb3NlZCA9IGZhbHNlXHJcbiAgICAgICAgLy8gc2V0IGN1cnJlbnQgaWNvbiBmb3JcclxuICAgICAgICB0aGlzLnBsYXllcnNbMF0ucm91bmRzW3RoaXMuYWN0dWFsUXVpel0gPSB0aGlzLkN1cnJlbnRJY29uXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuc29ja2V0ID09PSBudWxsKSB0aGlzLmNvbm5lY3RQbGF5ZXIoKVxyXG4gICAgICAgIC8vIHRoaXMucGxheUR1ZWwoKVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2hlY2tDb3JyZWN0QW5zd2VyKCkge1xyXG4gICAgICBcclxuICAgICAgLy8gVE9ETzogQ3JlYXRlIGFuaW1hdGlvblxyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZEFuc3dlciA9PSB0aGlzLmNvcnJlY3RBbnN3ZXIpIHtcclxuICAgICAgICB0aGlzLnJvdW5kc1t0aGlzLmFjdHVhbFF1aXotMV0gPSB0aGlzLkNvcnJlY3RJY29uXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLnJvdW5kc1t0aGlzLmFjdHVhbFF1aXotMV0gPSB0aGlzLkNvcnJlY3RJY29uXHJcbiAgICAgICAgdGhpcy5wb2ludHMgKz0gMTBcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJvdW5kc1t0aGlzLmFjdHVhbFF1aXotMV0gPSB0aGlzLkluY29ycmVjdEljb25cclxuICAgICAgICB0aGlzLnBsYXllcnNbMF0ucm91bmRzW3RoaXMuYWN0dWFsUXVpei0xXSA9IHRoaXMuSW5jb3JyZWN0SWNvblxyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIHJlc2V0T3B0aW9ucygpIHtcclxuICAgICAgLy9yZXNldCBhbnN3ZXJzIGFuZCBzZWxlY3RlZEFuc3dlclxyXG4gICAgICB0aGlzLmFuc3dlcnMgPSBbXTtcclxuICAgICAgdGhpcy5zZWxlY3RlZEFuc3dlciA9IFwiXCI7XHJcblxyXG4gICAgICAvL2dldCBhbnN3ZXIgZGl2c1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvcHRpb25cIik7XHJcblxyXG4gICAgICAvL0ZvciBlYWNoIG9wdGlvbiBkaXYgcmVtb3ZlIGFsbCBvcGVyYXRpb25hbCBjbGFzc2VzXHJcbiAgICAgIEFycmF5LmZyb20ob3B0aW9ucykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjb3JyZWN0XCIpO1xyXG4gICAgICAgIG9wdGlvbi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5jb3JyZWN0XCIpO1xyXG4gICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKFwib3B0aW9uLWhvdmVyXCIpOyAvLyBhZGRzIG9wdGlvbi1ob3ZlciB0byBzZXQgaG92ZXIgZWZmZWN0XHJcblxyXG4gICAgICAgIC8vUmVzZXQgb3B0aW9uIGRpdnMgdGV4dENvbnRlbnRcclxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY29ycmVjdEFuc3dlciA9IFwiXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldEFjdHVhbFF1aXooYWN0dWFsUXVpek51bWJlcikge1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIC8vc29sbywgZHVlbCwgZmluZFxyXG4gICAgICAvL3Jlc2V0IG9wdGlvbiBkaXZzXHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkQW5zd2VyIHx8ICF0aGlzLnF1aXpTdGFydGVkKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldE9wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgLy9pZiB0aGVyZSBpcyBtb3JlIHF1ZXN0aW9ucyBsZWZ0XHJcbiAgICAgICAgaWYgKHRoaXMucXVpeltcInF1ZXN0aW9uX3NldFwiXVthY3R1YWxRdWl6TnVtYmVyXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAvL3F1ZXN0aW9uID1cclxuICAgICAgICAgIHRoaXMucXVlc3Rpb24gPSB0aGlzLnF1aXpbXCJxdWVzdGlvbl9zZXRcIl1bYWN0dWFsUXVpek51bWJlcl0udGV4dDtcclxuXHJcbiAgICAgICAgICAvLyBmb3IgZWFjaCBhbnN3ZXIgaW4gYWN0dWFsIFF1ZXN0aW9uIHNldCBhbnN3ZXJzXHJcbiAgICAgICAgICB0aGlzLnF1aXpbXCJxdWVzdGlvbl9zZXRcIl1bYWN0dWFsUXVpek51bWJlcl1bXCJhbnN3ZXJfc2V0XCJdLmZvckVhY2goXHJcbiAgICAgICAgICAgIChhbnN3ZXIpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmFuc3dlcnMucHVzaChhbnN3ZXJbXCJ0ZXh0XCJdKTtcclxuICAgICAgICAgICAgICAvL2lmIGFuc3dlciBpcyBjb3JyZWN0IGFkZCBpdCB0byBjb3JyZWN0QW5zd2VyIFZhcmlhYmxlXHJcbiAgICAgICAgICAgICAgaWYgKGFuc3dlcltcImlzX2NvcnJlY3RcIl0gPT09IHRydWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvcnJlY3RBbnN3ZXIgPSBhbnN3ZXJbXCJ0ZXh0XCJdO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyBtb3JlIHF1ZXN0aW9uLCBRVUlaIEZJTklTSEVEOlxyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmFjdHVhbFF1aXpOdW1iZXIgPT01KSB7XHJcbiAgICAgICAgICB0aGlzLnF1ZXN0aW9uID0gXCJcIjtcclxuICAgICAgICAgIHRoaXMucXVpekZpbmlzaGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gUHJldmVudHMgbG9hZGluZyBuZXh0IHF1ZXN0aW9uXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMucXVlc3Rpb24gPSBcIlwiO1xyXG4gICAgICAgICAgdGhpcy5xdWl6RmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgdGhpcy5sb2FkTmV4dFJvdW5kKClcclxuXHJcbiAgICAgIC8vaW5jcmVtZW50IEFjdHVhbCBRdWVzdGlvbiArMSBpZiBxdWl6IGhhc250IGJlZW4gZmluaXNoZWRcclxuICAgICAgaWYgKCF0aGlzLnF1aXpGaW5pc2hlZCAmJiB0aGlzLmFjdHVhbFF1aXogPD0gNSkgdGhpcy5hY3R1YWxRdWl6Kys7XHJcbiAgICB9LFxyXG5cclxuICAgIGhhbmRsZVNlbGVjdEl0ZW0oaXRlbSwgZXZlbnQ9e30pIHtcclxuICAgICAgaWYgKHRoaXMuaXNDaG9vc2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHByb2dyZXNCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1aXotdGltZXJcIilcclxuICAgICAgICBjb25zdCBhbmltYXRpb25zID0gcHJvZ3Jlc0Jhci5nZXRBbmltYXRpb25zKCk7XHJcblxyXG4gICAgICAgIGlmIChhbmltYXRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgYW5pbWF0aW9uc1swXS5wYXVzZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5nZXRBY3R1YWxRdWl6KHRoaXMuYWN0dWFsUXVpeiksIDIwMDApXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkQW5zd2VyID09PSBcIlwiKSB0aGlzLnNlbGVjdGVkQW5zd2VyID0gaXRlbTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBpZiBzZWxlY3RlZCBhbnN3ZXIgaXMgdHJ1ZVxyXG4gICAgICAgIHRoaXMuY2hlY2tDb3JyZWN0QW5zd2VyKClcclxuICAgICAgICB0aGlzLnF1aXpTdGFydGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyBzZXQgbmV4dCByb3VuZCBpY29uIHRvIEN1cnJlbnQgcXVpeiBpY29uXHJcbiAgICAgICAgdGhpcy5yb3VuZHNbdGhpcy5hY3R1YWxRdWl6XSA9IHRoaXMuQ3VycmVudEljb25cclxuICAgICAgICBcclxuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJvcHRpb25cIik7XHJcblxyXG4gICAgICAgIEFycmF5LmZyb20ob3B0aW9ucykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmIChvcHRpb24udGV4dENvbnRlbnQgIT09IHRoaXMuY29ycmVjdEFuc3dlciAmJiBvcHRpb24udGV4dENvbnRlbnQgPT09IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCkge1xyXG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZChcImluY29ycmVjdFwiKTtcclxuICAgICAgICAgIH0gaWYgKG9wdGlvbi50ZXh0Q29udGVudCA9PT0gdGhpcy5jb3JyZWN0QW5zd2VyKSBvcHRpb24uY2xhc3NMaXN0LmFkZChcImNvcnJlY3RcIik7XHJcbiAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LnJlbW92ZShcIm9wdGlvbi1ob3ZlclwiKSAvLyByZW1vdmUgaG92ZXIgZWZmZWN0cyBmcm9tIG9wdGlvbiBhZnRlciBjaG9vc2UgYW5zd2VyXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmlzQ2hvb3NlZCA9IHRydWVcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgZmV0Y2gocHJvY2Vzcy5lbnYuVlVFX0FQUF9ST09UX0FQSSArIGBhcGkvZGV0YWlscy9gICsgdGhpcy5zbHVnICsgYC9gKVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gKHRoaXMucXVpeiA9IGRhdGEpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gKHRoaXMuY29ycmVjdEFuc3dlciA9IGRhdGEuYW5zd2VyKSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKSk7XHJcbiAgfSxcclxuICAvL2NyZWF0ZWQoKSB7XHJcbiAgLy8vICB0aGlzLmNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KFwid3NzOi8vZWNoby53ZWJzb2NrZXQub3JnXCIpXHJcbiAvLyB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3Age1xyXG4gIGhlaWdodDogMTVlbTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLlF1aXpDb3VudGVyIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB0ZXh0LWFsaWduOiB0b3A7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5vcHRpb24taG92ZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjQ2ZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG51bC5saXN0LWdyb3VwIGxpLmFjdGl2ZSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NjQ2ZmY7XHJcbn1cclxuXHJcbnVsLmxpc3QtZ3JvdXAgbGkuY29ycmVjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbnVsLmxpc3QtZ3JvdXAgbGkuaW5jb3JyZWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiN0aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBtYXJnaW4tbGVmdDogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI3BsYXllci1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtZmxvdzogcm93IG5vLXdyYXA7XHJcblxyXG4gIFxyXG59XHJcblxyXG4ucGxheWVyLWluZm8tY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucGxheWVyLXBob3RvIHtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5wbGF5ZXItcGhvdG8tMCB7XHJcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbn1cclxuXHJcbi5wbGF5ZXItcGhvdG8tMSB7XHJcbiAgbWFyZ2luLWxlZnQ6YXV0bztcclxufVxyXG5cclxuLnBsYXllci1uYW1lIHtcclxuICBoZWlnaHQ6IDZweDtcclxufVxyXG4ucGxheWVyLW5hbWUtMCB7XHJcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbn1cclxuLnBsYXllci1uYW1lLTEge1xyXG4gIG1hcmdpbi1sZWZ0OmF1dG87XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBidXR0b24uZnVsbC13aWR0aCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7ICBcclxuICAgIH1cclxufVxyXG48L3N0eWxlPlxyXG5cclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQTZJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFOQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTkE7QUFmQTtBQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUE3REE7QUE4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQXZCQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBdkpBO0FBeUpBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBblFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./views/quizes/QuizDetails.vue?vue&type=script&lang=js\n");

/***/ })

})