import { useState } from "react"


import PersonalInfo from "./PersonalInfo";
import Beneficiaries from "./Beneficiaries";
import Assets from "./Assets";
import Exactor from "./Exactor";
import SpecialWishes from "./SpecialWishes";
import Legal from "./Legal";
import Preview from "./Preview";
import { useSearchParams } from "react-router-dom";





const tabs = [
  { id: "personalInfo", label: "Personal Info" },
  { id: "beneficiaries", label: "Beneficiaries" },
  { id: "assets", label: "Assets" },
  { id: "exactor", label: "Executor" },
  { id: "specialWishes", label: "Special Wishes" },
  { id: "legal", label: "Legal" },
  { id: "preview", label: "Preview" },
];



export default function CreateDigitalWills() {

  const [searchParams] = useSearchParams();
const initialTab = searchParams.get("tab") || "personalInfo";
const [activeTab, setActiveTab] = useState(initialTab);

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





  const renderContent = () => {
    const sharedProps = { onNext: handleNext, onBack: handleBack };

    switch (activeTab) {
      case "personalInfo":
        return <PersonalInfo {...sharedProps} />;
      case "beneficiaries":
        return <Beneficiaries {...sharedProps} />;
      case "assets":
        return <Assets {...sharedProps} />;
      case "exactor":
        return <Exactor {...sharedProps} />;
      case "specialWishes":
        return <SpecialWishes {...sharedProps} />;
      case "legal":
        return <Legal {...sharedProps} />;
      case "preview":
        return <Preview {...sharedProps} />;
   

      default:
        return  null;
    }
  };

  return (
    <div className='bg-gradient-to-r from-[#BA927C] to-[#738F9B] py-10 lora'>
      <div className="  md:w-[80%] mx-auto">
        <div className='flex flex-col justify-between items-center'>
        <h1 className='text1'>Create New Digital wills</h1>
        <p className='text-xl text-gray-200'>Complete the following steps to create your digital will</p>
      </div>
      <div className="w-full  mx-auto p-10  bg-white rounded-xl my-10">
        <div className="space-y-2 mb-6">
          <h1 className="text2 text-4xl font-bold">Digital Will Creation</h1>
          <p className="text-gray-500 text-xl">Complete the following steps to create your digital will</p>
        </div>
        <div className="flex flex-wrap gap-1 mb-6 bg-[#BA927D1A] p-2 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-fit px-4 py-3 rounded-md font-medium transition-all cursor-pointer ${activeTab === tab.id
                  ? "bg-[#BA927D] font-semibold text-xl text-white shadow-sm active-styles"
                  : "text-[#BA927D] font-semibold text-xl inactive-styles  "
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

