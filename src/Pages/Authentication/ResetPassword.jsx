import React from 'react';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import resetPass from '../../assets/resetPass.json'; // Adjust the path to your Lottie file

const ResetPassword = () => {
  return (
   <div className=" h-screen flex justify-center items-center bg-gradient-to-r from-[#BA927C] to-[#738F9B] py-10 lora">
   
   
   
         <div className="w-1/3 space-y-8">
   
   
            <form className="backdrop-blur-sm bg-white p-10 mb-10 rounded-lg border border-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold text-[#B18C7B] mb-10 text-center">Reset your Password</h2>
              <div className="form-control w-full mb-6">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="New Password" 
                    className="w-full p-3 border border-gray-300 text-gray-700 rounded focus:outline-none pl-10 focus:border-[#B18C7B]" 
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
              <div className="form-control w-full mb-6">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Confirm Password" 
                    className="w-full p-3 border border-gray-300 text-gray-700 rounded focus:outline-none pl-10 focus:border-[#B18C7B]" 
                  />
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>


<div className='pb-2'>
    
<Link to="/login">
<button className="w-full bg-[#B18C7B] text-white py-3 text-lg rounded hover:bg-[#B18C7B]/90 transition cursor-pointer">Confirm</button>
</Link>

</div>

            
            </form>
         </div>
   
   
       </div>
  );
}

export default ResetPassword;