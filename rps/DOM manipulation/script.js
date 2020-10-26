//DOM Variables
const buttons = document.querySelectorAll(".rpsButton") //buttons
const compButtons = document.querySelectorAll(".compButton")
const reset = document.querySelector("#resetButton")

const textContainer = document.querySelector("#gameState") //text fields
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
    let choice = e.target.id //sets choice to the id of the target button (already as rock, paper, scissors)
    game(choice) //starts game with choice as parameter (this will be the playerSelection variable)
  })
})

reset.addEventListener("click", () => resetGame()) //event listener hearing resetGame


//Functions
function computerPlay() { //Computer Play - Random from 1 to 3 and selects from array
  let arr = ["rock", "paper", "scissors"]
  let choice = Math.floor(Math.random() * arr.length)
  return arr[choice]
}

function playerPlay() { //Prompt to type rock/paper/scissors <CURRENTLY NOT IN USE>
  let choice = prompt("Choose from rock, paper or scissors")
  let check = choice.toLowerCase()
  while(check != "rock" && check != "paper" && check != "scissors"){
    choice = prompt("Try again. Choose from rock, paper or scissors")
    check = choice.toLowerCase()
  }
  return check
}

function rpsRound(playerSelection, computerSelection) { //2 vars input, calculates rps, and returns 0 lose <-> 1 win <-> 2 draw
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
  return state //returns 0 = lose, 1 = win, 2 = draw
}

function game(playerSelection){ //Does 1 round of RPS and outputs the results in DOM
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
  if(wins > 0 || losses > 0){ //Counts for edge case where first game is draw resulting in WR=NaN
    calcWins()
  }
}

function calcWins(){ //Calculates win rate
  let total = games - draws //Takes away draw games from total
  let winRatePerc = Math.round(wins / total * 100) //Finds percentage
  textFields[3].textContent = `Current win rate: ${winRatePerc}%`
}

function resetGame(){ //Reset all values to 0 and resets DOM
  games = 0
  wins = 0
  draws = 0
  losses = 0
  textFields.forEach((field) => { //Reset should have [0] as "Press a button to start"
    field.textContent = ""        //but i kinda cba so w.e
  });
  playerWins.textContent = "Player Wins: 0"
  compWins.textContent = "Computer Wins: 0"
}
//game()
