import LaptopImg from "../assets/laptop.svg";
import LaptopImgDark from "../assets/laptopDark.svg";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  scaleUpVariant,
  slideInVariant,
  headerVariants,
  lineVariants,
} from "../variants/variants";
const AboutMe = () => {
  const skills = [
    "HTML",
    "CSS/TAILWIND",
    "TYPESCRIPT",
    "REACTJS/NEXTJS",
    "NODEJS",
    "POSTGRES",
    "FIREBASE",
  ];
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [bodyRef, bodyInView] = useInView()
  // const { scrollYProgress } = useViewportScroll()
  // const initial = useTransform(scrollYProgress, x => x + 0.05);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, bodyInView]);

  return (
    <section
      id="about"
      className=" max-h-[800px] mt-[10rem] mx-auto sm:h-[90vh] relative overflow-hidden"
    >
      <motion.h1
        ref={ref}
        variants={headerVariants(100)}
        initial="hidden"
        animate={controls}
        className="block mt-[5rem] sm:mt-0 font-secondary py-12 sm:py-0 text-[#fff] text-[3rem] text-right px-[5rem]"
      >
        About Me
      </motion.h1>
      {/* block relative w-full h-[2px] */}
      <motion.div
        ref={ref}
        variants={lineVariants("-100%")}
        initial="hidden"
        animate={controls}
        className=" w-full h-[2px]  bg-primary-dark"
      ></motion.div>

      <div className="flex justify-center h-full sm:items-center sm:-mt-[2rem]">
        <motion.div
          ref={bodyRef}
          variants={slideInVariant(0, -150)}
          initial="hidden"
          animate={controls}
          className="w-[50%] my-auto hidden sm:flex justify-center"
        >
          <Image src={LaptopImgDark} />
        </motion.div>

        <div className="w-[90%] sm:w-[50%] sm:my-auto px-[2rem] md:px-[5rem] text-5xl sm:text-2xl mt-[10rem] sm:mt-auto  text-[#252525]">
          <motion.p
            ref={bodyRef}
            variants={scaleUpVariant(.2)}
            initial="hidden"
            animate={controls}
            className="mb-[2rem] font-normal sm:font-bold text-[#ffffff]"
          >
            I'm a frontend engineer with the drive of solving and researching on
            frontend related problems to improve my knowledge, implement them on
            my projects and learn from them to provide solutions.{" "}
          </motion.p>
          <motion.p
            ref={bodyRef}
            variants={scaleUpVariant(.2)}
            initial="hidden"
            animate={controls}
            className="mb-[10rem] sm:mb-auto font-normal sm:font-bold text-[#ffffff]"
          >
            I have a passion for the software engineering ecosystem and love
            implementing peoples ideas,designs and solutions into software. I
            believe in others around me and myself. Though i am familiar and use
            backend technologies, i focus more on the frontend side of things.
          </motion.p>
          <motion.h1
            ref={bodyRef}
            variants={scaleUpVariant()}
            initial="hidden"
            animate={controls}
            className="mt-16 mb-8 text-center font-secondary text-[#fff] text-4xl"
          >
            SKILLS
          </motion.h1>
          <div className="flex flex-wrap justify-center text-lg w-full">
            {skills.map((item, index) => (
              <motion.div
                ref={bodyRef}
                variants={slideInVariant(index * 0.1, 40)}
                initial="hidden"
                animate={controls}
                key={index}
                className="text-3xl sm:text-xl px-10 sm:px-4 py-3  sm:py-1 mx-4 sm:mx-2 my-4 sm:my-2 bg-primary-dark rounded-full text-[#fff] shadow-md"
              >
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
