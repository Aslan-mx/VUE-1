<template>
  <div id="err">
    当前页面不存在，
    <!--<router-link to='/'>点击跳转回首页</router-link>-->
    <!--编程式导航-->
    <span @click='goHome'>点击跳转回首页</span>
  </div>
</template>

<script>
  export default {
    name:'Err',
    data(){
      return{
        msg : '当前页面不存在'
      }
    },
    methods:{
      goHome(){
        setTimeout(()=>{
          this.$router.push('/home')
        },3000);
      }
    },
    mounted(){
      console.log(this);
    }
  }
</script>

<style lang="less" scoped>
span{
  color: yellowgreen;
}
</style>
