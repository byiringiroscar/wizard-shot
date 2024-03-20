import React from 'react'
import ImageUse from './Image'
import logo from '../public/logo.png'
import tiki from '../public/images/tiki.png'
import insta from '../public/images/insta.png'

const Footer = () => {
  return (
    <footer className="mx-auto max-w-5xl padding-container">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:pt-8 mt-10">
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

            <div className="flex flex-col">
              <div className="flex items-center border-black border-4">
                <div className="flex flex-col items-center p-2">
                  <p className="font-bold text">12</p>
                  <p className="font-bold text">YEARS</p>
                </div>

                <div className="flex flex-col items-center border-l-4 border-black p-2">
                  <p className="font-bold text">BUILD BY</p>
                  <ImageUse
                    src="/vektor.svg"
                    width={20}
                    priority
                    height={20}
                    alt="logo"
                    className="h-[20px] w-auto"
                  />
                  <p className="font-bold text">HELPJUICE</p>
                </div>
              </div>

              <div>
                <p className="font-bold text-[8px] border-black border-4 p-2 text-center">#1 Rated Knowledge Base Software</p>
              </div>
            </div>
          </div>
        </div>

        
      </footer>
  )
}

export default Footer