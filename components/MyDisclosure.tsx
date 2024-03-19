'use client'
import { Disclosure } from '@headlessui/react';
import { FaChevronUp } from "react-icons/fa";

const MyDisclosure = () => {
  return (
    <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between  px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring">
                <span>What is your refund policy?</span>
                <FaChevronUp
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-300`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                If youre unhappy with your purchase for any reason, email us
                within 90 days and well refund you in full, no questions asked.
              </Disclosure.Panel>
              <hr />
            </>
          )}
        </Disclosure>
  )
}

export default MyDisclosure