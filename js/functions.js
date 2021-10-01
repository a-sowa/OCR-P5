const createHtmlElement = (element, classValue, attribute, attributeValue) => {
    let htmlElement = document.createElement(element)
    htmlElement.setAttribute('class', classValue);
    if (attribute && attributeValue) {
        htmlElement.setAttribute(attribute, attributeValue);
        return htmlElement;
    } else {
        return htmlElement;
    }
}

const correctingApiPrices = price => Number(`${price}e-2`);

const displayDecimalPrice = price => parseFloat(price).toFixed(2).replace('.', ',');


const getProducts = async () => {
    products = await fetch(camerasApiUrl)
        .then(res => res.json())
        .catch(() => {
            errorMessage();
        });
}


const getApiParsedPrice = (price) => {
    let numberPrice = Number(`${price}e-2`);
    let parsedPrice = parseFloat(numberPrice).toFixed(2).replace('.' , ',');
    return parsedPrice;
}

const getParsedPrice = (price) => {
    let parsedPrice = parseFloat(price).toFixed(2).replace('.' , ',');
    return parsedPrice;
}

function getURLParams() {
    let params = (new URL(document.location)).searchParams;
    let productId = params.get('id');
    return productId;
}

function pushToLocalstorage(productToPush) {
    cartParsed.push(productToPush);
    localStorage.setItem("cart", JSON.stringify(cartParsed));
};
