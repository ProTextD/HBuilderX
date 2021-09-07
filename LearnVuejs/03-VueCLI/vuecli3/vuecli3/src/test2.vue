<template>
  <div>
    <h2>过度效果效果</h2>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="hello" appear>
      <h1 v-show="isShow" key="1">你好啊</h1>
      <h1 v-show="isShow" key="2">你也好啊</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test2",
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
/* 进入的起点 */
.hello-enter {
  transform: translateX(-100%);
}
/* 进入的终点 */
.hello-enter-to {
  transform: translateX(0);
}
/* 进入时激活的样式 */
.hello-enter-active {
  transition: 0.5s linear;
}
/* 离开时激活的样式 */
.hello-leave-active {
  transition: 0.5s linear;
}
/* 离开的起点 */
.hello-leave {
  transform: translateX(0);
}
/* 离开的终点 */
.hello-leave-to {
  transform: translateX(-100%);
}
</style>
