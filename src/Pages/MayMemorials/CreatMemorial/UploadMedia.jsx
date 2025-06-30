"use client";

import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { IoImagesOutline } from "react-icons/io5";
import { LuScanLine } from "react-icons/lu";

export default function UploadMedia({ onNext, onBack }) {
    const [uploadedFiles, setUploadedFiles] = useState({
        profilePhoto: null,
        coverPhoto: null,
        galleryPhoto: [],
        video: null,
    });

    // Handle file input change for single files
    const handleFileChange = (event, type) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFiles((prev) => ({
                ...prev,
                [type]: file,
            }));
        }
    };

    // Handle multiple file uploads for arrays
    const handleMultipleFileChange = (event, type) => {
        const files = Array.from(event.target.files);
        setUploadedFiles((prev) => ({
            ...prev,
            [type]: [...prev[type], ...files],
        }));
    };



    return (
        <div className="md:w-[60%] mx-auto p-4">
            {/* Profile Photo */}
            <p className="text-[#B65B2B] text-xl font-medium border-none text-center mb-2">
                Profile Photo
            </p>
            <div className="flex flex-col items-center justify-center gap-4 p-6 mb-4">
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "profilePhoto")}
                    className="hidden"
                    id="profile-photo-upload"
                />
                {uploadedFiles.profilePhoto && (
                    <div className="mb-4 w-1/3">
                        <img
                            src={URL.createObjectURL(uploadedFiles.profilePhoto)}
                            alt="Profile Photo Preview"
                            className="w-full h-48 object-cover rounded-lg"
                        />
                    </div>
                )}
                <CiUser className="size-16 bg-gray-200 rounded-full p-3 text-[#BA927D]" />
                <button
                    onClick={() => document.getElementById("profile-photo-upload").click()}
                    className="bg-[#BA927D] px-3 py-2 rounded-xl cursor-pointer text-white"
                >
                    Upload Profile Photo
                </button>
            </div>

            {/* Cover Photo */}
            <p className="text-[#B65B2B] text-xl font-medium mb-2">Cover Photo</p>
            <div className="flex flex-col items-center justify-center py-8 border-2 border-dashed border-gray-300 rounded-lg mb-4">
                {uploadedFiles.coverPhoto && (
                    <div className="mb-4 px-4">
                        <img
                            src={URL.createObjectURL(uploadedFiles.coverPhoto)}
                            alt="Cover Photo Preview"
                            className="w-full h-48 object-cover rounded-lg"
                        />
                    </div>
                )}
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <IoImagesOutline className="text-[#B65B2B] text-xl" />
                </div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "coverPhoto")}
                    className="hidden"
                    id="cover-photo-upload"
                />
                <label
                    htmlFor="cover-photo-upload"
                    className="text-[#B65B2B] text-xl font-medium cursor-pointer"
                >
                    Upload Photo
                </label>
                <button
                    onClick={() => document.getElementById("cover-photo-upload").click()}
                    className="mt-2 px-4 py-1 bg-[#BA927D] text-white rounded-md"
                >
                    Choose File
                </button>
            </div>

            {/* Gallery Photo */}
            <div className="flex justify-between ">
                <p className="text-[#B65B2B] text-xl font-medium mb-2">Gallery Photo</p>

                <p className="text-gray-300 text-xl">{uploadedFiles.galleryPhoto.length} {uploadedFiles.galleryPhoto.length === 1 ? "photo" : "photos"} uploaded</p>  
            </div>
            <div className="flex flex-col items-center justify-center py-8 border-2 border-dashed border-gray-300 rounded-lg mb-4">
                {uploadedFiles.galleryPhoto.length > 0 && (
                    <div className="mb-4 grid grid-cols-3 gap-2 w-full">
                        {uploadedFiles.galleryPhoto.map((file, index) => (
                            <img
                                key={index}
                                src={URL.createObjectURL(file)}
                                alt={`Gallery Photo Preview ${index + 1}`}
                                className="w-full mx-2 h-24 object-cover rounded-lg overflow-hidden"
                            />
                        ))}
                    </div>
                )}
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <IoImagesOutline className="text-[#B65B2B] text-xl" />
                </div>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => handleMultipleFileChange(e, "galleryPhoto")}
                    className="hidden"
                    id="gallery-photo-upload"
                />
                <label
                    htmlFor="gallery-photo-upload"
                    className="text-[#B65B2B] text-xl font-medium cursor-pointer"
                >
                    Upload Photo
                </label>
                <button
                    onClick={() => document.getElementById("gallery-photo-upload").click()}
                    className="mt-2 px-4 py-1 bg-[#BA927D] text-white rounded-md"
                >
                    Choose File
                </button>
            </div>

            {/* Video (Optional) */}
            <div className="flex justify-between ">
                <p className="text-[#B65B2B] text-xl font-medium mb-2">Video (Optional)</p>
               <p className="text-gray-300 text-xl">{uploadedFiles.video ? "1 video uploaded" : "0 video uploaded"}</p>
            </div>
            <div className="flex flex-col items-center justify-center py-8 border-2 border-dashed border-gray-300 rounded-lg mb-4">
                {uploadedFiles.video && (
                    <div className="mb-4 w-full mx-2">
                        <video
                            src={URL.createObjectURL(uploadedFiles.video)}
                            controls
                            className="w-full h-48 object-cover rounded-lg"
                        />
                    </div>
                )}
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <IoImagesOutline  className="text-[#B65B2B] text-xl" />
                </div>
                <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => handleFileChange(e, "video")}
                    className="hidden"
                    id="video-upload"
                />
                <label
                    htmlFor="video-upload"
                    className="text-[#B65B2B] text-xl font-medium cursor-pointer"
                >
                    Upload Video
                </label>
                <button
                    onClick={() => document.getElementById("video-upload").click()}
                    className="mt-2 px-4 py-1 bg-[#BA927D] text-white rounded-md"
                >
                    Choose File
                </button>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-4">
                <button
                    onClick={onBack}
                    className="px-8 py-2 border text-[#B65B2B]  border-[#B65B2B] cursor-pointer  hover:bg-gray-50 bg-white rounded-md transition-colors duration-200"
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
    );
}