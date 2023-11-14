"use client";
import React from "react";
import styles from "./header.module.css";
import { links } from "./constants";
import Link from "next/link";
import Gradient from "../gradient/gradient";
import { Menu } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className={styles.wrapper}>
      <Gradient>
        <a className={styles.logo} href="/">
          .NET Conf 2023
        </a>
      </Gradient>
      {(window.innerWidth > 1250 || isMenuOpen) && (
        <nav className={styles.nav}>
          <ul className={styles.list}>
            {links.map((link) => {
              return (
                <li className={styles.item} key={link.id}>
                  <Link className={styles.link} href={link.slug}>
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
      <Menu
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={styles.burger}
      />
    </header>
  );
}

export default Header;
