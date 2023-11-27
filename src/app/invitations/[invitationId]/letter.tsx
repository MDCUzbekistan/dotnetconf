"use client";
import React from "react";
import styles from "./invitations.module.css";
import Map from "@/components/map";
import useMediaQuery from "@/hooks/useMediaQuery";

const Letter = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
  const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");

  return (
    <div className={`${styles.letterWrapper} ${styles.filled}`}>
      <div className={styles.filledContainer}>
        <p className={styles.letter}>
          <strong>
            Dear {firstName} {lastName},
          </strong>{" "}
          <br /> <br />
          On behalf of the Microsoft Developers Community in Uzbekistan, we are
          honored to extend to you an exclusive invitation to the First
          In-Person Microsoft Community Conference in Uzbekistan. <br /> <br />
          This conference is designed to bring together a diverse group of
          Microsoft product users and developers, fostering a community of
          innovation and collaboration. It is a prime opportunity to engage with
          industry leaders, share insights, and explore the latest advancements
          in technology. <br /> <br />
          <strong>Date: December 2, 2023</strong> <br />
          <strong>Time: 10:00 AM</strong> <br />
          <strong>Location: New Uzbekistan University. </strong> <br /> <br />
          We are looking forward to the possibility of your participation in
          what promises to be a highly engaging and insightful event. <br />{" "}
          <br />
          Warm regards, <br />
          MDC Uzbekistan Team
          <br /> <br />
        </p>
        <Map
          mode={prefersLightMode ? "light" : "dark"}
          style={{
            height: 540,
            overflow: "hidden",
            borderRadius: 12,
          }}
        />
      </div>
    </div>
  );
};

export default Letter;
