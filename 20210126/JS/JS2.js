function clock(){
    var today = new Date();
    var year=today.getFullYear();
    var month=today.getMonth()+1;
    var day=today.getDate();
    var hours=today.getHours();
    var minutes=today.getMinutes();
    var seconds=today.getSeconds();
    var milliseconds=today.getMilliseconds();

    minutes = checktime(minutes);
    seconds = checktime(seconds);

    var monthNamesEn = [[1,"January"], [2,'February'], [3,'March'], [4,'April'], [5,'May'], [6,'June'],
        [7,'July'], [8,'August'], [9,'September'], [10,'October'], [11,'November'], [12,'December']];
        console.log(monthNamesEn[0][0])
    for(i=0;i<monthNamesEn.length;i++){
        if(month == monthNamesEn[i][0]){
             month = monthNamesEn[i][1];
        }
    }

    var str=month +" " + day + ","+ year+"<br>" + hours +" : "+ minutes+ ": " +seconds +": " + milliseconds;
    var obj=document.getElementById("result").innerHTML=str;
    window.setTimeout("clock()",990);
}
function checktime(i){
    if(i < 10) {
      i = "0" + i;
    }
    return i;
  }