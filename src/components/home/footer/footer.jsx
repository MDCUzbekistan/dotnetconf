import React from "react";
import styles from "./footer.module.css";
import { links } from "./constants";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.wrapper}>
      {links.map((item) => {
        const Tag = item.url.startsWith("http") ? "a" : Link;
        return (
          <Tag className={styles.link} key={item.id} href={item.url}>
            {item.title}
          </Tag>
        );
      })}
    </footer>
  );
}

export default Footer;
