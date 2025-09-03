import Image from "next/image";
import vision from "../public/vision.svg"
const VisionCard = () => {
  return (
    <div className="flex mt-8 flex-col items-center justify-center">
      <h1 className="font-bold text-3xl mb-10">
        {" "}
        A VISION FOR THE <span className="text-green-500">WORLD</span>
      </h1>
      <div className="relative w-[1250px] h-[465px] flex justify-center items-center overflow-hidden">
        <Image
          src="/hero.png"
          alt="Hero image"
          fill
          style={{ objectFit: "cover" }}
          className="z-0"
        />
        <Image src={vision} alt="vision" className="relative h-auto w-[600px] z-10 " />
      </div>
     
        <h1 className="mt-10 text-2xl mb-10">
          The State-of-the-Art R.O.S. system streamlines and redefines the
          traditional chains of <br/>
           trade from producers to consumers to bring
          affordable and best quality groceries to <br/>
           each and every individual
          while being fair to each link of the chain.
        </h1>
     
    </div>
  );
};

export default VisionCard;
