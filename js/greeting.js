const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden"; //string만 포함된 변수는 대문자로 표기


function onLoginSubmit (event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY", username)       
    paintGreeting (username) 
}
  

function paintGreeting (a) {
    greeting.innerText = "Hello " + a;
    greeting.classList.remove(HIDDEN_CLASS)  
}


const savedUsername = localStorage.getItem("USERNAME_KEY");


if(savedUsername ===null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit",onLoginSubmit);

} else {
    paintGreeting (savedUsername)
}