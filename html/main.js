// ===== Menu Toggle =====

const toggleMenu = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const links = document.querySelectorAll("a");

toggleMenu.addEventListener("click", (e) => {
  menu.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// Register form elements
const userName = document.getElementById("email");
const userPassword = document.getElementById("password");
const fullName = document.getElementById("fullname");
const confirmPassword = document.getElementById("confirm");

const registerForm = document.querySelector("#register");

const loginForm = document.querySelector("#login");

// ===== Register User =====
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (userPassword.value !== confirmPassword.value) {
      alert("Passwords do not match!");
      return;
    }

    const user = {
      fullName: fullName.value,
      userName: userName.value,
      userPassword: userPassword.value,
    };

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.userName === userName.value);
    if (exists) {
      alert(`${userName.value} already exists!`);
      return;
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    window.location.href = "index.html";
  });
}

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  const nameInput = document.getElementById("name");
  const startDateInput = document.getElementById("start-date");
  const endDateInput = document.getElementById("end-date");
  const roomInput = document.getElementById("room");

  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!nameInput || !startDateInput || !endDateInput || !roomInput) {
      console.error("Booking inputs not found!");
      return;
    }

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    const newBooking = {
      name: nameInput.value,
      startDate: startDateInput.value,
      endDate: endDateInput.value,
      room: roomInput.value,
    };

    bookings.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert(`Your booking is successful!
Name: ${nameInput.value}
Start Date: ${startDateInput.value}
End Date: ${endDateInput.value}
Room: ${roomInput.value}`);

    bookingForm.reset();
  });
} //("service_putdn59", "template_2serv55",

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;
  const room = document.getElementById("room").value;

  emailjs
    .send("service_putdn59", "template_2serv55", {
      name: name, // matches {{name}}
      startDate: startDate, // matches {{startDate}}
      endDate: endDate, // matches {{endDate}}
      room: room, // matches {{room}}
    })
    .then((response) => {
      alert("✅ Booking request sent!");
      document.getElementById("bookingForm").reset();
    })
    .catch((error) => console.error("EmailJS error:", error));
});
const addForm = document.getElementById("addNewhome");
const fileInput = document.getElementById("fileUpload");
const urlInput = document.getElementById("imageUrl");
const descriptionInput = document.getElementById("description");
const emojiPicker = document.getElementById("emojiPicker");
const rentalHouse = document.querySelector(".houses");
const apply = document.querySelectorAll("#apply");

// Render a house card
function houselist(house) {
  const addHouse = document.createElement("div");
  addHouse.classList.add("house");

  const img = document.createElement("img");
  img.src = house.image;
  img.alt = "House";

  const descrip = document.createElement("div");
  descrip.classList.add("house-desc");
  descrip.textContent = house.description;

  const btn = document.createElement("button");
  btn.classList.add("house-desc");
  btn.textContent = "Apply Now";
  applyButtons.forEach((button) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Thank you for the application! You will receive information about the object soon.");
        
    })
  })
  
  // Select all buttons with the class "apply"
  const applyButtons = document.querySelectorAll(".apply");

  applyButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      alert(
        "Thank you for the application! You will receive information about the object soon."
      );
    });
  });

  addHouse.appendChild(img);
  addHouse.appendChild(descrip);
  rentalHouse.appendChild(addHouse);
  addHouse.appendChild(btn);
}

// Handle form submit
addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let imageUrl = urlInput.value;

  // If user uploaded a file, override the URL with local preview
  if (fileInput.files[0]) {
    imageUrl = URL.createObjectURL(fileInput.files[0]);
  }

  const newHouse = {
    image: imageUrl,
    description: descriptionInput.value,
  };

  houselist(newHouse);

  // Save to localStorage
  const savedHouses = JSON.parse(localStorage.getItem("houses")) || [];
  savedHouses.push(newHouse);
  localStorage.setItem("houses", JSON.stringify(savedHouses));

  addForm.reset();
});

// Insert emoji into textarea
emojiPicker.addEventListener("emoji-click", (event) => {
  descriptionInput.value += event.detail.unicode;
});

// Load saved houses on page load
(function loadHouses() {
  const savedHouses = JSON.parse(localStorage.getItem("houses")) || [];
  savedHouses.forEach(houselist);
})();


