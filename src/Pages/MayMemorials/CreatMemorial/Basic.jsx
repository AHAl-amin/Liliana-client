"use client"

import { useState } from "react"
import { MdDateRange } from "react-icons/md"

export default function Basic({ onNext, onBack }) {
  const [formData, setFormData] = useState({
    fullName: "",
    religion: "",
    dateOfBirth: "",
    dateOfDeath: "",
    relationship: "",
    location: "",
    gender: "",
    profession: "",
    memories: "",
  })

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className=" ">
      <div className="">
        <div className="">
          <div className="p-8">
            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Name Of Deceased */}
                <div>
                  <label className="block text-[#B65B2B] text-xl font-medium mb-3 ">Name Of Deceased</label>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D7F2F5] focus:border-transparent placeholder-gray-500 text-gray-700 bg-white"
                  />
                </div>

                {/* Date Of Birth */}

                <div>
                  <label htmlFor="dateOfDeath" className="block text-xl  font-medium text-[#B65B2B] mb-2">
                    Date Of Birth
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="dateOfDeath"
                      name="dateOfDeath"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      placeholder="mm/dd/yy"
                      className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-[#CB7548] focus:border-[#CB7548] outline-none transition-colors"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Your Relationship */}
                <div>
                  <label className="block text-[#B65B2B] text-xl font-medium mb-3 ">Your Relationship</label>
                  <select
                    value={formData.relationship}
                    onChange={(e) => handleInputChange("relationship", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D7F2F5] focus:border-transparent text-gray-500 bg-white appearance-none"
                  >
                    <option value="">Select relationship</option>
                    <option value="spouse">Spouse</option>
                    <option value="parent">Parent</option>
                    <option value="child">Child</option>
                    <option value="sibling">Sibling</option>
                    <option value="grandparent">Grandparent</option>
                    <option value="grandchild">Grandchild</option>
                    <option value="friend">Friend</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-[#B65B2B] text-xl font-medium mb-3 ">Gender</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleInputChange("gender", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D7F2F5] focus:border-transparent text-gray-500 bg-white appearance-none"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Religion */}
                <div>
                  <label className="block text-[#B65B2B] text-xl font-medium mb-3 ">Religion</label>
                  <select
                    value={formData.religion}
                    onChange={(e) => handleInputChange("religion", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D7F2F5] focus:border-transparent text-gray-500 bg-white appearance-none"
                  >
                    <option value="">Select Religion</option>
                    <option value="christianity">Christianity</option>
                    <option value="islam">Islam</option>
                    <option value="judaism">Judaism</option>
                    <option value="hinduism">Hinduism</option>
                    <option value="buddhism">Buddhism</option>
                    <option value="other">Other</option>
                    <option value="none">None</option>
                  </select>
                </div>

                {/* Date Of Death */}
                <div>
                  <label htmlFor="dateOfDeath" className="block text-xl  font-medium text-[#B65B2B] mb-2">
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
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Location Of Passing */}
                <div>
                  <label className="block text-[#B65B2B] text-xl font-medium mb-3 ">Location Of Passing</label>
                  <input
                    type="text"
                    placeholder="City, Country"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D7F2F5] focus:border-transparent placeholder-gray-500 text-gray-700 bg-white"
                  />
                </div>

                {/* Profession */}
                <div>
                  <label className="block text-[#B65B2B] text-xl font-medium mb-3 ">Profession</label>
                  <select
                    value={formData.profession}
                    onChange={(e) => handleInputChange("profession", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D7F2F5] focus:border-transparent text-gray-500 bg-white appearance-none"
                  >
                    <option value="">Select profession</option>
                    <option value="doctor">Doctor</option>
                    <option value="teacher">Teacher</option>
                    <option value="engineer">Engineer</option>
                    <option value="lawyer">Lawyer</option>
                    <option value="nurse">Nurse</option>
                    <option value="business-owner">Business Owner</option>
                    <option value="retired">Retired</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Memories & Tribute Notes - Full Width */}
            <div className="mb-8">
              <label className="block text-[#B65B2B] text-xl font-medium mb-3 ">Memories & Tribute Notes</label>
              <textarea
                placeholder="Share Your Memories, Stories, Or A Tribute Message"
                value={formData.memories}
                onChange={(e) => handleInputChange("memories", e.target.value)}
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D7F2F5] focus:border-transparent placeholder-gray-500 text-gray-700 resize-none bg-white"
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-4">
              <button
                onClick={onBack}
                disabled
                className="px-8 py-2 border text-[#B65B2B]  border-[#B65B2B] cursor-not-allowed  hover:bg-gray-50 bg-white rounded-md transition-colors duration-200"
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
      </div>
    </div>
  )
}
