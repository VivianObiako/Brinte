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


const MobileHeader = () => {
    const [nav, setNav] = useState<boolean>(false);
    const handleClick = () => setNav(!nav);
  return (
    <nav className='lg:hidden'>
        <ul>
            <div className={`transition-all duration-150 w-full flex justify-between items-center h-[64px] px-4 border-b border-transparent ${nav ? " !border-border-light" : ""}`}>
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
                className={`transition-all duration-100 brite_wrapper py-5 px-4
                ${!nav
                    ? "translate-x-full opacity-0 w-0"
                    : "absolute top-[65px] lg:hidden left-0 w-full bg-white min-h-screen opacity-1 -translate-x-0"}
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