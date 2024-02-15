"use client";

import React from "react";
import { Root, Title, Viewport, Provider } from "@radix-ui/react-toast";
import { Check, X } from "lucide-react";
import styles from "./toast.module.css";

const ToastContext = React.createContext({
  openToast: (...args: any) => {},
});

interface ToastProps {
  title: string;
  status: "success" | "error";
  open: boolean;
  onOpenChange: () => void;
}

function Toast({ title, status, open = false, onOpenChange }: ToastProps) {
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

interface ToastProviderProps {
  duration?: number;
  children: React.ReactNode;
}

type ToastStateType = {
  open: boolean;
  status: "success" | "error";
  title: string;
};

function ToastProvider({ duration = 3000, children }: ToastProviderProps) {
  const [toast, setToast] = React.useState<ToastStateType>({
    open: false,
    status: "success",
    title: "",
  });

  const openToast = React.useCallback(
    ({ title, status }: { title: string; status: "success" | "error" }) => {
      setToast({
        title,
        status,
        open: true,
      });
    },
    []
  );

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
