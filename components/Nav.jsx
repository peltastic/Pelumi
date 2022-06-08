import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-scroll";
import classes from "../styles/nav.module.css";
import SideNav from "./SideNav";
import Backdrop from "./Backdrop";

function Nav() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const sidebarHandelr = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <>
      <div className="fixed z-50">
        <div
          className={`${classes.nav_mobile} py-1`}
          onClick={sidebarHandelr}
        >
          <div className={`${openSidebar ? classes.nav_top : null} my-1`}></div>
          <div className={`${openSidebar ? classes.nav_mid : null} my-1`}></div>
          <div
            className={`${openSidebar ? classes.nav_bottom : null} my-1`}
          ></div>
        </div>
      </div>
      <SideNav show={openSidebar} clicked={sidebarHandelr} />
      {openSidebar ? <Backdrop /> : null}
      <div
        className={` flex z-50 fixed text-white items-center w-full h-12 custom-shadow bg-zinc-800 px-8 ${classes.nav_big}`}
      >
        <Link to="home" spy={true} smooth={true} className="mr-auto">
          <AiOutlineHome className=" text-2xl cursor-pointer" />
        </Link>

        <a
          href={
            "https://drive.google.com/file/d/13Rij9kFpMmfUgF93cYBiZx8726qWGYnU/view"
          }
        >
          <p className=" mx-4 cursor-pointer">Resume</p>
        </a>
        <Link to="projects" spy={true} smooth={true}>
          <p className=" mx-4 cursor-pointer">Projects</p>
        </Link>

        <Link to="inspirations" spy={true} smooth={true}>
          <p className=" mx-4 cursor-pointer">Inspirations</p>
        </Link>
      </div>
    </>
  );
}

export default Nav;
