let formLogin = document.querySelector("#formSubmitLogin");
let userNameLogin = document.querySelector("#usernameLogin");
let passwordLogin = document.querySelector("#passwordLogin");


formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(userNameLogin.value, passwordLogin.value);
    window.location.href = 'http://localhost:5173/mainpage.html';
})