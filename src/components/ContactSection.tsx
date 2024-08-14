'use client';

import React, { useState } from 'react'
import SectionHeader from './shared/SectionHeader'
import ContactForm from './form/ContactForm'
import ThankYou from './ThankYou'

const ContactSection = () => {
    const [isFormClosed, setIsFormClosed] = useState(false)

    const closeForm = () => {
        setIsFormClosed(prev => !prev )
    }

    return (
        <section className='w-full py-16 md:py-[128px]'>
            <div className="brite_wrapper">
                {!isFormClosed && <div className='flex flex-col md:flex-row gap-8'>
                    <SectionHeader 
                        title='Contact sales'
                        description="Send us a message and we'll promptly get back to you."
                        className='max-w-[309px] text-xl leading-[32px]'
                    />
                    <ContactForm closeForm={closeForm} />
                </div>}
                {isFormClosed && (
                    <ThankYou />
                )}
            </div>
            <div></div>
        </section>
    )
}

export default ContactSection