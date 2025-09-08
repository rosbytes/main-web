type CardProps = {
  title: string;
  role: string;
  description: string;
  button: string;
  slogan: string;
  gradient: string;
};

const JoinCard: React.FC<CardProps> = ({
  title,
  role,
  description,
  slogan,
  button,
  gradient,
}) => (
  <div
    className={`flex flex-col items-center rounded-2xl bg-gradient-to-br px-7 py-8 shadow-lg ${gradient} text-white`}
  >
    <div className="flex flex-grow flex-col items-center">
      <div className="mb-4 text-lg">{title}</div>
      <div className="mb-3 text-3xl font-extrabold">{role}</div>
      <div className="mb-7 text-center leading-snug">{description}</div>
      
    </div>

    <div className=" flex flex-col items-center">
      <div className="mb-5 text-center">{slogan}</div>
      <button className="rounded-full bg-white px-7 py-3 text-lg font-semibold text-black hover:bg-gray-200">
        {button}
      </button>
    </div>
  </div>
);

export default JoinCard;
