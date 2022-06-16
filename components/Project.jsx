import Link from "next/link";
import { GithubIcon, LiveIcon } from "../components/Icons";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../components/ThemeContext";
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger"

const Project = ({ name, tech, github, live, desc, classEl }) => {
  gsap.registerPlugin(ScrollTrigger)
  const projectRef = useRef(null)
  useEffect(() => {
    gsap.from(projectRef.current, {
      opacity: 0,
      y: 40,
      scrollTrigger: {
        trigger: projectRef.current,
        top: "top bottom",
        duration: 1,
        delay: 1,
        scale: 0,
        toggleActions: "restart none none none",
      }
    })
  }, [])
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div ref={projectRef} className=" w-[90%] sm:w-[70%] md:w-[45%] lg:w-[30%] h-[450px] mb-20 sm:h-[430px] lg:h-[420px] pb-10 mx-6 relative bg-[#fff]  z-50 rounded-2xl overflow-hidden shadow-2xl">
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
