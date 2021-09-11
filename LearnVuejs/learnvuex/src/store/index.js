import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        counter : 1000,
        students:[
            {id : 110 , name : 'why' , age : 18},
            {id : 111 , name : 'kobe' , age : 24},
            {id : 112 , name : 'james' , age : 30},
            {id : 113 , name : 'curry' , age : 10},
        ]
    },
    mutations:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        // incrementCount(state , count){
        //     console.log(count)
        //     state.counter += count
        // },
        incrementCount(state , payload){
            console.log(payload)  //这里的payload不是一个数，而是一个对象
            state.counter += payload.count
        },
        addStudent(state , stu){
            state.students.push(stu)
        }
    },
    actions:{

    },
    getters:{
        powerCounter(state){
            return state.counter * state.counter
        },
        more20stu(state){
            return state.students.filter(s => s.age > 20)
        },
        more20stuLength(state , getters){
            return getters.more20stu.length
        },
        moreAgeStu(state){
            // return function(age){
            //     return state.students.filter(s => s.age > age)
            // }
            return age => {
                return state.students.filter(s => s.age > age)
            }
        }
    },
    modules:{

    }
})

export default store