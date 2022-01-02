import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import Link from "next/link";
import classes from "../styles/nav.module.css";
import SideNav from "./SideNav";
import Backdrop from "./Backdrop";

function Nav() {
    const [openSidebar, setOpenSidebar] = useState(false)
  

  return (
    <>
    <div className={`${classes.nav_mobile} py-1 z-50`} onClick={
      () => {
        setOpenSidebar(!openSidebar)
      }
    }>
      <div className={`${ openSidebar ?  classes.nav_top : null} my-1`}></div>
      <div className={`${ openSidebar ? classes.nav_mid : null} my-1`}></div>
      <div className={`${openSidebar ? classes.nav_bottom : null} my-1`} ></div>
    </div>
    <SideNav show={openSidebar}/>
    {openSidebar ?  <Backdrop /> : null}
      <div
        className={` flex text-white items-center w-full h-12 custom-shadow bg-zinc-800 px-8 ${classes.nav_big}`}
      >
        <a href={"/"} className="mr-auto">
          <AiOutlineHome className=" text-2xl cursor-pointer" />
        </a>
        <a href={"https://pelumix.netlify.app/assets/resume.pdf"}>
          <p className=" mx-4 cursor-pointer">Resume</p>
        </a>
        <a href={"/projects"}>
          <p className=" mx-4 cursor-pointer">Projects</p>
        </a>
        <a href={"/aboutme"}>
          <p className=" mx-4 cursor-pointer">About Me</p>
        </a>
      </div>
    </>
  );
}

export default Nav;
