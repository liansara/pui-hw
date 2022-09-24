/* psuedo code:


1. Function: (basePrice + glazingPrice) * packPrice
2. grab glazing and pack options from user
3. Function: update selected options
4. Functions:  change the glazing $ & and the pack selection to calculate the updated price, 
and display the updated price

*/

/* -----------------------------Set up the class---------------------------- */
class Bun {
    constructor(image, productName, basePrice) {
        this.image = image;  //???
        this.productName = productName;  //this is for HW4?
        this.basePrice = basePrice;
    }

    addToCartPrice() {       // calculate the price according to glazing and pack options (aka subtotal)
        return (this.basePrice + glazingPrice) * packSize;
    }

    displaySubtotal() {     // display the subtotal on the detail Page
        return "$" // + ??????
    }
}
let originalRoll = new Bun("product_img", "original Cinnamon roll", 2.49);
let appleRoll = new Bun("product_img", "Apple cinnamon roll", 3.49);
let RaisinRoll = new Bun("product_img", "Raisin cinnamon roll", 2.99);
let walnutRoll = new Bun("product_img", "Walnut cinnamon roll", 3.49);
let doubleChocoRoll = new Bun("product_img", "Double chocolate roll", 3.99);
let strawberryRoll = new Bun("product_img", "Strawberry cinnamon roll", 3.99);

/* -----------------------------Set up all the options in arrays------------------ */
let allGlazingOptions = {
    "Keep original": 0,
    "Sugar milk": 0,
    "Vanilla milk": 0.5,
    "Double chocolate": 1.5,
}

let allPackSizes = {
    1: 1,
    3: 3,
    5: 5,
    10: 10,
}

/* -----------------------------Options Selections ---------------------------- */
// Without using the option tags on HTML, how do I use JS to feed dropdown options on html???? 


function onSelectGlazingChange() {
    selectedGlazingOption = document.querySelector("#glazingOptions").value;   //store what user selected for glazing option
    glazingPrice = allGlazingOptions[selectedGlazingOption]              //retrieve the glazing option price

    document.getElementByID("glazingOptions").innerHTML =   ???         //display the glazing option on screen???
}

function onSelectPackChange() {
    selectedPackOption = document.querySelector("#size");   //store what user selected for pack option
    packSize = allPackSizes[selectedPackOption]
    document.getElementByID("size").innerHTML =    ???    //display the pack option on screen???
}





/* ------- discarded code---------- TA said to use dictionary
allGlazingOptions = ["Keep original", "Sugar milk", "Vanilla milk", "Double chocolate"];
allPackOptions = [1, 3, 5, 10]
*/

/*
    function glazingChange(glazingOptions) {
        if (glazingOptions === "Keep original" || "Sugar milk") {         citation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR
            glazingPrice = 0
        } else if (glazingOptions === "Vanilla milk") {
            glazingPrice = 0.50
        } else {
            glazingPrice = 1.5
        }
    }
    
function packChange(packOptions) {
    if (packOptions === 1) {
        packSize = 1
    } else if (packOptions === 3) {
        packSize = 3
    } else if (packOptions === 5) {
        packSize = 5
    } else if (packOptions === 10) {
        packSize = 10
    }
}
*/


