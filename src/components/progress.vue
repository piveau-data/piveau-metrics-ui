<template>
  <progress-bar type="line" ref="line" :options="options"></progress-bar>
  <!-- or -->
  <!-- <progress-bar type="line" ref="line" color="#007AFF" strokeWidth="0.5"></progress-bar> -->
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      options: {
        color: 'black',
        strokeWidth: 1
      }
    }
  },
  mounted: function () {
    this.$refs.line.animate(this.id)
  }
}
</script>

<style scoped>
html, body {
    margin: 0;
    padding: 0;
}
</style>
