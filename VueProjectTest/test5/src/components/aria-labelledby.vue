<template>
    <div id="app">
        <form class="demo" method="post" autocomplete="on">
            <h1 id="billing">Billing</h1>
            <div class="form-item">
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" v-model="name" aria-labelledby="billing name">
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name : 'ariaLabelledby',
    data(){
        return{
            name : ''
        }
    }
}
</script>