import React from "react";
import styles from "./button.module.css";
import { Slot } from "@radix-ui/react-slot";

function Button({ variant, asChild, className, children, ...props }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={`${className} ${styles.btn} ${styles[variant]}`}
      {...props}
    >
      {children}
    </Comp>
  );
}

export default Button;
