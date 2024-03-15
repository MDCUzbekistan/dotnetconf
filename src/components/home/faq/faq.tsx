import { axiosInstance } from "@/axios";
import Accordion from "@/components/accordion";
import React from "react";
import styles from "./faq.module.css";
import Heading from "@/components/heading";

type FAQType = {
  id: number;
  question: string;
  answer: string;
};

async function getFAQs(): Promise<FAQType[]> {
  const response = await axiosInstance.get(`/faqs`);

  return response.data;
}

const FAQ = async () => {
  const faqs = await getFAQs();

  return (
    <section id="faq" className={styles.wrapper}>
      <Heading level={2} className={styles.title}>
        FAQ
      </Heading>
      <ul className={styles.list}>
        {faqs.map((faq) => {
          return (
            <Accordion key={faq.id} trigger={faq.question}>
              {faq.answer}
            </Accordion>
          );
        })}
      </ul>
    </section>
  );
};

export default FAQ;
