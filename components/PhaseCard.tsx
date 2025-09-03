import React from "react";
import PhaseTwo from "./PhaseTwo";
import PhaseThree from "./PhaseThree";

export default function PhaseCard() {
  return (
    <div className="bg-[#2DB15A] w-full flex flex-col items-center pt-8 pb-20">
      <div className="text-white text-2xl mb-2 font-serif">
        The Phases of R.O.S.
      </div>
      <div className="relative w-fit mx-auto">
        <h1 className="text-white text-9xl mt-10 font-extrabold opacity-20 tracking-wide  select-none">
          PHASE
        </h1>
        <span
          className="absolute left-1/2 -translate-x-1/2 bottom-0 text-white text-[38px] font-bold"
          style={{ fontFamily: "'Pacifico', cursive" }} 
        >
          ONE
        </span>
      </div>

      <div className="mt-4 text-white text-2xl font-extrabold tracking-wider mb-10">
        THE BIGGEST BUYER
      </div>

      <PhaseTwo/>
      <PhaseThree/>
    </div>
  );
}
