type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  borderStyle: "top" | "left"
};

const AboutCards = (props: Props) => {
  return (
    <div className={` ${props.borderStyle === "top" ? "border-l border-b" : "border-t border-r"} lg:h-[25rem] px-4  xs:px-10 py-10 text-left gap-y-4  rounded-xl  border-[#262626] shadow-[0_4px_12px_rgba(0,0,0,0.25)] `}>
      <div className=" mt-14 xs:mt-20 w-fit">{props.icon}</div>
      <div className=" gap-x-4">
        <h3 className="text-[#F3F3F3] text-lg mt-6 mb-4">{props.title}</h3>
      </div>
      <p className="text-[#9E9E9E] text-sm  font-light ">{props.description}</p>
    </div>
  );
};

export default AboutCards;
