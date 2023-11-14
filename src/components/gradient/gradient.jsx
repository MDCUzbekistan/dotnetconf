import { Slot } from "@radix-ui/react-slot";
import React from "react";
import styles from "./gradient.module.css";

function Gradient({ children, gradientVariant = "primary", ...props }) {
  return (
    <Slot className={styles[gradientVariant]} {...props}>
      {children}
    </Slot>
  );
}

export default Gradient;
