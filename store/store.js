import { createStore } from 'vuex'


export default createStore({
  state () {
    return {
      count: 0,
      categories: [],
      modalConfirm: null,
      searchResults: [],
      searchIn: [],
      authenticated: false,
      username: ""
    }
  },
  
  mutations: {
    increment (state) {
      state.count += 110
    },
  }
})