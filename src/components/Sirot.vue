<template>
  <div class="container">
    <h1>Sirot</h1>

    <button @click="computeAndProcess(1)">1</button>
    <button @click="computeAndProcess(2)">2</button>
    <button @click="computeAndProcess(3)">3</button>
    <button @click="computeAndProcess(4)">4</button>
    <button @click="computeAndProcess(5)">5</button>
    <button @click="computeAndProcess(6)">6</button>
    <div v-if="getPlayer != undefined">
      <h1>{{getPlayer.id}}</h1>
      <button @click="commitChoice(getPlayer.id, 0)">1</button>
      <button @click="commitChoice(getPlayer.id, 1)">1</button>
      <button @click="commitChoice(getPlayer.id, 2)">2</button>
      <button @click="commitChoice(getPlayer.id, 3)">3</button>
      <button @click="commitChoice(getPlayer.id, 4)">4</button>
      <button @click="commitChoice(getPlayer.id, 5)">5</button>
      <button @click="commitChoice(getPlayer.id, 6)">6</button>
    </div>
  </div>
</template>

<script>
import Computer from './../business/computer'

export default {
  name: 'Sirot',
  data() {
    return {
      usersSirot: Array(0),
      sirot: 0,
      currentPlayer: 0,
    }
  },
  computed: {
    getPlayer() {
      return this.$store.state.players[this.currentPlayer]
    },
  },
  methods: {
    commitChoice(id, sirot) {
      if (this.currentPlayer < this.$store.state.players.length) {
        this.usersSirot.push({
          id,
          sirot,
        })
        this.currentPlayer += 1
      }
    },
    computeAndProcess(sirot) {
      this.usersSirot.forEach((user) => {
        let score = 0
        if (user.sirot === sirot) {
          if (user.id === this.$store.state.currentPlayerIndex) {
            // TODO: cette condition ne marche pas dans le
            // cas ou le joueur sirote une autre valeur que la chouette
            score = new Computer(user.sirot, user.sirot, user.sirot).compute()
              .score
          } else {
            score = 25
          }
        } else {
          score = 0
          if (user.id === this.$store.state.currentPlayerIndex) {
            score = -new Computer(user.sirot, user.sirot, -1).compute().score
          } else {
            score = -5
          }
        }
        this.updateScoreOfSpecificUser(user.id, score)
      })
      this.$emit('sirot-ended')
    },
    updateScoreOfSpecificUser(playerId, score) {
      this.$store.commit('updateScoreOfSpecificUser', {
        playerId,
        score,
      })
    },
  },
}
</script>
