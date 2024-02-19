"use server";
import { axiosInstance } from "@/axios";
import { z } from "zod";

const RegistrationSchema = z.object({
  firstName: z.string().min(1, "Please provide a first name"),
  lastName: z.string(),
  email: z.string().email("Please provide a valid email"),
  phoneNumber: z.string().min(1, "Please provide a phone number"), // TODO: validation?
  preferredLanguage: z.coerce.number(),
  country: z.string().min(1, "Please provide a country"),
  city: z.string().min(1, "Please provide a city"),
  role: z.coerce.number().min(1, "Please provide a role"),
  position: z.coerce.number().min(1, "Please provide a position"),
  expectation: z.string().min(1, "Please provide an expectation"),
});

export async function register(
  preferredLanguage: string,
  prevState: any,
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
    position: formData.get("position"),
    preferredLanguage,
  });

  if (validatedFields.success === false) {
    return {
      message: `Invalid fields`,
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  console.log(validatedFields.data);

  try {
    await axiosInstance.post(`/users`, validatedFields.data);

    return {
      success: true,
      message: `You have been registered successfully.`,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.response.data.message,
    };
  }
}
