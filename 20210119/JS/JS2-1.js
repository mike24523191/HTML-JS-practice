function one(){
    temp=""
for(i=1;i<=5;i++){
    for(j=1;j<=5;j++){
        temp +="*"+"&nbsp;"
    }
    temp+="<br>"
}
document.getElementById("star").innerHTML = temp
}
function two(){
    n=document.getElementById("n").value
    temp=""
    for(i=1;i<=n;i++){
        for(j=1;j<=i;j++){
            temp +="*"+"&nbsp;"
        }
        temp+="<br>" 
    }
    document.getElementById("star2").innerHTML = temp
}
function thr(){
    t=document.getElementById("t").value
    temp=""
    for(i=1;i<=t;i++){
        for(j=1;j<=t-i;j++){
            temp +="&nbsp;"
        }
        for(k=1;k<=i;k++){
            temp +="*"+"&nbsp;"
        }
        temp+="<br>" 
    }
    document.getElementById("star3").innerHTML = temp
}
function four(){
    temp=""
    for(i=0;i<=4;i++){

        for(k=0;k<=4;k++){
           if(i==0 || i==4 || k==0||k==4){
            temp +="*"
           }
           else{
            temp +="&nbsp&nbsp"
           }
        }
        temp+="<br>"
    document.getElementById("star4").innerHTML = temp
   }
} 
function five(){
    temp=""
    for(i=1;i<=5;i++){
        for(j=1;j<=i;j++){
            if(j==1 ||i==5 || j==i){
                temp +="*"+"&nbsp;"
            }
            else{
                temp +="&nbsp;&nbsp;&nbsp;"
            }
            }
        temp+="<br>" 
    }
    document.getElementById("star5").innerHTML = temp
}
