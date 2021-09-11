<template>
  <div id="app">
    <h2>-------App内容:modules中的内容</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>

    <h2>-------App内容:查看info的内容是否是响应式的</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>-------App内容--------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addtion">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>-------App内容: getters相关信息---------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h5>所有学生</h5>
    <h2>{{$store.state.students}}</h2>
    <h5>年龄大于20的学生</h5>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h5>获取指定年龄的学生</h5>
    <h2>{{$store.getters.moreAgeStu(12)}}</h2>

    <h2>-------Hello Vuex 内容----------</h2>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import helloVuex from './components/hellovuex.vue'
import {
  INCREMENT
} from './store/mutation-types'
export default {
  name: 'App',
  components:{
    helloVuex
  },
  // computed:{
  //   more20stu(){
  //     // return this.$store.state.students.filter(s => {
  //     //   return s.age > 20
  //     // })
  //     return this.$store.state.students.filter(s => s.age > 20)
  //   }
  // },
  methods:{
    // addtion(){
    //   this.$store.commit('increment')
    // },
    addtion(){
      this.$store.commit(INCREMENT)
    },
    subtraction(){
      this.$store.commit('decrement')
    },
    addCount(count){
      //普通的提交风格
      // this.$store.commit('incrementCount' , count)
      //特殊的提交风格
      this.$store.commit({
        type : 'incrementCount',
        count
      })
    },
    addStudent(){
      const stu = {id : 114 , name : 'alen' , age : 35}
      this.$store.commit('addStudent' , stu)
    },
    // updateInfo(){
    //   const name = 'codewhy'
    //   this.$store.commit('updateInfo' , name)
    // },
    updateInfo(){
      // this.$store.commit('updateInfo')
      // this.$store.dispatch('aUpdateInfo' , {
      //   message : '我是携带的信息',
      //   success : ()=>{
      //     console.log('操作已经完成了')
      //   }
      // })

      this.$store.dispatch('aUpdateInfo' , '我是携带的信息').then(res =>{
        console.log('操作已经完成了')
        console.log(res)
      })
    },
    updateName(){
      this.$store.commit('updateName' , 'wangwu')
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>

</style>
