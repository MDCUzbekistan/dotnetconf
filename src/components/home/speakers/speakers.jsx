import React from "react";
import styles from "./speakers.module.css";
import Heading from "@/components/heading";
import { speakers } from "./constants";
import Image from "next/image";

function Speakers() {
  return (
    <section className={styles.wrapper}>
      <Heading level={2} className={styles.title}>
        Featured Speakers
      </Heading>
      <ul className={styles.list}>
        {speakers.map((speaker) => {
          return (
            <section key={speaker.id} className={styles.card}>
              <div className={styles.content}>
                <p className={styles.name}>{speaker.name}</p>
                <p className={styles.surname}>{speaker.surname}</p>
              </div>
              <Image
                className={styles.img}
                width={165}
                height={165}
                src={speaker.img}
                alt={`${speaker.name} ${speaker.surname} photo`}
              />
            </section>
          );
        })}
      </ul>
    </section>
  );
}

export default Speakers;
