<template>
    <div id="app">
        <tab-bar>
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
            <!-- <tab-bar-item path="/special" activeColor="blue">
                <img slot="item-icon" src="./assets/img/bookstart.png" alt="">
                <img slot="item-icon-active" src="./assets/img/bookend.png" alt="">
                <div slot="item-text">专题</div>
            </tab-bar-item> -->
        </tab-bar>
    </div>
</template>

<script>
import TabBar from '../components/TabBar.vue'
import TabBarItem from '../components/TabBarItem.vue'
export default {
    name : 'mainTabBar',
    components:{
        TabBar,
        TabBarItem
    }
}
</script>