import FooterComponent from '@/components/FooterComponent'
import Header from '@/components/Header'
import OrderList from '@/components/OrderList'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Header/>
      <div className="md:mx-10 mx-5">
        <OrderList/>
      </div>
      <FooterComponent/>
    </div>
  )
}

export default Page