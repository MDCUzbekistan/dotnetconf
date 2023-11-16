"use client";
import React from "react";
import styles from "./input-field.module.css";

function InputField({
  label,
  required,
  inputType,
  inputName,
  errorMessage,
  inputPlaceholder,
}) {
  const id = React.useId();

  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {label} {required && <span className={styles.asterisk}>*</span>}
      </label>
      <input
        className={styles.input}
        placeholder={inputPlaceholder}
        name={inputName}
        type={inputType}
        id={id}
      />
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
}

export default InputField;
