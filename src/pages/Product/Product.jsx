import React, { useContext, useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../services/api";
import ProductLoading from "./ProductLoading";
import { AppContextProvider, useAppContext } from "../../../context/AppContext";


function Product(){
    const params = useParams()

    const {isLoad, setIsLoad, addToCart, removeOne, getQty, removeFromCart} = useAppContext()
    
    const [product, setProduct] = useState([])
   
        useEffect(()=>{
            setIsLoad(true)
            getProduct(params.id).then((result) => {
                setProduct(result)
                setIsLoad(false)
            })
            .catch(error =>
                console.log(error.message),
            )
        },[])
    
    return(
        <Container>
            {
                isLoad ? <ProductLoading /> : 
                
                <div className="">
                    <div className="shadow-md bg-gray-100 shadow-gray-300 p-3 md:mr-5 md:w-[25%] rounded md:float-left md:mb-0 mb-5 ">
                        <h2 className="font-bold text-lg">
                            {product.title}
                        </h2>
                        <img src={product.image} className="rounded my-2 m-auto md:w-[70%] w-[50%]" alt=""/>
                        <p className="text-lg font-bold text-green-800">
                            {product.price}$
                        </p>
                        {
                            getQty(params.id) == 0  ? 
                            <>
                                <button onClick={() => addToCart(params.id)} className="cursor-pointer text-sm border-2 border-transparent anim hover:scale-103 bg-green-400 mt-3 py-2 rounded text-white font-bold w-[100%]">
                                    اضافه کردن
                                </button> 
                            </> 
                            : 
                            <div className="grid grid-cols-3 items-center text-center">
                                <button onClick={() => removeOne(params.id)} 
                                className="cursor-pointer text-l border-2 border-transparent anim hover:scale-103 bg-red-400 mt-3 py-1 rounded text-white font-black w-[100%]">
                                    -
                                </button> 
                                <span>{getQty(params.id)}</span>
                                <button onClick={() => addToCart(params.id)} 
                                className="font-black cursor-pointer text-lg border-2 border-transparent anim hover:scale-103 bg-green-400 mt-3 py-1 rounded text-white w-[100%]">
                                    +
                                </button>
                                <button onClick={() => removeFromCart(params.id)} 
                                className="col-span-3 cursor-pointer text-l border-2 border-transparent anim hover:scale-103 bg-red-600 mt-3 py-1 rounded text-white font-black w-[100%]">
                                    remove
                                </button>
                            </div>
                        }


                        
                    </div>
                    <p>
                        {product.description}
                    </p>
                </div>
            }
        </Container>
    )
}

export default Product;