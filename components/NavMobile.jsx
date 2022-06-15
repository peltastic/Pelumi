import { gsap } from "gsap";
import { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import LogoDark from "../assets/logoMobileDark.svg";
import LogoLight from "../assets/logoMobileLight.svg";
import { DarkModeIcon, LightModeIcon } from "../components/Icons";
import { ThemeContext } from "../components/ThemeContext";
const NavMobile = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [menuTl] = useState(gsap.timeline({ paused: true }));
  const listRefs = useRef([]);

  const menuBars = {};
  const list = [
    { to: "home", name: "Home" },
    { to: "about", name: "About Me" },
    { to: "projects", name: "Projects" },
    { to: "contact", name: "Contact Me" },
  ];

  useEffect(() => {
    menuTl
      .to(
        menuBars.topBar,
        {
          duration: 0.2,
          rotation: 45,
          top: 30,
        },
        0
      )
      .to(
        menuBars.middleBar,
        { duration: 0.2, opacity: 0, ease: "expo" },
        "-=0.2"
      )
      .to(
        menuBars.bottomBar,
        { duration: 0.2, rotation: -45, top: 30 },
        "-=0.2"
      )
      .to(menuBars.navBar, { duration: 0.2, x: 0 }, "-=0.2")
      .from(listRefs.current, {
        opacity: 0,
        y: 10,
        duration: 0.2,
      })
      .from(
        menuBars.resume,
        {
          opacity: 0,
          y: 10,
          duration: 0.2,
        },
        "-=0.2"
      )
      .reverse();
  }, []);
  const toggleMenuTimeline = () => {
    menuTl.reversed(!menuTl.reversed());
  };

  return (
    <>
      <div className="block z-[50] sm:hidden absolute top-[4rem] left-[4rem]">
        {theme === "light" ? (
          <Image src={LogoLight} />
        ) : (
          <Image src={LogoDark} />
        )}
      </div>
      <div className=" rounded-full shadow-xl shadow-[#49494989] dark:shadow-none flex items-center justify-center sm:hidden z-50 fixed h-[5rem] w-[5rem] bottom-[4rem] right-[4rem]">
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
      </div>
      <div
        onClick={toggleMenuTimeline}
        className="block sm:hidden fixed top-[2rem] z-[90] right-[2rem]"
      >
        <div
          ref={(e) => (menuBars["topBar"] = e)}
          className=" fixed dark:bg-primary-dark right-[4rem] top-[20px] w-[5rem]  h-[3px] my-3 rounded-full bg-primary-light"
        ></div>
        <div
          ref={(e) => (menuBars["middleBar"] = e)}
          className=" fixed dark:bg-primary-dark right-[4rem] top-[30px] w-[6rem] h-[3px] my-3 rounded-full bg-primary-light"
        ></div>
        <div
          ref={(e) => (menuBars["bottomBar"] = e)}
          className="fixed dark:bg-primary-dark right-[4rem] top-[40px] w-[5rem] h-[3px] my-3 rounded-full bg-primary-light"
        ></div>
      </div>
      <nav
        ref={(e) => (menuBars["navBar"] = e)}
        className="block sm:hidden fixed top-[0] right-[0] bg-[#de596d] dark:bg-[#a8162c] px-8 py-8 h-[100vh] z-[70] w-full translate-x-[100%]"
      >
        <ul className="text-[#fff] text-[4rem] fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          {list.map((items, index) => {
            return (
              <li
               
                ref={(e) => (listRefs.current[index] = e)}
                key={index}
                className="cursor-pointer my-8"
              >
                <Link to={items.to} spy={true} smooth={true}>
                  <p  onClick={toggleMenuTimeline} className="" ref={(e) => (menuBars["listItems"] = e)}>
                    {items.name}
                  </p>
                </Link>
              </li>
            );
          })}

          <li
            onClick={toggleMenuTimeline} 
            ref={(e) => (menuBars["resume"] = e)}
            className=" text-center cursor-pointer my-10 border border-[#fff] px-4 py-2 rounded-md"
          >
            <a href="https://drive.google.com/file/d/13Rij9kFpMmfUgF93cYBiZx8726qWGYnU/view">Resume</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavMobile;
