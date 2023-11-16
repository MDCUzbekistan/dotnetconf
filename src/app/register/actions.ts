import { z } from "zod";

const RegistrationSchema = z.object({
  full_name: z.string().min(3, "Minimum length should be 3"),
  email: z.string().email("Please provide a valid email"),
  phone_number: z
    .string()
    .startsWith("+998", "Phone number should start with +998")
    .min(5, "Phone number should be minimum 5 numbers length"),
  country: z.string().min(3, "Please provide text with more than 3 characters"),
  city: z.string().min(2, "Please provide text with more than 2 characters"),
  expectations: z
    .string()
    .min(3, "Please provide text with more than 3 characters"),
});
