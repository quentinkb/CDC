<template>
  <div class="container">
    <h1>Bévue</h1>
    <ul>
      <li
        @click="choosePlayer(player.id)"
        :key="player.id"
        v-for="player in getPlayers"
      >{{player.id}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Bevue',
  computed: {
    getPlayers() {
      return this.$store.state.players
    },
  },
  methods: {
    choosePlayer(playerId) {
      this.$store.commit('updateScoreOfSpecificUser', {
        playerId,
        score: -5,
      })
    },
  },
}
</script>
