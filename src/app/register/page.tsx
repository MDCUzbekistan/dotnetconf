"use client";
import React from "react";
import styles from "./register.module.css";
import Heading from "@/components/heading";
import {
  FormField,
  Input,
  Select,
  SelectItem,
} from "@/components/form-field/form-field";
import { useFormState } from "react-dom";
import { register } from "./actions";
import Submit from "@/components/submit";
import { useToast } from "@/components/toast/toast";
import { notFound, redirect, useRouter } from "next/navigation";
import { CIS_COUNTRIES, POSITIONS, ROLES } from "@/data";

export const dynamic = "force-dynamic";

const Page = () => {
  notFound();

  const { openToast } = useToast();
  const router = useRouter();
  const [state, formAction] = useFormState(register, {
    message: ``,
    success: false,
  });

  React.useEffect(() => {
    if (!state.success) {
      if (state.message) {
        openToast({
          status: "error",
          title: state.message,
        });
      }
      return;
    }

    openToast({
      status: "success",
      title: state.message,
    });

    setTimeout(() => {
      window.open("https://t.me/+pmGMZNEYxAdmMWQ6", "_blank");
    }, 1000);
    redirect("/");
  }, [state, router, openToast]);

  return (
    <section className={styles.wrapper}>
      <Heading level={1} className={styles.title}>
        Register
      </Heading>
      <form action={formAction} className={styles.form}>
        <FormField
          label="Team name"
          required={true}
          errorMessage={state.errors?.teamname}
        >
          <Input name="teamname" placeholder="Team name" type="text" />
        </FormField>
        <FormField
          label="First name"
          required={true}
          errorMessage={state.errors?.firstName}
        >
          <Input name="firstName" placeholder="First name" type="text" />
        </FormField>
        <FormField
          label="Last name"
          required={true}
          errorMessage={state.errors?.lastName}
        >
          <Input name="lastName" placeholder="Last name" type="text" />
        </FormField>
        <FormField
          label="Email"
          required={true}
          errorMessage={state.errors?.email}
        >
          <Input name="email" placeholder="Email" type="email" />
        </FormField>
        <FormField
          label="Choose the best-fitting title or role"
          required={true}
          errorMessage={state.errors?.role}
        >
          <Select name="role" placeholder="Select a role">
            {ROLES.map((role) => {
              return (
                <SelectItem value={role.value} key={role.id}>
                  {role.title}
                </SelectItem>
              );
            })}
          </Select>
        </FormField>
        <FormField
          label="Choose your position"
          required={true}
          errorMessage={state.errors?.position}
        >
          <Select name="position" placeholder="Select a position">
            {POSITIONS.map((role) => {
              return (
                <SelectItem value={role.value.toString()} key={role.id}>
                  {role.title}
                </SelectItem>
              );
            })}
          </Select>
        </FormField>
        <FormField
          label="Where are you from (Country)?"
          errorMessage={state.errors?.country}
          required={true}
        >
          <Select name="country" placeholder="Example: Uzbekistan">
            {CIS_COUNTRIES.map((item) => {
              return (
                <SelectItem value={item.value} key={item.id}>
                  {item.title}
                </SelectItem>
              );
            })}
          </Select>
        </FormField>
        <FormField
          label="Phone number"
          errorMessage={state.errors?.phoneNumber}
          required={true}
        >
          <Input
            name="phoneNumber"
            placeholder="Example: +998991234567"
            type="text"
          />
        </FormField>
        <FormField
          label="Where are you from (City)?"
          errorMessage={state.errors?.city}
          required={true}
        >
          <Input name="city" placeholder="Example: Tashkent" type="text" />
        </FormField>
        <FormField
          label="What are your expectations for hackathon?"
          errorMessage={state.errors?.expectation}
          required={true}
        >
          <Input
            name="expectation"
            placeholder="Enter you answer"
            type="text"
          />
        </FormField>
        <Submit className={styles.submitBtn} variant="filled">
          Submit
        </Submit>
      </form>
    </section>
  );
};

export default Page;
