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
const greyButton = document.getElementById("grey");

const message = document.createElement("p");
document.body.appendChild(message);

// when the user clicks their color, it shows the color message
yellowButton.onclick = function() {
    document.body.style.background = "yellow";
    message.textContent = yellow.value
                        + "Yellow is the color of sunshine. It is associated with joy, happiness, intellect, and energy."
    
}

blueButton.onclick = function() {
     document.body.style.background = "blue";
    message.textContent = blue.value
                        + "Blue represents both the sky and the sea. It is associated with freedom, imagination, expansiveness, and sensitivity."
    
}

greenButton.onclick = function() {
   document.body.style.background = "green";
    message.textContent = green.value
                        + "Green is the color of life and nature. It is associated with meanings of growth, harmony, and environment."
}
   
redButton.onclick = function() {
    document.body.style.background = "red";
    message.textContent = red.value
                        + "Red is the color of blood and fire. It is associated with love, leadership, courage, and rage"
    
}
orangeButton.onclick = function() {
    document.body.style.background = "orange";
    message.textContent = orange.value
                        + "Orange is a mixture of the energy associated with red and the happiness associated with yellow. It is associated with success, encouragement, change, and determination,."
    
}
purpleButton.onclick = function() {
    document.body.style.background = "purple";
    message.textContent = purple.value
                        + "Purple is a mixture of calm stability of blue and the fierce energy of red. It is associated with wealth, extravagance, creativity, wisdom, and dignity"
    
}
pinkButton.onclick = function() {
    document.body.style.background = "pink";
    message.textContent = pink.value
                        + "Pink is the color that means sweet, charming, and feminine. It is associated with flowers, babies, and sweetness."
   
}
brownButton.onclick = function() {
   document.body.style.background = "brown";
    message.textContent = brown.value
                        + "Brown is the color of earth, wood and stone. It is associated with stability, warmth, and honesty."
}

whiteButton.onclick = function() {
    document.body.style.background = "white";
    message.textContent = white.value
                        + "White is the color of positivity. It is associated with innocence, light, goodness, and perfection."
    
}

greyButton.onclick = function() {
   document.body.style.background = "grey";
    message.textContent = black.value
                        + "Black is the color of power and sophistication. It is associated with authority, elegance, formality, and strength."
    
}

