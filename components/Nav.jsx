import { useContext } from "react";
import { DarkModeIcon, Logo, LightModeIcon } from "./Icons";
import { Link } from "react-scroll";
import { ThemeContext } from "../components/ThemeContext";

const Nav = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <nav className="  mx-auto fixed z-[100] bg-primary-light dark:bg-primary-dark px-12 py-6 top-[2rem] left-[50%] -translate-x-[50%] rounded-lg w-[90%] hidden sm:flex items-center">
      <Logo />
      <ul className="flex items-center ml-auto text-[#fff] text-2xl">
        <li className="mx-5 cursor-pointer">
          <Link to="home" spy={true} smooth={true}>
            <p>Home</p>
          </Link>
        </li>
        <li className="mx-5 cursor-pointer">
          <Link to="about" spy={true} smooth={true}>
            <p>About Me</p>
          </Link>
        </li>
        <li className="mx-5 cursor-pointer">
          <Link to="projects" spy={true} smooth={true}>
            <p>Projects</p>
          </Link>
        </li>
        <li className="mx-5 cursor-pointer">
          <Link to="contact" spy={true} smooth={true}>
            <p>Contact Me</p>
          </Link>
        </li>
        <li className=" mx-5 cursor-pointer border border-[#fff] px-4 py-2 rounded-md">
          <a href="https://drive.google.com/file/d/13Rij9kFpMmfUgF93cYBiZx8726qWGYnU/view">Resume</a>
        </li>
        <li className="cursor-pointer flex items-center">
          {theme === "light" ? (
            <button
              className=""
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <DarkModeIcon />
            </button>
          ) : (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <LightModeIcon />
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
