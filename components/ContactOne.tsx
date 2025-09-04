import { socials } from "./SocialData";
import { SocialCard } from "./SocialCard";
import { WhatsAppCard } from "./WhatsappCard";

export const ContactOne: React.FC = () => (
  <section className="py-10 text-center">
    <h1 className="mb-9 text-3xl font-extrabold tracking-wide uppercase">
      JOIN US ON OUR SOCIALS
    </h1>
    <div className="flex justify-center gap-20">
      {socials.map((social) => (
        <SocialCard key={social.label}  {...social} />
      ))}
    </div>

    <div className="my-14 flex items-center px-20">
      <hr className="flex-1 border-t border-gray-300" />
      <span className="text-black-500 mx-4 text-sm font-semibold uppercase">
        or
      </span>
      <hr className="flex-1 border-t border-gray-300" />
    </div>
    <WhatsAppCard/>
  </section>
);
