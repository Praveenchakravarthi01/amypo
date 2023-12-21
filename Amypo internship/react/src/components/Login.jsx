import React, { useState } from 'react'
import img3 from '../assets/Images/img3.svg'
import AuthService from './service/AuthService';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [login,setLogin] = useState({});
    const handleChange = (e )=>{
        const {name,value} = e.target;
        setLogin({...login,[name]:value});
    }
    const  navigate = useNavigate();
    const handleSubmit =async (e)=>{
        e.preventDefault();
        console.log(login);
        await AuthService.login(login).then((response)=>{
            localStorage.setItem("uid", response.data?.uid);
            if(response.data?.role==="admin")
                navigate("/vicew")
            else if(response.data?.role==="user")
                navigate("/user")
            else if(response.data==null)
                alert("Invalid Credentials");
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    
    <>
    <div className='justify-center flex items-center h-screen'>
        
    <div class="max-w-[960px] bg-black-dark grid grid-cols-2 items-center  gap-20 p-5 rounded-3xl bg-[#faeed1] ">
        <div class="">
            <img src={img3} alt=""/>
        </div>

        <div class="max-w-80 grid gap-5">
            <h1 class="text-5xl font-bold text-black">Login</h1>
            <p class="text-dull-white">Access to Customers over the our Market</p>
            <form action="" class="space-y-6 text-black">
                <div class="relative">
                    <div class="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                        <i class="fa-solid fa-envelope-open"></i>
                    </div>
                    <input type="email" placeholder="Email Address" name='email' className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg" onChange={handleChange}/>
                </div>
                <div class="relative">
                    <div class="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                        <i class="fa-solid fa-lock"></i>
                    </div>
                    <input type="text" placeholder="Password" name='password' className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg" onChange={handleChange}/>
                </div>
                <button class="bg-gradient-to-r from-blue-400 to-cyan-200 w-80 font-semibold rounded-full py-2   hover:bg-white" onClick={handleSubmit}>Login in</button>
            </form>
            <div class="text-dull-white border-t border-white-light pt-4 space-y-4 text-sm">
                <p>Don't have an account? <a class="text-neon-blue font-semibold cursor-pointer ">Sign up</a></p>
                <p>Forgot password? <a class="text-neon-blue font-semibold cursor-pointer">Reset password</a></p>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Login