// Selecting Elements
const cardHolder = document.querySelector("#card-holder");
const cardNumber = document.querySelector("#CardNumber");
const cardMonth = document.querySelector("#month");
const cardYear = document.querySelector("#year");
const cvCode = document.querySelector("#cvc")

const cardNameUI = document.querySelector(".value");
const cardNumUI = document.querySelector('.card-number');
const expiryDateUI = document.querySelector('.date')
const cvcUI = document.querySelector('.cvc-value')



// Add event listener to the card holder's name input
cardHolder.addEventListener("input", function (e) {
    // Check if the input field is empty
    if (e.target.value === "") {
        // Update the card name with the original content
        cardNameUI.textContent = "JANE APPLESEED"
    } else {
        // Update the card name with the real-time input value in uppercase
        cardNameUI.textContent = (e.target.value).toUpperCase();
    }
})

// Add event listener to the card number input
cardNumber.addEventListener('input', function (e) {
    // Check if the input field is empty
    if (e.target.value === "") {
        // Update the card name with the original content
        cardNumUI.textContent = "0000 0000 0000 0000"
        // Update the font-size and letter-spacing styles
        cardNumUI.style.fontSize = '29px';
        cardNumUI.style.letterSpacing = "1px"
    } else {
        // Update the card number with the input value in real-time
        cardNumUI.textContent = e.target.value;
         // Update the font-size and letter-spacing styles
        cardNumUI.style.fontSize = '28px';
        cardNumUI.style.letterSpacing = "2px"
    } 
})

// Add event listener to the expiry month and year
cardMonth.addEventListener('input', updateDateInput);
cardYear.addEventListener('input', updateDateInput);

// Function to update the expiry month and year values.
function updateDateInput(e) {
    // Get the values of the month and year input fields
    var month = cardMonth.value;
    var year = cardYear.value;
    
    // Check if both input fields are empty
    if (month === "" && year === "") {
        // Update the expiry dates with the original content
        expiryDateUI.textContent = "00/00";

        // Check if the month input field is empty
    } else if (month === "") {
        // Update the UI accordingly
        expiryDateUI.textContent = `00/${year}`;

        // Check if the year input field is empty
    } else if (year === "") {
        // Update the UI accordingly
        expiryDateUI.textContent = `${month}/00`

    } else {
        // Update the expiry dates in real-time
        expiryDateUI.textContent = `${month}/${year}`
    }
}

// Add event listener to cvc-code
cvCode.addEventListener('input', function (e) {
    // Check if input field is empty
    if (e.target.value === "") {
        // Update the cvc code with the original content
        cvcUI.textContent = "000"
    } else {
        // Update the cvc code with the input value in real-time
        cvcUI.textContent = e.target.value;
    } 
})

//---------------------------- FORM VALIDATION ---------------------------------