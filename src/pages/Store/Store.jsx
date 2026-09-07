import React, { useContext, useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import Item from "../../components/Item/Item";
import { getProducts } from "../../../services/api";
import ItemLoading from "../../components/Item/ItemLoading";
import { AppContext } from "../../App";

function Store(){

    const {isLoad, setIsLoad} = useContext(AppContext)

    const [products, setProducts] = useState([])
    console.log(products)
    useEffect(()=>{
        setIsLoad(true)
        getProducts().then((result) => {
            setProducts(result)
            setIsLoad(false)
        })
        .catch(error =>
                console.log(error.message)
        )
    },[])
    
    return(
        <Container>
            <h1 className="mb-4 text-right text-lg font-bold">جدیدترین محصولات</h1>
            {
                isLoad ? <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 ">
                    <ItemLoading /> <ItemLoading /> <ItemLoading /> <ItemLoading />
                </div> :
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 ">
                    {products.map(
                        item => 
                        <Item {...item}/>
                    )}
                </div>
            }
        </Container>
    )
}

export default Store;