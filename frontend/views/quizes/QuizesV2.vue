<template>

  <div class="d-flex justify-content-center">

    <QuizModal ></QuizModal>




    

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 w-100">
      <div class="col" v-for="quiz in quizes" :key="quiz.id" @mouseenter="fillModal">
        <router-link 
          @click="showModal"
          class="modal-button"
          :data-slug="`${quiz.slug}`"
          :data-quiz="`${quiz.title}`"
          :data-questions="`${quiz.number_of_questions}`"
          :data-difficulty="`${quiz.difficulty}`"
          :data-time="`${quiz.time}`"
          :data-pass="`${quiz.required_score_to_pass}`"
          :to="{ name: 'QuizDetails', params: { slug: quiz.slug } }">
          <div class="card">
            <img :src="`${quiz.image}`" class="image card-img-top" alt="" />

            <div class="middle">
              <div class="text">Play</div>
            </div>

            <div class="card-body">
              
              <h5 class="card-title">{{ quiz.title }}</h5>

              <p class="card-text">{{ quiz.description }}</p>
            </div>
          </div>
        </router-link>
        <br>
      </div>
      
    </div>
    
    
  </div>

</template>

<script>
import QuizModal from '../../src/components/QuizModal.vue'
import store from '../../store/store.js'
import { Modal } from 'bootstrap'
export default {
  
  name: "QuizList",
  components: {
    QuizModal,
  } ,
  data() {
    return {
      clickCounter: 0,
      quizes: [],
      text: `
      <router-link to="/foo">
        <button class="button is-link is-outlined">
          Go to Foo (compiled router-link)
        </button>
      </router-link>
      `
    };
  },
  mounted() {
    fetch(process.env.VUE_APP_ROOT_API + "api/quizes/")
      .then((res) => res.json())
      .then((data) => (this.quizes = data))
      .catch((err) => console.log(err.message));
    
  },
  methods: {
    checkModal(modalConfirm, pk) {
      if(modalConfirm === "no") {
        store.state.modalConfirm = false
      } if(modalConfirm === "yes") {
        store.state.modalConfirm = true
        this.$router.push('/quizes/'+pk+'/');
      }
      console.log(store.state.modalConfirm)
    },
    showModal() {
      const myModal = new Modal(document.getElementById("quizstartmodal"))
      myModal.show()
    },
    fillModal() {
      const modalBtns = [...document.getElementsByClassName("modal-button")];
      const modalBody = document.getElementById("modal-body-confirm");
      const modalFooter = document.getElementById("modal-footer-confirm");
      

      const noBtn = document.createElement("button");
        noBtn.setAttribute("type", "button"),
          (noBtn.id = "cancel-button"),
          noBtn.setAttribute("data-bs-dismiss", "modal"),
          (noBtn.classList = "btn btn-danger"),
          (noBtn.textContent = "No");
          (noBtn.addEventListener("click", () => this.checkModal("no")))
      const YesBtn = document.createElement("button");
        YesBtn.setAttribute("type", "button"),
          (YesBtn.id = "start-button"),
          (YesBtn.classList = "btn btn-success"),
          (YesBtn.textContent = "Yes");

      let slug;
      let name;
      let numQuestions;
      let difficulty;
      let scoreToPass;
      let time;

      modalBtns.forEach(modalBtn => modalBtn.addEventListener('click', () => {
        slug = modalBtn.getAttribute("data-slug");
        name = modalBtn.getAttribute("data-quiz");
        numQuestions = modalBtn.getAttribute("data-questions");
        difficulty = modalBtn.getAttribute("data-difficulty");
        scoreToPass = modalBtn.getAttribute("data-pass");
        time = modalBtn.getAttribute("data-time");

        modalBody.innerHTML = `
          <div class="h5 mb-3">Are you sure you want to begin? " <b>${name}</b></div>
          <div class="text-muted">
            <ul>
              <li>difficulty: <b>${difficulty}</b></li>
              <li>Number Questions: <b>${numQuestions}</b></li>
              <li>Score to pass: <b>${scoreToPass}</b></li>
              <li>time: <b>${time}</b></li>
            </ul>
          </div>
        `;
      }))
  
     if(this.clickCounter > 0) {
       const NoBtns= document.getElementById("cancel-button")
       const YesBtns = document.getElementById("start-li")

        modalFooter.removeChild(NoBtns)
        modalFooter.removeChild(YesBtns)

     }
     if (this.clickCounter >0 && modalFooter.hasChildNodes()) {
        const NoBtns= document.getElementById("cancel-button")
        const YesBtns = document.getElementById("start-li")

        modalFooter.removeChild(NoBtns)
        modalFooter.removeChild(YesBtns)
     }




      YesBtn.setAttribute("v-on:click", "this.$router.push('/about')")
      const liElement = document.createElement("li");
      liElement.setAttribute("data-bs-dismiss", "modal");
      liElement.id="start-li";
      liElement.appendChild(YesBtn)
      liElement.addEventListener("click", () => this.checkModal("yes", slug))

      modalFooter.appendChild(noBtn)
      modalFooter.appendChild(liElement);
      this.clickCounter++

    },
  },
}

</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
}

.image {
  opacity: 1;
  display: block;
  object-fit: cover;
  width: 100%;
  height: 200px;
  transition: 0.5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.middle:hover {
  cursor: -moz-grab;
}

.card:hover .image {
  opacity: 0.3;
  cursor: -moz-grab;
}

.card:hover .middle {
  opacity: 1;
}

.text {
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}


.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
