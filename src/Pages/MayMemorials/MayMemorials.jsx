"use client";

import { BiEdit } from "react-icons/bi";
import { BsShare } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const memorial = [
    {
        id: 1,
        name: "MARY JOHNSON",
        birthDate: "July 22, 1956",
        deathDate: "January 5, 2024",
        relationship: "Grandmother",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        views: 26,
        tributes: 24,
        photos: 12,
    },
    {
        id: 2,
        name: "MARY JOHNSON",
        birthDate: "July 22, 1950",
        deathDate: "January 5, 2024",
        relationship: "Grandmother",
        image: "https://randomuser.me/api/portraits/men/55.jpg",
        views: 26,
        tributes: 24,
        photos: 10,
    },
    {
        id: 3,
        name: "MARY JOHNSON",
        birthDate: "July 22, 1930",
        deathDate: "January 5, 2024",
        relationship: "Grandmother",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        views: 26,
        tributes: 24,
        photos: 9,
    },
    {
        id: 4,
        name: "MARY JOHNSON",
        birthDate: "July 26, 1960",
        deathDate: "January 5, 2024",
        relationship: "Grandmother",
        image: "https://randomuser.me/api/portraits/women/70.jpg",
        views: 26,
        tributes: 24,
        photos: 7,
    },
    {
        id: 5,
        name: "MARY JOHNSON",
        birthDate: "July 26, 1960",
        deathDate: "January 5, 2024",
        relationship: "Grandmother",
        image: "https://randomuser.me/api/portraits/men/60.jpg",
        views: 26,
        tributes: 24,
        photos: 6,
    },
    {
        id: 6,
        name: "MARY JOHNSON",
        birthDate: "July 26, 1960",
        deathDate: "January 5, 2024",
        relationship: "Grandmother",
        image: "https://randomuser.me/api/portraits/men/30.jpg",
        views: 26,
        tributes: 24,
        photos: 11,
    },
];

export default function MayMemorials() {
    return (
        <div className="bg-gradient-to-r from-[#BA927C] to-[#738F9B] py-10 lora">
           <div className="lg:w-[60%] mx-auto md;w-[80%]">
             <div className="flex flex-col justify-between items-center">
                <h1 className="text1 ">Welcome to LegacySphere</h1>
                <p className=" text-gray-200 text-xl">Manage your memorials and digital legacy</p>
                <Link to="/create_memorial" className="bg-[#FEF5DB] py-2 px-4 text-black rounded-xl my-4">CREATE MEMORIAL</Link>
            </div>
           
                {/* Toggle Buttons */}
                <div className="flex justify-between mt-10">
                    <div className="flex border border-[#FEF5DB] rounded-xl uppercase  ">
                        <button

                            className={`px-3 py-2 text-sm md:text-base font-semibold transition-all duration-300 cursor-pointer bg-[#FEF5DB] m-2 rounded-xl text-gray-700

                                }`}
                        >
                            MEMORIAL
                        </button>
                        <button

                            className={`px-6 py-2 text-sm md:text-base font-semibold transition-all duration-300 cursor-pointer text-[#FEF5DB]

                                uppercase}`}
                        >
                            DIGITAL WILL
                        </button>
                    </div>


                    <button className="text-[#FEF5DB] border border-[#FEF5DB] py-1 px-4 rounded-xl cursor-pointer">
                        VIEW ALL
                    </button>
                </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6  ">
                {memorial.map((item) => (
                    <div
                        key={item.id}
                        className="bg-[#E7D3C3] backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden"
                    >
                        {/* Image Section */}
                        <div className="relative">
                            <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                className="w-full h-80 object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                <h3 className="text-white font-bold text-sm tracking-wide">
                                    {item.name}
                                </h3>
                                <p className="text-white/90 text-xs">
                                    {item.birthDate} - {item.deathDate}
                                </p>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-4">
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <p className="text-[#005F6B]">Relationship</p>
                                  <span className="text-gray-900 font-medium text-2xl">
                                    {item.relationship}
                                </span>
                              </div>
                                <div className="text-[#005F6B] flex items-center gap-2">
                                    <img src="../../../public/img/maymemorials/tributes.png" className=' ' alt="" />
                                    <h1> tributes:{item.tributes}</h1>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-2 ">
                                <button className="flex-1 gap-2 text-[#005F6B] text-xs py-1 px-2 rounded flex items-center justify-center">
                                    <IoEyeOutline />
                                    View
                                </button>
                                <button className="flex-1 gap-2 text-[#005F6B]  text-xs py-1 px-2 rounded flex items-center justify-center">
                                    <BiEdit
                                     />
                                    
                                    Edit
                                </button>
                                <button className="flex-1 gap-2 text-[#005F6B] text-xs py-1 px-2 rounded flex items-center justify-center">
                                   <BsShare
                                    />
                                    Share
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
           </div>
        </div>
    );
}