// import rolls from "./rollsData"
//console.log(rolls["Original"].basePrice);       prints 2.49


//--------------------------Setup the class & shopping cart in a set----------------------------------------
class Roll {                                                            // code provided
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

let shoppingCart = new Set();                                         //array to keep the 4 items

//--------------------------Setup the 4 items in HW5-----------------------------------------------------------
//rolls["Original"].basePrice

let bunA = new Roll("Original", "Sugar milk", 1, rolls["Original"].basePrice);      // populate the 4 items
//console.log(bunA);
let bunB = new Roll("Walnut", "Vanilla milk", 12, rolls["Walnut"].basePrice);
let bunC = new Roll("Raisin", "Sugar milk", 3, rolls["Raisin"].basePrice);
let bunD = new Roll("Apple", "Keep original", 3, rolls["Apple"].basePrice);
shoppingCart.add(bunA);                                                               // add the 4 items into the set
shoppingCart.add(bunB);
shoppingCart.add(bunC);
shoppingCart.add(bunD);



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

    let cartElement = clone.querySelector('.product');         //   
    //cartElement.querySelector('.rollNameOp').innerText = "hello";
    //console.log(clone);

    let cartImage = cartElement.querySelector(".product_img"); //get html element (img)
    cartImage.src = "./assets/products/" + rolls[item.type].imageFile;

    let cartItemName = cartElement.querySelector(".rollNameOp");
    cartItemName.innerText = item.type + " Cinnamon Roll";

    let cartGlazing = cartElement.querySelector(".glazingOp");
    cartGlazing.innerText = item.glazing;

    let cartPackSize = cartElement.querySelector(".PackSizeOp");
    cartPackSize.innerText = "Pack Size: " + item.size;

    //calculate the subtotal for each line
    let cartSubtotal = cartElement.querySelector(".SUBtotal");
    let calculatedPriceinCart = calculatePrice(item.basePrice, allGlazingOptions[item.glazing], allPackSizes[item.size]).toFixed(2);
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

for (item of shoppingCart) {
    handleCart(item);
}


// function calculateFinalPrice() {
//     priceCalculation = priceCalculation + 
// }

// new function to calculate the price of items in the current cart



    //let cartItemName = cartElement.querySelector(".rollNameOp");
    //console.log(cartElement.querySelector(".rollNameOp"));
    //
    //
    // console.log(items[0]);

    //make template, name, source, url, call the calculatePrice func price, ---> cartElement.querySelector
    //add to shopping cart -- done
    //change total price ---> document.queryselector
    //delete func
    //calc the total price










// //--------------------------Get the 4 items into the set-----------------------------------------------------------

// function addNewItem(bunBunItem) {
//     shoppingCart.add(bunBunItem);
// }

// for (itemizedItem in fourItems) {
//     addNewItem(itemizedItem);
// }
// // addNewItem(bunA)
// // addNewItem(bunB)
// // addNewItem(bunC)
// // addNewItem(bunD)
// console.log(shoppingCart);
// console.log(allGlazingOptions[bunA.glazing]); // prints 0


// //---------------------------------------calculate subtotal--------------------------------------------------use loop????????

// function calculatePriceinCart() {
//     let glazingPriceinCart = allGlazingOptions[bunB.glazing];        //bunB is not dyamic
//     console.log(glazingPriceinCart);
//     let packSizePriceinCart = allPackSizes[bunB.size];               //bunB is not dyamic
//     console.log(packSizePriceinCart);
//     let calculatedPriceinCart = (rolls["Walnut"].basePrice + glazingPriceinCart) * packSizePriceinCart;        // Not Dynamic: rolls["Walnut"].basePrice
//     console.log("bunB:" + calculatedPriceinCart);

// }
// calculatePriceinCart()

// /* -----------------------------2.2 Display cart items on Cart page (HW5)---------------------------------- */
// function createIteminCart(bunBunItem) {
//     const tempplate = document.querySelector("#cart-template");
//     const clone = template.content.cloneNode(true);
//     // bunBunItem.element = clone.querySelector()   ---->??????????
// }

// //function displayCart(bunBunItem) {
// // pic
// //const cartImage = bunBunItem.
// // name
// // glazing
// // pack size
// // price
// // remove button
// //}

// // -----------------------------2.3 Remove Items from the cart (HW5)----------------------------------
// function removal(bunBunItem) {                                  //Lab 5 materials
//     bunBunItem.element.remove();
//     shoppingCart.delete(bunBunItem);
// }
