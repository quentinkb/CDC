<template>
  <div>
    <h1>{{ getCurrentPlayerIndex }}</h1>
    <button @click="updateDice(1)">1</button>
    <button @click="updateDice(2)">2</button>
    <button @click="updateDice(3)">3</button>
    <button @click="updateDice(4)">4</button>
    <button @click="updateDice(5)">5</button>
    <button @click="updateDice(6)">6</button>
    <h1>{{ getDicesValues[0] }}</h1>
    <h1>{{ getDicesValues[1] }}</h1>
    <h1>{{ getDicesValues[2] }}</h1>
    <h1>{{ getIndexOfCurrentDice }}</h1>
    <button @click="compute()">Prochain joueur</button>
    <choose-player @player-choosen="playerChoose($event)" v-show="showChoosePlayer"/>
    <bevue/>
  </div>
</template>

<script>
import ChoosePlayer from '@/components/ChoosePlayer'
import Bevue from '@/components/Bevue'
import Computer from './../business/computer'

export default {
  name: 'Game',
  data() {
    return {
      dicesValues: [0, 0, 0],
      indexOfCurrentDice: 0,
      showPlayer: false,
      currentScore: 0,
    }
  },
  computed: {
    getCurrentPlayerIndex() {
      return this.$store.state.currentPlayerIndex
    },
    getDicesValues() {
      return this.dicesValues
    },
    getIndexOfCurrentDice() {
      return this.indexOfCurrentDice
    },
    showChoosePlayer() {
      return this.showPlayer
    },
  },
  methods: {
    updateDice(value) {
      this.dicesValues[this.indexOfCurrentDice] = value
      this.indexOfCurrentDice = (this.indexOfCurrentDice + 1) % 3
    },
    compute() {
      const { score, attribution } = new Computer(
        this.dicesValues[0],
        this.dicesValues[1],
        this.dicesValues[2],
      ).compute()
      this.currentScore = score
      if (attribution === 'default') {
        this.updateScoreOfCurrentPlayer(score)
        this.incrementCurrentPlayerIndex()
      } else this.showPlayer = true
    },
    updateScoreOfCurrentPlayer(score) {
      this.$store.commit('updateScoreOfCurrentPlayer', score)
    },
    incrementCurrentPlayerIndex() {
      this.$store.commit('incrementCurrentPlayerIndex')
    },
    playerChoose(playerId) {
      this.updateScoreOfSpecificUser(playerId)
    },
    updateScoreOfSpecificUser(playerId) {
      this.$store.commit('updateScoreOfSpecificUser', {
        playerId,
        score: this.currentScore,
      })
      this.incrementCurrentPlayerIndex()
      this.showPlayer = false
    },
  },
  components: { ChoosePlayer, Bevue },
}
</script>
