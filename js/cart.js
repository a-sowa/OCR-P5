let cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart);
console.log(localStorage);

let emptyCartMsg = () => {
    let cartContainer = document.getElementById('cart-content');
    let msg = createHtmlElement('p', 'empty-cart-msg', 'id', 'emptyCartMsg');
    let link = createHtmlElement('a', 'homepage-link', 'href', 'index.html');
    link.textContent = ` Aller à page d'accueil`;
    msg.textContent = 'Votre panier est vide.'
    msg.appendChild(link);
    cartContainer.appendChild(msg);

}

// --------------------------------DISPLAY CART CONTENT--------------------------------

const getCart = async () => {

    let cartContainer = document.getElementById('cart-content');

    if (cart.length >= 1) {

        // -----------------------TOTAL PRICES CALCULATION------------------------

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const totalPricePerItem = cart.map(el => el.price * el.qty);
        const cartTotalPrice = totalPricePerItem.reduce(reducer);
        const parsedCartTotalPrice = cartTotalPrice.toFixed(2).replace('.', ',')
        // let totalAmountContainer = document.getElementById('total-amount');
        // let totalAmount = createHtmlElement('p', 'cart-total-amount');
        // totalAmount.textContent = `${parsedCartTotalPrice} €`;
        // totalAmountContainer.append(totalAmount);

        let totalAmount = document.getElementById('cart-total-amount');
        console.log(totalAmount)
        totalAmount.innerHTML = `Montant total : ${parsedCartTotalPrice}€`;

        const updateTotalPrice = () => {
            let totalPricePerItem = cart.map(el => el.price * el.qty);
            let cartTotalPrice = totalPricePerItem.reduce(reducer);
            let parsedCartTotalPrice = cartTotalPrice.toFixed(2).replace('.', ',')
            totalAmount.textContent = `${parsedCartTotalPrice} €`;
        }

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
                    <div class="product-price item-line">
                        <h5 class="price-title">Prix</h4>
                        <p class="cart-price"><span>${stringPrice} €</span> </p>
                    </div>

                    <div class="quantity-selector item-line">
                        <!-- <label id="cart-qty-label" for="product-quantity" class="cart-item-qty align-middle mb-0 mb-md-4 py-auto">Quantité</label> -->
                        <h5 class="cart-item-qty">Quantité</h5>
                        <div class="input-block">
                            <button class="qty-minus">-</button>
                            <input type="number" id="product-quantity" name="product-quantity" class="input-qty" value="${itemQty}" min="1" max="100" readonly="readonly">
                            <button class="qty-plus">+</button>
                        </div>
                    </div>

                    <div class="product-total-price item-line">
                        <h5 class="total-price-title">Prix Total</h4>
                        <p class="total-price"><span class="item-total-price">${itemTotalPrice} €</span></p>
                    </div>
                    <button class="remove-product remove-product-desktop" id="removeItemBtn">Supprimer</button>
                </div>`

            cartContainer.append(cartItemTemplate);
            
            let minusBtn = cartItemTemplate.getElementsByClassName('qty-minus');
            let plusBtn = cartItemTemplate.getElementsByClassName('qty-plus');
            let itemPriceToUpdate = cartItemTemplate.getElementsByClassName('item-total-price');
            let qtySelector = cartItemTemplate.getElementsByClassName('input-qty');
            let qtySelectorValue = Number(qtySelector[0].value);
            let removeItemBtns = cartItemTemplate.getElementsByClassName('remove-product');
            removeItemBtns = Array.from(removeItemBtns)
        
            minusBtn[0].addEventListener('click', (event) => {
                event.preventDefault();
                if (qtySelector[0].value != 1) {
                    qtySelector[0].value = --qtySelectorValue;
                    cart[i].qty = qtySelectorValue;
                    localStorage.setItem("cart", JSON.stringify(cart));
                    updateTotalPrice();
                } else {
                    qtySelector[0].value = 1;
                }
                let updatedPrice = itemPrice * cart[i].qty;
                console.log(updatedPrice);
                itemPriceToUpdate[0].textContent = `${getParsedPrice(updatedPrice)} €`;
            });
        
            plusBtn[0].addEventListener('click', (event) => {
                event.preventDefault();
                if (qtySelector[0].value != 100) {
                    qtySelector[0].value = ++qtySelectorValue;
                    cart[i].qty = qtySelectorValue;
                    localStorage.setItem("cart", JSON.stringify(cart));
                    updateTotalPrice();
                }
                let updatedPrice = itemPrice * cart[i].qty;
                itemPriceToUpdate[0].textContent = `${getParsedPrice(updatedPrice)} €`;
            });
        
            for (let btn = 0; btn < removeItemBtns.length; btn++) {
                removeItemBtns[btn].addEventListener('click', (event) => {
                    event.preventDefault();
                    const index = cart.indexOf(cart[i]);
                    if (index > -1) {
                        cart.splice(index, 1);
                        localStorage.setItem("cart", JSON.stringify(cart));
                        window.location.reload();
                    };
                });
            };   
        }
    } else {
        emptyCartMsg();
        document.getElementById('cartSummary').remove();
        document.getElementById('orderForm').remove();
    };
};

getCart()

// ------------------------------------------------------------------------------------------------

