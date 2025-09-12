"use client";
import Pillars from "./PillarData";
import PillarComp from "./PillarComp";
const PillarCard = () => {
  return (
    <>
      <div className="font-roquen my-27 flex justify-center text-6xl">
        THE PILLAR OF R.O.S.
      </div>
      <div className="mx-43 mb-34 grid grid-cols-1 justify-items-center gap-10 bg-white py-8 sm:grid-cols-2 md:grid-cols-4">
        {Pillars.map((pillar) => (
          <PillarComp
            key={pillar.label}
            color={pillar.color}
            label={pillar.label}
            //@ts-expect-error  image will be received
            image={pillar.image}
            content={pillar.content}
          />
        ))}
      </div>
    </>
  );
};

export default PillarCard;
// "use client";
// import { Pillars } from "./PillarData";
// import PillarComp from "./PillarComp";
// const PillarCard = () => {
//   return (
//     <div className="grid grid-cols-1 justify-items-center gap-10 bg-white py-8 sm:grid-cols-2 md:grid-cols-4">
//       {Pillars.map((pillar) => (
//         <PillarComp
//           key={pillar.label}
//           color={pillar.color}
//           label={pillar.label}
//           image={pillar.image}
//           lines={pillar.lines}
//           content={pillar.content}
//         />
//       ))}
//     </div>
//   );
// };

// export default PillarCard;
