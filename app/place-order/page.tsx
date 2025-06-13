import FooterComponent from '@/components/FooterComponent'
import Header from '@/components/Header'
import PlaceOrder from '@/components/PlaceOrder'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Header/>
      <div className="md:mx-10 mx-5">
        <PlaceOrder/>
      </div>
      <FooterComponent/>
    </div>
  )
}

export default Page