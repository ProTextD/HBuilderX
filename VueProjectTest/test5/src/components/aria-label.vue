<template>
    <div id="app">
        <form class="demo" method="post" autocomplete="on">
            <div class="form-item">
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" v-model="name" :aria-label="nameLabel"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name : 'ariaLabel',
    data(){
        return{
            name : '',
            nameLabel : 'This label will take over the accessible name'
        }
    }
}
</script>

<style scoped>
    .demo{
        font-family: sans-serif;
        border: 1px solid #eee;
        border-radius: 2px;
        padding: 20px 30px;
        margin-top: 1em;
        margin-bottom: 40px;
        user-select: none;
        overflow-x: auto;
    }
    .form-item {
        margin: 1em auto;
    }

    .form-item label {
        display: block;
    }

    button {
        font-size: 1em;
    }
</style>