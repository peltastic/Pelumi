import { ProjectList } from "../data/project";
import Project from "./Project";
import Image from "next/image";
import CancelImg from "../assets/cancel.svg";

function Projects() {
  return (
    <>
      <section className="flex w-full h-screen relative z-[10000]">
        <div className="absolute z-50 top-12 left-8 cursor-pointer">
          <Image src={CancelImg} alt="cancel" />
        </div>

        <div className="absolute flex flex-wrap top-[10rem] w-full">
          {ProjectList.map((item, index) => {
            return (
              <Project
                key={index}
                name={item.name}
                tech={item.tech}
                github={item.github}
                live={item.live}
                desc={item.desc}
                classEl={item.class}
                link={item?.link}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Projects;
