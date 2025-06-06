'use client';
import FooterComponent from '@/components/FooterComponent';
import Header from '@/components/Header'
import ImageSelection from '@/components/ImageSelection'
import MediaPreview from '@/components/MediaPreview'
import { productById } from '@/utils/products';
import { averageStars, reviewsByProductId } from '@/utils/reviews';
import { Rating } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react'

const Page = ({params}:{params: Promise<{ id: number }>}) => {

    const { id } = React.use(params);
    const [media, setMedia] = React.useState<string>("");
    const [product, setProduct] = useState<any>(null);
    const [reviews, setReviews] = useState<any[]>([]);
    const mediaList = useMemo(() => [
    "/videos/55744-503980978_small.mp4",
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
        const fetchProduct = async () => {
            const productData = productById(id);
            if (productData) {
                setProduct(productData);
            } else {
                console.log("Product not found");
            }
        };
        const fetchReviews = async () => {
            const reviewData = reviewsByProductId(id);
            if (reviewData) {
                console.log("Reviews fetched:", reviewData);
                setReviews(reviewData);
            } else {
                console.log("No reviews found for this product");
            }
        }
        fetchProduct();
        fetchReviews();
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
                <div className='flex flex-col md:h-[560px] h-full md:ml-5 md:mt-0 mt-10 justify-evenly gap-y-5 md:gap-y-0'>
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
                    <div className='relative max-h-[300px] md:max-h-[150px]'>
                        <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent'></div>
                        <div className="overflow-y-auto scrollbar-hide h-full">
                            <p className="text-justify">{product?.description}</p>
                        </div>
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
                    <div className='flex flex-row justify-center items-center gap-10'>
                        <button className='bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300 w-full'>
                            Add to Cart
                        </button>
                        <button className='bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300 w-full'>
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <div className='text-2xl'>Reviews</div>
                <div className='bg-gray-300 rounded mt-2'>
                    {reviews.map((review,index)=>
                        <div className='p-3 flex flex-col' key={index}>
                            <div className='flex flex-row gap-x-5'><p>User Name</p><p>{review?.date}</p></div>
                            <div className='mt-2'>
                                <Rating 
                                sx={{'.MuiRating-icon':{color:'black'}}}
                                name="average-rating" 
                                value={review?.stars} 
                                precision={0.1} 
                                size='small'
                                readOnly />
                            </div>
                            <div>
                                {review?.comment}
                            </div>
                            <div className='border-b-1 border-gray-400 mt-2'></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <FooterComponent/>
    </div>
  )
}

export default Page