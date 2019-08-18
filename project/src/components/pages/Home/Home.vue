<template>
  <div id="home">
    <Header title='商城'></Header>
    <Banner class='banner'></Banner>
<Homes></Homes>
    <!--主题-->
    <div class='theme_contain'>
      <div class='title'>精选主题</div>
      <div class='box'>
        <div v-for='(item,index) in themes'
             @click='goTheme(item)'>
          <img :src="item.img" alt="">
        </div>
      </div>
      <div class='title'>新品首发</div>
    </div>
    <ProductList class='new_contain'></ProductList>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import Banner from './Banner'
  import Homes from  '../../common/Homes'
  import Header from '../../common/Header'
  import TabBar from '../../common/TabBar'
  import ProductList from '../../common/ProductList'
  import { Indicator } from 'mint-ui'
  export default {
    components:{Banner,Homes,Header,TabBar,ProductList},
    name:'Home',
    data(){
      return{
        themes:[{name:'精选主题',img:'/static/img/1.jpg',themeId:1},

                ]
      }
    },
  //  大唐一到三号图片点击事件
    methods:{
      goTheme(item){
      //  点击图片跳转主题界面 主题界面Theme.vue 图片名称用路由传参完成通过Id名获取
      //   this.$router.push({path:'/Theme/123',query:{plan:'private'}})
      //  第二种路由传参方式 也是全家桶路由默认方式
      //   this.$router.push({name:'Theme',params:{hehe:123,age:16}})
        this.$router.push({name:'Theme',params:{themeId:item.themeId,name:item.name}})
      },
      initData(){
        Indicator.open();
        let url='http://47.100.125.83:3000/admin/getBanner'
        this.$axios.get(url)
          .then((res)=>{
        Indicator.close()
          })
          .catch((err)=>{
            Indicator.close()
        })
      }

    },
    //  发起数据请求
  created(){

  }

  }
</script>

<style lang="less" scoped>
  @import url('../../../style/main.less');
  #home{
    .banner{
      .m_t(45);
    }
     .theme_contain{
       .title{
         .fs(18);
         color: #171717;
         .h(25);
         .lh(25);
          padding: 5px 0;
         .p_b(5);
         text-align: center;
       }
        .box{
          display: flex;
          flex-wrap:wrap  ;
          .small{
            width: 50%;
          }
          .big{
            width: 100%;
          }
          img{
            width:100%;
          }
        }
     }
    .new_contain{
      .p_b(70);
      background: rebeccapurple;
    }
  }
#test{
  height: 900px;
}
</style>
