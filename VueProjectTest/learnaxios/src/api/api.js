import http from '../utils/http'
//写法一：适合分类导出
/**
 *  @parms resquest 请求地址 例如：http://127.0.0.1:8080/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let request = '/testIp/request/'

//get请求
export function getListAPI(params){
    return http.get(`${request}/getList.json`,params)
}
//post请求
export function postFormAPI(params){
    return http.post(`${request}/postForm.json`,params)
}
//put请求
export function putSomeAPI(params){
    return http.put(`${request}/putSome.json`,params)
}
//delete请求
export function deleteListAPI(params){
    return http.put(`${request}/deleteList.json`,params)
}

// 写法二：使用全部导出
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */

// let request = '/testIp/request/'

// //get请求
// export default{
//     getListAPI(params){
//         return http.get(`${request}/getList.json`,params)
//     },
//     postFormAPI(params){
//         return http.postFormAPI(`${request}/postForm.json`,params)
//     }
// }
