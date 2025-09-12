import React from "react";
import { departmentHeads } from "@components/AboutData";
import { Shape } from "@components/Hexagon2";

const founderData = {
  image: "/About/maincrop.png",
  name: "Shubham Sharma",
  role: "Founder & CEO",
  quote: "I want to revolutionize the world",
  bio1: "R.O.S. was founded with a daring hope to change the world in an unprecedented way, a feat only accomplishable by a man of that caliber.",
  bio2: "With 8+ years in the world of entrepreneurship and a blood that glows in the color of innovation, the R.O.S. founder is here to change the world for the better.",
};

const Page = () => {
  return (
    <div className="flex h-[90vh] flex-col items-center bg-white py-15">
      <h1 className="custom-roquen mb-8 text-center text-5xl font-extrabold tracking-tight uppercase">
        The R.O.S. Team
      </h1>
      <div className="mb-12 flex w-full max-w-4xl flex-col items-center bg-transparent md:flex-row">
        <div className="mr-5 mb-4 flex w-full flex-shrink-0 justify-center md:mb-0 md:w-[45%]">
          <Shape image={founderData.image} size={400} />
        </div>
        <div className="ml-4 flex w-[55%] flex-col justify-center rounded-2xl bg-[#aa46a4] p-8 text-white">
          <h2 className="custom-apercu mb-1 text-6xl font-bold">
            {founderData.name}
          </h2>
          <div className="custom-apercu mb-2 text-xl font-medium">
            {founderData.role}
          </div>
          <div className="custom-apercu mb-3 text-base italic">
            {founderData.quote}
          </div>
          <div className="custom-apercu mb-2 text-sm">{founderData.bio1}</div>
          <div className="custom-apercu text-sm">{founderData.bio2}</div>
        </div>
      </div>
      <div className="flex max-w-5xl flex-col items-center">
        <div className="custom-roquen mt-12 mb-4 text-2xl font-bold tracking-wide uppercase">
          Head of Departments
        </div>
        <div className="mt-12 grid grid-cols-3 gap-x-16 gap-y-10">
          {departmentHeads.map((data, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <Shape color={data.color} />
              <div className="mt-2 text-center">
                <div className="custom-apercu text-2xl font-bold">
                  {data.name}
                </div>
                <div className="custom-montagu mt-2 text-sm text-green-500">
                  {data.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex w-full flex-col items-center bg-[#3fd088] py-10">
        <div className="custom-roquen mb-6 text-4xl font-bold tracking-wider text-white uppercase">
          Our Vendor Partners
        </div>
        <div className="flex gap-7">
          <div className="flex h-40 w-30 items-center justify-center rounded-xl bg-white text-4xl font-extrabold text-[#3fd088] shadow-lg">
            0
          </div>
          <div className="flex h-40 w-30 items-center justify-center rounded-xl bg-white text-4xl font-extrabold text-[#3fd088] shadow-lg">
            3
          </div>
        </div>
        <div className="custom-apercu mt-2 text-2xl text-white opacity-80">
          {" "}
          &amp; counting...
        </div>
      </div>
    </div>
  );
};

export default Page;
