import React from "react";
import styles from "./heading.module.css";

interface Props extends React.ComponentPropsWithoutRef<"h1"> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

function Heading({ level, className, children, ...props }: Props) {
  const Tag: React.ElementType = `h${level}`;

  return (
    <Tag className={`${styles.heading} ${styles[Tag]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}

export default Heading;
