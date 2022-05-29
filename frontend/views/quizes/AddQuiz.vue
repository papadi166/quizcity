<template>
    <div>
        <div v-if="mode !== null">
            <form action="/api/details/" method="post">
        Quiz Name: <input name="Title" id="Title" value="" placeholder="type title"> <br>
        Description: <input name="Description" id="Description" value="" placeholder="type description"> <br>
        Image: <input type="file" name="Image" id="Image" value=""> <br>
        Category <select name="Category" id="Category" value="">
            <option :value="category.category" v-for="category in categories" :key="category.id">{{category.category}}</option>
        </select> <br> <br>
        
        <div id="questions">

        </div>
        </form> <br>

        <div class="questionDiv" id="questionDiv">
        
            Question: <input id="questionValue"> <br><br>
            <div id="answer 1" class="answer">Answer 1 <input class="AnswerInput" id="AnswerId 1">
            <div class="form-check" style="float:right">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
                Correct
            </label>
            </div></div>
            <div id="answer 2" class="answer">Answer 2 <input class="AnswerInput" id="AnswerId 2">
             <div class="form-check" style="float:right">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
                Correct
            </label>
            </div>
             </div>
            <button type="button" @click="addAnswer()" class="btn btn-primary" id="addAnswerButton">+</button>
            <button disabled="true" type="button" @click="removeAnswer()" class="btn btn-primary" id="removeAnswerButton">-</button>
         </div>
        
        <button @click="addQuestion()" class="btn btn-primary">Add Question</button>
        </div>

        <AddQuizPre v-if="mode === null" @message="route($event)"></AddQuizPre>
    </div>
    
</template>

<script>
import AddQuizPre from './AddQuizPre.vue'

