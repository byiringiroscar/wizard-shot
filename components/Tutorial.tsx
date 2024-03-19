import Link from 'next/link'
import React from 'react'

const Tutorial = () => {
  return (
    <section className='mx-auto max-w-5xl flex justify-between items-center w-full px-6 py-3 bg-[#000000] mt-12 rounded-lg'>
        <div className='flex flex-col gap-4'>
            <h2 className='mulish-font-500 text-[28px] leading-[33px] text-[#F9FAFB]'>Create Tutorials in 3 Clicks.</h2>
            <p className='mulish-font-400 text-[14px] leading-[19px] text-[#F9FAFB]'>With WizardShot, You Click Capture, And We’ll Capture What’s Happening on <br /> Your Screen And Turn It Into A Tutorial.</p>
        </div>
            <button className='box-shadow-custom mulish-font  text-white'><span className='underline'>Try Wizardshot</span>→</button>
        
    </section>
  )
}

export default Tutorial