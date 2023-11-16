import React from "react";
import styles from "./register.module.css";
import Heading from "@/components/heading";
import Button from "@/components/button";
import InputField from "@/components/input-field";

const Page = () => {
  return (
    <section className={styles.wrapper}>
      <Heading level={1} className={styles.title}>
        Register
      </Heading>
      <form className={styles.form}>
        <InputField
          inputName="fullname"
          inputPlaceholder="Full name"
          inputType="text"
          label="Full name"
          required={true}
        />
        <InputField
          inputName="email"
          inputPlaceholder="Email"
          inputType="email"
          label="Email"
          required={true}
        />
        <InputField
          inputName="phone_number"
          inputPlaceholder="Phone number"
          inputType="number"
          label="Phone number"
          required={true}
        />
        <InputField
          inputName="country"
          inputPlaceholder="Example: Uzbekistan"
          inputType="text"
          label="Where are you from (Country)?"
          required={true}
        />
        <InputField
          inputName="city"
          inputPlaceholder="Example: Tashkent"
          inputType="text"
          label="Where are you from (City)?"
          required={true}
        />
        <InputField
          inputName="city"
          inputPlaceholder="Enter you answer"
          inputType="text"
          label="What are your expectations for Microsoft Ignite 2023?"
          required={true}
        />
        <Button className={styles.submitBtn} variant="filled">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default Page;
