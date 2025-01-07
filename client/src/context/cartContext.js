import { useContext, useReducer, createContext, useState } from "react";
import { cartReducerFunction } from "../reducers/cartReducer";

const CartContext = createContext()

const initialState =[]
const CartProvider = ({children})=>{
    const [cart, dispatch ] = useReducer(cartReducerFunction, initialState)
    const [count, setCount] = useState(1)
    return(
        <CartContext.Provider value={{cart, dispatch, count, setCount}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = ()=>useContext(CartContext)

export {useCart, CartProvider}