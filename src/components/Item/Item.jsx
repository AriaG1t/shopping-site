import React from "react";
import pic from "../../assets/newspapers-4565916_1280.jpg"

function Item(){
    return(
        <div className="shadow border border-gray-200 rounded p-3">
            <img src={pic} alt="" className="rounded" />
            <div className="flex justify-between mt-4 items-baseline">
                <p className="">عنوان محصول: دلستر جوجو</p>
                <p className="text-sm font-bold">2,000,000 تومان</p>
            </div>    
        </div>
    )
}

export default Item;