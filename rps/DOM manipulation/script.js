//DOM Variables
const buttons = document.querySelectorAll(".rpsButton")
const compButtons = document.querySelectorAll(".compButton")
const reset = document.querySelector("#resetButton")

const textContainer = document.querySelector("#gameState")
const textFields = document.querySelectorAll(".gameText")
const compWins = document.querySelector("#compWins")
const winRate = document.querySelector("#winRate")

//Other Variables
let choice = ""
let wins = 0
let draws = 0
let games = 0
let losses = 0

//Listeners//
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let choice = e.target.id
    game(choice)
  })
})

reset.addEventListener("click", () => resetGame())


//Functions
function computerPlay() {
  let arr = ["rock", "paper", "scissors"]
  let choice = Math.floor(Math.random() * arr.length)
  //compButtons[choice].style.backgroundColor = "black"
  return arr[choice]
}

function playerPlay() {
  let choice = prompt("Choose from rock, paper or scissors")
  let check = choice.toLowerCase()
  while(check != "rock" && check != "paper" && check != "scissors"){
    choice = prompt("Try again. Choose from rock, paper or scissors")
    check = choice.toLowerCase()
  }
  return check
}

function rpsRound(playerSelection, computerSelection) {
  let matchup = playerSelection.charAt(0) + computerSelection.charAt(0) //string w/ concat first letter of player and computer
  let win = ["pr", "rs", "sp"] //win conditions strings
  let state = 0 //init lose

  for(i = 0; i < win.length; i++) { //checks for each value of win arr
    if(matchup == win[i]){ //compares
      state = 1 //sets state to true
      break //breaks for loop
    } else if(playerSelection.charAt(0) == computerSelection.charAt(0)){
      state = 2
      break
    }
  }
  return state //returns bool true = win, false = lose
}

function game(playerSelection){
  let computerSelection = computerPlay() //comp rps choice(random)
  let round = rpsRound(playerSelection, computerSelection) //plays round and returns bool
  textFields[0].textContent = `You Played ${playerSelection}`
  textFields[1].textContent = `Computer Played ${computerSelection}`
  games++
  if(round == 1) {
    wins++
    textFields[2].textContent = `You won round ${games}`
    playerWins.textContent = `Player Wins: ${wins}`
  } else if(round == 2) {
    draws++
    textFields[2].textContent = `You tied round ${games}`
  } else {
    losses++
    textFields[2].textContent = `You lost round ${games}`
    compWins.textContent = `Computer Wins: ${losses}`
  }
  if(wins > 0){
    calcWins()
  }
}

function calcWins(){
  let total = games - draws
  let winRatePerc = Math.round(wins / total * 100)
  textFields[3].textContent = `Current win rate: ${winRatePerc}%`
}

function resetGame(){
  games = 0
  wins = 0
  draws = 0
  losses = 0
  textFields.forEach((field) => {
    field.textContent = ""
  });
  playerWins.textContent = "Player Wins: 0"
  compWins.textContent = "Computer Wins: 0"
}
//game()
