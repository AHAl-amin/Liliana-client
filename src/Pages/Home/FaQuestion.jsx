import React from 'react'

function FaQuestion() {
    return (
        <div className=' md:w-[80%] lg:w-[60%] mx-auto lora pt-10 pb-30 '>
            <div className="relative py-16">
                <div className="absolute left-1/14 top-0">
                    <img src="/img/Banner/birdOne.png" alt="Decorative bird illustration" />
                </div>
                <div className="absolute right-1/14 top-0">
                    <img src="/img/Banner/birdTwo.png" alt="Decorative bird illustration" />
                </div>
                <div className="flex flex-col space-y-4 items-center justify-center">
                    <h1 className="text-3xl md:font-bold text1  ">User Frequently Asked Questions</h1>

                    <p className="text-lg text max-w-3xl text-center font-sans">
                        Find answers to common questions about our AI Project Manager. Learn how it enhances productivity, automates tasks, and streamlines workflows. Need more help? Our team is here to assist you!
                    </p>
                </div>
            </div>
            <div className='space-y-4 text-2xl'>
                <div className="collapse collapse-arrow bg-[#FEF9EB]  text-[#BA917C]">
                    <input type="radio" name="my-accordion-2" className='bg-white' defaultChecked />
                    <div className="collapse-title font-semibold">How do I create an account?</div>
                    <div className="collapse-content text-xl text-[#8A8D94]">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                </div>
                <div className="collapse collapse-arrow bg-[#FEF9EB] text-[#BA917C]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                    <div className="collapse-content text-xl text-[#8A8D94]">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                </div>
                <div className="collapse collapse-arrow bg-[#FEF9EB] text-[#BA917C]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">How do I update my profile information?</div>
                    <div className="collapse-content text-xl text-[#8A8D94]">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
                <div className="collapse collapse-arrow bg-[#FEF9EB] text-[#BA917C]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">How do I update my profile information?</div>
                    <div className="collapse-content text-xl text-[#8A8D94]">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
                <div className="collapse collapse-arrow bg-[#FEF9EB] text-[#BA917C]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">How do I update my profile information?</div>
                    <div className="collapse-content text-xl text-[#8A8D94]">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
            </div>
        </div>
    )
}

export default FaQuestion