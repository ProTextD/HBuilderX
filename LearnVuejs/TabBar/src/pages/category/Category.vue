<template>
    <div id="app">
        <div id="serach">
            <el-input
                placeholder="请输入内容"
            >
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div>
        <div id="leftNavigation">
            <el-container style="height: 500px; border: 1px solid #eee">
                <el-aside width="70px" style="background-color: rgb(238, 241, 246)">
                    <el-menu :default-openeds="['1', '3']">
                        <el-menu-item index="1-1"><router-link to="/Category/showOne">家居</router-link></el-menu-item>
                        <el-menu-item index="1-2">餐厨</el-menu-item>
                        <el-menu-item index="1-3">饮食</el-menu-item>
                        <el-menu-item index="1-4">配件</el-menu-item>
                        <el-menu-item index="2-1">服装</el-menu-item>
                        <el-menu-item index="2-2">婴童</el-menu-item>
                        <el-menu-item index="2-3">杂货</el-menu-item>
                        <el-menu-item index="2-4">洗护</el-menu-item>
                        <el-menu-item index="3-1">志趣</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                        <el-menu-item index="3-3">选项3</el-menu-item>
                        <el-menu-item index="3-4">选项4-1</el-menu-item>
                    </el-menu>
                </el-aside>
                
                <el-container>
                    <router-view></router-view>
                </el-container>
            </el-container>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Category',
    
}
</script>

<style scoped>
    
</style>