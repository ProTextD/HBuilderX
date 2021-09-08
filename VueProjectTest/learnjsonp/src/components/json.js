import handleParam from "./JSONPencapsulate.vue"
function handleParam(data){
    let url = '',
    for(let key in data){
      let varlue = data[key] !== undefined ? data[key] : ''
      url += `&${key}=${encodeURLComponent(value)}`
    }
    return url 
}