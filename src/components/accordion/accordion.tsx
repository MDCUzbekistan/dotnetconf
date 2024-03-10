"use client";
import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-collapsible";
import Button from "../button";
import styles from "./accordion.module.css";
import { Minus, Plus } from "lucide-react";

interface Props {
  children: React.ReactNode;
  trigger: React.ReactNode;
}

const Accordion = ({ children, trigger }: Props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <AccordionPrimitive.Root
      className={styles.wrapper}
      open={open}
      onOpenChange={setOpen}
    >
      <AccordionPrimitive.CollapsibleTrigger asChild={true}>
        <Button className={styles.trigger} variant="filled">
          {trigger}
          {open ? <Minus /> : <Plus />}
        </Button>
      </AccordionPrimitive.CollapsibleTrigger>
      <AccordionPrimitive.CollapsibleContent className={styles.content}>
        {children}
      </AccordionPrimitive.CollapsibleContent>
    </AccordionPrimitive.Root>
  );
};

export default Accordion;
