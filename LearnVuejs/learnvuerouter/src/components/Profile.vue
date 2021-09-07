<template>
    <div>
        <h2>我是Profile组件</h2>
        <!-- <h2>{{$route.query}}</h2>
        <h2>{{$route.query.name}}</h2>
        <h2>{{$route.query.age}}</h2>
        <h2>{{$route.query.height}}</h2> -->
        <h2>{{query}}</h2>
        <h2>{{name}}</h2>
        <h2>{{age}}</h2>
        <h2>{{height}}</h2>

    </div>
</template>

<script>
export default {
    name:"Profile",
    props:['query' , 'name' , 'age' , 'height'],
    created(){
        console.log("profile created");
    },
    destoryed(){
        console.log("profile destoryed");
    }
}
</script>

<style scoped>

</style>