import React from 'react'

const InfoSec = () => {
  return (
    <div className='px-0 lg:px-32 py-20'>
      <h2 className='md:text-2xl lg:text-4xl text-center'>Enter Your Address Below To Start Your Recycling Journey</h2>

      <div className='bg-emerald-500 flex justify-center mt-10 px-4 md:px-0 py-4 md:py-7 items-center gap-10 lg:gap-14 relative'>
        <input type="text" placeholder='Enter your address' className='bg-white focus:bg-slate-100 duration-300 py-2.5 md:py-3.5 border-2 w-full md:w-[550px] border-slate-400 text-center text-sm placeholder:text-black place placeholder:font-light placeholder:italic outline-none focus:border-black focus:duration-300' name="" id="" />
        <button className='absolute left-[50%] translate-x-[-50%] top-24 md:static w-12 h-12 rounded-full text-white bg-black hover:bg-transparent duration-300 grid place-items-center'>Go</button>
      </div>

      <div className='mt-28 md:mt-12'>
        <h1 className='text-center text-[1.8rem] lg:text-[2.65rem] text-emerald-500'>WHY REGENIZE?</h1>
        <div className='w-[50px] h-[2.5px] mx-auto bg-emerald-500 mt-3' />

        <div className='px-5 md:px-0 md:w-[600px] lg:w-[700px] mx-auto text-center flex flex-col gap-6 mt-6'>
          <p>Did you know that only 7.5% of South African residents recycle?</p>
          <p>As a result, over 90% of our waste that could be recycled ends up in landfills. In a country dealing with many issues, recycling is not a priority, and falls on the wayside. At Regenize, we see that there is more to it than just ‘saving the environment’. It’s about making changes to our daily living that can impact our lives and others positively.</p>
          <p>We created regenize to motivate people to recycle. Through recycling, we wanted to provide an avenue for recyclers to contribute toward positive social change. By recycling with Regenize, you are helping to shape a future where your environmental impact can be the catalyst for influencing industry behaviour, creating opportunities for communities to access recycling services and support for waste pickers – who are at the heart of driving recycling up in the country.</p>
          <p>So why don’t you become a change maker, and get rewarded for it. Join us – Regenize!</p>
        </div>
      </div>
    </div>
  )
}

export default InfoSec