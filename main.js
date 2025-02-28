const donateButton = document.querySelectorAll(".donate1");
const donateButton1 = document.querySelectorAll(".donate2");
const donateButton2 = document.querySelectorAll(".donate3");

const donateScreen = document.querySelector(".course1");
const donateScreen2 = document.querySelector(".course2");
const donateScreen3 = document.querySelector(".course3");

// Open donation screens
donateButton.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    donateScreen.classList.toggle("active");
  });
});

donateButton1.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    donateScreen2.classList.toggle("active");
  });
});

donateButton2.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    donateScreen3.classList.toggle("active");
  });
});

// Close donation screens
const closeDonationScreen = document.querySelectorAll(".back-to-list");
closeDonationScreen.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    // Check which screen is active and close it
    if (donateScreen.classList.contains("active")) {
      donateScreen.classList.remove("active");
    } else if (donateScreen2.classList.contains("active")) {
      donateScreen2.classList.remove("active");
    } else if (donateScreen3.classList.contains("active")) {
      donateScreen3.classList.remove("active");
    }
  });
});
const pageButton = document.querySelectorAll(".pagebtn");
const socialLink = document.querySelectorAll(".socialhead");

// Toggle .active class on button click
pageButton.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior if needed
    event.stopPropagation(); // Stop the event from bubbling up

    // Toggle the active class on each .socialhead element
    socialLink.forEach((screen) => {
      screen.classList.toggle("active");
    });
  });
});

// Close dropdown when clicking outside
document.body.addEventListener("click", function (event) {
  // Check if the click target is outside the .socialhead element
  const isClickInside = event.target.closest(".socialhead");

  // If the click is outside, remove the .active class from all .socialhead elements
  if (!isClickInside) {
    socialLink.forEach((screen) => {
      if (screen.classList.contains("active")) {
        screen.classList.remove("active");
      }
    });
  }
});