document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

       
        if (email === "anggirriantika@gmail.com" && password === "123456") {
            window.location.href = "SudahLogin.html"; // Ganti dengan halaman tujuan
        } else {
            alert("Login gagal. Silakan periksa email dan password Anda.");
        }
    });
});