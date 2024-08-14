import Image from 'next/image'
import Link from 'next/link'
import React from 'react';
import BrinteLogo from "@/assets/brinteLogo.svg"
import Chip from '../common/Chip';
import CustomLink from '../common/CustomLink';
import CustomButton from '../common/CustomButton';

const Header = () => {
  return (
    <header>
        <nav>
          <ul>
            <li>
                <Link href={'/'} className='flex items-end'>
                <Image src={BrinteLogo} alt="Brinte logo" />
                <Chip title='BETA' />
                </Link>
            </li>
            <div>
              <li>
                <CustomLink href="#">Products</CustomLink>
              </li>
            </div>
            <div>
              <li>
                <CustomButton variant='tertiary' disabled>Join waitlist</CustomButton>
              </li>
            </div>
          </ul>
        </nav>
    </header>
  )
}

export default Header