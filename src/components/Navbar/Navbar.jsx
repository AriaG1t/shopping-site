import React from "react";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { useAppContext } from "../../../context/AppContext";

function Navbar(){

    const {totalCartItems, cartItems} = useAppContext()

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
                    <div className="relative">
                        <Link to="/cart">
                            <button className="cursor-pointer">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="16.5" cy="18.5" r="1.5"/>
                                    <circle cx="9.5" cy="18.5" r="1.5"/>
                                    <path d="M18 16H8a1 1 0 0 1-.958-.713L4.256 6H3a1 1 0 0 1 0-2h2a1 1 0 0 1 .958.713L6.344 6H21a1 1 0 0 1 .937 1.352l-3 8A1 1 0 0 1 18 16zm-9.256-2h8.563l2.25-6H6.944z"/>
                                </svg>
                            </button>
                        </Link>
                        {
                            totalCartItems == 0 ? <></> :
                            <span className="bg-red-400 rounded-full text-xs text-center text-white w-4 h-4 absolute -top-1 -right-2">{totalCartItems}</span>
                        }
                    </div>
                </div>
            </Container>
        </nav>
        
    )
}

export default Navbar;