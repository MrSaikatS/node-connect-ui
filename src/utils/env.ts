import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string({ required_error: "Api Url is required" }),
  NEXT_PUBLIC_DIRECTUS_SECRET: z.string({
    required_error: "DIRECTUS_SECRET is required",
  }),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_DIRECTUS_SECRET: process.env.NEXT_PUBLIC_DIRECTUS_SECRET,
});
