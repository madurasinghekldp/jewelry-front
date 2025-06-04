'use client';
import Header from '@/components/Header'
import ImageSelection from '@/components/ImageSelection'
import MediaPreview from '@/components/MediaPreview'
import { productById } from '@/utils/products';
import { averageStars } from '@/utils/reviews';
import { Rating } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react'

const Page = ({params}:{params: Promise<{ id: number }>}) => {

    const { id } = React.use(params);
    const [media, setMedia] = React.useState<string>("");
    const [product, setProduct] = useState<any>(null);
    const mediaList = useMemo(() => [
    "/videos/5414-183788464_tiny.mp4",
    "/images/ChatGPT_Image Jun 1, 2025, 08_29_04 PM.png",
    "/images/Sapphire_Elegance_with_Diamond_Sparkle.png",
    "/images/ChatGPT_Image Jun 1, 2025, 08_29_04 PM.png",
    "/images/Sapphire_Elegance_with_Diamond_Sparkle.png",
    "/images/ChatGPT_Image Jun 1, 2025, 08_29_04 PM.png",
    "/images/Sapphire_Elegance_with_Diamond_Sparkle.png",
    "/images/ChatGPT_Image Jun 1, 2025, 08_29_04 PM.png",
    "/images/Sapphire_Elegance_with_Diamond_Sparkle.png"
    ], []);

    useEffect(()=>{
        console.log("Product ID:", id);
        const fetchProduct = async () => {
            const productData = productById(id);
            if (productData) {
                setProduct(productData);
            } else {
                console.log("Product not found");
            }
        };
        fetchProduct();
    },[id]);

    useEffect(() => {
        if (mediaList.length > 0 && media==="") {
            setMedia(mediaList[0]);
        }
    }, [mediaList,media]);

    const handleSelect = (src: string) => {
        setMedia(src);
    }

    const stars = (id:number) => {
        return averageStars(id);
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
                    <div>
                        <p className='text-3xl font-bold'>{product?.name}</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <Rating 
                        sx={{'.MuiRating-icon':{color:'black'}}}
                        name="average-rating" 
                        value={stars(product?.id)} 
                        precision={0.1} 
                        size='small'
                        readOnly />
                        {stars(product?.id).toPrecision(2)}
                    </div>
                    <div>
                        <p className=' text-justify'>{product?.description}</p>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                        <div className=' bg-gray-300 text-gray-500 py-1 px-2 w-fit rounded-full flex justify-center items-center text-xs'>
                            {product?.material}
                        </div>
                        <div className=' bg-gray-300 text-gray-500 py-1 px-2 w-fit rounded-full flex justify-center items-center text-xs'>
                            {product?.gender}
                        </div>
                    </div>
                    <div>
                        <p className=' text-gray-500 text-sm'>{product?.quantity} items available</p>
                    </div>
                    <div>
                        <p className=' text-xl'>Rs.{product?.price}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page