<template>
  <div id='categray'>
    <Header title='分类'></Header>
    <div class='box'>
      <div class="left">
        <ul>
          <li v-for='(item,index) in selnav'
              @click='sel(item.class)'
              :class="selected==item.class?'navsel':''"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="right ">
        <div class='right-box animated '
             :class="selected"
        >
          <div class='categray-box' v-for='(item,index) in selnav'>
            <div class='categrayDetail-box'>
              <div class='img'>
                <img src="../../../../static/4.jpg" alt="">
              </div>

              <div class='categray-title'><span>炒货</span></div>
              <div class='list-box'>
                <div v-for='item in 22' @click='goDetail(item)'>
                  <img src="../../../../static/4.jpg" alt="">
                  <span>油炸花生 300g</span>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>

  import Header from '../../common/Header'
  import TabBar from '../../common/TabBar'
  export default{
    name:'Categray',
    components:{Header,TabBar},
    data(){
      return {
        selected:'categray1',
        selnav:[
          {name:'果味',class:'categray1'},
          {name:'蔬菜',class:'categray2'},
          {name:'炒货',class:'categray3'},
          {name:'点心',class:'categray4'},
          {name:'粗茶',class:'categray5'},
          {name:'淡饭',class:'categray6'}]
      }
    },
    methods:{
      sel(item){
        this.selected=item
      },
      goDetail(item){
        this.$router.push({path:'goodsdetail/123'})
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url('../../../style/main.less');
  .box{
    position: fixed;
    .top(45);
    .bottom(60);
    .w(375);
    // border: 1px solid red;
    display: flex;
    .left{
      .w(75);
      height: 100%;
      border-right:1px solid #D8d8D8;
      box-sizing: border;
      .fs(17);
      ul{
        li{
          .w(75);
          .h(40);
          .lh(40);
          text-align:center;
          box-sizing:border;
          border-left:2px solid #fff;
        }
        .navsel{
          border-left:2px solid yellowgreen;
          color:yellow;
        }
      }
    }
    .right{
      .w(300);
      height: 100%;


      .right-box{

        height: 100%;
        .categray-box{
          height: 100%;

        }
        .categrayDetail-box{

          height: 100%;
          overflow-y: scroll;
          .fs(16);
          .w(270);
          margin:0 auto;
          .img{
            width: 100%;
            img{
              width: 100%;
            }
          }
          .categray-title{
            .h(35);
            .lh(35);
            color:red;
            text-align: center;
          }
          .categray-title span::before,.categray-title span::after{
            content:'';
            display: inline-block;
            .w(35);
            .h(1);
            position: relative;
            .top(-6);
            margin:0 15px;
            background:#979797;
          }
          .list-box{
            // border: 1px solid blue;
            width: 100%;
            display: flex;
            flex-wrap:wrap;
            align-content: flex-start;
            div{
              .w(90);
              .h(110);
              .p_b(10);
              // background: blue;
              display: flex;
              flex-direction:column;
              justify-content: space-between;
              align-items: center;
              img{
                .w(65);
              }
              span{
                .fs(14);
                text-align: center;
              }
            }

          }
        }
      }
      .animated{
        transition: all 500ms ease-in-out;
      }
      .categray1{
        transform:translate(0,0%);
      }
      .categray2{
        transform:translate(0,-100%);
      }
      .categray3{
        transform:translate(0,-200%);
      }
      .categray4{
        transform:translate(0,-300%);
      }
      .categray5{
        transform:translate(0,-400%);
      }
    }
  }
</style>
