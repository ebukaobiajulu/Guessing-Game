// const display = document.querySelector(".display");
// const button = document.querySelector(".start-btn");

// let randomNumber;
// randomNumber = Math.floor(Math.random() * 100);



// button.addEventListener("click", function () {
//   let person = prompt("Please enter your name", "Harry Potter");
//   let text;
//   if (person == null || person == "") {
//     text = "User cancelled the prompt.";
//   } else {
//     text = "Hello " + person + "! How are you today?";
//   }

//   alert('My name is ' + person)
// });


let hiddenNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 2;

for (let i=0; i<=hiddenNumber; i++ ){
    console.log(i)
}
console.log(hiddenNumber)
document.getElementById("submit").addEventListener("click", guess);

function guess() {
  const userGuess = parseInt(document.getElementById("guess").value);
  const resultElement = document.getElementById("result");

  if (attempts > 0) {
    if (userGuess < hiddenNumber) {
      resultElement.innerHTML = `Your guess is too low! ${attempts} attempts left`;
    } else if (userGuess > hiddenNumber) {
      resultElement.innerHTML = `Your guess is too high! ${attempts} attempts left`;
    } else {
      resultElement.innerHTML = `Congratulations! You guessed the number in ${3 - attempts + 1} attempts`;
      document.getElementById("submit").disabled = true;
    }
    attempts--;
  } else {
    resultElement.innerHTML = `Game over! The hidden number was ${hiddenNumber}`;
    document.getElementById("submit").disabled = true;
  }
}
