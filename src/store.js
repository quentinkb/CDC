import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    numberOfPlayers: 1,
    players: [],
  },
  mutations: {
    incrementNumberOfPlayers(state) {
      state.numberOfPlayers += 1
    },
    decrementNumberOfPlayers(state) {
      state.numberOfPlayers -= 1
    },
    initPlayers(state, payload) {
      state.players = payload
    },
  },
})

export default store
