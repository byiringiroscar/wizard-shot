import React from 'react'
import groupvideo from '../public/groupvideo.png'
import Image from 'next/image'

const ViewVideo = () => {
  return (
        <Image
        className='max-container gradient-border relative h-full w-full'
        src={groupvideo}
        alt="Group Video"
        height={500}
        width={700}
        />
  )
}

export default ViewVideo