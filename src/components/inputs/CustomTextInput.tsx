import { CustomTextInputProps } from "@/models/shared";
import clsx from "clsx";

const CustomTextInput: React.FC<CustomTextInputProps> = ({
    label,
    value,
    onChange,
    placeholder,
    disabled,
    error,
    maxLength,
    className,
    type,
    name,
    ...props
}) => {
    return (
        <div className="relative w-full">
            <input 
                type={type}
                name={name} 
                id={name}
                className={classNames("block rounded-[6px] px-[18px] pb-2.5 pt-5 w-full text-[13px] leading-[20px] placeholder:text-text-subdued text-text-primary bg-bg-invert dark:bg-gray-700 border border-transparent appearance-none focus:outline-none focus:ring-0 focus:border-primary-100 focus:shadow-active-input focus:bg-surface-bgInvert  peer disabled:!bg-surface-subdue disabled:placeholder:opacity-0", 
                    !value && "placeholder:opacity-0 focus:placeholder:opacity-100",
                    error && '!border-border-error !shadow-error bg-surface-bgInvert',
                    className
                )} 
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={maxLength}
                disabled={disabled}
                {...props}
            />
            <label 
                htmlFor={name} 
                className={`absolute text-[13px] leading-[20px] text-text-subdued hover:text-text-secondary duration-300 transform -translate-y-[.8rem] scale-75 top-[18px] z-10 origin-[0] start-[18px] peer-focus:text-text-subdued peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[.8rem] rtl:peer-focus:translate-x-1/2 rtl:peer-focus:left-auto ${disabled && "hover:text-text-subdued"}`}
            >
                {label}
            </label>
            {error && <p id="filled_error_help" className="mt-2 text-xs text-text-error">
                <span className="text-xs leading-[18px]">
                    {error}
                </span>
            </p>}
        </div>
    );
};

export default CustomTextInput;
