<template>
  <div class="hello">
    <h1>SMS Blast</h1>
    <h2>Send us their phone number and message and we do the rest.</h2>
    <text-form></text-form>
  </div>
</template>

<script>
import TextForm from '@/components/TextForm'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    TextForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
