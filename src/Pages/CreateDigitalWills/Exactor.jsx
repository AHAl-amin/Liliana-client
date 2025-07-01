"use client"

import { useState } from "react"

function Executor({onBack, onNext}) {
  const [executorData, setExecutorData] = useState({
    executorFullName: "",
    relationship: "",
    emailAddress: "",
    phoneNumber: "",
    specialInstructions: "",
  })

 

  return (
    <div className=" p-6 ">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[#BA927D]  mb-2">Executor Information</h1>
        <p className="text-gray-500 text-xl">
          An executor is responsible for carrying out the instructions in your will. Choose someone you trust who is
          willing and able to handle this responsibility.
        </p>
      </div>

      {/* Primary Executor Form */}
      <div className="space-y-6 mb-8">
       

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="executorFullName" className="block text-xl font-medium text-[#BA927D]  mb-2">
              Executor Full Name
            </label>
            <input
              type="text"
              id="executorFullName"
              name="executorFullName"
              value={executorData.executorFullName}
           
              placeholder="Enter executors full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CB7548] text-gray-700 focus:border-[#CB7548]   outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="relationship" className="block text-xl font-medium text-[#BA927D]  mb-2">
              Relationship
            </label>
            <input
              type="text"
              id="relationship"
              name="relationship"
              value={executorData.relationship}
           
              placeholder="Enter relationship"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CB7548] text-gray-700 focus:border-[#CB7548] outline-none transition-colors"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="emailAddress" className="block text-xl font-medium text-[#BA927D]  mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={executorData.emailAddress}
             
              placeholder="Enter executors email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CB7548] text-gray-700 focus:border-[#CB7548] outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-xl font-medium text-[#BA927D]  mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={executorData.phoneNumber}
            
              placeholder="Enter executors phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CB7548] text-gray-700 focus:border-[#CB7548] outline-none transition-colors"
            />
          </div>
        </div>

        {/* Special Instructions */}
        <div>
          <label htmlFor="specialInstructions" className="block text-xl font-medium text-[#BA927D]  mb-2">
            Special Instruction For Executor
          </label>
          <textarea
            id="specialInstructions"
            name="specialInstructions"
            value={executorData.specialInstructions}
            
            placeholder="Provide any specific instructions or guidance for your executor"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CB7548] text-gray-700 focus:border-[#CB7548] outline-none transition-colors resize-vertical"
          />
        </div>
        <button className="button">
            Submit
        </button>
      </div>

      {/* Add Alternate Executor Option */}
      {/* <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <input
            type="checkbox"
            id="addAlternate"
            checked={showAlternateExecutor}
            onChange={(e) => setShowAlternateExecutor(e.target.checked)}
            className="w-4 h-4 text-[#BA927D]  border-gray-300 rounded focus:ring-orange-500"
          />
          <label htmlFor="addAlternate" className="text-xl font-medium text-gray-700">
            Add an alternate executor (recommended)
          </label>
        </div>
        <p className="text-xs text-gray-500 ml-7">
          An alternate executor will serve if your primary executor is unable to fulfill their duties.
        </p>
      </div> */}

      {/* Alternate Executor Form */}
      {/* {showAlternateExecutor && (
        <div className="space-y-6 mb-8 p-6 bg-gray-50 rounded-lg border">
          <h3 className="text-lg font-medium text-gray-900">Alternate Executor</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="altExecutorFullName" className="block text-xl font-medium text-[#BA927D]  mb-2">
                Executor Full Name
              </label>
              <input
                type="text"
                id="altExecutorFullName"
                name="executorFullName"
                value={alternateExecutor.executorFullName}
                onChange={handleAlternateInputChange}
                placeholder="Enter alternate executors full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CB7548] text-gray-700 focus:border-[#CB7548] outline-none transition-colors bg-white"
              />
            </div>
            <div>
              <label htmlFor="altRelationship" className="block text-xl font-medium text-[#BA927D]  mb-2">
                Relationship
              </label>
              <input
                type="text"
                id="altRelationship"
                name="relationship"
                value={alternateExecutor.relationship}
                onChange={handleAlternateInputChange}
                placeholder="Enter relationship"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CB7548] text-gray-700 focus:border-[#CB7548] outline-none transition-colors bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="altEmailAddress" className="block text-xl font-medium text-[#BA927D]  mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="altEmailAddress"
                name="emailAddress"
                value={alternateExecutor.emailAddress}
                onChange={handleAlternateInputChange}
                placeholder="Enter alternate executors email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CB7548] text-gray-700 focus:border-[#CB7548] outline-none transition-colors bg-white"
              />
            </div>
            <div>
              <label htmlFor="altPhoneNumber" className="block text-xl font-medium text-[#BA927D]  mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="altPhoneNumber"
                name="phoneNumber"
                value={alternateExecutor.phoneNumber}
                onChange={handleAlternateInputChange}
                placeholder="Enter alternate executors phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CB7548] text-gray-700 focus:border-[#CB7548] outline-none transition-colors bg-white"
              />
            </div>
          </div>
        </div>
      )} */}

      {/* <div className="mb-8 p-4 bg-orange-50 border border-orange-200 rounded-lg">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <svg className="w-5 h-5 text-orange-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <h4 className="text-xl font-medium text-orange-800 mb-1">Important:</h4>
            <p className="text-xl text-orange-700">
              Make sure to discuss this responsibility with your chosen executor(s) beforehand. They should be aware of
              their role and willing to serve. Consider choosing someone who is organized, trustworthy, and lives in the
              same jurisdiction as your assets.
            </p>
          </div>
        </div>
      </div> */}

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

export default Executor
