"use client"
import { Pillars } from "./PillarData";
import PillarComp from "./PillarComp";
const PillarCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center py-8 bg-white">
      {Pillars.map((pillar) => (
        <PillarComp
          key={pillar.label}
          color={pillar.color}
          label={pillar.label}
          image={pillar.image}
          lines={pillar.lines}
          content={pillar.content}
        />
      ))}
    </div>
  );
};

export default PillarCard;
