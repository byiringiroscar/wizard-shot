import React from 'react'
import Text from './Text'
import ImageUse from './Image'
import logo from '../public/logo.png'
import tiki from '../public/images/tiki.png'
import insta from '../public/images/insta.png'

const Footer = () => {
  return (
    <footer className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
          <div className="flex flex-col items-start space-y-4">
            <ImageUse
              src={logo}
              width={245}
              priority
              height={43}
              alt="logo"
              className="h-[43px] w-auto"
            />

            <Text
              label="Turn complex process into a simple step-by step Guide"
              className="text-[18px] leading-[23px] mulish-font-600 text-[#0D0D0D]"
            />

            <div className="flex flex-col">
              <div className="flex items-center border-black border-4">
                <div className="flex flex-col items-center p-2">
                  <Text label="12" className="font-bold text" />
                  <Text label="YEARS" className="font-bold text" />
                </div>

                <div className="flex flex-col items-center border-l-4 border-black p-2">
                  <Text label="BUILD BY" className="font-bold text" />
                  <ImageUse
                    src="/vektor.svg"
                    width={20}
                    priority
                    height={20}
                    alt="logo"
                    className="h-[20px] w-auto"
                  />
                  <Text label="HELPJUICE" className="font-bold text" />
                </div>
              </div>

              <div>
                <Text
                  label="#1 Rated Knowledge Base Software"
                  className="font-bold text-[8px] border-black border-4 p-2 text-center"
                />
              </div>
            </div>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <Text label="Learn more" className="mulish-font text-[#0D0D0D] text-[22px]" />

              <Text label="Wizardshot" className="mulish-font-600 text-[#0D0D0D] text-[18px] leading-[22px]" />
              <Text label="Community Page" className="mulish-font-600 text-[#0D0D0D] text-[18px] leading-[22px]" />
              <Text label="Help Center" className="mulish-font-600 text-[#0D0D0D] text-[18px] leading-[22px]" />
              <Text label="Security Information" className="mulish-font-600 text-[#0D0D0D] text-[18px] leading-[22px]" />
            </div>

            <div>
              <Text label="Company" className="mulish-font text-[#0D0D0D] text-[22px]" />

              <Text label="About Us" className="mulish-font-600 text-[#0D0D0D] text-[18px] leading-[22px]" />
              <Text label="Status Page" className="mulish-font-600 text-[#0D0D0D] text-[18px] leading-[22px]" />
            </div>
          </div>

          <div className="flex flex-col sm:items-end items-start space-y-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <Text label="📞 +1 (833) 387 3877" className="mulish-font-600 text-[#0D0D0D] text-[18px] leading-[22px]" />
              <Text label="✉️ success@wizardshot.com" className="mulish-font-600 text-[#0D0D0D] text-[18px] leading-[22px]" />
            </div>

            <div className="flex items-center gap-2">
              <ImageUse
                src={tiki}
                width={38}
              
                height={36.29}
                alt="logo"
                className="h-[36.29px] w-auto"
              />

              <ImageUse
                src={insta}
                width={38}
              
                height={36.29}
                alt="logo"
                className="h-[36.29px] w-auto"
              />
            </div>

            <div className="flex items-center gap-2">
              <Text label="Sign Up" className="font-medium" />
              <Text label="Log in" className="font-medium" />
            </div>
          </div>
        </div>

        <div className="my-6 space-y-6">
          <div className="sm:hidden text-center">
            <Text label="📞 +1 (833) 387 3877" className="font-light" />
            <Text label="✉️ success@wizardshot.com" className="font-light" />
          </div>
          <Text
            label="© 2024 Wizardshot – All rights reserved."
            className="font-light sm:text-base text-xs text-center text-[#0D0D0D] mulish-font-500 text-[16px]"
          />
        </div>
      </footer>
  )
}

export default Footer