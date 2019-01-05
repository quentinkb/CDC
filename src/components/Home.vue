<template>
  <div class="accueil">
    <h1>{{ msg }}</h1>
    <number-of-players v-show="computedDisplayNumberOfPlayers"></number-of-players>
    <button @click="commitNumberOfPlayer()">Valider</button>
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
    commitNumberOfPlayer() {
      this.commitNewPlayersToStore()
      this.toggleNumberOfPlayersView(false)
    },
    commitNewPlayersToStore() {
      const payload = [
        {
          firstname: 'quentin',
        },
      ]
      this.$store.commit('initPlayers', payload)
    },
  },
  components: { NumberOfPlayers },
}
</script>

<style scoped>
</style>
