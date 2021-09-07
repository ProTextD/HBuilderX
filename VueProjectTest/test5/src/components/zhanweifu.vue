<template>
    <div id="app">
        <form class="demo" action="post" autocomplete="on">
            <div v-for="item in formItems" :key="item.id" class="form-item">
                <label :for="item.id">{{item.label}}</label>
                <input type="text" :id="item.id" :name="item.id" v-modl="item.value" :placeholder="item.placeholder"/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name : 'zhanweifu',
    data(){
        return{
            formItems:[
                {
                    label : 'First name',
                    id : 'firstName',
                    value : '',
                    placeholder : 'Even'
                },
                {
                    label : 'Last name',
                    id : 'lastName',
                    value : '',
                    placeholder : 'You'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .demo {
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
    /* https://www.w3schools.com/howto/howto_css_placeholder.asp */

    #lastName::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: black;
        opacity: 1; /* Firefox */
    }

    #lastName:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: black;
    }

    #lastName::-ms-input-placeholder { /* Microsoft Edge */
        color: black;
    }
</style>