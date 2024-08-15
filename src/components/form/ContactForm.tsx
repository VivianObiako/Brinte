'use client';

import { ContactFormProps } from '@/models/shared'
import React from 'react'
import CustomButton from '../common/CustomButton';
import { useFormik } from "formik";
import { contactFormSchema } from '@/utils/constants/formik';
import { ContactFormType } from '@/models/data';
import CustomTextInput from '../inputs/CustomTextInput';
import CustomSelect from '../inputs/CustomSelect';
import CustomTextArea from '../inputs/CustomTextArea';
import { FoundUsOptions } from '@/utils/constants/variables';

const ContactForm = ({closeForm}:ContactFormProps) => {

    const submitHandler = (values: ContactFormType) => {
        console.log(values);
        closeForm()
    }

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            companyName: "",
            websiteUrl: "",
            foundUs: "",
            message: "",
        },
        validationSchema: contactFormSchema,
        onSubmit: (values: ContactFormType) => {
            submitHandler(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4'>
            <div className='flex gap-4 flex-1 w-full'>
                <CustomTextInput
                    label="First name"
                    type="text"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.firstName ? formik.errors.firstName : undefined}
                    placeholder="First name"
                    required
                />
                <CustomTextInput
                    label="Last name"
                    name="lastName"
                    type="text"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.lastName ? formik.errors.lastName : undefined}
                    placeholder="Last name"
                    required
                />
            </div>
            <CustomTextInput
                label="Email"
                name="email"
                type='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email ? formik.errors.email : undefined}
                placeholder="Enter your first name"
                required
            />
            <CustomTextInput
                label="Company name"
                name="companyName"
                type="text"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.companyName ? formik.errors.companyName : undefined}
                placeholder="Enter your first name"
                required
            />
            <CustomTextInput
                label="Website URL"
                name="websiteUrl"
                type="text"
                value={formik.values.websiteUrl}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.websiteUrl ? formik.errors.websiteUrl : undefined}
                placeholder="Enter your first name"
                required
            />
            <CustomSelect
                label="How did you find us?"
                name="foundUs"
                value={formik.values.foundUs}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.foundUs ? formik.errors.foundUs : undefined}
                placeholder="Enter your first name"
                required
                options={FoundUsOptions}
            />
            <CustomTextArea
                label="Message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.message ? formik.errors.message : undefined}
                placeholder="Enter your first name"
                required
            />
            <CustomButton type='submit' variant='primary' className='w-fit'>Contact sales</CustomButton>
        </form>
    )
}

export default ContactForm