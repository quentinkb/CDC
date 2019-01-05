<template>
  <div>
    <h1>{{ getCurrentPlayerIndex }}</h1>
    <button @click="incrementCurrentPlayerIndex()">Prochain joueur</button>
  </div>
</template>

<script>
export default {
  name: 'Game',
  computed: {
    getCurrentPlayerIndex() {
      return this.$store.state.currentPlayerIndex
    },
  },
  methods: {
    incrementCurrentPlayerIndex() {
      this.$store.commit('incrementCurrentPlayerIndex')
    },
  },
}
</script>
