import React, { use, useContext, useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../../../services/api";
import ProductLoading from "./ProductLoading";
import { AppContext } from "../../App";


function Product(){
    const params = useParams()

    const {isLoad, setIsLoad} = useContext(AppContext)
    
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
                        <Link>
                            <button className="cursor-pointer text-sm border-2 border-transparent anim hover:scale-103 bg-green-400 mt-3 py-2 rounded text-white font-bold w-[100%]">
                                اضافه کردن
                            </button>
                        </Link>
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