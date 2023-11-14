import React from "react";
import styles from "./hero.module.css";
import Gradient from "@/components/gradient/gradient";
import Button from "@/components/button";
import Image from "next/image";
import Heading from "@/components/heading";

function Hero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <Heading level={1} className={styles.title}>
          .NET Conf 2023
        </Heading>
        <p className={`gradient ${styles.subtitle}`}>
          The largest .NET event hosted online <br />
          <Gradient>
            <span className={styles.date}>November 14 - 16.</span>
          </Gradient>
        </p>
        <div className={styles.buttons}>
          <Button variant="outlined">Add to calendar</Button>
          <Button variant="outlined">Subscribe for updates</Button>
        </div>
      </div>
      <Image
        className={styles.img}
        src="/images/hero-graphic.png"
        width={1162}
        height={650}
        alt="123"
      />
    </section>
  );
}

export default Hero;
