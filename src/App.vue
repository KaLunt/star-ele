<template>
  <div id="app">
    <router-view />
    <foot-bar />
  </div>
</template>

<script>
import FootBar from "@/components/content/footbar/FootBar.vue";
export default {
  name: "App",
  components: {
    FootBar,
  },
  data() {
    return {
      route: true,
      active: 0,
      icon: {
        active: "https://img.yzcdn.cn/vant/user-active.png",
        inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
      }
    };
  },
  methods: {
    change(e) {
      console.log(e);
    }
  }
};
</script>

<style>
</style>
