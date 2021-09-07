<template>
  <div id="app">
    <router-link to="/biaodan" tag="button">表单</router-link>
    <router-link to="/biaoqian" tag="button">标签</router-link>
    <router-link to="/ariaLabel" tag="button">aria-label</router-link>
    <router-link to="/ariaLabelledby" tag="button">aria-labelledby</router-link>
    <!-- <router-link to="/zhanweifu" tag="button">占位符</router-link> -->
    <router-link to="/currentDate" tag="button">currentDate</router-link>
    <router-view></router-view>

    <!-- <Suspense>
      <template #default>
        <async-show></async-show>
      </template>
      <template #fallback>
        <h1>loading...</h1>
      </template>
    </Suspense> -->
  </div>
</template>

<script>
import {onUnmounted,ref, computed,watch,reactive, toRefs,onMounted,onUpdated,onRenderTriggered} from "vue";
import AsyncShow from './components/AsyncShow.vue'
export default {
  name: 'App',
  component : {
    AsyncShow
  },
  setup(){
    return{

    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

