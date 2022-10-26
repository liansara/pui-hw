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
let cartData = localStorage.getItem("cart");                           // HW6
if (cartData) shoppingCart = new Set(Array.from(JSON.parse(cartData)));

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
    item.type = item.type.replace(/( Cinnamon Roll$)/, '');
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
    cartFinalPrice.innerText = "$ " + totalPrice.toFixed(2);

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
        localStorage.setItem("cart", JSON.stringify(Array.from(shoppingCart)));     //HW6
        console.log(shoppingCart);
    });

}

for (item of shoppingCart) {
    handleCart(item);
}
