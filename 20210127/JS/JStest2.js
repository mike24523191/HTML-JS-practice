var sam=[["A","B","D","E","C"],
         ["S","E","D","I","F"],
         ["B","V","X","A","D"],
         ["Z","Y","Q","K","R"],
         ["G","L","C","M","N"]
]
temp = []
arr=[]
function load(){
    output=""
    for(i=0;i<sam.length;i++){
        output += "["
        output += sam[i]
        output += "]<br>"
    } 
    document.getElementById("out1").innerHTML = output
}
QQ=()=>{
    temp = document.getElementById("in").value;
    temp = temp.split("")
    for(i=0;i<temp.length;i++){
        arr.push(temp[i]);
    }
    console.log(arr);

    for(k=0;k<sam.length;k++){
        for(j=0;j<sam[j].length;j++){
            if(arr[j]==sam[k][j]){
                console.log("yes")
            }
            else{
                console.log("NO")
                break
            }
        }
    }
    arr=[]
}

