/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2){
    return number1 - number2
};
const subtractNumbers = function(){
    let sub1 = Number(document.querySelector("#subtract1").value);
    let sub2 = Number(document.querySelector("#subtract2").value);
    
    document.querySelector("#difference").value = subtract(sub1, sub2);
};
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (num1, num2) => num1 * num2;

let multiplyNumbers = () => {
    let multi1 = Number(document.querySelector("#factor1").value);
    let multi2 = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply(multi1, multi2);
};
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide  = (num1, num2) => num1 / num2;

let divideNumbers = () => {
    let div1 = Number(document.querySelector("#dividend").value);
    let div2 = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(div1, div2);
};
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
const subtotalField = document.querySelector("#subtotal");
const totalSpan = document.querySelector("#total");
const getTotal = document.querySelector("#getTotal");

getTotal.addEventListener("click", () => {
  // Get the numeric value entered by the user in the subtotal field.
  const subtotal = Number(subtotalField.value);

  // Check if the membership checkbox has been checked by the user.
  const memberCheckbox = document.querySelector("#member");
  const membership = memberCheckbox.checked;

  // Apply a 15% discount if the user has a membership.
  let discount = 0;
  if (membership) {
    discount = subtotal * 0.15;
  }
  const total = subtotal - discount;
  totalSpan.textContent = `$${total.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.querySelector("#array").innerHTML = numbers;
/* Output Odds Only Array */
let oddNumber = numbers.filter(number => number % 2 === 1);
document.querySelector("#odds").innerHTML = oddNumber;
/* Output Evens Only Array */
let evenNumber = numbers.filter(number => number % 2 === 0);
document.querySelector("#evens").innerHTML = evenNumber;
/* Output Sum of Org. Array */
let sum = numbers.reduce((sum, number) => sum + number);
document.querySelector("#sumOfArray").innerHTML = sum;
/* Output Multiplied by 2 Array */
let sourceByTwo = numbers.map(number => number *2);
document.querySelector("#multiplied").innerHTML = sourceByTwo;
/* Output Sum of Multiplied by 2 Array */
let sumMultiByTwo = sourceByTwo.reduce((sum, number) => sum + number);
document.querySelector("#sumOfMultiplied").innerHTML = sumMultiByTwo;