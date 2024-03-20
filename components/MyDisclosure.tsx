'use client'
import { Disclosure } from '@headlessui/react';
import { FaChevronUp } from "react-icons/fa";

type questionType = {
  question: string;
  answer: string;
};

const MyDisclosure = ({question, answer}: questionType) => {
  return (
    <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between  px-4 py-2 text-left text-sm font-medium focus:outline-none focus-visible:ring">
                <span className='text-[16px] leading-[24px] text-[#0F172A]'>{question}</span>
                <FaChevronUp
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-gray-300`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                {answer}
              </Disclosure.Panel>
              <hr />
            </>
          )}
        </Disclosure>
  )
}

export default MyDisclosure