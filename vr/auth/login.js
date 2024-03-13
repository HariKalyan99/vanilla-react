let formLogin = document.querySelector("#formSubmitLogin");
let userNameLogin = document.querySelector("#usernameLogin");
let passwordLogin = document.querySelector("#passwordLogin");

let tok = localStorage.getItem("token");
if(tok){
    formLogin.addEventListener("submit", (event) => {
        event.preventDefault();
        if (
          userNameLogin.value === "kminchelle" &&
          passwordLogin.value === "0lelplR"
        ) {
          
          loginUser(tok);
        } else {
          alert("Invalid username and password");
        }
      });
      
      function loginUser(tok) {
        try {
          fetch("https://dummyjson.com/auth/me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${tok}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("username", data.firstName);
            window.location.href = "http://localhost:5173/mainpage.html";
          });
        }catch(err){
          console.log("Error", err);
        }
      }
}else {
    document.querySelector('#errorFeed').innerText = "You don't have access for this page"
}

