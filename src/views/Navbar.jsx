import {useState} from 'react'
import { navLinks } from './constants'
import { TiUser } from "react-icons/ti";
import { CgMenuRight } from "react-icons/cg";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [ menu, setMenu ] = useState(false)

  return (
    <nav className='flex py-4 lg:py-5 px-5 lg:px-32 justify-between items-baseline relative z-[999999]'>
      <div className='md:flex gap-8 lg:gap-14 text-lg hidden'>
        {navLinks.map(item => ((
          <a href={item.link} key={item.id} className='hover:text-emerald-500 duration-300'>{item.title}</a>
        )))}
      </div>

      <a href="" className='md:hidden'>
        <img src="./logo-01.webp" alt="" className='w-[170px]' />
      </a>

      <a href="" className='text-emerald-500 md:flex gap-1 items-center ml-auto text-base hidden'>
        Customer Portal
        <TiUser className='text-[1.5rem]' />
      </a>

      <button className='md:hidden' onClick={()=>setMenu(true)}>
        <CgMenuRight className='text-[2rem] text-emerald-500' />
      </button>
        
      {<div className={`absolute w-screen h-screen ${menu ? 'bg-[#00000009] left-0' : 'bg-[#fff0] left-[105vw]'} duration-1000 top-0`} onClick={()=>setMenu(false)} />}
      <div className={`absolute w-[300px] h-screen bg-emerald-500 ${menu ? 'right-0' : '-right-[350px]'} duration-700 top-0 bg-no-repeat bg-center bg-cover`} style={{backgroundImage: 'url(./nav-bg.webp)'}}>
        <div className='absolute top-0 left-0 bg-[rgba(16,185,129,0.87)] w-full h-full' />
        <div className='flex flex-col pt-14 px-10 gap-7 relative'>
          {navLinks.map(item => ((
            <a href={item.link} key={item.id} className='text-white hover:text-black text-[1.6rem] duration-500'>{item.title}</a>
          )))}
        </div>

        <button className='absolute top-6 right-6' onClick={()=>setMenu(false)}>
          <RiCloseLine className='text-[2rem]' />
        </button>
      </div>
    </nav>
  )
}

export default Navbar