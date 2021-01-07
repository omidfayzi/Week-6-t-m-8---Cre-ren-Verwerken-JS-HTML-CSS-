var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");

var container = document.querySelector("#container");
container.appendChild(button1);
container.appendChild(button2);
container.appendChild(button3);

button1.innerHTML = "Button 1";
button2.innerHTML = "Button 2";
button3.innerHTML = "Button 3";

button1.classList.add("btn1");
button2.classList.add("btn2");
button3.classList.add("btn3");

button1.addEventListener("click", function () {
	document.querySelector("body").style.backgroundColor =
	"green";
})

button2.addEventListener("click", function () {
	document.querySelector("body").style.backgroundColor =
	"red";
})

button3.addEventListener("click", function () {
	document.querySelector("body").style.backgroundColor =
	"blue";
})