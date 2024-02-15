"use client";
import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import Gradient from "../gradient/gradient";
import { Menu } from "lucide-react";
import { headerLinks } from "@/data";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth > 1250) {
      return;
    }

    const handleWindowClick = (e: React.MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest(`.${styles.burger}`)) {
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

    // FIXME: make type-safe
    window.addEventListener(
      "click",
      handleWindowClick as unknown as EventListener
    );
    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener(
        "click",
        handleWindowClick as unknown as EventListener
      );
      window.addEventListener("scroll", handleWindowScroll);
    };
  }, [isMenuOpen]);

  if (pathname.includes("/invitations")) {
    return;
  }

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
