<template>
  <div>
    <h1> {{this.quiz["title"]}}</h1>

    <div id="Quizes">
      <p v-for="question in quiz.question_set" :key="question.id"  class="QuizCounter" >
        <span v-for="answer in question.answer_set.slice(0,1)" :key="answer.id" class="Quiz2"></span></p>
      <div class="card" style=" margin:auto">
        <img :src="`${quiz.image}`" class="card-img-top" alt="" />
        <div class="card-body">
          <h5 id="counter" class="card-title"> {{actualQuiz}} / {{quiz["number_of_questions"]}}</h5>
          <p v-if="this.question" class="card-text">
            Question: {{this.question}}
          </p>
        </div>

        
        <ul v-if="this.answers[0]" class="list-group list-group-horizontal">
          <li v-if="this.answers[0]" @click="handleSelectItem(this.answers[0], $event)" id="1" class="option list-group-item item w-50">{{ this.answers[0] }}</li>
          <li v-if="this.answers[1]" @click="handleSelectItem(this.answers[1], $event)" id="2" class="option list-group-item item w-50">{{ this.answers[1] }}</li>
        </ul>
        <ul v-if="this.answers[2]" class="list-group list-group-horizontal">
          <li v-if="this.answers[2]" @click="handleSelectItem(this.answers[2], $event)" id="3" class="option list-group-item w-50">{{ this.answers[2] }}</li>
          <li v-if="this.answers[3]" @click="handleSelectItem(this.answers[3], $event)" id="4" class="option list-group-item w-50">{{ this.answers[3] }}</li>
        </ul>
    

        <div class="card-body">
          <p v-if="this.selectedAnswer" >Your Answer: {{selectedAnswer}}</p>
          <p v-if="this.correctAnswer" >Correct Answer: {{correctAnswer}}</p>
          
          <button v-if="!this.question && !this.quizFinished"  @click="getActualQuiz(this.actualQuiz)" href="#" class="btn btn-primary">Start</button>
          <button v-if="!this.quizFinished && this.question "  @click="getActualQuiz(this.actualQuiz)"   href="#" class="btn btn-primary">Dalej</button>
          <h1 v-if="quizFinished" >Quiz has been finished </h1>
          <h2>Your points: {{points}} / {{quiz["required_score_to_pass"]}} </h2>
        </div>
      </div>
      <p>author: {{ quiz['author'] }}</p>
    </div>
  </div>
  <span></span>
</template>

<script>
export default {
  name: "QuizDetails",
  components: {},
  data() {
    return {
      quiz: [],
      slug: this.$route.params.slug,
      selectedAnswer: null,
      correctAnswer: 0,
      question: "",
      answers : [],
      actualQuiz: 0,
      quizFinished: false,
      quizStarted: false,
      points: 0,

    };
  },
  methods: {
    resetOptions() {
      //reset answers and selectedAnswer
      this.answers = []
      this.selectedAnswer = ""

      //get answer divs
      let options = document.getElementsByClassName("option");

      //For each option div remove all operational classes
      Array.from(options).forEach(option => {
        option.classList.remove("active")
        option.classList.remove("correct")
        option.classList.remove("incorrect")
        
        //Reset option divs textContent
        option.textContent = ""
        this.correctAnswer = ""
        
      })
    },
    getActualQuiz(actualQuizNumber) {
      //reset option divs
      if (this.selectedAnswer || !this.quizStarted) {
        this.resetOptions()
      
      //if there is more questions left
      if (this.quiz['question_set'][actualQuizNumber] !== undefined) {
        
      //question =
      this.question = this.quiz['question_set'][actualQuizNumber].text
   
      // for each answer in actual Question set answers
      this.quiz['question_set'][actualQuizNumber]['answer_set'].forEach(answer => {

        this.answers.push(answer['text'])
        //if answer is correct add it to correctAnswer Variable
        if (answer["is_correct"] === true) this.correctAnswer = answer["text"]
     
      }) 
      // if there is no more question:
      } else {
        this.question = ""
        this.quizFinished = true
      }
      }
      
      //increment Actual Question +1 if quiz hasnt been finished
      if(!this.quizFinished) this.actualQuiz++
    },

    handleSelectItem(item, event) {
      if (this.selectedAnswer === "") this.selectedAnswer = item
      this.quizStarted = true

      let options = document.getElementsByClassName("option");

      Array.from(options).forEach(option => {
        console.log("optiona: " + option.textContent)
        console.log("this: " + this.correctAnswer)
        if (option.textContent !== this.correctAnswer) {
          option.classList.add("incorrect")

        } 
        else option.classList.add("correct")
       });

       if (this.selectedAnswer === this.correctAnswer) this.points += 10


       event.target.classList.add("active");
       

      
       


    },
  },
  mounted() {
    fetch(process.env.VUE_APP_ROOT_API + `api/details/` + this.slug + `/`)
      .then((res) => res.json())
      .then((data) => (this.quiz = data))
      .then((data) => (this.correctAnswer = data.answer))
      .catch((err) => console.log(err.message));
    }
  }



</script>

<style>
#Quizes {

  width: 40%;
  margin: 0 auto;
  align-self: center;
}
.QuizCounter {
  text-align: right;
  text-align: top;
  margin-right: 5px;
}

.option:hover {
  background-color: #4646ff;
  cursor: pointer;
}


ul.list-group li.active {
  color:black;
  background-color: #4646ff;
}


ul.list-group li.correct {
  background-color: green;
}

ul.list-group li.incorrect {
  background-color: red;
}
</style>
