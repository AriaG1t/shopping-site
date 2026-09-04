import React from "react";
import Container from "../../components/Container/Container";
import CartItem from "../../components/CartItem/CartItem";

function Cart(){
    return(
        <Container>
            <h1 className="text-2xl font-bold mb-5">سبد خرید</h1>
            <div className="grid grid-cols-4 gap-4 mb-10">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className=" rounded bg-amber-100 p-5 w-[60%] m-auto mb-50 text-center">
                <h2 className="text-2xl font-bold text-amber-700">
                    فاکتور نهایی
                </h2>
                <div className="my-5 flex justify-evenly">
                    <p className="text-base font-bold">قیمت کل: 12,000,000</p>
                    <p className="text-base text-amber-800 font-bold">تخفیف: 2,000,000</p>
                    <p className="text-base font-bold text-green-900">قیمت نهایی: 10,000,000</p>
                </div>
                <button className="text-lg py-2 cursor-pointer anim w-[35%] rounded bg-green-700 hover:scale-105 text-white">ثبت سفارش</button>
            </div>
        </Container>
    )
}

export default Cart;