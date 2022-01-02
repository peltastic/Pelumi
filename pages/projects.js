import Nav from "../components/Nav";
import Project from "../components/Project";
import { ProjectInfo } from "../components/ProjectInfo";
import classes from "../styles/background.module.css"

function Projects() {
  return (
    <div className="">
      <Nav />
      <div className={` flex flex-wrap w-full p-10 mx-auto ${classes.project_con}`}>
        {ProjectInfo.map((item, index) => {
          return <Project key={index} name={item.name} image={item.image} class={item.class} desc={item.desc} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
