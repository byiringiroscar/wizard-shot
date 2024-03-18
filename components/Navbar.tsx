import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.png'
import { NAV_LINKS } from '@/constants' 
import ImageUse from './Image'

const Navbar = () => {
  return (
    <nav className='flex justify-between padding-container  py-5 absolute inset-x-0 top-0 z-50'>
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
                <Link href={link.href} key={link.key} className='text-[#090337] transition-all px-2 py-0.5 cursor-pointer rounded font-medium'>{link.label}</Link>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar