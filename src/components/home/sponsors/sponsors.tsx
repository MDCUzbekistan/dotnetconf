import React from "react";
import styles from "./sponsors.module.css";
import Heading from "@/components/heading";
import Image from "next/image";
import { partners } from "@/data";

function Sponsors() {
  return (
    <section className={styles.wrapper}>
      <Heading className={styles.title} level={2}>
        Our partners
      </Heading>
      <div className={styles.list}>
        {partners.map((item) => {
          return (
            <a key={item.id} className={styles.link} href={item.link}>
              <Image
                src={item.lightImg}
                alt={item.title}
                width={item.imgWidth}
                height={item.imgHeight}
                className={styles.lightImg}
              />
              <Image
                src={item.darkImg}
                alt={item.title}
                width={item.imgWidth}
                height={item.imgHeight}
                className={styles.darkImg}
              />
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Sponsors;
