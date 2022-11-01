const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const {elements: { email, password }} = event.currentTarget;

    if (email.value === "" || password.value === "") {
       alert("You mast fiil all fields!");
    } else {
        console.log({email: email.value, password: password.value});
    }

    loginForm.reset();
});

