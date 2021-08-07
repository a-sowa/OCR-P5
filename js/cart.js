class cartItem {
    constructor(name, option, price, count) {
        this.name = name;
        this.option = option;
        this.price = price;
        this.count = count;
    }
}

let cartId = "cart";

const saveCart = (cartItem) => {
    let jsonStr = JSON.stringify(cartItem);
    localStorage.setItem( cartId, jsonStr );
    
}

let cartValue = localStorage.getItem(cartId);
let cartObj = JSON.parse(cartValue);


//  IDEE POUR LA SUITE : 

//     CONNECTER L'API
//     REGROUPER LES DONNES DES PRODUCTS DANS cartItem 
//     FAIIRE UNN TEST CONSOLE LOG