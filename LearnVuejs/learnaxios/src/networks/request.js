import axios from 'axios'

export function request(config){
    //1、创建axios实例
    const instance = axios.create({
        baseURL : 'http://123.207.32.3:8000',
        timeout : 5000
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