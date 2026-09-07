import React from "react";

function ItemLoading(){

    return(
        <div className="shadow border border-gray-200 rounded p-3 md:flex flex-col grid grid-cols-2">
           <div className="m-auto w-[80%] scelt rounded lg:h-50 h-30"></div>
            <div className="">
                <p className="md:mt-3 md:mr-0 mr-5 scelt h-6 rounded"></p>
                <p className="my-2 font-bold scelt h-6 rounded"></p>                
                <p className="md:m-0 mt-3 scelt h-6 rounded"></p>   
            </div>      
            <button className="cursor-pointer mt-3 col-span-2 anim text-center rounded font-bold text-sm text-white py-1.5 w-[100%] bg-blue-400 hover:scale-103 hover:text-blue-400 hover:bg-white border-2 border-transparent h-9 hover:border-blue-400">
                ادامه + خرید         
            </button>                
        </div>
    )
}

export default ItemLoading;