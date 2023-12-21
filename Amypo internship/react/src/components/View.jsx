import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useStates } from './States'
import { RiDeleteBin5Fill } from "react-icons/ri";
import CustomerService from './service/CustomerService';

const View = () => {

    const { data,setData } = useStates();
    const {view,setView} = useStates();
    const navigate = useNavigate();

    const deleteById = async(id)=>{
        await CustomerService.deleteCustomer(id).then((response)=>{
            getData();
        }).catch((err)=>{
            console.log(err)
        })
        // const deleted = data.filter((d,i)=>i!==id);
        // setData(deleted);
    }
    const getData=()=>{
        CustomerService.getAllCustomer().then((response)=>{
            setData(response.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    useEffect(() => {
     getData();
    }, [])
    
    return (
        <div>
            <button className='flex text-3xl text-[#7b6341ef] font-productsansb font-bold m-10 px-8 ' onClick={() => navigate('/Add')}>Add Customer</button>
            <table className='justify-center'>
                <tr >
                    <th>CustomerName</th>
                    <th>PhoneNumber</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Address</th>
                    <th>CustomerMembership</th>
                    <th>Email</th>
                    <th>Rating</th>
                    <th colSpan={2}>Actions</th>
                </tr>
                <tbody>
                    {data.map((d, i) => {
                        return (
                            <tr className='w-full justify-center '>
                                <td>{d.customerName}</td>
                                <td>{d.phoneNumber}</td>
                                <td>{d.age}</td>
                                <td>{d.gender}</td>
                                <td>{d.address}</td>
                                <td>{d.customerMembership}</td>
                                <td>{d.email}</td>
                                <td>{d.rating}</td>
                                <td className='flex p-2 justify-center ' >

                                    <button className='m-1 p-1 text-lg' onClick={() => {navigate("/viewCustomer/"+i)}}><i class="fa-solid fa-eye"></i></button>
                                    <button className='m-1 p-1 text-lg ' onClick={() => navigate('/update/'+d.cid)}><i class="fa-regular fa-pen-to-square"></i></button>
                                    <button className='m-1 p-1 text-lg ' onClick={()=>deleteById(d.cid)}><RiDeleteBin5Fill/></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default View