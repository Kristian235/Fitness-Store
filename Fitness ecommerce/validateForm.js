let purchaseBtn = document.getElementById("purchase-button");
let firstName = document.getElementById("first-name");
let firstNameRegex = /[A-Z]{1}[a-z]+/g;
let lastName = document.getElementById("last-name");
let lastNameRegex = /[A-Z]{1}[a-z]+/g;
let phoneNumber = document.getElementById("phone-number");
let phoneNumberRegex = /[0-9]{10}/g;
let city = document.getElementById("city");
let cityRegex = /[A-Z]{1}[a-z]+/g;

let form = document.getElementById("form");

purchaseBtn.addEventListener("click", validateInputs);

function validateInputs(e){
    let firstNameText = firstName.value;
    let firstNameMatch = firstNameText.match(firstNameRegex);
    
    let lastNameText = lastName.value;
    let lastNameMatch = lastNameText.match(lastNameRegex);

    let phoneNumberText = phoneNumber.value;
    let phoneNumberMatch = phoneNumberText.match(phoneNumberRegex);

    let cityText = city.value;
    let cityMatch = cityText.match(cityRegex);

    let errorText = document.createElement("h1");
    errorText.style.color = "red";
    errorText.style.fontSize = "1.3em";
    errorText.style.color = "red";
    errorText.style.fontFamily = "Roboto';font-size: 22px;";

    if(!firstNameMatch){
        e.preventDefault();
        errorText.textContent = "Correct First Name";
        firstName.style.border = "2px solid red";  
    }else{
        firstName.style.border = "2px solid black";
    }
    if(!lastNameMatch){
        e.preventDefault();
        errorText.textContent = "Correct Last Name";
        lastName.style.border = "2px solid red";  
    }else{
        lastName.style.border = "2px solid black";
    }
    if(!phoneNumberMatch){
        e.preventDefault();
        errorText.textContent = "Correct Pone Number";
        phoneNumber.style.border = "2px solid red";  
    }else{
        phoneNumber.style.border = "2px solid black";
    }
    if(!cityMatch){
        e.preventDefault();
        errorText.textContent = "Correct City";
        city.style.border = "2px solid red";  
    }else{
        city.style.border = "2px solid black";
    }
}
