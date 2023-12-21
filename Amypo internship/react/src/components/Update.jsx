import React, { useEffect, useState } from 'react'
import { useStates } from './States'
import { useNavigate, useParams } from 'react-router-dom';
import CustomerService from './service/CustomerService';
import axios from 'axios';

const Update = () => {
    const { id } = useParams();
    const { data, setData } = useStates();
    
    const [customer, setCustomer] = useState({});
    const navigate = useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    }
    useEffect(() => {
        getCustomer();
    }, [])
    const getCustomer=async()=>{
        await CustomerService.getById(id).then((response)=>{
            setCustomer(response.data)
        }).catch((err)=>{
            console.log(err);
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // data[id] = customer;
        // setData(data)
        await CustomerService.putCustomer(id,customer).then((response)=>{
            navigate("/view")
        })
    }

    return (
        <div className='h-full w-1/3 m-20 border-2 flex justify-center rounded-xl border-[#6c6a72]'>
            <form action="" onSubmit={handleSubmit} className='m-4 flex-col  h-fit'>
                <input className='h-12 w-[350px] rounded-lg border-[#6c6a72]  hover:border-[#ba9a6def] pl-2 mx-5 my-3 mb-3 bg-opacity-15 outline-none border-2 justify-center'
                    value={customer.customerName}
                    onChange={handleChange}
                    type="text" name="customerName"
                    placeholder='Customer Name'
                />
                <input className='h-12 w-[350px] rounded-lg border-[#6c6a72]  hover:border-[#ba9a6def] pl-2 mx-5 my-3 mb-3 bg-opacity-15 outline-none border-2 justify-center'
                    value={customer.phoneNumber}
                    onChange={handleChange}
                    type="text" name="phoneNumber"
                    placeholder='PhoneNumber'
                />
                <input className='h-12 w-[350px] rounded-lg border-[#6c6a72]  hover:border-[#ba9a6def] pl-2 mx-5 my-3 mb-3 bg-opacity-15 outline-none border-2 justify-center'
                    value={customer.age}
                    onChange={handleChange}
                    type="text" name="Age"
                    placeholder='Age'
                />
                <input className='h-12 w-[350px] rounded-lg border-[#6c6a72]  hover:border-[#ba9a6def] pl-2 mx-5 my-3 mb-3 bg-opacity-15 outline-none border-2 justify-center'
                    value={customer.gender}
                    onChange={handleChange}
                    type="text" name="gender"
                    placeholder='Gender'
                />
                <input className='h-12 w-[350px] rounded-lg border-[#6c6a72]  hover:border-[#ba9a6def] pl-2 mx-5 my-3 mb-3 bg-opacity-15 outline-none border-2 justify-center'
                    value={customer.address}
                    onChange={handleChange}
                    type="text" name="address"
                    placeholder='Address'
                />
                <input className='h-12 w-[350px] rounded-lg border-[#6c6a72]  hover:border-[#ba9a6def] pl-2 mx-5 my-3 mb-3 bg-opacity-15 outline-none border-2 justify-center'
                    value={customer.customerMembership}
                    onChange={handleChange}
                    type="text" name="customerMembership"
                    placeholder='Customer membership'
                />
                <input className='h-12 w-[350px] rounded-lg border-[#6c6a72]  hover:border-[#ba9a6def] pl-2 mx-5 my-3 mb-3 bg-opacity-15 outline-none border-2 justify-center'
                    value={customer.email}
                    onChange={handleChange}
                    type="text" name="email"
                    placeholder='email'
                />
                <input className='h-12 w-[350px] rounded-lg border-[#6c6a72]  hover:border-[#ba9a6def] pl-2 mx-5  my-3 mb-3 bg-opacity-15 outline-none border-2 justify-center'
                    value={customer.rating}
                    onChange={handleChange}
                    type="text" name="rating"
                    placeholder='Rating'
                />
                <input className='h-12 w-[350px] rounded-lg hover:bg-[#ba9a6def] bg-[#ba9a6def] pl-2 mx-5 my-3 mb-3 bg-opacity-15 outline-none justify-center cursor-pointer font-poppins'
                    type="submit" value='Update' />

            </form>
        </div>
    )
}

export default Update