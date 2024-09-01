'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Chip from '../common/Chip';
import BrinteLogo from "@/assets/brinteLogo.svg"
import { APP_HEADER_NAV_ROUTES } from '@/utils/constants/routes';
import CustomLink from '../common/CustomLink';
import CustomButton from '../common/CustomButton';
import hamburger from "@/assets/hamburger.svg";
import { HeaderProps } from '@/models/shared';
import classNames from '@/utils/classNames';


const MobileHeader = ({isScrolled}:HeaderProps) => {
    const [nav, setNav] = useState<boolean>(false);
    const handleClick = () => setNav(!nav);
  return (
    <nav className='lg:hidden'>
        <ul>
            <div className={classNames(
                'transition-all duration-150 border-b w-full flex justify-between items-center h-[64px] px-4 bg-surface-bgInvert',
                isScrolled || nav ? "fixed border-b-border-light top-0 left-0 z-50 ease-in-out" : "border-transparent"
            )}
            >
                <li>
                    <Link href={'/'} className='flex items-end'>
                    <Image src={BrinteLogo} alt="Brinte logo" />
                    <Chip title='BETA' />
                    </Link>
                </li>
                <div onClick={handleClick} className="cursor-pointer lg:hidden">
                    <Image src={hamburger} alt="hamburger" />
                </div>
            </div>
            <div
                className={`transition-all duration-100 py-5 px-4 fixed w-full inset-0 top-[63px] z-50
                ${!nav
                    ? "translate-x-[100%]"
                    : "lg:hidden border-t border-t-border-light bg-white min-h-screen -translate-x-0"}
                `}
            >
                <div className='flex flex-col gap-4'>
                    {APP_HEADER_NAV_ROUTES.map((link, index)=>(
                        <li key={index}>
                            <CustomLink href={link.route}>{link.name}</CustomLink>
                        </li>
                    ))}
                </div>
                <div className='flex flex-col gap-4 mt-4'>
                    <li>
                        <CustomButton variant='tertiary'>Login</CustomButton>
                    </li>
                    <li>
                        <CustomButton variant='secondary'>Join waitlist</CustomButton>
                    </li>
                </div>
            </div>
        </ul>
    </nav>
  )
}

export default MobileHeader