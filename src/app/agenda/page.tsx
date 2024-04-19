import React from "react";
import styles from "./agenda.module.css";
import Heading from "@/components/heading";
import Gradient from "@/components/gradient";
import { agenda } from "@/data";

const Page = () => {
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
                        {session.timeFrom} {session.timezoneOffset}
                      </p>
                    </Gradient>
                    <div
                      role="presentation"
                      className={styles.sessionGradientLine}
                    ></div>
                    <div className={styles.sessionContent}>
                      <p className={styles.sessionTitle}>{session.title}</p>
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
