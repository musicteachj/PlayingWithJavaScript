
document.getElementById("buttonWork").addEventListener("click", function() {
document.getElementById("buttonDiv").className = "hidden";
document.querySelector(".jumbotron").className = "jumbotron";
document.querySelector(".container").className = "container";

var name = prompt('What is your name?');
var box = prompt('Which number box? (1-3)');

while (isNaN(box) || box >= 4 || box <= 0) {
	var box = prompt('Please enter a number between 1-3');
}

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




// document.getElementById("box1").className = "new";
// document.getElementById("box2").className = "new";
// document.getElementById("box3").className = "new";

document.getElementById("box" + box).addEventListener("click", function(){
	document.getElementById("box" + box).children[0].textContent = "Changed!";
	document.getElementById("box" + box).className = "new";
});

var node = document.createElement("H1");                 // Create a <li> node
var textnode = document.createTextNode("Click your name");         // Create a text node
node.appendChild(textnode);
node.classList.add("display-4");                              // Append the text to <li>
document.querySelector(".jumbotron").appendChild(node);

});



