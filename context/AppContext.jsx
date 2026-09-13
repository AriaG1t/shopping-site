import { createContext, useContext, useState } from "react";
import React from "react";

 export const AppContext = createContext(null)

 export const useAppContext = () =>{
    return useContext(AppContext)
 }

 export function AppContextProvider({children}) {

    const [cartItems, setCartItems] = useState([])

    const [isLoad, setIsLoad] = useState(false)

    const addToCart = (id) => {
        setCartItems(currentItems => {
            let selectedItem = currentItems.find(item => item.id == id)

            if(selectedItem == null){
                return [...currentItems, {id: id, qty: 1}]
            }
            else{
                return currentItems.map(item => {
                    if(item.id == id){
                        return {
                            ...item,
                            qty: item.qty + 1
                        }
                    }
                    else{
                        return item
                    }
                })
            }
        })
    }

    const removeOne = (id) => {
        setCartItems(currentItems => {
            let selectedItem = currentItems.find(item => item.id == id)

            if(selectedItem.qty === 1){
                return currentItems.filter(item => item.id !== id)
            }
            else{
                return currentItems.map(item => {
                    if(item.id == id){
                        return{
                            ...item,
                            qty: item.qty - 1
                        }
                    }
                    else{
                        return item
                    }
                })
            }
        })
    }

    const getQty = (id) => {
        return cartItems.find(item => item.id == id)?.qty || 0
    }

    const removeFromCart = (id) => {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id)
        })
    }

    const totalCartItems = cartItems.reduce((total, item) => {
        return total = total + item.qty
    },0)

    return(
        <AppContext.Provider 
        value={{
            isLoad,
            setIsLoad,
            cartItems,
            addToCart,
            removeOne,
            getQty,
            removeFromCart,
            totalCartItems
        }}>
            {children}
        </AppContext.Provider>
    )
 };