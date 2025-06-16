const words = ["WANT", "LIKE", "NEED", "PREFER", "DESIRE", "WISH"];
var palabraCambiante = document.getElementById("changing-word")

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomWord(currentWord) {
    let newWord = ""
    do{
        newWord = words[Math.floor(Math.random() * words.length)];
    }while(newWord == currentWord);
    return newWord;
}

function updateWord() {
    const wordElement = document.getElementById("word");
    const newWord = getRandomWord(wordElement.textContent);
    const newColor = getRandomColor();

    // Create new word element
    const newWordElement = document.createElement("div");
    newWordElement.textContent = newWord;
    newWordElement.className = "word fade-in";
    newWordElement.style.color = newColor;
    newWordElement.style.textShadow = '0px 0px 10px '+newColor;

    // Get the word container and add the new word
    const container = document.querySelector(".word-container");
    container.appendChild(newWordElement);

    // Animate old word out
    wordElement.classList.remove("old-word");
    wordElement.classList.add("fade-out");

    // Animate new word in
    setTimeout(() => {
        newWordElement.classList.remove("fade-in");
        newWordElement.classList.add("new-word");

        // Remove old word after animation
        wordElement.remove();
    }, 100);

    // Replace the old word with the new one
    newWordElement.id = "word";

}


function startLoop() {
    setInterval(updateWord, 5000);
}

startLoop();