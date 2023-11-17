"use client";
import React from "react";
import styles from "./connect.module.css";
import Heading from "@/components/heading";
import Gradient from "@/components/gradient";
import useMediaQuery from "@/hooks/useMediaQuery";
import Map from "@/components/map";

function Connect() {
  const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");

  return (
    <>
      <section className={styles.wrapper}>
        <div>
          <Heading className={styles.title} level={4}>
            Stay connected
          </Heading>
          <p className={styles.connectText}>
            <a
              href="https://www.instagram.com/mdc_uz/"
              className={styles.connectLink}
            >
              Follow
            </a>{" "}
            for the latest news and updates about .NET Conf.
          </p>
        </div>
        <p className={styles.followText}>
          Follow the event{" "}
          <Gradient gradientVariant="primary">
            <a
              className={styles.followLink}
              href="https://twitter.com/search?q=dotnetconf&src=typed_query&f=live"
              target="_blank"
            >
              #dotnetconf
            </a>
          </Gradient>
        </p>
      </section>
      <Map
        mode={prefersLightMode ? "light" : "dark"}
        style={{
          height: 540,
          overflow: "hidden",
          borderRadius: 12,
        }}
      />
    </>
  );
}

export default Connect;
