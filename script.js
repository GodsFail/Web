var button = document.getElementById("But");
var count=0;
var cels = document.getElementById("cels");
var far = document.getElementById("far");
function scetcik(){
	count++;
	console.log("Кол-во нажатий" + count + "лада"); 
	var temp = Number(cels.value);
	far.value  = 9/5*temp + 32;
}
button.addEventListener("click", scetcik);