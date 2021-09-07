<template>
  <div>
    <h2>第三方动画库</h2>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition 
        name="animate__animated animate__bounce"
        appear
        enter-active-class='animate__swing'
        leave-active-class="animate__backOutDown"
     >
      <h1 v-show="isShow" key="1">你好啊</h1>
    </transition>
  </div>
</template>

<script>
 import 'animate.css'
export default {
  name: "Test3",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background: orange;
}
</style>
