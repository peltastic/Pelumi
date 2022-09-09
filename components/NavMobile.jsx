import { Link } from "react-scroll";
import { useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import {
  navRotate,
  slideOutVariant,
  slideInVariant,
  fadeUp,
} from "../variants/variants";

const NavMobile = () => {
  const [openSideBar, setOpenSidebar] = useState(false);
  const list = [
    { to: "home", name: "Home" },
    { to: "about", name: "About Me" },
    { to: "projects", name: "Projects" },
    { to: "contact", name: "Contact Me" },
  ];
  const sidebar = (height) => {
    return {
      open: {
        clipPath: `circle(${height * 2 + 200}px at 90vw 6rem)`,
        transition: {
          type: "spring",
          stiffness: 20,
          restDelta: 2,
        },
      },
      close: {
        clipPath: "circle(0px at 90vw 6rem)",
        transition: {
          // delay: 0.5,
          type: "spring",
          stiffness: 400,
          damping: 40,
        },
      },
    };
  };

  return (
    <>
      <button
        onClick={() => {
          setOpenSidebar(!openSideBar);
        }}
        className="outline-none block sm1:hidden fixed z-[100] w-[45px] h-[30px] right-[3rem] top-[3rem] "
      >
        <motion.div
          animate={openSideBar ? "open" : "close"}
          variants={navRotate(45)}
          className="absolute top-0 right-[1rem] bg-secondary h-[4px] w-[40px] rounded-full"
        ></motion.div>
        <motion.div
          animate={openSideBar ? "open" : "close"}
          variants={slideOutVariant(100)}
          className="absolute top-4 right-[1rem] bg-secondary h-[4px] w-[45px] rounded-full"
        ></motion.div>
        <motion.div
          animate={openSideBar ? "open" : "close"}
          variants={navRotate(-45)}
          className="absolute top-8 right-[1rem] bg-secondary h-[4px] w-[35px] rounded-full"
        ></motion.div>
      </button>
      <motion.nav
        variants={sidebar(1000)}
        className="bg-dark10 z-[90] block sm:hidden fixed top-[0rem] right-[0rem] h-screen w-full"
        animate={openSideBar ? "open" : "close"}
      >
        <motion.ul className="text-[#fff] text-[4rem] fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          {list.map((items, index) => {
            return (
              <motion.li
                animate={openSideBar ? "visible" : "hidden"}
                variants={fadeUp(0.5 + index * 0.1)}
                key={index}
                className="cursor-pointer my-8"
                
              >
                <Link to={items.to} spy={true} smooth={true}>
                  <p onClick={() => setOpenSidebar(!openSideBar)} className="">{items.name}</p>
                </Link>
              </motion.li>
            );
          })}
          <motion.li
            animate={openSideBar ? "visible" : "hidden"}
            variants={fadeUp(0.5 + 5 * 0.1)}
            className=" text-center cursor-pointer my-10 border border-[#fff] px-4 py-2 rounded-md"
          >
            <a href="https://drive.google.com/file/d/1NxXpHe2mnfo0wUgM75i4zfE81U9oPKtQ/view?usp=sharing">
              Resume
            </a>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </>
  );
};

export default NavMobile;
