import React from "react";
import {
  Root,
  Title,
  Description,
  Viewport,
  Provider,
} from "@radix-ui/react-toast";
import { Check, X } from "lucide-react";
import styles from "./toast.module.css";

function Toast({ title, status, desc, open = false, onOpenChange }) {
  return (
    <Provider duration={5000}>
      <Root
        style={{
          backgroundColor:
            status === "success"
              ? "var(--color-dotnet-solid-btn-accent-background)"
              : "#e85c41",
        }}
        className={styles.wrapper}
        open={open}
        onOpenChange={onOpenChange}
      >
        {status === "success" && <Check color="lightgreen" />}
        <Title asChild>
          <h3 className={styles.title}>{title}</h3>
        </Title>
        <Description asChild>
          <p className="desc">{desc}</p>
        </Description>
      </Root>
      <Viewport className={styles.viewport} />
    </Provider>
  );
}

export default Toast;
