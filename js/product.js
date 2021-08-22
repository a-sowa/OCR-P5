
const camerasApiUrl = 'http://localhost:3000/api/cameras';
class cartItem {
    constructor(id, name, option, price, qty, img) {
        this.id = id;
        this.name = name;
        this.option = option;
        this.price = price;
        this.qty = qty;
        this.img = img;
    }
}

let productImg = document.getElementById('productImg');
let productName = document.getElementById('productName');
let productPrice = document.getElementById('productPrice');
let productDescription = document.getElementById('productDescription');
let qtySelector = document.getElementById("qtySelector");
let optionSelector = document.getElementById("optionSelector");
let addToCartBtn = document.getElementById("addToCartBtn");
let cart = JSON.parse(localStorage.getItem("cart"));


const displayProductOption = (product) => {
    for (let i = 0; i < product[0].lenses.length; i++) {
        let option = document.createElement("option");
        optionSelector.appendChild(option);
        option.textContent = product[0].lenses[i];
    };
};

const displayProductNew = async() => {
    await getProducts();

    let product = products.filter(product => product._id === getURLParams());
    console.log(product)
    productImg.src = product[0].imageUrl
    productName.textContent = product[0].name; 
    productPrice.textContent = displayDecimalPrice(correctingApiPrices(product[0].price)) + ` €`;
    productDescription.textContent = product[0].description;

    displayProductOption(product);
    
    addToCartBtn.addEventListener('click', (event) => {
        event.preventDefault();
        let imgProduct = product[0].imageUrl;
        let selectedQty = Number(qtySelector.value);
        let selectedLense = optionSelector.value;
        let selectedProduct = new cartItem(product[0]._id, product[0].name, selectedLense, correctingApiPrices(67789), selectedQty, imgProduct);
        let itemIsInCart = cart.find(cart => cart["id"] == selectedProduct._id || cart["option"] == selectedProduct.option);
        if (cart === null) {
            cart = [];
        };
        if (itemIsInCart) {
            console.log(cart);
            itemIsInCart.qty++;
            console.log(cart);
        } else {
            cart.push(selectedProduct);
            console.log(cart);
        };
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log(localStorage);
    });
}

displayProductNew();

// localStorage.clear();