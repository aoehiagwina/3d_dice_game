//select the classes we require
const dice_cube = document.querySelector(".dice");
const roll_button1 = document.getElementById("roll_1");
const roll_button2 = document.getElementById("roll_2");
let player1_score = 0;
let player2_score = 0;
let currentClass = "";

const player1 = document.getElementById("gamer");
const player2 = document.getElementById("gamer2");
const player1_name = document.getElementById("player1_name");
const player2_name = document.getElementById("player2_name");
const submit1 = document.getElementById("Submit");
const submit2 = document.getElementById("Submit2");
const scoring1 = document.getElementById("player1_score");
const scoring2 = document.getElementById("player2_score");


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
  //The maximum is exclusive and the minimum is inclusive
}

// on click eventlistener for the button element
roll_button1.addEventListener('click', rollDice1);
roll_button2.addEventListener('click', rollDice2);

// player 1 settings
submit1.addEventListener('click',() => {
  player1_name.innerHTML = player1.value;
  // player1.value = "";
  player1_score = 0;
  scoring1.innerHTML = `Score = ${player1_score}`;
});


//player 2 settings
submit2.addEventListener('click',() => {
  player2_name.innerHTML = player2.value;
  // player2.value = "";
  player2_score = 0;
  scoring2.innerHTML = `Score = ${player2_score}`;
});

// player 1 dice roll
function rollDice1(){
  let randNum = getRandomInt(1,7); 
  player1_score = player1_score + randNum;
  checkResult()
  if(player1_score > 0){
    scoring1.innerHTML = `Score = ${player1_score}`;
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
rollDice1();

// player 2 dice roll
function rollDice2(){
  let randNum = getRandomInt(1,7); 
  player2_score = player2_score + randNum;
  checkResult()
  if(player2_score > 0){
    scoring2.innerHTML = `Score = ${player2_score}`;
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

rollDice2();

// check winner
function checkResult(){
  if (player1_score > 21){
    document.getElementById("player_result").innerHTML =`${player1.value} Won`;
    document.getElementById("player2_result").innerHTML =`${player2.value} Loss`;
  }
  else if (player2_score > 21){
    document.getElementById("player2_result").innerHTML =`${player2.value} Won`;
    document.getElementById("player_result").innerHTML =`${player1.value} Loss`;}
  }


