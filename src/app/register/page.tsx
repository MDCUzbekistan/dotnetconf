"use client";
import React from "react";
import styles from "./register.module.css";
import Heading from "@/components/heading";
import {
  FormField,
  Input,
  Checkbox,
  Select,
  SelectItem,
} from "@/components/form-field/form-field";
import { useFormState } from "react-dom";
import { register } from "./actions";
import Submit from "@/components/submit";
import { useToast } from "@/components/toast/toast";
import { redirect, useRouter } from "next/navigation";
import { ROLES } from "@/data";

const Page = () => {
  const { openToast } = useToast();
  const router = useRouter();
  const [preferredLanguage, setPreferredLanguage] = React.useState("0");
  const registerWithPreferredLanguage = register.bind(null, preferredLanguage);
  const [state, formAction] = useFormState(registerWithPreferredLanguage, {
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

    redirect("/");
  }, [state, router, openToast]);

  return (
    <section className={styles.wrapper}>
      <Heading level={1} className={styles.title}>
        Register
      </Heading>
      <form action={formAction} className={styles.form}>
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
          label="Where are you from (Country)?"
          errorMessage={state.errors?.country}
          required={true}
        >
          <Input name="country" placeholder="Example: Uzbekistan" type="text" />
        </FormField>
        <FormField
          label="Where are you from (City)?"
          errorMessage={state.errors?.city}
          required={true}
        >
          <Input name="city" placeholder="Example: Tashkent" type="text" />
        </FormField>
        <FormField
          label="What are your expectations for conference?"
          errorMessage={state.errors?.expectation}
          required={true}
        >
          <Input
            name="expectation"
            placeholder="Enter you answer"
            type="text"
          />
        </FormField>
        <FormField label="Preferred Language" required={true}>
          <div className={styles.checkboxesWrapper}>
            <Checkbox
              checked={preferredLanguage === "0"}
              onCheckedChange={() => setPreferredLanguage("0")}
              className={styles.checkbox}
              label="Uzbek"
            />
            <Checkbox
              checked={preferredLanguage === "1"}
              onCheckedChange={() => setPreferredLanguage("1")}
              name="1"
              className={styles.checkbox}
              label="English"
            />
            <Checkbox
              onCheckedChange={() => setPreferredLanguage("2")}
              checked={preferredLanguage === "2"}
              name="2"
              className={styles.checkbox}
              label="Russian"
            />
          </div>
        </FormField>
        <Submit className={styles.submitBtn} variant="filled">
          Submit
        </Submit>
      </form>
    </section>
  );
};

export default Page;
