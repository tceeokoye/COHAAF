// header area starts.....................
const staticHeader = document.querySelector(".static-header");
const fixedHeader = document.querySelector(".fixed-header");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY > staticHeader.offsetHeight) {
    fixedHeader.classList.remove("hidden");
    fixedHeader.style.transform = "translateY(0)";
  } else {
    fixedHeader.classList.add("hidden");
    fixedHeader.style.transform = "translateY(-100%)";
  }
});
//header area ends here

// triger donate screen whith donate button on the header

const donateButtons = document.querySelectorAll(".donateButton");
const donationDiv = document.querySelector(".donation-div");

// Add click event to all donate buttons
donateButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation(); // Stop event from bubbling up to the body
    donationDiv.classList.toggle("active");
  });
});

// Add click event to the body
document.body.addEventListener("click", function (event) {
  // Check if the click is outside the donation-div
  if (!donationDiv.contains(event.target)) {
    donationDiv.classList.remove("active"); // Remove active class
  }
});

// Add click event to sec5Button



// Ensure these variables are defined and contain the correct elements


