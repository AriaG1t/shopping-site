import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

function Navbar(){
    return(
        <nav className="flex shadow h-10 items-center fixed top-0 bg-white w-[100%]">
            <Container>
                <div className="flex justify-between">
                    <ul className="flex">
                        <li className="ml-5">
                            <Link to="/">خانه</Link>
                        </li>
                        <li className="ml-5">
                            <Link to="/store">محصولات</Link>
                        </li>
                    </ul>
                    <div>
                        <button>سبد خرید</button>
                    </div>
                </div>
            </Container>
        </nav>
        
    )
}

export default Navbar;