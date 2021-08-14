// ------------REFACTORISER--------------------

const apiUrl = 'http://localhost:3000/api/cameras';

let getAPI = async () => {
    products = await fetch(apiUrl)
        .then(res => res.json())
        .catch((error) => {
            errorMessage();
        })
};

function createNodeWithClasses(element, classes) {
    let htmlElement = document.createElement(element);
    htmlElement.className = classes;
    return htmlElement;
}

function append(parent, el) {
    return parent.appendChild(el);
}
// ---------------------------------------------

let cartParsed = JSON.parse(localStorage.getItem("cart"));
console.log(localStorage);
console.log(cartParsed);

// let qtyParsed = parseFloat(cartParsed[i].qty);

// -----------------------TOTAL PRICES CALCULATION------------------------

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const totalPricePerItem = cartParsed.map(el => el.price * el.qty);
const cartTotalPrice = totalPricePerItem.reduce(reducer);
const parsedCartTotalPrice = cartTotalPrice.toFixed(2).replace('.', ',')
let totalAmountContainer = document.getElementById('total-amount');
let totalAmount = createNodeWithClasses('p', 'cart-total-amount');
totalAmount.textContent = `${parsedCartTotalPrice} €`;
append(totalAmountContainer, totalAmount);

// -------------------------------------------------------------------------


// --------------------------------DISPLAY CART CONTENT--------------------------------

const getCart = async () => {
    await getAPI();

    let cartContainer = document.getElementById('cart-content');

    for (let i = 0; i < cartParsed.length; i++) {
        let cartItem = createNodeWithClasses('div', 'cart-item row px-md-5 py-md-3');
        let numberPrice = Number(cartParsed[i].price);
        let stringPrice = parseFloat(numberPrice).toFixed(2).replace('.', ',');
        let qtyParsed = parseFloat(cartParsed[i].qty);
        let itemTotalPrice = (numberPrice * qtyParsed).toFixed(2).replace('.', ',');
        
        cartItem.innerHTML =
            `<div class="cart-item-headings col-12 d-flex flex-row align-items-center justify-content-between px-4 my-3 col-md-3 flex-md-column px-md-0 my-md-0">
                <img class="product-img-cart mb-md-3" src="${cartParsed[i].img}" alt="">
                <div class="product-details text-right">
                    <h5 class="product-name mb-md-0 text-md-center">${cartParsed[i].name}</h4>
                    <p class="product-option text-md-center mb-md-0">${cartParsed[i].option}</p>
                </div>
            </div>
            

            <div class="cart-item-prices col-12 px-5 col-md-9 d-md-flex flex-md-row justify-content-md-around px-md-5">
                <div class="product-price d-flex flex-row align-items-center justify-content-between py-2 flex-md-column align-items-md-between justify-content-md-center px-md-0 ">
                    <h5 class="price-title mb-0 mb-md-2">Prix</h4>
                    <p class="cart-price mb-0 align-self-md-stretch text-center d-flex justify-content-center"><span class="align-self-center text-center">${stringPrice} €</span> </p>
                </div>
        
                <div class="quantity-selector d-flex flex-row align-items-center justify-content-between py-2 flex-md-column align-items-md-between justify-content-md-center px-md-0 ">
                    <!-- <label id="cart-qty-label" for="product-quantity" class="cart-item-qty align-middle mb-0 mb-md-4 py-auto">Quantité</label> -->
                    <h5 class="cart-item-qty mb-0 mb-md-2">Quantité</h5>
                    <input type="number" id="product-quantity" name="product-quantity" value="${qtyParsed}" min="1" max="100">
                </div>

                <div class="product-total-price d-flex flex-row align-items-center justify-content-between py-2 flex-md-column align-items-md-between justify-content-md-center px-md-0 ">
                    <h5 class="total-price-title mb-0 mb-md-2">Prix Total</h4>
                    <p class="total-price mb-0 align-self-md-stretch d-flex justify-content-center"><span class="align-self-center text-center">${itemTotalPrice} €</span></p>
                </div>
            </div>`

        append(cartContainer, cartItem);
    }

}
getCart();
// ------------------------------------------------------------------------------------------------

// const input = document.querySelector('input');
// const log = document.getElementById('log');
// input.addEventListener('change', updateValue);

// function updateValue(e) {
//     log.textContent = e.target.value;
// }
