import Connect from "@/components/home/connect";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Schedule from "@/components/home/schedule";
import Speakers from "@/components/home/speakers";
import Sponsors from "@/components/home/sponsors";
import Swags from "@/components/home/swags";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Speakers />
      <Schedule />
      <Sponsors />
      <Swags />
      <Connect />
    </>
  );
}
