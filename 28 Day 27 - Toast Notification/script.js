const button = document.getElementById("btn");
const toasts = document.getElementById("toasts");

const messages = ["hi", "heelo", "bitch", "gothca", "well"];

button.addEventListener("click", () => createNotification());

function createNotification() {
    const notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerText = getRandomMessage();
    toasts.appendChild(notif);

    setTimeout(() => notif.remove(), 3000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}
