import Header from '@/components/Header'
import ProductAll from '@/components/ProductAll'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <div className="md:mx-10 mx-5">
        <ProductAll/>
      </div>
    </div>
  )
}

export default page