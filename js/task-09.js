function getRandomHexColor () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const changeClBtn = document.querySelector("button");
const colorName = document.querySelector("span");

changeClBtn.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();

  colorName.textContent = body.style.backgroundColor;
})