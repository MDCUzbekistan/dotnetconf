import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";
import React from "react";
import styles from "./tabs.module.css";

interface TabsProps extends React.ComponentPropsWithoutRef<typeof Root> {
  children: React.ReactNode;
}

function Tabs({ children, ...props }: TabsProps) {
  return (
    <Root className={styles.wrapper} {...props}>
      {children}
    </Root>
  );
}

interface TabsListProps extends React.ComponentPropsWithoutRef<typeof List> {
  children: React.ReactNode;
  className?: string;
}

function TabsList({ children, className, ...props }: TabsListProps) {
  return (
    <List className={`${styles.list} ${className}`} {...props}>
      {children}
    </List>
  );
}

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof Trigger> {
  children: React.ReactNode;
  className?: string;
}

function TabsTrigger({ children, ...props }: TabsTriggerProps) {
  return (
    <Trigger className={styles.trigger} {...props}>
      {children}
    </Trigger>
  );
}

interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof Content> {
  children: React.ReactNode;
}

function TabsContent({ children, ...props }: TabsContentProps) {
  return <Content {...props}>{children}</Content>;
}

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;
export default Tabs;
