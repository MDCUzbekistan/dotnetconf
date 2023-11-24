"use client";
import React from "react";
import styles from "./team.module.css";
import Heading from "@/components/heading";
import Image from "next/image";
import Gradient from "@/components/gradient";
import { ArrowRight } from "lucide-react";
import { organizers, volunteers } from "@/data";
import Tabs from "@/components/tabs";

const tabs = [
  {
    id: 1,
    title: "Docs team",
    slug: "docs-team",
  },
  {
    id: 2,
    title: "Dev team",
    slug: "dev-team",
  },
  {
    id: 3,
    title: "Design Team",
    slug: "design-team",
  },
];

const tabsContent = [
  {
    id: 1,
    slug: "docs-team",
  },
  {
    id: 3,
    slug: "dev-team",
  },
  {
    id: 4,
    slug: "design-team",
  },
];

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
      <Heading className={styles.title} level={1}>
        Volunteers
      </Heading>
      <Tabs defaultValue="docs-team">
        <Tabs.List className={styles.tabsList}>
          {tabs.map((item) => {
            return (
              <Tabs.Trigger key={item.id} value={item.slug}>
                {item.title}
              </Tabs.Trigger>
            );
          })}
        </Tabs.List>
        {tabsContent.map((item) => {
          return (
            <Tabs.Content
              className={styles.volunteersList}
              key={item.id}
              value={item.slug}
            >
              {volunteers
                .filter((volunteer) => volunteer.team === item.slug)
                .map((item) => {
                  return (
                    <article className={styles.card} key={item.id}>
                      <Gradient gradientVariant="primary">
                        <p className={styles.cardName}>{item.fullName}</p>
                      </Gradient>
                      <p className={styles.cardBio}>{item.bio}</p>
                      <a
                        className={styles.cardLink}
                        href={item.media}
                        target="_blank"
                      >
                        @{item.username}{" "}
                        <ArrowRight className={styles.arrow} size={16} />
                      </a>
                    </article>
                  );
                })}
            </Tabs.Content>
          );
        })}
      </Tabs>
    </section>
  );
};

export default Page;
