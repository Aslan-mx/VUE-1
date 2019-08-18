<template>
  <div id="my">
    {{msg}}
    <!--<button @click="test">change</button>-->
    <!--{{this.$store.state.name}}-->
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import TabBar from '../../common/TabBar'
  export default {
    components:{ TabBar},
    name:'My',
    data(){
      return{
        msg:'My 页面'
      }
    },
    // methods:{
    //   test(){
    //     this.$store.commit('changeName','hehe')
    //   }
    // }
  }
</script>

<style lang="less" scoped>

</style>
