<template>
    <div id="app" class="demo">
        <h1>Simple Form</h1>
        <form method="post" autocomplete="on">
            <div v-for="item in formItems" :key="item.id" class="from-item" >
                <label :for="item.id">{{item.label}}</label>
                <input 
                    :type="item.type"
                    :id="item.id"
                    :name="item.id"
                    v-model="item.value"
                >
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name:'biaodan',
    data(){
        return{
            formItems:[
                {
                    label:"First name",
                    id:"first-name",
                    type : 'text',
                    value : ''
                },
                {
                    label:"Last name",
                    id:"last-name",
                    type : 'text',
                    value : ''
                },
                {
                    label : 'Email',
                    id:"email",
                    type : 'email',
                    value:''
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
</style>