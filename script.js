const messages = [
    "Really?",
    "HUHHH, REALLY!?",
    "Aree YOuuuu Sureee?",
    "._. JANICE?!?! Are you sure",
    "Last chance ah, you sure?",
    "你不要玩我啊，真的吗",
    "Janice Gay Hui Fen, last warning",
    "I am sad :( can you press yes",
    "Ok fine, I will stop asking...",
    "HOW IS YOUR SCREEN STILL POSSIBLE TO PRESS RED"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}