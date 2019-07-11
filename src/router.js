//路由文件

//引入vue模块
import Vue from 'vue'

//导入英雄列表的组件
import HeroList  from './views/heroes/HeroList.vue'
//导入武器列表组件
import WeaponsList from './views/weapons/WeaponsList.vue'
//导入准备列表组件
import EquipsList from './views/equips/EquipsList.vue'

//导入添加英雄列表的组件
import HeroAdd from './views/heroes/HeroAdd.vue'
//导入添加武器列表的组件
import WeaponsAdd from './views/weapons/WeaponsAdd.vue'
//导入添加装备列表的组件
import EquipsAdd from './views/equips/EquipsAdd.vue'

//导入修改英雄的组件
import HeroEdit from './views/heroes/HeroEdit.vue'
//导入修改武器的组件
import WeaponsEdit from './views/weapons/WeaponsEdit.vue'
//导入修改装备的组件
import EquipsEdit from './views/equips/EquipsEdit.vue'

//导入 vue-router
import VueRouter from 'vue-router'
//如果在一个模块化工程中使用它, 必须要通过 Vue.use() ,明确地安装路由插件
Vue.use(VueRouter)

//创建路由对象
const router = new  VueRouter({
  //配置路由规则
  routes: [
    {name: 'home', path: '/', redirect: '/heroes' },
    {name: 'heroes', path: '/heroes', component: HeroList},
    {name: 'weapons', path: '/weapons', component: WeaponsList},
    {name: 'equips', path: '/equips', component: EquipsList},

    {name: "heroesadd", path: '/heroes/add', component: HeroAdd},
    {name: 'weaponsadd', path: '/weapons/add', component: WeaponsAdd},
    {name: 'equipsadd', path: '/equips/add', component: EquipsAdd},

    //动态路由地址 使用时要传入id
    {name: "heroesedit", path: '/heroes/edit/:id', component: HeroEdit, props: true},
    {name: 'weaponsedit', path: '/weapons/edit/:id', component: WeaponsEdit, props: true},
    {name: 'equipsedit', path: '/equips/edit/:id', component: EquipsEdit, props: true}
  ],

  //配置高亮显示的类名
  linkActiveClass: 'active'
})

//导出路由模块
export default router