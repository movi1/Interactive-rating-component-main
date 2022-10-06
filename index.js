//document.querySelector("") This means you can select elements by ID, class, or any other type of selector.
// const container = document.querySelector(".container")
// const thanksContainer = document.querySelector(".thanks")

// getElementById method, you can only select an element by its ID
const container = document.getElementById("top")
const thanksContainer = document.getElementById("bottom")
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating")




// An event listener is a procedure in JavaScript that waits for an event to occur
submitButton.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    container.style.display = ("none")
})
function myFunction(num) {
    console.log(num)
    rating.textContent = "You selected " + num + " out of 5"
  }

// function myFunction1() {
//     console.log(1)
//     rating.textContent = 1
//   }
  
// function myFunction2() {
//     console.log(1)
//     rating.textContent = 2
//   }

// function myFunction3() {
//     console.log(3)
//     rating.textContent = 3
//   }

// function myFunction4() {
//     console.log(5)
//     rating.textContent = 4
//   }

// function myFunction2() {
//     console.log(5)
//     rating.textContent = 5
//   }