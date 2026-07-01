<<<<<<< HEAD
const API_URL = "https://script.google.com/macros/s/AKfycbygU_HRR6H-IDR_knBe8l4xZl7dDi1vO8UefEIcG4y2ZutZZx_aHt3jzO3fhmwjBiiKjg/exec";

function sendMessage() {

    const input = document.getElementById("userInput");
    const text = input.value;

    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({ message: text })
    })
    .then(res => res.json())
    .then(data => {
        addMessage(data.reply, "bot");
    })
    .catch(() => {
        addMessage("Error de conexión", "bot");
    });
}

function addMessage(text, type) {

    const chat = document.getElementById("chatBox");

    const div = document.createElement("div");
    div.classList.add("message", type);
    div.innerText = text;

    chat.appendChild(div);
}
=======
const API_URL = "https://script.google.com/macros/s/AKfycbygU_HRR6H-IDR_knBe8l4xZl7dDi1vO8UefEIcG4y2ZutZZx_aHt3jzO3fhmwjBiiKjg/exec";

function sendMessage() {

    const input = document.getElementById("userInput");
    const text = input.value;

    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({ message: text })
    })
    .then(res => res.json())
    .then(data => {
        addMessage(data.reply, "bot");
    });
}

function addMessage(text, type) {

    const chat = document.getElementById("chatBox");

    const div = document.createElement("div");
    div.classList.add("message", type);
    div.innerText = text;

    chat.appendChild(div);
}
>>>>>>> 4b53b8a (update chatbot)
