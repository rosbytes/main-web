import Image from "next/image";
import forThePeople from "../public/For-the-People.svg";
import quoteL from "../public/quote-l.svg";
import quoteR from "../public/quote-r.svg";
const QuoteCard = () => {
  return (
    <div>
      <section className="relative h-[90vh]  bg-[#993487] py-18 px-6 text-center overflow-hidden">
        <Image
          src={forThePeople}
          alt="for the people "
          className="absolute inset-0 mix-blend-overlay w-full h-full  pointer-events-none"
        />

        <div className="relative max-w-3xl mx-auto flex flex-col gap-20">
          <h2 className="text-7xl font-bold tracking-tight text-white mb-4">
            THE NEW REPUBLIC
          </h2>

          <div className="flex flex-col ">
            <blockquote className="text-4xl relative  text-white/90 italic">
              <Image src={quoteL} alt="quote left" width={30} height="30" />
              We want to show the world, <br />
              through our actions, how to <br />
              transform an unorganized and exploiting system into a <br />
              flourishing one.”
              <Image src={quoteR} alt="quote left" className="absolute right-0 top-0" width={30} height="30" />
            </blockquote>
            <p className="mt-8 text-white/70 text-2xl font-semibold">
              ~ Team R.O.S.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuoteCard;
