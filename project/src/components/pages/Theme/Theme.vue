<template>
  <div>
    <Header back=1 :title='title' ></Header>
      <div class='top'>
        <img src="../../../../static/4.jpg" alt="">
      </div>

    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <ProductList v-for="item in list" :key="item">{{item}}</ProductList>
    </ul>

  </div>
</template>

<script>
  //import MintUI from 'mint-ui'
  import Header from '../../common/Header'
  import ProductList from '../../common/ProductList'
  export default {
    components:{Header,ProductList},
    name:'Theme',
    data(){
      return{
        title:'狗贼',ProductList,
        list:[1,2,3,4,5,6,7,8,9]
      }
    },
methods:{
  loadMore() {
    this.loading = true;
    setTimeout(() => {
      let last = this.list[this.list.length - 1];
      for (let i = 1; i <= 10; i++) {
        this.list.push(last + i);
      }
      this.loading = false;
    }, 2500);
  }
},
    created(){
      //路由传参中route不带字母"r"
      console.log(this);
      console.log(this.$route);
      this.title=this.$route.params.name;
    }
  }
</script>

<style lang="less" scoped>
@import url('../../../style/main.less');
  .top{
    .w(375);
    .m_t(45);
    img{
      .w(375);
    }
  }
</style>
