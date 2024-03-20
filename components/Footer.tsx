import React from 'react'
import ImageUse from './Image'
import logo from '../public/logo.png'
import tiki from '../public/images/tiki.png'
import insta from '../public/images/insta.png'
import juice from '../public/images/juice.png'

const Footer = () => {
  return (
    <footer className="mx-auto max-w-5xl flex flex-col justify-between gap-5 py-3 mt-12 rounded-lg relative w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  justify-between w-full h-full">
              <div className="flex flex-col gap-2 items-start">
                <ImageUse
                  src={logo}
                  width={150}
                  priority
                  height={43}
                  alt="logo"
                  className="h-[40px] w-auto"
                />
                <p className="text-[18px] leading-[23px] mulish-font-600 text-[#0D0D0D]">Turn complex process into a <br /> simple step-by step Guide</p>

                <ImageUse
                  src={juice}
                  width={200}
                  height={200}
                  alt="juice"
                  className="h-[100px] w-auto"
                />
              </div>
              <div className="flex flex-col items-start gap-5">
                  <p className="mulish-font text-[#0D0D0D] text-[22px] leading-[28px] cursor-pointer">Learn More</p>
                  <ul>
                    <li className='mulish-font-600 text-[18px] leading-[23px] text-[#0D0D0D] cursor-pointer'>Wizardshot</li>
                    <li className='mulish-font-600 text-[18px] leading-[23px] text-[#0D0D0D] cursor-pointer'>Community Page</li>
                    <li className='mulish-font-600 text-[18px] leading-[23px] text-[#0D0D0D] cursor-pointer'>Help Center</li>
                    <li className='mulish-font-600 text-[18px] leading-[23px] text-[#0D0D0D] cursor-pointer'>Security Information</li>
                  </ul>
              </div>
              <div className="flex flex-col items-start gap-5">
                  <p className="mulish-font text-[#0D0D0D] text-[22px] leading-[28px] cursor-pointer">Company</p>
                  <ul>
                    <li className='mulish-font-600 text-[18px] leading-[23px] text-[#0D0D0D] cursor-pointer'>About Us</li>
                    <li className='mulish-font-600 text-[18px] leading-[23px] text-[#0D0D0D] cursor-pointer'>Status Page</li>
                  </ul>
              </div>
              <div className="flex flex-col items-start gap-5">
                  <p className="mulish-font text-[#0D0D0D] text-[22px] leading-[28px]">Learn More</p>
                  <ul>
                    <li className='mulish-font-600 text-[18px] leading-[23px] text-[#0D0D0D]'>Wizardshot</li>
                    <li className='mulish-font-600 text-[18px] leading-[23px] text-[#0D0D0D]'>Community Page</li>
                    <li className='mulish-font-600 text-[18px] leading-[23px] text-[#0D0D0D]'>Help Center</li>
                    <li className='mulish-font-600 text-[18px] leading-[23px] text-[#0D0D0D]'>Security Information</li>
                  </ul>
              </div>
        </div>
      </footer>
  )
}

export default Footer