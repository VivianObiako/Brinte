import React from 'react'
import SectionHeader from './shared/SectionHeader'
import Image from 'next/image';
import ThankYouImage from "@/assets/Success-Illustration.svg"

const ThankYou = () => {
  return (
    <div className="brite_wrapper">
        <div className='flex flex-col md:flex-row gap-10 md:gap-16 items-center'>
            <SectionHeader 
                title='Thank you'
                description='A member of our team will be in touch with you shortly.'
                className='w-[346px] max-w-full text-xl leading-[32px] !mb-0'
            />
            <div className='max-w-[240px] w-full max-h-[240px]'>
                <Image src={ThankYouImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ThankYou