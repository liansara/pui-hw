/* --------------HW6 -------------------*/
class Roll {                                                            // copy from cart.js & commented them out in cart.js
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

let shoppingCart = new Set();



/* -----------------------------Set up all the options---------------------------------- */
let allGlazingOptions = {
    "Keep original": 0,
    "Sugar milk": 0,
    "Vanilla milk": 0.5,
    "Double chocolate": 1.5,
}

let allPackSizes = {
    1: 1,
    3: 3,
    6: 5,
    12: 10,
}

selectedGlazingOption = document.querySelector("#glazingOptions");
for (bunNames in allGlazingOptions) {                                 // loop to add glazing options 
    var opt = document.createElement('option');                       // replace the option tags in html with these code. source: https://www.w3schools.com/jsref/met_document_createelement.asp
    opt.value = bunNames;
    opt.innerText = bunNames;
    selectedGlazingOption.appendChild(opt);
}

selectedPackSize = document.querySelector("#size");
for (bunPack in allPackSizes) {                                         // loop to add pack options
    var opt = document.createElement('option');                         // replace the option tags in html with these code
    opt.value = bunPack;
    opt.innerText = bunPack;
    selectedPackSize.appendChild(opt);
}

/* -------------------------------------HW4 dynamic Detail Page Heading, Image, Price---------------------------------- */
const queryString = window.location.search;             // code provided 
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');                    // replacing the end of the URL to the name of the buns

let rollHeading = document.querySelector(".menu");
let rollPrice = document.querySelector(".AddtoCart_box p");
let rollImage = document.querySelector(".product_img");

rollHeading.innerText = rollType + " Cinnamon Roll";
rollPrice.innerText = rolls[rollType].basePrice;
rollImage.src = "assets/products/" + rolls[rollType].imageFile;

function AddingtoCart() {
    let rollName = rollType + " Cinnamon Roll";
    let selectedGlazing = document.querySelector("#glazingOptions").value; //finds the current selection in dropdown 1
    let selectedPackSize = document.querySelector("#size").value;

    let roll = new Roll(rollName, selectedGlazing, selectedPackSize, rolls[rollType].basePrice);
    shoppingCart.add(roll);
    console.log(shoppingCart); //remember to KEEP THIS and delete other console logs
    saveToLocalStorage()

}





/* -------------------------------------Set up the Add to Cart functions---------------------------------- */
function calculatePrice() {
    selectedGlazingOption = document.querySelector("#glazingOptions").value;   //gets selected value from 1st dropdown
    //console.log("printing sekected glz option:" + selectedGlazingOption);
    selectedPackSize = document.querySelector("#size").value;                  //gets selected value from 2nd dropdown
    //console.log("printing sekected pack size option:" + selectedPackSize);
    let glazingPrice = allGlazingOptions[selectedGlazingOption];               //gets the glazing price from the dictionary
    let packSizePrice = allPackSizes[selectedPackSize];                        //gets the pack price adaption from the dictionary
    let itemPrice = (rolls[rollType].basePrice + glazingPrice) * packSizePrice;                   //calculates the math
    displayPrice(itemPrice);
}

function displayPrice(itemPrice) {
    let displayPrice = document.querySelector(".AddtoCart_box p");             //get the element we want to change
    let roundPrice = itemPrice.toFixed(2);                                     // make sure it displays 2 decimals
    displayPrice.innerText = "$" + roundPrice;                                 //change the element in html & show $ sign 
}



/* --------------HW6 local storage-------------------*/
function saveToLocalStorage() {
    let rollArray = Array.from(shoppingCart);
    //console.log("print cart1:" + shoppingCart);

    let rollArrayString = JSON.stringify(rollArray);
    //console.log("print rollArray:" + rollArrayString);

    localStorage.setItem("storedRolls", rollArrayString);
}

function retrieveFromLocalStorage() {
    let rollArrayString = localStorage.getItem("storedRolls")
    let rollArray = JSON.parse(rollArrayString);
    for (let rollData of rollArray) {
        let roll = AddingtoCart();
    }
}

if (localStorage.getItem("storedRolls") != null) {
    retrieveFromLocalStorage();
}


// Lab 6 note: If you want to reset your localStorage, type localStorage.clear() in the developer console.