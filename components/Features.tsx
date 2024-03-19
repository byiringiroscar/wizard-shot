import React from 'react'
import FeatureCard from './FeatureCard'
import { featuresData } from '@/dataMock/data'

const Features = () => {
  return (
    <div className='main-container flex flex-col items-center'>
        <h3 className='jakarta-font-700 text-center'>
            <span className='underline text-[28px] leading-[39px]'>32 MORE FEATURES</span><br />
            <span className='text-[18px] leading-[25px]'>INCLUDING A KB INTEGRATION</span>
        </h3>

        <div className='flex gap-1 items-center justify-between mt-12 bg-feature-gradient'>
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