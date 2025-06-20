document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById('registration-form');
const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
        
      // Get and trim input values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

     // Initialize validation tracking
    let isValid = true;
    const messages = [];

    // Username validation
    if(username.length < 3) {
        isValid = false;
        messages.push("Username must at least be three characters long");
    }

    //email validation
    if(!email.includes("@") || !email.includes(".")) {
        isValid = false;
        messages.push("Please enter a valid email address");
    }

    //password validation
    if (password.length < 6) {
        isValid = false;
        messages.push("Password must be at least 8 characters long.");
    }

    // Display feedback
    feedbackDiv.style.display = "block";

    if(isValid) {
        feedbackDiv.textContent = "Registration Successful";
        feedbackDiv.style.color = "#28a745"; 
    } else {
        feedbackDiv.innerHTML = messages.join("br");
        feedbackDiv.style.color = "#dc3545";
    }
    })
});