import React from "react";
import styles from "./community.module.css";
import Heading from "@/components/heading";
import Image from "next/image";
import { range } from "@/utils";

const Page = () => {
  return (
    <section className={styles.wrapper}>
      <Heading className={styles.title} level={1}>
        We are Microsoft Developers Community in Uzbekistan
      </Heading>
      <div className={`${styles.cards}`}>
        <a
          className={styles.card}
          href="https://www.linkedin.com/company/mdc-uzbekistan"
          target="_blank"
        >
          <p className={styles.cardTitle}>Join us</p>
          <p className={styles.cardSubtitle}>via LinkedIn</p>
        </a>
        <a
          className={`${styles.card} ${styles.cardYoutube}`}
          href="https://youtu.be/1N9KgNdH-W0"
          target="_blank"
        >
          <Image width={200} height={45} src="/images/youtube.svg" alt="Youtube" />
          <p className={styles.cardSubtitle}>
            Microsoft Community Conf 2023 <br /> in Uzbekistan
          </p>
        </a>
        <a className={styles.card} href="https://docs.dot-net.uz" target="_blank">
          <p className={styles.cardTitle}>Learn</p>
          <p className={styles.cardSubtitle}>Learn .NET in Uzbek</p>
        </a>
      </div>
      <div className={styles.galleryGrid}>
        {range(1, 17).map((item) => {
          const isBig = item % 4 === 0;

          return (
            <div
              className={`${styles.item} ${isBig ? styles.big : styles.wide}`}
              key={item}
            >
              <Image
                width={576}
                height={isBig ? 150 : 75}
                alt="community"
                key={item}
                src={`/images/community/image-${item}.webp`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
