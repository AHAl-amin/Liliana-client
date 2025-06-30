import { useState } from "react"

import Basic from "./Basic"
import UploadMedia from "./UploadMedia";
import AiObituary from "./AiObituary";
import Preview from "./Preview";


const tabs = [
  { id: "basic", label: "Basic" },
  { id: "media", label: "Upload Media" },
  { id: "aiObituary", label: "AI Obituary" },
  { id: "preview", label: "Preview" },

]


export default function CreatMemorial() {


  const tabIds = tabs.map(tab => tab.id);

  const handleNext = () => {
    const currentIndex = tabIds.indexOf(activeTab);
    if (currentIndex < tabIds.length - 1) {
      setActiveTab(tabIds[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const currentIndex = tabIds.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabIds[currentIndex - 1]);
    }
  };

  const [activeTab, setActiveTab] = useState("basic")



  const renderContent = () => {
    const sharedProps = { onNext: handleNext, onBack: handleBack };

    switch (activeTab) {
      case "basic":
        return <Basic {...sharedProps} />;
      case "media":
        return <UploadMedia {...sharedProps} />;
      case "aiObituary":
        return <AiObituary {...sharedProps} />;
      case "preview":
        return <Preview {...sharedProps} />;

      default:
        return null;
    }
  };

  return (
    <div className='bg-gradient-to-r from-[#BA927C] to-[#738F9B] py-10 lora'>
      <div className="  md:w-[80%] mx-auto">
        <div className='flex flex-col justify-between items-center'>
        <h1 className='text1'>Create New Memorial</h1>
        <p className='text-[18px]'>Honor and remember your loved one with a digital memorial</p>
      </div>
      <div className="w-full  mx-auto p-10  bg-white rounded-xl my-10">
        <div className="space-y-2 mb-6">
          <h1 className="text2 text-4xl font-bold">Memorial Creation</h1>
          <p className="text-gray-500 text-xl">Complete the following steps to create a memorial</p>
        </div>
        <div className="flex flex-wrap gap-1 mb-6 bg-[#BA927D1A] p-2 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-fit px-4 py-3 rounded-md font-medium transition-all cursor-pointer ${activeTab === tab.id
                  ? "bg-[#BA927D] font-semibold text-xl text-white shadow-sm"
                  : "text-[#BA927D] font-semibold text-xl  "
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="min-h-[400px]">{renderContent()}</div>
      </div>
      </div>
    </div>
  )
}

