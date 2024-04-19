import React from "react";
import styles from "./judges.module.css";
import Heading from "@/components/heading";
import Image from "next/image";
import { judges } from "@/data";

function Judges() {
  return (
    <section id="judges" className={styles.wrapper}>
      <Heading level={2} className={styles.title}>
        Judges
      </Heading>
      <ul className={styles.list}>
        {judges.map((judge) => {
          return (
            <section key={judge.id} className={styles.card}>
              <div className={styles.content}>
                <p className={styles.name}>{judge.name}</p>
                <p className={styles.surname}>{judge.surname}</p>
              </div>
              <Image
                className={styles.img}
                width={165}
                height={165}
                src={judge.img}
                alt={`${judge.name} ${judge.surname}`}
              />
            </section>
          );
        })}
      </ul>
    </section>
  );
}

export default Judges;
