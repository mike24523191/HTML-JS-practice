 var spiral = [];
 temp = [];
 arr =[];

QQQ=()=>{
    temp = document.getElementById("in").value;
    temp = temp.split(" ")
    for(i=0;i<temp.length;i++){
        arr.push(temp[i]);
    }
    console.log(temp)
}
stop =()=>{
    spiral.push(arr)
    temp = []
    arr =[]
    console.log(spiral)
    str = "當前全部矩陣:" + "<br>"
    output = ""
    for (i=0;i<spiral.length;i++){
        output += "["
        output += spiral[i]
        output += "]<br>"
    }
    document.getElementById("out1").innerHTML = str + output
    
 }
rasen=()=>{
    temp = [];
    up= 0;
    down = spiral.length-1;
    left = 0;
    right = spiral[0].length-1;
    x=0;
    y=0;

    for(;left <= right && up <= down;){
        for(y=left;y<=right;y++){
            temp += spiral[x][y]+=","
        }
        y--
        up++
        for(x=up; x <= down;x++){
            temp += spiral[x][y]+=","
        }
        x--
        right--
        for(y=right;y >= left; y--){
            temp += spiral[x][y]+=","
        }
        y++
        down--
        for(x = down; x >= up;x--){
            temp+=spiral[x][y]+=","
        }
        x++
        left++
    }
    document.getElementById("out2").innerHTML = temp
}