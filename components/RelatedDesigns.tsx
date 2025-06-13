import { relatedItems } from '@/utils/products';
import { averageStars } from '@/utils/reviews';
import Link from 'next/link';
import React, { useRef } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import CardItem from './Card';

const RelatedDesigns = () => {

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

    const stars = (id:number) => {
        return averageStars(id);
    }

  return (
    <>
      <div className='mt-12 flex flex-row'>
        <div className='grid-cols-11 w-11/12 flex justify-center items-center'>
          <p className='font-bold sm:text-3xl text-xl'>Related Designs</p>
        </div>
        <div className='grid-cols-1 w-1/12 flex justify-end items-center'>
          
          <Link className='flex flex-row justify-center items-center' href="/all">more <FaCaretRight /></Link>
        </div>
      </div>

      <div className='bg-gray-200 rounded p-3 flex flex-row items-center gap-2 mt-5'>
        {/* Left Arrow */}
        <button onClick={() => scroll('left')} className="p-2 hover:cursor-pointer">
          <FaCaretLeft />
        </button>

        {/* Scrollable Card Container */}
        <div className='overflow-hidden w-full'>
          <div
            ref={scrollRef}
            className="flex space-x-6 px-2 py-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {relatedItems.map((item) => (
              <CardItem 
              key={item.id} 
              id={item.id}
              url={item.image} 
              name={item.name} 
              price={item.price} 
              stars={stars(item.id)}
              />
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button onClick={() => scroll('right')} className="p-2 hover:cursor-pointer">
          <FaCaretRight />
        </button>
      </div>
    </>
  )
}

export default RelatedDesigns