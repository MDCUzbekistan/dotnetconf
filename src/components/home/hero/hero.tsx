import React from "react";
import styles from "./hero.module.css";
import Gradient from "@/components/gradient/gradient";
import Button from "@/components/button";
import Image from "next/image";
import Heading from "@/components/heading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <Heading level={1} className={styles.title}>
          Sharpist 2024 Hackathon
        </Heading>
        <p className={`gradient ${styles.subtitle}`}>
          International hackathon to find solutions to problems using Microsoft
          Technologies
          <br />
          <Gradient>
            <span className={styles.date}>8-9-10 March</span>
          </Gradient>
        </p>
        <div className={styles.buttons}>
          <Button asChild={true} className={styles.btn} variant="outlined">
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/mdc-uzbekistan/"
            >
              Follow us
            </Link>
          </Button>
          <Button className={styles.btn} variant="outlined" asChild={true}>
            <Link href="/register">
              Register
              <ArrowRight className={styles.arrow} />
            </Link>
          </Button>
        </div>
      </div>
      <Image
        className={styles.img}
        src="/images/hero-graphic.png"
        width={1162}
        height={650}
        alt="hero graphic"
      />
    </section>
  );
}

export default Hero;