import Image from "next/image";
import vision from "../public/vision.svg";
const VisionCard = () => {
  return (
    <div className="mt-8 flex flex-col items-center justify-center">
      <h1 className="mb-10 text-3xl font-bold">
        {" "}
        A VISION FOR THE <span className="text-green-500">WORLD</span>
      </h1>
      <div className="relative flex h-[465px] w-[1250px] items-center justify-center overflow-hidden">
        <Image
          src="/hero.png"
          alt="Hero image"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
        />
        <Image src={vision} alt="vision" className="relative z-10 w-[600px]" />
      </div>

      <h1 className="mt-10 mb-10 text-2xl">
        The State-of-the-Art R.O.S. system streamlines and redefines the
        traditional chains of <br />
        trade from producers to consumers to bring affordable and best quality
        groceries to <br />
        each and every individual while being fair to each link of the chain.
      </h1>
    </div>
  );
};

export default VisionCard;
