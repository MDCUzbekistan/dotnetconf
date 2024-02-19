import { Slot } from "@radix-ui/react-slot";
import React from "react";
import styles from "./gradient.module.css";

interface Props extends React.ComponentPropsWithoutRef<typeof Slot> {
  gradientVariant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

function Gradient({ children, gradientVariant = "primary", ...props }: Props) {
  return (
    <Slot className={styles[gradientVariant]} {...props}>
      {children}
    </Slot>
  );
}

export default Gradient;
