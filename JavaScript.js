
// Fabian Gal


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



//Most of this code has been inspired from https://www.w3schools.com/, We have tried to look for similar code but unfortunately, in most cases it was irrelevant or too advanced for us to understand. If any content has been copied, there are references available in the comments.


const playebleSlots = [1,2,3,4,5,6,7,8,9]; //This is the enrire grid 1 to 9
console.log(playebleSlots); // All console logs are used to observe the progress and errors

var index; // This index is being used to remove a specific number from the array in the functions oneX,twoX...
var showOnClick;
var i;

// These functions are the boxes that are going to display the x on click. There must have been a better way to do it unfortunatelly I am not aware of it for the time being
// I am keeping it like this for now as it works and if there is time I will hopefully look on how to rewrite this.

function oneX() {
	showOnClick = document.getElementById("1"); //this will look for the id of 1
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");// this will look inside the id of 1 for an image with the calass of x and remove the class of game-hide-x to reveal the x img.

    console.log("you have picked slot no: 1"); //Checking the code 

    index = playebleSlots.indexOf(1); //this will look for the number 1 inside the playebleSlots and will take it away.
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
    
    blockPlayerFromSelecting(); //this will run a function that will not allow the player to select any other box as the turn of the computer is due. After there will be another function letting the player continue playing.

    setTimeout(function(){ computerTurn(); }, 400); //This lets the computer play but adds some delay so it won't be instantaneous. 
    showOnClick.classList.add("disabled"); //this prevents the cell from being clicked again
}
// From here on is copy/paste and changing the numbers
function twoX() {
	showOnClick = document.getElementById("2");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");

    console.log("you have picked slot no: 2");

    index = playebleSlots.indexOf(2);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
    
    blockPlayerFromSelecting();

    setTimeout(function(){ computerTurn(); }, 400);
    showOnClick.classList.add("disabled");
}
function threeX() {
	showOnClick = document.getElementById("3");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");

    console.log("you have picked slot no: 3");

    index = playebleSlots.indexOf(3);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
    
    blockPlayerFromSelecting();

    setTimeout(function(){ computerTurn(); }, 400);
    showOnClick.classList.add("disabled");
}

function fourX() {
	showOnClick = document.getElementById("4");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");

    console.log("you have picked slot no: 4");

    index = playebleSlots.indexOf(4);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
    
    blockPlayerFromSelecting();

    setTimeout(function(){ computerTurn(); }, 400);
    showOnClick.classList.add("disabled");
}
function fiveX() {
	showOnClick = document.getElementById("5");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");

    console.log("you have picked slot no: 5");

    index = playebleSlots.indexOf(5);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
    
    blockPlayerFromSelecting();

    setTimeout(function(){ computerTurn(); }, 400);
    showOnClick.classList.add("disabled");
}
function sixX() {
	showOnClick = document.getElementById("6");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");

    console.log("you have picked slot no: 6");

    index = playebleSlots.indexOf(6);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
    
    blockPlayerFromSelecting();

    setTimeout(function(){ computerTurn(); }, 400);
    showOnClick.classList.add("disabled");
}

function sevenX() {
	showOnClick = document.getElementById("7");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    
    console.log("you have picked slot no: 7");

    index = playebleSlots.indexOf(7);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
    
    blockPlayerFromSelecting();

    setTimeout(function(){ computerTurn(); }, 400);
    showOnClick.classList.add("disabled");
}
function eightX() {
	showOnClick = document.getElementById("8");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");

    console.log("you have picked slot no: 8");

    index = playebleSlots.indexOf(8);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }
    
    blockPlayerFromSelecting();
    
    setTimeout(function(){ computerTurn(); }, 400);
    showOnClick.classList.add("disabled");
}
function nineX() {
	showOnClick = document.getElementById("9");
    showOnClick.querySelector("img.x").classList.remove("game-hide-x");
    
    console.log("you have picked slot no: 9");

    index = playebleSlots.indexOf(9);
    if (index > -1) {
        playebleSlots.splice(index, 1);
    }

    blockPlayerFromSelecting();

    setTimeout(function(){ computerTurn(); }, 400);
    showOnClick.classList.add("disabled");

    //This blocks the player from selecting any other slot while the computer's turn is due.
    
}

//This blocks the player from selecting any other slot while the computer's turn is due.
function blockPlayerFromSelecting(){
    console.log("Player can no longer select.");
    for( i=0; i<playebleSlots.length; i++){
        var disableSlots = playebleSlots[i];
        document.getElementById(disableSlots).classList.add("disabled");
    }
}

// Fawas Omoshonwon
function checkChoices(){
	console.log("available slots: " + playebleSlots);
	console.log(playebleSlots);
}



function computerTurn(){
	var computerRandomChoice = playebleSlots[Math.floor(Math.random()*playebleSlots.length)];//Select a random number from the number of items left

	index = playebleSlots.indexOf(computerRandomChoice);
	if (index > -1){
		playebleSlots.splice(index, 1);
	}

	var showComputerChoice; //place the O
	showComputerChoice = document.getElementById(computerRandomChoice);
	showComputerChoice.querySelector("img.o").classList.remove("game-hide-o");
    showComputerChoice.classList.add("disabled"); // This disacbles the cell from being clicked

	console.log("computer random choice: " + computerRandomChoice);
    console.log(playebleSlots);
    
    allowPlayerToSelect();
}

// Fabian Gal - This removes the desable class from all the ids that are left in the playeblle slots and allows the player to continue playing.
function allowPlayerToSelect(){
    for( i=0; i<playebleSlots.length; i++){
        var disableSlots = playebleSlots[i];
        document.getElementById(disableSlots).classList.remove("disabled");
    }
    console.log("Player can now select a box.");
}

// Fawas Omoshonwon
function refreshButton() {
	location.reload();
}



