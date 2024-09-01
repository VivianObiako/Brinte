import React, { useState } from 'react';
import classNames from '@/utils/classNames';

export interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const BaseInput: React.FC<BaseInputProps> = ({
    label,
    value,
    onChange,
    placeholder,
    disabled,
    error,
    name,
    className,
    children,
    ...props
  }) => {
    const [isFocused, setIsFocused] = useState(false);

    const labelClasses = classNames(
        'absolute text-[13px] leading-[20px] text-text-subdued hover:text-text-secondary',
        'duration-300 transform -translate-y-[.8rem] scale-75 top-[18px] z-10 origin-[0]',
        'start-[18px] peer-focus:text-text-subdued peer-placeholder-shown:scale-100',
        'peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[.8rem]',
        'rtl:peer-focus:translate-x-1/2 rtl:peer-focus:left-auto',
        disabled && "hover:text-text-subdued",
        !value && 'text-text-subdued group-focus:text-text-secondary',
        props.type === 'select' && !value && (isFocused ? 'opacity-100 -translate-y-[.8rem]' : 'opacity-0 -translate-y-[.8rem] scale-75 translate-y-[10px] z-[-1]'),
    );
  
    return (
      <div className="relative w-full group">
        {React.Children.map(children, child =>
          React.cloneElement(child as React.ReactElement, {
            onFocus: () => setIsFocused(true),
            onBlur: () => setIsFocused(false),
          })
        )}
        {props.type !== 'textarea' && <label htmlFor={name} className={labelClasses}>
          {label}
        </label>}
        {error && (
          <p id={`${name}_error_help`} className="mt-2 text-xs text-text-error">
            <span className="text-xs leading-[18px]">{error}</span>
          </p>
        )}
      </div>
    );
  };

export default BaseInput;