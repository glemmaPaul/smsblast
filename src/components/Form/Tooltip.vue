<template>
  <span>
    {{ message }}
  </span>
</template>

<script>
export default {
  name: 'tooltip',
  props: {
    message: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
