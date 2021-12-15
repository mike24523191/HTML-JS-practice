function annsi(){
    amount=""
    members=[];
    amount= document.getElementById("in").value 
    members = document.getElementById("in").value
    amount= amount.split("\n",1)
    members =members.split("\n")
    members =members.splice(0,1);
    console.log(amount)
    console.log(members)
}