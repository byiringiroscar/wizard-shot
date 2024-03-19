import React from 'react'
import FeatureCard from './FeatureCard'
import { featuresData } from '@/dataMock/data'
import humanIcon from '../public/images/btn.png'
import Image from 'next/image'
import chrome from '../public/chrome.png'
import { FaStar } from "react-icons/fa";

const Features = () => {
  return (
    <div className='main-container flex flex-col gap-4 items-center'>
        <h3 className='jakarta-font-700 text-center relative'>
            <span className='underline text-[28px] leading-[39px]'>32 MORE FEATURES</span><br />
            <span className='text-[18px] leading-[25px]'>INCLUDING A KB INTEGRATION</span>
            <Image src={humanIcon} alt='icon' height={50} width={50} priority className='absolute -bottom-1 -right-8 lg:top-12 lg:-right-24 w-auto h-auto' />
        </h3>

        <div className='flex gap-1 items-center justify-between mt-6 bg-feature-gradient lg:mt-24'>
              {featuresData.map((feature, index) => (
                <FeatureCard
                key={index}
                title={feature.title}
                child1={feature.child1}
                child2={feature.child2}
                />
              ))}

        </div>

        <div className='flex flex-col gap-6 border-4 border-solid border-[black] py-5 px-2 rounded-lg items-center'>
                <h3 className='jakarta-font text-[32px] text-center leading-[35px] lg:w-3/4'>Create A Detailed Tutorial in Less than 3 clicks</h3>
                <button className='flex gap-2 bg-[#18181C] font-bold py-3 px-6 rounded-lg  items-center justify-center button-shadow'>
                      <Image src={chrome} height={19} width={19} alt="logo" />
                      <span className='text-white mulish-font text-sm'>Install Wizardshot</span>
                </button>
              <div className='flex flex-col items-center gap-1'>
                <blockquote className='jakarta-font text-[14px] text-center leading-[16px]'>Has helped us write help docs 100x faster</blockquote>
                <span className='jakarta-font-400 text-[14px] text-center leading-[16px]'>– Dany River, Cartier Informatie</span>
              </div>
              <div className='flex  items-center justify-center'>
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className='text-[#FFD700] text-2xl' />
                  ))}
              </div>
        </div>

    </div>
  )
}

export default Features