'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import BrinteLogo from "@/assets/brinteLogo.svg"
import Chip from '../common/Chip';
import CustomLink from '../common/CustomLink';
import CustomButton from '../common/CustomButton';
import { APP_HEADER_NAV_ROUTES } from '@/utils/constants/routes';
import MobileHeader from './MobileHeader';
import classNames from '@/utils/classNames';

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
            setIsScrolled(true);
            } else {
            setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    
  return (
    <header className='w-full h-[64px]'>
        <nav className={classNames(
            'hidden lg:flex border-b w-full bg-surface-bgInvert transition-all duration-300 ease',
            isScrolled ? 'border-b-border-light fixed top-0 left-0 z-50' : 'border-b-transparent'
            )}
        >
            <ul className='w-full flex justify-between h-[64px] px-16 items-center'>
                <li>
                    <Link href={'/'} className='flex items-end'>
                    <Image src={BrinteLogo} alt="Brinte logo" />
                    <Chip title='BETA' />
                    </Link>
                </li>
                <div className='flex gap-[2px]' >
                    {APP_HEADER_NAV_ROUTES.map((link, index)=>(
                        <li key={index}>
                            <CustomLink href={link.route} className='px-3 py-[5px]'>{link.name}</CustomLink>
                        </li>
                    ))}
                </div>
                <div className='flex items-center gap-3'>
                    <li>
                        <CustomButton variant='tertiary'>Login</CustomButton>
                    </li>
                    <li>
                        <CustomButton variant='secondary'>Join waitlist</CustomButton>
                    </li>
                </div>
            </ul>
        </nav>
        <MobileHeader isScrolled={isScrolled} />
    </header>
    )
}

export default Header