import React from "react";
import { useFormStatus } from "react-dom";
import Button from "../button";
import styles from "./submit.module.css";
import { Loader } from "lucide-react";

function Submit({ children, className, ...props }) {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      className={` ${className} ${styles.btn}`}
      {...props}
    >
      {children}
      {pending && <Loader className={styles.loader} />}
    </Button>
  );
}

export default Submit;
