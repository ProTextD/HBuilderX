<template>
    <h1>{{result}}</h1>
</template>

<script>
import {defineComponent} from 'vue'
export default  ({
    name : 'AsyncShow',
    setup(){
        return new Promise((resolve)=>{
            setTimeout(() => {
                return resolve({
                    result : 23
                })
            }, 3000);
        })
    }
})
</script>