<template>
  <div class="accueil">
    <h1>{{ msg }}</h1>
    <number-of-players v-on:players-commited="initGame()" v-show="computedDisplayNumberOfPlayers"/>
    <game v-show="computedDisplayGame"/>
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
    initGame() {
      this.hideNumberOfPlayersView()
      this.showGame()
    },
  },
  components: { NumberOfPlayers, Game },
}
</script>

<style scoped>
</style>
