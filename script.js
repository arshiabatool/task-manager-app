// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Hardcoded credentials
    const validUsername = "admin";
    const validPassword = "12345";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        // Redirect to the tasks page (after login is successful)
        window.location.href = "tasks.html"; // Link to tasks page
    } else {
        // Show error message if login fails
        document.getElementById("errorMessage").innerText = "Invalid username or password!";
    }
});
