import CartItems from '@/components/CartItems'
import FooterComponent from '@/components/FooterComponent'
import Header from '@/components/Header'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Header/>
      <div className="md:mx-10 mx-5">
        <CartItems/>
      </div>
      <FooterComponent/>
    </div>
  )
}

export default Page