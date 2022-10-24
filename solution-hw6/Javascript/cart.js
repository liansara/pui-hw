// import rolls from "./rollsData"
//console.log(rolls["Original"].basePrice);       prints 2.49


//--------------------------Setup the class & shopping cart in a set----------------------------------------
// class Roll {                                                            // code provided
//     constructor(rollType, rollGlazing, packSize, rollPrice) {
//         this.type = rollType;
//         this.glazing = rollGlazing;
//         this.size = packSize;
//         this.basePrice = rollPrice;
//     }
// }

let shoppingCart = new Set();                                         //array to keep the 4 items

//--------------------------Setup the 4 items in HW5-----------------------------------------------------------
//rolls["Original"].basePrice

// let bunA = new Roll("Original", "Sugar milk", 1, rolls["Original"].basePrice);      // populate the 4 items
// //console.log(bunA);
// let bunB = new Roll("Walnut", "Vanilla milk", 12, rolls["Walnut"].basePrice);
// let bunC = new Roll("Raisin", "Sugar milk", 3, rolls["Raisin"].basePrice);
// let bunD = new Roll("Apple", "Keep original", 3, rolls["Apple"].basePrice);
// shoppingCart.add(bunA);                                                               // add the 4 items into the set
// shoppingCart.add(bunB);
// shoppingCart.add(bunC);
// shoppingCart.add(bunD);



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


//--------------------------Setup the 4 items on cart.html-----------------------------------------------------------

function calculatePrice(basePrice, glazingPrice, packPrice) {
    return (parseFloat(basePrice + glazingPrice) * packPrice);
}

let totalPrice = 0;


function handleCart(item) {

    const template = document.querySelector('template');         // find template in html
    const clone = template.content.cloneNode(true);              // copy the whole template

    let cartElement = clone.querySelector('.product');

    // let cartImage = cartElement.querySelector(".product_img"); //get html element (img)
    // cartImage.src = "./assets/products/" + rolls[item.type].imageFile;
    // //cartImage.src = "./assets/products/" + rolls[item.type].imageFile;

    let cartItemName = cartElement.querySelector(".rollNameOp");
    // cartItemName.innerText = item.type + " Cinnamon Roll";
    cartItemName.innerText = localStorage.getItem("storedRolls").type + " Cinnamon Roll";

    let cartGlazing = cartElement.querySelector(".glazingOp");
    cartGlazing.innerText = localStorage.getItem("storedRolls").glazing;

    let cartPackSize = cartElement.querySelector(".PackSizeOp");
    cartPackSize.innerText = "Pack Size: " + localStorage.getItem("storedRolls").size;

    //calculate the subtotal for each line
    let cartSubtotal = cartElement.querySelector(".SUBtotal");
    let calculatedPriceinCart = calculatePrice(localStorage.getItem("storedRolls").basePrice, allGlazingOptions[localStorage.getItem("storedRolls").glazing], allPackSizes[localStorage.getItem("storedRolls").size]).toFixed(2);
    cartSubtotal.innerText = "$ " + calculatedPriceinCart;

    //calculate the total price for the cart 
    let cartFinalPrice = document.querySelector(".price_block");
    totalPrice = totalPrice + parseFloat(calculatedPriceinCart);
    cartFinalPrice.innerText = "$ " + totalPrice;

    //
    document.querySelector(".Cart_content").append(clone);       //put the copied data under the parent of template

    let needToDelete = cartElement.querySelector(".product .REMOVE");
    needToDelete.addEventListener("click", () => {
        let totalPrice = parseFloat(document.querySelector(".price_block").innerText.slice(2));
        totalPrice = totalPrice - parseFloat(calculatedPriceinCart);
        document.querySelector(".price_block").innerText = "$ " + totalPrice.toFixed(2);
        console.log(calculatedPriceinCart);
        console.log(totalPrice);
        cartElement.remove();
        shoppingCart.delete(item);
        console.log(shoppingCart);
    });

}

for (item of localStorage.getItem("storedRolls")) {
    handleCart(item);
}