import { CardProps } from '@/models/shared';
import clsx from 'clsx';
import React from 'react';

const Card = ({title, children, className}:CardProps) => {
  return (
    <div className={clsx("", className)}>
        Card
    </div>
  )
}

export default Card