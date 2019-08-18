<template>
  <div id='homes'>
    <ul>
      <router-link
        active-class='sel'
        v-for='(item,index) in list'
        :to='item.path'
        :key='index'
        tag="li">
        <span class='title'>
            <img :src="item.icon" alt="">
            {{item.title}}
        </span>
      </router-link>
    </ul>
  </div>
</template>

<script>

  export default {
    name:'Homes',
    data(){
      return{
        list:[{title:'商城',path:'/shopping',icon:'../../../static/font/huazhuangjing.png'},
          {title:'附近',path:'/nearby',icon:'../../../static/font/jiemaojia.png'},
          {title:'游展',path:'/comiket',icon:'../../../static/font/hushoushuang.png'},
          {title:'福利',path:'/welfare',icon:'../../../static/font/mianpu.png'},
          {title:'玩乐',path:'/disport',icon:'../../../static/font/muyulou.png'},
          {title:'周边',path:'/periphery',icon:'../../../static/font/xiangxun.png'},
          {title:'体育',path:'/sports',icon:'../../../static/font/qidian.png'},
          {title:'亲子',path:'/parenting',icon:'../../../static/font/zhijiayou.png'}]
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url('../../style/main.less');
  *{border: 1px solid black;}
#homes{
  ul{
    display: flex;
    flex-wrap:wrap;
    .w(375);
    li{
      .w(93.7%);
      .lh(60);
      text-align:center;

      .fs(16);
      img{
        .w(35%);
        .h(35%);
       margin:15px auto 0;
      }
      .title{
        .w(25%);
        color:#87CEFF;
      }
    }
  }
}


</style>
