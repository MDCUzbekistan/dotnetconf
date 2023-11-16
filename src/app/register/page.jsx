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
import Toast from "@/components/toast";
import { redirect, useRouter } from "next/navigation";

const ROLES = [
  {
    id: 1,
    title: "Architect",
    value: "1",
  },
  {
    id: 2,
    title: "Data analyst",
    value: "2",
  },
  {
    id: 3,
    title: "Data Engineer",
    value: "3",
  },
  {
    id: 4,
    title: "Data Scientist",
    value: "4",
  },
  {
    id: 5,
    title: "Developer",
    value: "5",
  },
  {
    id: 6,
    title: "Designer",
    value: "6",
  },
  {
    id: 7,
    title: "Devops",
    value: "7",
  },
  {
    id: 8,
    title: "Entrepreneur",
    value: "8",
  },
  {
    id: 9,
    title: "Executive",
    value: "9",
  },
  {
    id: 10,
    title: "Marketing",
    value: "10",
  },
  {
    id: 11,
    title: "Machine Learning Engineer",
    value: "11",
  },
  {
    id: 12,
    title: "Network Engineer",
    value: "12",
  },
  {
    id: 13,
    title: "Product Manager",
    value: "13",
  },
  {
    id: 14,
    title: "Undergraduate student",
    value: "14",
  },
  {
    id: 15,
    title: "Graduate student",
    value: "15",
  },
  {
    id: 16,
    title: "Sales",
    value: "16",
  },
  {
    id: 17,
    title: "QA",
    value: "17",
  },
  {
    id: 18,
    title: "Other",
    value: "18",
  },
];

const Page = () => {
  const router = useRouter();
  const [preferredLanguage, setPreferredLanguage] = React.useState("0");
  const registerWithPreferredLanguage = register.bind(null, preferredLanguage);
  const [toast, setToast] = React.useState({
    open: false,
    status: "",
    title: "Successfully submitted!",
  });

  const [state, formAction] = useFormState(registerWithPreferredLanguage, {
    message: ``,
    success: false,
  });

  React.useEffect(() => {
    if (!state.success) {
      if (state.message === "User already exsist") {
        setToast({
          open: true,
          status: "error",
          title: "User already exists!",
        });
      }

      return;
    }

    setToast({
      open: true,
      status: "success",
      title: state.message,
    });

    setTimeout(() => {
      console.log(123);
      router.push("/");
    }, 1200);
  }, [state, router]);

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
          <Input name="phoneNumber" placeholder="Phone number" type="text" />
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
      <Toast
        open={toast.open}
        title={toast.title}
        status={toast.status}
        onOpenChange={() => {
          setToast({
            open: false,
            title: "",
            status: "",
          });
        }}
      />
    </section>
  );
};

export default Page;
