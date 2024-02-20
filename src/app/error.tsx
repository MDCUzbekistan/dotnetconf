"use client";
import Heading from "@/components/heading/heading";
import React from "react";

const Error = () => {
  return (
    <section className="not-found">
      <Heading className="not-found-title" level={3}>
        Something went wrong, please try again later...
      </Heading>
    </section>
  );
};

export default Error;
