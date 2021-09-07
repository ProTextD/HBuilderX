<template>
    <div id="app">
      <div id="show1">
         <el-descriptions class="margin-top"  :column="3" :size="size">
            <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
            <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
            <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
            <el-descriptions-item label="备注">
            <!-- <el-tag size="small">学校</el-tag> -->
            *************
            </el-descriptions-item>
            <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
        </el-descriptions>
        <div class="operation">
          <el-button type="success" @click="play()" plain>接单</el-button>
          <el-button type="danger" @click="unplay()" plain>拒绝</el-button>
        </div>
      </div>  
    </div>
</template>

<script>
    export default {
    data () {
      return {
        size: ''
      };
    },
    methods:{
      play(){
        alert('111')
      },
      unplay(){
        alert('222')
      }
    }
  }
</script>

<style scoped>
  #show1{
    margin-top: 20px;
  }
  .operation{
    margin-left: 390px;
  }
</style>