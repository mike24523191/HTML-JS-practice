city=()=>{
    temp = ""
    var inside =[]
    inside = document.getElementById("inside").value
   var anycity=[["A",1,0],["B",1,1],["C",1,2],["D",1,3]
   ,["E",1,4],["F",1,5],["G",1,6],["H",1,7],["I",3,4],["J",1,8]
   ,["K",1,9],["L",2,0],["M",2,1],["N",2,2],["O",3,5],["P",2,3],["Q",2,4],["R",2,5],
   ["S",2,6],["T",2,7],["U",2,8],["V",2,9],["W",3,2],["X",3,0],["Y",3,1],["Z",3,3]];
   for (i=0;i<anycity.length;i++) {
       if(anycity[i][0] == inside[0]){
           temp = anycity[i][1]+anycity[i][2]*9+inside[1]*8+inside[2]*7+inside[3]*6+inside[4]*5+inside[5]*4+inside[6]*3+inside[7]*2+inside[8]*1+inside[9]*1
       }
   }
   if(temp%10 == 0){
       temp= "real"
   }
   else{
       temp="fake"
   }
   document.getElementById("out").innerHTML = document.getElementById("inside").value
   document.getElementById("out2").innerHTML = temp;
}