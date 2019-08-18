<template>
  <div id="shopcar">
    {{msg}}
    <Header title='购物车'></Header>
    <img src="../../../../static/img/shopcar.jpg" alt="">
    <!--{{this.$store.state.name}}-->
    <TabBar></TabBar>
  </div>
</template>

<script>
  import TabBar from '../../common/TabBar'
  import Header from '../../common/Header'
  export default {
    components:{TabBar,Header },
    name:'Shopcar',
    data(){
      return{
        msg:'购物车 页面'
      }
    },
//     created(){
// console.log(this.$store.state.name)
//     }
  }
</script>

<style lang="less" scoped>
  @import url('../../../style/main.less');
#shopcar{
  img{
  width: 100%;
height: 170px;
  }
}
</style>
