import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  image: StaticImageData;
  title: string;
  description: string;
  direction: "left" | "right";
  link: string;
};

const ProjectCards = (props: Props) => {
  return (
    <Link href={props.link}>
      <div
        className={` bg-[var(--background)]  border-[#262626] relative z-10 hover:bg-[#1d1d1d] transition-all duration-500 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.25)] ${
          props.direction === "left"
            ? "border-b border-l"
            : " border-t border-r"
        }`}
      >
        <div
          className={` ${
            props.direction === "left"
              ? "border-l border-b mb-2 -ml-2"
              : "border-r border-t mt-2 -mr-2 "
          }  border-[#262626] px-10 py-10 rounded-xl lg:h-[32rem] relative z-10 bg-[var(--background)] hover:bg-[#1d1d1d] transition-all duration-500`}
        >
          <div className="w-fit  h-fit relative">
            <div className="absolute bg-[#09090940] left-0 top-0 w-full h-full"></div>
            <div className="lg:h-[14rem]">
              <Image
                src={props.image}
                alt={props.title}
                className=" h-full rounded-xl"
              />
            </div>
          </div>
          <h1 className="text-[#F3F3F3] text-lg my-10">{props.title}</h1>
          <p className="text-[#9E9E9E] text-sm">{props.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCards;
