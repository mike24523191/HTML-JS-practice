mos=()=>{
    temp = ""
    var inside = []
    var inside2 = []
    inside = document.getElementById("inside").value
    inside2 = inside.split(" ");
   var anymos=[
   ["A",".-"],["B","-..."],["C","-.-."],["D","-.."],
   ["E","."],["F","..-."],["G","--."],["H","...."],
   ["I",".."],["J",".---"],["K","-.-"],["L",".-.."],
   ["M","--"],["N","-."],["O","---"],["P",".--."],
   ["Q","--.-"],["R",".-."],["S","..."],["T","-"],
   ["U","..-"],["V","...-"],["W",".--"],["X","-..-"],
   ["Y","-.--"],["Z","--.."]];
   for (i=0;i<inside.length+1;i++) {
       for(k=0;k<26;k++){
           if(anymos[k][0] == inside[i]){
               temp += anymos[k][1]
           }
           else if(anymos[k][1] == inside2[i]){
               temp += anymos[k][0]
           }
           else{}
       }
      
   }
   document.getElementById("out").innerHTML = temp;
}