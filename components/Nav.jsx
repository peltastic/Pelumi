import { Logo } from "./Icons";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeUp, slideInVariant } from "../variants/variants";

const Nav = () => {
  const navItem = [
    { to: "home", content: "Home" },
    { to: "about", content: "About Me" },
    { to: "projects", content: "Projects" },
    { to: "contact", content: "Contact Me" },
  ];

  return (
    <nav className="flex items-center py-10 text-[#fff]">
      <h1 className="font-semi items-centerbold text-2xl mr-auto font-alfa mt-4 sm1:mt-0">
        Pelumi
      </h1>
      <ul className="hidden sm1:flex text-3xl">
        <Link to="home" spy={true} smooth={true}>
          <li className="mr-12 cursor-pointer">
            <p className="hover:text-secondary">Home</p>
          </li>
        </Link>
        <Link to="about" spy={true} smooth={true}>
          <li className="mr-12 cursor-pointer hover:text-secondary">
            <p>About</p>
          </li>
        </Link>
        <Link to="project" spy={true} smooth={true}>
          <li className="mr-12 cursor-pointer hover:text-secondary">
            <p>Projects</p>
          </li>
        </Link>
        <Link to="contact" spy={true} smooth={true}>
          <li className="mr-12 cursor-pointer hover:text-secondary">
            <p>Contact</p>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
