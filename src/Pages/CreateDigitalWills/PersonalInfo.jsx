"use client"

import { useState } from "react"

export default function PersonalInfo({ onNext, onBack }) {
    const [formData, setFormData] = useState({
        fullLegalName: "",
        dateOfDeath: "",
        legalAddress: "",
        nationalId: "",
        emailAddress: "",
        phoneNumber: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }


    return (
        <div className=" p-6 ">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-[#BA927D] mb-2">Personal - Information</h1>
                <p className="text-gray-500 text-xl ">Provide your personal details for identification purposes.</p>
            </div>

            {/* Form */}
            <div className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="fullLegalName" className="block text-xl  font-medium text-[#BA927D] mb-2">
                            Full Legal Name
                        </label>
                        <input
                            type="text"
                            id="fullLegalName"
                            name="fullLegalName"
                            value={formData.fullLegalName}
                            onChange={handleInputChange}
                            placeholder="Enter your full legal name"
                            className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-[#CB7548] focus:border-[#CB7548] outline-none transition-colors"
                        />
                    </div>
                    <div>
                        <label htmlFor="dateOfDeath" className="block text-xl  font-medium text-[#BA927D] mb-2">
                            Date Of Death
                        </label>
                        <div className="relative">
                            <input
                                type="date"
                                id="dateOfDeath"
                                name="dateOfDeath"
                                value={formData.dateOfDeath}
                                onChange={handleInputChange}
                                placeholder="mm/dd/yy"
                                className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-[#CB7548] focus:border-[#CB7548] outline-none transition-colors"
                            />
                         
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="legalAddress" className="block text-xl  font-medium text-[#BA927D] mb-2">
                            Legal Address
                        </label>
                        <input
                            type="text"
                            id="legalAddress"
                            name="legalAddress"
                            value={formData.legalAddress}
                            onChange={handleInputChange}
                            placeholder="Enter your current legal address"
                            className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-[#CB7548] focus:border-[#CB7548] outline-none transition-colors"
                        />
                    </div>
                    <div>
                        <label htmlFor="nationalId" className="block text-xl  font-medium text-[#BA927D] mb-2">
                            National ID/Passport Number
                        </label>
                        <input
                            type="text"
                            id="nationalId"
                            name="nationalId"
                            value={formData.nationalId}
                            onChange={handleInputChange}
                            placeholder="Enter your ID or passport number"
                            className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-[#CB7548] focus:border-[#CB7548] outline-none transition-colors"
                        />
                    </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="emailAddress" className="block text-xl  font-medium text-[#BA927D] mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="emailAddress"
                            name="emailAddress"
                            value={formData.emailAddress}
                            onChange={handleInputChange}
                            placeholder="Enter your email address"
                            className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-[#CB7548] focus:border-[#CB7548] outline-none transition-colors"
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className="block text-xl  font-medium text-[#BA927D] mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-[#CB7548] focus:border-[#CB7548] outline-none transition-colors"
                        />
                    </div>
                </div>

                {/* Important Notice */}
                <div className="bg-[#F9F5F2]  rounded-lg p-4 flex items-start space-x-3">
                    <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-[#BA927D] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-xl  font-medium text-orange-800 mb-1">Important:</h4>
                        <p className="text-xl  text-gray-500">
                            Please ensure all information provided matches your legal identification documents. This information will
                            be used to verify your identity and validate your digital will.
                        </p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-4">
                    <button
                        onClick={onBack}
                        disabled
                        className="px-8 py-2 border text-[#BA927D]  border-[#BA927D] cursor-not-allowed  hover:bg-gray-50 bg-white rounded-md transition-colors duration-200"
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
        </div>
    )
}
