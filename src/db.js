function addToDb(id) {
    // empty object is a truthy value (set to the varibale shoppingCart when favItems is null )
    //  null is a falsy value (returned when local storage has no Item named favItems)
    let shoppingCart = JSON.parse(localStorage.getItem("favItems")) || {};
    if (shoppingCart[id]) {
        const count = parseInt(shoppingCart[id]) + 1;
        shoppingCart[id] = count;
        localStorage.setItem("favItems", JSON.stringify(shoppingCart));
    } else {
        shoppingCart[id] = 1;
        localStorage.setItem("favItems", JSON.stringify(shoppingCart));
    }
}

function removeFromDb(id) {
    let shoppingCart = JSON.parse(localStorage.getItem("favItems"));
    //if not found then isExists is undefined
    //console.log(isExits, id);
    if (shoppingCart[id]) {
        delete shoppingCart[id];
        localStorage.setItem("favItems", JSON.stringify(shoppingCart));
    }
}

const clearTheDd = () => {
    localStorage.removeItem("shopping_cart");
};

const getDataFromDb = () => {
    const shoppingCart = JSON.parse(localStorage.getItem("favItems")) || {};
    return shoppingCart;
};

export { addToDb, removeFromDb, clearTheDd, getDataFromDb };