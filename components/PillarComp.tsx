import { Shape } from "./Hexagon";

interface PillarCompProps {
  color: string;
  label: string;
  image: React.ReactNode;
  content: string;
  lines: React.ReactNode[];
}
const PillarComp = ({
  color,
  label,
  // image,
  content,
  lines,
}: PillarCompProps) => {
  return (
    <div className="flex flex-col items-center relative">
      <Shape color={color} size={120}>
        {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none flex items-center justify-center h-[80px] w-[80px]">
          {image}
        </div> */}
      </Shape>

      {/* Lines render */}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 flex space-x-2">
        {lines.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>

      {/* Label and content */}
      <div className="text-lg font-semibold mt-16">{label}</div>
      <div className="mt-2 text-center max-w-xs text-sm">{content}</div>
    </div>
  );
};

export default PillarComp;
