const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => { 
    input.classList.add("invalid");
    if (event.currentTarget.value.length >= input.dataset.length) {
        input.classList.replace("invalid", "valid");
        return;
    }
});