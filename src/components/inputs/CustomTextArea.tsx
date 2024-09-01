import React from 'react';
import BaseInput, { BaseInputProps } from './BaseInput';
import classNames from '@/utils/classNames';

interface TextareaInputProps extends Omit<BaseInputProps, 'value' | 'onChange'> {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

const TextareaInput: React.FC<TextareaInputProps> = ({ ...props }) => (
    <BaseInput {...props}>
        <textarea
            id={props.name}
            aria-invalid={!!props.error}
            className={classNames(
                "block rounded-[6px] p-3 w-full text-[13px] leading-[20px] h-[160px]",
                "placeholder:text-text-subdued hover:placeholder:text-text-secondary text-text-primary",
                "bg-bg-invert border border-transparent appearance-none focus:outline-none",
                "focus:ring-0 focus:border-primary-100 focus:shadow-active-input focus:bg-surface-bgInvert",
                "peer disabled:!bg-surface-subdue disabled:placeholder:opacity-0", 
                props.error && '!border-border-error !shadow-error bg-surface-bgInvert',
            )}
            name={props.name}
            aria-describedby={props.error ? `${props.name}_error_help` : undefined}
            {...props}
        />
    </BaseInput>
);

export default TextareaInput;