import React, { useState } from 'react'

import { useStates } from './States';
import { useNavigate } from 'react-router-dom';
import CustomerService from './service/CustomerService';

const Add = () => {
    const[customer,setCustomer]=useState({});
    const navigate = useNavigate()
   const {setData} = useStates()
    const handleChange=(e) =>{
        const{name,value} = e.target;
        setCustomer({...customer,[name]:value});
    }    
    const handleSubmit =async (e)=>{
        e.preventDefault();
        setData((prev)=>[...prev,customer])
        await CustomerService.postCustomer(customer).then((response) =>{
            
            navigate("/view")
        })
    }
  return (
    
        <div className='h-full w-full flex bg-[#ba9a6def] justify-center'>
            <p className='h-5 w-5 text-[#212615] flex justify-center text-2xl font-productsansb font-bold mt-8'>Customer{" "}<span className='h-6 w-6 text-[#652f0a]  '> Details</span></p>
            
            
            <div className='min-h-full w-[500px] my-20 p-5 flex justify-center bg-white shadow-md rounded-xl  '>
            <form action="" onSubmit={handleSubmit} className='m-3 flex-col  h-fit'>
            <input className='h-12 w-[350px] rounded-lg border-[#6c6a72]  hover:border-[#ba9a6def] pl-2 mx-5 mb-5 bg-opacity-15 outline-none border-2 justify-center'
                onChange={handleChange}
                type="text" name="customerName"
                placeholder='Customer Name'
                />
            <input className='h-12 w-[350px] rounded-lg border-[#6c6a72]  hover:border-[#ba9a6def] pl-2 mx-5 mb-5 bg-opacity-15 outline-none border-2 justify-center'
                onChange={handleChange}
                type="text" name="phoneNumber"
                placeholder='PhoneNumber'
                />
            <input className='h-12 w-[350px] rounded-lg border-[#6c6a72]  hover:border-[#ba9a6def] pl-2 mx-5 mb-5 bg-opacity-15 outline-none border-2 justify-center'
                onChange={handleChange}
                type="text" name="age"
                placeholder='Age'
                />
            <input className='h-12 w-[350px] rounded-lg border-[#6c6a72]  hover:border-[#ba9a6def] pl-2 mx-5 mb-5 bg-opacity-15 outline-none border-2 justify-center'
                onChange={handleChange}
                type="text" name="gender"
                placeholder='Gender'
                />
            <input className='h-12 w-[350px] rounded-lg border-[#6c6a72]  hover:border-[#ba9a6def] pl-2 mx-5 mb-5 bg-opacity-15 outline-none border-2 justify-center'
                onChange={handleChange}
                type="text" name="address"
                placeholder='Address'
                />
            <input className='h-12 w-[350px] rounded-lg border-[#6c6a72]  hover:border-[#ba9a6def] pl-2 mx-5 mb-5 bg-opacity-15 outline-none border-2 justify-center'
                onChange={handleChange}
                type="text" name="customerMembership"
                placeholder='Customer membership'
                />
            <input className='h-12 w-[350px] rounded-lg border-[#6c6a72]  hover:border-[#ba9a6def] pl-2 mx-5 mb-5 bg-opacity-15 outline-none border-2 justify-center'
                onChange={handleChange}
                type="text" name="email"
                placeholder='email'
                />
            <input className='h-12 w-[350px] rounded-lg border-[#6c6a72]  hover:border-[#ba9a6def] pl-2 mx-5 mb-5 bg-opacity-15 outline-none border-2 justify-center'
                onChange={handleChange}
                type="text" name="rating"
                placeholder='Rating'
                />
                  <input className='h-12 w-[350px] rounded-lg hover:bg-[#ba9a6def] bg-[#ba9a6def] pl-2 mx-5 mb-5 bg-opacity-15 outline-none justify-center cursor-pointer font-poppins' 
                  type="submit" value='Add Customer' />
            </form>
            </div>
              
        </div>
    
  )
}

export default Add