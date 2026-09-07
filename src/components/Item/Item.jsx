import React from "react";
import { Link } from "react-router-dom";

function Item(props){

    return(

        <div className="hoy shadow border border-gray-200 rounded p-3 md:flex flex-col items-center justify-between grid grid-cols-2">
           <div className="m-auto w-[80%] md:w-[50%]"> 
                <img src={props.image} alt="" className="rounded"/>
            </div>
            <div>
                <p className="md:mt-3 md:mr-0 font-bold text-sm mr-5">{props.title}</p>
                <p className="my-2 font-bold text-sm text-green-800">{props.price}$</p>                
                <p className="line-clamp-2 font-medium  md:m-0 mt-3 text-gray-600 text-sm">{props.description}</p>   
            </div>       
            <Link to={`/product/${props.id}`} className="mt-3 col-span-2 anim text-center rounded cursor-pointer font-bold text-sm text-white py-1.5 w-[100%] bg-blue-400 hover:scale-103 hover:text-blue-400 hover:bg-white border-2 border-transparent h-9 hover:border-blue-400">
                <button className="cursor-pointer">
                    ادامه + خرید         
                </button>
            </Link>                
        </div>
    )
}

export default Item;