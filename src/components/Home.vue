<template>
  <div class="accueil">
    <h1>{{ msg }}</h1>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
/* global store */
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Accueil',
    }
  },
  components: { HelloWorld },
}
</script>

<style scoped>
</style>
