<template>
<div id="goodsdetail">
  <Header title='商品详情' back='true'></Header>
  <div class='box'>
    <div class='img-box'>
      <img src="/static/4.jpg" alt="">
    </div>
      <div class='input-box'>
        <div class='contain'>
          <div>
            <span>数量</span>
            <span>1</span>
            <span>></span>
          </div>
          <div class='car'>
            <span>加入购物车</span>
            <span>购物车</span>
          </div>
        </div>
      </div>
    <div class="info-box">
      <span class='stock'>有货</span>
      <p>纯生龙岩 500克</p>
      <p>￥0.01</p>
      {{selected}}
    </div>
    <div>
        <mt-navbar v-model="selected">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
        <mt-tab-item id="3">选项三</mt-tab-item>
        </mt-navbar>

    <!-- tab-container -->
        <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :key='n' :title="'内容 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :key='n' :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :key='n' :title="'选项 ' + n" />
        </mt-tab-container-item>
        </mt-tab-container>
      </div>
   </div>
  </div>
</template>

<script>
  import Header from '../../common/Header'
  export default {
    components:{Header},
    name:'Goodsdetail',
    data(){
      return{
        msg:'Goodsdetail 商品详情页',
        selected:'1',
        selnav:[
          {name:'果味',class:'categray1'},
          {name:'蔬菜',class:'categray2'},
          {name:'炒货',class:'categray3'},
          {name:'点心',class:'categray4'},
          {name:'粗茶',class:'categray5'},
          {name:'淡饭',class:'categray6'}]
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url('../../../style/main.less');
  #goodsdetail{
    .box{
      .p_t(45);
      .w(375);
      // border: 1px solid red;
      .img-box{
        // background: red;
        .w(375);
        text-align: center;
        img{
          width: 45%;
          margin: 0 auto;
        }
      }
      .input-box{
        // background: pink;
        .contain{
          margin:0px auto;
          .w(340);
          .fs(14);
          color: #fff;
          border: 1px solid #ab956d;
          background: #ab956d;
          border-radius:40px;
          display: flex;
          justify-content: space-between;
          .padding(10,00,10,0);
          div{
            display: flex;
            justify-content: space-around;
            // background: red;
            width: 40%;
            .padding(0,20,0,20);
          }
          .car{
            border-left:1px dotted #fff;
          }
        }
      }
      .info-box{
        text-align:center;
        .stock{
          .fs(16);

        }
        p{
          .fs(22);
        }
      }
    }
  }
</style>