export default {
    name: 'AddQuiz',
    components: {
        AddQuizPre,
    },
    data() {
        return {
            categories: [],
            questionDivs: 1,
            buttonsCount: 2,
            mode: null,
        }
    
        
    },
    methods: {
        route(to) {
            if (to === 'new') this.mode = 'new'
            else this.mode = 'existing'
        },
        addAnswer() {
            if (this.buttonsCount < 3) {
                this.buttonsCount++
                let answerDiv = document.getElementById("answer 1")
                let questionDiv = document.getElementById('questionDiv')
                let removeAnswerButton = document.getElementById("removeAnswerButton")
                let addAnswerButton = document.getElementById("addAnswerButton")
                removeAnswerButton.disabled = false
                
                let answerInput = answerDiv.cloneNode(true)
                answerInput.id = "answer " + this.buttonsCount
                answerInput.innerHTML = answerInput.innerHTML.replace(/1/g, "3")
                let input = document.createElement("input")
                input.id="AnswerId "+this.buttonsCount, input.classList.add("AnswerInput")
                questionDiv.insertBefore(answerInput, addAnswerButton)
                console.log(this.buttonsCount)


            } else if (this.buttonsCount === 3) {
                this.buttonsCount++
                let answerDiv = document.getElementById("answer 1")
                let questionDiv = document.getElementById('questionDiv')
                let addAnswerButton = document.getElementById("addAnswerButton")
                let answerInput = answerDiv.cloneNode(true)
                answerInput.id = "answer " + this.buttonsCount
                answerInput.innerHTML = answerInput.innerHTML.replace(/1/g, "4")
                let input = document.createElement("input")
                input.id="AnswerId "+this.buttonsCount, input.classList.add("AnswerInput")
                questionDiv.insertBefore(answerInput, addAnswerButton)

                
                addAnswerButton.disabled=true
                console.log(this.buttonsCount)

                
            }
        },
        removeAnswer() {
            if (this.buttonsCount < 4) {
                let lastInput = document.getElementById("answer 3")
                lastInput.remove()
                this.buttonsCount--
                let removeAnswerButton = document.getElementById("removeAnswerButton")
                removeAnswerButton.disabled=true

            } else if (this.buttonsCount === 4) {
                let lastInput = document.getElementById("answer 4")
                let addAnswerButton = document.getElementById("addAnswerButton")
                addAnswerButton.disabled=false
                lastInput.remove()
                this.buttonsCount--

            }
        },

        addQuestion() {
            let answerInputs = document.getElementsByClassName("AnswerInput")
            let questionInput = document.createElement("input")
            

            let questionsdiv = document.getElementById("questions")
            let questionDiv = document.getElementById("questionValue")

            let labelQuestion = document.createElement("LABEL")
            labelQuestion.textContent="Question: "
            let labelAnswerOne = document.createElement("LABEL")
            labelAnswerOne.textContent="Answer 1: "
            let labelAnswerTwo = document.createElement("LABEL")
            labelAnswerTwo.textContent="Answer 2: "
            let labelAnswerThree = document.createElement("LABEL")
            labelAnswerThree.textContent="Answer 3: "
            let labelAnswerFour = document.createElement("LABEL")
            labelAnswerFour.textContent="Answer 4: "

            let answerOne = document.getElementById("AnswerId 1")
            let answerTwo = document.getElementById("AnswerId 2")
            

            questionInput.id = "question", questionInput.name = "question", questionInput.value = questionDiv.value 
            let answerOneInput = document.createElement("input")
            answerOneInput.id = "answer_one", answerOneInput.name = "answer",  answerOneInput.value = answerOne.value 
            let answerTwoInput = document.createElement("input")
            answerTwoInput.id = "answer_two", answerTwoInput.name = "answer",  answerTwoInput.value = answerTwo.value 

            questionsdiv.appendChild(labelQuestion)
            questionsdiv.appendChild(questionInput)

            questionsdiv.appendChild(labelAnswerOne)
            questionsdiv.appendChild(answerOneInput)

            questionsdiv.appendChild(labelAnswerTwo)
            questionsdiv.appendChild(answerTwoInput)
            console.log("answerInputs len: " + answerInputs.length)

            if (answerInputs.length > 2) {
                let answerThree = document.getElementById("AnswerId 3")
                let answerThreeInput = document.createElement("input")
                answerThreeInput.id = "answer_three", answerThreeInput.name = "answer",  answerThreeInput.value = answerThree.value
                questionsdiv.appendChild(labelAnswerThree)
                questionsdiv.appendChild(answerThreeInput)

            } if (answerInputs.length > 3) {
                let answerFour = document.getElementById("AnswerId 4")
                let answerFourInput = document.createElement("input")
                answerFourInput.id = "answer_four", answerFourInput.name = "answer",  answerFourInput.value = answerFour.value
                questionsdiv.appendChild(labelAnswerFour)
                questionsdiv.appendChild(answerFourInput)

            }


            questionDiv.value = ""
            
            for (var i = 0, len = answerInputs.length; i < len; i++) {
                answerInputs[i].value = ""
        
            }
            
        },


        addAnswerx(event) {
            let answerDiv = document.getElementById("answer 1")
            let answerInput = answerDiv.cloneNode(true)
            answerInput.id = "answer " + this.answerButtons
            let questionDiv = document.getElementById('questionDiv ' + event.target.id)

            questionDiv.insertBefore(answerInput, questionDiv.lastChild)
            
        },
        addQuestionx() {
            this.questionDivs++
            
            let questionDiv = document.getElementById("questionDiv 1")
            let nextQuestion = questionDiv.cloneNode(true)
            let Addbutton = document.getElementById("1")
            let newAddbutton = Addbutton.cloneNode(true)
            newAddbutton.id=this.questionDivs
            newAddbutton.addEventListener("click", this.addAnswer, false)
            nextQuestion.replaceChild(newAddbutton, nextQuestion.lastChild)
            nextQuestion.id = "questionDiv " + String(this.questionDivs)

            let form = document.getElementById('form')
            form.appendChild(nextQuestion)
        }
    },
    mounted() {
        fetch(process.env.VUE_APP_ROOT_API + "api/categories/")
        .then((res) => res.json())
        .then((data) => (this.categories = data))
        .catch((err) => console.log(err.message))
  },
}
</script>

<style>

.questionDiv {
    margin: auto;
    width: 90%;
    border:2px ;
    border-color: black;
    border-style: solid;

}

#questions {
    align-items: center;
    margin: auto;
    width: 90%;
    border:2px ;
    border-color: black;
    border-style: solid;

}

</style>