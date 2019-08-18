<template>
  <div id="product">
    <div class='box'>
      <div class='item' v-for='(item,index) in first'
           @click="goDetail()"
           :to='item.path'
           :key='index'
           tag="li">
        <img :src="item.url"alt="">
        <span>{{item.title}}</span>
        <span>{{item.text}}</span>
        <span>{{item.price}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components:{ },
    name:'ProductList',
    data(){
      return{
        first:[
              {title:'【韭菜】',text:'猪猪猪猪猪猪猪猪',price:'22$',url:'../../../static/product/001.jpg'},
              {title:'【大葱】',text:'猪猪猪猪猪猪猪猪',price:'23$',url:'../../../static/product/002.jpg'},
              {title:'【茄子】',text:'猪猪猪猪猪猪猪猪',price:'22$',url:'../../../static/product/003.jpg'},
        ]
      }
    },
    methods:{
      goDetail(){
        this.$router.push({path:'/goodsdetail/123'})
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url('../../style/main.less');
  #product{
    width: 100%;
    .title{
      .fs(18);
      color: red;
      .h(25);
      .lh(25);
      padding: 5px 0;
      .p_b(5);
      text-align: center;
    }
    .box {
      width: 95%;
      margin: 0px auto;
      background: yellow;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .item {
        .w(175);
        .h(175);
        .m_t(5);
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgb(243, 243, 243);
        border-radius: 7px;
        img {
          width: 70%;
          height: 70%;
        }
        span {
          .fs(12);
        }
      }
    }
  }
</style>
