import React from 'react'
import Slider from 'react-slick';
import { PiCaretRightThin, PiCaretLeftThin } from "react-icons/pi";
import { vouchersLogo } from './constants';
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";
import { ImYoutube } from "react-icons/im";

const PrevArrow = ({onClick}) => ((
  <button onClick={onClick} className='text-[3.75rem] absolute top-[50%] translate-y-[-50%] -left-12 text-white hover:text-slate-500 duration-200'>
    <PiCaretLeftThin />
  </button>
))

const NextArrow = ({onClick}) => ((
  <button onClick={onClick} className='text-[3.75rem] absolute top-[50%] translate-y-[-50%] -right-12 text-white hover:text-slate-500 duration-200'>
    <PiCaretRightThin />
  </button>
))

const Footer = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className='bg-emerald-500 py-14 px-7'>
      <h1 className='text-center text-[1.8rem] lg:text-[2.65rem] text-white uppercase'>AVAILABLE VOUCHERS</h1>
      <div className='w-[50px] h-[2.5px] mx-auto bg-white mt-3' />

      <Slider {...settings} className='mt-10 relative lg:w-[850px] mx-auto'>
        {vouchersLogo.map(item => ((
          <div className='h-[125px] grid place-content-center' key={item.logo}>
            <img src={item.logo} alt="" className='mx-auto' style={{width: item.imgWidth}} />
          </div>
        )))}
      </Slider>

      <div className='flex flex-col md:flex-row items-center mt-32 justify-between lg:w-[800px] mx-auto gap-y-12'>

        <div className='w-fit text-center flex flex-col gap-2.5 md:gap-4 text-[0.9rem]'>
          <img src="logo-01.webp" alt="" className='w-[200px] mx-auto' />
          <p>Regenize is a recognised Level 1<br />BBBEE Company</p>
          <p>Cape Town, South Africa</p>
          <p>&copy;2023 by Regenize</p>
        </div>

        <div className='flex gap-3 text-[2.5rem] items-center'>
          <BiLogoFacebook />
          <BiLogoTwitter />
          <TiSocialInstagram />
          <TiSocialLinkedin />
          <ImYoutube />
        </div>

        <nav className='flex flex-col gap-2.5 text-lg font-medium'>
          <a href="">Contact</a>
          <a href="">About Us</a>
          <a href="">Press</a>
          <a href="">Terms Of Use</a>
        </nav>
      </div>
    </div>
  )
}

export default Footer