<template>
  <div>
      <h2>动画效果</h2>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <transition name='hello' appear>
        <h1 v-show="isShow">你好啊</h1>
      </transition>
  </div>
</template>

<script>
export default {
    name:'Test',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style scoped>
    h1 {
        background: orange;
    }
    /* 只有一个不用命名的写法 */
    /* .v-enter-active {
        animation: move .5s;
    }
    .v-leave-active {
        animation: move .5s reverse; 
    } */
    /* 命名的写法 */
    .hello-enter-active {
        animation: move .5s;
    }
    .hello-leave-active {
        animation: move .5s reverse; 
    }
    @keyframes move {
        from{
            transform: translateX(-100px);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>
