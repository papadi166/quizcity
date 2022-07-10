<template>

  <div class="d-flex justify-content-center" >


    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 w-100" id="quizRow">
      
      <div id="quiz-container" class="col"  v-for="quiz in searchedQuizes" :key="quiz.id">

          <div class="card" >
            <router-link :to="{ name: 'QuizDetails', params: { slug: quiz.slug } }">
            
            <img :src="`${quiz.image}`" class="image card-img-top" alt="" />

            <div class="middle" >
              <div class="text">Play</div>
            </div>
            <h5 class="card-title">{{ quiz.title }}</h5>
            </router-link>
            <div class="card-body">
              <p class="card-description">{{ quiz.description }}</p>
              
              <div classs="card-footer">
                <p class="block"><font-awesome-icon :icon="[`fas`, `clock`]" size="lg" /><br>{{ quiz.time }}</p>
                <p class="block"><font-awesome-icon :icon="[`fas`, `question`]" size="lg" /><br>{{ quiz.number_of_questions }}</p>
                <p class="block"><font-awesome-icon :icon="[`fas`, `percent`]" size="lg" /><br>{{ quiz.required_score_to_pass }}</p>
                <p class="block"><font-awesome-icon :icon="[`fas`, `book`]" size="lg" /><br>{{ quiz.category }}</p>
              </div>
         
            </div>
          </div>
          <br>



        
      </div>
    </div>
  </div>
</template>

<script>

import store from '../../store/store.js'


export default {
  name: "QuizList",
  data() {
    return {
      quizes: this.$store.getters.getQuizes,
      searchOption: "",
      searchedQuizes: this.$store.getters.getQuizes,
    };
  },
  
  methods: {
    

    generateQuizes() {
      this.searchedQuizes = []

      this.quizes.forEach(quiz => {
        store.state.searchResults.forEach(result => {

          if (store.state.searchIn.includes("categories") && String(quiz.category).toLowerCase() === result && !this.searchedQuizes.includes(quiz)) {
              this.searchedQuizes.push(quiz)
          }
          if (store.state.searchIn.includes("names") && String(quiz.title).toLowerCase() === result.toString() && !this.searchedQuizes.includes(quiz)) {
              this.searchedQuizes.push(quiz) 
          }
        })
        if (store.state.searchIn.length === 0 && !this.searchedQuizes.includes(quiz)) {
            this.searchedQuizes.push(quiz) 
          }
      })
    },
  },
 
  mounted() {
    store.state.modalConfirm = true
    fetch(process.env.VUE_APP_ROOT_API + "api/quizes/")
      .then((res) => res.json())
      .then((data) => (this.quizes = data))
      .then((data) => (this.searchedQuizes = data))
      .then((data) => {this.$store.commit("setListQuizes", data )})
      .catch((err) => console.log(err.message));
    
  },

  watch: {
    '$store.state.searchResults': function() {
      this.generateQuizes()
    }
  }
}
</script>

<style>
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
  top: 30%;
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


.card-footer {
  width: 100%;
  border: 1px solid red;
  text-align: justify;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px 0;

}
.block {
  display: inline-block;
  margin-inline: 4px;
  padding-inline: 3%;
  
}

a:link {
  text-decoration: none;
}

.card-title {
  margin-top: 10px;
}


</style>
