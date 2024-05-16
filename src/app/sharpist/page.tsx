import Heading from "@/components/heading";
import React from "react";
import styles from "./sharpist.module.css";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <section className={styles.wrapper}>
      <Heading className={styles.heading} level={2}>
        SHARPIST Hackathon 2024: How Teams Used Microsoft Technologies to Build AI-powered
        test Questionnaire Generators
      </Heading>
      <p>
        The recent Sharpist Hackathon around CIS Countries was a vibrant showcase of
        innovation, collaboration and advanced Microsoft technologies where teams from
        around the globe gathered to build AI-based products. The hackathon, hosted by{" "}
        <Link className={styles.link} href="https://www.mdcuzbekistan.com/">
          MDC Uzbekistan
        </Link>{" "}
        (Microsoft Developers Community in Uzbekistan),{" "}
        <Link className={styles.link} href="https://itic.uz/home">
          ITIC
        </Link>{" "}
        (IT Investments Center),{" "}
        <Link className={styles.link} href="https://itskills.uz/">
          ITSkills
        </Link>{" "}
        and{" "}
        <Link className={styles.link} href="https://inha.uz/">
          IUT
        </Link>{" "}
        (INHA University in Tashkent), centred on one ambitious goal: using AI to generate
        test questionnaires based on Microsoft Technologies. Judging focused on several
        criteria, including question generation algorithms, natural language processing
        (NLP), personalization, evaluation and skill rating, user interface, integration
        with other systems and ethical considerations.
      </p>
      <div className={styles.imageWrapper}>
        <Image
          fill={true}
          src="/images/sharpist/1.jpg"
          alt="post describing the sharpist hackathon"
        />
      </div>
      <i>The Challenge</i>
      <p>
        The hackathon presented a unique challenge: teams needed to create AI-based systems
        capable of generating test questionnaires that could adapt to different users&apos;
        knowledge levels and learning styles. The focus on personalized learning experiences
        and seamless integration with Microsoft technologies added to the complexity.
        Participants had to think critically about how their algorithms would understand
        context, generate relevant questions and deliver an intuitive user interface.
      </p>
      <div className={styles.imageWrapper}>
        <Image
          fill={true}
          src="/images/sharpist/2.jpg"
          alt="post describing the sharpist hackathon"
        />
      </div>
      <i>Innovation through Microsoft Technologies</i>
      <p>
        Many teams turned to Microsoft Azure and Cognitive Services for their infrastructure
        and AI capabilities. Azure&apos;s robust cloud-based platform offered the
        scalability and flexibility needed to build complex AI systems. Cognitive Services,
        with its suite of pre-built AI tools, provided essential resources for natural
        language processing and more.
      </p>
      <i>The Elements of Success</i>
      <p>
        The hackathon&apos;s judges evaluated entries based on a comprehensive set of
        criteria. Here&apos;s a closer look at the key elements that defined the winning
        solutions:
      </p>
      <ul className={styles.list}>
        <li>
          Qustioen Generation Algorithm - Teams had to develop algorithms that could
          generate coherent and contextually appropriate questions. This required deep
          machine learning expertise and a strong understanding of natural language
          processing.
        </li>
        <li>
          Natural Language Processing (NLP) - NLP was at the heart of the hackathon.
          Participants needed to create algorithms capable of understanding human language
          and generating meaningful questions. Microsoft&apos;s AI resources played a
          pivotal role in this process.
        </li>
        <li>
          Personalization - The ability to personalize test questionnaires based on user
          input was crucial. Teams implemented mechanisms to adapt the generated questions
          to individual learning styles and skill levels.
        </li>
        <li>
          Evaluation and Skill Rating - Solutions had to evaluate user responses and provide
          meaningful feedback. Teams demonstrated how their systems could rate users&apos;
          skills and offer guidance for improvement.
        </li>
        <li>
          User Interface - A user-friendly interface was essential. The hackathon celebrated
          solutions that combined powerful AI with an intuitive and accessible design.
        </li>
        <li>
          Integration with Other Systems - Integration was another key factor. Participants
          used APIs and other tools to ensure their solutions could work with existing
          systems, demonstrating the importance of interoperability.
        </li>
        <li>
          Ethical Considerations - Ethical considerations were at the forefront, with teams
          addressing issues related to data privacy, bias, and fairness. Judges valued
          solutions that incorporated strong ethical practices.
        </li>
      </ul>
      <div className={styles.imageWrapper}>
        <Image
          fill={true}
          src="/images/sharpist/3.jpg"
          alt="the judges of sharpist hackathon"
        />
      </div>
      <i>The Winners</i>
      <p>
        Among 140 teams from CIS countries, 32 teams sorted on the base of requirements.
        Winners are teams from Uzbekistan “Dots” and “Bruh Tech”, from Kazakhstan “Balmuzdaq
        Studio”. The winning teams showcased remarkable creativity and technical expertise.
        Their solutions stood out for their innovative use of Microsoft technologies,
        seamless integration and commitment to ethical AI practices. The hackathon not only
        demonstrated the potential of AI in education but also highlighted the importance of
        collaboration and diversity in tech.
      </p>
      <div className={styles.imageWrapper}>
        <Image
          fill={true}
          src="/images/sharpist/4.jpg"
          alt="episode from sharpist hackathon"
        />
      </div>
      <i>Looking Ahead</i>
      <p>
        As AI continues to evolve, hackathons like this one are crucial for exploring new
        possibilities and fostering innovation. The Sharpist Hackathon serves as a testament
        to the transformative power of AI and Microsoft technologies in creating
        personalized learning experiences. As we look to the future, the lessons learned
        from this hackathon will undoubtedly inspire further advancements in AI-based
        educational tools.
      </p>
      <div className={styles.imageWrapper}>
        <Image fill={true} src="/images/sharpist/5.jpg" alt="MDC Uzbekistan community" />
      </div>
    </section>
  );
};

export default Page;
