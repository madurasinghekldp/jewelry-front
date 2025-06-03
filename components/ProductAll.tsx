import { products } from '@/utils/products'
import React from 'react'
import CardItem from './Card'
import { averageStars } from '@/utils/reviews'

const ProductAll = () => {
    const stars = (id:number) => {
        return averageStars(id);
    }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
     gap-x-2 gap-y-4 place-items-center mx-0 mt-20'>
        {products.map((item) => (
            <CardItem 
            key={item.id} 
            url={item.image} 
            name={item.name} 
            price={item.price}
            stars={stars(item.id)}
            />
        ))}
    </div>
  )
}

export default ProductAll