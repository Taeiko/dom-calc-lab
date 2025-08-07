
//--------------------------------CONSTANTS-----------------------//
const calculator = document.querySelector('.calculator')
const buttonNumElm = document.querySelectorAll('.number')
const operatorClkElm = document.querySelectorAll('.operator')
const displayElm = document.querySelector('.display')
const equalsElm = document.querySelector('.equals')
console.log()
//---------------------------------VARIABLES---------------------//
let currentInput = ""
let operator = ""
let numOne = ""
let numTwo = ""
let display = ""
//-----------------------------------FUNCTIONS-------------------//
//put your functions here 
function init() {
}

function clickHandler() {
}
//event listeners
buttonNumElm.forEach((oneElement) => {
    oneElement.addEventListener('click', (event) => {
        console.log(oneElement.textContent)

        if (numOne && operator) {
            numTwo = event.target.textContent
        }
        else if (numOne && !operator) {
            numOne += event.target.textContent

        }
        else {
            numOne = event.target.textContent
        }
        if (operator) {
            displayElm.textContent = numOne + " " + operator + " " + numTwo
        } else {
            displayElm.textContent = numOne
        }
        // console.log(event.target.innerText)
        console.log("num1 ", numOne)
        console.log("operator ", operator)
        console.log("num2 ", numTwo)

    })
})



operatorClkElm.forEach((oneOperation) => {
    oneOperation.addEventListener('click', (event) => {
        console.log(oneOperation.textContent)

        if (numOne) {
            operator = event.target.textContent
        
        }
        console.log(operator)
        
        if (event.target.textContent === "=") {
            console.log("=======")
        }
        
        if (operator === "C") {
            numOne = ""
            numTwo = ""
            operator = ""
            displayElm.textContent = ""
            return
        }
    })


})

equalsElm.addEventListener('click', (event) => {
    let result
    if (operator === "+") {
        result = Number(numOne) + Number(numTwo)

    } else if (operator === "-") {
        result = Number(numOne) - Number(numTwo)
    } else if (operator === "*") {
        result = Number(numOne) * Number(numTwo)
    } else if (operator === "/") {
        result = Number(numOne) / Number(numTwo)
    }
    console.log(result)
    displayElm.textContent = result
})



document.addEventListener('DOMContentLoaded', init)




/* 

1. get the equals element from the dom html

2. attach an onclick event to it that when clicked console log

3. check the operator and based on what it is perform that operation on both numbers and console.log the result

4. display the result in the page
*/