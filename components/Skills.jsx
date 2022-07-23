import ts from "../public/skills/typescript.svg";
import tailwind from "../public/skills/tailwind.svg";
import react from "../public/skills/react.svg";
import node from "../public/skills/node.svg";
import mongodb from "../public/skills/mongodb.svg";
import firebase from "../public/skills/firebase.svg";
import css from "../public/skills/css.svg";
import javascript from "../public/skills/javascript.svg";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { slideInVariant } from "../variants/variants";

const Skills = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);
  const skills = [
    ["CSS", css],
    ["TAILWIND", tailwind],
    ["TYPESCRIPT", ts],
    ["JAVASCRIPT", javascript],
    ["REACTJS", react],
    ["NODEJS", node],
    ["MONGODB", mongodb],
    ["FIREBASE", firebase],
  ];

  return (
    <section className="w-full mt-[5rem] xxl:mb-[10rem]">
      <h1 className="font-secondary text-[#fff] text-center text-4xl mb-24 sm:mb-[4rem]">
        My Skills
      </h1>
      <div className="flex mx-auto flex-wrap items-center  h-[10rem] w-[100%] sm:w-[70%] justify-around">
        {skills.map((item, index) => (
          <motion.div
            ref={ref}
            variants={slideInVariant(index * 0.1, 40)}
            initial="hidden"
            animate={controls}
            key={index}
            className="w-[25%] sm:w-[10%] rounded-full border h-[9rem] flex flex-col items-center justify-end"
          >
            <div>
              <Image src={item[1]} alt={item[0]} />
            </div>
            <p className="text-[#fff]">{item[0]}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
