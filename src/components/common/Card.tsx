import { CardProps } from '@/models/shared';
import clsx from 'clsx';
import Image from 'next/image';
import ExternalIcon from "@/assets/arrow-up-right.svg"

const Card = ({icon, title, link, guideText, className, type}:CardProps) => {
  return (
    <div className={clsx(
            "w-[317px] max-w-full flex justify-between flex-col p-6 rounded-3xl shadow-card", 
            className,
            type === 'small' ? "h-[178px]": "",
            type === 'big' ? "h-[372px]": "",
        )}
    >
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
                <div className='h-4 w-4'>
                    <Image src={icon} alt="eternal link icon" />
                </div>
                <p className=''>{guideText}</p>
            </div>
            <div className='h-6 w-6'>
                <Image src={ExternalIcon} alt="eternal link icon" />
            </div>
        </div>
        <div>
            <p className='font-medium font-xl'>{title}</p>
        </div>
    </div>
  )
}

export default Card