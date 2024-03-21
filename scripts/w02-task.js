/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "James-ann Umoh";
let currentYear = new Date().getFullYear();
let profilePicture = "images/me.png";


/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");
const foodElement = document.getElementById("food");



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong> ${fullName} </strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `profile image of ${fullName}`);




/* Step 5 - Array */

let favouriteFood = ["Fried Rice", "Beans", "Rice and Stew", "Jollof Rice", "Afang Soup"];
foodElement.innerHTML = favouriteFood;

let favouriteFood2 = "Goat-Meat Peppersoup";
favouriteFood.push(favouriteFood2);
foodElement.innerHTML += `<br> ${favouriteFood}`;
favouriteFood.shift();
foodElement.innerHTML += `<br> ${favouriteFood}`;
favouriteFood.pop();
foodElement.innerHTML += `<br> ${favouriteFood}`;





