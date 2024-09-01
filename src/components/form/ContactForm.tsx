'use client';

import { ContactFormProps } from '@/models/shared'
import React from 'react'
import CustomButton from '../common/CustomButton';
import { useFormik } from "formik";
import { ContactFormType, contactFormFields } from '@/models/data';
import CustomTextInput from '../inputs/CustomTextInput';
import CustomSelect from '../inputs/CustomSelect';
import CustomTextArea from '../inputs/CustomTextArea';
import { validateContactForm } from '@/utils/formValidation';


const ContactForm: React.FC<ContactFormProps> = ({ closeForm }) => {
    const initialValues = Object.keys(contactFormFields).reduce((acc, key) => {
        acc[key as keyof ContactFormType] = '';
        return acc;
    }, {} as ContactFormType);

    const formik = useFormik<ContactFormType>({
        initialValues,
        validate: validateContactForm,
        onSubmit: (values) => {
            console.log(values);
            closeForm();
        },
    });

    const renderField = (fieldName: keyof typeof contactFormFields) => {
        const field = contactFormFields[fieldName];
        const commonProps = {
            label: field.label,
            name: field.name,
            type: field.type,
            value: formik.values[fieldName],
            onChange: formik.handleChange,
            onBlur: formik.handleBlur,
            error: formik.touched[fieldName] ? formik.errors[fieldName] : undefined,
            placeholder: `${field.label.toLowerCase()}`,
            required: true,
        };

        switch (field.type) {
            case 'select':
                return <CustomSelect {...commonProps} options={field.options?.map(option => ({ label: option.label, value: option.value })) || []} type='select' />;
            case 'textarea':
                return <CustomTextArea {...commonProps} type='textarea' />;
            default:
                return <CustomTextInput {...commonProps} type={field.type} />;
        }
    };

    return (
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
            <div className='flex gap-4 flex-1 w-full'>
                {renderField('firstName')}
                {renderField('lastName')}
            </div>
            {renderField('email')}
            {renderField('companyName')}
            {renderField('websiteUrl')}
            {renderField('foundUs')}
            {renderField('message')}
            <CustomButton type='submit' variant='primary' className='w-fit'>Contact sales</CustomButton>
        </form>
    )
}

export default ContactForm