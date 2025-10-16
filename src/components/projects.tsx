"use client";

import { useEffect, useState } from "react";
import GradientText from "./gradient-text";
import ProjectCards from "./project-cards";
import { projectsApi, Project } from "../lib/api";
import { getProjectImage } from "../lib/projectImages";
import { motion } from "motion/react";
import { SECTION_HEADERS_TRANSITION } from "@/utils/transitions";

type Props = {};

const Projects = (props: Props) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const projectsData = await projectsApi.getProjects();
        setProjects(projectsData);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="mt-20 mx-20 mb-10">
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
            className="custom-class text-[3rem]! "
          >
            Projects
          </GradientText>
        </motion.div>
        <div className="mt-10 text-center">
          <p className="text-[#9E9E9E]">Loading projects...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="mt-20 mx-20 mb-10 relative">
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
            className="custom-class text-[3rem]! "
          >
            Projects
          </GradientText>
        </motion.div>
        <div className="mt-10 text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="mt-20  mb-10 relative w-full">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={SECTION_HEADERS_TRANSITION}
        viewport={{ once: true }}
        className="px-6 sm:px-20"
      >
        <GradientText
          colors={["#F3F3F3", "#9E9E9E", "#F3F3F3", "#9E9E9E", "#F3F3F3"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class text-[3rem]! text-center  md:text-left mx-auto md:mx-0"
        >
          Projects
        </GradientText>
      </motion.div>
      <section className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-10 relative py-[2rem] px-6 sm:px-20">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              type: "spring",
              bounce: 0.5,
              ease: "easeIn",
              delay: (index + 1) * 0.1,
            }}
          >
            <ProjectCards
              key={project.id}
              image={getProjectImage(project.title)}
              title={project.title}
              description={project.description}
              link={project.link}
              direction={index % 2 === 0 ? "left" : "right"}
            />
          </motion.div>
        ))}
      </section>
    </section>
  );
};

export default Projects;
