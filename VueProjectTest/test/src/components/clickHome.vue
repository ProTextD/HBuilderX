<template>
    <div id="app">
        <button @click="goBack()">goBack</button>
        <div id="userInfo">
            <input type="text" ref="username" placeholder="请输入用户名:" @blur="inputChange()"><br>
            <input type="password" ref="password" placeholder="请输入密码:" @blur="pwdChange()"><br>
            <input type="submit" value="提交" >
        </div>
    </div>
    
</template>

<script>
export default {
    name : 'clickHome',
    methods:{
        goBack(){
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        inputChange(){
            console.log(this.$refs.username.value)
            if(this.$refs.username.value == ""){
                alert('用户名不能为空!')
            }
        },
        pwdChange(){
            console.log(this.$refs.password.value)
            if(this.$refs.password.value == ""){
                alert('密码不能为空!')
            }
        },
    },
    //组件内的守卫
    beforeRouteLeave (to, from, next) {
            const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
            if (answer) {
                next()
            } else {
                next(false)
            }
        }
}
</script>

<style scoped>
    
</style>