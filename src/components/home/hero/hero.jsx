import React from "react";
import styles from "./hero.module.css";
import Gradient from "@/components/gradient/gradient";
import Button from "@/components/button";
import Image from "next/image";
import Heading from "@/components/heading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <Heading level={1} className={styles.title}>
          Microsoft Community Conf 2023 Uzbekistan
        </Heading>
        <p className={`gradient ${styles.subtitle}`}>
          First In-Person Microsoft Developers Community Conference <br /> in
          Uzbekistan
          <br />
          <Gradient>
            <span className={styles.date}>December 2</span>
          </Gradient>
        </p>
        <div className={styles.buttons}>
          <Button asChild={true} className={styles.btn} variant="outlined">
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/mdc-uzbekistan/"
            >
              Follow us
            </Link>
          </Button>
          <Button className={styles.btn} variant="outlined" asChild={true}>
            <Link
              target="_blank"
              href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAUFd-8RUMFRXUVpaSjNITkFHUVBOT0FLRDA1MVc2MC4u"
            >
              Register
              <ArrowRight className={styles.arrow} />
            </Link>
          </Button>
        </div>
      </div>
      <Image
        className={styles.img}
        src="/images/hero-graphic.png"
        width={1162}
        height={650}
        alt="hero graphic"
      />
    </section>
  );
}

export default Hero;
