<template>
  <div id="app">
    <!--<List></List>-->
    <!--<hr>-->
    <!--<Shopcar></Shopcar>-->
    <!--<hr>-->
    <!--存放切换组建-->
    <router-view></router-view>

    <!--//组件信息-->
  <!--<componet :is='component'></componet>-->
    <!--<ul>-->
      <!--<li @click='goPage(item)' v-for='(item,index) in tabbar'>{{item}}</li>-->
    <!--</ul>-->
  </div>
</template>

<script>
 // import List from './components/List'
 // import Shopcar from './components/Shopcar'
import  Home from './components/pages/Home/Home'
import Categray from './components/pages/Categray/Categray'
export default {
  name: 'App',
  components: {
    Home,Categray
  },
  data(){
    return{
      name:'李哥',
    component:'Categray',
      tabbar:['Home','Categray','ShopCar','My']
    }
  },
  methods:{
    goPage(item){
      this.component-item
    }
  }
}
</script>
<style lang="less" scoped>

</style>
