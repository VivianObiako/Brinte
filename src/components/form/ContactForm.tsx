'use client';

import { ContactFormProps } from '@/models/shared'
import React from 'react'
import CustomButton from '../common/CustomButton';
import { useFormik } from "formik";
import { contactFormSchema } from '@/utils/constants/formik';
import { ContactFormType } from '@/models/data';

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
        <form onSubmit={formik.handleSubmit}>
            <input type="text" />
            <CustomButton type='submit' variant='primary'>Contact sales</CustomButton>
        </form>
    )
}

export default ContactForm