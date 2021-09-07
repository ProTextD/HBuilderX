<template>
    <div class="tabbar-item" @click="itemClick">
        <div v-if="isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name : 'TabbarItem',
    props:{
        path : String,
        activeColor:{
            type : String,
            default : 'red'
        }
    },
    data(){
        return{
            // isActive : true
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)
        },
        activeStyle(){
            return !this.isActive ? {color : this.activeColor}:{}
        }
    },
    methods:{
        itemClick(){
            this.$router.push(this.path)
        }
    }
}
</script>

<style scoped>
.tabbar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
}
.tabbar-item img{
    width: 32px;
    height: 32px;
    vertical-align: middle;
    margin-bottom: -2px;
}
</style>