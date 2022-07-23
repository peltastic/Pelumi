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
import Skills from "./Skills";
const AboutMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [bodyRef, bodyInView] = useInView();
  const [text1Ref, text1InView] = useInView();
  const [text2Ref, text2InView] = useInView();

  useEffect(() => {
    viewHandler(inView);
    viewHandler(text1InView);
    viewHandler(text2InView);
    viewHandler(bodyInView);
  }, [controls, inView, text1InView, text2InView, bodyInView]);

  const viewHandler = (view) => {
    if (view) {
      controls.start("visible");
    }
  };

  return (
    <section
      id="about"
      className=" max-h-[800px] mt-[10rem] mx-auto  relative sm:overflow-hidden mb-28"
    >
      <motion.h1
        ref={ref}
        variants={headerVariants(100)}
        initial="hidden"
        animate={controls}
        className="block mb-8 mt-[5rem] sm:mt-0 font-secondary py-12 sm:py-0 text-[#fff] text-[3rem] text-right px-[5rem] "
      >
        About Me
      </motion.h1>
      <motion.div
        ref={ref}
        variants={lineVariants("-100%")}
        initial="hidden"
        animate={controls}
        className=" w-full h-[2px] mb-2 bg-primary-dark"
      ></motion.div>
      <motion.div
        ref={ref}
        variants={lineVariants("100%")}
        initial="hidden"
        animate={controls}
        className=" w-full h-[2px] mb-20 xxl:mb-[10rem] bg-primary-dark"
      ></motion.div>

      <div className="flex  justify-center h-full sm:items-center sm:mt-[2rem]">
        <motion.div
          ref={bodyRef}
          variants={slideInVariant(0, -150)}
          initial="hidden"
          animate={controls}
          className="w-[30%] my-auto hidden sm:flex justify-center"
        >
          <Image src={LaptopImgDark} />
        </motion.div>

        <div className="w-[90%] sm:w-[50%] sm:my-auto px-[2rem] md:px-[5rem] m-w-[100px] text-5xl sm:text-2xl mt-[10rem] sm:mt-auto  text-[#252525]">
          <motion.p
            ref={text1Ref}
            variants={scaleUpVariant(0.2)}
            initial="hidden"
            animate={controls}
            className="mb-[2rem] font-normal sm:font-bold text-[#ffffff]"
          >
            I'm a frontend engineer with the drive of solving and researching on
            frontend related problems to improve my knowledge, implement them on
            my projects and learn from them to provide solutions.{" "}
          </motion.p>
          <motion.p
            ref={text2Ref}
            variants={scaleUpVariant(0.2)}
            initial="hidden"
            animate={controls}
            className="mb-[10rem] sm:mb-auto font-normal sm:font-bold text-[#ffffff]"
          >
            I have a passion for the software engineering ecosystem and love
            implementing peoples ideas,designs and solutions into software. I
            believe in others around me and myself. Though i am familiar and use
            backend technologies, i focus more on the frontend side of things.
          </motion.p>
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default AboutMe;
