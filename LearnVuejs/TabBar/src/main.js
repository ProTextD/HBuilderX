import Vue from 'vue'
import App from './App'
import router from './router'

/* 导入element-ui样式*/
import 'element-ui/lib/theme-chalk/index.css'
/* element-ui所有组件*/
import ElementUI from 'element-ui'
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

