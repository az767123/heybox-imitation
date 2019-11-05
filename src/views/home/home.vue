<template>
  <div>
    <nav-bar>
      <div slot="left">关注</div>
      <div slot="right">头条</div>
    </nav-bar>
    <span>首页</span>
    <router-view></router-view>

  </div>
</template>
<script>
  import NavBar from "components/navbar/navbar"

  export default {
    name: "home",
    components:{
      NavBar
    }
  }
</script>

<style scoped>

</style>