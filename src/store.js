import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 10,
  },
  mutations: {
    increment(state) {
      state.count += 1
    },
    decrement(state) {
      state.count -= 1
    },
  },
})

export default store
