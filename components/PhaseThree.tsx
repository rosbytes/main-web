import Image from "next/image";
import vectorleft from "../public/vectorleft.svg";
import vectorright from "../public/vectorright.svg";
const PhaseThree = () => {
  return (
    <div className=" w-full min-h-screen flex items-center justify-center relative font-sans px-4">
      {/* left vector */}

     
      <div className="absolute left-0 top-0 h-full flex items-center z-10">
        <Image src={vectorleft} alt="vector-left" className="h-[70%] w-auto" />
      </div>

      {/* right vector */}
      <div className="absolute right-0 top-0 h-full flex items-center z-10">
        <Image
          src={vectorright}
          alt="vector-right"
          className="h-[70%] w-auto"
        />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto flex flex-row items-center justify-center relative z-10">
        {/* Center - Phase Grid */}
        <div className="flex flex-col items-center w-full">
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-10">
            {/* PHASE 2 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl font-extrabold opacity-20 tracking-wide uppercase">
                PHASE
              </span>
              <span className="text-white text-[36px] font-[Pacifico,cursive] font-bold -mt-[38px] mb-1">
                TWO
              </span>
              <span className="text-white text-center text-lg">
                Digitalization of the Indian Vegetable Vendor
              </span>
            </div>
            {/* PHASE 3 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl font-extrabold opacity-20 tracking-wide uppercase">
                PHASE
              </span>
              <span className="text-white text-[36px] font-[Pacifico,cursive] font-bold -mt-[38px] mb-1">
                THREE
              </span>
              <span className="text-white text-center text-lg">
                Crop Care Mission
              </span>
            </div>
            {/* PHASE 4 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl font-extrabold opacity-20 tracking-wide uppercase">
                PHASE
              </span>
              <span className="text-white text-[36px] font-[Pacifico,cursive] font-bold -mt-[38px] mb-1">
                FOUR
              </span>
              <span className="text-white text-center text-lg">
                Healthy India Mission
              </span>
            </div>
            {/* PHASE 5 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl font-extrabold opacity-20 tracking-wide uppercase">
                PHASE
              </span>
              <span className="text-white text-[36px] font-[Pacifico,cursive] font-bold -mt-[38px] mb-1">
                FIVE
              </span>
              <span className="text-white text-center text-lg">
                Highest ROI Business
              </span>
            </div>
            {/* PHASE 6 */}
            <div className="flex flex-col items-center">
              <span className="text-7xl font-extrabold opacity-20 tracking-wide uppercase">
                PHASE
              </span>
              <span className="text-white text-[36px] font-[Pacifico,cursive] font-bold -mt-[38px] mb-1">
                SIX
              </span>
              <span className="text-white text-center text-lg">
                World’s Biggest Distribution system
              </span>
            </div>
            {/* PHASE 7 - Highlighted */}
            <div className="flex flex-col items-center  rounded-lg p-2 relative">
              <span className="text-7xl tex-whi font-extrabold opacity-12 tracking-wide uppercase">
                PHASE
              </span>
              <span className="text-white text-[36px] font-[Pacifico,cursive] font-bold -mt-[40px] mb-1">
                SEVEN
              </span>
              <span className="text-white text-center text-lg">
                The Farmverse
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhaseThree;
