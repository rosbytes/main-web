// import Image from "next/image";
// import Header from "@components/Header";
import VisionCard from "@components/VisionCard";
import PillarCard from "@components/PillarCard";
import QuoteCard from "@components/QuoteCard";
import PhaseCard from "@components/PhaseCard";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <VisionCard />
      <QuoteCard />

      {/* <PillarCard />  */}
      <PhaseCard />
    </>
  );
}
