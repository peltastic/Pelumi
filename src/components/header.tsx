"use client";
import React from "react";
import Image from "next/image";
import ProfileImg from "../../public/images/profile.png";
import GlitchText from "./glitch-text";
import GradientText from "./gradient-text";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "motion/react";

type Props = {};

const Header = (props: Props) => {
  const icon_variants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <header className="px-8 sm:px-20">
      <section className="flex flex-col lg:flex-row justify-between items-center">
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            type: "spring",
            bounce: 0.5,
          }}
          className="w-[7rem] lg:w-[10rem] bg-white rounded-full p-4 mt-10 mb-10 lg:mb-0"
        >
          <Image src={ProfileImg} alt="profile" />
        </motion.div>
        <div className="lg:ml-auto flex items-center gap-x-4 relative z-10">
          <Link
            href="https://www.linkedin.com/in/pelumi-onasoga-4767081ba/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
          <motion.div
            variants={icon_variants}
            initial="hidden"
            animate="visible"
            className="bg-[#9e9e9e12] rounded-full h-[4rem] w-[4rem] flex items-center justify-center"
          >
              <Linkedin size={32} color="#ffffff" />
          </motion.div>
            </Link>
          <motion.div
            variants={icon_variants}
            initial="hidden"
            animate="visible"
            transition={{delay: 0.1}}
            className="bg-[#9e9e9e12] rounded-full h-[4rem] w-[4rem] flex items-center justify-center"
          >
            <Link
              href="https://github.com/peltastic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <Github size={32} color="#ffffff" />
            </Link>
          </motion.div>
          <motion.div
            variants={icon_variants}
            initial="hidden"
            animate="visible"
            transition={{delay: 0.2}}
            className="bg-[#9e9e9e12] rounded-full h-[4rem] w-[4rem] flex items-center justify-center"
          >
            <Link
              href="mailto:onasoga.p@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <Mail size={32} color="#ffffff" />
            </Link>
          </motion.div> 
        </div>
      </section>
      <div className="mt-8">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            ease: "easeIn",
            stiffness: 120,
          }}
        >
          <GradientText
            colors={["#F3F3F3", "#9E9E9E", "#F3F3F3", "#9E9E9E", "#F3F3F3"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class mx-auto lg:mx-0"
          >
            Hi, I'm Pelumi
          </GradientText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            type: "spring",
            ease: "easeInOut",
            stiffness: 120,
            delay: 0.3,
            bounce: 0.3,
          }}
          className="w-fit mx-auto lg:mx-0"
        >
          <GlitchText speed={1} enableShadows={true} className="custom-class">
            Software Engineer
          </GlitchText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            type: "spring",
            ease: "easeInOut",
            stiffness: 120,
            delay: 0.5,
            bounce: 0.3,
          }}
          className="lg:w-[70%] text-[#9E9E9E] mt-10 text-justify lg:text-left "
        >
          <p>
            I'm a <span className="text-[#F3F3F3]">builder</span> talented at
            delivering frontend and backend systems, I love solving problems and
            researching on best approaches to solve them. I've delivered
            applications in various sectors including
            <span className="text-[#F3F3F3]">
              {" "}
              health, education, fintech and entertainment.
            </span>{" "}
            I love building and meeting new people.
          </p>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
