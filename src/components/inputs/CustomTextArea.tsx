import { CustomTextAreaProps } from "@/models/shared";
import clsx from "clsx";
import { Textarea } from "flowbite-react";



const CustomTextArea: React.FC<CustomTextAreaProps> = ({
    label,
    value,
    onChange,
    placeholder,
    disabled,
    error,
    maxLength,
    name,
    ...props
}) => {
    return (
        <div className="relative">
            <Textarea  
                id={name}
                name={name}
                className={classNames("block rounded-[6px] p-3 w-full text-[13px] leading-[20px] h-[160px] placeholder:text-text-subdued hover:placeholder:text-text-secondary text-text-primary bg-bg-invert dark:bg-gray-700 border border-transparent appearance-none focus:outline-none focus:ring-0 focus:border-primary-100 focus:shadow-active-input focus:bg-surface-bgInvert  peer disabled:!bg-surface-subdue disabled:placeholder:opacity-0", 
                    error && '!border-border-error !shadow-error bg-surface-bgInvert',
                )} 
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={maxLength}
                disabled={disabled}
                {...props}
            />
            {error && <p id="filled_error_help" className="mt-2 text-xs text-text-error">
                <span className="text-xs leading-[18px]">
                    {error}
                </span>
            </p>}
        </div>
    );
};

export default CustomTextArea;
