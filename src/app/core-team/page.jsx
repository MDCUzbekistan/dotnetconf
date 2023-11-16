"use client";
import React from "react";
import styles from "./core-team.module.css";
import Heading from "@/components/heading";
import Image from "next/image";
import Gradient from "@/components/gradient";
import { ArrowRight } from "lucide-react";
import { organizers } from "@/data";

const Page = () => {
  return (
    <section className={styles.wrapper}>
      <Heading className={styles.title} level={1}>
        Core team
      </Heading>
      <div className={styles.list}>
        {organizers.map((item) => {
          return (
            <article className={styles.card} key={item.id}>
              <Image
                className={styles.cardImg}
                src={item.img}
                width={164}
                height={164}
                alt={`${item.name} ${item.surname}`}
              />
              <Gradient gradientVariant="primary">
                <p className={styles.cardName}>
                  {item.name} {item.surname}
                </p>
              </Gradient>
              <p className={styles.cardBio}>{item.bio}</p>
              <a className={styles.cardLink} href={item.url} target="_blank">
                @{item.username}{" "}
                <ArrowRight className={styles.arrow} size={16} />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
