import React from 'react'
import ImageUse from './Image'
import logo from '../public/logo.png'   
import Link from 'next/link'
import { IoClose } from "react-icons/io5";
import Image from 'next/image'
import chrome from '../public/chrome.png'

const MobileNav = () => {
  return (
    <div className='h-screen w-full fixed top-0 gap-5 right-0 bg-white z-50 flex flex-col lg:hidden items-center p-8'>
        <div className='flex justify-between w-full'>
            <Link href='/'>
                <ImageUse
                src={logo}
                width={140}
                priority
                height={30}
                alt="logo"
                className="h-[18px] w-auto"
                />
            </Link>
            <IoClose className='text-3xl text-[#00000099] cursor-pointer' />
        </div>
        <hr className='w-full text-[#E6E6E6] text-[1px]' />
        <ul className='flex flex-col gap-9 items-start w-full'>
            <li className='opensans-font-regular text-[16px] leading-[21px] text-black opacity-60'><Link href='/'>Home</Link></li>
            <li className='opensans-font-regular text-[16px] leading-[21px] text-black opacity-60'><Link href='/'>Features</Link></li>
            <li className='opensans-font-regular text-[16px] leading-[21px] text-black opacity-60'><Link href='/'>About</Link></li>
            <li className='opensans-font-regular text-[16px] leading-[21px] text-black opacity-60'><Link href='/'>Help Center & Community</Link></li>
            <li className='opensans-font-regular text-[16px] leading-[21px] text-black opacity-60'><Link href='/'>Login</Link></li>
        </ul>
        <hr className='w-full text-[#E6E6E6] text-[1px]' />
        <div className='flex flex-col w-full gap-2 items-center mt-3'>
            <button className='flex gap-1 bg-[#18181C] font-bold py-3 px-6 rounded-lg  items-center'>
                <Image src={chrome} height={19} width={19} alt="logo" />
                <span className='text-white mulish-font text-sm'>Install Wizardshot</span>
              </button>

              <p
              className='text-[#090337] text-base script-font font-bold cursor-pointer'
            >100% free, forever 🤑</p>
         </div>

    </div>
  )
}

export default MobileNav