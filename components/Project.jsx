import Link from "next/link";
import { GithubIcon, LiveIcon } from "../components/Icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { slideInVariant, fadeUp } from "../variants/variants";

const Project = ({ name, tech, github, live, desc, link }) => {
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
    <motion.div
      ref={ref}
      variants={slideInVariant(0,-150)}
      initial="hidden"
      animate={controls}
      className=" w-[90%] overflow-visible sm:w-[70%] md:w-[45%] lg:w-[30%]  mb-20 h-[300px] pb-10 mx-6 relative border border-primary-dark border-x-2 z-50  shadow-2xl"
    >
      <motion.div
        ref={ref}
        variants={slideInVariant(0,150)}
        initial="hidden"
        animate={controls}
        className="absolute left-[10px] h-[300px] border-l b border-primary-dark border-2 mr-[-10px] mt-[-10px] w-[100%] "
      >
        <motion.div
          ref={ref}
          variants={fadeUp()}
          initial="hidden"
          animate={controls}
          className="px-14 sm:px-8 py-10 "
        >
          <h1 className="text-[#fff] secondary font-secondary text-3xl sm:text-2xl mt-4">
            {name}
          </h1>
          <div className="flex flex-wrap justify-between my-[4rem]  w-[80%] ">
            {tech.map((item, index) => (
              <div
                key={index}
                className=" bg-primary-dark px-6 sm:px-4 py-2 sm:py-1 my-2 text-[#fff] shadow-lg text-xl"
              >
                <p
                  className="text-[#ffffff] text-[10px]"
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-[2rem] text-4xl text-[#fff] sm:text-lg font-bold">
            {desc}{" "}
            <span>
              {link ? (
                <a className="underline" href={link}>
                  {link}
                </a>
              ) : null}
            </span>
          </p>
        </motion.div>
        <div className=" absolute left-[3rem] bottom-[2rem] mt-9 flex items-center text-grey-secondary">
          <Link href={live}>
            <a className="flex items-center mr-8">
              <p className="mr-2 text-4xl sm:text-lg font-bold text-[#fff]">
                Live
              </p>
              <LiveIcon />
            </a>
          </Link>
          {github ? (
            <Link href={github}>
              <a className="flex items-center">
                <p className="mr-2 text-4xl sm:text-lg text-[#fff]">Code</p>
                <GithubIcon />
              </a>
            </Link>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
