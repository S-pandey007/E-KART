import {z} from "zod";

const phoneRegex = /^[6-9]\d{9}$/; // India-friendly
const postalCodeRegex = /^[0-9]{5,6}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const addressSchema = z.object({
    name:z.string().min(2,"Name should be at least 2 characters"),

    phone:z.string().regex(phoneRegex,"Invalid phone number"),
    altPhone:z.string().regex(phoneRegex,"Invalid alternate phone number").optional(),

    email:z.string().regex(emailRegex,"Invalid email address"),

    addressType:z.string().min(1,"Address Type is required").optional(),

    addressLine1:z.string().min(2,"Address required"),
    addressLine2:z.string().optional(),

    landmark:z.string().optional(),

    city:z.string().min(2,"City required"),
    state:z.string().min(2,"State required"),
    postalCode:z.string().regex(postalCodeRegex,"Invalid Postal Code"),
    country:z.string().min(2,"Country required"),
})

export type AddressType = z.infer<typeof addressSchema>;