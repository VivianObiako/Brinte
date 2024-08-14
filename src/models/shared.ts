export interface BadgeProps {
    title: string;
    classNames?: string;
}

export interface CustomLinkProps {
    href: string;
    inert?: boolean;
    children: React.ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant: 'primary' | 'secondary' | 'tertiary'; // Button type
    className?: string;
    loading?: boolean;
}