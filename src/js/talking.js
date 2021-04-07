const chat = document.getElementById("chat");

const printMessage = () => {
    const inputEle = document.getElementById("input");
    const inputValue = inputEle.value.toLowerCase()
        .replace(/\s+/g, '') ?? "";

    if (inputValue) {
        // Display html
        const mainEle = document.createElement("div");
        mainEle.className = "userTurn turn";
        const spanEle = document.createElement("span");
        spanEle.textContent = inputEle.value;
        mainEle.append(spanEle)
        chat.append(mainEle)

        // Reset environment
        autoScrolling();
        inputEle.value = "";

        // Next step
        printAnswer(getAnswer(inputValue));
    }
}

const getAnswer = (qst) => {
    return qst && "Texting api isn't ready."
    // Write texting api
}

const printAnswer = (anw) => {
    setTimeout(() => {
        // Display html
        const mainEle = document.createElement("div");
        mainEle.className = "autoTurn turn";
        const spanEle = document.createElement("span");
        spanEle.textContent = anw;
        mainEle.append(spanEle)
        chat.append(mainEle)

        // Reset environment
        autoScrolling();
    }, 1000)
}

const autoScrolling = () => {
    chat.scrollTop = chat.scrollHeight;
}

document.addEventListener('keydown' , e => {
    e.which == 13 && printMessage();
})