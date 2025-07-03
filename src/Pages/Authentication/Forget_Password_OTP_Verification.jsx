import React from 'react'
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function Forget_Password_OTP_Verification() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/reset_password");
  }
  return (
    <div className=" h-screen flex justify-center items-center bg-gradient-to-r from-[#BA927C] to-[#738F9B] py-10 lora">
   
   
   
         <div className="w-1/3 space-y-8">
   
   
           <form className="backdrop-blur-sm bg-white p-10 mb-10 rounded-lg border border-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold text-[#B18C7B] mb-10 text-center">Verify your OTP</h2>
              <div className="form-control w-full mb-6">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your OTP"
                    className="w-full p-3 border border-gray-300 text-gray-700 rounded focus:outline-none pl-10 focus:border-[#B18C7B]"
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>


              <div className='pb-2'>

              
           
              <button
                type="submit"
                onClick={handleClick}

                className="w-full bg-[#B18C7B] text-white py-3 text-lg rounded hover:bg-[#B18C7B]/90 transition cursor-pointer"
              >
                Send
              </button>
                <div className='flex mx-auto justify-center'>
                  <Link to="/login" className='font-semibold mt-4 text-sm  text-[#B18C7B]  hover:underline'>Resend Code</Link>
                </div>
              </div>


            </form>
         </div>
   
   
       </div>
  )
}

export default Forget_Password_OTP_Verification