import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    numberOfPlayers: 1,
    players: [],
    currentPlayerIndex: 0,
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
    incrementCurrentPlayerIndex(state) {
      state.currentPlayerIndex =
        (state.currentPlayerIndex + 1) % state.numberOfPlayers
    },
    updateScoreOfCurrentPlayer(state, payload) {
      state.players[state.currentPlayerIndex].score += payload
    },
  },
})

export default store
