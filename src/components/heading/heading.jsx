import React from "react";
import styles from "./heading.module.css";

function Heading({ level, className, children, ...props }) {
  const Tag = `h${level}`;

  return (
    <Tag className={`${className} ${styles.heading} ${styles[Tag]}`} {...props}>
      {children}
    </Tag>
  );
}

export default Heading;
