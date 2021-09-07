//使用commonjs的模块化规范
const {add , mul} = require('./mathUtils.js')

console.log(add(20 ,30))
console.log(mul(20 , 30))

//使用ES6的模块化规范
import {name , age , height} from "./info"
console.log(name)
console.log(age)
console.log(height)

//在入口文件引用CSS文件
require('./css/normal.css')

//在入口文件引用less文件
require("./css/special.less")

//引入并使用vue
// import Vue from 'vue';
// const app = new Vue({
//     el:'#app',
//     template:`
//     <div>
//         <h2>{{message}}</h2>
//         <button>按钮</button>
//     </div>
//     `,
//     data:{
//         message:'hello webpack'
//     }
// })
import Vue from 'vue';
import App from './app'
const app = new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    }
})