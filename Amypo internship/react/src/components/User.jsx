import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useStates } from './States';
import AuthService from './service/AuthService';

const User = () => {



    const [user, setUser] = useState({});
    const { data } = useStates()
const getData =async()=>{
    await AuthService.loginById(localStorage.getItem("uid")).then((response)=>{
        setUser(response.data);
    }).catch((e)=>{
        console.log(e);
    })
}
  useEffect(() => {
   getData();
  }, [])
  return (
     <>
    <div className="h-6 w-full mx-20 py-5 font-poppins text-3xl flex text-[#ba9a6def] ">Details</div>

    <div className="flex justify-center">
      
    <div className='flex-col w-1/2 h-1/2 mr-20 mb-10 border-2 border-[#ba9a6def] justify-center rounded-xl border-opacity-5 text-xl'>

      <div className="font-alata text-xl mx-7 text-[#907248ef] flex m-5 gap-3"  ><span>Name:</span>
      <p className='h-8 w-80 justify-center font-productsansr text-black'> {user?.name}</p>
      </div>
      <div className="font-alata text-xl mx-7 text-[#907248ef] flex m-5 gap-3"><span>Email: </span>
         <p className='justify-center  font-productsansr text-black'>{user?.email}</p>
      </div>
      <div className="font-alata text-xl mx-7 text-[#907248ef] flex m-5 gap-3"><span>UserName: </span>
         <p className='justify-center  font-productsansr text-black'>{user?.userName}</p>
      </div>
      <div className="font-alata text-xl mx-7 text-[#907248ef] flex m-5 gap-3"><span>Mobile Number: </span>
         <p className='justify-center  font-productsansr text-black'>{user?.mobileNumber}</p>
      </div>
      <div className="font-alata text-xl mx-7 text-[#907248ef] flex m-5 gap-3"><span>Password:</span>
           <p className='justify-center  font-productsansr text-black'>{user?.password}</p>
      </div>
      <div className="font-alata text-xl mx-7 text-[#907248ef] flex m-5 gap-3"><span>Role: </span>

      <p className='justify-center  font- text-black'>{user?.role}</p>
      </div>
    </div>
    
    </div>
    </>
  )
}


export default User;