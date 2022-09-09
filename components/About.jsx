import React from "react";
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
  return (
    <section id="about" className="mt-[7rem]">
      <h1 className="text-center text-6xl text-white10">
        About <span className="text-secondary">Me</span>{" "}
      </h1>
      <div className="flex flex-wrap items-start">
        <div className="w-[70%] sm:w-[50%] mx-auto sm:mx-0">
          <Image src={AboutiIlustration} alt="about" />
        </div>
        <div className="w-[100%] sm:w-[40%]  ml-[2rem] mt-[4rem] md:mt-[10rem] text-white10">
          <h2 className="text-3xl mb-11 sm:ml-11 text-center sm:text-left">SKILLS</h2>
          <div className="flex flex-wrap ">
            {skillsList.map((el, index) => (
              <div
                className="w-[25%] flex flex-col items-center my-1"
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
        <p className="mb-7 mt-12">
          {" "}
          I'm a frontend engineer with the drive of solving and researching on
          frontend related problems to improve my knowledge, implement them on
          my projects and learn from them to provide solutions
        </p>
        <p>
          I have a passion for the software engineering ecosystem and love
          implementing peoples ideas,designs and solutions into software. I
          believe in others around me and myself. Though i am familiar and use
          backend technologies, i focus more on the frontend side of things.
        </p>
      </div>
    </section>
  );
}

export default About;
