import Link from 'next/link'
import React from 'react'

const Tutorial = () => {
  return (
    <section className='mx-auto max-w-5xl flex flex-col justify-between gap-5 lg:flex-row items-center w-full px-6 py-3 bg-[#000000] mt-12 rounded-lg relative' id='help'>
        <div className='flex flex-col gap-4'>
            <h2 className='mulish-font-500 text-[28px] leading-[33px] text-[#F9FAFB]'>Create Tutorials in 3 Clicks.</h2>
            <p className='mulish-font-400 text-[14px] leading-[19px] text-[#F9FAFB]'>With WizardShot, You Click Capture, And We’ll Capture What’s Happening on <br /> Your Screen And Turn It Into A Tutorial.</p>
        </div>
        <button className='box-shadow-custom mulish-font  text-white'><span className='underline'>Try Wizardshot</span>→</button>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
    </section>
  )
}

export default Tutorial