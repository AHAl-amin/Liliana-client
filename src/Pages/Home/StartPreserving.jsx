import React from 'react'

function StartPreserving() {
    return (
        <div className='w-[60%] mx-auto lora pt-10 md:pb-50 lora  '>
            <div className='relative '>
                <div className='flex justify-between'>
                    <img src="../../../public/img/Banner/tree.png" className='' alt="" />
                    <img src="../../../public/img/Banner/tree.png" className='' alt="" />
                </div>
                <div>
                    <img src="../../../public/img/Banner/StartPreservingBanner.png" className='absolute top-[250px] z-30 ' alt="" />
                    <div className='z-30 absolute flex flex-col items-center justify-center w-full space-y-4 '>
                        <h1 className='text-[#FEF5DB] font-semibold text-3xl'>Start Preserving your Legacy Today</h1>
                        <p className='text md:max-w-2xl text-center'>Join thousands of families who are creating meaningful digital memorials and preserving their legacies for generations to come.</p>
                        <div className='space-x-6'>
                            <button className='border border-[#FEF5DB] bg-[#738F9B] rounded-full px-3 py-2  cursor-pointer'>create a memorial</button>
                            <button className='border border-[#FEF5DB] rounded-full px-6 py-2 cursor-pointer'>create a Will</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StartPreserving