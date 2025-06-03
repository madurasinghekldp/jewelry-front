import React from 'react'

const ImageSlider = () => {
  return (
    <div
      className="relative md:h-[300px] h-[200px] bg-cover bg-center bg-no-repeat mt-15 rounded"
      style={{ backgroundImage: "url('/images/Golden_Gemstone_Facets_in_Detail.png')" }}
    >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 rounded"></div>
        <div className='relative flex justify-center items-center h-full mx-2'>
            <p className='text-3xl md:text-5xl font-mono font-bold text-white text-shadow-lg'>
                Discover Your Ultimate Beauty....
            </p>
        </div>
    </div>
  )
}

export default ImageSlider