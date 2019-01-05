<template>
  <div class="accueil">
    <h1>{{ msg }}</h1>
    <number-of-players v-show="computedDisplayNumberOfPlayers"></number-of-players>
    <button @click="initPlayers()">Valider</button>
  </div>
</template>

<script>
import NumberOfPlayers from '@/components/NumberOfPlayers'

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Accueil',
      displayNumberOfPlayers: true,
    }
  },
  computed: {
    computedDisplayNumberOfPlayers() {
      return this.displayNumberOfPlayers
    },
  },
  methods: {
    toggleNumberOfPlayersView(displayNumberOfPlayers) {
      this.displayNumberOfPlayers = displayNumberOfPlayers
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
      this.toggleNumberOfPlayersView(false)
    },
    commitNewPlayersToStore(users) {
      this.$store.commit('initPlayers', users)
    },
  },
  components: { NumberOfPlayers },
}
</script>

<style scoped>
</style>
