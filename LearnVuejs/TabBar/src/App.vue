<template>
  <div id="app">
    <router-view></router-view>
    <!-- <tab-bar>
      <tab-bar-item path='/home' activeColor="blue">
          <img slot='item-icon' src="../assets/img/indexb.png" alt="">
          <img slot="item-icon-active" src="../assets/img/首页b.png" alt="">
          <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category' activeColor="blue">
          <img slot="item-icon" src="../assets/img/indexd.png" alt="">
          <img slot="item-icon-active" src="../assets/img/定位b.png" alt="">
          <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart' activeColor="blue">
          <img slot="item-icon" src="../assets/img/indexc.png" alt="">
          <img slot="item-icon-active" src="../assets/img/购物车b.png" alt="">
          <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/my' activeColor="blue">
          <img slot="item-icon" src="../assets/img/indexa.png" alt="">
          <img slot="item-icon-active" src="../assets/img/电话b.png" alt="">
          <div slot="item-text">我的</div>
      </tab-bar-item>

      <tab-bar-item path="/special" activeColor="blue">
          <img slot="item-icon" src="./assets/img/bookstart.png" alt="">
          <img slot="item-icon-active" src="./assets/img/bookend.png" alt="">
          <div slot="item-text">专题</div>
      </tab-bar-item> 

    </tab-bar> -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
// import TabBar from './components/TabBar'
// import TabBarItem from './components/TabBarItem'
import mainTabBar from './components/mainTabBar.vue'
export default {
  name: 'App',
  components:{
    // TabBar,
    // TabBarItem,
    mainTabBar
  }
}
</script>

<style>
  @import './assets/css/base.css';
  #tab-bar{
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0px -1px 1px  rgba(100, 100, 100, .2);
  }
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
</style>
