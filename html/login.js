const loginEmail = document.getElementById("email");
const loginPassword = document.getElementById("password");
const loginForm = document.querySelector("#login");


  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (usr) =>
        usr.userName === loginEmail.value &&
        usr.userPassword === loginPassword.value
    );

    if (user) {
      window.location.href = "index.html"; // ✅ redirection works
    } else {
      alert("Invalid credentials");
    }
  });

