import { useContext, useRef, useEffect, useState } from "react";
import Image from "next/image";
import TagImg from "../assets/tag.svg";
import TagImgDark from "../assets/tag-dark.svg";
import BackgroundImg from "../assets/projects.svg";
import { gsap } from "gsap";
import FlowerImg from "../assets/flower.svg";
import { ThemeContext } from "../components/ThemeContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const [headerTl] = useState(gsap.timeline());
  const listRefs = useRef([]);
  const svgRef = useRef(null);
  const [isLight, setIsLight] = useState(true);
  useEffect(() => {
    if (theme === "light") {
      setIsLight(true);
    } else {
      setIsLight(false);
    }
  }, [theme]);
  useEffect(() => {
    headerTl
      .from(listRefs.current, { opacity: 0, y: 40, duration: 2 })
      .from(svgRef.current, { opacity: 0, x: 40, duration: 2 }, "-=2")
      .from(svgRef.current, {
        y: -20,
        duration: 1,
        repeat: -1,
        yoyo: true,
      });
  }, []);
  return (
    <header
      id="home"
      className="flex mx-auto max-h-[1000px] overflow-hidden justify-center w-full h-[100vh] px-10 py-24 relative"
    >
      <div className="absolute -top-[3rem] sm:-top-[10rem] -left-[45rem] sm:-left-[30rem] md:-left-[20rem] z-0">
        <Image src={BackgroundImg} />
      </div>
      <div
        className={`absolute -top-[45rem] sm:-top-[30rem] lg:-top-[20rem] -right-[45rem] sm:-right-[30rem] lg:-right-[20rem] ${
          isLight ? "opacity-30" : "opacity-80"
        }`}
      >
        <Image src={FlowerImg} />
      </div>
      <div className=" my-auto w-[50%]">
        <h2
          ref={(e) => (listRefs.current[1] = e)}
          className="  text-[3rem] sm:text-[1.7rem] lg:text-[3rem] dark:text-[#fff]"
        >
          <span className="text-primary-light dark:text-primary-dark font-secondary text-[3.2rem] sm:text-[1.9rem] lg:text-[3.2rem]">
            Hi
          </span>
          , I'm Pelumi
        </h2>
        <h1
          ref={(e) => (listRefs.current[2] = e)}
          className="font-secondary text-[5rem] sm:text-[3rem] lg:text-[6rem] dark:text-[#fff]"
        >
          FRONTEND ENGINEER{" "}
          <span className="text-grey-header font-primary text-[2rem] sm:text-[1.5rem] lg:text-[2rem]">
            and
          </span>
        </h1>
        <h1
          ref={(e) => (listRefs.current[3] = e)}
          className="font-secondary text-[5rem] sm:text-[3rem] lg:text-[6rem] dark:text-[#fff]"
        >
          WEB{" "}
          <span className="text-primary-light dark:text-primary-dark">
            DEVELOPER
          </span>{" "}
        </h1>
      </div>
      <div className="my-auto w-[40%] h-full relative">
        <div ref={svgRef} className="absolute center mt-[2rem]">
          {theme === "dark" ? (
            <>
              <Image src={TagImgDark} className="z-50 " />
            </>
          ) : (
            <Image src={TagImg} className="z-50 " />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
