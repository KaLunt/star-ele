<template>
  <van-tabbar route v-model="active" @change="change">
    <van-tabbar-item to="/home" replace>
      <span>自定义</span>
      <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive" />
    </van-tabbar-item>
    <van-tabbar-item to="/category" icon="search">标签</van-tabbar-item>
    <van-tabbar-item to="/shopCar" replace icon="setting-o">购物车</van-tabbar-item>
    <van-tabbar-item to="/profile" replace icon="setting-o">个人中心</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "FootBar",
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