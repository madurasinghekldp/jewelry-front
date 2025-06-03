'use client';
import Image from 'next/image';
import React, { useRef } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

const ImageSelection = ({list,selectImage}:{list:string[],selectImage:(src:string)=>void}) => {

    const isVideo = (src:string) => {
        return src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg');
    }

    const scrollRef = useRef<HTMLDivElement>(null);
    
    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const amount = 300; // scroll amount per click
            scrollRef.current.scrollBy({
            left: direction === 'left' ? -amount : amount,
            behavior: 'smooth',
            });
        }
    };

  return (
    <div className='flex flex-row w-full justify-center items-center'>
        <button onClick={() => scroll('left')} className="p-2 hover:cursor-pointer">
            <FaCaretLeft />
        </button>
        <div className='flex flex-row overflow-x-auto scrollbar-hide scroll-smooth' ref={scrollRef}>
            {
                list.map((src,index)=>
                    <div className="m-2 flex-shrink-0 hover:opacity-50" 
                    key={index} 
                    onClick={() => selectImage(src)}>
                        {isVideo(src) ? (
                            <video src={src} className=" w-[100px] h-[100px] object-cover" />
                        ) : (
                            <Image src={src} alt="Preview" width={100} height={100} className="w-[100px] h-[100px] object-cover" />
                        )}
                    </div>
                )
            }
        </div>
        <button onClick={() => scroll('right')} className="p-2 hover:cursor-pointer">
            <FaCaretRight />
        </button>
    </div>
  )
}

export default ImageSelection