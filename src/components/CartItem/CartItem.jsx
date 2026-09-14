import React, { useEffect, useState } from "react";
import { getProduct } from "../../../services/api";
import { useAppContext } from "../../../context/AppContext";

function CartItem({id, qty}){

    const {removeOne, addToCart, removeFromCart} = useAppContext()

    const [cartProducts, setCartProducts] = useState([])

    useEffect(() => {
        getProduct(id).then((result) => {
            setCartProducts(result)
        })
        .catch(error =>
                console.log(error.message)
        )
    },[])
    
    return(
        
        <div className="relative border border-gray-300 p-3 rounded shadow md:flex flex-col items-center justify-between grid grid-cols-2">
            <img src={cartProducts.image} alt="" className="w-[80%] sm:w-[50%] rounded mb-5 md:mb-0" />
            <div className="my-2 flex justify-between">
                <p className="text-sm font-bold ">
                    {cartProducts.title}
                </p>
                <p className="text-sm text-green-800 ml-2 font-bold">
                    {cartProducts.price * qty}$
                </p>
            </div>
            <div className=" text-center col-span-2 w-[100%]">
                <div className="flex justify-between">
                    <button className="w-[100%] m-auto cursor-pointer rounded font-bold text-lg text-white anim hover:bg-green-600 bg-green-400" onClick={() => addToCart(id)}>+</button>
                    <p className="font-black text-2xl md:mx-5 mx-20"><span className="border-b border-gray-400">{qty}</span></p>
                    <button className="w-[100%] m-auto cursor-pointer rounded font-bold text-lg bg-red-400 anim hover:bg-red-600 text-white" onClick={() => removeOne(id)}><p className="scale-140">-</p></button>
                </div>
            </div>
            <button onClick={() => removeFromCart(id)} className="w-5 -top-3 -right-2 absolute m-auto mt-2 rounded py-2 cursor-pointer col-span-3 text-white anim hover:bg-red-800 bg-red-600" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </button>
        </div>
    )
}

export default CartItem;