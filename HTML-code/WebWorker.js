var i = 0;
function timeCounter(){
    i += 1
    postMessage(i)
    setTimeout("timeCounter" , 500)
}
timeCounter()