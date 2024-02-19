import React from "react";
import styles from "./community.module.css";
import Heading from "@/components/heading";
import Image from "next/image";
import { range } from "@/utils";
import Button from "@/components/button";

const Page = () => {
  return (
    <section className={styles.wrapper}>
      <Heading className={styles.title} level={1}>
        Community
      </Heading>
      <div className={styles.videoWrapper}>
        <iframe
          width="100%"
          height="560"
          src="https://www.youtube.com/embed/1N9KgNdH-W0?si=nFhnvbOKs3VoAFgA&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.galleryGrid}>
        {range(1, 15).map((item) => {
          const itemClass = Math.random() > 0.6 ? styles.wide : styles.big;

          return (
            <div className={`${styles.item} ${itemClass}`} key={item}>
              <Image
                width={300}
                height={200}
                alt="community"
                key={item}
                src={`/images/community/image-${item}.webp`}
              />
            </div>
          );
        })}
      </div>
      <Button className={styles.link} variant="outlined" asChild={true}>
        <a target="_blank" href="https://disk.yandex.com/d/yklWmoQd0CIEZQ">
          View more
        </a>
      </Button>
    </section>
  );
};

export default Page;
