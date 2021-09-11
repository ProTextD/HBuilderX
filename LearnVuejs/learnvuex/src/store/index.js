import Vue from 'vue'
import Vuex from 'vuex'
import {
    INCREMENT
} from '../store/mutation-types'
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        counter : 1000,
        students:[
            {id : 110 , name : 'why' , age : 18},
            {id : 111 , name : 'kobe' , age : 24},
            {id : 112 , name : 'james' , age : 30},
            {id : 113 , name : 'curry' , age : 10},
        ],
        info:{
            name : 'kobe',
            age : 40,
            height : 1.98
        }
    },
    mutations:{
        // increment(state){
        //     state.counter++
        // },
        [INCREMENT](state){
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
        },
        updateInfo(state){
            // state.info.name = 'codewhy'
            // state.info['address'] = '洛杉矶' //可以传进info数组中，但不是响应式的
            // Vue.set(state.info, 'address', '洛杉矶');

            // delete state.info.age //该方式做不到响应式
            Vue.delete(state.info, 'age');

        }
        // updateInfo(state , name){
        //     state.info.name = name
        // }
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