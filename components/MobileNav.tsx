import React from 'react'
import ImageUse from './Image'
import logo from '../public/logo.png'   
import Link from 'next/link'
import { IoClose } from "react-icons/io5";

const MobileNav = () => {
  return (
    <div className='h-screen w-full fixed top-0 gap-4 right-0 bg-white z-50 flex flex-col items-center p-8'>
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
        <ul className='flex flex-col gap-5 items-center'>
            <li className='text-[#00000099] text-base font-bold opensans-font-regular transition-all px-2 py-0.5 cursor-pointer rounded'>Features</li>
            <li className='text-[#00000099] text-base font-bold opensans-font-regular transition-all px-2 py-0.5 cursor-pointer rounded'>Pricing</li>
            <li className='text-[#00000099] text-base font-bold opensans-font-regular transition-all px-2 py-0.5 cursor-pointer rounded'>Contact</li>
            <li className='text-[#00000099] text-base font-bold opensans-font-regular transition-all px-2 py-0.5 cursor-pointer rounded'>Login</li>
        </ul>
    </div>
  )
}

export default MobileNav