const dropButton = document.querySelectorAll(".dropDownButton")
const dropDownNav = document.querySelectorAll(".dropdown")

dropButton.forEach((button) =>{
  button.addEventListener("click", function(event){
    event.preventDefault();
    dropDownNav.forEach((dropdown) =>{
      dropdown.classList.toggle ("active")
    })
  })
})