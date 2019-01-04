<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ getNumberOfPlayers }}</h2>
    <button @click="incrementNumberOfPlayers()">add player</button>
    <button @click="decrementNumberOfPlayers()">remove player</button>
  </div>
</template>

<script>
export default {
  name: 'numberOfPlayers',

  data() {
    return {
      msg: 'Indiquez le nombre de joueur',
      title: 'Ma super application',
    }
  },
  created() {
    const a = 5
    this.title = a
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
