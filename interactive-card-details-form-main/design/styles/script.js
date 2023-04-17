// Selecting Elements
const cardHolder = document.querySelector("#card-holder");
const cardNumber = document.querySelector("#CardNumber");
const cardMonth = document.querySelector("#month");
const cardYear = document.querySelector("#year");
const monthYear = document.querySelector(".month-year")
const cvCode = document.querySelector("#cvc")

const cardNameUI = document.querySelector(".value");
const cardNumUI = document.querySelector('.card-number');
const expiryDateUI = document.querySelector('.date')
const cvcUI = document.querySelector('.cvc-value')

const confirmBtn = document.querySelector('#confirm')



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

confirmBtn.addEventListener('click', cardConfirm);

function onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)){
        return setError(cardNumber, 'Phone number can only be numbers');
    } else{
        return setSuccess(cardNumber);
    }
        
}


function setError(input, errorMsg) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('.form-control div');
    errorMessage.classList.add("error");
    errorMessage.textContent = errorMsg;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    const holder = formControl.querySelector('.form-control input')
    holder.classList.add('success')
}

function cardConfirm(event) {
    
    event.preventDefault();

    let allValid;
    
    const validName = cardHolder.value;

    if (validName === "") {
        setError(cardHolder, "Please enter your name!");
        allValid = false;
    } else{
        setSuccess(cardHolder);
        allValid = true;
    }

    const validCard = cardNumber.value;
    console.log(validCard);

    if (validCard === "") {
        setError(cardNumber, "Can't be blank")
        allValid = false;
    } else {
        setSuccess(cardNumber);
        allValid = true;
    }

    const expiryMonth = cardMonth.value;
    const expiryYear = cardYear.value;
    
    if (expiryMonth === "" || expiryYear === "") {
        setError(monthYear, "Can't be blank");
        allValid = false;
    } else {
        setSuccess(cardMonth)
        setSuccess(cardYear);
        allValid = true;
    }

    const code = cvCode.value;

    if (code === "") {
        setError(cvCode, "Can't be blank");
        allValid = false;
    } else {
        setSuccess(cvCode);
        allValid = true;
    }

    console.log(allValid);

    if (allValid === true) {
        window.location.href = 'https://www.goal.com'
    }
}



// function validateName() {
//     const validName = cardHolder.value;
//     console.log(validName);

//     if (validName === "") {
//         setError(cardHolder, "Please enter your name!");
//         allValid = false;
//     } else{
//         setSuccess(cardHolder);
//         allValid = true;
//     }
// }

// function validateCardNumber() {
//     const validCard = cardNumber.value.split(" ").join('');
//     console.log(validCard);

//     if (validCard === "") {
//         setError(cardNumber, "Can't be blank")
//     } else {
//         setSuccess(cardNumber)
//     }
// }

// function validateExpiry() {
//     const expiryMonth = cardMonth.value;
//     const expiryYear = cardYear.value;
    
//     if (expiryMonth === "" || expiryYear === "") {
//         setError(monthYear, "Can't be blank");
//         allValid = false;
//     } else {
//         setSuccess(cardMonth)
//         setSuccess(cardYear);
//         allValid = true;
//     }
// }

// function validateCVC() {
//     const code = cvCode.value;

//     if (code === "") {
//         setError(cvCode, "Can't be blank");
//         allValid = false;
//     } else {
//         setSuccess(cvCode);
//         allValid = true;
//     }
    
// }



// function confirm(e) {
//     e.preventDefault();
    
//     validateName();
//     validateCardNumber();
//     validateExpiry();
//     validateCVC();

//     // if (allValid === true) {
//     //     cardConfirm();
//     // }

//     console.log(allValid);
// }