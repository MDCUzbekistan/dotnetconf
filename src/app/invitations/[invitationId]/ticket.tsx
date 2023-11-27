"use client";
import React from "react";
import styles from "./invitations.module.css";
import Heading from "@/components/heading";
import { CalendarIcon, MapPin } from "lucide-react";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";

const Ticket = ({ name, id }: { name: string; id: string }) => {
  const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");

  return (
    <div className={styles.ticket}>
      <div className={styles.ticketLeft}>
        <p className={styles.ticketLeftText}>This is your ticket</p>
      </div>
      <div className={styles.ticketRight}>
        <div className={styles.ticketRightContent}>
          <Heading className={styles.ticketRightTitle} level={4}>
            Microsoft Community Conf 2023 Uzbekistan
          </Heading>
          <p className={styles.ticketRightCard}>
            <MapPin size={16} />
            New Uzbekistan University
          </p>
          <p className={styles.ticketRightCard}>
            <CalendarIcon size={16} />
            Dec 2, 2023, 10:00 AM
          </p>
          <div className={styles.ticketIssueCards}>
            <div className={styles.ticketIssueCard}>
              <Heading level={5}>ISSUED TO</Heading>
              <p className={styles.ticketIssueText}>{name.toUpperCase()}</p>
            </div>
            {/* <div className={styles.ticketIssueCard}>
              <Heading level={5}>ORDER Details</Heading>
              <p className={styles.ticketIssueText}>
                Registered <br />
                {new Date(createdAt).toLocaleString()}
              </p>
            </div> */}
            <div className={styles.ticketIssueCard}>
              <Heading level={5}>TICKET</Heading>
              <p className={styles.ticketIssueText}>
                General RSVP <br />
                FREE
              </p>
            </div>
          </div>
        </div>
        <div className={styles.ticketRightMetadata}>
          <Image
            width={152}
            height={34}
            src={`/images/sponsors/mdcu-${
              prefersLightMode ? "dark" : "light"
            }.svg`}
            alt="logo"
          />
          <Heading className={styles.ticketRightMetadataTitle} level={1}>
            {id}
          </Heading>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
