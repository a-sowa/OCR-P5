const camerasApiUrl = 'http://localhost:3000/api/cameras';

const createProductCard = (name, imgSrc, price, url) => {
    let productsGrid = document.getElementById('products-grid');
    let cardContainer = createHtmlElement('div', 'product-card');
    let cardUrl =  createHtmlElement('a', 'card', 'href', url);
    let itemImg = createHtmlElement('img', 'product-card__img', 'src', imgSrc);
    let cardBodyContainer = createHtmlElement('div', 'product-card__body')
    let itemTitle = createHtmlElement('h5', 'card-body-title');
    itemTitle.textContent = name;
    let itemPrice = createHtmlElement('p', 'card-body-text');
    itemPrice.textContent =  price + ` €` ;

    cardBodyContainer.appendChild(itemTitle);
    cardBodyContainer.appendChild(itemPrice);
    cardUrl.appendChild(itemImg);
    cardUrl.appendChild(cardBodyContainer);
    cardContainer.appendChild(cardUrl)
    productsGrid.appendChild(cardContainer);
};

const displayProduct = async () => {
    await getProducts();
    return products.slice(0, 6).map((product) => {
        let productHref = `./product.html?id=${product._id}`;
        createProductCard(product.name, product.imageUrl, getParsedPrice(product.price), productHref) ;
    })
}

displayProduct();






