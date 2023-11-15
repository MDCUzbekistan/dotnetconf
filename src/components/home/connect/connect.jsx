import React from "react";
import styles from "./connect.module.css";
import Heading from "@/components/heading";
import Gradient from "@/components/gradient";

function Connect() {
  return (
    <section className={styles.wrapper}>
      <div>
        <Heading className={styles.title} level={4}>
          Stay connected
        </Heading>
        <p className={styles.connectText}>
          <a href="http://eepurl.com/gvEhgX" className={styles.connectLink}>
            Sign up
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
  );
}

export default Connect;
