let form = document.querySelector("#formSubmit");
let userName = document.querySelector("#username");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(userName.value, password.value);
    window.location.href = 'http://localhost:5173/login.html';
})

