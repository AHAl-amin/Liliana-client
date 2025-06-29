import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: "Ankita Roy",
        image: "https://i.pravatar.cc/150?img=32",
        feedback:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.",
    },
    {
        id: 2,
        name: "Rahim Uddin",
        image: "https://i.pravatar.cc/150?img=45",
        feedback:
            "A wonderful platform! It helped me connect with other creatives and grow my career.",
    },
    {
        id: 3,
        name: "Sadia Haque",
        image: "https://i.pravatar.cc/150?img=56",
        feedback:
            "User-friendly, clean design, and great support team. Highly recommended!",
    },
];
function UserReflection() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const { name, image, feedback } = testimonials[currentIndex];

    return (
        <div className='w-[60%] mx-auto lora pt-20 pb-30 '>
            <div className="relative py-16">
                <div className="absolute left-1/5 top-0">
                    <img src="/img/Banner/birdOne.png" alt="Decorative bird illustration" />
                </div>
                <div className="absolute right-1/5 top-0">
                    <img src="/img/Banner/birdTwo.png" alt="Decorative bird illustration" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl md:font-bold text1  ">User Reflections</h1>

                    <p className="text-lg text max-w-2xl text-center font-sans">
                        Discover our innovative technology that transforms how we preserve and honor memories in the digital age.
                    </p>
                </div>
            </div>

            <div className="w-full  flex items-center justify-center  ">
                <div className=" text-center text-white w-full relative ">
                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#F8E9D6] text-gray-400 cursor-pointer rounded-full p-3 shadow-md hover:scale-105 transition"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Avatar */}
                    <div className="relative inline-block">
                        <img
                            src={image}
                            alt={name}
                            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white"
                        />
                        <div className="absolute bottom-0 right-3 bg-[#F8E9D6] p-2 rounded-full shadow">
                            <FaQuoteRight className="text-xl text-[#BA927C]" />
                        </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-2xl font-semibold mt-6 text-[#FEF5DB]">{name}</h3>

                    {/* Feedback */}
                    <p className="text-xl text mt-4 lg:px-60 md:px-50  leading-relaxed">
                        {feedback}
                    </p>

                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#F8E9D6] text-gray-400 cursor-pointer rounded-full p-3 shadow-md hover:scale-105 transition"
                    >
                        <FaChevronRight
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserReflection