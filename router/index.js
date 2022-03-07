import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddQuiz from '../views/quizes/AddQuiz.vue'
import NotFound from '../views/NotFound.vue'
import QuizDetails from '../views/quizes/QuizDetails.vue'
import store from '../store/store.js'
import Login from '../views/accounts/login.vue'
import Profile from '../views/accounts/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: () => {
      store.state.modalConfirm = false
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/addQuiz',
    name: 'AddQuiz',
    component: AddQuiz
  },
  {
    path: '/quizes/:slug/',
    name: 'QuizDetails',
    component: QuizDetails,
    beforeEnter: (to, from, next) => {
      
      if(store.state.modalConfirm == false) {
        next('/')
        } else {
          next()
          store.state.modalConfirm = true
        }
      }
      
  
  },
  {
    path: '/account/',
    name: 'account',
    component: Login,
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated === false) next("/login/")
      else next()
    }
  },
  {
      path: '/login/',
      name: 'login',
      component: Login,
    },
  // catchOuut
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory("/quizgame"),
  linkExactActiveClass: 'is-active',
  routes
})

router.beforeEach((to, from) => {
  console.log("to: "+ to.fullPath + " from: " + from.fullPath + " lastHistory: " + router.back)


})

export default router
