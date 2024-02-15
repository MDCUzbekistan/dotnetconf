import React from "react";
import styles from "./features.module.css";
import Heading from "@/components/heading";
import { features } from "@/data";

function Features() {
  return (
    <section className={styles.wrapper}>
      {features.map((item) => {
        return (
          <article key={item.id} className={styles.feature}>
            <Heading className={styles.heading} level={2}>
              {item.title}
            </Heading>
            <p className={styles.description}>{item.description}</p>
          </article>
        );
      })}
    </section>
  );
}

export default Features;
