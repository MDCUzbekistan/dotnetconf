import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";
import React from "react";
import styles from "./tabs.module.css";

function Tabs({ children, ...props }) {
  return (
    <Root className={styles.wrapper} {...props}>
      {children}
    </Root>
  );
}

function TabsList({ children, className, ...props }) {
  return (
    <List className={`${styles.list} ${className}`} {...props}>
      {children}
    </List>
  );
}

function TabsTrigger({ children, ...props }) {
  return (
    <Trigger className={styles.trigger} {...props}>
      {children}
    </Trigger>
  );
}

function TabsContent({ children, ...props }) {
  return <Content {...props}>{children}</Content>;
}

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;
export default Tabs;
