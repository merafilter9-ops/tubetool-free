import { z } from 'zod';

export const SignupSchema = {
    schema: z.object({
        firstName: z.string().min(2, { message: "Enter at least 2 characters" }).max(50, { message: "Enter at most 50 characters" }),
        lastName: z.string().min(2, { message: "Enter at least 2 characters" }).max(50, { message: "Enter at most 50 characters" }),
        email: z.string().email({ message: "Enter a valid email" }),
        password: z.string().min(2, { message: "Enter at least 2 characters" }),
    }),
    defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    },
}

export const otpSchema = {
    schema: z.object({
        otp: z.string().min(6, { message: "Enter a valid OTP" }),
    }),
    defaultValues: {
        otp: "",
    },
}

export const SigninSchema = {
    schema: z.object({
        email: z.string().email({ message: "Enter a valid email" }),
        password: z.string().min(1, { message: "Enter your password" }),
    }),
    defaultValues: {
        email: "",
        password: "",
    },
}

export const ResetPasswordSchema = {
    schema: z.object({
        email: z.string().email({ message: "Enter a valid email" }),
    }),
    defaultValues: {
        email: "",
    },
}

export const ProfileSchema = {
    schema: z.object({
        firstName: z.string().max(50, { message: "Enter at most 50 characters" }),
        lastName: z.string().max(50, { message: "Enter at most 50 characters" }),
        country: z.string().optional(),
    }),
    defaultValues: {
        firstName: "",
        lastName: "",
        country: "",
    },
}

export const ChangePasswordSchema = {
    schema: z.object({
        currentPassword: z.string().min(2, { message: "Password must be 2 character long" }),
        newPassword: z.string().min(2, { message: "Password must be 2 character long" }),
        confirmNewPassword: z.string().min(2, { message: "Password must be 2 character long" }),
    }).refine(data => data.newPassword === data.confirmNewPassword, {
        message: "New passwords don't match",
        path: ["confirmNewPassword"],
    }),
    defaultValues: {
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    },
}

export const ProjectSchema = {
    schema: z.object({
        title: z.string().min(2, { message: "Enter at least 2 characters" }),
        description: z.string().min(2, { message: "Enter at least 2 characters" }),
        budget: z.string().min(1, { message: "Enter a valid budget" }),
        deadline: z.string(),
        currency: z.string().default("USD"),
    }),
    defaultValues: {
        title: "",
        description: "",
        budget: "0",
        deadline: "",
        currency: "USD"
    },
}

export const TaskSchema = {
    schema: z.object({
        title: z.string().min(2, { message: "Enter at least 2 characters" }),
        description: z.string().optional(),
        budget: z.string().min(0, { message: "Enter a valid budget" }),
        deadline: z.string(),
        currency: z.string().default("USD"),
    }),
    defaultValues: {
        title: "",
        description: "",
        budget: "0",
        deadline: "",
        currency: "USD"
    },
}