import React from "react";
import styles from "./form-field.module.css";
import * as CheckboxPrimitives from "@radix-ui/react-checkbox";
import * as SelectPrimitives from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

const FormFieldContext = React.createContext({
  id: "",
});

interface FormFieldProps {
  label: string;
  required?: boolean;
  errorMessage?: string[];
  children: React.ReactNode;
}

function FormField({
  label,
  required,
  errorMessage,
  children,
}: FormFieldProps) {
  const id = React.useId();

  return (
    <FormFieldContext.Provider value={{ id }}>
      <div>
        <label htmlFor={id} className={styles.label}>
          {label} {required && <span className={styles.asterisk}>*</span>}
        </label>
        {children}
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      </div>
    </FormFieldContext.Provider>
  );
}

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  className?: string;
}

function Input({ className, ...props }: InputProps) {
  const { id } = React.useContext(FormFieldContext);
  return (
    <input id={id} className={`${className} ${styles.input}`} {...props} />
  );
}

interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitives.Root> {
  label: string;
  className?: string;
}

function Checkbox({ label, className, ...props }: CheckboxProps) {
  const checkboxId = React.useId();

  return (
    <div className={`${className} ${styles.checkboxWrapper}`}>
      <CheckboxPrimitives.Root
        id={checkboxId}
        className={styles.checkbox}
        {...props}
      >
        <CheckboxPrimitives.Indicator className={styles.Indicator}>
          <Check size={16} />
        </CheckboxPrimitives.Indicator>
      </CheckboxPrimitives.Root>
      <label htmlFor={checkboxId} className={styles.checkboxLabel}>
        {label}
      </label>
    </div>
  );
}

interface SelectProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitives.Root> {
  placeholder?: string;
  children: React.ReactNode;
  className?: string;
}

function Select({ className, placeholder, children, ...props }: SelectProps) {
  const { id } = React.useContext(FormFieldContext);

  return (
    <SelectPrimitives.Root {...props}>
      <SelectPrimitives.Trigger id={id} className={styles.selectTrigger}>
        <SelectPrimitives.Value placeholder={placeholder} />
        <SelectPrimitives.Icon className={styles.selectIcon}>
          <ChevronDown size={16} />
        </SelectPrimitives.Icon>
      </SelectPrimitives.Trigger>
      <SelectPrimitives.Portal>
        <SelectPrimitives.Content className={styles.selectContent}>
          <SelectPrimitives.ScrollUpButton className={styles.selectScrollBtn}>
            <ChevronUp size={16} />
          </SelectPrimitives.ScrollUpButton>
          <SelectPrimitives.Viewport>{children}</SelectPrimitives.Viewport>
          <SelectPrimitives.ScrollDownButton className={styles.selectScrollBtn}>
            <ChevronDown size={16} />
          </SelectPrimitives.ScrollDownButton>
        </SelectPrimitives.Content>
      </SelectPrimitives.Portal>
    </SelectPrimitives.Root>
  );
}

interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitives.Item> {
  className?: string;
  children: React.ReactNode;
}

function SelectItem({ className, children, ...props }: SelectItemProps) {
  return (
    <SelectPrimitives.Item
      className={`${className} ${styles.selectItem}`}
      {...props}
    >
      <SelectPrimitives.SelectItemText>
        {children}
      </SelectPrimitives.SelectItemText>
      <SelectPrimitives.ItemIndicator>
        <Check size={16} />
      </SelectPrimitives.ItemIndicator>
    </SelectPrimitives.Item>
  );
}

export { FormField, Input, Checkbox, Select, SelectItem };
