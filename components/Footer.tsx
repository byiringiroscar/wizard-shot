import React from 'react'
import ImageUse from './Image'
import logo from '../public/logo.png'
import tiki from '../public/images/tiki.png'
import insta from '../public/images/insta.png'
import juice from '../public/images/juice.png'

const Footer = () => {
  return (
    <footer className="mx-auto max-w-5xl padding-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          <div className="flex flex-col items-start space-y-4">
            <ImageUse
              src={logo}
              width={245}
              priority
              height={43}
              alt="logo"
              className="h-[43px] w-auto"
            />
            <p className="text-[18px] leading-[23px] mulish-font-600 text-[#0D0D0D]">Turn complex process into a simple step-by step Guide</p>

            <ImageUse
              src={juice}
              width={200}
              height={200}
              alt="juice"
              className="h-[100px] w-auto"
            />
          </div>
        </div>

        
      </footer>
  )
}

export default Footer