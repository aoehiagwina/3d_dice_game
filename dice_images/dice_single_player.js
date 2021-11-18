//select the classes we require
const dice_cube = document.querySelector(".dice");
const roll_button = document.getElementById("roll");
let score = 0;
let currentClass = "";
let player_name = document.getElementById("gamer").value;
const submit = document.getElementById("Submit");


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
  //The maximum is exclusive and the minimum is inclusive
}

const player = {
  name: player_name,
  point: score,
  
  win : function (){if (score > 21){
      console.log(`${this.name} Wins`);}
  },
}; 

submit.addEventListener('click',() => {
  document.getElementById("player1_name").innerHTML = player.name;});




// on click eventlistener for the button element
roll_button.addEventListener('click', rollDice);

function rollDice(){
  let randNum = getRandomInt(1,7); 
  score += randNum;
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