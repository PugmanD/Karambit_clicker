function add(){
	if (Karambits == 20000){
		window.alert("You have won the game! THX for playing")
	}
	Karambits += AmmountClick;
	document.title = Karambits + " Karambits";
	document.getElementById('karambit_count').innerHTML = "Karambits: " + Karambits;
}
function buy1(){
	if (Karambits >= 20){
		Karambits -= 20;
		AutoClicks += 1;
		update();
	}
}
function buy10(){
	if (Karambits >= 150){
		Karambits -= 150;
		AutoClicks += 10;
		update();
	}
}
function GetAutoClicks(){
	if (AutoClicks > 0){
		Karambits += AutoClicks;
	}
}
setInterval(GetAutoClicks, 1000);
function update(){
	document.getElementById('karambit_count').innerHTML = "Karambits: " + Karambits;
	document.getElementById('own').innerHTML = "You Own " + AutoClicks + " Auto Clickers";
	document.title = Karambits + " Karambits";
}
setInterval(update, 1);
function buyClick(){
	if (Karambits >= 10000){
		Karambits -= 10000
		AmmountClick += 1;
	}
}
