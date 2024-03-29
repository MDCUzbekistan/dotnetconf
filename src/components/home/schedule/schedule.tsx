import React from "react";
import styles from "./schedule.module.css";
import Heading from "@/components/heading";
import { schedule } from "@/data";

function Schedule() {
  return (
    <section id="rules" className={styles.wrapper}>
      <Heading className={styles.title} level={2}>
        Rules
      </Heading>
      <div className={styles.list}>
        {schedule.map((item) => {
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

export default Schedule;
