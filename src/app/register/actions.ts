import axios from "axios";
import { z } from "zod";

const RegistrationSchema = z.object({
  full_name: z.string().min(3, "Minimum length should be 3"),
  email: z.string().email("Please provide a valid email"),
  phone_number: z
    .string()
    .min(5, "Phone number should be minimum 5 numbers length"),
  country: z.string().min(3, "Please provide text with more than 3 characters"),
  city: z.string().min(2, "Please provide text with more than 2 characters"),
  expectations: z
    .string()
    .min(3, "Please provide text with more than 3 characters"),
});

type RegistrationState = {
  errors?: {
    full_name?: string[];
    email?: string[];
    phone_number?: string[];
    country?: string[];
    city?: string[];
    expectations?: string[];
  };
  success: boolean;
  message: string;
};

export async function register(
  prevState: RegistrationState,
  formData: FormData
) {
  const validatedFields = RegistrationSchema.safeParse({
    full_name: formData.get("full_name"),
    email: formData.get("email"),
    phone_number: formData.get("phone_number"),
    country: formData.get("country"),
    city: formData.get("city"),
    expectations: formData.get("expectations"),
  });

  if (validatedFields.success === false) {
    return {
      message: `Invalid fields`,
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });

    return {
      success: true,
      message: `Successfully registered!`,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: `Server error, see server logs`,
    };
  }
}
