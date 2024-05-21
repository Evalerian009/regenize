import React from 'react'
import { VscQuote } from "react-icons/vsc";
import { testimonials } from './constants';

const Testimonials = () => {
  return (
    <div className='bg-emerald-500 py-12 px-7'>
      <h1 className='text-center text-[1.8rem] lg:text-[2.65rem] text-white uppercase'>Testimonials</h1>
      <div className='w-[50px] h-[2.5px] mx-auto bg-white mt-3' />

      <div className='grid grid-cols-1 gap-14 md:grid-cols-3 mt-14'>
        {testimonials.map(item => ((
          <div key={item.id} className='text-center lg:px-5'>
            <img src={item.image} className='w-[185px] h-[185px] rounded-full mx-auto bg-white object-cover' alt="" />
            <h3 className='text-3xl md:text-[1.25rem] lg:text-[1.5rem] mt-3.5 md:mt-8'>{item.name}</h3>
            <p className='mt-2.5 w-[200px] lg:w-[250px] mx-auto text-[0.9rem] md:h-[120px]'>{item.review}</p>
            <VscQuote className='text-[2.35rem] mx-auto rotate-180 mt-4 md:mt-0'/>
          </div>
        )))}
      </div>
    </div>
  )
}

export default Testimonials