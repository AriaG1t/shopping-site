import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import CartItem from "../../components/CartItem/CartItem";
import { useAppContext } from "../../../context/AppContext";
import { getProduct } from "../../../services/api";

function Cart(){

    const {cartItems} = useAppContext()
    
    const [items, setItems] = useState([])
    
    useEffect(() => {
        const getCartProducts = async () => {
            const result = await Promise.all(
                cartItems.map(item => getProduct(item.id))
            )
            setItems(result)
        }

        getCartProducts()
    },[cartItems])
    
    const priceSum = items.reduce((total, item) => {
       const itemQty = cartItems.find(i => item.id == i.id)

       if(!itemQty){
        return total
       }

       const fullPrice = item.price * itemQty.qty

       return total = total + fullPrice
    },0)

    return(
        <Container>
            <h1 className="text-2xl text-right font-bold mb-5">سبد خرید</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 mb-10">
                {
                    cartItems.map(item => (
                        <CartItem key={item.id} {...item}/>
                    ))
                }
            </div>
            <div className=" rounded bg-amber-100 p-5 md:w-[60%] w-[90%] m-auto mb-50 text-center">
                <h2 className="text-2xl font-bold text-amber-700">
                    فاکتور نهایی
                </h2>
                <div className="my-5 flex justify-evenly sm:flex-row flex-col">
                    <p className="text-base font-bold">قیمت کل: ${priceSum}</p>
                    <p className="text-base text-amber-800 font-bold sm:my-0 my-4">تخفیف: -</p>
                    <p className="text-base font-bold text-green-900">قیمت نهایی: ${priceSum}</p>
                </div>
                <button className="text-lg py-2 cursor-pointer anim lg:w-[35%] sm:w-[50%] w-[80%] rounded bg-green-700 hover:scale-105 text-white">ثبت سفارش</button>
            </div>
        </Container>
    )
}

export default Cart;