import React from "react";
import PhaseTwo from "./PhaseTwo";
import PhaseThree from "./PhaseThree";

export default function PhaseCard() {
  return (
    <div className="flex w-full flex-col items-center bg-[#2DB15A] pt-8 pb-20">
      <div className="mb-2 font-serif text-2xl text-white">
        The Phases of R.O.S.
      </div>
      <div className="relative mx-auto w-fit">
        <h1 className="mt-10 text-9xl font-extrabold tracking-wide text-white opacity-20 select-none">
          PHASE
        </h1>
        <span
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[38px] font-bold text-white"
          style={{ fontFamily: "'Pacifico', cursive" }}
        >
          ONE
        </span>
      </div>

      <div className="mt-4 mb-10 text-2xl font-extrabold tracking-wider text-white">
        THE BIGGEST BUYER
      </div>

      <PhaseTwo />
      <PhaseThree />
    </div>
  );
}
