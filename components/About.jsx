import LaptopImg from "../assets/laptop.svg";
import LaptopImgDark from "../assets/laptopDark.svg";
import Image from "next/image";
import BackgroundImg from "../assets/projects.svg";
import HeaderImg from "../assets/header.svg";
import { ThemeContext } from "./ThemeContext";
import { useContext, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const AboutMe = () => {
  gsap.registerPlugin(ScrollTrigger);
  const { theme, setTheme } = useContext(ThemeContext);
  const topTextRef = useRef(null);
  const bottomTextRef = useRef(null);
  const sectioRef = useRef(null);
  const laptopRef = useRef(null);
  const skillsRef = useRef([]);
  const skills = [
    "HTML",
    "CSS/TAILWIND",
    "TYPESCRIPT",
    "REACTJS/NEXTJS",
    "NODEJS",
    "POSTGRES",
    "FIREBASE",
  ];
  useEffect(() => {
    gsap.from(topTextRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.5,
      scale: 0.9,
      scrollTrigger: {
        trigger: topTextRef.current,
        start: "top bottom",
        toggleActions: "restart none none none",
        delay: 0.3,
      },
    });
    gsap.from(bottomTextRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.5,
      scale: 0.9,
      scrollTrigger: {
        trigger: bottomTextRef.current,
        start: "top bottom",
        toggleActions: "restart none none none",
        delay: 0.3,
      },
    });
    gsap.from(skillsRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.5,
      scale: 0.9,
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top bottom",
        toggleActions: "restart none none none",
        delay: 0.3,
      },
    });
    gsap.from(laptopRef.current, {
      x: -40,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: laptopRef.current,
        start: "top bottom",
        toggleActions: "restart none none none",
        delay: 0.3,
      },
    });
    gsap.from(laptopRef.current, {
      y: -20,
      duration: 1,
      repeat: -1,
      yoyo: true,
      delay: 0.5
    });
  }, []);
  return (
    <section
      ref={sectioRef}
      id="about"
      className="mt-[10rem] max-w-[1650px] max-h-[800px] mx-auto  sm:h-[90vh] px-10 relative overflow-hidden"
    >
      <div className="hidden lg:block absolute -top-[4rem] -right-[30rem] md:-right-[20rem] z-0">
        <Image src={BackgroundImg} />
      </div>
      <div className=" hidden lg:block absolute -top-[30rem] lg:-top-[20rem] -left-[50rem] md-left-[40rem] lg:-left-[20rem] ">
        <Image src={HeaderImg} />
      </div>
      <h1 className="block font-secondary dark:text-[#fff] text-[3rem] text-center mb-[0rem]">
        About Me
      </h1>
      <div className="flex justify-center h-full sm:items-center sm:-mt-[2rem]">
        <div
          ref={laptopRef}
          className="w-[50%] my-auto hidden sm:flex justify-center"
        >
          {theme === "light" ? (
            <Image src={LaptopImg} />
          ) : (
            <Image src={LaptopImgDark} />
          )}
        </div>

        <div className="w-[90%] sm:w-[50%] sm:my-auto px-[2rem] md:px-[5rem] text-5xl sm:text-2xl mt-[10rem] sm:mt-auto  text-[#252525]">
          <p
            ref={topTextRef}
            className="mb-[2rem] font-normal sm:font-bold dark:text-[#fff] sm:dark:text-[#c2c1c1]"
          >
            I'm a frontend engineer with the drive of solving and researching on
            frontend related problems to improve my knowledge, implement them on
            my projects and learn from them to provide solutions.{" "}
          </p>
          <p
            ref={bottomTextRef}
            className="mb-[10rem] sm:mb-auto font-normal sm:font-bold dark:text-[#fff] sm:dark:text-[#c2c1c1]"
          >
            I have a passion for the software engineering ecosystem and love
            implementing peoples ideas,designs and solutions into software. I
            believe in others around me and myself. Though i am familiar and use
            backend technologies, i focus more on the frontend side of things.
          </p>
          <h1 className="mt-16 mb-8 text-center font-secondary text-[#282828] dark:text-[#fff] text-4xl">
            SKILLS
          </h1>
          <div className="flex flex-wrap justify-center text-lg w-full">
            {skills.map((item, index) => (
              <div
                key={index}
                ref={(e) => (skillsRef.current[index] = e)}
                className="text-3xl sm:text-xl px-10 sm:px-4 py-3  sm:py-1 mx-4 sm:mx-2 my-4 sm:my-2 bg-primary-light dark:bg-primary-dark rounded-full text-[#fff] shadow-md"
              >
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
