"use client";

import React from "react";
import { Root, Title, Viewport, Provider } from "@radix-ui/react-toast";
import { Check, X } from "lucide-react";
import styles from "./toast.module.css";

const ToastContext = React.createContext();

function Toast({ title, status, open = false, onOpenChange }) {
  return (
    <>
      <Root className={styles.wrapper} open={open} onOpenChange={onOpenChange}>
        {status === "success" ? (
          <Check color="lightgreen" />
        ) : status === "error" ? (
          <X color="#e85c41" />
        ) : null}
        <Title asChild>
          <h3 className={styles.title}>{title}</h3>
        </Title>
      </Root>
      <Viewport className={styles.viewport} />
    </>
  );
}

function ToastProvider({ duration = 3000, children }) {
  const [toast, setToast] = React.useState({
    open: false,
    status: "",
    title: "",
  });

  const openToast = React.useCallback(({ title, status }) => {
    setToast({
      title,
      status,
      open: true,
    });
  }, []);

  return (
    <ToastContext.Provider value={{ openToast }}>
      <Provider duration={duration}>
        {children}
        <Toast
          title={toast.title}
          status={toast.status}
          open={toast.open}
          onOpenChange={() => {
            setToast({
              ...toast,
              open: false,
            });
          }}
        />
      </Provider>
    </ToastContext.Provider>
  );
}

const useToast = () => {
  return React.useContext(ToastContext);
};

export { ToastProvider, useToast };
