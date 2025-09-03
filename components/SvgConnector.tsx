import SvgCenter from "../public/svgcenter.svg";
import SvgRight from "../public/svgright.svg";
import SvgLeft from "../public/svgleft.svg";
import Image from "next/image";

export function LeftLine({ color }: { color?: string }) {
  return <Image src={SvgLeft} alt="SvgLeft" width={50} height={50} />;
}

export function CenterLine({ color }: { color?: string }) {
  return <Image src={SvgCenter} alt="SvgCenter" width={50} height={50} />;
}
export function RightLine({ color }: { color?: string }) {
  return <Image src={SvgRight} alt="SvgRight" width={50} height={50} />;
}
