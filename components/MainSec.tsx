import React from 'react'
import Button from './Button'

const MainSec = () => {
  return (
    <div className="mx-auto max-w-2xl pb-6 pt-12 lg:pt-56 lg:pb-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold jakarta-font tracking-tight text-gray-900 sm:text-6xl">
              Your Magic Wand for Instant Documentation
            </h1>
            <p className="mt-6 text-lg opensans-font leading-8 text-gray-600">
              Turn ANY process into a simple step-by step Guide
            </p>
            <div className="mt-6">
              <Button 
              className='bg-[#18181C] mulish-font  text-white font-bold py-3 px-6 rounded-lg'
              type='button'
              label='Install Wizardshot →'

              />
            </div>
          </div>
        </div>
  )
}

export default MainSec