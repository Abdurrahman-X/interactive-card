// Selecting Elements
const cardHolder = document.querySelector("#card-holder");
const cardNumber = document.querySelector("#CardNumber");
const cardMonth = document.querySelector("#month");
const cardYear = document.querySelector("#year");

const cardName = document.querySelector(".value");
const cardNum = document.querySelector('.card-number');
// console.log(cardNumber);
// console.log(cardMonth);
// console.log(cardYear);

// Add event lister for the input event
cardHolder.addEventListener("input", function (e) {
    // Check if the input field is empty
    if (e.target.value === "") {
        // Update the card name with the original content
        cardName.textContent = "JANE APPLESEED"
    } else {
        // Update the card name with the real-time input value in uppercase
        cardName.textContent = (e.target.value).toUpperCase();
    }
})

// Add event lister for the input event
cardNumber.addEventListener('input', function (e) {
    // Check if the input field is empty
    if (e.target.value === "") {
        // Update the card name with the original content
        cardNum.textContent = "0000 0000 0000 0000"
        // Update the font-size and letter-spacing styles
        cardNum.style.fontSize = '29px';
        cardNum.style.letterSpacing = "1px"
    } else {
        // Update the card number with the input value in real-time
        cardNum.textContent = e.target.value;
         // Update the font-size and letter-spacing styles
        cardNum.style.fontSize = '28px';
        cardNum.style.letterSpacing = "2px"
    } 
})

cardMonth