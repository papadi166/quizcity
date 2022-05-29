import { createStore } from 'vuex'
import VuexPersistence from "vuex-persist"


const vuexLocalStorage = new VuexPersistence({
  supportCircular: true,
  key: 'vuex',
  storage: window.sessionStorage,
  reducer: (state) => ({
    user: state.user,
    count: state.count,
    soundMuted: state.soundMuted,
    quizes: state.quizes,
  })
})


export default createStore({
  state () {
    return {
      quizes: [],
      count: 0,
      searchbar: false,
      soundMuted: true,
      is_cart_open: false,
      categories: [],
      modalConfirm: null,
      searchResults: [],
      searchIn: [],
      authenticated: false,
      login_path: "login",
      username: "",
      
      searching: false,
      buying: false,

      day: true,
      user: {
        "id": null,
        "username": "guest",
        "token": "",
        "avatar": "/static/assets/gamer-esports-player-competition-activity-256.webp",
        "friends": [
          
        ],
      },
      //quiz game mind
      questions: [],
    }
  },
  
  // MUTATIONS
  mutations: {
    openCart (state) {
      state.is_cart_open = !state.is_cart_open
    },
    increment (state) {
      state.count += 110
    },
    setListQuizes (state, data) {
      state.quizes = data
    },
    soundmutation (state) {
      state.soundMuted = !state.soundMuted
      console.log(state.soundMuted)
    },
    setUser (state, data) {
      state.user.username = data.username;
      state.user.id = data.id;
      state.user.friends = data.friends;
      state.user.avatar = data.avatar;
    },
    logout (state) {
      state.user.username = "guest",
      state.user.id = null,
      state.user.friends =  [],
      state.user.avatar = "/static/assets/gamer-esports-player-competition-activity-256.webp";
      
      
    }
  },

  // GETTERS
  getters: {
    getCartStatus (state) {
      return state.is_cart_open
    },  
    getQuizes (state) {
      return state.quizes
    },
    getUserStatus (state) {
      state.user.username === 'guest' ? state.login_path = "login" : state.login_path = "logout"
      return state.login_path
    },
    getUserName (state) {
      return state.user.username
    },
    getUserAvatar (state) {
      return state.user.avatar
    },
    isSoundMuted (state) {
      return state.soundMuted
    }
  },
  plugins: [vuexLocalStorage.plugin],
})