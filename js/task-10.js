function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divWithBoxes = document.querySelector("div#boxes");
const numberInput = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const getAmount = () => {
  let amount = numberInput.value;
  createBoxes(amount);
}; 

const createBoxes = amount => {
  let boxSize = 30;
  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");

    box.style.width = boxSize + i * 10 + "px";
    box.style.height = boxSize + i * 10 + "px";
    box.style.backgroundColor = getRandomHexColor();

    divWithBoxes.append(box);
  }
} 

createBtn.addEventListener("click", getAmount);
destroyBtn.addEventListener("click", (event) => {
  divWithBoxes.innerHTML = "";
})
