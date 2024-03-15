import React from "react";
import styles from "./swags.module.css";
import Heading from "@/components/heading";
import { swags } from "@/data";

function Swags() {
  return (
    <section id="features" className={styles.wrapper}>
      <header className={styles.header}>
        <Heading className={styles.title} level={2}>
          Features
        </Heading>
        <p className={styles.description}>
          Creating Tomorrow with Smart Ideas using Microsoft Technologies and AI
          Excellence!
        </p>
      </header>
      <div className={styles.list}>
        {swags.map((item) => {
          return (
            <article key={item.id}>
              <p className={styles.cardTitle}>{item.title}</p>
              <p className={styles.cardDescription}>{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Swags;
