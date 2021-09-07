import Vue from 'vue'
import Router from 'vue-router'

const Foo = () => import ('../components/Foo.vue')
const Bar = () => import ('../components/Bar.vue')
const clickHome = () => import ('../components/clickHome.vue')
const User = () => import ('../components/User.vue')
const FooSecound = () => import('../components/FooSecound.vue')
const Baz = () => import('../components/Baz.vue')
const aButton = () => import('../components/aButton.vue')
const showA = () => import('../components/showA.vue')
const AfterNavigation = () => import('../components/AfterNavigation.vue')
const BeforeNavigation = () => import('../components/BeforeNavigation.vue')
Vue.use(Router)

const routes = [
  {
    path : '/',
    components:{
      default : Foo,
      a : aButton,
      b : Baz
    }
  },
  {
    path : '/foo',
    component : Foo,
    meta:{
      title : 'Foo'
    },
    children : [
      {
        path : 'fooSecound',
        component : FooSecound
      }
    ]
  },
  {
    path : '/bar',
    component : Bar,
    meta:{
      title : 'Bar',
      requiresAuth : true
    },

  },
  {
    path : '/clickhome',
    component : clickHome,
    meta:{
      title : 'ClickHome'
    }
  },
  {
    path : '/user:id',
    component : User,
    meta:{
      title : 'User'
    },
  },
  {
    path : '/baz',
    component : Baz,
    meta : {
      title : 'Baz'
    }
  },
  {
    path : '/aButton',
    component : aButton,
    meta:{
      title : 'aButton'
    },
    children:[
      {
        path : 'showA',
        component : showA
      }
    ]
  },
  {
    path : '/afterNavigation',
    component : AfterNavigation
  },
  {
    path : '/beforeNavigation',
    component : BeforeNavigation
  }
  
]

const router = new Router({
  routes,
  mode:'history'
})

// router.beforeEach((to , from , next)=>{
//   document.title = to.matched[0].meta.title
// })

export default router
