// Selecting Elements
const cardHolder = document.querySelector("#card-holder");
const cardNumber = document.querySelector("#CardNumber");
const cardMonth = document.querySelector("#month");
const cardYear = document.querySelector("#year");
// console.log(cardNumber);
// console.log(cardMonth);
// console.log(cardYear);


cardHolder.addEventListener("input", function (e) {
    const cardName = document.querySelector(".value");
    if (e.target.value === "") {
        cardName.textContent = "JANE APPLESEED"
    } else {
        cardName.textContent = (e.target.value).toUpperCase();
    }
})

cardNumber.addEventListener('input', function (e) {
    const cardNum = document.querySelector('.card-number');
    if (e.target.value === "") {
        cardNum.textContent = "0000 0000 0000 0000"
        cardNum.style.fontSize = '29px';
        cardNum.style.letterSpacing = "1px"
    } else {
        cardNum.textContent = e.target.value;
        cardNum.style.fontSize = '28px';
        cardNum.style.letterSpacing = "2px"
    }
    
})