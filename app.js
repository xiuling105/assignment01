const yellowButton = document.getElementById("yellow");
const blueButton = document.getElementById("blue");
const greenButton = document.getElementById("green");
const redButton = document.getElementById("red");
const orangeButton = document.getElementById("orange");
const purpleButton = document.getElementById("purple");
const pinkButton = document.getElementById("pink");
const brownButton = document.getElementById("brown");
const whiteButton = document.getElementById("white");
const blackButton = document.getElementById("black");

yellowButton.onclick= function(){
	
	const message = document.createElement("p");
	
	message.textContent = yellow.value
	                     + " Yellow is the color of sunshine. It's associated with joy, happiness, intellect, and energy. "
	
	document.body.appendChild(message);
	
}