

import { useState } from "react"
import { IoLocationOutline } from "react-icons/io5"

function Assets({ onNext, onBack }) {
  const [assets, setAssets] = useState([])
  const [currentAsset, setCurrentAsset] = useState({
    assetName: "",
    assetType: "",
    estimatedValue: "",
    location: "",
    description: "",
  })

  const assetTypeOptions = [
    "Select asset type",
    "Real Estate",
    "Bank Account",
    "Investment Account",
    "Vehicle",
    "Jewelry",
    "Art & Collectibles",
    "Business Interest",
    "Life Insurance",
    "Retirement Account",
    "Personal Property",
    "Other",
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCurrentAsset((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAddAsset = () => {
    if (currentAsset.assetName && currentAsset.assetType !== "Select asset type") {
      setAssets((prev) => [...prev, { ...currentAsset, id: Date.now() }])
      setCurrentAsset({
        assetName: "",
        assetType: "",
        estimatedValue: "",
        location: "",
        description: "",
      })
    }
  }

  const handleRemoveAsset = (id) => {
    setAssets((prev) => prev.filter((asset) => asset.id !== id))
  }


  // Format currency value
  const formatCurrency = (value) => {
    if (!value) return ""
    const numericValue = value.replace(/[^0-9]/g, "")
    if (numericValue) {
      return `$${Number(numericValue).toLocaleString()}`
    }
    return value
  }

  const handleValueChange = (e) => {
    const { value } = e.target
    const formattedValue = formatCurrency(value)
    setCurrentAsset((prev) => ({
      ...prev,
      estimatedValue: formattedValue,
    }))
  }

  return (
    <div className=" p-6 ">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-[#BA927D] mb-2">Declare Your Assets</h1>
        <p className="text-gray-500 text-xl">
          Add all assets that you want to include in your will. Be as specific as possible to avoid confusion.
        </p>
      </div>

      {/* Current Assets */}
      {assets.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Current Assets</h3>
          <div className="space-y-4">
            {assets.map((asset) => (
              <div key={asset.id} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 text-lg">{asset.assetName}</h4>
                      {asset.estimatedValue && (
                        <span className="text-lg font-semibold text-[#BA927D]">{asset.estimatedValue}</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-xl text-gray-600 mb-2">
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                        {asset.assetType}
                      </span>
                      {asset.location && <span className="flex items-center gap-2"><IoLocationOutline /> {asset.location}</span>}
                    </div>
                    {asset.description && <p className="text-xl text-gray-700 mt-2">{asset.description}</p>}
                  </div>
                  <button
                    onClick={() => handleRemoveAsset(asset.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors ml-4"
                    title="Remove asset"
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
        </div>
      )}

      {/* Form */}
      <div className="space-y-6 mb-8">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="assetName" className="block text-xl font-medium text-[#BA927D] mb-2">
              Asset Name
            </label>
            <input
              type="text"
              id="assetName"
              name="assetName"
              value={currentAsset.assetName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CB7548] text-gray-700 focus:border-[#CB7548] outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="assetType" className="block text-xl font-medium text-[#BA927D] mb-2">
              Asset Type
            </label>
            <select
              id="assetType"
              name="assetType"
              value={currentAsset.assetType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border appearance-none border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CB7548] text-gray-700 focus:border-[#CB7548]  outline-none transition-colors bg-white"
            >
              {assetTypeOptions.map((option) => (
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
            <label htmlFor="estimatedValue" className="block text-xl font-medium text-[#BA927D] mb-2">
              Estimated Value
            </label>
            <input
              type="text"
              id="estimatedValue"
              name="estimatedValue"
              value={currentAsset.estimatedValue}
              onChange={handleValueChange}
              placeholder="Eg $500,000"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CB7548] text-gray-700 focus:border-[#CB7548] outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-xl font-medium text-[#BA927D] mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={currentAsset.location}
              onChange={handleInputChange}
              placeholder="Enter your location"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CB7548] text-gray-700 focus:border-[#CB7548] outline-none transition-colors"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-xl font-medium text-[#BA927D] mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={currentAsset.description}
            onChange={handleInputChange}
            placeholder="Add details about the asset, including identifying information"
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#CB7548] text-gray-700 focus:border-[#CB7548] outline-none transition-colors resize-vertical"
          />
        </div>

        {/* Add Asset Button */}
        <div>
          <button
            onClick={handleAddAsset}
            className="flex items-center space-x-2 px-6 py-3 button text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Add Assets</span>
          </button>
        </div>
      </div>

      {/* Asset Summary */}
      {assets.length > 0 && (
        <div className="mb-8 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-xl font-medium text-orange-800">Total Assets Declared:</span>
            <span className="text-lg font-semibold text-orange-900">{assets.length}</span>
          </div>
          {assets.some((asset) => asset.estimatedValue) && (
            <div className="flex justify-between items-center mt-2">
              <span className="text-xl font-medium text-orange-800">Total Estimated Value:</span>
              <span className="text-lg font-semibold text-green-600">
                $
                {assets
                  .reduce((sum, asset) => {
                    const value = asset.estimatedValue.replace(/[^0-9]/g, "")
                    return sum + (Number(value) || 0)
                  }, 0)
                  .toLocaleString()}
              </span>
            </div>
          )}
        </div>
      )}

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

export default Assets
