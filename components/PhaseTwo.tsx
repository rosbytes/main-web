import { Shape } from "./Hexagon";
import Image from "next/image";

import MandiSvg from "../public/mandivendorline.svg";
export default function PhaseTwo() {
  return (
    <>
      <div className="flex flex-row items-center justify-center  w-full max-w-[850px] relative ">
        {/* MANDI HEXAGON */}
        <div className="relative flex flex-col items-center mr-[-20px]">
          <Shape image="/mandi.jpg" size={300} />
          <span className="absolute bottom-2  px-6 py-2 text-white text-3xl font-bold rounded-md ">
            MANDI
          </span>
        </div>

        <Image
          src={MandiSvg}
          alt="MandiSvg"
          width={350}
          height={130}
          priority
          className="z-10"
        />

        {/* VENDOR HEXAGON */}
        <div className="relative flex flex-col items-center ml-[-27px]">
          <Shape image="/vendor.jpg" size={300} />
          <span className="absolute bottom-2 px-6 py-2  text-white text-3xl font-bold rounded-md tracking-wide">
            VENDOR
          </span>
        </div>
      </div>

      {/* Subtitle */}
      <div className="mt-20 text-white text-4xl  font-medium text-center max-w-2xl">
        Establishing R.O.S. as the biggest buyer <br /> in central Mandis
      </div>

      <div className="max-w-6xl mt-20 mx-auto grid  md:grid-cols-3 gap-12 px-6 text-white">
        <div className="text-left text-xl leading-relaxed">
          Organizing the Mandi-
          <br />
          Vendor network by <br />
          onboarding Vendors as one <br />
          unified ROS entity and driving down <br />
          the cost of <br />
          groceries.
        </div>
        <div className="text-left text-[18px] leading-relaxed">
          The involvement of ROS into <br />
          the system delivers <br />
          adequate monitoring of <br />
          grocery sales and enhanced <br /> management while <br /> promising
          growth to each <br />
          associated vendor.
        </div>
        <div className="text-left text-[18px] leading-relaxed">
          The network further <br />
          establishes stability in the <br />
          rather unstable market and <br />
          drastically cuts the amount of wastage and uneven <br /> prices.
        </div>
      </div>
      <div className="text-white text-3xl mt-20 font-medium whitespace-nowrap  ">
        Revealing Soon...
      </div>
    </>
  );
}
