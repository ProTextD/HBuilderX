<template>
    <div id="app">
        <div id="image" class="block">
            <!-- <el-image :src="src"></el-image> -->
            <el-image slot="item-icon-active" src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" alt=""></el-image>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        
    }
  }
}
</script>

<style scoped>
    #image{
        padding:3px 5px;
        box-shadow: 0px -1px 1px  rgba(100, 100, 100, .2);
    }
</style>