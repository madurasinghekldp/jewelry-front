'use client';
import { cartItems } from '@/utils/cart';
import { Checkbox } from '@mui/material';
import Image from 'next/image';
import React from 'react'

const CartItems = () => {
  return (
    <div className='mt-20 flex flex-col'>
        <div className='text-xl text-white bg-black  py-2 px-4 rounded-full mx-auto'>Your Cart Items</div>
        <div className='flex md:flex-row flex-col justify-center items-center mt-3'>
            <div className='flex flex-col w-full px-3'>
                {
                    cartItems.map((item)=>
                        <div className='p-2 flex flex-row border-t-1 border-t-gray-300' key={item.id}>
                            <Checkbox  defaultChecked sx={{color:'black','&.Mui-checked':{color:'black'}}}/>
                            <Image src={item.image} alt={''} width={100} height={100} className='ml-2 w-[80px] h-[80px] shrink-0'/>
                            <div className='flex flex-col w-full ml-2'>
                                <p className='text-lg font-semibold'>{item.name}</p>
                                <div className='flex flex-col justify-end items-end'>
                                    <p className='text-gray-500'>Rs.{item.price}</p>
                                    <p className='text-gray-500'>Quantity: {item.quantity}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='w-full min-h-[300px] bg-gray-300 px-3 mt-3 md:mt-0'>shipping</div>
        </div>
    </div>
  )
}

export default CartItems