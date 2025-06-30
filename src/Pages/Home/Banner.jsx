import React from 'react'
import BannerImage from "../../../public/img/Banner/bannerbg.png"
import BannerLogo from "../../../public/img/Banner/bannericon.png"
function Banner() {
  return (
    <div className='relative '>
      <div className='absolute flex flex-col md:top-20 items-center w-full h-full gap-6'>
        <img src={BannerLogo} alt="" className=' md:w-70 w-20' />
        <div className='md:space-x-6 space-x-2 space-y-4'>
          <button className='border border-[#FEF5DB] bg-[#738F9B] rounded-full md:px-3 p-1 md:py-2 md:text-sm text-[6px]   cursor-pointer'>Create Memorial for Someone Else</button>
          <button className='border border-[#FEF5DB] rounded-full md:px-3 p-1 md:py-2 md:text-sm text-[6px] cursor-pointer'>Plan Ahead for Myself (Pre-need)</button>
        </div>
      </div>
      <div className='flex justify-center items-center '>
        <img src={BannerImage} alt="" className='md:w-[60%]  flex ' />
      </div>
      <div className='flex justify-center items-center'>
        <div className='border flex gap-6 justify-between p-6 border-[#FFFFFF] rounded-2xl md:w-[60%] '>
          <div className='border border-[#FEF5DB] rounded-2xl p-2 py-3 bg-gradient-to-r from-[#BA927C] to-[#738F9B] w-full text-center '>
            <h1 className='text1'>16+</h1>
            <p className='text text-2xl '>Blockchain Wills Secured</p>
          </div>
          <div className='border border-[#FEF5DB] rounded-2xl p-2 py-3 bg-gradient-to-r from-[#BA927C] to-[#738F9B] w-full text-center'>
            <h1 className='text1'>16+</h1>
            <p className='text text-2xl'>Blockchain Wills Secured</p>
          </div>
          <div className='border border-[#FEF5DB] rounded-2xl p-2 py-3 bg-gradient-to-r from-[#BA927C] to-[#738F9B] w-full text-center'>
            <h1 className='text1'>16+</h1>
            <p className='text text-2xl'>Blockchain Wills Secured</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

