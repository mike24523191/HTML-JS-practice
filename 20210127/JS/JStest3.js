temp= [];
arr = [];
temp2=""
function sqa(){
    temp2 = document.getElementById("txt1").value
    temp = temp2.split("\n",1)
    for(i=0;i<temp.length;i++){
        arr.push(temp[i]);
    }
    console.log(temp)
}


function add(a,b){
    for(var i in a){
        for (var j in a[i]){
            a[i][j] += b[i][j];
        }
    }
   
}
add([[1,2],[3,4]], [[1,1],[1,1]]);