import React from 'react'
import Slider from "react-slick";
import  {motion} from 'framer-motion'

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    lazyLoad: true,
  };

  return (
    <div className='w-full h-[700px] md:h-[650px] overflow-hidden'>
      <Slider {...settings} className='h-full'>
        <div className='h-[700px] md:h-[650px]'>
          <div className='w-full h-full bg-cover bg-center pt-7' style={{backgroundImage: 'url(./cycle.webp)'}}>
            <img src="./logo-01.webp" alt="" className='w-[200px] h-[40px] ml-12 lg:ml-32' />
            <h1 className='text-center text-[2rem] w-[300px] lg:w-[850px] md:text-[3rem] lg:text-[4.3rem] leading-tight font-semibold text-white mx-auto mt-24 md:mt-4'>ACCESSIBLE, INCLUSIVE & REWARDING</h1>
            <h2 className='text-center text-lg md:text-2xl font-semibold text-white'>RECYCLING FOR SOUTH AFRICA</h2>
          </div>
        </div>
        <div className='h-[700px] md:h-[650px]'>
          <div className='w-full h-full bg-cover bg-center pt-4 relative' style={{backgroundImage: 'url(./lady.webp)'}}>
            <img src="./logo-01.webp" alt="" className='w-[200px] h-[40px] ml-12 lg:ml-32 relative' />
            <div className='absolute top-0 left-0 w-full h-full bg-[#00000024]' />
            <div className='text-center text-[2rem] md:text-[3rem] lg:text-[4.3rem] leading-tight font-semibold text-white  md:w-[850px] absolute left-[50%] translate-x-[-50%] lg:bottom-32 top-[50%] translate-y-[-50%]  lg:translate-y-0'>
              <h1 className='hidden md:block'>ACCESSIBLE, INCLUSIVE & REWARDING</h1>
              <h1 className='uppercase text-[2rem] md:hidden'>Recycling Colliections that reward you.</h1>
              <p className='hidden md:block text-center text-xl font-[400] text-white w-[500px] mx-auto mt-8'>Recycle with Regenize & earn REMALI. Use the Remali to purchase amazing vouchers.</p>
            </div>
          </div>
        </div>
        <div className='h-[700px] md:h-[650px]'>
          <div className='w-full h-full bg-cover bg-center pt-7 bg-emerald-500 relative'>
            <img src="./logo-01.webp" alt="" className='w-[200px] h-[40px] ml-12 lg:ml-32' />
            <div className='flex flex-col md:flex-row items-center justify-center w-full lg:ml-14 h-full lg:h-auto'>
              <div className='text-center w-[275px] mx-auto md:mx-0 mt-8 md:mt-0'>
                <motion.h1 
                  className='text-[2.75rem] md:text-[4rem] lg:text-[4.7rem] font-[400] uppercase overflow-x-hidden mx-auto leading-none overflow-hidden'
                  initial={{width: 0}}
                  whileInView={{width: 'fit-content'}}
                  transition={{duration: 0.5}}
                >Remali</motion.h1>
                <p className='text-xl md:text-2xl mt-2'>Remali, or “Recycling Imali (i.e. Money in isiXhosa)” is a virtual currency created by Regenize that encourages and rewards environmentally sustainable behaviour.</p>
              </div>
              <img src="phone-hero.webp" alt="" className='md:w-[300px] lg:w-[500px]' />
            </div>
          </div>
        </div>
        <div className='h-[700px] md:h-[650px]'>
          <div className='w-full h-full bg-cover bg-center pt-7 relative' style={{backgroundImage: 'url(./waste.webp)'}}>
            <img src="./logo-01.webp" alt="" className='w-[200px] h-[40px] ml-12 lg:ml-32' />
            <div className='absolute left-[50%] translate-x-[-50%] w-full md:bottom-10 top-[50%] translate-y-[-50%]'>
              <h1 className='text-center text-white text-[2rem] md:text-[3rem] lg:text-[4rem] leading-tight font-semibold px-4 md:px-0'>
                <span className='bg-emerald-500 px-3'>START RECYCLING YOUR</span>
                <br className='hidden md:block'/>
                <span className='bg-emerald-500 px-5'>ORGANIC WASTE TODAY</span>
              </h1>
              <button className='text-white underline block w-fit mx-auto mt-14 text-xl uppercase'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Hero