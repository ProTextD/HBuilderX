<template>
    <div id="app">
        <form class="demo" method="post" autocomplete="on">
            <div class="form-item">
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" v-model="name"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name : 'biaoqian',
    data(){
        return{
            name : '',
        }
    }
}
</script>