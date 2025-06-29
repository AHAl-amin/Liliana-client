


import React, { useState } from 'react';


const AdvanceFeature = () => {
    const memorialData = [
        {
            id: 1,
            title: "AI Tribute Maker",
            description: "Create a heartfelt video tribute using AI to honor your loved one with personalized memories.",
            detailedDescription: "Our advanced AI technology analyzes your photos, videos, and written memories to create a personalized tribute video. The system intelligently selects the most meaningful moments, applies appropriate transitions, and even suggests background music that matches the tone of your memories. You can customize every aspect, from the video length to specific scenes, ensuring the final tribute perfectly captures the essence of your loved one's life and legacy."
        },
        {
            id: 2,
            title: "Media Upload",
            description: "Easily upload photos, videos, and audio to build a comprehensive memorial collection.",
            detailedDescription: "Easily upload unlimited photos, videos, audio recordings, and documents from any device. Our platform supports all major file formats including JPEG, PNG, MP4, MOV, MP3, WAV, and PDF. The intelligent organization system automatically sorts your media by date, location, and content type. You can also invite family members and friends to contribute their own memories, creating a comprehensive collection that tells the complete story of your loved one's life."
        },
        {
            id: 3,
            title: "Text Tribute",
            description: "Write and customize meaningful written tributes like obituaries or personal messages.",
            detailedDescription: "Create beautiful written tributes with our intuitive text editor. Choose from elegant templates or start from scratch to write obituaries, eulogies, life stories, or personal messages. The platform includes spell-check, grammar assistance, and formatting tools to help you craft the perfect tribute. You can also collect written memories from others, creating a collaborative memorial that captures different perspectives and cherished moments."
        },
        {
            id: 4,
            title: "Memorial Page",
            description: "Build a digital memorial page to share photos, videos, and memories with others.",
            detailedDescription: "Build a comprehensive digital memorial page that serves as a lasting tribute to your loved one. The page includes photo galleries, video tributes, written memories, timeline of life events, and a guest book for visitors to leave messages. You can customize the design, colors, and layout to reflect your loved one's personality. The memorial page can be shared privately with family and friends or made public to honor their memory with a wider community."
        },
        {
            id: 5,
            title: "Sharing Options",
            description: "Share your memorial content easily via social media, email, or QR codes with privacy controls.",
            detailedDescription: "Share your memorial content across multiple platforms with our comprehensive sharing tools. Generate custom links for social media, email, or messaging apps. Create QR codes for easy access at funeral services or memorial events. Set privacy controls to determine who can view, comment, or contribute to the memorial. You can also schedule posts for special dates like birthdays or anniversaries, ensuring your loved one's memory continues to be celebrated throughout the years."
        },
        {
            id: 6,
            title: "Step Wizard",
            description: "Follow a guided process to create a memorial effortlessly with step-by-step support.",
            detailedDescription: "Our guided step-by-step wizard makes creating a memorial simple and stress-free during difficult times. The intuitive interface walks you through each stage: uploading media, writing tributes, selecting templates, customizing designs, and sharing options. Built-in prompts help you remember important details and milestones. You can save your progress at any time and return later, and our support team is available 24/7 to assist you through the process of creating a meaningful tribute."
        }
    ];

    // Leaf SVG Component
    const LeafIcon = ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M12 2C12 2 8 6 8 12C8 16 10 18 12 18C14 18 16 16 16 12C16 6 12 2 12 2Z" fill="currentColor" />
            <path d="M12 18C12 18 16 14 20 14C22 14 22 16 20 18C18 20 16 18 12 18Z" fill="currentColor" />
        </svg>
    );

    // Arrow Down Icon
    const ArrowDownIcon = ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    // Arrow Up Icon
    const ArrowUpIcon = ({ className }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M17 14L12 9L7 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const [expandedCards, setExpandedCards] = useState({});

    const toggleCard = (cardId) => {
        setExpandedCards((prev) => ({
            ...prev,
            [cardId]: !prev[cardId],
        }));
    };

    return (
        <div className="bg-gradient-to-r from-[#BA927C] to-[#738F9B] py-10 min-h-screen lora">
            <div className="relative py-16">
                <div className="absolute left-1/4 top-0">
                    <img src="/img/Banner/birdOne.png" alt="Decorative bird illustration" />
                </div>
                <div className="absolute right-1/4 top-0">
                    <img src="/img/Banner/birdTwo.png" alt="Decorative bird illustration" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl md:font-bold text1 ">Advanced Memorial Features</h1>
                    <p className="text-lg text max-w-2xl text-center font-sans">
                        Discover our innovative technology that transforms how we preserve and honor memories in the digital age.
                    </p>
                </div>
            </div>
            <div className="relative w-full  flex items-center justify-center  ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 w-[60%]  ">
                    {memorialData.map((feature) => (
                        <div
                            key={feature.id}
                            className={`
                bg-[#E0E6E9] backdrop-blur-sm rounded-3xl p-10 
                shadow-lg hover:shadow-2xl transition-all duration-300 
                hover:-translate-y-3 border border-white/20 h-full
                text-center cursor-pointer 
                ${expandedCards[feature.id] ? "" : "h-[280px]"}
              `}
                        >
                            {/* Decorative Leaves */}
                            <div className=" absolute  mb-6 h-10 top-5 ">

                                <img src="../../../public/img/Banner/flowerOne.png" className='absulote left-0 bottom-10' alt="" />

                            </div>
                            <div className=" absolute  mb-6 h-10 right-10 top-5 ">


                                <img src="../../../public/img/Banner/flowerTwo.png" alt="" />
                            </div>
                            <h3 className="text-[#BA927D] text-2xl font-semibold mb-5 ">{feature.title}</h3>

                            {/* Card Content */}

                            <p className="text-sm leading-relaxed text-gray-600 mb-8 line-clamp-4 px-6">
                                {feature.detailedDescription}
                            </p>


                            {/* Expanded Content */}
                            <div
                                className={`
                  overflow-hidden transition-all duration-300 ease-in-out mt-4
                  ${expandedCards[feature.id] ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                `}
                            >
                                <div className=" border-t border-gray-200">
                                    <p className="text-sm leading-relaxed text-gray-700 font-sans ">{feature.detailedDescription}</p>
                                </div>
                            </div>
                           <div className='flex justify-center mb-1'>
                             <img src="../../../public/img/Banner/others.png" className='w-12 h-10 ' alt="" />
                           </div>
                            {/* Learn More Button */}
                            <button
                                onClick={() => toggleCard(feature.id)}
                                aria-expanded={expandedCards[feature.id]}
                                aria-label={expandedCards[feature.id] ? `Collapse details for   ${feature.title}` : `Expand details for ${feature.title}`}
                                className="
                  bg-transparent border-none text-[#BA927D] text-sm font-medium 
                  cursor-pointer flex items-center justify-center gap-1 mx-auto 
                  py-1 transition-colors duration-200 hover:text-amber-700
                "
                            >
                               <div className=''>
                                 <span className='text-[18px]'>{expandedCards[feature.id] ? "Show Less" : "Learn More"}</span>
                                {expandedCards[feature.id] ? <ArrowUpIcon className="w-4 h-4 ml-8" /> : <ArrowDownIcon className="w-4 h-4 ml-8" />}
                               </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdvanceFeature;