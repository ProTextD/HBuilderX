//配置路由相关的信息
import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'
// import Profile from '../components/Profile.vue'
const Home = () => import ('../components/Home.vue')
const About = () => import ('../components/About.vue')
const User = () => import ('../components/User.vue')
const Profile = () => import ('../components/Profile.vue')
const News = () => import ('../components/Homenews.vue')
const Message = () => import ('../components/Homemessage.vue')
const HelloVuex = () => import ('../components/HelloVuex.vue')
const inputOne = () => import ('../components/inputOne.vue')
const inputTwo = () => import ('../components/inputTwo.vue')
const TabBar = () => import('../components/TabBar.vue')
const TabBarItem =() => import('../components/TabBarItem.vue')
//1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

//2.创建VueRouter对象
const routes = [
  {
    path:'',
    //redirect重定向
    redirect:'/home'
  },
  {
    name:'Home',
    path:'/home',
    component: Home,
    meta:{
      title:"首页"
    },
    children:[
      // {
      //   path:'',
      //   component:News
      // },
      {
        name : 'News',
        path:'news',
        component:News,
        meta:{
          title:"新闻"
        }
      },
      {
        path:'message',
        name:'message',
        component:Message,
        meta:{
          title:"信息"
        }
      },
    ]
  },
  {
    path:'/about',
    component: About,
    meta:{
      title:"关于"
    }
  },
  {
    path:'/user/:userId',
    component:User,
    meta:{
      title:"用户"
    },
    //第一种写法:props值为对象，该对象中所有的key-value的组合最终都会通过props传给组件 
    // props:{a:100}
    //第二种写法: props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传给组件
    props:true
  },
  {
    path:'/Profile',
    component:Profile,
    meta:{
      title : "档案"
    },
    //第三种写法: props值为函数，该函数返回的对象中每一组key-value都会通过props传给组件
    props(route){
      return{
        query:route.query,
        name:route.query.name,
        age:route.query.age,
        height:route.query.height
      }
    }
  },
  {
    path:'/HelloVuex',
    component:HelloVuex,
    meta:{
      title:"Vuex"
    }
  },
  {
    path : '/inputOne',
    name : 'inputOne',
    component:inputOne,
    meta:{
      title : 'inputOne'
    }
  },
  {
    path : '/inputTwo',
    name : 'inputTwo',
    component:inputTwo,
    meta:{
      title : 'inputTwo'
    }
  },
  {
    path : '/TabBar',
    component : TabBar,
  },
  {
    path : '/TabBarItem',
    component : TabBarItem,
  }
]
const router = new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  mode : 'history',
  // linkActiveClass : "active"
})

router.beforeEach((to , from , next) => {
  document.title = to.matched[0].meta.title
  next()
})

//3.将router对象传入到Vue实例
export default router
