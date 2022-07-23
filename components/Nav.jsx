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
    <>
    <div className="fixed z-[61] sm:z-[130] top-[5rem] sm:top-[2rem] left-[4rem] sm:left-[7rem]">
      <Logo />
    </div>
      <nav className="bg-gradient-to-b from-[#000] to-[#000000f2]  mx-auto fixed z-[100]  px-12 py-10 top-0 left-[50%] -translate-x-[50%] w-[98%] hidden sm:flex items-center">
        <ul className="flex items-center ml-auto text-[#fff] text-2xl">
          {navItem.map((item, index) => {
            return (
              <motion.li key={index} className="mx-5 cursor-pointer">
                <Link to={item.to} spy={true} smooth={true}>
                  <motion.p
                    variants={fadeUp(5.5 + index * 0.2)}
                    initial="hidden"
                    animate="visible"
                    className="text-[#fff]"
                  >
                    {item.content}
                  </motion.p>
                </Link>
              </motion.li>
            );
          })}

          <motion.li
            variants={slideInVariant(5.5, 40)}
            initial="hidden"
            animate="visible"
            className=" mx-5 cursor-pointer border border-primary-dark px-4 py-2 rounded-md"
          >
            <motion.a href="https://drive.google.com/file/d/1fq9kFfzG7CV9Pwj_RMH-vZSAdzYJg9Wq/view">
              Resume
            </motion.a>
          </motion.li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
