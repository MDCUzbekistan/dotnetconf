import React from "react";
import styles from "./code-of-conduct.module.css";
import Heading from "@/components/heading";

const Page = () => {
  return (
    <section className={styles.wrapper}>
      <Heading level={2}>Code of Conduct</Heading>
      <br />
      <p>
        By participating in our conference, you agree to abide by the following
        Code of Conduct:
      </p>
      <br />
      <p>
        Our mission is to create an inclusive and respectful environment for all
        conference participants, both digitally and in person. We expect all
        attendees to uphold these principles throughout the conference and
        related activities.
      </p>
      <br />
      <p>
        Unacceptable behavior includes disruptions, disrespect, or any form of
        degradation toward others, whether through messages, images, or
        interactions.
      </p>
      <br />
      <p>
        We strictly prohibit harassment or discrimination based on age,
        ancestry, color, gender identity or expression, national origin,
        physical or mental disability, religion, sexual orientation, or any
        other characteristic protected by local laws and regulations.
      </p>
      <br />
      <p>
        We encourage all participants to help maintain a welcoming and secure
        atmosphere. Please report any concerns, harassment, or disruptive
        activities to the event organizers.
      </p>
      <br />
      <p>
        If you believe anyone is not adhering to this Code of Conduct or is
        inconsistent with our conference&apos;s culture, please don&apos;t
        hesitate to contact us. Your feedback is essential to ensuring a
        positive conference experience for everyone.
      </p>
      <br />
      <p>
        We reserve the right to deny entry or remove any individual from our
        conference at our sole discretion. Your cooperation in fostering a
        respectful environment is greatly appreciated.
      </p>
    </section>
  );
};

export default Page;
