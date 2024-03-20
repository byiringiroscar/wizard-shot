'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'
import chrome from '../public/chrome.png'
import { NAV_LINKS } from '@/constants' 
import ImageUse from './Image'
import { FiAlignJustify } from "react-icons/fi";
import MobileNav from './MobileNav'

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const handleToggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [])

  return (
    <nav className='flex justify-between padding-container items-center  pt-12 absolute inset-x-0 top-0 z-50'>
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
        <ul className='hidden h-full sm:gap-5 gap-10 lg:flex'>
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className='text-[#00000099] text-base font-bold opensans-font-regular transition-all px-2 py-0.5 cursor-pointer rounded'>{link.label}</Link>
            ))}
        </ul>
        <div className='hidden lg:flex gap-3.5 items-center'>
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
        <div className='lg:hidden'>
          <FiAlignJustify onClick={handleToggleMobileNav} className='text-3xl text-[#00000099] cursor-pointer' />
        </div>
        <MobileNav isMobileNavOpen={isMobileNavOpen} onToggleNav={handleToggleMobileNav} />
    </nav>
  )
}

export default Navbar