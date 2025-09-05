import Image from "next/image";

export const WhatsAppCard: React.FC = () => (
  <div className="flex flex-col items-center">
    <h2 className="mt-4 mb-5 text-center text-xl font-extrabold uppercase">
      REACH OUT TO US
    </h2>
    <div className="flex w-full max-w-xl items-center rounded-2xl bg-[#25D366] px-8 py-8">
      <div className="w-full flex-1">
        <p className="mb-3 text-left text-3xl font-medium text-white">
          Chat with us directly
          <br />
          via <span className="font-bold">WhatsApp</span>
        </p>
        <p className="mb-4 text-left text-xl text-white">
          Our Support Team is here for you. Reach out to us in case of any
          doubts/feedbacks.
        </p>
        <a
          href=""
          target="_blank"
          className="block rounded bg-white px-6 py-2 text-center text-base font-medium text-[#25D366] transition hover:bg-gray-100 md:mx-0"
          style={{ width: "fit-content" }}
        >
          Message on WhatsApp
        </a>
      </div>
      <div className="ml-8">
        <Image
          src="/contact/wp.svg"
          alt="WhatsApp"
          width={120}
          height={120}
          className="h-40 w-40 md:h-42 md:w-42"
        />
      </div>
    </div>
  </div>
);
