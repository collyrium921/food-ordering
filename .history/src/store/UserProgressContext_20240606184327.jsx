import { createContext, useState } from "react";
const UserProgressContext = createContext({
    progress:'',
    showCart:()={},
    hidecart:()={},
    showCheckout:()={},
    hideCheckout:()={},
});

export function UserProgressContextProvider({children}){
    const [userProgress, setUserProgress] =useState('')
    function showCart(){
        setUserProgress('cart')
    }


    return (
        <UserProgressContext.Provider>{children}</UserProgressContext.Provider>
    )
}

export default UserProgressContext;