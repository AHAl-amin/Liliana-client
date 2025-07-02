"use client"

import { useState } from "react"
// Optional: For PDF download, install jsPDF: `npm install jspdf`
import { jsPDF } from "jspdf"
import { div } from "framer-motion/client"
import { CiShare2 } from "react-icons/ci"
import { MdOutlineFileDownload } from "react-icons/md"
import { useNavigate } from "react-router-dom"

function DownloadPage() {



const navigate = useNavigate();

const handleBack = () => {
  navigate("/create_digital?tab=preview"); // or your route path
};


  // Mock data for will
  const [willData] = useState({
    personalInfo: {
      fullLegalName: "John Smith Doe",
      dateOfBirth: "January 15, 1975",
      legalAddress: "123 Main Street, New York, NY 10001",
      nationalId: "123-45-6789",
      emailAddress: "john.doe@email.com",
      phoneNumber: "+1 (555) 123-4567",
    },
    executor: {
      executorFullName: "Sarah Johnson",
      relationship: "Sister",
      emailAddress: "sarah.johnson@email.com",
      phoneNumber: "+1 (555) 987-6543",
      specialInstructions: "Please consult with the family attorney for any complex matters.",
    },
    beneficiaries: [
      {
        fullName: "Mary Johnson",
        relationship: "Spouse",
        emailAddress: "mary@email.com",
        phoneNumber: "+1234567890",
        percentage: "50",
      },
      {
        fullName: "Michael Doe",
        relationship: "Son",
        emailAddress: "michael@email.com",
        phoneNumber: "+1234567891",
        percentage: "30",
      },
      {
        fullName: "Emily Doe",
        relationship: "Daughter",
        emailAddress: "emily@email.com",
        phoneNumber: "+1234567892",
        percentage: "20",
      },
    ],
    assets: [
      {
        assetName: "real estate:",
        assetType: "Real Estate",
        estimatedValue: "$500,000",
        location: "123 Main Street, New York, NY",
        description: "Primary residence with 3 bedrooms and 2 bathrooms",
      },
      {
        assetName: "Financial Assets:",
        assetType: "Investment Account",
        estimatedValue: "$250,000",
        location: "Fidelity Investments",
        description: "Mixed portfolio of stocks, bonds, and mutual funds",
      },
      {
        assetName: "personal property",
        assetType: "Vehicle",
        estimatedValue: "$25,000",
        location: "Home garage",
        description: "Silver sedan, VIN: 1HGCV1F30LA123456",
      },
    ],
    specialWishes: {
      funeralInstructions:
        "I wish to be cremated and have my ashes scattered at Central Park. I would like a memorial service with close family and friends, with jazz music and readings from my favorite poems.",
      personalMessages:
        "To my beloved family: Thank you for all the love and support throughout my life. Please remember the good times and continue to support each other.",
      additionalNotes:
        "Please ensure my pet cat, Whiskers, is cared for by my daughter Emily. All my books should be donated to the local library.",
    },
    signatureDate: "December 15, 2024",
  })



  const handleDownload = () => {
    try {
      const doc = new jsPDF()
      doc.setFontSize(16)
      doc.text("Last Will and Testament", 20, 20)
      doc.setFontSize(12)
      doc.text(`of ${willData.personalInfo.fullLegalName}`, 20, 30)
      doc.text(`Personal Info:`, 20, 50)
      doc.text(`Name: ${willData.personalInfo.fullLegalName}`, 20, 60)
      doc.text(`Date of Birth: ${willData.personalInfo.dateOfBirth}`, 20, 70)
      doc.save("will_preview.pdf")
    } catch (error) {
      console.error("PDF generation failed:", error)
      alert("Failed to generate PDF. Please try again.")
    }
  }

  const handleEdit = () => {
    console.log("Navigating to edit mode")
  }



  if (!willData) {
    return <div className="p-6 text-red-600">Error: Will data is missing.</div>
  }

 
  return (
   <div className="bg-gradient-to-r from-[#BA927C] to-[#738F9B] py-10 lora">
     <div className="p-6 lora md:max-w-[80%] mx-auto bg-white py-10   rounded-xl my-10">
      {/* Action Buttons */}
      <div className="flex justify-end items-center mb-8 no-print">
        
        <div className="flex space-x-3">
        
        
          <button
            onClick={handleDownload}
            className="px-8 rounded-xl py-2 border text-[#BA927D]  border-[#BA927D]  transition-colors font-medium  cursor-pointer flex items-center gap-2"
          >
            <MdOutlineFileDownload />
            Download PDF
          </button>
            <button
            onClick={handleEdit}
            className="rounded-xl px-8 py-2 border text-[#BA927D]  border-[#BA927D] cursor-pointer transition-colors font-medium flex items-center gap-2"
          >
            <CiShare2 />
            Share
          </button>
        </div>
      </div>

      {/* Will Document */}
      <div className="">
        {/* Document Header */}
        <div className="text-center mb-8 text-[#BA927D] ">
          <h1 className="text-3xl font-bold mb-2">Last Will And Testament</h1>
          <p>Of</p>
          <h2 className="text-xl text-[#BA927D] ">{willData.personalInfo?.fullLegalName || "Unknown"}</h2>
        </div>

        {/* Opening Declaration */}
        <div className="mb-8 max-w-5xl  mx-auto">
          <p className="text-lg text-gray-500 leading-relaxed text-center ">
            I, {willData.personalInfo?.fullLegalName || "Unknown"}, a resident of New York, New York, being of sound mind
            and memory, do hereby make, publish, and declare this to be my Last Will and Testament, hereby revoking all
            wills and codicils previously made by me.
          </p>
        </div>

        {/* Personal Information */}
        <div className="mb-8 p-4  border-[#e0c8a4]">
          <h3 className="text-lg font-semibold text-[#BA927D] mb-4 border-b border-[#008C9E33] pb-2">
            PERSONAL INFORMATION
          </h3>
          <div className=" space-y-6 text-xl text-[#555]">
            <div>
              <strong className="text-[#BA927D]">Date of Birth:</strong> {willData.personalInfo?.dateOfBirth || "N/A"}
            </div>
            <div>
              <strong className="text-[#BA927D]">National ID:</strong> {willData.personalInfo?.nationalId || "N/A"}
            </div>
            <div>
              <strong className="text-[#BA927D]">Address:</strong> {willData.personalInfo?.legalAddress || "N/A"}
            </div>
            <div>
              <strong className="text-[#BA927D]">Phone:</strong> {willData.personalInfo?.phoneNumber || "N/A"}
            </div>
            <div className="md:col-span-2">
              <strong className="text-[#BA927D]">Email:</strong> {willData.personalInfo?.emailAddress || "N/A"}
            </div>
          </div>
        </div>

        {/* Executor Appointment */}
        <div className="mb-8 p-4 ">
          <h3 className="text-xl font-semibold text-[#BA927D] mb-4 border-b border-[#008C9E33] pb-2">
            EXECUTOR APPOINTMENT
          </h3>
          <p className="text-lg text-[#555] mb-3">
            I hereby appoint <strong>{willData.executor?.executorFullName || "Unknown"}</strong> (
            {willData.executor?.relationship || "N/A"}) as the Executor of this Last Will and Testament to carry out the
            provisions herein.
          </p>
          <div className="text-lg text-[#666]">
            <div>
              <strong>Contact:</strong> {willData.executor?.emailAddress || "N/A"} |{" "}
              {willData.executor?.phoneNumber || "N/A"}
            </div>
            {willData.executor?.specialInstructions && (
              <div className="mt-2">
                <strong>Special Instructions:</strong> {willData.executor.specialInstructions}
              </div>
            )}
          </div>
        </div>

        {/* Beneficiaries */}
        <div className="mb-8 p-4 ">
          <h3 className="text-lg font-semibold text-[#BA927D] mb-4 border-b border-[#008C9E33] pb-2">BENEFICIARIES</h3>

          <div className="space-y-3">
            {willData.beneficiaries?.length > 0 ? (
              willData.beneficiaries.map((beneficiary, index) => (
                <div key={index} className="p-3 bg-[#F9F5F2] ">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="font-medium text-lg text-[#BA927D]">{beneficiary.fullName || "Unknown"}</div>
                      <div className=" text-[#666] ">
                        {beneficiary.relationship || "N/A"} <br /> {beneficiary.emailAddress || "N/A"} <br />{" "}
                        {beneficiary.phoneNumber || "N/A"}
                      </div>
                    </div>
                    <div className="text-right bg-[#BA927D] text-white py-2 px-4 rounded-lg mt-8">
                      <div className="font-semibold ">{beneficiary.percentage || "0"}%</div>

                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-[#666]">No beneficiaries listed.</p>
            )}
          </div>
        </div>

        {/* Asset Distribution */}
        <div className="mb-8 p-4 ">
          <h3 className="text-lg font-semibold text-[#BA927D] mb-4 border-b border-[#008C9E33] pb-2">
            ASSET DISTRIBUTION
          </h3>

          <div className="space-y-4">
            {willData.assets?.length > 0 ? (
              willData.assets.map((asset, index) => (
                <div key={index} className="p-3  rounded-lg ">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium text-lg text-[#BA927D]">{asset.assetName || "Unknown"}</div>

                  </div>
                  <div className="text-sm text-[#666] space-y-1">
                    <div>
                      {asset.assetType || "N/A"}
                    </div>
                    <div>
                      {asset.location || "N/A"}
                    </div>
                    {asset.description && (
                      <div>
                        {asset.description}
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-sm text-[#666]">No assets listed.</p>
            )}
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-[#BA927D] border-b mb-4 pb-2 border-[#BA927D]"> DIGITAL ASSETS</h1>
          <p className="text-gray-500 p-2">I grant my Executor full authority to access, modify, control, archive, transfer, or delete any of my digital assets.
            Digital assets include but are not limited to: email accounts, social media accounts, financial accounts, domain names, digital files, and cryptocurrency.
            A separate document with account information and passwords has been provided to my Executor.</p>
        </div>

        {/* Special Wishes */}
        <div className="mb-8 p-4 ">
          <h3 className="text-lg font-semibold text-[#BA927D] mb-4 border-b border-[#e0c8a4] pb-2">SPECIAL WISHES</h3>
          <p className="text-gray-500">I grant my Executor full authority to access, modify, control, archive, transfer, or delete any of my digital assets.
            Digital assets include but are not limited to: email accounts, social media accounts, financial accounts, domain names, digital files, and cryptocurrency.
            A separate document with account information and passwords has been provided to my Executor.</p>
          {willData.specialWishes?.funeralInstructions && (
            <div className=" flex items-center gap-4 mt-4">
              <h4 className="font-semibold text-[#BA927D] ">Funeral Instructions:</h4>
              <p className="text-sm text-[#555] leading-relaxed">{willData.specialWishes.funeralInstructions}</p>
            </div>
          )}
          {willData.specialWishes?.personalMessages && (
            <div className="flex items-center gap-4 mt-4">
              <h4 className="font-semibold  text-[#BA927D] mb-2">Personal Messages:</h4>
              <p className="text-sm text-[#555] leading-relaxed">{willData.specialWishes.personalMessages}</p>
            </div>
          )}
          {willData.specialWishes?.additionalNotes && (
            <div className="flex items-center gap-4 mt-4">
              <h4 className=" font-semibold  text-[#BA927D] mb-2">Additional Notes:</h4>
              <p className="text-sm text-[#555] leading-relaxed">{willData.specialWishes.additionalNotes}</p>
            </div>
          )}
        </div>

        {/* Signature Section */}
        <div className="mt-12 pt-8 border-t border-[#e0c8a4] text-center">
          <div className="">
            {/* Testator Signature */}
            <div className="flex justify-between">
              <div className="mb-4">
                <div className="border-b border-[#BA927D] h-12 flex items-end pb-2">
                  <span className="text-xl italic text-[#555]">{willData.personalInfo?.fullLegalName || "N/A"}</span>
                </div>
                <div className="text-xl text-[#BA927D] mt-1">Testator Signature</div>
              </div>
              <div>

                <div className="text-xl text-[#BA927D] mr-30">Date:</div>
              </div>
            </div>
            <div className="text-lg text-[#BA927D] text-start">
              The foregoing instrument was signed, published, and declared by the Testator as their Last Will, in our presence, and we, at their request and in their presence, and in the presence of each other, have subscribed our names as witnesses.
            </div>

            {/* Witness Signatures */}
            <div className="flex justify-between mt-10">
              <div className=" space-y-4 md:w-1/4 ">
                <div>
                  <p className="font-medium text-start text-xl text-[#A97C5C]">Witness Signature</p>
                  <div className="h-12">
                    {/* Replace with your actual signature image */}
                    {/* <img
            src="/path-to-signature.png"
            alt="Signature"
            className="h-10 object-contain mt-1"
          /> */}
                  </div>
                  <div className="border-t  border-[#A97C5C] mt-1 w-full"></div>
                </div>

                <div className="flex gap-2">
                  <p className="font-medium text-xl text-[#A97C5C]">Name:</p>
                  <div className="border-b border-[#A97C5C] w-full mt-1"></div>
                </div>

                <div className="flex gap-2">
                  <p className="font-medium text-xl text-[#A97C5C]">Address:</p>
                  <div className="border-b border-[#A97C5C] w-full mt-1"></div>
                </div>
              </div>
              <div className=" space-y-4 md:w-1/4 ">
                <div>
                  <p className="font-medium text-start text-xl text-[#A97C5C]">Witness Signature</p>
                  <div className="h-12">
                    {/* Replace with your actual signature image */}
                    {/* <img
            src="/path-to-signature.png"
            alt="Signature"
            className="h-10 object-contain mt-1"
          /> */}
                  </div>
                  <div className="border-t  border-[#A97C5C] mt-1 w-full"></div>
                </div>

                <div className="flex gap-2">
                  <p className="font-medium text-xl text-[#A97C5C]">Name:</p>
                  <div className="border-b border-[#A97C5C] w-full mt-1"></div>
                </div>

                <div className="flex gap-2">
                  <p className="font-medium text-xl text-[#A97C5C]">Address:</p>
                  <div className="border-b border-[#A97C5C] w-full mt-1"></div>
                </div>
              </div>
            </div>
          </div>

        
        </div>
      </div>

      {/* Navigation Buttons */}
     <div className="flex justify-between items-center pt-10">
                <button
                    
                        onClick={handleBack}
                    className="px-8 py-2 border text-[#BA927D]  border-[#BA927D] cursor-pointer  hover:bg-gray-50 bg-white rounded-md transition-colors duration-200"
                >
                    Back
                </button>
             
            </div>


    </div>
   </div>
  )
}

export default DownloadPage