import { createContext, useState } from "react";
import all_products from "../Components/Assets/all_product.js";


export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_products.length+1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }


    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }
    const getTotalCartAmount = () => {  
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.new_price;
            }
        }       
        return totalAmount;
    }

    const contextValue = {all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;