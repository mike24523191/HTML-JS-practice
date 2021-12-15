var JSON_string = { "data":[
      {"name":"A-BE","phone":"0929-789456","age":"2",},
      {"name":"Choco","phone":"0912-985412","age":"4"},
      {"name":"Taide","phone":"0800-092000","age":"3"}]
       };

console.log(JSON_string["data"]);


function google() {


    firefox=["score1","score2","score3"];
    for(i=0;i<firefox.length;i++){
        JSON_string["data"][i]["key"] = firefox[i]
    }

    console.log(JSON_string)
}

    

