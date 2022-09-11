import { Link } from "react-scroll";
import { useState } from "react";
import { motion } from "framer-motion";
import { navRotate, slideOutVariant, fadeUp } from "../variants/variants";

const NavMobile = () => {
  const [openSideBar, setOpenSidebar] = useState(false);
  const list = [
    { to: "home", name: "Home" },
    { to: "about", name: "About Me" },
    { to: "projects", name: "Projects" },
    { to: "contact", name: "Contact Me" },
  ];

  return (
    <>
      <button
        onClick={() => {
          setOpenSidebar(!openSideBar);
        }}
        className="outline-none block sm1:hidden fixed z-[100] w-[45px] h-[30px] right-[2rem] top-[3rem] "
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
        className="bg-dark10 z-[90] block sm:hidden fixed top-[0rem] right-[0rem] h-screen w-full"
        initial={{x:"100%"}}
        animate={{ x: openSideBar ? 0 : "100%" }}
      >
        <motion.ul
          initial={{ display: "none" }}
          transition={{ delay: 2 }}
          animate={{ display: "block" }}
          className="text-[#fff] text-[4rem] fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
        >
          {list.map((items, index) => {
            return (
              <motion.li
                animate={openSideBar ? "visible" : "hidden"}
                variants={fadeUp(0.5 + index * 0.1)}
                key={index}
                className="cursor-pointer my-8"
              >
                <Link to={items.to} spy={true} smooth={true}>
                  <p
                    onClick={() => setOpenSidebar(!openSideBar)}
                    className="text-5xl my-12"
                  >
                    {items.name}
                  </p>
                </Link>
              </motion.li>
            );
          })}
          <motion.li
            animate={openSideBar ? "visible" : "hidden"}
            variants={fadeUp(0.5 + 5 * 0.1)}
            className=" text-center cursor-pointer text-5xl my-10 border border-[#fff] px-4 py-2 rounded-md"
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
