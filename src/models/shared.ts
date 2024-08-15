export interface BadgeProps {
    title: string;
    classNames?: string;
}
export interface HeaderProps {
    isScrolled: boolean;
}

export interface CustomLinkProps {
    href: string;
    inert?: boolean;
    children: React.ReactNode;
    className?: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant: 'primary' | 'secondary' | 'tertiary'; // Button type
    className?: string;
    loading?: boolean;
}

export interface CardProps {
    title: string;
    guideText: string;
    className?: string;
    type: "small" | "big";
    link: string;
    icon: any;
}
export interface SectionHeaderProps {
    title: string;
    description: string;
    className?: string;
}
export interface ContactFormProps {
    closeForm: ()=> void;
}

export interface Option{
    name: string;
    value: string;
}

export interface CustomSelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
    label: string;
    error?: string;
    options: Option[];
}

export interface CustomTextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: string;
}

export interface CustomTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}