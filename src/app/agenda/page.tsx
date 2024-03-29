import React from "react";
import styles from "./agenda.module.css";
import Heading from "@/components/heading";
import Gradient from "@/components/gradient";
import { agenda } from "@/data";
import { notFound } from "next/navigation";

const Page = () => {
  notFound();

  return (
    <section className={styles.wrapper}>
      <Heading className={styles.title} level={1}>
        Agenda
      </Heading>
      <div className="list">
        {agenda.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <header className={styles.agendaHeader}>
                <Heading className={styles.agendaTitle} level={2}>
                  {item.title}
                </Heading>
                <p className={styles.agendaSubtitle}>{item.subtitle}</p>
              </header>
              {item.sessions.map((session) => {
                return (
                  <section key={session.id} className={styles.session}>
                    <Gradient gradientVariant="primary">
                      <p className={styles.sessionTime}>
                        {session.timeFrom} - {session.timeTo}{" "}
                        {/* {session.timezoneOffset} */}
                      </p>
                    </Gradient>
                    <div
                      role="presentation"
                      className={styles.sessionGradientLine}
                    ></div>
                    <div className={styles.sessionContent}>
                      <p className={styles.sessionTitle}>{session.title}</p>
                      <p className={styles.sessionSpeakers}>
                        {session.speakers.map((speaker, index) => {
                          return `${speaker} ${
                            index === session.speakers.length - 1 ? "" : ", "
                          }`;
                        })}
                      </p>
                      <p className={styles.sessionDescription}>
                        {session.description}
                      </p>
                    </div>
                  </section>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
