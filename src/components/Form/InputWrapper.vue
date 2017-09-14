<template>
  <div>
    <div>
      <slot name="label"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'input-wrapper'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#input-wrapper {
  padding: 10px;
  width: 100%;
  display: block;
}

input {
  width: 100%;
  height: 30px;
  font-size: 12px;
}

</style>
