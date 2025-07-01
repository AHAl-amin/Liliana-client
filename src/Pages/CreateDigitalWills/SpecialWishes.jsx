"use client"

import { useState } from "react"

function SpecialWishes({onBack, onNext}) {
  const [activeTab, setActiveTab] = useState("funeral")
  const [wishesData, setWishesData] = useState({
    funeralInstructions: "",
    personalMessages: "",
    additionalNotes: "",
  })

  const tabs = [
    { id: "funeral", label: "Funeral Instructions", key: "funeralInstructions" },
    { id: "personal", label: "Personal Messages", key: "personalMessages" },
    { id: "additional", label: "Additional Notes", key: "additionalNotes" },
  ]

  const handleInputChange = (key, value) => {
    setWishesData((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const getTabContent = () => {
    switch (activeTab) {
      case "funeral":
        return {
          title: "Funeral / Burial Instructions",
          placeholder:
            "Provide specific instructions for your funeral or burial arrangements. Include preferences for:\n\n• Type of service (burial, cremation, memorial service)\n• Location preferences\n• Religious or cultural considerations\n• Music, readings, or special requests\n• Specific people you'd like to speak\n• Any other funeral-related wishes",
          key: "funeralInstructions",
        }
      case "personal":
        return {
          title: "Personal Messages",
          placeholder:
            "Write personal messages to your loved ones. You can include:\n\n• Messages to specific family members or friends\n• Words of comfort or guidance\n• Expressions of love and gratitude\n• Life lessons you want to share\n• Memories you want to preserve\n• Any personal thoughts or feelings",
          key: "personalMessages",
        }
      case "additional":
        return {
          title: "Additional Notes",
          placeholder:
            "Include any other special instructions or wishes not covered in previous sections:\n\n• Care instructions for pets\n• Digital asset passwords or instructions\n• Location of important documents\n• Special charitable donations\n• Business succession instructions\n• Any other important information",
          key: "additionalNotes",
        }
      default:
        return tabs[0]
    }
  }

  const currentTab = getTabContent()

  return (
    <div className=" p-6 lora ">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[#BA927D] mb-2">Special Wishes & Instructions</h1>
        <p className="text-gray-500 text-lg">
          Use this section to provide any special wishes, personal messages, or specific instructions not covered in
          other sections.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#BA927D] text-white shadow-sm"
                  : "text-[#BA927D]     "
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-[#BA927D] mb-4">{currentTab.title}</h3>
        <div className="space-y-4">
          <textarea
            value={wishesData[currentTab.key]}
            onChange={(e) => handleInputChange(currentTab.key, e.target.value)}
            placeholder={currentTab.placeholder}
            rows={12}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CB7548] text-gray-700 focus:border-[#CB7548] outline-none transition-colors resize-vertical"
          />

          {/* Character count */}
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{wishesData[currentTab.key].length > 0 && `${wishesData[currentTab.key].length} characters`}</span>
            <span className="text-[#BA927D]">Feel free to be as detailed as you'd like</span>
          </div>
        </div>

        <button className="button mt-2">Submit</button>
      </div>

   

      {/* Action Buttons */}
      <div className="flex justify-between items-center pt-4">
                    <button
                        onClick={onBack}
                       
                        className="px-8 py-2 border text-[#BA927D]  border-[#BA927D]   hover:bg-gray-50 bg-white rounded-md transition-colors duration-200"
                    >
                        Back
                    </button>
                    <button
                        onClick={onNext}
                        className="px-8 py-2 bg-[#BA927D] cursor-pointer  text-white rounded-md shadow-sm transition-colors duration-200"
                    >
                        Next
                    </button>
                </div>
    </div>
  )
}

export default SpecialWishes
