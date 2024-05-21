import React from 'react'
import { procedure } from './constants'

const Procedure = () => {
  return (
    <div className='py-12 px-4'>
      <h1 className='text-center text-[1.8rem] lg:text-[2.65rem] text-emerald-500 uppercase'>How does it work?</h1>
      <div className='w-[50px] h-[2.5px] mx-auto bg-emerald-500 mt-3' />
      <div className='grid grid-cols-1 md:grid-cols-4 mt-7 gap-16 md:gap-3'>
        {procedure.map((item, index) => ((
          <div key={item.id} className='text-center lg:px-6'>
            <div className='text-3xl md:text-2xl lg:text-3xl leading-none'>
              <span className=''>{index + 1}</span>
              {index === 0 ? <a href="" className='block uppercase w-fit mx-auto border-b-2 border-black'>{item.title}</a> : <h3 className='uppercase border-b-2 border-transparent'>{item.title}</h3>}
            </div>
            <p className='md:h-[100px] text-lg md:text-base'>{item.text}.</p>
            
            <img src={item.image} alt="" className={`${item.style} mx-auto mt-5 md:mt-14 ${item.imgWidth}`} style={{width: item.imgWidth}} />
          </div>
        )))}
      </div>
    </div>
  )
}

export default Procedure