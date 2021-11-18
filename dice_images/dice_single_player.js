//select the classes we require
const dice_cube = document.querySelector(".dice");
const roll_button = document.getElementById("roll");
let score = 0;
let currentClass = "";
const player_name = document.getElementById("gamer");
const submit = document.getElementById("Submit");
const scoring = document.getElementById("player1_score");


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
  //The maximum is exclusive and the minimum is inclusive
}

// on click eventlistener for the button element
roll_button.addEventListener('click', rollDice);

submit.addEventListener('click',() => {
  document.getElementById("player1_name").innerHTML = player_name.value;
  player_name.value = ""
  score = 0;
  scoring.innerHTML = `Score = ${score}`;
});


function rollDice(){
  let randNum = getRandomInt(1,7); 
  score = score + randNum;
  checkResult()
  if(score > 0){
    scoring.innerHTML = `Score = ${score}`;
  }
  let showScore = 'show-' + randNum;
  dice_cube.showScore;
  console.log(showScore);
  if ( currentClass ) {
    dice_cube.classList.remove( currentClass );
  }
// add the new showclass with the generated number
  dice_cube.classList.add( showScore );
//set the current class to the randomly generated number
  currentClass = showScore;
}
rollDice();

function checkResult(){
  if (score > 21){
    document.getElementById("player_result").innerHTML =`${player_name.value} Won`;
  }
}


