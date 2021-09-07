<template>
    <div id="app">
        <div id="serach">
            <el-input
                placeholder="请输入内容"
            >
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div>
        <div id="pictureShow">
            <div class="block">
                <el-carousel trigger="click" height="150px">
                <!-- <el-carousel-item v-for="item in items" :key="item">
                    <h3 class="small">{{ item }}</h3>
                </el-carousel-item> -->
                <el-carousel-item>
                    <img src="/LearnVuejs/tabbar/src/assets/img/indexa.png" alt="" class="carousel_image_type">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="/LearnVuejs/tabbar/src/assets/img/indexb.png" alt="" class="carousel_image_type">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="/LearnVuejs/tabbar/src/assets/img/indexc.png" alt="" class="carousel_image_type">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="/LearnVuejs/tabbar/src/assets/img/indexd.png" alt="" class="carousel_image_type">
                </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  .carousel_image_type{
      width: 100%;
  }
</style>