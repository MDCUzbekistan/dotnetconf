import React from "react";
import styles from "./connect.module.css";
import Heading from "@/components/heading";
import Gradient from "@/components/gradient";

function Connect() {
  return (
    <>
      <section id="connect" className={styles.wrapper}>
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
              #sharpist2024
            </a>
          </Gradient>
        </p>
      </section>
    </>
  );
}

export default Connect;
