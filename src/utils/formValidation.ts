import { ContactFormType, contactFormFields } from '@/models/data';

type ValidationErrors = Partial<Record<keyof ContactFormType, string>>;

const isValidEmail = (email: string): boolean => 
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const isValidUrl = (url: string): boolean => 
  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i.test(url);

export const validateContactForm = (values: ContactFormType): ValidationErrors => {
  const errors: ValidationErrors = {};

  Object.entries(contactFormFields).forEach(([key, field]) => {
    const value = values[key as keyof ContactFormType];
    if (!value) {
      errors[key as keyof ContactFormType] = `${field.label} is required`;
    } else {
      switch (field.type) {
        case 'text':
        case 'textarea':
          if (value.length < 2) errors[key as keyof ContactFormType] = 'Invalid input';
          break;
        case 'email':
          if (!isValidEmail(value)) errors.email = 'Invalid email address';
          break;
        case 'select':
          if (field.options && !field.options.some(option => option.value === value)) {
            errors[key as keyof ContactFormType] = 'Invalid selection';
          }
          break;
      }
    }

    if (key === 'websiteUrl' && value && !isValidUrl(value)) {
      errors.websiteUrl = 'Invalid URL';
    }
  });

  return errors;
};