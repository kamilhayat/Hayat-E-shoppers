import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("hayatCart");

    const parsedData = JSON.parse(localCartData);
    if(!Array.isArray(parsedData)) return [];
    return parsedData; 
};

const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, amount, product) => {

        dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
    };


    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id });
    };

    const setIncrement = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id });
    };

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id });
    };

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };
    useEffect(() => {
        dispatch({ type: "CART_TOTAL_ITEM" });
        dispatch({ type: "CART_TOTAL_PRICE" });
        localStorage.setItem("hayatCart", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrement }}>
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(CartContext);
};

export { CartProvider, useCartContext };