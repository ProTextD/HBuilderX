<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'user/'+UserId" tag="button" replace active-class="router-link-active">用户</router-link>
    <router-link :to="{
      path:'/profile',
      query:{name : 'zhangsan' , age : 18 , height : 1.88}
    }" tag="button">档案</router-link>
    <router-link to="/HelloVuex" tag="button">Vuex</router-link><br>
    <!--通过代码跳转路由-->
    <!-- <button @click="homeClick">首页</button> -->
    <!-- <button @click="aboutClick">关于</button> -->
    <!-- <button @click="userClick">用户</button>
    <button @click="proClick">档案</button> -->
    <router-link to="/inputOne" tag="button">inputOne</router-link>
    <router-link to="/inputTwo" tag="button">inputTwo</router-link>
    <router-link to="/TabBar">TabBar</router-link>
    <router-link to="/TabBarItem">TabBarItem</router-link>
      <!-- 所有路径匹配到的视图组件都会被缓存 -->
    <keep-alive exclude="Profile,User">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      UserId:"zhangsan",
    }
  },
  // methods:{
  //   homeClick(){
  //     this.$router.push('/home')
  //   },
  //   aboutClick(){
  //     this.$router.push('/about')
  //   },
  //   userClick(){
  //     this.$router.push('/user/' + this.UserId)
  //   },
  //   proClick(){
  //     this.$router.push({
  //       path:'/profile',
  //       query:{
  //         name : 'zhangsan',
  //         age : 18,
  //         height : 1.88  
  //       }
  //     })
  //   }
  // }
}
</script>

<style>
  .router-link-active{
    color:red
  }
</style>
