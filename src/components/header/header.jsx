"use client";
import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Gradient from "../gradient/gradient";
import { Menu } from "lucide-react";
import { headerLinks } from "@/data";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth > 1250) {
      return;
    }

    const handleWindowClick = (e) => {
      if (e.target.closest(`.${styles.burger}`)) {
        return;
      }

      setIsMenuOpen(false);
    };

    const handleWindowScroll = () => {
      if (!isMenuOpen) {
        return;
      }

      setIsMenuOpen(false);
    };

    window.addEventListener("click", handleWindowClick);
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("click", handleWindowClick);
      window.addEventListener("scroll", handleWindowScroll);
    };
  }, [isMenuOpen]);

  return (
    <header className={styles.wrapper}>
      <Gradient>
        <a className={styles.logo} href="/">
          MDC Uzbekistan
        </a>
      </Gradient>
      <nav
        className={`${styles.nav} ${
          isMenuOpen ? styles.navOpened : styles.navClosed
        }`}
      >
        <ul className={styles.list}>
          {headerLinks.map((link) => {
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
      <Menu
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={styles.burger}
      />
    </header>
  );
}

export default Header;
