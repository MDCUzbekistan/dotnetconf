"use server";
import { axiosInstance } from "@/axios";
import { z } from "zod";

const RegistrationSchema = z.object({
  firstName: z.string().min(1, "Please provide a first name"),
  lastName: z.string().min(1, "Please provide a last name"),
  email: z.string().email("Please provide a valid email"),
  phoneNumber: z.string().min(1, "Please provide a phone number"), // TODO: validation?
  preferredLanguage: z.coerce.number(),
  country: z.string().min(1, "Please provide a country"),
  city: z.string().min(1, "Please provide a city"),
  role: z.coerce.number(),
  position: z.coerce.number(),
  expectation: z.string().min(1, "Please provide an expectation"),
  teamname: z.string().min(1, "Please provide a team name"),
});

export async function register(prevState: any, formData: FormData) {
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
    preferredLanguage: "1",
    teamname: formData.get("teamname"),
  });

  if (validatedFields.success === false) {
    return {
      message: `Invalid fields`,
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await axiosInstance.post(`/users`, validatedFields.data);

    return {
      success: true,
      message: `You have been registered successfully.`,
    };
  } catch (error: any) {
    // console.log(error);

    const message =
      error.message || "Something went wrong. Please try again later.";

    return {
      success: false,
      message,
    };
  }
}
