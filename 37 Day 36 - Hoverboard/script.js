const container = document.getElementById("container");
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));
    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
    element.style.background = "#1d1d1d";
    element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
    const hex = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) color += hex[Math.floor(Math.random() * 16)];

    return color;
}
