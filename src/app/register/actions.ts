import axios from "axios";
import { z } from "zod";

const RegistrationSchema = z.object({
  firstName: z.string().min(3, "Minimum length should be 3"),
  lastName: z.string().min(3, "Minimum length should be 3"),
  email: z.string().email("Please provide a valid email"),
  phoneNumber: z.string(),
  preferredLanguage: z.coerce.number(),
  country: z.string().min(3, "Please provide text with more than 3 characters"),
  city: z.string().min(2, "Please provide text with more than 2 characters"),
  role: z.coerce.number(),
  expectation: z
    .string()
    .min(3, "Please provide text with more than 3 characters"),
});

type RegistrationState = {
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    phoneNumber?: string[];
    preferredLanguage: string[];
    country?: string[];
    city?: string[];
    role?: string[];
    expectation?: string[];
  };
  success: boolean;
  message: string;
};

export async function register(
  preferredLanguage: string,
  prevState: RegistrationState,
  formData: FormData
) {
  const validatedFields = RegistrationSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phoneNumber: formData.get("phoneNumber"),
    country: formData.get("country"),
    city: formData.get("city"),
    expectation: formData.get("expectation"),
    role: formData.get("role"),
    preferredLanguage,
  });

  if (validatedFields.success === false) {
    return {
      message: `Invalid fields`,
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    console.log(validatedFields.data);
    await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users`,
      validatedFields.data
    );

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
