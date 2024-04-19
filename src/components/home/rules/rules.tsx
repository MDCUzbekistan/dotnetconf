import React from "react";
import styles from "./rules.module.css";
import Heading from "@/components/heading";
import { rules } from "@/data";

function Rules() {
  return (
    <section id="rules" className={styles.wrapper}>
      <Heading className={styles.title} level={2}>
        Rules
      </Heading>
      <div className={styles.list}>
        {rules.map((item) => {
          return (
            <article key={item.id}>
              <Heading className={styles.heading} level={3}>
                {item.title}
              </Heading>
              <p className={styles.description}>{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Rules;
