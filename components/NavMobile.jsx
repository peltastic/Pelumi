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
        clipPath: `circle(${height * 2 + 200}px at 93vw 4rem)`,
        transition: {
          type: "spring",
          stiffness: 20,
          restDelta: 2,
        },
      },
      close: {
        clipPath: "circle(0px at 93vw 4rem)",
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
    <div className="bg-[#000]  w-full h-[60px] z-40 fixed top-0 left-0 block sm:hidden "></div>
      <button
        onClick={() => {
          setOpenSidebar(!openSideBar);
        }}
        className="outline-none block sm:hidden fixed z-[100] w-[45px] h-[30px] right-[4rem] top-[5rem] "
      >
        <motion.div
          animate={openSideBar ? "open" : "close"}
          variants={navRotate(45)}
          className="absolute top-0 right-[1rem] bg-primary-dark h-[4px] w-[30px] rounded-full"
        ></motion.div>
        <motion.div
          animate={openSideBar ? "open" : "close"}
          variants={slideOutVariant(100)}
          className="absolute top-6 right-[1rem] bg-primary-dark h-[4px] w-[35px] rounded-full"
        ></motion.div>
        <motion.div
          animate={openSideBar ? "open" : "close"}
          variants={navRotate(-45)}
          className="absolute top-12 right-[1rem] bg-primary-dark h-[4px] w-[25px] rounded-full"
        ></motion.div>
      </button>
      <motion.nav
        variants={sidebar(1000)}
        className="bg-[#7aff1b] z-[90] block sm:hidden fixed top-[0rem] right-[0rem] h-screen w-full"
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
            <a href="https://drive.google.com/file/d/13Rij9kFpMmfUgF93cYBiZx8726qWGYnU/view">
              Resume
            </a>
          </motion.li>
        </motion.ul>
      </motion.nav>
      {/* <motion.nav 
      animate={openSideBar ? "open" : "close"}
       className="block sm:hidden fixed top-[0] right-[0] bg-[#a8162c] px-8 py-8 h-[100vh] z-[70] w-full translate-x-[100%]">
       
        
      </motion.nav> */}
    </>
  );
};

export default NavMobile;
