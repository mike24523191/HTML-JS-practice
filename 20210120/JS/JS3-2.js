var main=[12,3,5,53,12,53,47];
var main2=[12,3,5,53,12,53,47];
var main3=[];
main2=main
main3=main2

piu=()=>{
    var max = main[0];
    var min = main[0]
    for(i=0;i<main.length;i++){
        if(max<main[i])
        max=main[i]  
    }
    for(i=0;i<main.length;i++){
        if(min>main[i])
        min=main[i]
    }
    document.getElementById("out").innerHTML=main
    document.getElementById("out2").innerHTML=max
    document.getElementById("out3").innerHTML=min

    
    main_arr=main3

    for(var i=0;i<=main_arr.length-1;i++){
        for(var j=0;j<main_arr.length-1-i;j++){
            if(main_arr[j]>main_arr[j+1]){
                main_arr[j]^=main_arr[j+1];
                main_arr[j+1]^=main_arr[j];
                main_arr[j]^=main_arr[j+1];
            }
        }
    }
    document.getElementById("out4").innerHTML=main_arr
    
    search=document.getElementById("search").value-1
    document.getElementById("out5").innerHTML=main[search]

    reversed = main2.reverse();
    document.getElementById("out6").innerHTML=reversed

    var sum=0;
    var sum2=0;
    main.forEach(function(element) {
        sum += element;
        
    });
    sum2=sum
    document.getElementById("out7").innerHTML=sum2
}
input=()=>{
    temp="";
    temp = document.getElementById("koko").value;
    parseInt(temp)
    main.push(temp)

}
sasukenote=()=>{
    temp = document.getElementById("koko").value
    parseInt(temp)
    for(i=0;i<main.length+1;i++){
        if(main[i] == temp)
        main.splice(i,1);
    }

}

