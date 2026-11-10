//Here is the goal of this mini project.
//There will be a eventListener. OR i guess two functions that i will add to the event listenr. The first is a simple function that 
//geenrates and returns a random number from 0 to 255. Then one function that takes in a rgb string and changes the 
//value of the background color and the h1.

//first of all, just a simple function that generates a random number from 0-255:
function generateRandom(){
	return Math.floor(Math.random() * 256) + 0;
}
//Then, i want to select my button and add an event listener that executes the change function:
function change(){
	//now all i need to do is geenrate an rgb vlaue and uhh yeah! Just pass it in. and change the h1.
	const firstNum = generateRandom();
	const secondNum = generateRandom();
	const thirdNum = generateRandom();
	const rgbString = `rgb(${firstNum},${secondNum},${thirdNum})`;
	//OK, now that i have rgb string, lets select that h1 and change its innerText:
	let myHeader = document.querySelector("#header");
	myHeader.innerText = rgbString;
	//OK now tthat we have changed the h1, all we need to do is change the background color!
	//this is a bad idea
}

let btn = document.querySelector("#colorChange");
btn.addEventListener("click",change);
