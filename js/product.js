// let cart = [];

// let jsonStr = JSON.stringify(cart);
// localStorage.setItem("cart", jsonStr);

console.log(localStorage);


class cartItem {
    constructor(name, option, price, qty, img) {
        this.name = name;
        this.option = option;
        this.price = price;
        this.qty = qty;
        this.img = img;
    }
}

let cartParsed = JSON.parse(localStorage.getItem("cart"));

let cart = [];

function pushToLocalstorage(productToPush) {
    cart.push(productToPush);
    localStorage.setItem("cart", JSON.stringify(cart));
};

const apiUrl = 'http://localhost:3000/api/cameras';

let getAPI = async () => {
    products = await fetch(apiUrl)
        .then(res => res.json())
        .catch((error) => {
            errorMessage();
        })
};

function getURLParams() {
    let params = (new URL(document.location)).searchParams;
    let productId = params.get('id');
    return productId;
}

function createNodeWithClasses(element, classes) {
    let htmlElement = document.createElement(element);
    htmlElement.className = classes;
    return htmlElement;
}

function append(parent, el) {
    return parent.appendChild(el);
}

const displayProduct = async() => {
    await getAPI();
    let product = products.filter(product => product._id === getURLParams());
    let numberPrice = Number(`${product[0].price}e-2`);
    let stringPrice = parseFloat(numberPrice).toFixed(2).replace('.' , ',');

    // SUPPRIMER productContainer
    let main = document.querySelector('main');
    let productContainer = createNodeWithClasses('div', 'container product-container');
    productContainer.innerHTML =
    // --------
        `<div class="row reset-row-padding px-3">
                   
                <div class="col-12 col-lg-6 col-product-img">
                    <img src="${product[0].imageUrl}" class="img-fluid  product-img" alt="...">
                </div>
                
                <div class="col-12 col-lg-6 p-3 d-flex flex-column justify-content-around">
                    
                    <div class="product-headings">
                        <h1 class="">${product[0].name}</h1>
                        <div class="price ">${stringPrice} €</div>
                    </div>
                    

                    <div class="product-option">
                        <div class="quantity-selector pt-3 d-flex flex-row">
                            <label for="product-quantity" class="mr-3">Quantité :</label>
                            <input type="number" id="product-quantity" name="product-quantity" value="1" min="1" max="100">
                        </div>

                        <div class="option-selector py-3">
                            <label for="option-select">Objectif :</label>

                            <select name="option-selector" id="option-select">
                               
                            </select>
                        </div>
                    </div>

                    <a href="#" id="addToCartBtn" class="btn btn-add-to-cart  py-2 px-5 ">AJOUTER AU PANIER</a>
                </div>
            </div>
            <div class="row px-3 pb-5">

                <div class="col d-none d-md-block col-lg-6"></div>

                <div class=" col-12 col-lg-6 product-description pt-3">
                    ${product[0].description}
                    
                    <br>
                    <span class="d-flex flex-row justify-content-center">_____________</span>
                    <br>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    In ipsum quia numquam debitis, cum eveniet consectetur sequi 
                    optio odio error velit iusto ullam mollitia tempore tenetur magni 
                    consequatur fugit facere. 
                    <br><br>
                    

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    In ipsum quia numquam debitis, cum eveniet consectetur sequi 
                    optio odio error velit iusto ullam mollitia tempore tenetur magni 
                    consequatur fugit facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    In ipsum quia numquam debitis, cum eveniet consectetur sequi 
                    optio odio error velit iusto ullam mollitia tempore tenetur magni 
                    consequatur fugit facere.
                </div>
            </div>`

    append(main, productContainer);
    
    const addToCartBtn = document.getElementById("addToCartBtn");
    addToCartBtn.addEventListener('click', async (event) => {
        event.preventDefault();
        await getAPI();
        let product = products.filter(product => product._id === getURLParams());
        let selectedQty = Number(document.getElementById("product-quantity").value);
        let imgProduct = product[0].imageUrl;
        let selectedProduct = new cartItem(product[0].name, product[0].lenses[0], numberPrice, selectedQty, imgProduct);
        pushToLocalstorage(selectedProduct);
        });

    const displayProductOption = async () => {
        await getAPI();
        const optionSelector = document.getElementById("option-select");
        let product = products.filter(product => product._id === getURLParams());
        for (let i = 0; i < product[0].lenses.length; i++) {
            let option = document.createElement("option");
            optionSelector.appendChild(option);
            option.textContent = product[0].lenses[i];
        };
    };

    displayProductOption();
};

displayProduct();


console.log(cartParsed);