<template>
    <div>
        <h2>我是首页</h2>
        <p>我是首页内容</p>
        <!--简化前，需要写完整的路径-->
        <!-- <router-link to="/home/news">新闻</router-link> -->
        <!--简化后，直接通过名字跳转-->
        <!-- <router-link :to="{name : 'News'}">新闻</router-link> -->
        <!--简化写法配合传递参数-->
        <!-- <router-link 
        :to="{
            name : 'News',
            query:{
                id : 666,
                title : 'helloWorld'
            }
        }">新闻</router-link> -->
        <router-link to="/home/news">新闻</router-link>
        <router-link to="/home/message">消息</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name : "Home",
        data(){
            return{
                path : '/home/news'
            }
        },
        // mounted(){
        //     document.title = "首页"
        // }
        // created(){
        //     console.log("home created");
        // },
        // destoryed(){
        //     console.log("home destoryed");
        // }
        activated(){
                this.$router.push(this.path)
            },
        beforeRouteLeave(to , from , next){
            this.path = this.$route.path
            next()
        }
    }
    
</script>

<style scoped>

</style>