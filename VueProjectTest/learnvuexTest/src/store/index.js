import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    counter : 1000,
    students:[
      {name : "zhangsan" , age : 18},
      {name : "lisi" , age : 20},
      {name : "wangwu" , age : 10}
    ],
    info:{
      "name" : "why" , "age" : 18
    }
  },
  mutations:{
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    // incrementCount(state , count){
    //   console.log(count)  这里的count不是一个数，而是一个对象
    //   // state.counter += count
    // },
    incrementCount(state , payload){
      state.counter += payload.count
    },
    // updateInfo(state , payload){
    //   // state.info['height'] = payload.height
    //   //方式一:Vue.set()
    //   // Vue.set(state.info , 'height' , payload.height)
    //   //方式二:给info赋值一个新的对象
    //   state.info = {...state.info , 'height' : payload.height}
    // }
    [types.UPDATE_INFO] (state , payload){
      state.info = {...state.info , 'height' : payload.height}

      //当进行异步操作时，无法追踪到state中的info数据改变
      // setTimeout(()=>{
      //   state.info = {...state.info , 'height' : payload.height}
      // },5000)
    },
    // increment(state , payload){
    //   state.count += payload.cCount
    // }
    addStudent(state , stu){
      state.students.push(stu)
    }
  },
  //Action类似于Mutation, 但是是用来代替Mutation进行异步操作的.
  actions:{
    // increment(context){
    //   context.commit('increment')
    // }
    increment(context , payload){
      setTimeout(() => {
        context.commit('increment' , payload)
      }, 5000);
    }
  },
  getters:{
    mul(state){
      return state.counter * state.counter
    },
    getAge(state){
      return state.students.filter(s => s.age > 10)
    },
    getAgeLength(state,getters){
      return getters.getAge.length
    },
    getAgeInput(state){
      // return function(age){
      //   return state.students.filter(s => s.age > age)
      // }
      //箭头函数
      return age =>{
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules:{}
})

export default store
