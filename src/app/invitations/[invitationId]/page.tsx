import React from "react";
import styles from "./invitations.module.css";
import Heading from "@/components/heading";
import Image from "next/image";
import { Space_Mono } from "next/font/google";
import Ticket from "./ticket";
import axios from "axios";
import { notFound } from "next/navigation";
import Letter from "./letter";

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
      <Letter firstName={data.firstName} lastName={data.lastName} />
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
