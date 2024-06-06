import { createContext } from "react"
const CartContext = createContext({
    items:[],
    addItem:(item)=>{},
    removeItem:(id)=>{}
});

export default function CartContextProvider({children}){
    return <CartContext.Provider>{children}</CartContext.Provider>
}