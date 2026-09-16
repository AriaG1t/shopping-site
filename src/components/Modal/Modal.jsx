import React from "react";
import Login from "../Login/Login";
import { useAppContext } from "../../../context/AppContext";

function Modal(){
    
    const {setIsOpen} = useAppContext()

    const hideModal = () => {
        setIsOpen(false)
    }

    return(
        <div onClick={hideModal} className="flex justify-center items-center fixed w-screen h-screen top-0 left-0 z-99 opbg2">
            <div className="md:w-[80%] lg:w-[40%]" onClick={e => e.stopPropagation()}>
                <Login />
            </div> 
        </div>
    )
}

export default Modal;