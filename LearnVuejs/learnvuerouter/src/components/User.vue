<template>
    <div>
        <h2>我是用户信息</h2>
        <h2>{{userId}}</h2>
        <!-- <h2>{{a}}</h2> -->
        <p>我是用户内容</p>
    </div>
</template>

<script>
export default {
    name:"User",
    //对应第一种写法
    // props:['a'],
    //对应第二种写法
    props:['userId'],
    created(){
        console.log("user created");
    },
    destoryed(){
        console.log("user destoryed");
    }

    // computed:{
    //     userId(){
    //         return this.$route.params.userId
    //     }
    // }
}
</script>

<style scoped>

</style>