<template>
  <div class="accueil">
    <h1>{{ msg }}</h1>
    <button @click="increment()">Increment</button>
    <h2>{{ count }}</h2>
  </div>
</template>

<script>
/* global store */
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Accueil',
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
  },
  computed: {
    count() {
      return this.$store.state.count
    },
  },
}
</script>

<style scoped>
</style>
