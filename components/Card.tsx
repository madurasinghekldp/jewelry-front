import { Rating } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { FaEye } from 'react-icons/fa'

const CardItem = ({name,url,price,stars}:{name:string,url:string,price:number,stars:number}) => {
  return (
    <div
    className="relative w-full sm:max-w-[250px] max-w-[150px] bg-white shadow-md rounded-xl flex-shrink-0 group"
    >
        <div className='absolute inset-0 bg-gray-700/80 rounded-xl opacity-0 group-hover:opacity-100
         flex justify-center items-center transition-opacity duration-300 cursor-pointer'>
            <FaEye className='text-white text-3xl'/>
        </div>
        <Image src={url} alt={''} width={250} height={250} className='rounded-t-xl sm:h-[250px] h-[150px]'/>
        <p className="text-gray-600 p-2 truncate text-ellipsis">
            {name}<br/>
            Rs.{price}<br/>
            <Rating 
            sx={{'.MuiRating-icon':{color:'black'}}}
            name="average-rating" 
            value={stars} 
            precision={0.1} 
            size='small'
            readOnly />
        </p>
    </div>
  )
}

export default CardItem