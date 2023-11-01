import React, { useState } from 'react'
import { AiOutlineBorder } from "react-icons/ai"
import { GiCheckMark } from "react-icons/gi"
const Gallery = () => {
    const [images, setImages] = useState([
        { id: 1, src: 'https://i.ibb.co/grjhnK3/image.png', isFeatured: true },
        { id: 2, src: 'https://i.ibb.co/c3BJcnj/image.png', isFeatured: false },
        { id: 3, src: 'https://i.ibb.co/SmQLmX0/image.png', isFeatured: false },
        { id: 4, src: 'https://i.ibb.co/M1hM5XN/image.png', isFeatured: false },
        // Add more images as needed
    ]);

    return (
        <div className="gallary">
            <h1 className='text-4xl font-semibold text-center p-20'>Image Gallery</h1>
            <div className="image-gallery rounded-lg">
                <div className="gallary-nav mx-auto flex justify-between px-16 py-10 border-b-2">
                    <div className="number-selection flex items-center justify-center gap-3">
                        <div className='p-1 bg-blue-600 w-fit'><GiCheckMark className='text-white'></GiCheckMark></div>
                        <p className='font-bold text-xl'>3 File Selected</p>
                    </div>
                    <button className="delete text-red-600 font-semibold">Delete files</button>
                </div>
                <div className="g-container mx-auto max-[1200px] grid grid-flow-col  justify-center p-5">
                    { images.map((item)=>
                        <div className="images rounded-md border-2 p-2">
                            <div className='p-1 bg-blue-600 w-fit'><GiCheckMark className='text-white'></GiCheckMark></div>
                            <img className='w-[450px] h-[400px]  border-slate-300' src={item.src} alt="" />
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery