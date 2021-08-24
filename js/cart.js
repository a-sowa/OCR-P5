
let cart = JSON.parse(localStorage.getItem("cart"));
console.log(localStorage);
console.log(cart);

// let qtyParsed = parseFloat(cart[i].qty);

// -----------------------TOTAL PRICES CALCULATION------------------------

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const totalPricePerItem = cart.map(el => el.price * el.qty);
const cartTotalPrice = totalPricePerItem.reduce(reducer);
const parsedCartTotalPrice = cartTotalPrice.toFixed(2).replace('.', ',')
let totalAmountContainer = document.getElementById('total-amount');
let totalAmount = createHtmlElement('p', 'cart-total-amount');
totalAmount.textContent = `${parsedCartTotalPrice} €`;
totalAmountContainer.append(totalAmount);

// -------------------------------------------------------------------------

// --------------------------------EMPTY CART-------------------------------- 

// const clearCart = () => {
//     localStorage.removeItem('cart');
//     window.location.reload();
//     console.log(localStorage);
// }

// let emptyCartBtn = document.getElementById('empty-cart');

// emptyCartBtn.addEventListener('click', () => clearCart());

// ----------------------------------------------------------------


// --------------------------------DISPLAY CART CONTENT--------------------------------

const getCart =  () => {
    

    let cartContainer = document.getElementById('cart-content');
    
    for (let i = 0; i < cart.length; i++) {
        let cartItemTemplate = createHtmlElement('div', 'cart-item row px-md-5 py-md-3');
        let numberPrice = Number(cart[i].price);
        let stringPrice = parseFloat(numberPrice).toFixed(2).replace('.', ',');
        let qtyParsed = parseFloat(cart[i].qty);
        let itemTotalPrice = (numberPrice * qtyParsed).toFixed(2).replace('.', ',');
        
        cartItemTemplate.innerHTML =
            `<div class="cart-item-headings">
                <img class="product-img-cart" src="${cart[i].img}" alt="">
                <div class="product-details">
                    <h5 class="product-name">${cart[i].name}</h5>
                    <p class="product-option">${cart[i].option}</p>
                    <button class="remove-product" id="removeItemBtn">Supprimer<button>
                </div>
            </div>


            <div class="cart-item-prices">
                <div class="product-price">
                    <h5 class="price-title">Prix</h4>
                    <p class="cart-price">${stringPrice} €</span> </p>
                </div>

                <div class="quantity-selector">
                    <!-- <label id="cart-qty-label" for="product-quantity" class="cart-item-qty align-middle mb-0 mb-md-4 py-auto">Quantité</label> -->
                    <h5 class="cart-item-qty">Quantité</h5>
                    <input type="number" id="product-quantity" name="product-quantity" class="input-qty" value="${qtyParsed}" min="1" max="100">
                </div>

                <div class="product-total-price">
                    <h5 class="total-price-title">Prix Total</h4>
                    <p class="total-price"><span class="">${itemTotalPrice} €</span></p>
                </div>
            </div>`

        cartContainer.append(cartItemTemplate);  

        let removeItemBtn = document.getElementsByClassName('remove-product');
        

        let test = cartItemTemplate.getElementsByClassName('remove-product');
        console.log(test);

    };

   

    
     
};


getCart();  




// let itemsInCart = document.querySelectorAll('remove-product');
// console.log(itemsInCart);

// Array.from(removeItemBtn).forEach(btn => 
//     btn.addEventListener('click', (event) => {
//         event.preventDefault();  
//         Array.from(cart).pop(btn);
//         console.log(cart);
//     };
// );



    

// ------------------------------------------------------------------------------------------------


