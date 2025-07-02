
import React from 'react'
const galleryData = {
    gallery: {
        photos: [
            { id: 1, src: "https://i.ibb.co/SXXkvCPM/image-8.png", alt: "Photo 1" },
            { id: 2, src: "https://i.ibb.co/SXXkvCPM/image-8.png", alt: "Photo 2" },
            { id: 3, src: "https://i.ibb.co/SXXkvCPM/image-8.png", alt: "Photo 3" },
            { id: 4, src: "https://i.ibb.co/SXXkvCPM/image-8.png", alt: "Photo 4" },
            { id: 5, src: "https://i.ibb.co/SXXkvCPM/image-8.png", alt: "Photo 5" },
            { id: 6, src: "https://i.ibb.co/SXXkvCPM/image-8.png", alt: "Photo 6" }
        ],
        video: {
            id: 1,
            src: "video1.mp4",
            alt: "Video 1",
            poster: "video-poster.jpg"
        }
    }
};
function Gallery() {
  return (
    <div className='bg-[#F4E2D9]  rounded-xl'>
         <div className="  md:w-[80%] mx-auto py-8 ">
                {/* Photo Section */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl text-[#B65B2B] font-semibold">Photo/21</h2>
                    <a href="#" className="bg-[#B65B2B] text-white  px-3 py-2 rounded-xl ">View all</a>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {galleryData.gallery.photos.map(photo => (
                        <img
                            key={photo.id}
                            src={photo.src}
                            alt={photo.alt}
                            className=" h-[90%] w-full  object-cover   rounded-lg"
                        />
                    ))}
                </div>

                {/* Video Section */}
                <div className="flex justify-between items-center mb-4 mt-6">
                    <h2 className="text-xl text-[#B65B2B] font-semibold">Video/1</h2>
                    <a href="#" className="bg-[#B65B2B] text-white  px-3 py-2 rounded-xl ">View all</a>
                </div>
                <div className="relative">
                    <iframe width="100%" height="450px" className='rounded-2xl' src="https://www.youtube.com/embed/wNFHUvtogOE?si=TzYlVUTzQpkcBlMv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
    </div>
  )
}

export default Gallery