import { useState } from "react";
import Project from "./Project";
import { ProjectInfo } from "./ProjectInfo";
import classes from "../styles/background.module.css";

function Projects() {

  return (
    <>
      <div className="">
        <h1 className="text-white text-center">PROJECTS</h1>
        <div
          className={` flex flex-wrap w-full p-10 mx-auto ${classes.project_con}`}
        >
          {ProjectInfo.map((item, index) => {
            return (
              <Project
                key={index}
                name={item.name}
                image={item.image}
                class={item.class}
                desc={item.desc}
                github={item.github}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
