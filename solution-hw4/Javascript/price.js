/* -----------------------------Set up all the options in arrays---------------------------------- */
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

/* -------------------------------------Set up the functions---------------------------------- */
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



// --------------------------------------converting HTML to JS (notes to self) -------------------------------------------------
//-------TO CREATE AND ADD CHILDREN TO DROPDOWN------

//1. make this element <option value="Keep original">Keep original</option>
// var opt = document.createElement('option'); //opt = <option></option>
// opt.value = "Keep original"; //opt = <option value = "Keep original"></option>
// opt.innerText = "Keep original"; //opt = <option value="Keep original">Keep original</option>

//2. find the dropdown
// selectedGlazingOption = document.querySelector("#glazingOptions");
// console.log(selectedGlazingOption);


//3. add that element
// selectedGlazingOption.appendChild(opt);
//-----------------------------------------------



