<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <!-- 不推荐使用 -->
    <!-- <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter--">-</button> -->
  </div>
</template>

<script>
  export default {
    name: "HelloVuex"
  }
</script>

<style scoped>

</style>
