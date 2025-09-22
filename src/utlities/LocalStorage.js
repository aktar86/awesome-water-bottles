/**
 * to get something from local storage. you will get it as string 
 * convert this to javascriopt object/ array 
 * 
 */

const getCartFromLocalStoreage = () => {
    const storedCartString = localStorage.getItem('cart')
    
    if(storedCartString){
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}


const saveCartToLocalStorage = cart =>{
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}

const addItemToCartLocalStorage = id => {
    const cart = getCartFromLocalStoreage();
    const newCart = [...cart, id]

    //save new cart to the local storage
    saveCartToLocalStorage(newCart)
}

export {
    getCartFromLocalStoreage as getStoreCart,
    addItemToCartLocalStorage as addToStoredCart
}
