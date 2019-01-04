import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    numberOfPlayers: 1,
  },
  mutations: {
    incrementNumberOfPlayers(state) {
      state.numberOfPlayers += 1
    },
    decrementNumberOfPlayers(state) {
      state.numberOfPlayers -= 1
    },
  },
})

export default store
