<template>
    <div id="app">
        <h2>I am Foo</h2>
        <p>hello thisWorld</p>
        <router-link to="/foo/fooSecound"><button>Show Foo</button></router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Foo'
}
</script>

<style scoped>
    
</style>