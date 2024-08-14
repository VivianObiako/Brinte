import { BadgeProps } from '@/models/shared'
import React from 'react'

const Chip = ({title, classNames}:BadgeProps) => {
  return (
    <span className={`bg-surface-info px-2 py-[5px] text-text-info w-[36px] h-[20px] flex justify-center items-center rounded-3xl font-medium text-[8px] leading-[10px] uppercase ${classNames || ''} `}>
        {title}
    </span>
  )
}

export default Chip