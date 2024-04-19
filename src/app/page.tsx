import Connect from "@/components/home/connect";
import Faq from "@/components/home/faq";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Rules from "@/components/home/rules";
import Judges from "@/components/home/judges";
import Sponsors from "@/components/home/sponsors";
import Swags from "@/components/home/swags";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Judges />
      <Rules />
      <Sponsors />
      <Swags />
      <Faq />
      <Connect />
    </>
  );
}
