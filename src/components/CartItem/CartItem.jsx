import React from "react";
import pic from "../../assets/newspapers-4565916_1280.jpg"

function CartItem(){
    return(
        
        <div className="border border-gray-300 p-3 rounded shadow">
            <img src={pic} alt="" className="rounded" />
            <div className="my-2 flex justify-between items-baseline">
                <p className="font-bold text-lg">
                    دلستر جوجو
                </p>
                <p className="text-sm">
                    2,000,000 تومان
                </p>
            </div>
            <div className="grid grid-cols-3 text-center">
                <button className="w-[70%] m-auto cursor-pointer rounded font-bold text-lg text-white anim hover:bg-green-600 bg-green-400">+</button>
                <p className="font-black text-2xl"><span className="border-b border-gray-400">4</span></p>
                <button className="w-[70%] m-auto cursor-pointer rounded font-bold text-lg bg-red-400 anim hover:bg-red-600 text-white"><p className="scale-140">-</p></button>
                <button className="m-auto w-[90%] mt-2 rounded py-2 cursor-pointer col-span-3 text-white anim hover:bg-red-800 bg-red-600 text-lg font-bold">remove</button>
            </div>
        </div>
    )
}

export default CartItem;