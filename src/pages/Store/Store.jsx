import React, { useContext, useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import Item from "../../components/Item/Item";
import { getProducts } from "../../../services/api";
import ItemLoading from "../../components/Item/ItemLoading";
import { AppContext } from "../../App";

function Store(){

    const {isLoad, setIsLoad} = useContext(AppContext)

    const [products, setProducts] = useState([])
    
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

    const [inputText, setInputText] = useState("")

    const handleIn = (e) =>{
        setInputText(e.target.value.toLowerCase())
    }

    let finalData = []

    if (inputText === ""){
        finalData = products
    }
    else {
        products.map((item) =>{
            const lower2 = item.category.toLowerCase()
            const lower = item.title.toLowerCase()
            if (lower.includes(inputText) || lower2.includes(inputText)){ 
                finalData = [...finalData,item]
            }
        })
    }

    return(
        <Container>
            <div className="mb-4 flex flex-col sm:flex-row-reverse justify-between">
                <h1 className="text-lg font-bold">جدیدترین محصولات</h1>
                <input
                onInput={handleIn}
                id="inp" type="search" placeholder="Search..." className=" px-2 w-[50%] sm:w-auto rounded border shadow border-gray-400" />
            </div>
    
            {
                isLoad ? <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 ">
                    <ItemLoading /> <ItemLoading /> <ItemLoading /> <ItemLoading />
                </div> :
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 ">
                    {finalData.map(
                        item => 
                        <Item {...item}/>
                    )}
                </div>
            }
        </Container>
    )
}

export default Store;