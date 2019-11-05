<template>

  <div class="nav-bar">
    <div><slot name="left" @click="follow"></slot></div>
    <div><slot name="right" @click="headline"></slot></div>
  </div>

</template>

<script>
  export default {
    name: "NavBar",
    methods:{
      follow(){

      },
      headline(){

      },
    }
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    background-color: #f3f3f3;
    height: 44px;
    line-height: 44px;
    padding:8px 0 0 10px;
    box-sizing: border-box;
    box-shadow: 0 1px 1px rgba(100,100,100,.2);
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }
  .nav-bar div{
    width: 50px;
  }

</style>