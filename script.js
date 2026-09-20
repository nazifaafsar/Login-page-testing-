function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "12345") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password.");
    }
}
