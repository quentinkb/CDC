<template>
  <div class="accueil">
    <h1>{{ msg }}</h1>
    <number-of-players
      v-on:commit-number-of-players="initPlayers()"
      v-show="computedDisplayNumberOfPlayers"
    ></number-of-players>
    <game v-show="computedDisplayGame"></game>
  </div>
</template>

<script>
import NumberOfPlayers from '@/components/NumberOfPlayers'
import Game from '@/components/Game'

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Accueil',
      displayNumberOfPlayers: true,
      displayGame: false,
    }
  },
  computed: {
    computedDisplayNumberOfPlayers() {
      return this.displayNumberOfPlayers
    },
    computedDisplayGame() {
      return this.displayGame
    },
  },
  methods: {
    hideNumberOfPlayersView() {
      this.displayNumberOfPlayers = false
    },
    showGame() {
      this.displayGame = true
    },
    initPlayers() {
      const users = []
      for (
        let loopCounter = 0;
        loopCounter < this.$store.state.numberOfPlayers;
        loopCounter += 1
      ) {
        users.push({
          id: loopCounter,
          score: 0,
        })
      }
      this.commitNewPlayersToStore(users)
      this.initGame()
    },
    initGame() {
      this.hideNumberOfPlayersView()
      this.showGame()
    },
    commitNewPlayersToStore(users) {
      this.$store.commit('initPlayers', users)
    },
  },
  components: { NumberOfPlayers, Game },
}
</script>

<style scoped>
</style>
