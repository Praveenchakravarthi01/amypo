import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useStates } from './States';
import imgg from '../assets/Images/imgg.jpg'


const Viewcustomer = () => {

  const { id } = useParams();

  const [customer, setCustomer] = useState({});
  const navigate = useNavigate()
  const { data } = useStates()

  useEffect(() => {
    setCustomer(data[id])
  }, [])

  return (
    <>
    <div className="h-6 w-1/2 my-10 mx-20 py-5 font-poppins text-3xl flex text-[#ba9a6def]">Customer Details</div>

    <div className="flex justify-center">
      
    <div className='flex-col w-1/2 h-1/2 mx-20 my-10 border-2 border-[#ba9a6def] justify-center rounded-xl border-opacity-5 text-xl'>

      <div className="font-alata text-xl mx-7 text-[#907248ef] flex m-5 gap-3"><span>Name:</span>
      <p className='h-8 w-80 justify-center font-productsansr text-black'> {customer?.customerName}</p>
      </div>
      <div className="font-alata text-xl mx-7 text-[#907248ef] flex m-5 gap-3"><span>Phone Number: </span>
         <p className='justify-center  font-productsansr text-black'>{customer?.phoneNumber}</p>
      </div>
      <div className="font-alata text-xl mx-7 text-[#907248ef] flex m-5 gap-3"><span>Age: </span>
         <p className='justify-center  font-productsansr text-black'>{customer?.age}</p>
      </div>
      <div className="font-alata text-xl mx-7 text-[#907248ef] flex m-5 gap-3"><span>Gender: </span>
         <p className='justify-center  font-productsansr text-black'>{customer?.gender}</p>
      </div>
      <div className="font-alata text-xl mx-7 text-[#907248ef] flex m-5 gap-3"><span>Address:</span>
           <p className='justify-center  font-productsansr text-black'>{customer?.address}</p>
      </div>
      <div className="font-alata text-xl mx-7 text-[#907248ef] flex m-5 gap-3"><span>Customer Membership:</span>

      <p className='justify-center  font- text-black'>{customer?.customerMembership}</p>
      </div>
      <div className="font-alata text-xl mx-7 text-[#907248ef] flex m-5 gap-3"><span>Email: </span>

      <p className='justify-center  font- text-black'>{customer?.email}</p>
      </div>
      <div className="font-alata text-xl mx-7 text-[#907248ef] flex m-5 gap-3"><span>Rating: </span>

      <p className='justify-center  font- text-black'>{customer?.rating}</p>
      </div>
    </div>
    <div className="w-1/2 h-96 flex justify-center ">
        <img className='' src={imgg} alt='' />
    </div>
    </div>
    </>
  )
}

export default Viewcustomer