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

// when the user clicks their color, it shows the color message
yellowButton.onclick = function() {
    const message = document.createElement("p");
    message.textContent = yellow.value
                        + "Yellow is the color of sunshine. It is associated with joy, happiness, intellect, and energy."
    document.body.appendChild(message);
}
blueButton.onclick = function() {
    const message = document.createElement("p");
    message.textContent = blue.value
                        + "Blue represents both the sky and the sea. It is associated with freedom, imagination, expansiveness, and sensitivity."
    document.body.appendChild(message);
}
greenButton.onclick = function() {
    const message = document.createElement("p");
    message.textContent = green.value
                        + "Green is the color of life and nature. It is associated with meanings of growth, harmony, and environment."
    document.body.appendChild(message);
}
redButton.onclick = function() {
    const message = document.createElement("p");
    message.textContent = red.value
                        + "Red is the color of blood and fire. It is associated with love, leadership, courage, and rage"
    document.body.appendChild(message);
}
orangeButton.onclick = function() {
    const message = document.createElement("p");
    message.textContent = orange.value
                        + "Orange is a mixture of the energy associated with red and the happiness associated with yellow. It is associated with success, encouragement, change, and determination,."
    document.body.appendChild(message);
}
purpleButton.onclick = function() {
    const message = document.createElement("p");
    message.textContent = purple.value
                        + "Purple is a mixture of calm stability of blue and the fierce energy of red. It is associated with wealth, extravagance, creativity, wisdom, and dignity"
    document.body.appendChild(message);
}
pinkButton.onclick = function() {
    const message = document.createElement("p");
    message.textContent = pink.value
                        + "Pink is the color that means sweet, charming, and feminine. It is associated with flowers, babies, and sweetness."
    document.body.appendChild(message);
}
brownButton.onclick = function() {
    const message = document.createElement("p");
    message.textContent = brown.value
                        + "Brown is the color of earth, wood and stone. It is associated with stability, warmth, and honesty."
    document.body.appendChild(message);
}
whiteButton.onclick = function() {
    const message = document.createElement("p");
    message.textContent = white.value
                        + "White is the color of positivity. It is associated with innocence, light, goodness, and perfection."
    document.body.appendChild(message);
}
blackButton.onclick = function() {
    const message = document.createElement("p");
    message.textContent = black.value
                        + "Black is the color of power and sophistication. It is associated with authority, elegance, formality, and strength."
    document.body.appendChild(message);
}