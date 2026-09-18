import { createContext, useContext, useEffect, useState } from "react";
import React from "react";

 export const AppContext = createContext(null)

 

 export const useAppContext = () =>{
    return useContext(AppContext)
 }

 export function AppContextProvider({children}) {

  const useLocalStorage = (key, initialVlue) => {
    const [value, setValue] = useState(() => {
      let localCart = localStorage.getItem("cartItems")
      if (localCart != null) {
        return JSON.parse(localCart)
      }
      else {
        return initialVlue
      }  
    })

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
    },[key, value])
    return [value, setValue]
  }

  const [cartItems, setCartItems] = useLocalStorage("cartItems", [])

  const [isLoad, setIsLoad] = useState(false)

  const [isLogin, setIsLogin] = useState(false)

  const [isOpen, setIsOpen] = useState(false)
  
    const addToCart = (id) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id == id) == null) {
        return [...currentItems, { id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeOne = (id) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id == id)?.qty == 1) {
        return currentItems.filter((item) => item.id != id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQty = (id) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const removeFromCart = (id) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id != id);
    });
  };

  const handleLogin = () => {
    setIsLogin(true)
  }

  const totalCartItems= cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
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
            totalCartItems,
            isLogin,
            setIsLogin,
            handleLogin,
            isOpen,
            setIsOpen
        }}>
            {children}
        </AppContext.Provider>
    )
 };