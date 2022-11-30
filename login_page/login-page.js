const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    //logins began here

    if (username === "modz" && password === "cheeks") {
        alert("You have successfully logged in.");
        window.location.href="https://privateincogv1.herokuapp.com/verified.html"
    } 
    
    else {
        loginErrorMsg.style.opacity = 1;
    }
    
      if (username === "stin" && password === "cheeks") {
        alert("You have successfully logged in.");
        window.location="https://privateincogv1.herokuapp.com/verified.html"
    }
    
    else {
        loginErrorMsg.style.opacity = 1;
    }
    
      if (username === "boog" && password === "cheeks") {
        alert("You have successfully logged in.");
        window.location="https://privateincogv1.herokuapp.com/verified.html"
      }
    
     else {
        loginErrorMsg.style.opacity = 1;
    }
    
      if (username === "bones" && password === "cheeks") {
        alert("You have successfully logged in.");
        window.location="https://privateincogv1.herokuapp.com/verified.html"
      }
    
    else {
        loginErrorMsg.style.opacity = 1;
    }
    
       if (username === "lei" && password === "dukert") {
        alert("You have successfully logged in.");
        window.location="https://privateincogv1.herokuapp.com/verified.html"
       }
    
    else {
        loginErrorMsg.style.opacity = 1;
    }
    
    if (username === "gut" && password === "cheeks") {
        alert("You have successfully logged in.");
        window.location="https://privateincogv1.herokuapp.com/verified.html"
    }
       
    else {
        loginErrorMsg.style.opacity = 1;
    }
    
     if (username === "burger" && password === "cheeks") {
        alert("You have successfully logged in.");
        window.location="https://privateincogv1.herokuapp.com/verified.html"
     }
    
    else {
        loginErrorMsg.style.opacity = 1;
    }
    
      if (username === "lick" && password === "cheeks") {
        alert("You have successfully logged in.");
        window.location="https://privateincogv1.herokuapp.com/verified.html"
     }
    
     else {
        loginErrorMsg.style.opacity = 1;
     }
    
    if (username === "bmac" && password === "cheeks") {
        alert("You have successfully logged in.");
        window.location="https://privateincogv1.herokuapp.com/verified.html"
    }
    
     else {
        loginErrorMsg.style.opacity = 1;
     }
    
    if (username === "li" && password === "cheeks") {
        alert("You have successfully logged in.");
        window.location="https://privateincogv1.herokuapp.com/verified.html"
    }
    
     else {
        loginErrorMsg.style.opacity = 1;
     }
})
