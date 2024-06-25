let userInputEle = document.getElementById("userInput");
let ulEle = document.getElementById("keyCodeList");

function apply(event) {
    let liEle = document.createElement("li");
    liEle.textContent = event.keyCode;
    ulEle.appendChild(liEle);
}

userInputEle.addEventListener("keydown", apply);