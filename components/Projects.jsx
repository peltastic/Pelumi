import Image from "next/image";
import ProjectImg from "../assets/projects.svg";
import Project from "./Project";
import BackgroundImg from "../assets/header.svg";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Projects = () => {
  const projectsList = [
    {
      name: "TechStore",
      tech: ["Nextjs", "Nodejs", "Postgres", "Tailwind"],
      github: "https://github.com/peltastic/techstore_frontend",
      live: "https://techstore8.vercel.app/",
      desc: "Basic e-commerce web store workflow, admins can add products to the store, users can save products to cart and make orders",
      class: ["tech_store_light", "tech_store_dark"],
    },
    {
      name: "Youtube Clone",
      tech: ["Nextjs", "Firebase", "Tailwind"],
      github: "https://github.com/peltastic/YOUTUBE_CLONE",
      live: "https://social-media-app-with-react-and-firebase.vercel.app/",
      desc: "A youtube clone/like app which allows users to create a channel, subscribe to a channel, watch videos posted by a channel, like/dislike videos, delete/post videos, create a playlist of videos.",
      class: ["youtube_light", "youtube_dark"],
    },
    {
      name: "Social Media App Concept",
      tech: ["Nextjs", "Firebase", "tailwind"],
      github:
        "https://github.com/peltastic/Social-Media-App-With-React-and-Firebase",
      live: "https://youtube-clone-wine.vercel.app/",
      desc: "A social media app where the user can share photos, like and comments on posts",
      class: ["social_light", "social_dark"],
    },
    {
      name: "Interior Page Design Implementation ",
      tech: ["React", "Taiwind", "Gsap"],
      github: "",
      live: "",
      desc: "Coming soon..",
      class: [],
    },
    {
      name: "Finance Site Design Implementation",
      tech: ["React", "Tailwind", "Gsap"],
      github: "",
      live: "",
      desc: "Coming soon...",
      class: [],
    },
  ];

  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  useEffect(() => {
    const element = sectionRef.current;
    gsap.to(element.querySelector(".projects"), {
      x: -1600,
      scrollTrigger: {
        trigger: element,
        start: "top 85px",
        end: "1500px",
        scrub: true,
        pin: true,
      },
    });
  }, []);
  return (
    <section
      id="projects"
      ref={sectionRef}
      className="max-w-[1650px] max-h-[800px] mx-auto mt-[10rem] h-[70vh] sm:h-[90vh] overflow-x-hidden relative"
    >
      <h1 className="font-secondary dark:text-[#fff] text-[3rem] text-center mb-[15rem] sm:mb-[6rem]">
        Projects
      </h1>
      <div className=" hidden lg:block absolute -top-[12rem] -left-[30rem] md:-left-[20rem] ">
        <Image src={ProjectImg} />
      </div>
      <div className=" hidden lg:block absolute -top-[30rem] lg:-top-[26rem] -right-[45rem] md:-right-[25rem]">
        <Image src={BackgroundImg} />
      </div>
      <div className=" inline-flex items-start projects sm:h-full px-[1rem] my-auto justify-around">
        {projectsList.map((item, index) => {
          return (
            <Project
              name={item.name}
              tech={item.tech}
              github={item.github}
              live={item.live}
              desc={item.desc}
              classEl={item.class}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
