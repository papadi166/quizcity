import { createRouter, createWebHistory } from 'vue-router'

import store from '../store/store.js'

//function lazyLoad(view){
  //return() => import(`../views/${view}.vue`)
//}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    beforeEnter: () => {
      store.state.modalConfirm = false
    },
    meta: { navbarOn: true },
  },
  {
    path: '/welcome',
    name: 'WelcomePage',
    component: () => import(/* webpackChunkName: "WelcomePage" */ '../views/WelcomePage.vue'),
    meta: { navbarOn: true  },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/accounts/Profile.vue'),
    meta: { navbarOn: true },
    beforeEnter: (to, from, next) => {
      if (store.getters.getUserName!== "guest") { //this.$router.push('/accounts/login')
        next()
      }  else {
        next({ redirect: window.location.href = process.env.VUE_APP_ROOT_API + "accounts/login/" })
      } 

        
    },
     

    children: [
      {
        path: '/profile/friends',
        name: 'Friends',
        component: () => import('../views/accounts/Friends.vue'),
        props: true,

        
        
      },
      
    ]
  },
  {
    path: '/profile/settings/',
    name: 'Settings',
    component: () => import('../views/accounts/Settings.vue'),
    meta: { navbarOn: true },

    
    children: [

      
      {
        path: '/profile/settings/remove_ads',
        name: 'remove_ads',
        component: () => import('../views/accounts/Friends.vue'),
        props: true,
        beforeEnter: (to, from, next) => {

          if (store.getters.getUserName!== "guest") { //this.$router.push('/accounts/login')
            next()
          }  else {
            next({ redirect: window.location.href = process.env.VUE_APP_ROOT_API + "accounts/login/" })
          } 
        
      },
        
      },
      {
        path: '/profile/settings/edit_profile',
        name: 'edit_profile',
        component: () => import('../views/accounts/Settings.vue'),
        beforeEnter: (to, from, next) => {

          if (store.getters.getUserName!== "guest") { //this.$router.push('/accounts/login')
            next()
          }  else {
            next({ redirect: window.location.href = process.env.VUE_APP_ROOT_API + "accounts/login/" })
          } 
        
      },
        
      },
      {
        path: '/profile/settings/edit_notifications',
        name: 'edit_notifications',
        component: () => import('../views/accounts/Settings.vue'),
        beforeEnter: (to, from, next) => {

          if (store.getters.getUserName!== "guest") { //this.$router.push('/accounts/login')
            next()
          }  else {
            next({ redirect: window.location.href = process.env.VUE_APP_ROOT_API + "accounts/login/" })
          } 
        
      },
      },
      {
        path: '/profile/settings/regulations',
        name: 'regulations',
        component: () => import('../views/accounts/Settings.vue'),
      },
      {
        path: '/profile/settings/edit_privacy',
        name: 'edit_privacy',
        component: () => import('../views/accounts/Settings.vue'),
        beforeEnter: (to, from, next) => {

          if (store.getters.getUserName!== "guest") { //this.$router.push('/accounts/login')
            next()
          }  else {
            next({ redirect: window.location.href = process.env.VUE_APP_ROOT_API + "accounts/login/" })
          } 
        
      },
      },
    ]
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: () => import('../views/Notifications.vue'),
    meta: { navbarOn: true },
    beforeEnter: (to, from, next) => {

      if (store.getters.getUserName!== "guest") { //this.$router.push('/accounts/login')
        next()
      }  else {
        next({ redirect: window.location.href = process.env.VUE_APP_ROOT_API + "accounts/login/" })
      } 
    
  },
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/shop/Shop.vue'),
    meta: { navbarOn: true },
  },
  {
    path: '/shop/cart',
    name: 'Cart',
    component: () => import('../views/shop/Cart.vue'),
    meta: { navbarOn: true },
  },
  {
    path: '/features',
    name: 'Features',
    component: () => import('../views/Features.vue'),
    meta: { navbarOn: true },
  },
  {
    path: '/addQuiz',
    name: 'AddQuiz',
    component: () => import('../views/quizes/AddQuiz.vue'),
    meta: { navbarOn: true },
},

  {
    path: '/quizes/:slug/ranks',
    name: 'QuizRanks',
    component: () => import('../views/accounts/Rankings.vue'),
    meta: { navbarOn: true },
  },
  {
    path: '/quizes/:slug/',
    name: 'QuizDetails',
    component: () => import('../views/quizes/QuizDetails.vue'),
    meta: { navbarOn: true },
    children: [
      {
        path: '/quizes/:slug/:room_code',
        name: 'QuizDetails',
        component: () => import('../views/quizes/QuizDetails.vue'),
        meta: { navbarOn: true },
        beforeEnter: (to, from, next) => {
          if (store.state.user.username !== "guest") { //this.$router.push('/accounts/login')
            let room_code = to.params.room_code
            fetch(process.env.VUE_APP_ROOT_API + `api/mygames/` + room_code + `/`)
              .then((res) => res.json())
              .then((data) => {
                if(room_code === data.room_code && data.connected_users <2) next()
                else next({path: '/quizes/' + to.params.slug + '/'})
                // create notification wich say (room is full or room doesnt exist)
              })
          }  else {
            store.commit('logout')
            window.sessionStorage.removeItem('vuex');
            next({ redirect: window.location.href = process.env.VUE_APP_ROOT_API + "accounts/login/" })
          } 

            
        }
      }
    ],


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
    component: () => import('../views/accounts/login.vue'),
    meta: { navbarOn: true },
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated === false) next("/login/")
      else next()
    }
  },
  // catchOuut
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: { navbarOn: true },
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
