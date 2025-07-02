import { Volume2 } from 'lucide-react'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs';
import { FaRegCalendarAlt, FaRegUser } from 'react-icons/fa'

const galleryData = {
    gallery: {
        photos: [
            { id: 1, src: "https://i.ibb.co/SXXkvCPM/image-8.png", alt: "Photo 1" },
            { id: 2, src: "https://i.ibb.co/SXXkvCPM/image-8.png", alt: "Photo 2" },
            { id: 3, src: "https://i.ibb.co/SXXkvCPM/image-8.png", alt: "Photo 3" },
            { id: 4, src: "https://i.ibb.co/SXXkvCPM/image-8.png", alt: "Photo 4" },
            { id: 5, src: "https://i.ibb.co/SXXkvCPM/image-8.png", alt: "Photo 5" },
            { id: 6, src: "https://i.ibb.co/SXXkvCPM/image-8.png", alt: "Photo 6" }
        ],
        video: {
            id: 1,
            src: "video1.mp4",
            alt: "Video 1",
            poster: "video-poster.jpg"
        }
    }
};
const tributesData = [
  {
    id: 1,
    name: "Mary Johnson",
    date: "November 15, 2023",
    message:
      "John Was My Teacher In High School, And He Changed My Life. His Passion For History Inspired Me To Become A Teacher Myself. I Will Always Remember His Kindness And The Way He Made Every Student Feel Valued",
    avatar: "  ../../../../public/img/maymemorials/previewTributes1.png", 
  },
  {
    id: 2,
    name: "David Brown",
    date: "November 16, 2023",
    message:
      "John Was My Teacher In High School, And He Changed My Life. His Passion For History Inspired Me To Become A Teacher Myself. I Will Always Remember His Kindness And The Way He Made Every Student Feel Valued",
    avatar: "  ../../../../public/img/maymemorials/previewTributes2.png", 
  },
  {
    id: 3,
    name: "Sophia Lee",
    date: "November 17, 2023",
    message:
      "John Was My Teacher In High School, And He Changed My Life. His Passion For History Inspired Me To Become A Teacher Myself. I Will Always Remember His Kindness And The Way He Made Every Student Feel Valued",
    avatar: "  ../../../../public/img/maymemorials/previewTributes1.png", 
  },
];




