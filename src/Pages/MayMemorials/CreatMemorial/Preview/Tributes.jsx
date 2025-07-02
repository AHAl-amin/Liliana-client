

"use client"

import { useState } from "react"
import { BsThreeDots } from "react-icons/bs"

const initialTributesData = [
    {
        id: 1,
        name: "Mary Johnson",
        date: "November 15, 2023",
        message:
            "John Was My Teacher In High School, And He Changed My Life. His Passion For History Inspired Me To Become A Teacher Myself. I Will Always Remember His Kindness And The Way He Made Every Student Feel Valued",
        avatar: "../../../../public/img/maymemorials/previewTributes1.png",
    },
    {
        id: 2,
        name: "David Brown",
        date: "November 16, 2023",
        message:
            "John Was My Teacher In High School, And He Changed My Life. His Passion For History Inspired Me To Become A Teacher Myself. I Will Always Remember His Kindness And The Way He Made Every Student Feel Valued",
        avatar: "../../../../public/img/maymemorials/previewTributes2.png",
    },
    {
        id: 3,
        name: "Sophia Lee",
        date: "November 17, 2023",
        message:
            "John Was My Teacher In High School, And He Changed My Life. His Passion For History Inspired Me To Become A Teacher Myself. I Will Always Remember His Kindness And The Way He Made Every Student Feel Valued",
        avatar: "../../../../public/img/maymemorials/previewTributes1.png",
    },
]

function Tributes() {
    const [tributesData, setTributesData] = useState(initialTributesData)
    const [newTribute, setNewTribute] = useState({
        message: "",
    })

    const defaultName = "Anonymous User"

    const handleInputChange = (e) => {
        const { value } = e.target
        setNewTribute({
            message: value,
        })
    }

    const handleSendTribute = () => {
        if (newTribute.message.trim()) {
            const currentDate = new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            })

            const avatarOptions = [
                "../../../../public/img/maymemorials/previewTributes1.png",
                "../../../../public/img/maymemorials/previewTributes2.png",
            ]
            const selectedAvatar = avatarOptions[tributesData.length % 2]

            const newTributeData = {
                id: tributesData.length + 1,
                name: defaultName,
                date: currentDate,
                message: newTribute.message,
                avatar: selectedAvatar,
            }

            setTributesData((prev) => [...prev, newTributeData])

            setNewTribute({
                message: "",
            })
        }
    }

    const handleCancel = () => {
        setNewTribute({
            message: "",
        })
    }

    return (
        <div className="bg-[#F4E2D9] rounded-xl p-10">
            <h1 className="text-[#B65B2B] text-2xl font-semibold mb-5">All tributes</h1>

            <div className="space-y-4 mb-8">
                {tributesData.map((tribute) => (
                    <div key={tribute.id} className="bg-white rounded-lg shadow-sm border border-orange-100 p-6 relative">
                        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <BsThreeDots className="text-[#B65B2B] size-6" />
                        </button>

                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <img
                                    src="https://i.ibb.co/9mDTXgMp/image-9.png"
                                    alt={tribute.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-orange-200"
                                />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-6">
                                        <div>
                                            <h3 className="text-lg font-medium text-[#B65B2B]">{tribute.name}</h3>
                                            <p className="text-sm text-gray-500">{tribute.date}</p>
                                        </div>
                                        <img src={tribute.avatar || "/placeholder.svg"} alt="" className="w-8 h-8" />
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">{tribute.message}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Send Leave Section */ }
            <div className="mb-6">
        <h2 className="text-[#B65B2B] text-xl font-semibold mb-4">Send Leave</h2>
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12  rounded-full flex items-center justify-center">
            <img src="../../../../public/img/maymemorials/previewTributes1.png" alt="" />
          </div>
          <div className="w-12 h-12  rounded-full flex items-center justify-center">
           <img src="../../../../public/img/maymemorials/previewTributes2.png" alt="" />
          </div>
        </div>
      </div>




            {/* Write Your Tribute Form */}
            <div className="bg-white rounded-lg p-6 border border-orange-100">
                <h3 className="text-[#B65B2B] text-lg font-semibold mb-4">Write Your Tribute</h3>

                <div className="mb-6">
                    <textarea
                        name="message"
                        value={newTribute.message}
                        onChange={handleInputChange}
                        placeholder="Share your memories or thoughts..."
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-gray-700 focus:ring-[#A0512A] focus:border-[#A0512A] outline-none transition-colors resize-vertical"
                    />
                </div>

                <div className="flex justify-end space-x-3">
                    <button
                        onClick={handleCancel}
                        className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg cursor-pointer  hover:bg-gray-50 transition-colors font-medium"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSendTribute}
                        disabled={!newTribute.message.trim()}
                        className="px-6 py-2 bg-[#B65B2B] text-white rounded-lg hover:bg-[#A0512A]  cursor-pointer transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Tributes
