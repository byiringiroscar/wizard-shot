import React from 'react'
import MyDisclosure from './MyDisclosure'

const Questions = () => {
  return (
    <section className='mx-auto max-w-2xl flex flex-col items-center gap-4 mt-16'>
        <h2 className='jakarta-font text-[32px] text-center text-[#000000] leading-[44px]'>Common Questions</h2>
        <div className='flex flex-col gap-4 w-full'>
            <MyDisclosure />
            <MyDisclosure />
            <MyDisclosure />
            <MyDisclosure />
        </div>
    </section>
  )
}

export default Questions