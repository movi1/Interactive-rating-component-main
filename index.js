//document.querySelector("") This means you can select elements by ID, class, or any other type of selector.
// const container = document.querySelector(".container")
// const thanksContainer = document.querySelector(".thanks")

// getElementById method, you can only select an element by its ID
const container = document.getElementById("top");
const thanksContainer = document.getElementById("bottom");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");

//for loop that goes through each btn by class and put "active" class on button that was clicked
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
};


// An event listener is a procedure in JavaScript that waits for an event to occur
submitButton.addEventListener("click", (e) => {
  //stopping the form from submitting (stops default form behaviour)
  e.preventDefault();

  thanksContainer.classList.remove("hidden");
  container.style.display = "none";
});

function myFunction(num) {

  console.log(num);
  rating.textContent = "You selected " + num + " out of 5";

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
