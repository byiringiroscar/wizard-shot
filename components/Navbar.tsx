import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'
import chrome from '../public/chrome.png'
import { NAV_LINKS } from '@/constants' 
import ImageUse from './Image'

const Navbar = () => {
  return (
    <nav className='flex justify-between padding-container  pt-12 absolute inset-x-0 top-0 z-50'>
        <Link href='/'>
            <ImageUse
              src={logo}
              width={140}
              priority
              height={24.81}
              alt="logo"
              className="h-[18px] w-auto"
            />
        </Link>
        <ul className='hidden h-full gap-12 lg:flex'>
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className='text-[#00000099] text-base font-bold opensans-font-regular transition-all px-2 py-0.5 cursor-pointer rounded'>{link.label}</Link>
            ))}
        </ul>
        <div className='flex gap-3.5 items-start'>
          <Link href='/' className='text-[#00000099] text-base font-bold opensans-font-regular '>Login</Link>
          <div className='flex relative'>
            <p
              className='text-[#090337] text-base script-font w-full  absolute -top-10 right-0 font-bold py-3 px-6 rounded-lg cursor-pointer'
            >100% free, forever 🤑</p>
            <button className='flex gap-2 bg-[#18181C] font-bold py-3 px-6 rounded-lg  items-center'>
              <Image src={chrome} height={19} width={19} alt="logo" />
              <span className='text-white mulish-font text-sm'>Install Wizardshot</span>
              </button>
          </div>
        </div>
    </nav>
  )
}

export default Navbar