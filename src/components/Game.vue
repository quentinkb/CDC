<template>
  <div>
    <h1>{{ getCurrentPlayerIndex }}</h1>Dé 1
    <input type="number">
    Dé 2
    <input type="number">
    Dé 3
    <input type="number">
    <button @click="compute()">Prochain joueur</button>
  </div>
</template>

<script>
import Computer from './../business/computer'

export default {
  name: 'Game',
  computed: {
    getCurrentPlayerIndex() {
      return this.$store.state.currentPlayerIndex
    },
  },
  methods: {
    compute() {
      const computer = new Computer()
      this.incrementCurrentPlayerIndex()
    },
    incrementCurrentPlayerIndex() {
      this.$store.commit('incrementCurrentPlayerIndex')
    },
  },
}
</script>
