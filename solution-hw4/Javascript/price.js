class Roll {                                                                   //code provided
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

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

// console.log(rollType);


let rollHeading = document.querySelector(".menu");
let rollPrice = document.querySelector(".AddtoCart_box p");
let rollImage = document.querySelector(".product_img");

rollHeading.innerText = rollType + " Cinnamon Roll";
rollPrice.innerText = rolls[rollType].basePrice;
rollImage.src = "assets/products/" + rolls[rollType].imageFile;



//document.querySelector(".product_img").src = "assets/products/walnut-cinnamon-roll.jpg";

//console.log(document.querySelector(".AddtoCart_box p"));
//console.log(rolls[rollType].basePrice);
// let document.querySelector("product_img").src = "assets/products/double-chocolate-cinnamon-roll.jpg";



function AddingtoCart() {
    let rollName = rollType + " Cinnamon Roll";
    let selectedGlazing = document.querySelector("#glazingOptions").value; //finds the current selection in dropdown 1
    let selectedPackSize = document.querySelector("#size").value;

    let roll = new Roll(rollName, selectedGlazing, selectedPackSize, rolls[rollType].basePrice);
    console.log(roll);
    cart.push(roll);
    console.log(cart); //remember to KEEP THIS and delete other console logs
}





/* -------------------------------------Set up the Add to Cart functions---------------------------------- */
function calculatePrice() {
    selectedGlazingOption = document.querySelector("#glazingOptions").value;   //gets selected value from 1st dropdown
    selectedPackSize = document.querySelector("#size").value;                  //gets selected value from 2nd dropdown
    let glazingPrice = allGlazingOptions[selectedGlazingOption];               //gets the glazing price from the dictionary
    let packSizePrice = allPackSizes[selectedPackSize];                        //gets the pack price adaption from the dictionary
    let finalPrice = (2.49 + glazingPrice) * packSizePrice;                   //calculates the math
    displayPrice(finalPrice);
}

function displayPrice(finalPrice) {
    let displayPrice = document.querySelector(".AddtoCart_box p");             //get the element we want to change
    let roundPrice = finalPrice.toFixed(2);                                     // make sure it displays 2 decimals
    displayPrice.innerText = "$" + roundPrice;                                 //change the element in html & show $ sign 
}




