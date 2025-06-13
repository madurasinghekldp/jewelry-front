import { cartItems } from '@/utils/cart'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PlaceOrder = () => {
  return (
    <div className='mt-15'>
        <div className='flex md:flex-row flex-col w-full'>
            <div className='w-full'>
                <div className='bg-gray-200 m-2 p-3 rounded flex flex-row'>
                    <div>
                        <p className=' text-xl font-bold'>Shipping Address</p>
                        <p>Dulan madurasinghe</p>
                        <p>7B/55/5</p>
                        <p>Housing Scheme</p>
                        <p>mattegoda</p>
                        <p>0771231234</p>
                    </div>
                    <div className='mt-auto ml-auto'>
                        <p className=' text-blue-600'>change</p>
                    </div>
                </div>
                <div className='bg-gray-200 m-2 p-3 rounded'>
                    <div className='flex flex-col w-full px-3'>
                        {
                            cartItems.map((item)=>
                                <div className='p-2 flex flex-row border-t-1 border-t-gray-300' key={item.id}>
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
                </div>
            </div>
            <div className='w-full'>
                <div className='min-h-[300px] bg-gray-200 m-2 p-3  rounded'>
                    <div className='flex flex-col h-full p-5'>
                        <div className='flex flex-row justify-between my-2 text-gray-500'>
                            <p className='text-lg font-semibold'>Item Amount</p>
                            <p className='text-2xl font-bold'>Rs.{cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0.00)}</p>
                        </div>
                        <div className='flex flex-row justify-between my-2 text-gray-500'>
                            <p className='text-lg font-semibold'>Shipping Amount</p>
                            <p className='text-2xl font-bold'>Rs.500.00</p>
                        </div>
                        <div className='flex flex-row justify-between my-2 text-gray-500'>
                            <p className='text-lg font-semibold'>Total Amount</p>
                            <p className='text-2xl font-bold'>Rs.{cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 500.00)}</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Link className='bg-black hover:bg-gray-800 text-white px-4 py-2 rounded mt-3 max-w-[300px]' href={'/place-order'}>Confirm Order</Link>
                        </div>
                        <div className='border border-t-1 border-gray-300 mt-3'></div>
                        <div className='flex flex-row m-2'>
                            <Image src={'/images/visacard.png'} alt={''} width={100} height={100} className='w-[50px] h-[20px] mx-2'/>   
                            <Image src={'/images/mastercard.png'} alt={''} width={100} height={100} className='w-[30px] h-[20px] mx-2'/>           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlaceOrder