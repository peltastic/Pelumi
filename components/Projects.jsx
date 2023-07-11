import React, { useEffect } from "react";
import Image from "next/image";
import { AiFillEye, AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import bgDesignsImg from "../assets/design2.svg";

function Projects() {
  const ProjectList = [
    {
      name: "Shop It",
      tech: ["Nodejs", "Express", "Typescript", "Mysql"],
      github: "https://github.com/peltastic/shopIT",
      desc: "API for shopee type e-commerce app where vendors can upload their products to user and receive analytics on their products and sales",
    },
    {
      name: "Cesory",
      tech: ["Nextjs", "Nodejs", "Typescript", "Postgres"],
      github: "https://github.com/peltastic/cesory",
      live: "https://techstore8.vercel.app/",
      desc: "Ecommerce website where customers can order and save products. New products can be uploaded to the platform ",
    },
    {
      name: "Web3bridge",
      tech: ["Reactjs", "Typescript"],
      live: "https://www.web3bridge.com/",
      desc: "Developed the web3bridge website alongside a team of other developers",
    },
    {
      name: "Youtube Clone",
      tech: ["Nextjs", "Javascript"],
      github: "https://github.com/peltastic/YOUTUBE_CLONE",
      live: "https://youtube-clone-wine.vercel.app/",
      desc: "A youtube clone/like app which allows users to create a channel, subscribe to a channel, watch videos posted by a channel, like/dislike videos, delete/post videos, create a playlist of videos.",
    },
  ];
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="project" className="text-white10 relative">
      <div className="w-[30rem] absolute -left-[17rem] -top-[10rem] opacity-30">
        <Image src={bgDesignsImg} alt="design" />
      </div>
      <h1 className="text-6xl mt-[10rem] mb-16 text-center">Projects</h1>
      <div className="flex sm:ml-[5rem] xl:ml-0 flex-wrap justify-center sm:justify-start">
        {ProjectList.map((el, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className=" w-full xs:w-[90%] sm:w-[40%] xl:w-[45%] sm:mr-20 py-7 px-[3rem] rounded-lg my-12 bg-dark10"
          >
            <h1 className="text-4xl py-7  font-medium">{el.name}</h1>
            <div className="flex text-lg mb-5">
              {el.tech.map((el, index) => (
                <div key={index} className="bg-[#a57e2e] rounded-xl py-2 mr-3 px-3 font-bold">
                  <p>{el}</p>
                </div>
                
              ))}
            </div>
            <p className="text-2xl py-4 ">{el.desc}</p>
            <div className="flex items-center cursor-pointer">
             { el.live ? <Link href={el.live}>
                <a target={"_blank"}>
                  <div className="flex py-6 mr-8 text-2xl items-center">
                    <p className="mr-2 text-secondary">Live</p>
                    <AiFillEye className="text-2xl mt-[.1rem]" />
                  </div>
                </a>
              </Link>: null}
              {el.github ? (
                <Link href={el.github}>
                  <a target={"_blank"}>
                    <div className=" cursor-pointer flex py-6 text-xl mt-[.2rem] items-center">
                      <p className="mr-2 text-secondary">Github</p>
                      <AiOutlineGithub className="text-2xl -mt-[.3rem]" />
                    </div>
                  </a>
                </Link>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
