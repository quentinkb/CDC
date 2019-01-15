<template>
  <div class="container">
    <h1>Choisir joueur</h1>
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
  name: 'ChoosePlayer',
  computed: {
    getPlayers() {
      return this.$store.state.players
    },
  },
  methods: {
    choosePlayer(playerId) {
      this.$emit('player-choosen', playerId)
    },
  },
}
</script>
