import React, { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import AuthService from './service/AuthService';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [signUp,setSignUp]= useState();
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setSignUp({...signUp,[name]:value});
    }
    const  handleSubmit=async (e)=>{
        e.preventDefault();
        await AuthService.signUp(signUp).then((response)=>{
            console.log(response);
            if(response.data!="")
                navigate("/login");
            else
            alert("invalid email");
        }).catch((error)=>{
            console.log(error);
        })
    }
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
   


<div className='flex justify-center items-center h-full rounded-xl bg-[#ba9a6def] '>
    <form className='max-w-[500px] w-full mx-auto bg-white p-8 shadow-xl rounded-xl h-screen bg-[#FDF7E4] '>
        <h2 className='text-4xl font-bold text-center py-2'>SIGN UP</h2>
        <div className='flex justify-between py-8'>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center rounded-xl'><AiFillFacebook className='mr-2' /> Facebook</p>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center rounded-xl'><FcGoogle className='mr-2' /> Google</p>
        </div>
        <div className='flex flex-col mb-2  '>
            <label>Name</label>
            <input className=' relative p-2 rounded-full border-2 border-[#6c6a72] hover:border-[#aa97e3]' onChange={handleChange} type="text" name='name' />
        </div>
        <div className='flex flex-col mb-2 q'>
            <label>Email</label>
            <input className=' relative p-2 rounded-full border-2 border-[#6c6a72] hover:border-[#aa97e3]' onChange={handleChange} type="text" name='email' />
        </div>
        <div className='flex flex-col mb-2 '>
            <label>Username</label>
            <input className=' relative p-2 rounded-full border-2 border-[#6c6a72] hover:border-[#aa97e3]' onChange={handleChange} type="text" name='userName' />
        </div>
        <div className='flex flex-col mb-2 '>
            <label>MobileNumber</label>
            <input className=' relative p-2 rounded-full border-2 border-[#6c6a72] hover:border-[#aa97e3]' onChange={handleChange} type="text" name='mobileNumber' />
        </div>
        <div className='flex flex-col '>
            <label>Password</label>
            <input className=' relative p-2 rounded-full border-2 border-[#6c6a72] hover:border-[#aa97e3] ' onChange={handleChange} type="password" name='password' />
        </div>
        <fieldset className="grid grid-cols-2 gap-4 mt-3">
                                <legend className="sr-only">Role</legend>
                                <div>
                                    <input onChange={handleChange}
                                        type="radio"
                                        name="role"
                                        id="DeliveryStandard"
                                        className="peer hidden [&:checked_+_label_svg]:block"
                                        checked
                                        value={"admin"}
                                    />

                                    <label
                                        htmlFor="DeliveryStandard"
                                        className="block cursor-pointer rounded-full border border-gray-100 bg-white p-3 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 text-black"
                                    >
                                        <div className="flex items-center justify-between">
                                            <p className="text-black dark:text-black">ADMIN</p>

                                            <svg
                                                className="hidden h-5 w-5 text-blue-600"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>

                                    </label>
                                </div>

                                <div>
                                    <input onChange={handleChange}
                                        type="radio"
                                        name="role"
                                        value={"user"}
                                        id="DeliveryPriority"
                                        className="peer hidden [&:checked_+_label_svg]:block"
                                    />

                                    <label
                                        htmlFor="DeliveryPriority"
                                        className="block cursor-pointer rounded-full border border-gray-100 bg-white p-3 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 text-black"
                                    >
                                        <div className="flex items-center justify-between">
                                            <p className="text-black dark:text-black">USER</p>

                                            <svg
                                                className="hidden h-5 w-5 text-blue-600"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                    </label>
                                </div>
                            </fieldset>
        <button className='w-full py-3 mt-5 bg-indigo-600 hover:bg- relative text-black bg-white rounded-full border-2 ' onClick={handleSubmit}>Sign up</button>
        
    </form>
</div>
</div>
  )
}

export default Signup