<template>
  <div id="app">
    <h1>helloWorld</h1>
    <!-- <button @click="username()">get username</button>sss -->
    <router-link to="/foo" tag="button">Go for Foo</router-link>
    <router-link to="/bar" tag="button">Go for Bar</router-link>
    <router-link to="/clickhome" tag="button">Go for clickHome</router-link>
    <router-link :to="'/user' + id" tag="button">Go for User</router-link>
    <router-link to="/afterNavigation">AfterNavigate</router-link>
    <router-link to="beforeNavigation">BeforeNavigate</router-link>
    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  // computed : {
  //       username(){
  //           return this.$route.params.username
  //       }
  // },
  data(){
    return{
      id : '123'
    }
  }
}
</script>

<style>

</style>
