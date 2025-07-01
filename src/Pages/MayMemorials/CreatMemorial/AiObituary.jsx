"use client"

import { div } from "framer-motion/client"
import { FileText, Volume2 } from "lucide-react"
import { useState } from "react"

export default function AIObituaryGenerator({ onNext, onBack }) {
  const [activeTab, setActiveTab] = useState("ai-generated")
  // const [obituaryText, setObituaryText] = useState(

  // )

  const [customText, setCustomText] = useState("")






  return (
    <div className="">
      <div className=" px-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text2 mb-2">AI Obituary Generator</h1>
          <p className="text-gray-400 text-[18px] leading-relaxed">
            Our AI tool generates a thoughtful obituary based on the information you've provided. you can edit it
            afterward and make it fit with your and the deceased's personality.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex mb-6 bg-[#F9F5F2] p-2 rounded-xl gap-10">
          <button
            onClick={() => setActiveTab("ai-generated")}
            className={`flex-1 py-3 px-6 text-sm font-medium transition-all duration-200 rounded-xl cursor-pointer ${activeTab === "ai-generated"
              ? "bg-[#BA927D] font-semibold text-xl text-white shadow-sm"
              : "text-[#BA927D] font-semibold text-xl"
              }`}
          >
            AI Generated
          </button>
          <button
            onClick={() => setActiveTab("customize")}
            className={`flex-1 py-3 px-6 text-sm font-medium transition-all duration-200 rounded-xl cursor-pointer ${activeTab === "customize"
              ? "bg-[#BA927D] font-semibold text-xl text-white shadow-sm"
              : "text-[#BA927D] font-semibold text-xl"
              }`}
          >
            Customize
          </button>
        </div>

        {/* Content Area */}
        <div className="">
          {activeTab === "ai-generated" ? (
            <div>
              <div className=" text-gray-700 bg-[#F9F5F2]  rounded-xl p-6 mb-6">
                `Krib Ox, Born On January 20, 2001, Peacefully Passed Away On February 5, 2077, Though Their Time On This Earth Has Come To An End, Their Memory Continues To Shine Brightly In The Hearts Of All Who Had The Privilege Of Knowing Them. From A Young Age, Krib Was Known For Their Boundless Kindness, Gentle Heart, And The Wisdom That Often Surpassed Their Years. They Had A Remarkable Ability To Offer Comfort And Support To Those Around Them, Whether Through A Listening Ear, A Warm Embrace, Or Simply Being Present When Needed. Their Presence Brought Warmth To Every Room, And Their Words Brought Peace To Troubled Hearts. In Their Family, Krib Was A Pillar Of Strength And A Source Of Unconditional Love. To Their Friends, They Were A Loyal Companion Who Could Always Be Counted On. In Their Community, They Made An Impact On The Lives They Touched. In Remembrance, And The Lessons They Taught—About Compassion, Resilience, And The Beauty Of Simplicity—Will Continue To Guide Those Who Carry Their Memory Forward.`,
              </div>
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setActiveTab("ai-generated")}
                  className={`px-4 py-2 text-sm rounded-md transition-colors duration-200 ${"border border-[#BA927D] text-[#BA927D] cursor-pointer"

                    }`}
                >
                  AI Generated
                </button>
                <button

                  className="px-4 py-2 border border-[#BA927D] text-[#BA927D] cursor-pointer text-sm rounded-md transition-colors duration-200 flex items-center gap-2"
                >
                  <Volume2 />
                  Listen
                </button>

                <button

                  className="px-4 py-2 border border-[#BA927D] flex gap-2 text-[#BA927D] cursor-pointer rounded-lg"
                >
                  <FileText />
                  <span> customize text</span>
                </button>

              </div>
            </div>
          ) : (
           <div>
             <div className="bg-[#F9F5F2]  rounded-xl p-6 mb-6">
              <textarea
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Write your custom obituary here..."
                rows={12}
                className="w-full p-4  rounded-md focus:outline-none focus:ring-2 focus:ring-[#BA927D] focus:border-transparent text-gray-700 text-sm leading-relaxed resize-none"
              />
            </div>
             <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("ai-generated")}
            className={`px-4 py-2 text-sm rounded-md transition-colors duration-200 ${"border border-[#BA927D] text-[#BA927D] cursor-pointer"

              }`}
          >
            Reset to AI Version
          </button>
          <button

            className="px-4 py-2 border border-[#BA927D] text-[#BA927D] cursor-pointer text-sm rounded-md transition-colors duration-200 flex items-center gap-2"
          >
            <Volume2 />
            Listen
          </button>
          
        </div>
            </div>
          )}
        </div>

      
       

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-4">
          <button
            onClick={onBack}
            className="px-8 py-2 border text-[#B65B2B]  border-[#B65B2B] cursor-pointer  hover:bg-gray-50 bg-white rounded-md transition-colors duration-200"
          >
            Back
          </button>
          <button
            onClick={onNext}
            className="px-8 py-2 bg-[#B65B2B] cursor-pointer  text-white rounded-md shadow-sm transition-colors duration-200"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
