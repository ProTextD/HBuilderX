export default{
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