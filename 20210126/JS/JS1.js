function keyFunction() {
	// 若不加第二個條件，會印出兩次警告視窗
	// 一次是按 Shift，第二次是按其他鍵
	if ((event.shiftKey) && (event.keyCode!=16))	
		alert("Shift + "+String.fromCharCode(event.keyCode));
	if ((event.ctrlKey) && (event.keyCode!=17))
		alert("Ctrl + "+String.fromCharCode(event.keyCode));
	if ((event.altKey) && (event.keyCode!=18))
		alert("Alt + "+String.fromCharCode(event.keyCode));
}
document.onkeydown=keyFunction;