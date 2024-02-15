import React from "react";
import styles from "./button.module.css";
import { Slot } from "@radix-ui/react-slot";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  variant: "filled" | "outlined";
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
}

function Button({ variant, asChild, className, children, ...props }: Props) {
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
