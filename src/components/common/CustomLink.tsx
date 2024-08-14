import { CustomLinkProps } from '@/models/shared';
import Link from 'next/link';
import React from 'react';

const CustomLink: React.FC<CustomLinkProps> = ({ href, inert = false, children }) => {
    return (
      <Link href={href} inert={inert ? true : undefined} className={`link ${inert ? 'inert' : ''}`}>
        {children}
      </Link>
    );
  };

export default CustomLink