var name = prompt('What is your name?');
var box = prompt('Which number box? (1-3)');

switch (box) {
	case "1":
	box = 1;
	document.getElementById('one').textContent = name;
	break;

	case "2":
	document.getElementById('two').textContent = name;
	break;

	case "3":
	document.getElementById('three').textContent = name;
	break;
}

document.getElementById("box1").className = "new";
document.getElementById("box2").className = "new";
document.getElementById("box3").className = "new";

document.getElementById("box2").addEventListener("click", function(){
	document.getElementById("box2").children[0].textContent = "Changed!";
});
