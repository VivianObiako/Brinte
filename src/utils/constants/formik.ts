import * as yup from "yup";
import { urlStructure } from "./variables";

export const contactFormSchema = yup.object({
    firstName: yup.string().required("First name is required").min(2, "Invalid input"),
    lastName: yup.string().required("Last name is required").min(2, "Invalid input"),
    email: yup.string().required("Email is required").email("Invalid email"),
    companyName: yup.string().required("Company name is required").min(2, "Invalid input"),
    websiteUrl: yup.string().required("Website URL is required").matches(urlStructure, "Invalid URL"),
    foundUs:yup.string().required("Please Select an option"),
    message: yup.string().required("Message is required").min(2, "Invalid input"),
});