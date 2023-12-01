import React from "react";
import styles from "./invitations.module.css";
import Gradient from "@/components/gradient/gradient";
import Link from "next/link";

const Letter = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => {
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
          <strong>Time: 9:00 AM</strong> <br />
          <strong>
            Location: New Uzbekistan University.{" "}
            <Gradient>
              <Link
                target="_blank"
                href="https://www.bing.com/maps?osid=89e0c372-d521-420e-82a3-9841d4a1a9be&cp=41.316043~69.293159&lvl=17.23&pi=0&v=2&sV=2&form=S00027"
              >
                See in the map!
              </Link>
            </Gradient>
          </strong>{" "}
          <br /> <br />
          We are looking forward to the possibility of your participation in
          what promises to be a highly engaging and insightful event. <br />{" "}
          <br />
          Warm regards, <br />
          MDC Uzbekistan Team
        </p>
      </div>
    </div>
  );
};

export default Letter;
