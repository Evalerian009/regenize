import React from 'react'

const Services = () => {
  return (
    <div className='px-0'>
      <h1 className='text-center text-[1.8rem] lg:text-[2.65rem] text-emerald-500 uppercase'>What do we do?</h1>
      <div className='w-[50px] h-[2.5px] mx-auto bg-emerald-500 mt-3' />

      <div className='bg-emerald-500 mt-10 md:hidden'>
        <div className='flex flex-col justify-between py-9 px-7 text-center gap-3.5'>
          <h3 className='text-[2rem] font-medium leading-tight'>Residential <br />Recycling<br /> Collections</h3>
          <p className=''>We provide a residential recycling collection service and reward residents with Remali when they recycle.</p>
          <button className='bg-black hover:bg-transparent duration-300 text-white py-1.5 px-5 text-lg w-fit mx-auto'>Get started</button>
        </div>
        <img src="collect-waste-l.webp" alt="" className='w-full' />
        <div className='flex flex-col justify-between py-9 px-7 text-center gap-3.5'>
          <h3 className='text-[2rem] font-medium leading-tight'>Waste <br />Picker<br /> Scaffolding</h3>
          <p className=''>We partner with Waste Pickers and provide them uniforms, recycling tricycles and smartphones which connects them to residents that separates their recyclables.</p>
          <button className='bg-black hover:bg-transparent duration-300 text-white py-1.5 px-5 text-lg w-fit mx-auto'>Get started</button>
        </div>
        <img src="waste-cycle-l.webp" alt="" className='w-full' />
      </div>

      <div className='hidden md:flex mt-12 md:h-[475px]'>
        <img src="collect-waste.webp" alt="" className='w-[20%] h-full object-cover' />
        <div className='flex-1 bg-emerald-500 flex text-center items-center px-4 lg:px-7'>
          <div className='w-1/3 flex flex-col h-[350px] lg:h-[300px] justify-between'>
            <h3 className='text-[1.75rem]'>Residential Recycling Collections</h3>
            <p className='text-[0.9rem]'>We provide a residential recycling collection service and reward residents with Remali when they recycle.</p>
            <button className='bg-black hover:bg-transparent duration-300 text-white py-1 px-4 w-fit mx-auto'>Get started</button>
          </div>
          <div className='w-1/3'>
            <img src="phone-hero.webp" alt="" className='w-full h-full object-cover scale-150 lg:scale-[185%]' />
          </div>
          <div className='w-1/3 flex flex-col h-[350px] lg:h-[300px] justify-between'>
            <h3 className='text-[1.75rem]'>Waste Picker Scaffolding</h3>
            <p className='text-[0.9rem]'>We partner with Waste Pickers and provide them uniforms, recycling tricycles and smartphones which connects them to residents that separates their recyclables.</p>
            <button className='bg-black hover:bg-transparent duration-300 text-white py-1 px-4 w-fit mx-auto'>Learn More</button>
          </div>
        </div>
        <img src="waste-cycle.webp" alt="" className='w-[20%] h-full object-cover' />
      </div>
    </div>
  )
}

export default Services