import classes from "../styles/project.module.css";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";

function Project({ image, name, desc, link, github }) {
  return (
    <div
      className={` h-72 w30 bg-zinc-800 text-white relative mx-8 mb-12 rounded-xl ${classes.project}`}
    >
      {image ? (
        <img src={image} alt="" className="h-1/2 m-auto" />
      ) : (
        <div className="h-1/2 bg-slate-800 w-4/5"></div>
      )}
      <div
        className={`${classes.project_background} absolute top-0 left-0 w-full h-1/2`}
      ></div>
      <div className=" px-4 py-2 flex items-center">
        <p className="mr-2 text-sm">{name}</p>
        <Link href={link}>
          <a>
            <BiLinkExternal />
          </a>
        </Link>
      </div>
      <p className="px-4 text-xs mb-2">{desc}</p>
      <div className=" flex bg-zinc-900 items-center px-2 py-2 absolute -right-2 -bottom-4">
        <p className=" text-sm text">GITHUB</p>
        <Link href={github}>
          <a>
            <BiLinkExternal className="-mt-1 ml-1" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Project;
