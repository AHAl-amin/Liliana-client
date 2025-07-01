"use client"

import { useState } from "react"

function Beneficiaries({ onNext, onBack }) {
  const [allocationType, setAllocationType] = useState("percentage")
  const [beneficiaries, setBeneficiaries] = useState([
    {
      id: 1,
      fullName: "Mary Johnson",
      relationship: "Spouse",
      emailAddress: "mary@email.com",
      phoneNumber: "+1234567890",
      percentage: "20",
    },
  ])
  const [currentBeneficiary, setCurrentBeneficiary] = useState({
    fullName: "",
    relationship: "",
    emailAddress: "",
    phoneNumber: "",
    percentage: "",
  })

  const relationshipOptions = [
    "Select relationship",
    "Spouse",
    "Child",
    "Parent",
    "Sibling",
    "Grandchild",
    "Friend",
    "Charity",
    "Other",
  ]

  // Calculate total percentage
  const totalPercentage = beneficiaries.reduce((sum, beneficiary) => {
    return sum + (Number.parseFloat(beneficiary.percentage) || 0)
  }, 0)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCurrentBeneficiary((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAddBeneficiary = () => {
    if (currentBeneficiary.fullName && currentBeneficiary.relationship !== "Select relationship") {
      setBeneficiaries((prev) => [...prev, { ...currentBeneficiary, id: Date.now() }])
      setCurrentBeneficiary({
        fullName: "",
        relationship: "",
        emailAddress: "",
        phoneNumber: "",
        percentage: "",
      })
    }
  }

  const handleRemoveBeneficiary = (id) => {
    setBeneficiaries((prev) => prev.filter((beneficiary) => beneficiary.id !== id))
  }


  return (
    <div className="  p-6 ">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[#BA927D] mb-2">Add Beneficiaries</h1>
        <p className="text-gray-500 text-xl">
          Add people who will receive your assets. You can specify the percentage each person will receive or assign
          specific assets.
        </p>
      </div>

      {/* Allocation Type */}
      <div className="mb-8 flex items-center gap-6">
        <h3 className="text-sm font-semibold text-[#BA927D] ">Allocation Type:</h3>
        <div className="flex gap-6  ">
          <label className="flex items-center space-x-2  cursor-pointer">
            <input
              type="radio"
              name="allocationType"
              value="percentage"
              checked={allocationType === "percentage"}
              onChange={(e) => setAllocationType(e.target.value)}
              className="w-4 h-4 text-[#BA927D] border-gray-300 focus:ring-orange-500 bg-orange-100 accent-[#CB7548]"
            />
            <span className="text-sm text-gray-500">Percentage of estate</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="allocationType"
              value="specific"
              checked={allocationType === "specific"}
              onChange={(e) => setAllocationType(e.target.value)}
              className="w-4 h-4 text-[#BA927D] border-gray-300 focus:ring-orange-500  bg-orange-100 accent-[#CB7548] "
            />
            <span className="text-sm text-gray-500">Specific Assets</span>
          </label>
        </div>
      </div>

      {/* Current Beneficiaries */}
      {beneficiaries.length > 0 && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-700">Current Beneficiaries</h3>
            {allocationType === "percentage" && (
              <div className="text-sm">
                <span className="text-[#BA927D] font-medium">Total: {totalPercentage}% (should equal 100%)</span>
              </div>
            )}
          </div>
          <div className="space-y-3">
            {beneficiaries.map((beneficiary) => (
              <div key={beneficiary.id} className="bg-[#F9F5F2] border border-[#BA927D] rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-medium text-[#BA927D] text-xl mb-1">{beneficiary.fullName}</h4>
                    <div className="flex items-center space-x-2 text-lg text-gray-600 mb-2">
                      <span>{beneficiary.relationship}</span>
                      <span className="text-[#BA927D]  size-xl">•</span>
                      <span>{beneficiary.emailAddress}</span>
                      {beneficiary.phoneNumber && (
                        <>
                          <span className="text-[#BA927D]  size-xl">•</span>
                          <span>{beneficiary.phoneNumber}</span>
                        </>
                      )}
                    </div>
                    {allocationType === "percentage" && beneficiary.percentage && (
                      <div className="text-xl font-medium text-[#BA927D] ">{beneficiary.percentage}% Estate</div>
                    )}
                  </div>
                  <button
                    onClick={() => handleRemoveBeneficiary(beneficiary.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors ml-4"
                    title="Remove beneficiary"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Percentage Warning */}
          {/* {allocationType === "percentage" && totalPercentage !== 100 && (
            <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-orange-700">
                  {totalPercentage > 100
                    ? `Total percentage exceeds 100%. Please adjust the allocations.`
                    : `Total percentage is ${totalPercentage}%. Add more beneficiaries or adjust percentages to reach 100%.`}
                </span>
              </div>
            </div>
          )} */}
        </div>
      )}

      {/* Form */}
      <div className="space-y-6 mb-8">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="blocktext-xlfont-medium text-[#BA927D] mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={currentBeneficiary.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CB7548] text-gray-700 focus:border-[#CB7548]  outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="relationship" className="blocktext-xlfont-medium text-[#BA927D] mb-2">
              Relationship
            </label>
            <select
              id="relationship"
              name="relationship"
              value={currentBeneficiary.relationship}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 appearance-none focus:ring-[#CB7548] text-gray-700 focus:border-[#CB7548]  outline-none transition-colors bg-white"
            >
              {relationshipOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="emailAddress" className="blocktext-xlfont-medium text-[#BA927D] mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={currentBeneficiary.emailAddress}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CB7548] text-gray-700 focus:border-[#CB7548]  outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="blocktext-xlfont-medium text-[#BA927D] mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={currentBeneficiary.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CB7548] text-gray-700 focus:border-[#CB7548]  outline-none transition-colors"
            />
          </div>
        </div>

        {/* Row 3 - Percentage (only show if percentage allocation is selected) */}
        {allocationType === "percentage" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="percentage" className="blocktext-xlfont-medium text-[#BA927D] mb-2">
                Percentage(%)
              </label>
              <input
                type="number"
                id="percentage"
                name="percentage"
                value={currentBeneficiary.percentage}
                onChange={handleInputChange}
                placeholder="0"
                min="0"
                max="100"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CB7548] text-gray-700 focus:border-[#CB7548]  outline-none transition-colors"
              />
            </div>
            <div></div>
          </div>
        )}

        {/* Add Beneficiary Button */}
        <div>
          <button
            onClick={handleAddBeneficiary}
            className="flex items-center space-x-2 px-6 py-3 button cursor-pointer text-white rounded-lg hover:bg-[#cb7648] transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Add Beneficiary</span>
          </button>
        </div>
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

export default Beneficiaries
