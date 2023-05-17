let container = document.getElementById("container");
let attempts = 5;
let numberOfAttempts= document.getElementById("attempts");
let targetNumber;
let form = document.getElementById('myForm');
let inputEl = document.createElement("input");
inputEl.type="number";
container.appendChild(inputEl);
let guessButton = document.createElement("button");
guessButton.textContent= "Submit";
guessButton.style.display="block";
guessButton.style.marginTop="2%";
guessButton.disabled=true;
container.appendChild(guessButton);
let displayHeading = document.createElement("h3");
container.appendChild(displayHeading);

form.addEventListener("submit", handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    guessButton.disabled=false;
    guessButton.addEventListener('click', handleClick);

function handleClick(){
    

    let userGuess = parseInt(inputEl.value);
    console.log(typeof(userGuess))
    targetNumber = generateTarget();
    displayResult(userGuess);
    attempts --;
    numberOfAttempts.textContent = attempts;
    if (attempts===0){
        displayFinalResult();
    }
}

}







function generateTarget(){
    return Math.ceil(Math.random()*20);
}

function displayResult(userGuess){
    if(isNaN(userGuess) || userGuess<1 || userGuess>20){
        displayHeading.textContent = "Invalid number, please enter a number between 1 and 20"
    }
    else if(userGuess === targetNumber){
        displayHeading.textContent = "Congratulations, your guess is correct";
        guessButton.disabled = true;
    }
    else {
        displayHeading.textContent=`Wrong answer, please try again the correct answer was ${targetNumber}`;
    }
}

function displayFinalResult(){
    displayHeading.textContent="Game Over, You finished your trials";
    guessButton.disabled = true;
}