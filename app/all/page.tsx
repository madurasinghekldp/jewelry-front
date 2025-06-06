import FooterComponent from '@/components/FooterComponent'
import Header from '@/components/Header'
import ProductAll from '@/components/ProductAll'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Header/>
      <div className="md:mx-10 mx-5">
        <ProductAll/>
      </div>
      <FooterComponent/>
    </div>
  )
}

export default Page