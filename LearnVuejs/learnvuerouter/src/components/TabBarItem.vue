<template>
    <div id="tab-bar-item" @click="itemClick">
        <div class="item-icon" v-if="isActive"><slot name="icon"></slot></div>
        <div class="item-active-icon" v-if="!isActive"><slot name="active-icon"></slot></div>
        <div class="item-text" :style="activeStyle"><slot name="text"></slot></div>
    </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
        link:{
            type:String,
            required : true
        },
        activeColor:{
            type:String,
            default:'#ff5777'
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.link) === -1
        },
        activeStyle(){
            return this.isActive ? {} : {'color' : this.activeColor}
        }
    },
    methods:{
        itemCllick(){
            this.$router.replace(this.link)
        }
    }
}
</script>