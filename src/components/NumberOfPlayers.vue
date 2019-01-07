<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ getNumberOfPlayers }}</h2>
    <button @click="incrementNumberOfPlayers()">add player</button>
    <button @click="decrementNumberOfPlayers()">remove player</button>
    <button @click="initPlayers()">Valider nombre joueur</button>
  </div>
</template>

<script>
export default {
  name: 'numberOfPlayers',

  data() {
    return {
      msg: 'Indiquez le nombre de joueur',
    }
  },
  computed: {
    getNumberOfPlayers() {
      return this.$store.state.numberOfPlayers
    },
  },
  methods: {
    incrementNumberOfPlayers() {
      this.$store.commit('incrementNumberOfPlayers')
    },
    decrementNumberOfPlayers() {
      this.$store.commit('decrementNumberOfPlayers')
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
      this.$emit('players-commited')
    },
    commitNewPlayersToStore(users) {
      this.$store.commit('initPlayers', users)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
