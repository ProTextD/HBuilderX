<template>
    <div id="app">
        <div id="backtop">
            <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>
        </div>
        <div id="container">
            <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
                <li v-for="item in items" :key="item" class="infinite-list-item">{{ i }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
        count: 0
      }
    },
    methods: {
      load () {
        this.items += 2
      }
    }
}
</script>

<style scoped>
    
</style>