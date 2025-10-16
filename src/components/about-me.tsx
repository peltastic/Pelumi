"use client";

import { Monitor, Wrench, Server } from "lucide-react";
import AboutCards from "./about-cards";
import GradientText from "./gradient-text";
import { motion } from "motion/react";
import { SECTION_HEADERS_TRANSITION } from "@/utils/transitions";
type Props = {};
const skills = [
  "REACT",
  "NEXTJS",
  "ANGULAR",
  "EXPRESS",
  "NESTJS",
  "GOLANG",
  "MONGODB",
  "POSTGRESQL",
];
const aboutCardData = [
  {
    borderStyle: "top" as const,
    title: "Frontend Engineering",
    description:
      "Frontend development extends beyond crafting interfaces; it involves deep technical understanding to ensure performance, scalability, and responsiveness. I combine strong engineering insight with design intuition to build user experiences that are both powerful and easy to use.",
    icon: <Monitor size={40} />,
  },
  {
    borderStyle: "left" as const,
    title: "Backend & Infra",
    description:
      "Backend systems form the backbone of every great product. I understand how to design and scale systems effectively while maintaining clean architecture and well-structured code that ensures performance, reliability, and long-term maintainability.",
    icon: <Server size={40} />,
  },
  {
    borderStyle: "top" as const,
    title: "Flexibiltity",
    description:
      "The ability to adapt to new tools and technologies in a fast-evolving industry is an underrated skill. With a solid grasp of software engineering fundamentals, I take pride in my flexibility to quickly learn, integrate, and apply the right technologies needed to deliver successful products.",
    icon: <Wrench size={40} />,
  },
];
const AboutMe = (props: Props) => {
  return (
    <section
      id="about"
      className="mt-[7rem] md:mt-[15rem] bg-[var(--background)] z-10 relative mx-6 sm:mx-20 text-center  rounded-xl border border-[#262626] py-10 xs:py-20 shadow-[0_4px_12px_rgba(0,0,0,0.25)] text-[#F3F3F3] px-4 xs:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={SECTION_HEADERS_TRANSITION}
        viewport={{ once: true }}
      >
        <GradientText
          colors={["#F3F3F3", "#9E9E9E", "#F3F3F3", "#9E9E9E", "#F3F3F3"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class text-[2rem] md:text-[3rem]! mx-auto "
        >
          How I can contribute to Your Organization
        </GradientText>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ...SECTION_HEADERS_TRANSITION,
          delay: 0.1,
        }}
        className="text-[#9E9E9E] font-light mt-4 text-justify md:text-center"
      >
        I'm a software engineer equipped with a wide range of technical skills
        and the ability to adapt across stacks to meet diverse engineering
        challenges{" "}
      </motion.p>

      <section className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-20 w-fit mx-auto ">
        {aboutCardData.map((card, index) => (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.5,
              ease: "easeIn",
              delay: (index + 1) * 0.2,
            }}
            viewport={{ once: true }}
          >
            <AboutCards
              key={card.title}
              borderStyle={card.borderStyle}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          </motion.div>
        ))}
      </section>
      <section className="mt-20">
        <GradientText
          colors={["#F3F3F3", "#9E9E9E", "#F3F3F3", "#9E9E9E", "#F3F3F3"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class text-[1.5rem] md:text-[2rem]! mx-auto "
        >
          Skills
        </GradientText>
        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 justify-center">
          {skills.map((skill) => (
            <p key={skill} className="uppercase  font-light">
              {skill}
            </p>
          ))}
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
