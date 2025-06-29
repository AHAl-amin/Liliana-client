import React from 'react'

function HowMemory() {
  return (
    <div className='w-[60%] mx-auto lora pt-10 pb-30 '>
            <div className="relative pt-20">
                <div className="absolute left-1/7 top-0">
                    <img src="/img/Banner/birdOne.png" alt="Decorative bird illustration" />
                </div>
                <div className="absolute right-1/7 top-0">
                    <img src="/img/Banner/birdTwo.png" alt="Decorative bird illustration" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl md:font-bold text1  ">How Memora Works</h1>
                    
                    <p className="text-lg text max-w-2xl text-center font-sans">
                        Discover our innovative technology that transforms how we preserve and honor memories in the digital age.
                    </p>
                </div>
            </div>
            <div className='flex md:gap-20 relative justify-between h-full'>
                <div className='text-center flex flex-col justify-center items-center space-y-6 w-1/3'>
                    <img src="../../../public/img/Banner/others.png" className='w-2/3' alt="" />
                    <p className='text-[#FEF5DB] md:text-4xl font-bold uppercase '>Create Tribute</p>
                    <div className='border-2 border-[#FAEFCC] w-1/3'></div>
                    <p className='text text-center px-20 text-xl'>Chat with our AI about products, get recommendations, and shopping advice.</p>
                </div>
                <div className='text-center flex flex-col justify-center items-center space-y-10 absolute left-1/3 top-40 w-1/3'>
                    <img src="../../../public/img/Banner/others.png"className='w-2/3' alt="" />
                    <p className='text-[#FEF5DB] md:text-4xl font-bold uppercase '>Add Memories</p>
                    <div className='border-2 border-[#FAEFCC] w-1/3'></div>
                    <p className='text text-center px-20 text-xl'>Chat with our AI about products, get recommendations, and shopping advice.</p>
                </div>
                <div className='text-center flex flex-col justify-center items-center space-y-10 w-1/3'>
                    <img src="../../../public/img/Banner/others.png" className='w-2/3' alt="" />
                    <p className='text-[#FEF5DB] md:text-4xl font-bold uppercase '>Share with Love</p>
                    <div className='border-2 border-[#FAEFCC] w-1/3'></div>
                    <p className='text text-center px-20 text-xl'>Chat with our AI about products, get recommendations, and shopping advice.</p>
                </div>
               
            </div>
    </div>
  )
}

export default HowMemory