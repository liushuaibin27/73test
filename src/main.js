import Vue from 'vue'
import App from './App.vue'

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/css/index.css";

//导入vue-router
import VueRouter from 'vue-router'
//配置vue的插件 vue-router
Vue.use(VueRouter)

import HeroList from './view/heroes/HeroList.vue'
import EquipsList from './view/equips/EquipsList.vue'
import WeaponsList from './view/weapons/WeaponsList.vue'

// 创建路由对象
const router=new VueRouter({
  linkActiveClass: 'active',
  routes:[
    {name:'home',path:'/',redirect:'/hero'},
    {name:'hero',path:'/hero',component:HeroList},
    {name:'equips',path:'/equips',component:EquipsList},
    {name:'weapons',path:'/weapons',component:WeaponsList}
    
  ]
  
})

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router
})
