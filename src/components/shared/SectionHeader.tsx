import { SectionHeaderProps } from '@/models/shared'
import clsx from 'clsx'
import React from 'react'

const SectionHeader = ({title, description, className}:SectionHeaderProps) => {
  return (
    <div className={clsx('max-w-[395px] mb-10 md:mb-[80px] text-base', className)}>
        <h2 className='font-medium text-center md:text-left text-5xl md:text-[56px] md:leading-[64px] tracking-[-1px] mb-3'>{title}</h2>
        <p className={clsx('text-center md:text-left',className)}>{description}</p>
    </div>
  )
}

export default SectionHeader