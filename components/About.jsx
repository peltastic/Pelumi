import React, { useEffect } from "react";
import AboutiIlustration from "../assets/aboutillustration.svg";
import Image from "next/image";
import ReactImg from "../assets/react.svg";
import TypescriptImg from "../assets/typescript.svg";
import JavascriptImg from "../assets/javascript.svg";
import bgDesignsImg from "../assets/design1.svg";
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
    <section id="about" className="mt-[9rem] relative">
      <div className="w-[30rem] absolute -right-[17rem] -top-[10rem] opacity-30">
        <Image src={bgDesignsImg} alt="design" />
      </div>
      <h1 className="text-center text-6xl mb-36 text-white10">
        About <span className="text-secondary">Me</span>{" "}
      </h1>
      <div className="flex flex-wrap items-center ">
        <div
          data-aos="zoom-in"
          className="  w-[100%] md2:w-[50%] mb-28 md2:mb-0  bg-white10 rounded-lg mx-auto md2:mx-0"
        >
          <Image src={AboutiIlustration} alt="about" className="" />
        </div>
        <div className="w-[100%] md2:w-[40%]  ml-0 sm1:ml-[2rem]  text-white10">
          <h2 className="text-3xl mb-11 sm:ml-11 text-center md2:text-left">
            SKILLS
          </h2>
          <div className="flex flex-wrap">
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
      <div className="text-white10 py-10  px-[2rem] sm:px-[10rem] md:px-[20rem] text-3xl">
        <p data-aos="zoom-in-up" className="mb-7 mt-12">
          {" "}
          I'm a highly skilled and passionate full-stack web developer with a
          strong commitment to the craft of software development. With a proven
          track record of designing and implementing robust and scalable web
          applications, I possess a deep understanding of modern web
          technologies and frameworks.
        </p>
        <p data-aos="zoom-in-up" className="mb-7">
          My expertise lies in front-end development, where I excel in creating
          intuitive and visually appealing user interfaces that enhance user
          experiences. Additionally, I am proficient in back-end development,
          ensuring seamless integration and optimal functionality of web
          applications..
        </p>
        <p data-aos="zoom-in-up" className="mb-7">
          My continuous drive for learning and staying up-to-date with emerging
          trends and best practices in the software development industry has
          allowed me to adapt quickly to new technologies and deliver innovative
          solutions. I thrive in dynamic and fast-paced environments, leveraging
          my problem-solving skills to overcome challenges and achieve project
          goals.
        </p>
        <p data-aos="zoom-in-up">
          Overall, I am a dedicated and enthusiastic software developer who is
          passionate about creating exceptional web applications. I am eager to
          contribute my skills, knowledge, and creative mindset to drive
          impactful results and make a meaningful contribution to your
          organization's success.
        </p>
      </div>
    </section>
  );
}

export default About;
