import React from 'react';
import BaseInput, { BaseInputProps } from './BaseInput';
import classNames from "@/utils/classNames";

interface TextInputProps extends Omit<BaseInputProps, 'value' | 'onChange'> {
  type?: 'text' | 'email' | 'password';
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomTextInput: React.FC<TextInputProps> = ({ type = 'text', className, error, ...props }) => {
  return (
    <BaseInput {...props} error={error}>
      <input
        type={type}
        id={props.name}
        className={classNames(
          "block rounded-[6px] px-[18px] pb-2.5 pt-5 w-full text-[13px] leading-[20px]",
          "placeholder:text-text-subdued text-text-primary bg-bg-invert",
          "border border-transparent appearance-none focus:outline-none focus:ring-0",
          "focus:border-primary-100 focus:shadow-active-input focus:bg-surface-bgInvert",
          "peer disabled:!bg-surface-subdue disabled:placeholder:opacity-0",
          !props.value && "placeholder:opacity-100 focus:placeholder:opacity-100",
          error && '!border-border-error !shadow-error bg-surface-bgInvert',
          className
        )}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
        disabled={props.disabled}
        aria-invalid={!!error}
        aria-describedby={error ? `${props.name}_error_help` : undefined}
      />
    </BaseInput>
  );
};

export default CustomTextInput;