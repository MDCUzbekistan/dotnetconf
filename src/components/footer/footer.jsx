import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";
import { footerLinks } from "@/data";

function Footer() {
  return (
    <footer className={styles.wrapper}>
      {footerLinks.map((item) => {
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
