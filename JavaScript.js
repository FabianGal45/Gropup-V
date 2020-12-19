// Fabian Gal


// This is the boxes that are going to display the x on click. There must have been a better way to do it unfortunatelly I am not aware of it for the time being
// I am keeping it like this for now as it works and if there is time I will hopefully look on how to rewrite this.



var playerChoice;

function oneX() {
	var showOnClick = document.getElementById("1"); // changing the number will change the position that the x will apear in but you can click anywhere with the specific funtion
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    console.log("you have picked slot no: 1");
    playerChoice= 0;
    console.log(playerChoice);
}
console.log(playerChoice);
function twoX() {
	var showOnClick = document.getElementById("2");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    console.log("you have picked slot no: 2");
    playerChoice= 1;
    console.log(playerChoice);
}
function threeX() {
	var showOnClick = document.getElementById("3");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    console.log("you have picked slot no: 3");
    playerChoice= 2;
    console.log(playerChoice);
}

function fourX() {
	var showOnClick = document.getElementById("4");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    console.log("you have picked slot no: 4");
    playerChoice= 3;
    console.log(playerChoice);
}
function fiveX() {
	var showOnClick = document.getElementById("5");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    console.log("you have picked slot no: 5");
    playerChoice= 4;
    console.log(playerChoice);
}
function sixX() {
	var showOnClick = document.getElementById("6");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    console.log("you have picked slot no: 6");
    playerChoice= 5;
    console.log(playerChoice);
}

function sevenX() {
	var showOnClick = document.getElementById("7");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    console.log("you have picked slot no: 7");
    playerChoice= 6;
    console.log(playerChoice);
}
function eightX() {
	var showOnClick = document.getElementById("8");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    console.log("you have picked slot no: 8");
    playerChoice= 7;
    console.log(playerChoice);
}
function nineX() {
	var showOnClick = document.getElementById("9");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    console.log("you have picked slot no: 9");
    playerChoice= 8;
    console.log(playerChoice);
}

// Fawas Omoshonwon

















































// Fawas Omoshonwon
function checkChoices(){
	console.log("available slots: " + playebleSlots);
	console.log(playebleSlots);
}



function computerTurn(){
	var computerRandomchoice = Math.floor(Math.random()*playebleSlots.length);//Select a random number from 1-9

	index = playebleSlots.indexOf(computerRandomChoice);
	if (index > -1){
		playebleSlots.splice(index, 1);
	}

	var showComputerChoice; //place the O
	showComputerChoice = document.getElementById(computerRandomChoice);
	showComputerChoice.querySelector("img.o").classList.remove("game-hide-o");

	console.log("computer random choice: " + computerRandomChoice);
	console.log(playebleSlots);
}

function refreshButton() {
	location.reload();
}
