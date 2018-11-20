var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
let generate = document.getElementById("generate");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
  var btn = document.createElement("button");
  li.appendChild(btn);
 btn.appendChild(document.createTextNode("Delete"));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function addConsoleFeedback() {
	console.log("working");
}

ul.onclick=function(event){
	var target=event.target;
  if(target.tagName == 'LI'){
     target.classList.toggle("done");
  } else if(target.tagName == 'BUTTON'){
  	target.parentNode.remove();
  }
	
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var length = 6;
  var chars = '0123456789ABCDEF';
  var hex = '#';
  while(length--) hex += chars[(Math.random() * 16) | 0];
  return hex;
}

function setRandomBackground() {
	let a = getRandomColor();
	let b = getRandomColor();
	color1.value = a;
	color2.value = b;
	body.style.background = 
	"linear-gradient(to right, " 
	+ a 
	+ ", " 
	+ b 
	+ ")";

	css.textContent = body.style.background + ";";
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

body.onload = setRandomBackground();

generate.addEventListener("click", setRandomBackground);






