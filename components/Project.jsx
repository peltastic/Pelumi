import Link from "next/link";
import { GithubIcon, LiveIcon } from "../components/Icons";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

const Project = ({ name, tech, github, live, desc, classEl }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const skills = ["Nextjs", "Nodejs", "Postgres", "Tailwind"];
  return (
    <div className="w-[350px] h-[450px] sm:h-[400px] sm:w-[400px] pb-10 mx-12 relative bg-[#fff]  z-50 rounded-2xl overflow-hidden shadow-2xl">
      <div
        className={`${
          theme === "dark" ? classEl[1] : classEl[0]
        } transition-[all] w-full z-[70] h-[200px] lg:h-[16.6rem]`}
      ></div>
      <div className="px-14 sm:px-8 py-10 ">
        <h1 className="text-grey-secondary font-secondary text-3xl sm:text-2xl mt-4">
          {name}
        </h1>
        <div className="flex flex-wrap justify-between mt-6">
          {tech.map((item, index) => (
            <div
              key={index}
              className="px-6 sm:px-4 py-2 sm:py-1 my-2 bg-primary-light dark:bg-[#494949] rounded-full text-[#fff] shadow-lg text-xl"
            >
              <p className="">{item}</p>
            </div>
          ))}
        </div>
        <p className="mt-[2rem] text-4xl sm:text-lg font-bold">{desc}</p>
        <div className=" absolute left-[3rem] bottom-[2rem] mt-9 flex items-center text-grey-secondary">
          <Link href={live}>
            <a className="flex items-center mr-8">
              <p className="mr-2 text-4xl sm:text-lg font-bold">Live</p>
              <LiveIcon />
            </a>
          </Link>
          <Link href={github}>
            <a className="flex items-center">
              <p className="mr-2 text-4xl sm:text-lg">Code</p>
              <GithubIcon />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
