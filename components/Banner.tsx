'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Banner = () => {
    const gemImages = [
        "/images/Shimmering_Green_Gemstone_Details.png",
        "/images/Intricate_Blue_Gemstone_Close_Up.png",
        "/images/Golden_Gemstone_Facets_in_Detail.png"
    ]
    const jewelryImages = [
        "/images/necklace1.jpg",
        "/images/necklace2.jpg",
        "/images/necklace3.png"
    ]
    const [currentGemIndex, setCurrentGemIndex] = useState(0);
    const [currentJewIndex, setCurrentJewIndex] = useState(0);

    useEffect(()=>{
        const timer = setInterval(()=>{
            setCurrentGemIndex((prevIndex) => (prevIndex + 1) % gemImages.length);
            setCurrentJewIndex((prevIndex) => (prevIndex + 1) % jewelryImages.length);
        },4000);
        return () => clearInterval(timer);
    },[]);
  return (
    <div className='relative flex flex-row justify-center h-[400px] md:h-[730px] mt-15 md:-mx-10 -mx-5'>
        <div className='z-20 flex justify-center items-center h-full mx-2'>
            <p className='text-4xl md:text-6xl text-center font-mono font-bold text-white text-shadow-lg'>
                Discover Your Ultimate Beauty....
            </p>
        </div>
        <div className='absolute left-0 h-full w-2/3 clip-1'>
            <div className='z-10 absolute inset-0 top-0 left-0 w-full bg-gradient-to-b from-black via-transparent to-black'></div>
            <div className="relative w-full h-full overflow-hidden bg-black">
                
                {gemImages.map((image, index) => (
                    <Image
                    key={index}
                    src={image}
                    width={1000}
                    height={1000}
                    alt={`Slide ${index}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-transform-opacity duration-4000 ease-in-out ${
                        index === currentGemIndex ? 'opacity-100 scale-110' : 'opacity-0'
                    }`}
                    />
                ))}
            </div>
        </div>
        <div className='absolute right-0 h-full w-2/3 clip-2'>
            <div className='z-10 absolute inset-0 top-0 left-0 w-full bg-gradient-to-b from-black via-transparent to-black'></div>
            <div className="relative w-full h-full overflow-hidden bg-black">
                
                {jewelryImages.map((image, index) => (
                    <Image
                    key={index}
                    src={image}
                    width={800}
                    height={800}
                    alt={`Slide ${index}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-transform-opacity duration-4000 ease-in-out ${
                        index === currentJewIndex ? 'opacity-100 scale-110' : 'opacity-0'
                    }`}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Banner