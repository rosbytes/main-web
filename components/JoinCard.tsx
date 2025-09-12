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
    className={`flex flex-col  items-center rounded-2xl bg-gradient-to-br px-7 py-8 shadow-lg ${gradient} text-white`}
  >
    <div className="flex flex-grow flex-col items-center">
      <div className="mb-4 custom-apercu  text-lg">{title}</div>
      <div className="mb-3 text-3xl custom-roquen font-extrabold">{role}</div>
      <div className="mb-7 text-center custom-apercu leading-snug">{description}</div>
      
    </div>

    <div className=" flex flex-col items-center">
      <div className="mb-5 text-center custom-apercu ">{slogan}</div>
      <button className="rounded-full custom-apercu  bg-white px-7 py-3 text-lg font-semibold text-black hover:bg-gray-200">
        {button}
      </button>
    </div>
  </div>
);

export default JoinCard;
