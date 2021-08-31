
let cart = JSON.parse(localStorage.getItem("cart"));
console.log(localStorage);
console.log(cart);

// let qtyParsed = parseFloat(cart[i].qty);

let emptyCartMsg = () => {
    let cartContainer = document.getElementById('cart-content');
    let msg = createHtmlElement('p', 'empty-cart-msg', 'id', 'emptyCartMsg');
    msg.textContent = 'Votre panier est vide.'
    cartContainer.appendChild(msg);

}



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

const getCart = async () => {

    let cartContainer = document.getElementById('cart-content');
   
    if (cart.length >= 1) {

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

        for (let i = 0; i < cart.length; i++) {
            let cartItemTemplate = createHtmlElement('div', 'cart-item row px-md-5 py-md-3');
            let itemPrice = Number(cart[i].price);
            let stringPrice = parseFloat(itemPrice).toFixed(2).replace('.', ',');
            let itemQty = cart[i].qty;
            let itemTotalPrice = (itemPrice * itemQty).toFixed(2).replace('.', ',');

            cartItemTemplate.innerHTML =
                `<div class="cart-item-headings">
                    <img class="product-img-cart" src="${cart[i].img}" alt="">
                    <div class="product-details">
                        <h5 class="product-name">${cart[i].name}</h5>
                        <p class="product-option">${cart[i].option}</p>
                        <button class="remove-product remove-product-mobile" id="removeItemBtn">Supprimer</button>
                    </div>
                </div>


                <div class="cart-item-prices">
                    <div class="product-price">
                        <h5 class="price-title">Prix</h4>
                        <p class="cart-price"><span>${stringPrice} €</span> </p>
                    </div>

                    <div class="quantity-selector">
                        <!-- <label id="cart-qty-label" for="product-quantity" class="cart-item-qty align-middle mb-0 mb-md-4 py-auto">Quantité</label> -->
                        <h5 class="cart-item-qty">Quantité</h5>
                        <input type="number" id="product-quantity" name="product-quantity" class="input-qty" value="${itemQty}" min="1" max="100">
                    </div>

                    <div class="product-total-price">
                        <h5 class="total-price-title">Prix Total</h4>
                        <p class="total-price"><span class="">${itemTotalPrice} €</span></p>
                    </div>
                    <button class="remove-product remove-product-desktop" id="removeItemBtn">Supprimer</button>
                </div>`

            cartContainer.append(cartItemTemplate);

        };

    } else {
        emptyCartMsg();
        document.getElementById('cartSummary').remove();
        document.getElementById('orderForm').remove();
    };
    
    let removeBtnList = document.getElementsByClassName('remove-product');
    console.log(removeBtnList);
    removeBtnList = Array.from(removeBtnList);
    console.log(removeBtnList);

    for (let btn = 0 ; btn < removeBtnList.length ; btn++) {
        removeBtnList[btn].addEventListener('click', (event) => {
            event.preventDefault()
            cart.splice(btn, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            window.location.reload();
        });
    }

    let qtySelectorsList = document.getElementsByClassName('input-qty');
    console.log(qtySelectorsList);
    qtySelectorsList = Array.from(qtySelectorsList);
    console.log(qtySelectorsList);

    for (let input = 0 ; input < qtySelectorsList.length ; input++) {
        qtySelectorsList[input].addEventListener('change', (event) => {
            event.preventDefault()
            console.log('wshmaggle');
        });
    }
};


getCart();

// ------------------------------------------------------------------------------------------------


