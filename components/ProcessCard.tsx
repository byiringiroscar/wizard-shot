import React from 'react'
import Image from 'next/image'

type ProcessInterface = {
    step: number,
    image: any,
    title: string,
    description: string
}

const ProcessCard = ({step, image, title, description}: ProcessInterface) => {
  return (
    <div className='flex flex-col gap-3'>
        <Image src={image}
        alt='img'
        height={230}
        width={295}
        priority
        className='w-auto h-[230px]'
            />
        <div className='flex flex-col gap-1'>
            <h3 className='text-[18px] leading-[25px] font-bold opensans-font text-[#363636]'>{step}. {title}</h3>
            <p className='text-[14px] leading-[16px] opensans-font-regular text-[#000000]'>{description}</p>
        </div>

    </div>
  )
}

export default ProcessCard