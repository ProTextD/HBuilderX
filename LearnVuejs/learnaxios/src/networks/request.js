import axios from 'axios'

export function request(config){
    //1、创建axios实例
    const instance = axios.create({
        baseURL : 'http://123.207.32.32:8000',
        timeout : 5000
    })

    //2、axios的拦截器
    // axios.interceptors //全局的拦截器
    // instance.interceptors //实例拦截器
    //2.1. 请求拦截的作用
    instance.interceptors.request.use(config =>{ //对请求的拦截
        console.log(config)
        //1、比如config中的一些信息不符合服务器的要求

        //2、比如每次发送网络请求时，都希望在界面中显示一个请求的图标

        //3、某些网络请求(比如登录(token)),必须携带一些特殊的信息
        return config //一定要把config返回出去，否则被中断拦截，不能正常响应
    } , err =>{
        console.log(err)
    })

    //2.2. 响应拦截
    instance.interceptors.response.use(res =>{
        console.log(res)
        return res.data
    } , err =>{
        console.log(err)
    })

    //发送真正的网络请求
    return instance(config) //返回的是一个Promise对象
}

//3、

// export function request(config){
//     return new Promise((resolve , reject) =>{
//         //1、创建axios实例
//         const instance = axios.create({
//             baseURL : 'http://123.207.32.3:8000',
//             timeout : 5000
//         })

//         //发送真正的网络请求
//         instance(config)
//             .then(res =>{
//                 resolve(res)
//             }).catch(err =>{
//                 reject(err)
//             })
//     })
// }

//2、

// export function request(config){
//     //1、创建axios实例
//     const instance = axios.create({
//         baseURL : 'http://123.207.32.3:8000',
//         timeout : 5000
//     })

//     //发送真正的网络请求
//     instance(config.baseConfig)
//         .then(res =>{
//             // console.log(res)
//             config.success(res)
//         }).catch(err =>{
//             // console.log(err)
//             config.failure(err)
//         })
// }

//1、

// export function request(config , success , failure){
//     //1、创建axios实例
//     const instance = axios.create({
//         baseURL : 'http://123.207.32.3:8000',
//         timeout : 5000
//     })

//     //发送真正的网络请求
//     instance(config)
//         .then(res =>{
//             // console.log(res)
//             success(res)
//         }).catch(err =>{
//             // console.log(err)
//             failure(err)
//         })
// }