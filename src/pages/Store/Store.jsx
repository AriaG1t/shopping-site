import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import Item from "../../components/Item/Item";
import { getProducts } from "../../../services/api";

function Store(){

    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts().then((result) => {
            setProducts(result);
        })
    },[])
    
    
    
    return(
        <Container>
            <h1 className="mb-4 text-right text-lg font-bold">جدیدترین محصولات</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 ">
                {products.map(
                    item => 
                    <Item {...item}/>
                )}
            </div>
        </Container>
    )
}

export default Store;