
var num ="0"
function math(num){
    document.getElementById("in").value += document.getElementById(num).value
    console.log(num)
}

function add(){ 
    document.getElementById("in").value = eval(document.getElementById("in").value)

}