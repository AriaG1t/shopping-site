import React, { useEffect } from "react";
import Container from "../Container/Container";
import { useAppContext } from "../../../context/AppContext";

function Login() {

    const {handleLogin, setIsOpen, setIsLogin} = useAppContext()

    return (
        <Container>
            <form
            onSubmit={(e) => {
                e.preventDefault()
                handleLogin()
                setIsOpen(false)
            }} className="w-full bg-slate-200 shadow items-center justify-between rounded-4xl flex flex-col px-5 py-10 h-80">
                <input required type="email" placeholder="Email" className="bg-white shadow-md md:w-[80%] w-full outline-0 p-3 rounded"/>
                <input required type="password" placeholder="Password" className="bg-white shadow-md md:w-[80%] w-full outline-0 p-3 rounded"/>
                <button type="submit" className="text-white bg-green-400 hover:bg-green-500 anim cursor-pointer w-[60%] md:w-[40%] rounded-lg py-3 font-bold">Submit</button>
            </form>
        </Container>
    )
}

export default Login;