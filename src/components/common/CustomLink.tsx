import { CustomLinkProps } from '@/models/shared';
import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

const CustomLink: React.FC<CustomLinkProps> = ({ href, inert = false, children, className }) => {

    const defaultClasses = 'link';
    const inertClasses = 'inert';
    
    return (
      <Link href={href} inert={inert ? true : undefined} className={clsx(
        defaultClasses,
        inert && inertClasses,
        className
      )}>
        {children}
      </Link>
    );
  };

export default CustomLink