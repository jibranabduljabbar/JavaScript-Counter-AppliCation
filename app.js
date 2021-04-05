// Counter Application!

counter = 0;

var getCount = document.getElementById('increament&decreament')

function increament(){
counter++
getCount.innerHTML = counter
document.getElementById('off').disabled=false
}
function decreament(){
    counter--
    getCount.innerHTML = counter
    document.getElementById('off').disabled=false
}



function off(){
    counter = 0
    getCount.innerHTML = ''
    document.getElementById('off').disabled=true
    document.getElementById('on').disabled=false
    
}
function on(){
    counter = 0
    getCount.innerHTML = 0
    document.getElementById('on').disabled=true
    document.getElementById('off').disabled=false
}