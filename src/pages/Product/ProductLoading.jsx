import React from "react";

function ProductLoading(){
    return(
        <div className="flex md:flex-row flex-col">
                <div className="shadow-md bg-gray-100 shadow-gray-300 p-3 md:mr-5 md:w-[35%] rounded md:mb-0 mb-5">
                    <h2 className="font-bold text-lg scelt h-6 rounded"></h2>
                    <div className=" scelt w-[100%] h-50 my-4 rounded"></div>
                    <p className="text-lg font-bold scelt h-6 rounded"></p>
                    
                    <button className="cursor-pointer text-sm border-2 border-transparent anim hover:scale-103 bg-green-400 mt-3 py-2 rounded text-white font-bold w-[100%]">
                        اضافه کردن
                    </button>
                    
                </div>
                <div className="w-[100%]">
                    <p className="scelt h-6 rounded"></p>
                    <p className="scelt h-6 rounded my-2"></p>
                    <p className="scelt h-6 rounded my-2"></p>
                    <p className="scelt h-6 rounded my-2"></p>
                    <p className="scelt h-6 w-[60%] rounded"></p>
                </div>
            </div>
    )
}

export default ProductLoading;