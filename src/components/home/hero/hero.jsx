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
          Microsoft Ignite 2023 Uzbekistan
        </Heading>
        <p className={`gradient ${styles.subtitle}`}>
          First Offline Microsoft Conference in Uzbekistan
          <br />
          <Gradient>
            <span className={styles.date}>December 2</span>
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
