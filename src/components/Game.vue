<template>
  <div>
    <h1>{{ getCurrentPlayerIndex }}</h1>Dé 1
    <input type="number" v-on:change="diceOne=$event.target.value">
    Dé 2
    <input type="number" v-on:change="diceTwo=$event.target.value">
    Dé 3
    <input type="number" v-on:change="diceThree=$event.target.value">
    <button @click="compute()">Prochain joueur</button>
  </div>
</template>

<script>
import Computer from './../business/computer'

export default {
  name: 'Game',
  data() {
    return {
      diceOne: 0,
      diceTwo: 0,
      diceThree: 0,
    }
  },
  computed: {
    getCurrentPlayerIndex() {
      return this.$store.state.currentPlayerIndex
    },
  },
  methods: {
    compute() {
      const computer = new Computer(this.diceOne, this.diceTwo, this.diceThree)
      computer.compute()
      this.incrementCurrentPlayerIndex()
    },
    incrementCurrentPlayerIndex() {
      this.$store.commit('incrementCurrentPlayerIndex')
    },
  },
}
</script>
