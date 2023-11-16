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
} from "@/components/form-field";
import { useFormState } from "react-dom";
import { register } from "./actions";
import Submit from "@/components/submit";

const ROLES = [
  {
    id: 1,
    title: "Architect",
    value: "architect",
  },
  {
    id: 2,
    title: "Data analyst",
    value: "data-analyst",
  },
  {
    id: 3,
    title: "Data Engineer",
    value: "data-engineer",
  },
  {
    id: 4,
    title: "Data Scientist",
    value: "data-scientist",
  },
  {
    id: 5,
    title: "Developer",
    value: "developer",
  },
  {
    id: 6,
    title: "Designer",
    value: "designer",
  },
  {
    id: 7,
    title: "Devops",
    value: "devops",
  },
  {
    id: 8,
    title: "Entrepreneur",
    value: "entrepreneur",
  },
  {
    id: 9,
    title: "Executive",
    value: "executive",
  },
  {
    id: 10,
    title: "Marketing",
    value: "marketing",
  },
  {
    id: 11,
    title: "Machine Learning Engineer",
    value: "machine-learning-engineer",
  },
  {
    id: 12,
    title: "Network Engineer",
    value: "network-engineer",
  },
  {
    id: 13,
    title: "Product Manager",
    value: "product-manager",
  },
  {
    id: 14,
    title: "Undergraduate student",
    value: "undergraduate-student",
  },
  {
    id: 15,
    title: "Graduate student",
    value: "graduate-student",
  },
  {
    id: 16,
    title: "Sales",
    value: "sales",
  },
  {
    id: 17,
    title: "QA",
    value: "qa",
  },
  {
    id: 18,
    title: "Other",
    value: "other",
  },
];

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
        <FormField
          label="Full name"
          required={true}
          errorMessage={state.errors?.full_name}
        >
          <Input name="full_name" placeholder="Full name" type="text" />
        </FormField>
        <FormField
          label="Email"
          required={true}
          errorMessage={state.errors?.email}
        >
          <Input name="email" placeholder="Email" type="email" />
        </FormField>
        <FormField
          label="Phone number"
          errorMessage={state.errors?.phone_number}
          required={true}
        >
          <Input name="phone_number" placeholder="Phone number" type="number" />
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
          label="What are your expectations for Microsoft Ignite 2023?"
          errorMessage={state.errors?.expectations}
          required={true}
        >
          <Input
            name="expectations"
            placeholder="Enter you answer"
            type="text"
          />
        </FormField>
        <FormField label="Preferred Language" required={true}>
          <Checkbox className={styles.checkbox} label="Uzbek" />
          <Checkbox className={styles.checkbox} label="Russian" />
          <Checkbox className={styles.checkbox} label="English" />
        </FormField>
        <FormField
          label="Choose the best-fitting title or role"
          required={true}
        >
          <Select placeholder="Select a value">
            {ROLES.map((role) => {
              return (
                <SelectItem value={role.value} key={role.id}>
                  {role.title}
                </SelectItem>
              );
            })}
          </Select>
        </FormField>
        <Submit className={styles.submitBtn} variant="filled">
          Submit
        </Submit>
      </form>
    </section>
  );
};

export default Page;
