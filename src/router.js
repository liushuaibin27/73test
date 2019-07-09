import Vue from 'vue'
//导入vue-router
import VueRouter from 'vue-router'
//配置vue的插件 vue-router
Vue.use(VueRouter)

import HeroList from './view/heroes/HeroList.vue'
import EquipsList from './view/equips/EquipsList.vue'
import WeaponsList from './view/weapons/WeaponsList.vue'
import AddList from './view/heroes/AddList.vue'
import EditList from './view/heroes/EditList.vue'

// 创建路由对象
const router=new VueRouter({
  linkActiveClass: 'active',
  routes:[
    {name:'home',path:'/',redirect:'/hero'},
    {name:'hero',path:'/hero',component:HeroList},
    {name:'equips',path:'/equips',component:EquipsList},
    {name:'weapons',path:'/weapons',component:WeaponsList},
    {name:'add',path:'/hero/add',component:AddList},
    {name:'edit',path:'/hero/edit',component:EditList},
    
  ]
  
})
export default router