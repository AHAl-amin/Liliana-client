
import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

// Bird/Dove SVG Component
const BirdIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C12 2 8 6 8 12C8 16 10 18 12 18C14 18 16 16 16 12C16 6 12 2 12 2Z" fill="currentColor" />
        <path d="M12 18C12 18 16 14 20 14C22 14 22 16 20 18C18 20 16 18 12 18Z" fill="currentColor" />
    </svg>
)

function GetInTouch() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        message: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Add your form submission logic here
    }

    return (
        <div className="relative lg:w-[60%] md:w-[80%] mx-auto lora py-10">
            <div className="">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Side - Contact Info */}
                    <div className="space-y-8">
                        {/* Header with Birds */}
                        <div className="relative pb-10 pt-22 ">
                            <div className="absolute left-[-140px] top-0">
                                <img src="/img/Banner/birdOne.png" alt="Decorative bird illustration" />
                            </div>
                            <div className="absolute md:right-30 top-0">
                                <img src="/img/Banner/birdTwo.png" alt="Decorative bird illustration" />
                            </div>
                            <div className="">
                                <h1 className="text-3xl md:font-bold text1  ">Get In touch</h1>

                                <p className="text-lg text max-w-2xl text-sr font-sans">
                                    We're here to answer any questions you may have about our services, pricing, or how to get started with Memora.
                                </p>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#738F9A] cursor-pointer rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg">Email Us</h3>
                                    <p className="text-white/80">memoria@memoria.com</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#738F9A] cursor-pointer rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg">Call Us</h3>
                                    <p className="text-white/80">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-[#738F9A] cursor-pointer rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg">Location Us</h3>
                                    <p className="text-white/80">Memoria, Texas</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Fields */}
                            <div className="flex gap-6 justify-between">
                                <div className="">
                                <label className="block text-[#FEF5DB] font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/90 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-500"
                                        required
                                    />
                                   
                                </div>

                                <div>
                                     <label className="block text-[#FEF5DB] font-medium mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg bg-white/90 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-500"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label className="block text-[#FEF5DB] font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/90 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-500"
                                    required
                                />
                            </div>

                            {/* Phone Number Field */}
                            <div>
                                <label className="block text-[#FEF5DB] font-medium mb-2">Number</label>
                                <input
                                    type="tel"
                                    name="number"
                                    placeholder="+1(555) 123-4567"
                                    value={formData.number}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white/90 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-500"
                                    required
                                />
                            </div>

                            {/* Message Field */}
                            <div>
                                <label className="block text-[#FEF5DB] font-medium mb-2 ">Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Write your message here..."
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg bg-white/90 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 placeholder-gray-500 resize-none"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full button cursor-pointer text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch
