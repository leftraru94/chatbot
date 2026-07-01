const API_URL = "https://script.google.com/macros/s/AKfycby1Si0Y6E0W9sFQAeg8zJ3XisHO7YpSXbRe0ixxIkuSkkRyTPYIhZMSqcdIis1LQGa0zA/exec";

function sendMessage() {

    const input = document.getElementById("userInput");
    const text = input.value.trim();

    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: text })
    })
    .then(res => res.json())
    .then(data => {
        addMessage(data.reply, "bot");
    })
    .catch(() => {
        addMessage("Error de conexión con el servidor", "bot");
    });
}

function addMessage(text, type) {

    const chat = document.getElementById("chatBox");

    const div = document.createElement("div");
    div.classList.add("message", type);
    div.innerText = text;

    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}
