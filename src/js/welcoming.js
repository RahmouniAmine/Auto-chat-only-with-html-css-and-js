(() => {
    const mainEle = document.createElement("div");
    mainEle.className = "autoTurn turn";
    const spanEle = document.createElement("span");
    spanEle.textContent = "Hi 😊";
    mainEle.append(spanEle);
    chat.append(mainEle);
})();