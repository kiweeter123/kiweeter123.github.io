const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    

    if (username === "modz" && password === "cheeks") {
        alert("You have successfully logged in.");
        window.location="https://privateincogv1.herokuapp.com/"
    } 
    
    else {
        loginErrorMsg.style.opacity = 1;
    }
    
      if (username === "stin" && password === "cheeks") {
        alert("You have successfully logged in.");
        window.location="https://privateincogv1.herokuapp.com/"
    }
    
    else {
        loginErrorMsg.style.opacity = 1;
    }
    
      if (username === "minka" && password === "cheeks") {
        alert("You have successfully logged in.");
        window.location="https://privateincogv1.herokuapp.com/"
      }
    
     else {
        loginErrorMsg.style.opacity = 1;
    }
})
