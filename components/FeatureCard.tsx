import React from 'react'

type FeatureCardInterface = {
    title: string,
    child1: string,
    child2: string,
}


const FeatureCard = ({ title, child1, child2 }: FeatureCardInterface) => {
  return (
    <div className='flex items-center gap-1'>
        <p className='jakarta-font-500 sm:text-2xl text-md text-gray-600 font-medium underline underline-offset-4'>{title}</p>
        <div className='flex flex-col gap-0'>
        <span className='jakarta-font-500 sm:text-xs text-[6px] text-gray-600 font-light'>{child1}</span>
        <span className='jakarta-font-500 sm:text-xs text-[6px] text-gray-600 font-light'>{child2}</span>
        </div>
    </div>
  )
}

export default FeatureCard