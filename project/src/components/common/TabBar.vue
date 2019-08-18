<template>
  <div id='tabbar'>
    <ul>
      <router-link
        active-class='sel'
        v-for='(item,index) in navlist'
        :to='item.path'
        :key='index'
        tag="li">
        {{item.title}}
      </router-link>
    </ul>
    <!--<ul>-->
      <!--<router-link to='/home'tag="li">Home</router-link>-->
      <!--<router-link to='/categray'tag="li">Categray</router-link>-->
      <!--<router-link to='/shopcar'tag="li">Shopcar</router-link>-->
      <!--<router-link to='/my'tag="li">My</router-link>-->
    <!--</ul>-->
  </div>
</template>

<script>
  export default {
    name:'TabBar',
    data(){
      return{
       navlist:[{title:'Home',path:'/home',icon:''},
                 {title:'Categray',path:'/categray',icon:''},
                 {title:'Shopcar',path:'/shopcar',icon:''},
                 {title:'My',path:'/my',icon:''}]
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url('../../style/main.less');
  #tabbar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    ul{
      .w(375);
      display: flex;

      li{
        border: 1px solid @tabBg;
        background: @tabBg;
        color:@tabDefaultColor;
        width: 25%;
        .h(60);
        .lh(60);
        text-align:center;
        .fs(16);
      }
      .sel{
        color:palevioletred;
      }
    }
  }
</style>
