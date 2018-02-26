// get the user color button
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

const message = document.createElement("p");
document.body.appendChild(message);

// when the user clicks their color, it shows the color message
whiteButton.onclick = function() {
    document.body.style.background = "white";
    document.body.style.color = "black";
    message.textContent = white.value
                        + "White is the color of positivity. It is associated with innocence, light, goodness, and perfection."    
}

pinkButton.onclick = function() {
    document.body.style.background = "pink";
    document.body.style.color = "black";
    message.textContent = pink.value
                        + "Pink is the color of femininity. It is associated with flowers, babies, charm, and sweetness."   
}

orangeButton.onclick = function() {
    document.body.style.background = "orange";
    document.body.style.color = "black";
    message.textContent = orange.value
                        + "Orange is a mixture of energy from red and happiness from yellow. It is associated with success, encouragement, change, and determination." 
}

yellowButton.onclick = function() {
    document.body.style.background = "yellow";
    document.body.style.color = "black";
    message.textContent = yellow.value
                        + "Yellow is the color of sunshine. It is associated with joy, happiness, intellect, and energy."    
}
   
redButton.onclick = function() {
    document.body.style.background = "red";
    document.body.style.color = "black";
    message.textContent = red.value
                        + "Red is the color of blood and fire. It is associated with love, energy, leadership, and courage."
}

brownButton.onclick = function() {
   document.body.style.background = "brown";
    document.body.style.color = "white";
   message.textContent = brown.value
                        + "Brown is the color of earth, wood and stone. It is associated with stability, warmth, and honesty."
}

greenButton.onclick = function() {
   document.body.style.background = "green";
    document.body.style.color = "white";
   message.textContent = green.value
                        + "Green is the color of life and nature. It is associated with meanings of growth, harmony, and environment."
}

purpleButton.onclick = function() {
    document.body.style.background = "purple";
    document.body.style.color = "white";
    message.textContent = purple.value
                        + "Purple is a mixture of calm stability from blue and fierce energy from red. It is associated with wealth, extravagance, creativity, wisdom, and dignity."
}

blueButton.onclick = function() {
    document.body.style.background = "blue";
    document.body.style.color = "white";
    message.textContent = blue.value
                        + "Blue represents both the sky and the sea. It is associated with freedom, imagination, expansiveness, and sensitivity."    
}

blackButton.onclick = function() {
   document.body.style.background = "black";
   document.body.style.color = "white";
   message.textContent = black.value
                        + "Black is the color of power and sophistication. It is associated with authority, elegance, formality, and strength."    
}

