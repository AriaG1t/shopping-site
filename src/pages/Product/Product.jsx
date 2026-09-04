import React from "react";
import Container from "../../components/Container/Container";
import { useParams } from "react-router-dom";


function Product(){
    const params = useParams()
    
    return(
        <Container>
            {params.id}
        </Container>
    )
}

export default Product;