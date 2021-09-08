let count = 1
export default function originPJSONP(option){
    //1.从传入的option中提取URL
    const url = option.url;

    //2.在body中添加script标签
    const body = document.getElementsByTagName('body')[0]
    const script = document.createElement('script')

    //3.内部产生一个不重复的callback
    const callback = 'jsonp' + count++

    //4.监听window上的jsonp的调用
    return new Promise((reslove , reject)=>{
        try{
            window[callback] = function (result){
                body.removeChild(script)
                reslove(result)
            }
            const params = handleParam(option.data)
            script.src = url + '?callback=' + callback + params
            body.appendChild(script) 
        }catch(e){
            body.removeChild(script)
            reject(e)
        }
    })
}