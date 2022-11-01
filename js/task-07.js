const sizeControlInput = document.querySelector("#font-size-control");
const textRef = document.querySelector("span#text");

sizeControlInput.addEventListener("input", (event) => {
    textRef.style.fontSize = event.currentTarget.value + "px";
})