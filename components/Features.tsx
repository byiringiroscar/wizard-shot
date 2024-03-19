import React from 'react'
import FeatureCard from './FeatureCard'
import { featuresData } from '@/dataMock/data'
import humanIcon from '../public/images/btn.png'
import Image from 'next/image'

const Features = () => {
  return (
    <div className='main-container flex flex-col items-center'>
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

    </div>
  )
}

export default Features