<template>
  <div id="header">
    <div class='button' v-if='back'@click="goBack">back</div>
    <div class='title'> {{title}}</div>

  </div>
</template>

<script>
  export default {
    name:'Header',
    data(){
      return{
        msg:'要死啦'
      }
    },
    props:['title','back'],
    methods:{
      //返回设置
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="less" scoped>
@import url('../../style/main.less');
  #header{
    background:@headBg ;
    .w(375);
    .h(45);
    .lh(45);
    .fs(20);
    color: #fff;
    text-align: center;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    .button{
    position: absolute;
      left: 0;
    }
  }
</style>
