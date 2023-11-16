"use client";
import React from "react";
import styles from "./register.module.css";
import Heading from "@/components/heading";
import InputField from "@/components/input-field";
import { useFormState } from "react-dom";
import { register } from "./actions";
import Submit from "@/components/submit";

const Page = () => {
  const [state, formAction] = useFormState(register, {
    message: ``,
    success: false,
  });

  return (
    <section className={styles.wrapper}>
      <Heading level={1} className={styles.title}>
        Register
      </Heading>
      <form action={formAction} className={styles.form}>
        <InputField
          inputName="full_name"
          inputPlaceholder="Full name"
          inputType="text"
          label="Full name"
          required={true}
          errorMessage={state.errors?.full_name}
        />
        <InputField
          inputName="email"
          inputPlaceholder="Email"
          inputType="email"
          label="Email"
          required={true}
          errorMessage={state.errors?.email}
        />
        <InputField
          inputName="phone_number"
          inputPlaceholder="Phone number"
          inputType="number"
          label="Phone number"
          errorMessage={state.errors?.phone_number}
          required={true}
        />
        <InputField
          inputName="country"
          inputPlaceholder="Example: Uzbekistan"
          inputType="text"
          label="Where are you from (Country)?"
          errorMessage={state.errors?.country}
          required={true}
        />
        <InputField
          inputName="city"
          inputPlaceholder="Example: Tashkent"
          inputType="text"
          label="Where are you from (City)?"
          errorMessage={state.errors?.city}
          required={true}
        />
        <InputField
          inputName="expectations"
          inputPlaceholder="Enter you answer"
          inputType="text"
          label="What are your expectations for Microsoft Ignite 2023?"
          errorMessage={state.errors?.expectations}
          required={true}
        />
        <Submit className={styles.submitBtn} variant="filled">
          Submit
        </Submit>
      </form>
    </section>
  );
};

export default Page;