function About() {
    const [colors, setColors] = useState({
        primary: "#C7B181",
        secondary: "#BA9B79",
    })

    const handleColorChange = (colorType, color) => {
        setColors((prev) => ({
            ...prev,
            [colorType]: color,
        }))
    }



    return (
        <div className="bg-[#F4E2D9] rounded-xl  py-10 px-10 ">
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Section - About */}
                <div className="md:col-span-2 bg-[#F8EDE7] p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold text-[#BA927D] mb-4">About John</h2>
                    <p className="text-gray-700 text-sm leading-relaxed">
                        John Smith, born on March 15, 1945, passed away peacefully on November 20, 2023,
                        leaving behind a legacy of love, compassion, and unwavering strength. Throughout his
                        78 years, John was not only a devoted father but also a cherished friend, mentor, and
                        confidant to many. His life was a reflection of integrity, humility, and a deep sense
                        of responsibility toward those he cared for. He had an extraordinary ability to connect
                        with people, always ready to listen, lend a helping hand, or offer wise counsel when it
                        was most needed.
                        <br /><br />
                        John's presence brought warmth and comfort—his laughter filled rooms, his stories
                        captivated generations, and his words carried wisdom earned through a life well-lived.
                        He believed in the power of kindness, led by example, and never hesitated to put others
                        before himself. His family and friends often recall how he could make anyone feel seen,
                        heard, and valued, no matter the circumstances.
                        <br /><br />
                        As remembered by loved ones: “Dad always had a way of making everyone feel special.
                        His laugh was contagious, and his advice was always spot-on. Whether we were facing
                        life’s biggest challenges or enjoying its simplest pleasures, he was always there,
                        steady and strong.”
                    </p>

                    <button className="mt-6 flex items-center gap-2 text-[#BA927D] border border-[#BA927D] px-4 py-2 rounded-md text-sm hover:bg-[#f3e2db] transition">
                        <Volume2 />
                        Listen
                    </button>
                </div>

                {/* Right Section - Details */}
                <div className="space-y-4">
                    {/* Memorial Details */}
                    <div className="bg-[#F3C3A9] text-white rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-4 text-[#D45F22]">Memorial Details</h3>

                        <div className=" mb-3">
                            <div className='flex items-center gap-2 text-[#D45F22]'>
                                <FaRegCalendarAlt />
                                <p className="text-xl">Born: </p>
                            </div>
                            <span className="font-medium">April 12, 1945</span>
                        </div>

                        <div className=" mb-3">
                            <div className=' flex items-center gap-2 text-[#D45F22]'>
                                <FaRegCalendarAlt />
                                <p className="text-xl">Passed: </p>
                            </div>
                            <span className="font-medium">November 8, 2023</span>
                        </div>

                        <div className="">
                            <div className='flex items-center gap-2 text-[#D45F22]'>
                                <FaRegUser />
                                <p className="text-xl">Created by: </p>
                            </div>
                            <span className="font-medium">pappu roy</span>
                        </div>
                    </div>

                    {/* Invite Card */}
                    <div className="bg-white rounded-lg p-4 border border-[#F3C3A6] shadow-sm">
                        <p className="text-xl text-[#BA927D] mb-3">Invite Smith’s family and friends</p>
                        <button className="w-full bg-[#BA927D] text-white py-2 rounded-md transition">
                            Invite Now
                        </button>
                    </div>
                </div>
            </div>
            <div className=" py-10 md:w-[80%] mx-auto">
                {/* Photo Section */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl text-[#B65B2B] font-semibold">Photo/21</h2>
                    <a href="#" className="bg-[#B65B2B] text-white  px-3 py-2 rounded-xl ">View all</a>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {galleryData.gallery.photos.map(photo => (
                        <img
                            key={photo.id}
                            src={photo.src}
                            alt={photo.alt}
                            className=" h-[90%] w-full  object-cover   rounded-lg"
                        />
                    ))}
                </div>

                {/* Video Section */}
                <div className="flex justify-between items-center mb-4 mt-6">
                    <h2 className="text-xl text-[#B65B2B] font-semibold">Video/1</h2>
                    <a href="#" className="bg-[#B65B2B] text-white  px-3 py-2 rounded-xl ">View all</a>
                </div>
                <div className="relative">
                    <iframe width="100%" height="450px" className='rounded-2xl' src="https://www.youtube.com/embed/wNFHUvtogOE?si=TzYlVUTzQpkcBlMv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            <div className="">
                <div className="">
                    {/* Recent Tributes Section */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-[#B65B2B] mb-6">Recent Tributes</h2>

                        <div className="space-y-4">
                            {tributesData.map((tribute) => (
                                <div key={tribute.id} className="bg-white rounded-lg shadow-sm border border-orange-100 p-6 relative">
                                 
                                    <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                                        <BsThreeDots className='text-[#B65B2B] size-6' />
                                    </button>
                                   
                                   
                                   

                                    <div className="flex items-start space-x-4">
                                     
                                        <div className="flex-shrink-0">
                                            <img
                                                src="https://i.ibb.co/9mDTXgMp/image-9.png"
                                                alt={tribute.name}
                                                className="w-12 h-12 rounded-full object-cover border-2 border-orange-200"
                                            />
                                        </div>

                                    
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className='flex items-center gap-6'>
                                                   <div>
                                                     <h3 className="text-lg font-medium text-[#B65B2B]">{tribute.name}</h3>
                                                    <p className="text-sm text-gray-500">{tribute.date}</p>
                                                   </div>
                                         <img src={tribute.avatar} alt="" />
                                                </div>



                                            </div>

                                            <p className="text-gray-700 text-sm leading-relaxed">{tribute.message}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Customize Colors Section */}
                    <div className="bg-white rounded-lg shadow-sm border border-orange-100 p-6">
                        <h3 className="text-xl font-semibold text-[#B65B2B]  mb-6">Customize Colors</h3>

                        <div className="flex space-x-8 mb-8">
                            {/* Primary Color */}
                            <div className="flex flex-col items-center space-y-2">
                                <label className="text-sm  mr-16 font-medium text-gray-700">Primary Color</label>
                                <div className="relative flex items-center gap-10">
                                    <input
                                        type="color"
                                        value={colors.primary}
                                        onChange={(e) => handleColorChange("primary", e.target.value)}
                                        className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer appearance-none"
                                        style={{ backgroundColor: colors.primary }}
                                    />
                                    <input
                                        type="color"
                                        value={colors.primary}
                                        onChange={(e) => handleColorChange("primary", e.target.value)}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                    <span className="text-xs text-gray-500 bg-[#EBD2BF] p-2 rounded-xl font-mono">{colors.primary}</span>
                                </div>
                            </div>

                            {/* Secondary Color */}
                            <div className="flex flex-col items-center space-y-2">
                                <label className="text-sm mr-10 font-medium text-gray-700">Secondary Color</label>
                                <div className="relative flex items-center gap-10">
                                    <input
                                        type="color"
                                        value={colors.secondary}
                                        onChange={(e) => handleColorChange("secondary", e.target.value)}
                                        className="w-12 h-12 rounded-full border-2 border-gray-300 cursor-pointer appearance-none"
                                        style={{ backgroundColor: colors.secondary }}
                                    />
                                    <input
                                        type="color"
                                        value={colors.secondary}
                                        onChange={(e) => handleColorChange("secondary", e.target.value)}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                    <span className="text-xs text-gray-500 bg-[#BA927D] p-2 rounded-xl font-mono">{colors.secondary}</span>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                    </div>
                </div>
            </div>
                       
        </div>
    )
}

export default About