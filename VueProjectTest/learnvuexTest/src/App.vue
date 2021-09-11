<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <!-- <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button> -->
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addStudent">添加学生</button>
    <hello-vuex></hello-vuex>
    <h2>-----getters-----</h2>
    <h2>{{$store.getters.mul}}</h2>
    <h2>{{$store.getters.getAge}}</h2>
    <h2>{{$store.getters.getAgeLength}}</h2>
    <h2>{{$store.getters.getAgeInput(10)}}</h2>
    <p>我的个人信息:{{info}}</p>
    <button @click="updateInfo">更新信息</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  import {UPDATE_INFO} from './store/mutation-types'
export default {
  name: 'App',
  data(){
    return {
      message:'我是App组件',
      // counter:0,
    }
  },
  computed:{
    info(){
      return this.$store.state.info
    },
  },
  components:{
    HelloVuex
  },
  methods:{
    add(){
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    },
    addCount(count){
      // 普通的提交风格
      // this.$store.commit('incrementCount' , count)
      //特殊的提交风格
      this.$store.commit({
        type : 'incrementCount',
        count
      })
    },
    updateInfo(){
      // this.$store.commit('updateInfo' , {height : 1.88})
      this.$store.commit(UPDATE_INFO , {height : 1.88})
    },
    // increment(){
    //   this.$store.dispatch('increment')
    // }
    // increment(){
    //   this.$store.dispatch('increment' , {cCount: 5})
    // }
    addStudent(){
      const stu = {name : 'wangwu' , age : 30};
      this.$store.commit('addStudent' , stu)
    }
  }
}
</script>

<style>

</style>
