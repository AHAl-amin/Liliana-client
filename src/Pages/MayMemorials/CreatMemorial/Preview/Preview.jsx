import { useState } from "react"
import About from "./About";

import Gallery from "./Gallery";
import TimeLine from "./TimeLine";
import Tributes from "./Tributes";




const tabs = [
  { id: "About", label: "About" },
  { id: "Gallery", label: "Upload Gallery" },
  { id: "TimeLine", label: "AI Obituary" },
  { id: "tributes", label: "Tributes" },

]


export default function Preview({ onBack, onNext }) {


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

  const [activeTab, setActiveTab] = useState("About")



  const renderContent = () => {
    const sharedProps = { onNext2: handleNext, onBack2: handleBack };

    switch (activeTab) {
      case "About":
        return <About {...sharedProps} />;
      case "Gallery":
        return <Gallery {...sharedProps} />;
      case "TimeLine":
        return <TimeLine {...sharedProps} />;
      case "tributes":
        return <Tributes {...sharedProps} />;

      default:
        return null;
    }
  };

  return (
    <div className='lora'>

      <div className="  ">
        <div className="relative">
          <div>
            <img src="../../../../public/img/maymemorials/memorialsBannerPreview.png" alt="preview" className="w-full h-auto rounded-lg" />
          </div>
          <div className="absolute bottom-20 left-[45%] flex flex-col items-center justify-center ">
            <img src="https://i.ibb.co/35jgdnGk/image-7.png" alt="" />
            <h1 className="text-2xl text-gray-200">John Smith</h1>
            <p className="text-green-900">1990-2023</p>
          </div>
        </div>

        <div className="w-full  mx-auto   rounded-xl my-10">

          <div className="bg-[#BA927D] rounded-xl">
            <div className="flex flex-wrap gap-1 mb-6  p-2 w-1/2 mx-auto   rounded-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-fit px-4 py-3 rounded-md font-medium transition-all cursor-pointer ${activeTab === tab.id
                    ? "bg-white font-semibold text-xl text-[#BA927D] shadow-sm"
                    : "text-whtie font-semibold text-xl  "
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="min-h-[400px]">{renderContent()}</div>
        </div>
        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="px-6 py-2 border cursor-pointer border-[#BA927D text-[#BA927D] rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Back
          </button>
          <button
            onClick={onNext}
            className="px-6 py-2 text-white cursor-pointer bg-[#BA927D] rounded-lg hover:opacity-90 transition-colors font-medium"

          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

