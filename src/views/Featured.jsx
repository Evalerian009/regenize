import React from 'react'
import Slider from 'react-slick';
import { featuredLogos } from './constants';
import { PiCaretRightThin, PiCaretLeftThin } from "react-icons/pi";

const PrevArrow = ({onClick}) => ((
  <button onClick={onClick} className='text-[3.75rem] absolute top-[50%] translate-y-[-50%] -left-12 hover:text-slate-500 duration-200'>
    <PiCaretLeftThin />
  </button>
))

const NextArrow = ({onClick}) => ((
  <button onClick={onClick} className='text-[3.75rem] absolute top-[50%] translate-y-[-50%] -right-12 hover:text-slate-500 duration-200'>
    <PiCaretRightThin />
  </button>
))

const Featured = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='py-12 lg:w-[850px] mx-auto '>
      <h1 className='text-center text-[1.8rem] lg:text-[2.65rem] text-emerald-500 uppercase'>Featured In</h1>
      <div className='w-[50px] h-[2.5px] mx-auto bg-emerald-500 mt-3' />

      <Slider {...settings} className='mt-10 relative'>
        {featuredLogos.map(item => ((
          <div className='h-[125px] grid place-content-center' key={item.logo}>
            <img src={item.logo} alt="" className='mx-auto' style={{width: item.imgWidth}} />
          </div>
        )))}
      </Slider>
    </div>
  )
}

export default Featured