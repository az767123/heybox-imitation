<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabBarIcon/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabBarIcon/home1.svg" alt="">
        <div slot="item-word">首页</div>
      </tab-bar-item>

      <tab-bar-item path="/Games">
        <img slot="item-icon" src="~assets/img/tabBarIcon/games.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabBarIcon/games1.svg" alt="">
        <div slot="item-word">游戏库</div>
      </tab-bar-item>

      <tab-bar-item path="/Community">
        <img slot="item-icon" src="~assets/img/tabBarIcon/community.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabBarIcon/community1.svg" alt="">
        <div slot="item-word">社区</div>
      </tab-bar-item>

      <tab-bar-item path="/Profile">
        <img slot="item-icon" src="~assets/img/tabBarIcon/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabBarIcon/profile1.svg" alt="">
        <div slot="item-word">我</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>

import TabBar from "components/tabbar/tabbar";
import TabBarItem from "components/tabbar/TabBarItem";

export default {
  name: 'app',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import "assets/css/base.css";

#app {
  margin-top:44px;
}
</style>
