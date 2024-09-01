import { ButtonProps } from '@/models/shared';
import classNames from '@/utils/classNames';
import React from 'react';
import Loader from "@/assets/buttonLoader.svg";
import Image from 'next/image';

const CustomButton: React.FC<ButtonProps> = ({ children, variant, className, disabled, loading, ...props }) => {
    const isDisabled = disabled || loading;

    const baseStyles = 'transition ease-in-out duration-200 px-3 py-2 rounded font-medium text-[13px] leading-[20px] flex items-center justify-center gap-2 outline-0 min-w-[65px]';

    const variantStyles = classNames({
        'bg-primary-100 text-text-cta hover:bg-primary-hover hover:shadow-primaryBtn-hover active:shadow-primaryBtn-active active:bg-primary-100 focus:bg-primary-100 focus:shadow-primaryBtn-focus': variant === 'primary' && !isDisabled,
        'bg-surface-neutral text-text-neutral hover:bg-secondary-hover hover:shadow-secBtn-hover active:shadow-secBtn-active active:bg-surface-neutral focus:bg-surface-neutral focus:shadow-secBtn-focus': variant === 'secondary' && !isDisabled,
        'bg-transparent text-text-label hover:bg-tertiary-hover active:bg-tertiary-highlight focus:bg-tertiary-dim': variant === 'tertiary' && !isDisabled,
        'bg-surface-subdue text-text-subdued cursor-not-allowed': isDisabled,
        'bg-transparent': variant === 'tertiary' && isDisabled,
        '!bg-surface-subdue': variant === 'tertiary' && loading,
    });

    return (
        <button
            className={classNames(baseStyles, variantStyles, className)}
            disabled={isDisabled}
            {...props}
        >
            {loading && (<div className='animate-spin w-4 h-4'>
                <Image src={Loader} alt="loader icon"  />
            </div>)}
            {children}
        </button>
    );
};


export default CustomButton