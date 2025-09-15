const loginEmail = document.getElementById("email");
const loginPassword = document.getElementById("password");
const loginForm = document.querySelector("#login");

const toggleMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const links = document.querySelectorAll("a")

toggleMenu.addEventListener("click", (e) => {
  menu.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});




  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (usr) =>
        usr.userName === loginEmail.value &&
        usr.userPassword === loginPassword.value
    );

    if (user) {
      window.location.href = "Home.html"; // ✅ redirection works
    } else {
      alert("Invalid credentials");
    }
  });

