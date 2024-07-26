import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(20, { message: "Password must be at most 20 characters" }),
});

export const registerSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(20, { message: "Password must be at most 20 characters" }),
});

// export const createPostSchema = z.object({
//   caption: z
//     .string()
//     .min(2, { message: "Caption must be at least 2 characters" }),
//   // postImg: z.instanceof(File),
// });

// export const updateProfileSchema = z.object({
//   first_name: z
//     .string()
//     .min(2, { message: "First name must be at least 2 characters" }),
//   last_name: z
//     .string()
//     .min(3, { message: "Last name must be at least 3 characters" }),
//   title: z.string().min(5, { message: "Title must be at least 5 characters" }),
//   description: z
//     .string()
//     .min(10, { message: "Description must be at least 10 characters" }),
// });
