import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="flex justify-between shadow-lg h-10 items-center">
            <ul className="flex">
                <li>
                    <Link className="ml-7" to="/">خانه</Link>
                </li>
                <li>
                    <Link to="/store">محصولات</Link>
                </li>
            </ul>
            <div>
                <button>سبد خرید</button>
            </div>
        </nav>
    )
}

export default Navbar;