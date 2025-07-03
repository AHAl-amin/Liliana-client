

import { useState, useRef, useEffect } from "react"

function Legal({ onBack, onNext }) {
    const [formData, setFormData] = useState({
        hasAgreed: false,
        signatureDate: "",
    })
    const [isSignaturePadActive, setIsSignaturePadActive] = useState(false)
    const [signatureDataURL, setSignatureDataURL] = useState("")
    const canvasRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)

    const legalDeclaration = `I, The Undersigned, Being Of Sound Mind And Memory, Do Hereby Make, Publish, And Declare This To Be My Last Will And Testament, Hereby Revoking All Wills And Codicils Previously Made By Me.

I Declare That I Am Of Legal Age To Make This Will And Of Sound Mind And That This Last Will And Testament Expresses My True Intent And Desires For The Distribution Of My Property Upon My Death.

I Understand That This Digital Will Must Comply With The Laws Of My Jurisdiction To Be Legally Valid, And I Have Taken The Requisite Steps To Ensure Compliance.`

    useEffect(() => {
        const canvas = canvasRef.current
        if (canvas) {
            const ctx = canvas.getContext("2d")
            ctx.strokeStyle = "#000000"
            ctx.lineWidth = 2
            ctx.lineCap = "round"
            ctx.lineJoin = "round"
        }
    }, [])

    const startDrawing = (e) => {
        setIsDrawing(true)
        setIsSignaturePadActive(true)
        const canvas = canvasRef.current
        const rect = canvas.getBoundingClientRect()
        const ctx = canvas.getContext("2d")
        ctx.beginPath()
        ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top)
    }

    const draw = (e) => {
        if (!isDrawing) return
        const canvas = canvasRef.current
        const rect = canvas.getBoundingClientRect()
        const ctx = canvas.getContext("2d")
        ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top)
        ctx.stroke()
    }

    const stopDrawing = () => {
        if (isDrawing) {
            setIsDrawing(false)
            const canvas = canvasRef.current
            setSignatureDataURL(canvas.toDataURL())
        }
    }

    const clearSignature = () => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        setSignatureDataURL("")
        setIsSignaturePadActive(false)
    }

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }




    return (
        <div className="p-6 ">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-semibold text-[#BA927D]  mb-2">Legal Declaration & Signature</h1>
                <p className="text-gray-500 text-lg">
                    Review the legal declaration and sign your digital will to make it legally binding.
                </p>
            </div>

            {/* Legal Declaration */}
            <div className="mb-8">
                <h3 className="text-lg  text-[#BA927D] font-semibold  mb-4">Legal Declaration:</h3>
                <div className="bg-[#F9F5F2] border border-gray-200 rounded-lg p-6">
                    <div className="text-sm text-[#BA927D] leading-relaxed whitespace-pre-line">{legalDeclaration}</div>
                </div>
            </div>

            {/* Agreement Checkbox */}
            <div className="mb-8">
                <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                        type="checkbox"
                        name="hasAgreed"
                        checked={formData.hasAgreed}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-[#BA927D]  border-gray-300 rounded focus:ring-orange-500 mt-0.5"
                    />
                    <span className="text-lg text-[#BA927D] font-semibold">
                        I Confirm That I Have Read And Agree To The Above Declaration
                    </span>
                </label>
            </div>

            {/* Signature Section */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-[#BA927D] mb-4">Your Signature</h3>
                <div className="border-2 border-gray-300 rounded-lg p-4 bg-white">
                    <canvas
                        ref={canvasRef}
                        width={600}
                        height={200}
                        className="w-full h-48 border border-gray-200 rounded cursor-crosshair bg-white"
                        onMouseDown={startDrawing}
                        onMouseMove={draw}
                        onMouseUp={stopDrawing}
                        onMouseLeave={stopDrawing}
                    />
                    <div className="flex justify-between items-center mt-3">
                        <p className="text-xs text-gray-500">Sign above using your mouse or touch device</p>
                        <button onClick={clearSignature} className="text-sm text-[#BA927D]   font-medium">
                            Clear Signature
                        </button>
                    </div>
                </div>
            </div>

            {/* Date */}
          
            <div>
                <label htmlFor="dateOfDeath" className="block text-xl  font-medium text-[#BA927D] mb-2">
                     Date
                </label>
                <div className="relative">
                    <input
                        type="date"
                        id="dateOfDeath"
                        name="dateOfDeath"
                        value={formData.dateOfDeath}
                        onChange={handleInputChange}
                        placeholder="mm/dd/yy"
                        className=" px-4 py-3  border placeholder:text-gray-300 border-[#BA927D] text-gray-700 rounded-lg focus:ring-2 focus:ring-[#CB7548] focus:border-[#CB7548] outline-none transition-colors"
                    />
                   
                </div>
            </div>



            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-10">
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
                    Create Digital Will
                </button>
            </div>
        </div>
    )
}

export default Legal
