<template>
  <div id="categray">
    <Header title='分类页面'back='1'></Header>
    <div class='center'>
      <div class='left'>
        <ul>
          <li v-for='item in list'
              @click='toggle(item)'
              :class='item.class===sel?"sel":""'
          >{{item.name}}</li>
          {{sel}}
        </ul>
      </div>
      <div class='right'>
        <div class='box animated' :class='sel'>
          <div v-for='item in list'>{{item.name}}</div>
        </div>

      </div>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import Header from '../../common/Header'
  import TabBar from '../../common/TabBar'
  export default {
    components:{Header,TabBar},
    name:'Categray',
    data(){
      return{
        msg:'我是分类页面',
        list:[
          {name:'热菜',class:'categray1'},
          {name:'酒水',class:'categray2'},
          {name:'饮料',class:'categray3'}],
        sel:'categray1'
      }
    },
    methods:{
      toggle(item){
        this.sel=item.class
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url('../../../style/main.less');
  .center{
    position: fixed;
    .top(45);
    .bottom(60);
    left: 0;
    right: 0;
    display: flex;
    .left{
      .w(75);
      border-right:1px solid red;
      .fs(18);
      text-align: center;
    }
    .sel{
      border: 1px solid yellowgreen;
      color:#AB956D ;
    }
    .right{
      .box{
        height: 100%;
        .w(300);
        div{
          border: 1px solid blueviolet;
          height: 100%;
        }
      }
      .animated{
        transition: all 1s;
      }
      .categray1{
        transform: translate(0,0);
      }
      .categray2{
        transform: translate(0,-100%);
      }
      .categray3{
        transform: translate(0,-200%);
      }
    }
  }
</style>
