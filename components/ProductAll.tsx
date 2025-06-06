'use client';
import { products } from '@/utils/products'
import React, { useState } from 'react'
import CardItem from './Card'
import { averageStars } from '@/utils/reviews'
import { BsFilterSquare } from 'react-icons/bs';
import { Popover } from '@mui/material';

const ProductAll = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorE1, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const openFilter = Boolean(anchorE1);
  const idFilter = openFilter ? 'simple-popover' : undefined;
  const stars = (id:number) => {
      return averageStars(id);
  }
  const handleClickFilter = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
  };

  const handleCloseFilter = () => {
      setAnchorEl(null);
  };
  return (
    <div className='mt-20'>
      <div className='flex flex-col'>
        <div className='my-3'>
          <button aria-describedby={idFilter} onClick={handleClickFilter} className='flex flex-row border border-gray-400 rounded p-2 justify-center items-center'>
            <BsFilterSquare className='mr-3' /> Filter Items
          </button>
          <Popover 
                id={idFilter}
                open={openFilter}
                anchorEl={anchorE1}
                onClose={handleCloseFilter}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}>
            <div className='flex flex-col'>
              <p className='text-gray-500 text-sm p-2'>Filter by:</p>
              <div className='flex flex-col p-2'>
                <label className='text-gray-500 text-sm mb-1'>Category</label>
                <select className='border border-gray-300 rounded p-1'>
                  <option value="all">All</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>
              <div className='flex flex-col p-2'>
                <label className='text-gray-500 text-sm mb-1'>Price Range</label>
                <input type="range" min="0" max="1000" className='w-full' />
              </div>
            </div>
          </Popover>
        </div>
        <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-x-2 gap-y-4 place-items-center mx-0'>
            {products.map((item) => (
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
    </div>
  )
}

export default ProductAll