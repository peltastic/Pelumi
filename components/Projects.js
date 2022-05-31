import { useState } from "react";
import Project from "./Project";
import { ProjectInfo } from "./ProjectInfo";
import classes from "../styles/background.module.css";

function Projects() {
  const [file, setFile] = useState();
  const upload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setFile(file);
  };
  const send = () => {
    fetch("https://techstore7.herokuapp.com/test")
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <input type="file" onChange={upload} />
      <button onClick={send} className="bg-white">
        submit
      </button>
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
