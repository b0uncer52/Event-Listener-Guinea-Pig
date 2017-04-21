var gp = document.getElementById("guinea-pig");

document.getElementById("wrapper").addEventListener("click", function(event) {
	if(event.target.id == "add-color") {
		gp.classList.toggle("red");
	}
	if(event.target.id == "make-large") {
		gp.classList.toggle("large");
	}
	if(event.target.id == "add-border") {
		gp.classList.toggle("border");
	}
	if(event.target.id == "add-rounding") {
		gp.classList.toggle("round");
	}
	document.getElementById("output-target").innerHTML = `You clicked the ${event.target.innerHTML} section`;
});

var h1s = document.getElementsByTagName("h1");

for (var i = 0; i < h1s.length; i++) {
	h1s.item(i).addEventListener("mouseover", function(event) {document.getElementById("output-target").innerHTML = "You moved your mouse over the header";});
}

for (var i = 0; i < h1s.length; i++) {
	h1s.item(i).addEventListener("mouseout", function(event) {document.getElementById("output-target").innerHTML = "You left me!!";});
}

document.getElementById("keypress-input").addEventListener("keyup", function(event) {
	document.getElementById("output-target").innerHTML = event.target.value;
})