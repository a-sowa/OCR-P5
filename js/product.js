const apiUrl = 'http://localhost:3000/api/cameras';

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

fetch(apiUrl)
    .then((resp) => resp.json())
    .then(function (dataProducts) {
        let products = dataProducts;
        let product = products.filter(product => product._id === getURLParams())
        let main = document.querySelector('main')
        let productContainer = createNodeWithClasses('div', 'container product-container');
        productContainer.innerHTML =
            `<div class="row reset-row-padding px-3">
                   
                <div class="col-12 col-lg-6 col-product-img">
                    <img src="${product[0].imageUrl}" class="img-fluid  product-img" alt="...">
                </div>
                
                <div class="col-12 col-lg-6 p-3 d-flex flex-column justify-content-around">
                    
                    <div class="product-headings">
                        <h1 class="">${product[0].name}</h1>
                        <div class="price ">${product[0].price}€</div>
                    </div>
                    

                    <div class="product-option">
                        <div class="quantity-selector pt-3 d-flex flex-row">
                            <label for="product-quantity" class="mr-3">Quantité :</label>
                            <input type="number" id="product-quantity" name="product-quantity" min="1" max="100">
                        </div>

                        <div class="option-selector  py-3">
                            <label for="lense-choice" class="mr-3">Objectif :</label>
                            <input list="lenses" id="lense-choice" name="lense-choice" />

                            <datalist id="lenses">
                                <option value="${product[0].lenses[0]}">
                                <option value="${product[0].lenses[1]}">
                            </datalist>
                        </div>
                    </div>

                    <a href="#" class="btn btn-add-to-cart  py-2 px-5 ">AJOUTER AU PANIER</a>
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
    })
    .catch(function (error) {
        console.log(error);
    });