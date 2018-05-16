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
