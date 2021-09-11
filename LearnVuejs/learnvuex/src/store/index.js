import Vue from 'vue'
import Vuex from 'vuex'
import {
    INCREMENT
} from '../store/mutation-types'
Vue.use(Vuex);

const moduleA = {
    state:{
        name : 'zhangsan'
    },
    mutations:{
        updateName(state , payload){
            state.name = payload
        }
    },
    getters:{
        fullname(state){
            return state.name + '111'
        },
        fullname2(state , getters){
            return getters.fullname + '222'
        },
        fullname3(state , getters , rootState){
            return getters.fullname2 + rootState.counter
        }
    },
    actions:{
        aUpdateName(context){
            console.log(context)
            setTimeout(() => {
                context.commit('updateName' , 'zhaoliu') //这里的context只会匹配到模块本身的mutations
            }, 1000);
        }
    }
    
}

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
            state.info.name = 'codewhy'

            // setTimeout(() => {
            //     state.info.name = 'codewhy' //因为是在mutation中进行异步操作 所以可以更新信息，但是devtools追踪不到属性的更改
            // }, 1000);

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
        //context 上下文
        // aUpdateInfo(context , payload){
        //     setTimeout(() => {
        //         context.commit('updateInfo')
        //         console.log(payload.message)
        //         payload.success()
        //     }, 1000);
        // },
        aUpdateInfo(context , payload){
            return new Promise((resolve , reject)=>{
                setTimeout(() => {
                    context.commit('updateInfo')
                    console.log(payload)
                    resolve('11111')
                }, 1000);
            })
        }

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
        a : moduleA //a被放入store的state中
    }
})

export default store