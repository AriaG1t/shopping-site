import React from "react";
import pic from "../../assets/newspapers-4565916_1280.jpg"
import { Link } from "react-router-dom";

function Item(props){

    return(
            //first

            // <div className="hoy shadow border border-gray-200 rounded p-3 flex flex-col items-center justify-between">
            //     <div className="md:block flex flex-row-reverse items-center justify-between">
            //         <img src={props.image} alt="" className="rounded md:w-auto w-[38%]"/>
            //         <div className="md:mr-0 mr-4 md:block flex justify-between">
            //             <p className="md:mt-3 md:mr-0 font-bold text-sm mr-5">{props.title}</p>
            //             <p className="md:my-2 font-bold text-sm">{props.price}$</p>
            //         </div>
            //     </div> 
            //     <p className="line-clamp-2 font-medium text-justify md:m-0 mt-3 text-gray-600">{props.description}</p>          
            //         <Link to="/product/3" className="anim text-center rounded cursor-pointer font-bold text-sm text-white py-1.5 mt-2 w-[100%] bg-blue-400 hover:scale-103 hover:text-blue-400 hover:bg-white border-2 border-transparent h-9 hover:border-blue-400">
            //             <button className="cursor-pointer">
            //                 ادامه + خرید         
            //             </button>
            //         </Link>
            // </div>

            //flex

        <div className="hoy shadow border border-gray-200 rounded p-3 md:flex flex-col items-center justify-between grid grid-cols-2">
               <div className="m-auto w-[80%]"> 
                    <img src={props.image} alt="" className="rounded"/>
                </div>
                <div className="flex flex-col">
                        <p className="md:mt-3 md:mr-0 font-bold text-sm mr-5">{props.title}</p>
                        <p className="my-2 font-bold text-sm text-green-800">{props.price}$</p>
                    
                
                <p className="line-clamp-2 font-medium  md:m-0 mt-3 text-gray-600">{props.description}</p>   
                </div>       
                    <Link to="/product/3" className="mt-3 col-span-2 anim text-center rounded cursor-pointer font-bold text-sm text-white py-1.5 w-[100%] bg-blue-400 hover:scale-103 hover:text-blue-400 hover:bg-white border-2 border-transparent h-9 hover:border-blue-400">
                        <button className="cursor-pointer">
                            ادامه + خرید         
                        </button>
                    </Link>
                
            </div>

        //grid

        // <div className="hoy shadow border border-gray-200 rounded p-3 grid">
                
        //             <img src={props.image} alt="" className="rounded w-[50%] m-auto"/>
        //             <div className="flex flex-col justify-between h-[50%]">
                        
        //                 <p className="font-bold text-sm ">{props.title}</p>
        //                 <p className="font-bold text-sm text-green-800">{props.price}$</p>

        //         <p className="line-clamp-2 font-medium text-justify text-gray-600">{props.description}</p>          
        //             <Link to="/product/3" className="anim text-center rounded cursor-pointer font-bold text-sm text-white py-1.5 w-[100%] bg-blue-400 hover:scale-103 hover:text-blue-400 hover:bg-white border-2 border-transparent h-9 hover:border-blue-400">
        //                 <button className="cursor-pointer">
        //                     ادامه + خرید         
        //                 </button>
        //             </Link>
        //         </div>
        //     </div>

    )
}

export default Item;