import React from "react";
import styles from "./code-of-conduct.module.css";
import Heading from "@/components/heading";

const Page = () => {
  return (
    <section className={styles.wrapper}>
      <Heading level={2}>Code of Conduct</Heading>
      <br />
      <p>
        By participating in .NET Conf, you agree to adhere to and abide by the{" "}
        <a
          className={styles.link}
          target="_blank"
          href="https://www.microsoft.com/en-us/events/codeofconduct?rtc=2"
        >
          Microsoft Event Code of Conduct
        </a>
        .
      </p>
      <br />
      <p>
        Microsoft&apos;s mission is to empower every person and every
        organization on the planet to achieve more. This includes all Microsoft
        events and gatherings, including on digital platforms and in person,
        where we seek to create a respectful, friendly, enjoyable, and inclusive
        experience for all participants.
      </p>
      <br />
      <p>
        We expect all event participants to uphold the principles of this Code
        of Conduct. The Code of Conduct applies to all aspects of the main event
        and any related activities, whether digital or in person. Microsoft does
        not tolerate the following in any aspect of the event program, including
        business and social activities:{" "}
      </p>
      <br />
      <p>
        Behavior that is disruptive, disrespectful, or degrading to others,
        including any messages, images, or interactions by anyone, in any form,
        regardless of location.
      </p>
      <br />
      <p>
        Harassment or discrimination based on age, ancestry, color, gender
        identity or expression, national origin, physical or mental disability,
        religion, sexual orientation, or any other characteristic protected by
        applicable local laws, regulations, and ordinances.
      </p>
      <br />
      <p>
        We encourage everyone to assist in creating a welcoming and safe
        environment. Please report any concerns, harassing behavior, or
        suspicious or disruptive activity to the event host.
      </p>
      <br />
      <p>
        We also encourage everyone to contact Microsoft&apos;s Business Conduct
        Hotline at any time if you feel anything or anyone is not following this
        Code of Conduct or is inconsistent with Microsoft&apos;s culture. The
        Hotline is available regardless of whether you are a Microsoft employee
        and can be reached at buscond@microsoft.com or +1 (877) 320-MSFT, or
        call collect outside the United States at +1 (720)-904-6844. Microsoft
        employees can also report any concerns to their Microsoft Manager.
      </p>
      <br />
      <p>
        Microsoft reserves the right to refuse admittance to or remove any
        person from a Microsoft event at any time at its sole discretion.
      </p>
    </section>
  );
};

export default Page;
