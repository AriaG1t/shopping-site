import React from "react";
import { useAppContext } from "../../../context/AppContext";
import Login from "../Login/Login";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

function PrivateRoute(){

    const {isLogin, setIsOpen} = useAppContext()

    const navigate = useNavigate()

    return(
        <>
            {
                isLogin ? <Outlet /> : setIsOpen(true)
            }
        </>
    )
}

export default PrivateRoute;