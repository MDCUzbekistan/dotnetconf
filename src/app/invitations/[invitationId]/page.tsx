import React from "react";
import styles from "./invitations.module.css";
import Heading from "@/components/heading";
import Image from "next/image";
import { Space_Mono } from "next/font/google";
import Ticket from "./ticket";
import axios from "axios";
import { notFound } from "next/navigation";

type ResponseType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  preferredLanguage: number;
  country: string;
  idInString: string;
  city: string;
  role: number;
  expectation: string;
};

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Page = async ({
  params,
}: {
  params: {
    invitationId: string;
  };
}) => {
  if (params.invitationId.length !== 4) {
    notFound();
  }

  const response = await axios(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${params.invitationId}`
  ).catch((err) => notFound());
  const data: ResponseType = response.data;

  return (
    <section className={`${styles.wrapper} ${spaceMono.className}`}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <Heading level={2} className={styles.heroTitle}>
            Microsoft Community Conf 2023 Uzbekistan
          </Heading>
        </div>
        <Image
          className={styles.heroImg}
          src="/images/hero-graphic.png"
          width={658}
          height={396}
          alt="hero graphic"
        />
      </div>
      <div className={`${styles.letterWrapper} ${styles.filled}`}>
        <div className={styles.filledContainer}>
          <p className={styles.letter}>
            <strong>
              Dear {data.firstName} {data.lastName},
            </strong>{" "}
            <br /> <br />
            On behalf of the Microsoft Developers Community in Uzbekistan, we
            are honored to extend to you an exclusive invitation to the First
            In-Person Microsoft Community Conference in Uzbekistan. <br />{" "}
            <br />
            This conference is designed to bring together a diverse group of
            Microsoft product users and developers, fostering a community of
            innovation and collaboration. It is a prime opportunity to engage
            with industry leaders, share insights, and explore the latest
            advancements in technology. <br /> <br />
            <strong>Date: December 2, 2023</strong> <br />
            <strong>Time: 10:00 AM</strong> <br />
            <strong>Location: New Uzbekistan University</strong> <br /> <br />
            We are looking forward to the possibility of your participation in
            what promises to be a highly engaging and insightful event. <br />{" "}
            <br />
            Warm regards, <br />
            MDC Uzbekistan Team
          </p>
        </div>
      </div>
      <div className={`${styles.ticketWrapper} ${styles.filled}`}>
        <div className={styles.filledContainer}>
          <Ticket
            name={`${data.firstName} ${data.lastName}`}
            id={data.idInString}
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
