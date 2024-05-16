import React from "react";
import styles from "./hero.module.css";
import Gradient from "@/components/gradient/gradient";
import Button from "@/components/button";
import Image from "next/image";
import Heading from "@/components/heading";
import Link from "next/link";

function Hero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <Heading level={1} className={styles.title}>
          Sharpist 2024 - AI Hackaton
        </Heading>
        <p className={`gradient ${styles.subtitle}`}>
          Creating Tomorrow with Smart Ideas using Microsoft Technologies and AI Excellence!
          <br />
          <Gradient>
            <span className={styles.date}>19-21 April</span>
          </Gradient>
        </p>
        <div className={styles.buttons}>
          <Button asChild={true} className={styles.btn} variant="outlined">
            <Link href="/sharpist">See results</Link>
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
