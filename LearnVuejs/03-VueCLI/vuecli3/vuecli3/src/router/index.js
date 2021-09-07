import VueRouter from "vue-router";
import Vue from "vue"
import Home from "../components/home.vue"
import About from "../components/about.vue"
//通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

//创建VueRouter对象
const routes = [
    {
        path : '../components/home.vue',
        component:Home
    },
    {
        path : '../components/about.vue',
        component:About
    }
]
const router = new VueRouter({
    //配置路由和组件之间的应用关系
    routes
})
//导出router
export default router