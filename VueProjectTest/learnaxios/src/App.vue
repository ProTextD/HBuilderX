<template>
  <div id="app">
    
  </div>
</template>

<script>
import {getListAPI , postFormAPI , putSomeAPI , deleteListAPI} from './api/api'

import api from './api/api'
export default {
  name: 'App',
  // 方法一：用到哪个api 就调用哪个接口——适用于上文接口分类导出；
  methods:{
    //promise调用，链式调用， getList()括号内只接受参数；
    //   get不传参
    getList(){
      getListAPI().then(res => console.log(res)).catch(err => console.log(err))
    },
    //post传参
    postFrom(formData){
      let data = formData
      postFormAPI(data).then(res => console.log(res)).catch(err => console.log(err))
    },

    //async await同步调用
    async postForm(formData){
      const postRes = await postFormAPI(formData)
      const putRes = await putSomeAPI({data : 'putTest'})
      const deleteRes = await deleteListAPI(formData.name)
      //数据处理
      console.log(postRes)
      console.log(putRes)
      console.log(deleteRes)
    }
  }

  // methods:{
  //   getList(){
  //     api.getListAPI(data).then(res=>{
  //       //数据处理
  //     }).catch(err => console.log(err))
  //   }
  // }
}
</script>

<style>

</style>
