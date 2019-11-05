<template>


    <div class="tab-bar-item" @click="itemClick" >

      <div v-show="isActive"><slot name="item-icon-active"></slot></div>
      <div v-show="!isActive"><slot name="item-icon"></slot></div>
      <div :class="{active:isActive}"><slot name="item-word"></slot></div>

    </div>


</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String
    },
    computed:{
      isActive(){
        return this.$route.path === this.path
      }
    },
    methods:{
      itemClick() {
        if(this.$route.path != this.path){
          this.$router.replace(this.path)
        }
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex:1;
    text-align: center;
    font-size:14px;
    color: #a4a4a4;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .active {
    color:black;
  }
</style>
