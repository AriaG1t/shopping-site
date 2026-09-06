import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

function Navbar(){
    return(
        <nav className="font-bold text-sm flex shadow h-10 items-center fixed top-0 bg-white w-[100%]">
            <Container>
                <div className="flex flex-row-reverse justify-between">
                    <ul className="flex">
                        <li className="ml-5">
                            <Link to="/">خانه</Link>
                        </li>
                        <li className="ml-5">
                            <Link to="/store">محصولات</Link>
                        </li>
                    </ul>
                    <div>
                        <Link to="/cart">
                            <button className="cursor-pointer">سبد خرید</button>
                        </Link>
                    </div>
                </div>
            </Container>
        </nav>
        
    )
}

export default Navbar;