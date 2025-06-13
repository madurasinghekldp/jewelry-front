import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OrderList = () => {
  return (
    <div className='mt-20 flex flex-col'>
        <div className='text-xl text-white bg-black  py-2 px-4 rounded-full mx-auto'>Your Orders</div>
        <div className='bg-gray-200 flex flex-col p-4 rounded mt-10'>
            <p className='font-bold'>Awaiting delivery</p>
            <div className='border border-t-1 border-gray-300 mt-2'></div>
            <div className='flex md:flex-row flex-col mt-2 justify-center items-center'>
                <Image src={'/images/Sapphire_Elegance_with_Diamond_Sparkle.png'} alt={''} 
                width={100} height={100} className='w-[90px] h-[90px]'/>
                <div className='flex md:flex-row flex-col justify-between w-full p-5'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-lg md:text-xl font-bold'>Diamond Stud Earrings</p>
                        <p className='font-semibold'>Rs.98000</p>
                        <p className='text-xs md:text-sm text-gray-600'>Order Date: 2025-06-11</p>
                        <p className='text-xs md:text-sm text-gray-600'>Order ID: 0010023400</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5 mt-2 md:mt-0'>
                        <p className='font-semibold'>Total Rs.98000.00</p>
                        <Link href={'/'} className='bg-black hover:bg-gray-800 text-white py-1 px-3 rounded-full '>Track Order</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-gray-200 flex flex-col p-4 rounded mt-10'>
            <p className='font-bold'>Completed</p>
            <div className='border border-t-1 border-gray-300 mt-2'></div>
            <div className='flex md:flex-row flex-col mt-2 justify-center items-center'>
                <Image src={'/images/Sapphire_Elegance_with_Diamond_Sparkle.png'} alt={''} 
                width={100} height={100} className='w-[90px] h-[90px]'/>
                <div className='flex md:flex-row flex-col justify-between w-full p-5'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-lg md:text-xl font-bold'>Diamond Stud Earrings</p>
                        <p className='font-semibold'>Rs.98000</p>
                        <p className='text-xs md:text-sm text-gray-600'>Order Date: 2025-06-11</p>
                        <p className='text-xs md:text-sm text-gray-600'>Order ID: 0010023400</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5 mt-2 md:mt-0'>
                        <p className='font-semibold'>Total Rs.98000.00</p>
                        <Link href={'/'} className='bg-black hover:bg-gray-800 text-white py-1 px-3 rounded-full '>Track Order</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderList