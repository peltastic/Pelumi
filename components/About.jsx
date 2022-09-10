import React, { useEffect } from "react";
import AboutiIlustration from "../assets/aboutillustration.svg";
import Image from "next/image";
import ReactImg from "../assets/react.svg";
import TypescriptImg from "../assets/typescript.svg";
import JavascriptImg from "../assets/javascript.svg";
import NodeImg from "../assets/node.svg";
import NextImg from "../assets/next.svg";
import GitImg from "../assets/git.svg";
import HtmlImg from "../assets/html.svg";
import CssImg from "../assets/css.svg";
import SassImg from "../assets/sass.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  const skillsList = [
    { name: "React.js", img: ReactImg },
    { name: "Javascript", img: JavascriptImg },
    { name: "Typecript", img: TypescriptImg },
    { name: "Node.js", img: NodeImg },
    { name: "Next.js", img: NextImg },
    { name: "Git", img: GitImg },
    { name: "HTML5", img: HtmlImg },
    { name: "CSS3", img: CssImg },
    { name: "SASS", img: SassImg },
  ];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="about" className="mt-[7rem]">
      <h1 className="text-center text-6xl text-white10">
        About <span className="text-secondary">Me</span>{" "}
      </h1>
      <div className="flex flex-wrap items-start">
        <div data-aos="zoom-in" className="w-[70%] sm:w-[50%] mx-auto sm:mx-0">
          <Image src={AboutiIlustration} alt="about" />
        </div>
        <div className="w-[100%] sm:w-[40%]  ml-[2rem] mt-[4rem] md:mt-[10rem] text-white10">
          <h2 className="text-3xl mb-11 sm:ml-11 text-center sm:text-left">
            SKILLS
          </h2>
          <div className="flex flex-wrap ">
            {skillsList.map((el, index) => (
              <div
                data-aos="fade-left"
                data-aos-delay={`${index.toString()}00`}
                className="w-[25%] mb-5 flex flex-col items-center my-1"
                key={index}
                
              >
                <Image src={el.img} alt={el.name} />
                <p>{el.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-white10 py-10  px-[2rem] sm:px-[10rem] md:px-[20rem] text-xl">
        <p data-aos="zoom-in-up" className="mb-7 mt-12">
          {" "}
          I'm an innovative, task-driven front-end developer who loves
          developing user-friendly, fast, dynamic, and creative front-end
          applications. I love working with teams and can work alone, onsite,
          and remotely. I'm proficient in creating user interfaces and writing
          clean, readable codes. I love solving problems.
        </p>
        <p data-aos="zoom-in-up" className="mb-7">
          I use Reactjs mainly and am also comfortable using Next. I love using
          Typescript for my applications and have no problem using Javascript. I
          also know how to use backend technologies like Nodejs at the side and
          can use them for various projects. I love to focus on the front-end
          side of things.
        </p>
        <p data-aos="zoom-in-up">
          I love writing technical articles during my free time about solutions
          to web-related and software development problems.
        </p>
      </div>
    </section>
  );
}

export default About;
