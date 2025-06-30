"use client"

import { useState } from "react"

export default function AIObituaryGenerator({ onNext, onBack }) {
  const [activeTab, setActiveTab] = useState("ai-generated")
  const [obituaryText, setObituaryText] = useState(
    `Krib Ox, Born On January 20, 2001, Peacefully Passed Away On February 5, 2077, Though Their Time On This Earth Has Come To An End, Their Memory Continues To Shine Brightly In The Hearts Of All Who Had The Privilege Of Knowing Them. From A Young Age, Krib Was Known For Their Boundless Kindness, Gentle Heart, And The Wisdom That Often Surpassed Their Years. They Had A Remarkable Ability To Offer Comfort And Support To Those Around Them, Whether Through A Listening Ear, A Warm Embrace, Or Simply Being Present When Needed. Their Presence Brought Warmth To Every Room, And Their Words Brought Peace To Troubled Hearts. In Their Family, Krib Was A Pillar Of Strength And A Source Of Unconditional Love. To Their Friends, They Were A Loyal Companion Who Could Always Be Counted On. In Their Community, They Made An Impact On The Lives They Touched. In Remembrance, And The Lessons They Taught—About Compassion, Resilience, And The Beauty Of Simplicity—Will Continue To Guide Those Who Carry Their Memory Forward.`,
  )

  const [customText, setCustomText] = useState("")


  const handleGenerateText = () => {
    // Simulate AI text generation
    const newText = `A new AI-generated obituary text would appear here. This is a placeholder for the generated content that would come from an AI service.`
    setObituaryText(newText)
  }

  const handleListen = () => {
    // Text-to-speech functionality
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(activeTab === "ai-generated" ? obituaryText : customText)
      speechSynthesis.speak(utterance)
    }
  }

  return (
    <div className="">
      <div className=" px-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">AI Obituary Generator</h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our AI tool generates a thoughtful obituary based on the information you've provided. you can edit it
            afterward and make it fit with your and the deceased's personality.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex mb-6 bg-[#F9F5F2] p-2 rounded-xl gap-10">
          <button
            onClick={() => setActiveTab("ai-generated")}
            className={`flex-1 py-3 px-6 text-sm font-medium transition-all duration-200 rounded-xl cursor-pointer ${
              activeTab === "ai-generated"
                ? "bg-[#BA927D] font-semibold text-xl text-white shadow-sm"
                : "text-[#BA927D] font-semibold text-xl"
            }`}
          >
            AI Generated
          </button>
          <button
            onClick={() => setActiveTab("customize")}
            className={`flex-1 py-3 px-6 text-sm font-medium transition-all duration-200 rounded-xl cursor-pointer ${
              activeTab === "customize"
                ? "bg-[#BA927D] font-semibold text-xl text-white shadow-sm"
                : "text-[#BA927D] font-semibold text-xl"
            }`}
          >
            Customize
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          {activeTab === "ai-generated" ? (
            <div>
              <div className="mb-4">
                <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-wrap">{obituaryText}</p>
              </div>
            </div>
          ) : (
            <div>
              <textarea
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Write your custom obituary here..."
                rows={12}
                className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 text-sm leading-relaxed resize-none"
              />
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("ai-generated")}
            className={`px-4 py-2 text-sm rounded-md transition-colors duration-200 ${
              activeTab === "ai-generated"
                ? "bg-orange-300 text-gray-800"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            AI Generated
          </button>
          <button
            onClick={handleListen}
            className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 text-sm rounded-md transition-colors duration-200 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9 12a3 3 0 106 0v-6a3 3 0 00-6 0v6z"
              />
            </svg>
            Listen
          </button>
          {activeTab === "ai-generated" && (
            <button
              onClick={handleGenerateText}
              className="px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 text-sm rounded-md transition-colors duration-200"
            >
              Generate text
            </button>
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
                    className="px-8 py-2 bg-[#B65B2B] cursor-pointer hover:bg-orange-500 text-white rounded-md shadow-sm transition-colors duration-200"
                >
                    Next
                </button>
            </div>
      </div>
    </div>
  )
}
