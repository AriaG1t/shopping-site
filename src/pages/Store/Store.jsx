import React from "react";
import Container from "../../components/Container/Container";
import Item from "../../components/Item/Item";

function Store(){
    return(
        <Container>
            <h1 className="mb-4 text-lg">جدیدترین محصولات</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 ">
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
        </Container>
    )
}

export default Store;