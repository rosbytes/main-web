import Image from 'next/image';

type SocialCardProps = {
  href: string;
  iconPath: string;
  label: string;
  brandColor: string;
  labelColor: string;
};

export const SocialCard: React.FC<SocialCardProps> = ({
  href,
  iconPath,
  label,
  brandColor,
  labelColor,
}) => (
  <a
    href={href}
    target="_blank"
    
    className="w-[200px] h-[240px] flex flex-col items-center justify-end rounded shadow-lg text-center overflow-hidden transition-transform hover:-translate-y-2 hover:scale-105"
    style={{ background: brandColor }}
  >
    <div className="flex items-center justify-center w-full flex-1 ">
      <Image src={iconPath} width={60} height={60} alt={label + " icon"} />
    </div>
    <div
      className="w-full border-t text-base py-2 font-medium tracking-wide bg-white"
      style={{ color: labelColor }}
    >
      {label} &rarr;
    </div>
  </a>
);
