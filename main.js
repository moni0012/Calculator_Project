//selecting all buttons defined in HTML (display, operators, functions, numbers)

const valueE = document.querySelector('.value');

const acE = document.querySelector('.ac');
const pmE = document.querySelector('.pm');
const percentageE = document.querySelector('.percentage');

const additionE = document.querySelector('.addition');
const subtractionE = document.querySelector('.subtraction');
const multiplicationE = document.querySelector('.multiplication');
const divisionE = document.querySelector('.division');
const equalE = document.querySelector('.percentage');

const decimalE = document.querySelector('.decimal');
const number0E = document.querySelector('.number-0');
const number1E = document.querySelector('.number-1');
const number2E = document.querySelector('.number-2');
const number3E = document.querySelector('.number-3');
const number4E = document.querySelector('.number-4');
const number5E = document.querySelector('.number-5');
const number6E = document.querySelector('.number-6');
const number7E = document.querySelector('.number-7');
const number8E = document.querySelector('.number-8');
const number9E = document.querySelector('.number-9');

const numberEArray = [number0E, number1E, number2E, number3E, number4E, number5E, number6E, number7E, number8E, number9E];

//Function to display the current text content

const getValueAsStr = () => {
    const currentValueStr = valueE.textContent;
    return currentValueStr.split(',').join('');
}

//Function returning the above string which includes commas into number

const getValueAsNum = () => {
    return parseFloat(getValueAsStr())
}

//Function once number is clicked

const handleNumberClick = ((numStr) => {         // string representation of number
    // console.log(numStr); this is just to check if my number clicked on the calculator is working
    const currentValueStr = getValueAsStr();       // taking the contents of display 

    // to remove 0 from the display contenet 
    if (currentValueStr === '0') {
        valueE.textContent = numStr;
    } else {
        valueE.textContent =
            parseFloat(currentValueStr + numStr).toLocaleString(); //to conver string to numbers and for commas for thousand values used toLocaleString
    }
})

// Adding Event Listener to numbers and decimal buttons


for (let i = 0; i < numberEArray.length; i++) {
    const numberE = numberEArray[i];
    // console.log(numberE)
    numberE.addEventListener('click', () => {
        // call function when a number is clicked
        handleNumberClick(i.toString());      // to make the integer index clicked to string
    })
}
decimalE.addEventListener('click', () => {
    const currentValueStr = getValueAsStr();
    //   valueE.textContent = currentValueStr + '.';  this is to include dot but it's taking more than one dot
    if (!currentValueStr.includes('.')) {
        valueE.textContent = currentValueStr + '.'
    }
})