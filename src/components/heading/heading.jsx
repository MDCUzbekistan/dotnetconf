import React from "react";
import styles from "./heading.module.css";

function Heading({ level, className, children, ...props }) {
  const Tag = `h${level}`;

  return (
    <Tag className={`${styles.heading} ${styles[Tag]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}

export default Heading;
