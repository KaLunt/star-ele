<template>
  <div id="app">
    <router-view></router-view>
    <FootBar></FootBar>
  </div>
</template>

<script>
import FootBar from 'content/footbar/FootBar'
export default {
  name: 'app',
  components: {
    FootBar,
  }
}
</script>

<style>

</style>
