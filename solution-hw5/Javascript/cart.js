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

console.log(shoppingCart);
//--------------------------Setup the 4 items on cart.html-----------------------------------------------------------
function calculatePrice(basePrice, rollPrice, packPrice) {
    return ((basePrice + rollPrice) * packPrice);
}

for (items of shoppingCart) {
    console.log("hello");

    const template = document.querySelector('template');         // find template in html
    const clone = template.content.cloneNode(true);              // copy the whole template
    document.querySelector(".Cart_content").append(clone);       //put the copied data under the parent of template
    let cartElement = clone.querySelector('.product');         //      
    //cartElement.querySelector('.rollNameOp').innerText = "hello";
    //console.log(clone);

    let cartImage = cartElement.querySelector("product_img"); //get html element (img)
    cartImage.src = "/assets/products/double-chocolate-cinnamon-roll.jpg";

    let cartItemName = cartElement.querySelector(".rollNameOp");
    cartItemName.innerText = "hello";

    let cartGlazing = cartElement.querySelector(".glazingOp");
    cartGlazing.innerText = "check";


    let cartPackSize = cartElement.querySelector("PackSizeOp");
    cartGlazing.innerText = "test";


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

}








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
