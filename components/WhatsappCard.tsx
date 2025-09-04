import Image from "next/image";

export const WhatsAppCard: React.FC = () => (
  <div className="flex flex-col items-center">
    <h2 className="font-extrabold text-xl mb-5 mt-4 uppercase text-center">REACH OUT TO US</h2>
    <div className="bg-[#25D366]  rounded-2xl flex items-center px-8 py-8 w-full max-w-xl">
      <div className="flex-1 w-full">
        <p className="text-white text-left text-3xl font-medium mb-3">
          Chat with us directly<br />via <span className="font-bold">WhatsApp</span>
        </p>
        <p className="text-white text-left text-xl mb-4">
          Our Support Team is here for you. Reach out to us in case of any doubts/feedbacks.
        </p>
         <a
          href="" 
          target="_blank"
        
          className="block md:mx-0 bg-white text-[#25D366] font-medium rounded px-6 py-2 text-base text-center transition hover:bg-gray-100"
          style={{ width: "fit-content" }}
        >
          Message on WhatsApp
        </a>
      </div>
      <div className="ml-8  ">
        <Image
          src="/contact/wp.svg" 
          alt="WhatsApp"
          width={120}
          height={120}
          className="w-40 h-40 md:w-42 md:h-42"
        />
      </div>
    </div>
  </div>
);
