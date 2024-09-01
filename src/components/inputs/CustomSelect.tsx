import React, { useState, useRef, useEffect } from 'react';
import BaseInput from './BaseInput';
import { CustomSelectProps, SelectOption } from '@/utils/constants/types';
import classNames from '@/utils/classNames';

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onBlur,
  error,
  name = '',
  label,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const selectRef = useRef<HTMLSelectElement>(null);
  const customSelectRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<(HTMLLIElement | null)[]>([]);

  const selectedOption = options.find(option => option.value === value);

  const handleButtonKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  const handleOptionKeyDown = (event: React.KeyboardEvent, option: SelectOption) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSelect(option);
    }
  };

  const handleBlur = (event: React.FocusEvent) => {
    // Use requestAnimationFrame to check after the focus has moved
    requestAnimationFrame(() => {
      if (!customSelectRef.current?.contains(document.activeElement)) {
        setIsOpen(false);
        if (onBlur) {
          // Create a synthetic event if the original event's target is not the select element
          const syntheticEvent = event.target === selectRef.current
            ? event
            : {
                target: selectRef.current,
                type: 'blur',
                preventDefault: () => {},
                stopPropagation: () => {}
              } as React.FocusEvent<HTMLSelectElement>;
          
          onBlur(syntheticEvent as React.FocusEvent<HTMLSelectElement>);
        }
      }
    });
  };
  
  const handleSelect = (option: SelectOption) => {
    if (selectRef.current) {
      selectRef.current.value = option.value;
      selectRef.current.dispatchEvent(new Event('change', { bubbles: true }));
    }
    setIsOpen(false);
    customSelectRef.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
        case ' ':
        case 'Enter':
            if (!isOpen) {
                event.preventDefault();
                setIsOpen(true);
            }
        break;
      case 'ArrowDown':
      case 'ArrowUp':
        event.preventDefault();
        setFocusedIndex(prev => {
          const newIndex = event.key === 'ArrowDown'
            ? (prev < options.length - 1 ? prev + 1 : 0)
            : (prev > 0 ? prev - 1 : options.length - 1);
          return newIndex;
        });
        break;
      case 'Enter':
        event.preventDefault();
        if (isOpen && focusedIndex !== -1) {
          handleSelect(options[focusedIndex]);
        } else {
          setIsOpen(prev => !prev);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        customSelectRef.current?.focus();
        break;
    }
  };

  useEffect(() => {
    if (isOpen && focusedIndex !== -1) {
      optionsRef.current[focusedIndex]?.focus();
    }
  }, [focusedIndex, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setFocusedIndex(-1);
    }
  }, [isOpen]);
  const handleBaseInputClick = () => {
    if (!isOpen && !props.disabled) {
        setIsOpen(true);
        customSelectRef.current?.focus();
    }
};

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (customSelectRef.current && !customSelectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        if (onBlur) {
          const syntheticEvent = {
            target: { name, value },
            type: 'blur',
            preventDefault: () => {},
            stopPropagation: () => {}
          } as React.FocusEvent<HTMLSelectElement>;
          onBlur(syntheticEvent);
        }
      }
    };
  
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onBlur, name, value]);

  return (
    <BaseInput 
        {...props} 
        label={label} 
        error={error} 
        value={selectedOption?.value}
        handleClick={handleBaseInputClick} 
    >
      <div
        className="relative group focus:outline-none"
        ref={customSelectRef}
        aria-invalid={!!error}
        onBlur={handleBlur}
        tabIndex={0}
        onKeyDown={handleKeyDown}

    >
        <select
          ref={selectRef}
          name={name}
          value={value}
          onChange={props.onChange}
          onBlur={onBlur}
          className="sr-only"
          tabIndex={-1}
          onKeyDown={handleKeyDown}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <button
          type="button"
          className={classNames(
            "w-full pb-2.5 pt-5 py-2 px-4 cursor-pointer flex items-center justify-between transition-colors group",
            "bg-bg-invert text-text-primary text-left text-[13px] leading-[20px]",
            "border border-transparent rounded-md appearance-none focus:outline-none focus:ring-0",
            "focus:border-primary-100 focus:shadow-active-input focus:bg-surface-bgInvert",
            "group-focus-within:border-primary-100 group-focus-within:shadow-active-input group-focus-within:bg-surface-bgInvert",
            "peer disabled:!bg-surface-subdue disabled:placeholder:opacity-0 disabled:cursor-not-allowed",
            error && '!border-border-error !shadow-error bg-surface-bgInvert',
          )}
          onClick={() => setIsOpen(true)}
          onKeyDown={handleButtonKeyDown}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={`${name}-label`}
          aria-describedby={error ? `${name}-error` : undefined}
          id={`${name}-button`}
          disabled={props.disabled}
          tabIndex={0}
          onBlur={handleBlur}
        >
          <span className={classNames(
            selectedOption ? 'text-text-primary' : 'text-text-subdued',
            !selectedOption && isOpen && 'text-text-subdued group-focus:opacity-100',
            !selectedOption && !isOpen && 'group-focus:opacity-0',
          )}>
            {selectedOption ? selectedOption.label : isOpen ? '' : props.placeholder}
          </span>
          <svg className="h-5 w-5 text-text-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        {isOpen && (
          <ul
            className="absolute z-50 mt-2 w-full p-1 bg-white shadow-lg rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            role="listbox"
            aria-labelledby={`${name}-label`}
            id={`${name}-list`}
            tabIndex={-1}
            onKeyDown={handleKeyDown}
          >
            {options.map((option: SelectOption, index: number) => (
              <li
                key={option.value}
                ref={(el: HTMLLIElement | null) => { optionsRef.current[index] = el; }}
                className={`cursor-pointer rounded-md text-[14px] leading-[22px] select-none relative py-[5px] px-2 font-medium
                  ${option.value === value ? 'bg-surface-active' : ''}
                  hover:bg-surface-active focus:bg-surface-active focus:outline-none`}
                onClick={() => handleSelect(option)}
                onKeyDown={(event) => handleOptionKeyDown(event, option)}
                role="option"
                tabIndex={0}
                aria-selected={option.value === value}
                id={`${name}-option-${option.value}`}
                onBlur={handleBlur}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </BaseInput>
  );
};

export default CustomSelect;