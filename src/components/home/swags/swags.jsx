import React from "react";
import styles from "./swags.module.css";
import Heading from "@/components/heading";
import { swags } from "./constants";
import { ArrowRight } from "lucide-react";

function Swags() {
  return (
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <Heading className={styles.title} level={2}>
          Giveaways and free swag
        </Heading>
        <p className={styles.description}>
          Have fun with these free digital swag items & participate in our
          giveaways!
        </p>
      </header>
      <div className={styles.list}>
        {swags.map((item) => {
          return (
            <article key={item.id}>
              <p className={styles.cardTitle}>{item.title}</p>
              <p className={styles.cardDescription}>{item.description}</p>
              <a className={styles.link} href={item.linkUrl} target="_blank">
                {item.linkTitle}{" "}
                <ArrowRight className={styles.arrow} size={20} />{" "}
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Swags;
