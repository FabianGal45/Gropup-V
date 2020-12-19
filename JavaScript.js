
// Fabian Gal


// This is the boxes that are going to display the x on click. There must have been a better way to do it unfortunatelly I am not aware of it for the time being
// I am keeping it like this for now as it works and if there is time I will hopefully look on how to rewrite this.


// $(document).ready(function() {
//     $("a").click(function(event) {
//         alert(event.target.id);
//     });
// });

// https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array#:~:text=var%20value%20%3D%20array.splice(,of%20the%20item%20as%20well).

// const array = [1,2,3,4,5,6,7,8,9];

// console.log(array);

// const index = array.indexOf(2);
// if (index > -1) {
//   array.splice(index, 1);
// }

// console.log(array); 






const playebleSlots = [1,2,3,4,5,6,7,8,9];
console.log(playebleSlots);

var playerChoice;
var playerSplice;
var index;

function oneX() {
	var showOnClick = document.getElementById("1"); // changing the number will change the position that the x will apear in but you can click anywhere with the specific funtion
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    console.log("you have picked slot no: 1");
    index = playebleSlots.indexOf(1);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
}
function twoX() {
	var showOnClick = document.getElementById("2");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    console.log("you have picked slot no: 2");
    index = playebleSlots.indexOf(2);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
}
function threeX() {
	var showOnClick = document.getElementById("3");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    console.log("you have picked slot no: 3");
    index = playebleSlots.indexOf(3);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
}

function fourX() {
	var showOnClick = document.getElementById("4");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    console.log("you have picked slot no: 4");
    index = playebleSlots.indexOf(4);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
    
}
function fiveX() {
	var showOnClick = document.getElementById("5");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    console.log("you have picked slot no: 5");
    index = playebleSlots.indexOf(5);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
 
}
function sixX() {
	var showOnClick = document.getElementById("6");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    console.log("you have picked slot no: 6");
    index = playebleSlots.indexOf(6);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
}

function sevenX() {
	var showOnClick = document.getElementById("7");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    console.log("you have picked slot no: 7");
    index = playebleSlots.indexOf(7);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
}
function eightX() {
	var showOnClick = document.getElementById("8");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    console.log("you have picked slot no: 8");
    index = playebleSlots.indexOf(8);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
}
function nineX() {
	var showOnClick = document.getElementById("9");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    console.log("you have picked slot no: 9");
    index = playebleSlots.indexOf(9);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
}

// Fawas Omoshonwon

function ticTacToe(){
	playebleSlots = [1,2,3,4,5,6,7,8,9];
	console.log(" before player choice: " + playebleSlots);

	var playerSplice;
	playerSplice = playebleSlots.splice(playerChoice, 1);

	console.log(playerSplice);
	console.log(" before computer choice: " + playebleSlots);

	var computerRandomChoice = Math.floor(Math.random()*playebleSlots.length);//selects random number 1-9
	var randomNumberSplice = playableSlots.splice(computerRandomChoice, 1);

	var showComputerChoice;
	showComputerChoice = document.getElementById(randomNumberSplice);
	showComputerChoice.querySelector("img.o").classList.remove("game-hide-o");

	console.log("computer random choice: " + computerRandomChoice);
	console.log("random number taken out: " + randomNumberSplice);
	console.log("playeble slots after: " + playableSlots);
}
	
	// Emiraldo Fernandes
	
	if winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
document.write('Winner');
