import React from "react";
import styles from "./invitations.module.css";
import Image from "next/image";
import Heading from "@/components/heading";

const Page = () => {
  return (
    <>
      <Image
        src="/lights/light-left.svg"
        width={1200}
        height={720}
        alt=""
        role="presentation"
        className={styles.lightLeft}
      />
      <section className={styles.wrapper}>
        <p>
          Hey <strong>Ma&apos;ruf</strong>, Exciting news! 🎉 <br />
          You&apos;re invited to our{" "}
          <strong>Microsoft Community Conf 2023 Uzbekistan </strong>
          free event. Here are the details: <br />
          <br />
          Date: <strong>02.12.2023</strong> <br />
          Time: <strong>9:00</strong> <br />
          Location: <strong>New Uzbekistan University</strong>
        </p>
        <div className={styles.ticket}>
          <header className={styles.ticketHeader}>
            <Heading className="" level={3}>
              ID: 2044
            </Heading>
          </header>
          <div className={styles.ticketBody}>
            <div className={styles.ticketSection}>
              <Heading className={styles.ticketSectionHeading} level={4}>
                Ma&apos;ruf Musayev
              </Heading>
              <p className={styles.ticketSectionDesc}>Full name</p>
            </div>
            <div className={styles.ticketSection}>
              <Heading className={styles.ticketSectionHeading} level={4}>
                marufzak04@gmail.com
              </Heading>
              <p className={styles.ticketSectionDesc}>Email</p>
            </div>
            <div className={styles.ticketSection}>
              <Heading className={styles.ticketSectionHeading} level={4}>
                Full Stack Developer
              </Heading>
              <p className={styles.ticketSectionDesc}>Role</p>
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/lights/light-right.svg"
        width={1200}
        height={720}
        alt=""
        role="presentation"
        className={styles.lightRight}
      />
    </>
  );
};

export default Page;
