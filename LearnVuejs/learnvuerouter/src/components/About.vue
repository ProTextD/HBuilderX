<template>
    <div>
        <h2>我是关于</h2>
        <p>我是关于内容</p>
    </div>
</template>

<script>
    export default {
        name : "About",
        created(){
            console.log("about created");
        },
        destoryed(){
            console.log("about destoryed");
        }
    }
</script>

<style scoped>

</style>