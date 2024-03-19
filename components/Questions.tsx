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
        <div className='flex justify-between w-full items-center'>
            <p className='text-[14px] leading-[19px] text-[#000000] mulish-font'>Curious To  Know More?</p>
            <button className='bg-[#03132E] mulish-font text-[14px] leading-[22px] text-white rounded-md px-6 py-2'>Vist Help & Community Center</button>
        </div>
    </section>
  )
}

export default Questions