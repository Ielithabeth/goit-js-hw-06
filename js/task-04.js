const value = document.querySelector("#value");
let counterValue = 0;

const decrButton = document.querySelector('button[data-action="decrement"]');
const incrButton = document.querySelector('button[data-action="increment"]');

const decrementValue = () => {
    counterValue -= 1;
    value.textContent = counterValue;
    return value;
};

decrButton.addEventListener("click", decrementValue);

const incrementValue = () => {
    counterValue += 1;
    value.textContent = counterValue;
    return value;
};

incrButton.addEventListener("click", incrementValue);