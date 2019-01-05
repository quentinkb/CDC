<template>
  <div class="accueil">
    <h1>{{ msg }}</h1>
    {{ computedDisplayNumberOfPlayers }}
    <number-of-players v-show="computedDisplayNumberOfPlayers"></number-of-players>
    <button @click="toggleNumberOfPlayers(false)">OK</button>
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
    toggleNumberOfPlayers(displayNumberOfPlayers) {
      this.displayNumberOfPlayers = displayNumberOfPlayers
    },
  },
  components: { NumberOfPlayers },
}
</script>

<style scoped>
</style>
