'use client';
import Header from '@/components/Header'
import ImageSelection from '@/components/ImageSelection'
import MediaPreview from '@/components/MediaPreview'
import React, { useEffect } from 'react'

const Page = () => {

    const [media, setMedia] = React.useState<string>("");
    const mediaList = [
        "/videos/5414-183788464_tiny.mp4",
        "/images/ChatGPT_Image Jun 1, 2025, 08_29_04 PM.png",
        "/images/Sapphire_Elegance_with_Diamond_Sparkle.png",
        "/images/ChatGPT_Image Jun 1, 2025, 08_29_04 PM.png",
        "/images/Sapphire_Elegance_with_Diamond_Sparkle.png",
        "/images/ChatGPT_Image Jun 1, 2025, 08_29_04 PM.png",
        "/images/Sapphire_Elegance_with_Diamond_Sparkle.png",
        "/images/ChatGPT_Image Jun 1, 2025, 08_29_04 PM.png",
        "/images/Sapphire_Elegance_with_Diamond_Sparkle.png"
    ]

    useEffect(() => {
        if (mediaList.length > 0 && media==="") {
            setMedia(mediaList[0]);
        }
    }, [mediaList,media]);

    const handleSelect = (src: string) => {
        setMedia(src);
    }

  return (
    <div>
        <Header/>
        <div className="md:mx-10 mx-5">
            <div className='grid grid-cols-1 md:grid-cols-2 place-items-center mt-20'>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        {media&&<MediaPreview src={media}/>}
                    </div>
                    <div className=''>
                        <ImageSelection list={mediaList} selectImage={handleSelect}/>
                    </div>
                </div>
                <div className='flex flex-col'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Page