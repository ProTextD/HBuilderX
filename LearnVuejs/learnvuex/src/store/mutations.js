import Vue from 'vue'
import {INCREMENT} from './mutation-types'
export default{
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
}