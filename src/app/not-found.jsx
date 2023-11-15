import Button from "@/components/button";
import Heading from "@/components/heading";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="not-found">
      <Heading className="not-found-title" level={3}>
        404 | Page not found
      </Heading>
      <Button asChild={true} variant="outlined">
        <Link href="/">Go to home</Link>
      </Button>
    </section>
  );
};

export default NotFound;
