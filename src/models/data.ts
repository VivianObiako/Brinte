export type FieldOption = { value: string; label: string };

export type FormFieldConfig = {
    name: string;
    label: string;
    type: 'text' | 'email' | 'select' | 'textarea';
    options?: FieldOption[];
};

export const contactFormFields: Record<string, FormFieldConfig> = {
    firstName: { name: 'firstName', label: 'First name', type: 'text' },
    lastName: { name: 'lastName', label: 'Last name', type: 'text' },
    email: { name: 'email', label: 'Email', type: 'email' },
    companyName: { name: 'companyName', label: 'Company name', type: 'text' },
    websiteUrl: { name: 'websiteUrl', label: 'Website URL', type: 'text' },
    foundUs: { 
        name: 'foundUs', 
        label: 'How did you find us?', 
        type: 'select',
        options: [
            { value: 'searchEngine', label: 'Search engine' },
            { value: 'recommended', label: 'Recommended by friends or colleague' },
            { value: 'socialMedia', label: 'Social media' },
            { value: 'blog', label: 'Blog or publication' },
            { value: 'others', label: 'Others' },
        ]
    },
    message: { name: 'message', label: 'Message', type: 'textarea' },
};

export type ContactFormType = {
    [K in keyof typeof contactFormFields]: string;
};