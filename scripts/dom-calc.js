
// lets put the consts here 
const buttonNumElm = document.getElementById('#button number')
const buttonOpClkElm = document.getElementById('#button operator')
const displayElm = document.getElementById('#display')
console.log()


//put your functions here 
function init(user, numOne,numTwo) {
if (user === "+"){
    return(numOne + numTwo)
} else if (user === "-"){
    return (numOne - numTwo)
} else if (user === "*"){
return (numOne * numTwo)
} else if (user === '/') {
    return (numOne / numTwo)
}
}
function buttonNumElm(){
return display.value += input
}
//event listeners
document.addEventListener('DOMContentLoaded', init)