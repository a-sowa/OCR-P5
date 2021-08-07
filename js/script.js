const productsRows = document.getElementById('products-rows');
const apiUrl = 'http://localhost:3000/api/cameras';

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
        return products.map(function (product) {
            let divCol = createNodeWithClasses('div', 'col-12 col-sm-6 col-lg-4');
            let divCard = createNodeWithClasses('a', 'card mb-5 mx-4 mx-sm-0');
            let divCardBody = createNodeWithClasses('div', 'card-body d-flex justify-content-between');
            let imgProduct = createNodeWithClasses('img', 'card-img-top');
            let h5 = createNodeWithClasses('h5', 'card-title text-dark');
            let p = createNodeWithClasses('p', 'card-text text-dark');
            imgProduct.src = product.imageUrl;

            // CHANGER innerHTML pour textContent 
            h5.innerHTML = `${product.name}`;
            p.innerHTML = `${product.price} €`;
            // -----

            divCard.href = `./product.html?id=${product._id}`;
            
            append(divCardBody, h5);
            append(divCardBody, p);
            append(divCard, imgProduct);
            append(divCard, divCardBody);
            append(divCol, divCard);
            append(productsRows, divCol);
        })
    })
    .catch(function (error) {
        console.log(error);
    });


function getURLParams() {
    let params = (new URL(document.location)).searchParams;
    let productId = params.get('id');
    console.log(productId);
}


