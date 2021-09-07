<template>
    <div>
        <h2>{{counter}}</h2>
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
    </div>
</template>

<script>

export default {
    name:"HelloVuex",
    data(){
    return {
      message:'我是App组件',
      counter:1000
    }
  },
  
  methods:{
    add(){
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    }
  }
}
</script>

<style scoped>
    
</style>