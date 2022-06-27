import Project from "./Project";
import { useEffect } from "react";
import { ProjectList } from "../data/project";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {headerVariants, lineVariants} from "../variants/variants"
export 

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <section
      id="projects"
      className=" w-full mx-auto relative mt-[20rem] sm:mt-1 overflow-hidden"
    >
      <motion.h1
      ref={ref}
      variants={headerVariants(-100)}
      initial="hidden"
      animate={controls}
       className="pl-[4rem] sm:pl-[7rem] py-12 sm:py-0 font-secondary  text-[#fff] text-[3rem] text-left">
        Projects
      </motion.h1>
      <motion.div 
      ref={ref}
      variants={lineVariants("100%")}
      initial="hidden"
      animate={controls}
      className=" w-full h-[2px] bg-primary-dark  mb-[15rem] sm:mb-[6rem]"></motion.div>

      <div className="flex md:pl-[2rem] flex-wrap items-start sm:h-full  my-auto w-full justify-center md:justify-start">
        {ProjectList.map((item, index) => {
          return (
            <Project
              key={index}
              name={item.name}
              tech={item.tech}
              github={item.github}
              live={item.live}
              desc={item.desc}
              classEl={item.class}
              link={item?.link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
