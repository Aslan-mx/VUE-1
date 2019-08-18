<template>
  <div id="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for='(item ,index) in list' :key='index'>
          <img :src="root+item.imgPath" alt="">
        </div>
      </div>

      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Swiper from 'swiper'
  // import Axios from 'axios' //拦截器写入
  export default {
    name: 'Banner',
    data() {
      return {
      // 轮播图数据请求 声明一个变量list 并发起Ajax请求
        list:[],
        root:'http://47.100.125.83:3000'
      }
    },
    methods: {
      initswiper() {
        //代理小暗号开始
        let url='http://47.100.125.83:3000/admin/getBanner'
        //main.js原型链继承axios 用this
        console.log(this)
        this.$axios.get('/hehe/admin/getBanner')
          .then((res)=>{
            console.log('呵呵哒')
            console.log(res)
            if(res.err==0){
              this.list=res.data
              //轮播图滑动
              Vue.nextTick(()=>{
                this.mySwiper = new Swiper('.swiper-container', {
                  // direction: 'vertical', // 垂直切换选项
                  loop: true, // 循环模式选项
                  autoplay:true,
                  speed: 1000,
                  pagination : '.swiper-pagination',
                  autoplayDisableOnInteraction : false,
                  // 如果需要分页器
                  pagination: {
                    el: '.swiper-pagination',
                  },
                })
              })
            //  拦截器优点不用在每一个数据后面添加data 只在拦截器添加使用即可
            }
          })
          .catch((err)=>{
            console.log(err)
          })
      }
    },
    //在生命周期中调用自己创建的initswiper模块！！
    mounted(){
      this.initswiper()
    },
    destroyed(){
      // delete this.mySwiper
      this.mySwiper==null
    }
  }
</script>

<style lang="less" scoped>
@import url('../../../../node_modules/swiper/dist/css/swiper.css');
@import url('../../../style/main.less');
  #banner{
       .w(375); 
       .h(160); 
    img{
      .w(375);
      .h(160);
    }
  }
</style>
