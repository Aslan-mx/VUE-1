import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/pages/Home/Home'
import Categray from '../components/pages/Categray/Categray'
import Shopcar from '../components/pages/Shopcar/Shopcar'
import My from '../components/pages/My/My'
import Info from '../components/pages/My/Info'
import Login from '../components/pages/My/Login'
import Reg from '../components/pages/My/Reg'
import Theme from '../components/pages/Theme/Theme'
import Goodsdetail from '../components/pages/Goodsdetail/Goodsdetail'

import Shopping from '../components/pages/subsidiary/Shopping'
import Nearby from '../components/pages/subsidiary/Nearby'
import Comiket from '../components/pages/subsidiary/Comiket'
import Welfare from '../components/pages/subsidiary/Welfare'
import Disport from '../components/pages/subsidiary/Disport'
import Periphery from '../components/pages/subsidiary/Periphery'
import Sports from '../components/pages/subsidiary/Sports'
import Parenting from '../components/pages/subsidiary/Parenting'

import Err from '../components/common/Err'



Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',  redirect:"/home"},
    {path: '/home', name: 'Home', component:Home},
    {path: '/categray', name: 'Categray', component:Categray},
    {path: '/shopcar', name: 'Shopcar', component:Shopcar},
    {path: '/goodsdetail/:id', name: 'Goodsdetail', component:Goodsdetail},
    {path: '/my', name: 'My',
      component:My,
      children:[
        {path:'Login',component:Login},
        {path:'Info',component:Info},
        {path:'Reg',component:Reg},
        {path:'',redirect:'Info'}
      ]
    },
    {path: '/theme/:themeId', name: 'Theme', component:Theme},

    {path: '/shopping', name: 'Shopping', component:Shopping},
    {path: '/nearby', name: 'Nearby', component:Nearby},
    {path: '/comiket', name: 'Comiket', component:Comiket},
    {path: '/welfare', name: 'Welfare', component:Welfare},

    {path: '/disport', name: 'Disport', component:Disport},
    {path: '/periphery', name: 'Periphery', component:Periphery},
    {path: '/sports', name: 'Sports', component:Sports},
    {path: '/parenting', name: 'Parenting', component:Parenting},



    {path: '/notfind', component:Err},
    {path: '**', redirect:'/notfind'},
  ]
})
