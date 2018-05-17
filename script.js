// Grabs button, initiates class changes (hidden) and starts prompt
document.getElementById("buttonWork").addEventListener("click", function() {
// Change classes
document.getElementById("buttonDiv").className = "hidden";
document.querySelector(".jumbotron").className = "jumbotron";
document.querySelector(".container").className = "container";

// Prompt queries
var name = prompt('What is your name?');
var box = prompt('Which number box? (1-3)');

// If user enters not a number 1-3, prompts again
while (isNaN(box) || box >= 4 || box <= 0) {
	var box = prompt('Please enter a number between 1-3');
}

// Attaches user's box choice to same div
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

// Grabs div with user's input box number, clicked and initiates
document.getElementById("box" + box).addEventListener("click", function(){
	// Grabs 1st child and changes text
	document.getElementById("box" + box).children[0].textContent = "Changed!";
	// Grabs user's box and adds "new" style class and rules
	document.getElementById("box" + box).className = "new";
});

// Appending Element not already in HTML file
var node = document.createElement("H1");
// Give text to Node
var textnode = document.createTextNode("Click your name");
node.appendChild(textnode);
// Add class
node.classList.add("display-4");
// Insert Node
document.querySelector(".jumbotron").appendChild(node);

});



