import React, { useState } from "react";
import Login from "../Login/Login";
import { useAppContext } from "../../../context/AppContext";
import SignUp from "../Sign Up/SignUp";


function Modal(){
    
    const {setIsOpen} = useAppContext()

    const [mode, setMode] = useState("login")

    const hideModal = () => {
        setIsOpen(false)
    }
    
    return(
        <div onClick={hideModal} className="flex justify-center items-center fixed w-screen h-screen top-0 left-0 z-99 opbg2">
            <div className="relative sm:w-[80%] w-full lg:w-[40%]" onClick={e => e.stopPropagation()}>
                
                <button 
                onClick={() => setMode("login")}
                className={`cursor-pointer absolute text-gray-700 -top-9 right-15 bg-gray-400 rounded-t-2xl px-3 py-2 
                ${mode === "login" ? "bg-slate-200! before:bg-transparent before:-bottom-0.25 before:z-1 before:-left-3.5 before:shadow-[5px_5px_0_0] before:shadow-slate-200 before:rounded-br-full before:absolute before:w-4 before:h-4 after:bg-transparent after:-bottom-0.25 after:-right-3.75 after:shadow-[-5px_5px_0_0] after:shadow-slate-200 after:rounded-bl-full after:absolute after:w-4 after:h-4" : ""}`}>
                    Login
                </button>
                <button 
                onClick={() => setMode("signup")}
                className={`cursor-pointer absolute text-gray-700 -top-9 right-30 bg-gray-400 rounded-t-2xl px-3 py-2
                ${mode === "signup" ? "bg-slate-200! before:bg-transparent before:-bottom-0.25 before:z-1 before:-left-3.75 before:shadow-[5px_5px_0_0] before:shadow-slate-200 before:rounded-br-full before:absolute before:w-4 before:h-4 after:bg-transparent after:-bottom-0.25 after:-right-3.75 after:shadow-[-5px_5px_0_0] after:shadow-slate-200 after:rounded-bl-full after:absolute after:w-4 after:h-4" : ""}`}>
                    Sign Up
                </button>
                {
                    mode === "login" ? <Login /> : <SignUp />
                }
            </div> 
        </div>
    )
}

export default Modal;