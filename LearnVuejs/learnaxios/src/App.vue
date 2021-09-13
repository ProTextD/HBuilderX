<template>
  <div id="app">
    <div>{{message}}</div>  
    <h2>-------------------------------------</h2>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import axios from 'axios'
import {request} from './networks/request'
export default {
  name: 'App',
  data(){
    return{
      message : ''
    }
  },
  components:{
    HelloWorld
  },
  created(){
    // axios({
    //   url : 'http://123.207.32.32:8000/home/multidata',
    // }).then(res =>{
    //   this.message = res
    // })
    request({
      url : '/home/multidata',
    }).then(res =>{
      this.message = res
    })
  }
}
</script>

<style>

</style>
